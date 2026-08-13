const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/dht/WorkBuddy/少儿英语 自然拼读';
// 无歧义字符集（去掉 0/O/1/I/l）
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function rnd(n){ let s=''; for(let i=0;i<n;i++) s+=ALPHA[Math.floor(Math.random()*ALPHA.length)]; return s; }
const seats = [];
for (let i=1;i<=30;i++){ const id=String(i).padStart(2,'0'); seats.push({ id, pwd: rnd(4) }); }

// 写 seats.js
const header = `/* =========================================================================
 * 座位系统配置（座位模式）
 * - 30 个座位，每人一个专属链接（?seat=XX），数据按座位命名空间完全隔离。
 * - pwd 为本座位口令（静态方案下的「软钥匙」）：首开输口令完成本机绑定，之后免输；
 *   换设备/清缓存/隐身模式需重新输入。口令重置请联系老师更新本文件后重新部署。
 * - 注意：静态方案中口令明文存在于本文件，任何人查看源码可见，属软性防护，
 *   无法做到真正的「一人一号」。请告知学生勿转发链接与口令。
 * ========================================================================= */
window.SEATS = ${JSON.stringify(seats, null, 2)};

// 座位模式说明（首屏 / 锁屏可见）
window.SEAT_HELP = [
  '✅ 座位模式说明（已上线 30 个座位）',
  '· 每人一个专属链接，数据按座位完全隔离（各自独立的 localStorage 命名空间，互不串档）。',
  '· 首次打开链接：输入本座位口令完成设备绑定 → 进入系统；之后本机免输口令。',
  '· 换设备打开：需再次输入口令；口令是真正的钥匙。',
  '· 防共用为软性防护：清缓存 / 换浏览器 / 隐身模式可绕过，请告知学生勿转发链接与口令。',
  '· 真正 100% 一人一号需后端账号体系，当前静态方案无法做到。',
  '· 口令重置：如需收回或更换某座位口令，把新口令告诉老师，更新后重新部署（链接不变）。'
].join('\\n');
`;
fs.writeFileSync(path.join(dir,'seats.js'), header, 'utf8');

// 输出分发表（markdown）
let md = '| 座位 | 专属链接 | 口令 |\n| --- | --- | --- |\n';
const base = 'https://fba73722c820479cb7417ca31051103a.gz5.agentos-app.net/';
seats.forEach(s=>{ md += `| ${s.id} | ${base}gate.html?seat=${s.id} | ${s.pwd} |\n`; });
fs.writeFileSync(path.join(dir,'SEATS_TABLE.md'), md, 'utf8');
console.log('生成完成：30 个座位');
console.log(md);
