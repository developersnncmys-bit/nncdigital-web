import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync, statSync } from 'fs'

// clip id -> short original business caption (no commas/colons/apostrophes)
const ITEMS = [
  ['3252149', 'One CRM for your whole team'],
  ['7556433', 'Reach customers where they are'],
  ['4685169', 'Qualify leads around the clock'],
  ['3209552', 'Know where your business stands'],
  ['5119237', 'Decisions backed by real numbers'],
  ['3126361', 'Forecast your next move'],
  ['6952022', 'Close more deals faster'],
  ['7652166', 'Grow without the chaos'],
  ['6100414', 'Build relationships that last'],
  ['7550765', 'Never miss an enquiry again'],
].filter(([id]) => existsSync(`clips/${id}.mp4`) && statSync(`clips/${id}.mp4`).size > 100000)

const W = 1600, H = 1000, START = 0.8, DUR = 2.6
const inputs = ITEMS.flatMap(([id]) => ['-i', `clips/${id}.mp4`])
const parts = ITEMS.map(([, cap], i) =>
  `[${i}:v]trim=${START}:${START + DUR},setpts=PTS-STARTPTS,` +
  `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=30,` +
  `drawtext=fontfile=capfont.ttf:text=${cap}:fontcolor=white:fontsize=56:` +
  `x=(w-text_w)/2:y=h-text_h-120:box=1:boxcolor=0x0b1a33@0.55:boxborderw=28[v${i}]`
).join(';')
const concatIn = ITEMS.map((_, i) => `[v${i}]`).join('')
const filter = `${parts};${concatIn}concat=n=${ITEMS.length}:v=1:a=0[out]`

console.log(`stitching ${ITEMS.length} clips @ ${W}x${H} -> public/showcase.mp4`)
execFileSync(
  ffmpegPath,
  ['-y', ...inputs, '-filter_complex', filter, '-map', '[out]',
   '-c:v', 'libx264', '-preset', 'medium', '-crf', '22',
   '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
   'public/showcase.mp4'],
  { stdio: 'inherit' }
)
execFileSync(
  ffmpegPath,
  ['-y', '-i', 'public/showcase.mp4', '-frames:v', '1', '-q:v', '2', 'public/showcase.jpg'],
  { stdio: 'inherit' }
)
console.log('done')
