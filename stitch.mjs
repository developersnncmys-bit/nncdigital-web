import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync, statSync } from 'fs'

const ids = ['3252149', '7556433', '4685169', '6952022', '6100414', '7550765']
const clips = ids
  .map((id) => `clips/${id}.mp4`)
  .filter((f) => existsSync(f) && statSync(f).size > 100000)

if (clips.length < 3) {
  console.error('Not enough clips downloaded:', clips.length)
  process.exit(1)
}

const W = 1280, H = 800, START = 0.8, DUR = 3.2
const inputs = clips.flatMap((c) => ['-i', c])
const parts = clips
  .map(
    (_, i) =>
      `[${i}:v]trim=${START}:${START + DUR},setpts=PTS-STARTPTS,` +
      `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=30[v${i}]`
  )
  .join(';')
const concatIn = clips.map((_, i) => `[v${i}]`).join('')
const filter = `${parts};${concatIn}concat=n=${clips.length}:v=1:a=0[out]`

console.log(`stitching ${clips.length} clips -> public/hero-reel.mp4`)
execFileSync(
  ffmpegPath,
  ['-y', ...inputs, '-filter_complex', filter, '-map', '[out]',
   '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '25',
   '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an',
   'public/hero-reel.mp4'],
  { stdio: 'inherit' }
)
// poster frame
execFileSync(
  ffmpegPath,
  ['-y', '-i', 'public/hero-reel.mp4', '-frames:v', '1', '-q:v', '3', 'public/hero-reel.jpg'],
  { stdio: 'inherit' }
)
console.log('done')
