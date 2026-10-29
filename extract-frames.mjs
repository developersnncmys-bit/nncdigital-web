import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync } from 'fs'

// clip id -> output name (themed for reuse across pages)
const MAP = [
  ['3252149', 'scene-team'],        // team meeting
  ['7556433', 'scene-mobile'],      // smartphones / customers
  ['4685169', 'scene-support'],     // working late / support
  ['3209552', 'scene-dashboard'],   // people at computers
  ['5119237', 'scene-data'],        // numbers / analytics
  ['3126361', 'scene-planning'],    // planning / forecast
  ['6952022', 'scene-deal'],        // closing / handshake
  ['7652166', 'scene-growth'],      // growth
  ['6100414', 'scene-people'],      // relationships
  ['7550765', 'scene-office'],      // office / enquiry
]

const W = 1600, H = 1000
for (const [id, name] of MAP) {
  const src = `clips/${id}.mp4`
  if (!existsSync(src)) { console.log('skip', id); continue }
  execFileSync(
    ffmpegPath,
    ['-y', '-ss', '1.2', '-i', src, '-frames:v', '1',
     '-vf', `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}`,
     '-q:v', '3', `public/img/${name}.jpg`],
    { stdio: 'ignore' }
  )
  console.log('extracted', name)
}
console.log('done')
