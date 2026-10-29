import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync, statSync } from 'fs'

// Indian students in groups, at laptops, studying / talking together
const ORDER = [
  '9198424', // group studying at laptops in library
  '9198355', // Indian student + peer at a laptop, studying
  '8198513', // group with laptops, discussion
  '9198353', // Indian student at laptop with peer
  '9198421', // group at laptops
  '9198354', // Indian student + peer at a laptop
  '9198436', // group studying with laptop
  '9198351', // Indian student at laptop with peer
].filter((id) => existsSync(`clips-edu/${id}.mp4`) && statSync(`clips-edu/${id}.mp4`).size > 100000)

const W = 1280, H = 880, START = 2.0, DUR = 2.6
const inputs = ORDER.flatMap((id) => ['-i', `clips-edu/${id}.mp4`])
const parts = ORDER.map((_, i) =>
  `[${i}:v]trim=${START}:${START + DUR},setpts=PTS-STARTPTS,` +
  `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=30[v${i}]`
).join(';')
const concatIn = ORDER.map((_, i) => `[v${i}]`).join('')
const filter = `${parts};${concatIn}concat=n=${ORDER.length}:v=1:a=0[out]`

console.log(`stitching ${ORDER.length} clips @ ${W}x${H} -> public/training-reel.mp4`)
execFileSync(
  ffmpegPath,
  ['-y', ...inputs, '-filter_complex', filter, '-map', '[out]',
   '-c:v', 'libx264', '-preset', 'medium', '-crf', '23',
   '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
   'public/training-reel.mp4'],
  { stdio: 'inherit' }
)
execFileSync(
  ffmpegPath,
  ['-y', '-i', 'public/training-reel.mp4', '-frames:v', '1', '-q:v', '2', 'public/training-reel.jpg'],
  { stdio: 'inherit' }
)
const kb = Math.round(statSync('public/training-reel.mp4').size / 1024)
console.log('done ->', kb, 'KB')
