import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync, statSync, mkdirSync, rmSync } from 'fs'

mkdirSync('clips-edu', { recursive: true })
rmSync('sheet2', { recursive: true, force: true })
mkdirSync('sheet2', { recursive: true })
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

const IDS = [
  '9198354', '9198424', '9198421', '9198436', '8198513', '8198511', '8199334', '6146493',
  '8125808', '6145947', '9198425', '9198351', '6145667', '6145675', '8199400', '6145665',
]

const kept = []
let seq = 0
for (const id of IDS) {
  const out = `clips-edu/${id}.mp4`
  if (!existsSync(out) || statSync(out).size < 100000) {
    try { execFileSync('curl', ['-sL', '--max-time', '30', '-A', UA, '-o', out, `https://www.pexels.com/download/video/${id}/`], { stdio: 'ignore' }) } catch (e) {}
  }
  if (!(existsSync(out) && statSync(out).size > 100000)) { console.log(id, 'DL FAIL'); continue }
  let stderr = ''
  try { execFileSync(ffmpegPath, ['-hide_banner', '-i', out], { stdio: ['ignore', 'ignore', 'pipe'] }) } catch (e) { stderr = e.stderr ? e.stderr.toString() : '' }
  const m = stderr.match(/Stream #0:\d+.*Video:.*?(\d{3,5})x(\d{3,5})/)
  const d = stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/)
  const w = m ? +m[1] : 0, h = m ? +m[2] : 0
  const dur = d ? parseInt(d[1]) * 3600 + parseInt(d[2]) * 60 + parseFloat(d[3]) : 0
  if (w < 1280 || w < h || dur < 4) { console.log(id, `skip (${w}x${h} ${dur.toFixed(1)}s)`); continue }
  const t = Math.min(2.0, dur / 2)
  execFileSync(ffmpegPath, ['-y', '-ss', String(t), '-i', out, '-frames:v', '1',
    '-vf', `scale=360:202:force_original_aspect_ratio=increase,crop=360:202,setsar=1,drawtext=fontfile=capfont.ttf:text='${seq}\\: ${id}':x=8:y=8:fontsize=20:fontcolor=white:box=1:boxcolor=black@0.65:boxborderw=6`,
    `sheet2/f${seq}.jpg`], { stdio: 'ignore' })
  kept.push(id)
  seq++
  console.log(id, `OK seq=${seq - 1} (${w}x${h} ${dur.toFixed(1)}s)`)
}

const cols = 4
const rows = Math.ceil(kept.length / cols)
execFileSync(ffmpegPath, ['-y', '-start_number', '0', '-i', 'sheet2/f%d.jpg', '-frames:v', '1', '-vf', `tile=${cols}x${rows}`, 'sheet2/contact.jpg'], { stdio: 'ignore' })
console.log('kept:', kept.join(', '))
