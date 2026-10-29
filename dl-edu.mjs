import { execFileSync } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import { existsSync, statSync, mkdirSync } from 'fs'

mkdirSync('clips-edu', { recursive: true })
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
const IDS = [
  // students studying
  '5962956', '7128684', '6219763', '8108844', '5676084',
  // online learning / laptop
  '4487962', '5904573', '5999063', '8499735',
  // student mobile phone
  '6672280', '7092134', '8142268', '6269218',
  // teacher / classroom
  '5897643', '5200348', '5904545', '8198498', '6964495',
]

for (const id of IDS) {
  const out = `clips-edu/${id}.mp4`
  if (!existsSync(out) || statSync(out).size < 100000) {
    try {
      execFileSync('curl', ['-sL', '--max-time', '40', '-A', UA, '-o', out, `https://www.pexels.com/download/video/${id}/`], { stdio: 'ignore' })
    } catch (e) {}
  }
  let info = 'DOWNLOAD FAIL'
  if (existsSync(out) && statSync(out).size > 100000) {
    let stderr = ''
    try {
      execFileSync(ffmpegPath, ['-hide_banner', '-i', out], { stdio: ['ignore', 'ignore', 'pipe'] })
    } catch (e) {
      stderr = e.stderr ? e.stderr.toString() : ''
    }
    const m = stderr.match(/Stream #0:\d+.*Video:.*?(\d{3,5})x(\d{3,5})/)
    const d = stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/)
    const w = m ? +m[1] : 0, h = m ? +m[2] : 0
    const dur = d ? (parseInt(d[1]) * 3600 + parseInt(d[2]) * 60 + parseFloat(d[3])) : 0
    const kb = Math.round(statSync(out).size / 1024)
    const orient = w >= h ? 'LANDSCAPE' : 'portrait'
    info = `${w}x${h} ${orient} ${dur.toFixed(1)}s ${kb}KB`
  }
  console.log(id, info)
}
console.log('done')
