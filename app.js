/* =========================================================================
 * 少儿英语自然拼读学习系统 · 应用逻辑 (app.js)
 * 总控路由 + 14 功能模块 + 本地状态(localStorage) + 浏览器语音(Web Speech API)
 * 座位模式：进入前需通过 gate.html 座位口令校验，数据按座位号隔离存储。
 * 纯前端：无需服务器、无需 API Key、可离线运行（发音由浏览器 TTS 实时合成）。
 * ========================================================================= */
(function () {
  'use strict';

  /* ====================== 常量 ====================== */
  // 座位模式：STORE_KEY 按座位命名空间动态赋值（每个座位一份独立存储，互不串档）
  let STORE_KEY = 'phonics_state_v1';
  const SEAT_NS = 'phonics_seat';
  let SEAT = { id: null };

  const NAV_META = {
    home:    { t: '学习首页', s: '欢迎来到自然拼读乐园！' },
    library: { t: '考点库管理', s: '字母 — 音素 — 例词 三级考点库' },
    practice:{ t: '智能刷题', s: '个性化拼读练习 · 即时反馈' },
    wrong:   { t: '错题回顾', s: '把错题变成可巩固的复习资源' },
    plan:    { t: '复习计划', s: '基于艾宾浩斯遗忘曲线的复习节奏' },
    mindmap: { t: '知识点思维导图', s: '把零散规则结构化呈现' },
    exam:    { t: '模拟考试', s: '仿真试卷 + 诊断报告' },
    recite:  { t: '背诵打卡', s: '词表与韵文 · 语音示范 · 连续打卡' },
    rule:    { t: '规则说明', s: '用孩子懂的类比讲透一条规则' },
    quiz:    { t: '测试题', s: '单点知识快速自测' },
    reading: { t: '文章阅读题', s: '可解码短文 + 阅读理解' },
    lecture: { t: '名师讲课', s: '课前导入 + 名师课程 · 听课跟读' },
    checkin: { t: '打卡学习', s: '听·说·读·写 成长档案' },
    pronounce:{ t: '发音评测', s: '跟读评测 · 易混纠音 · 口型指导 · 闯关' },
    curriculum:{ t: '学习路线', s: '8课大冒险 · 分步操作指引 · 关键提示' },
    curriculumLesson:{ t: '课程详情', s: '每关专属学习页 · 预习/学习/复习/评测' }
  };

  const MODULES = [
    { id:'library', no:'01', name:'考点库管理', icon:'📚', color:'#5B8DEF', desc:'字母—音素—例词三级库，点一点听发音' },
    { id:'practice',no:'02', name:'智能刷题',   icon:'✏️', color:'#FF9F43', desc:'听音辨字/看字读音/选词填空/图文连线' },
    { id:'wrong',   no:'03', name:'错题回顾',   icon:'🔁', color:'#FF6B9D', desc:'归类错因·变式巩固·掌握进度' },
    { id:'plan',    no:'04', name:'复习计划',   icon:'🗓️', color:'#54C9A6', desc:'艾宾浩斯间隔重复排程' },
    { id:'mindmap', no:'05', name:'思维导图',   icon:'🧠', color:'#9B6BF2', desc:'层级清晰的知识图谱' },
    { id:'exam',    no:'06', name:'模拟考试',   icon:'📝', color:'#E8743B', desc:'仿真组卷 + 薄弱项诊断' },
    { id:'recite',  no:'07', name:'背诵打卡',   icon:'🎤', color:'#3FB6C9', desc:'词表/韵文跟读·连续天数' },
    { id:'rule',    no:'08', name:'规则说明',   icon:'💡', color:'#F2872A', desc:'口诀+正例反例+发音拆解' },
    { id:'quiz',    no:'09', name:'测试题',     icon:'✅', color:'#5B8DEF', desc:'单点知识快速自测过关' },
    { id:'reading', no:'10', name:'文章阅读题', icon:'📖', color:'#54C9A6', desc:'可解码短文+理解检测' },
    { id:'lecture', no:'11', name:'名师讲课',    icon:'👩‍🏫', color:'#2BB3C0', desc:'课前导入 + 名师课程·播放·章节字幕' },
    { id:'checkin', no:'12', name:'打卡学习',   icon:'🌟', color:'#FF9F43', desc:'听/说/读/写 成长周报' },
    { id:'pronounce',no:'13', name:'发音评测', icon:'🎙️', color:'#E8743B', desc:'跟读评测/易混纠音/口型指导/闯关' },
    { id:'curriculum',no:'14', name:'学习路线', icon:'🗺️', color:'#9B6BF2', desc:'8课大冒险·分步操作指引·关键提示' }
  ];

  const EMOJI = {apple:'🍎',ant:'🐜',ax:'🪓',ball:'⚽',bus:'🚌',book:'📚',cat:'🐱',cup:'🥤',cap:'🧢',dog:'🐶',duck:'🦆',desk:'🪑',egg:'🥚',elephant:'🐘',pen:'🖊️',fish:'🐟',fan:'🌀',fox:'🦊',goat:'🐐',gate:'🚪',girl:'👧',hat:'🎩',hen:'🐔',house:'🏠',igloo:'🛖',pig:'🐷',jump:'🦘',jet:'✈️',jam:'🍓',kite:'🪁',key:'🔑',king:'👑',lion:'🦁',leg:'🦵',leaf:'🍃',monkey:'🐵',milk:'🥛',map:'🗺️',nest:'🪺',nose:'👃',net:'🥅',octopus:'🐙',ox:'🐂',pencil:'✏️',pan:'🍳',queen:'👸',quiet:'🤫',rabbit:'🐰',red:'🔴',rain:'🌧️',sun:'☀️',snake:'🐍',six:'6️⃣',tiger:'🐯',ten:'🔟',top:'🔝',umbrella:'☂️',up:'⬆️',bug:'🐛',van:'🚐',violin:'🎻',vest:'🦺',water:'💧',worm:'🪱',web:'🕸️',box:'📦',yellow:'💛',yes:'✅',yoyo:'🪀',zebra:'🦓',zoo:'🦁',zip:'🤐',ship:'🚢',shoe:'👟',chip:'🍟',chair:'🪑',watch:'⌚',three:'3️⃣',thumb:'👍',this:'👉',whale:'🐋',wheel:'🛞',white:'⚪',lock:'🔒',sock:'🧦',cake:'🍰',name:'🏷️',bike:'🚲',time:'⏰',note:'📝',rope:'🪢',bone:'🦴',cube:'🧊',cute:'😊',mule:'🐴',mail:'✉️',play:'🎮',bee:'🐝',tree:'🌳',boat:'🚤',coat:'🧥',snow:'❄️',moon:'🌕',food:'🍔',car:'🚗',star:'⭐',farm:'🚜',fork:'🍴',corn:'🌽',horse:'🐴',her:'👩',bird:'🐦',turn:'🔄',mat:'🟫',glad:'😀',match:'🤝',pit:'🕳️',dig:'⛏️',fit:'💪',cape:'🦸',tap:'👆',tape:'📼',sheep:'🐑',sweet:'🍬',trip:'🧳',born:'👶',warm:'🔥',happy:'😄',glad:'😀'};

  /* ====================== 状态层 ====================== */
  // 注意：state 在 init 时加载；座位模式下 STORE_KEY 按座位号命名，数据按座位隔离
  let state = null;
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {}
    return defaultState();
  }
  function defaultState() {
    return {
      nickname: '小勇士', avatar: '🐯',
      unitStats: {},      // unitId -> {seen,correct,wrong}
      wrong: [],          // {key,unitId,unitLabel,sym,word,type,q,userAns,correctAns,count,streak}
      plan: null,         // {days:[{date,newItems,revItems,done}], created}
      checkins: {},       // dateStr -> {listen,speak,read,write,recite:[]}
      lastCheckinDate: null,
      stats: { practice: 0, exam: 0 },
      pronScores: []      // 发音评测记录：{date,target,sym,score,mode} mode='mic'|'self'
    };
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {} }

  /* ====================== 工具 ====================== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }
  function emojiFor(w) { return EMOJI[w] || '📝'; }
  function todayStr() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function pickN(arr, n) { return shuffle(arr).slice(0, n); }
  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }
  function openModal(html) { $('#modalBox').innerHTML = html; $('#modalMask').classList.add('show'); }
  function closeModal() { $('#modalMask').classList.remove('show'); }
  $('#modalMask').addEventListener('click', e => { if (e.target.id === 'modalMask') closeModal(); });

  /* ====================== 语音 (Web Speech API) ======================
   * 说明：本应用为「开箱即用、离线可用」的纯前端应用，未内置任何 mp3/ogg 音频文件。
   * 26 个字母及所有单词的「发音资源」一律由浏览器内置的语音合成引擎（TTS）实时生成，
   * 因此无需联网、无需配置即可播放；下方 speak() 已针对移动端做了加固。
   */
  // 预加载英文语音（移动端语音列表异步加载，必须等 onvoiceschanged）
  let _voices = [], _voiceReady = false;
  function loadVoices() {
    try { _voices = window.speechSynthesis.getVoices() || []; } catch (e) { _voices = []; }
    _voiceReady = _voices.length > 0;
  }
  function pickVoice() {
    if (!_voices.length) return null;
    const pref = ['en-US', 'en-GB', 'en_US', 'en_GB'];
    for (const p of pref) {
      const v = _voices.find(x => (x.lang || '').replace('_', '-') === p);
      if (v) return v;
    }
    return _voices.find(x => (x.lang || '').startsWith('en')) || null;
  }
  function speak(text, lang) {
    lang = lang || 'en-US';
    if (!text) return;
    if (!('speechSynthesis' in window)) { toast('当前浏览器不支持语音发音'); return; }
    try {
      window.speechSynthesis.cancel();                 // 先清空队列，避免连点堆叠
      const u = new SpeechSynthesisUtterance(String(text));
      u.lang = lang; u.rate = 0.85; u.pitch = 1.05; u.volume = 1;
      const v = pickVoice(); if (v) u.voice = v;        // 指定英文语音，避免读成中文腔
      window.speechSynthesis.speak(u);
      // iOS/Safari 已知 bug：首句偶尔被立刻截断而不发声 → 320ms 后若仍未在播则补播一次
      const retry = setTimeout(function () {
        try { if (!window.speechSynthesis.speaking) window.speechSynthesis.speak(u); } catch (e) {}
      }, 320);
      u.onend = function () { clearTimeout(retry); };
      u.onerror = function () { clearTimeout(retry); };
    } catch (e) {}
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  /* ====================== 移动端音频解锁（兼容自动播放策略） ======================
   * 主流手机浏览器（iOS Safari / Android Chrome）要求「音频必须在用户手势内启动」，
   * 否则系统媒体声音被静音、点字母/单词都听不到。首次触摸或点击时：恢复 AudioContext
   * 并播放一段静音缓冲，解锁系统媒体声音；之后 <audio> 回放与 TTS 即可在手机上正常出声。
   */
  let _actx = null, _audioUnlocked = false;
  function getAudioCtx() {
    if (!_actx) { try { _actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { _actx = null; } }
    return _actx;
  }
  function unlockAudio() {
    if (_audioUnlocked) return;
    _audioUnlocked = true;
    const ctx = getAudioCtx();
    if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
    if (ctx) {
      try {
        const buf = ctx.createBuffer(1, 1, 22050);
        const src = ctx.createBufferSource(); src.buffer = buf; src.connect(ctx.destination); src.start(0);
      } catch (e) {}
    }
    if ('speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }  // 预热 TTS
    hideAudioHint();
  }
  function bindAudioUnlock() {
    const evs = ['pointerdown', 'touchstart', 'click', 'keydown'];
    const handler = function () { unlockAudio(); evs.forEach(e => document.removeEventListener(e, handler, true)); };
    evs.forEach(e => document.addEventListener(e, handler, true));
  }
  function showAudioHint() {
    if (_audioUnlocked) return;
    let h = document.getElementById('audioHint');
    if (!h) {
      h = document.createElement('div'); h.id = 'audioHint'; h.className = 'audio-hint';
      h.innerHTML = '🔊 轻触屏幕任意处，开启声音';
      document.body.appendChild(h);
    }
    requestAnimationFrame(() => h.classList.add('show'));
  }
  function hideAudioHint() { const h = document.getElementById('audioHint'); if (h) h.classList.remove('show'); }

  /* ====================== 语音识别（Web Speech API · 发音评测辅助） ======================
   * 说明：浏览器内置 SpeechRecognition 把孩子的「跟读」转成文字，再与标准词比对给分。
   * 若浏览器不支持（如部分 Safari / 隐身模式），自动降级为「家长/自评」三档按钮，保证开箱即用。
   */
  function micSupported() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); }
  function recognize(cb) {
    if (!micSupported()) { cb(null, 'unsupported'); return; }
    try {
      const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
      const r = new Rec();
      r.lang = 'en-US'; r.interimResults = false; r.maxAlternatives = 1; r.continuous = false;
      let done = false;
      r.onresult = e => { done = true; const txt = ((e.results[0][0].transcript) || '').toLowerCase().replace(/[^a-z]/g, ''); cb(txt, 'ok'); };
      r.onerror = e => { if (!done) cb(null, (e && e.error) || 'error'); };
      r.onend = () => { if (!done) cb(null, 'no-speech'); };
      r.start();
    } catch (e) { cb(null, 'error'); }
  }
  /* —— 真实麦克风录音（getUserMedia + MediaRecorder，本地完成，不依赖谷歌云识别） ——
   * 解决「麦克风录不了音」：原方案依赖浏览器 SpeechRecognition（需联网、国内常被墙）。
   * 现改为本地录音：录完可试听并对照标准音自评，彻底离线可用。
   */
  function micCaptureSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (window.MediaRecorder || window.webkitMediaRecorder));
  }
  function recordUser(opts) {
    opts = opts || {};
    if (!micCaptureSupported()) { opts.onErr && opts.onErr('unsupported'); return; }
    let stream, rec, chunks = [], ac, analyser, srcNode, raf, stopped = false;
    const MR = window.MediaRecorder || window.webkitMediaRecorder;
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
      stream = s;
      try {
        rec = new MR(stream);
        rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        rec.onstop = function () {
          let url = null;
          try { url = URL.createObjectURL(new Blob(chunks, { type: rec.mimeType || 'audio/webm' })); } catch (e) {}
          cleanup(); opts.onDone && opts.onDone(url);
        };
        rec.start();
        try {
          ac = new (window.AudioContext || window.webkitAudioContext)();
          analyser = ac.createAnalyser(); analyser.fftSize = 256;
          srcNode = ac.createMediaStreamSource(stream); srcNode.connect(analyser);
          const data = new Uint8Array(analyser.frequencyBinCount);
          (function loop() {
            if (stopped) return;
            analyser.getByteTimeDomainData(data);
            let sum = 0; for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; sum += v * v; }
            const rms = Math.sqrt(sum / data.length);
            opts.onLevel && opts.onLevel(Math.min(1, rms * 3.2));
            raf = requestAnimationFrame(loop);
          })();
        } catch (e) {}
        opts.onState && opts.onState('recording');
        setTimeout(function () { if (!stopped) stop(); }, opts.duration || 4000);
      } catch (e) { cleanup(); opts.onErr && opts.onErr('recorder'); }
    }).catch(function () {
      opts.onErr && opts.onErr(window.isSecureContext ? 'denied' : 'insecure');
    });
    function stop() {
      if (stopped) return; stopped = true;
      try { if (raf) cancelAnimationFrame(raf); } catch (e) {}
      try { if (rec && rec.state !== 'inactive') rec.stop(); } catch (e) { cleanup(); opts.onDone && opts.onDone(null); }
    }
    function cleanup() {
      try { if (srcNode) srcNode.disconnect(); } catch (e) {}
      try { if (ac) ac.close(); } catch (e) {}
      try { if (stream) stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    }
    recordUser._stop = stop;
  }

  function scoreFromText(target, txt) {
    target = (target || '').toLowerCase().replace(/[^a-z]/g, '');
    if (!txt || !target) return 0;
    if (txt === target) return 96;
    if (txt.indexOf(target) >= 0 || target.indexOf(txt) >= 0) return 80;
    let same = 0; for (let i = 0; i < target.length; i++) if (txt.indexOf(target[i]) >= 0) same++;
    return Math.max(20, Math.round(same / target.length * 58));
  }
  function pronOf(sym) {
    return (KB.pronunciation || []).find(p => p.sym === sym) || null;
  }
  function logPron(target, sym, score, mode) {
    state.pronScores.push({ date: todayStr(), target: target, sym: sym || '', score: score, mode: mode });
    if (state.pronScores.length > 400) state.pronScores = state.pronScores.slice(-400);
    save();
  }
  function pronGrade(score) {
    if (score >= 90) return { t: '准确', c: 'ok', emoji: '🌟' };
    if (score >= 70) return { t: '基本准确', c: 'warn', emoji: '⚠️' };
    return { t: '需要纠音', c: 'no', emoji: '🔴' };
  }

  /* ====================== 考点库扁平化 ====================== */
  const ALL_WORDS = [];
  const ALL_SYMS = [];
  KB.categories.forEach(c => c.units.forEach(u => {
    if (!ALL_SYMS.includes(u.sym)) ALL_SYMS.push(u.sym);
    u.words.forEach(w => ALL_WORDS.push(Object.assign({ unitId: u.id, unitLabel: u.label, sym: u.sym, ipa: u.ipa }, w)));
  }));
  function findUnit(id) { for (const c of KB.categories) for (const u of c.units) if (u.id === id) return u; return null; }
  function findWord(unitId, w) { const u = findUnit(unitId); return u ? u.words.find(x => x.w === w) : null; }

  /* ====================== 掌握度推导 ====================== */
  function masteryOf(unitId) {
    const s = state.unitStats[unitId];
    if (!s || !s.seen) return 'unlearned';
    if (s.wrong === 0 && s.correct >= 2) return 'mastered';
    return 'learning';
  }
  function recordAnswer(unitId, ok, type) {
    if (!unitId) return;
    const s = state.unitStats[unitId] || (state.unitStats[unitId] = { seen: 0, correct: 0, wrong: 0 });
    s.seen++; ok ? s.correct++ : s.wrong++;
    save();
  }
  const WRONG_TYPE_LABEL = { listen: '听音辨字', read: '看字读音', blank: '选词填空', match: '图文连线' };
  function logWrong(q, chosen) {
    if (!q || q.type === 'match' || !q.unitId) return;
    const u = findUnit(q.unitId);
    const key = q.unitId + '|' + q.word + '|' + q.type;
    const correctLabel = (q.options.find(o => o.correct) || {}).label || '';
    const existing = state.wrong.find(x => x.key === key);
    if (existing) { existing.count++; existing.streak = 0; existing.userAns = chosen; existing.correctAns = correctLabel; }
    else state.wrong.push({
      key, unitId: q.unitId, unitLabel: u ? u.label : '', sym: q.sym, word: q.word, type: q.type,
      q: (WRONG_TYPE_LABEL[q.type] || '') + ' · ' + (q.word || ''), userAns: chosen, correctAns: correctLabel, count: 1, streak: 0
    });
    save();
  }

  /* ====================== 题目生成 ====================== */
  function buildQuestion(unit, word, type) {
    const w = Object.assign({ unitId: unit.id, sym: unit.sym, ipa: unit.ipa }, word);
    if (type === 'listen') {
      const others = pickN(ALL_WORDS.filter(x => x.w !== w.w), 3).map(x => x.w);
      const opts = shuffle([w.w].concat(others));
      return { type, unitId: unit.id, word: w.w, sym: unit.sym, spoken: w.w,
        prompt: '🔊 仔细听，是哪个单词呢？', options: opts.map(o => ({ label: o, value: o, correct: o === w.w })),
        feedback: { correct: `太棒了！是「${w.w}」（${w.syl}），意思是「${w.m}」。`, wrong: `正确答案：「${w.w}」（${w.syl}）。再来听一遍吧～` } };
    }
    if (type === 'read') {
      const others = pickN(ALL_SYMS.filter(s => s !== unit.sym), 3);
      const opts = shuffle([unit.sym].concat(others));
      return { type, unitId: unit.id, word: w.w, sym: unit.sym, spoken: w.w,
        prompt: `听一听、看一看「${w.w}」，它的核心音发什么？`, options: opts.map(o => ({ label: o, value: o, correct: o === unit.sym })),
        feedback: { correct: `对啦！「${w.w}」里的核心音就是 ${unit.sym} ${unit.ipa}。`, wrong: `「${w.w}」的核心音是 ${unit.sym} ${unit.ipa} 哦。` } };
    }
    if (type === 'blank') {
      const others = pickN(ALL_WORDS.filter(x => x.w !== w.w), 3).map(x => x.w);
      const opts = shuffle([w.w].concat(others));
      return { type, unitId: unit.id, word: w.w, sym: unit.sym, spoken: w.w,
        prompt: `${emojiFor(w.w)} 「${w.m}」应该填哪个英文词？`, options: opts.map(o => ({ label: o, value: o, correct: o === w.w })),
        feedback: { correct: `没错！「${w.m}」就是 ${w.w}（${w.syl}）。`, wrong: `正确答案：「${w.w}」（${w.syl}），意思是「${w.m}」。` } };
    }
    return null;
  }
  function buildMatch(unit, n) {
    const ws = shuffle(unit.words).slice(0, n);
    return { type: 'match', unitId: unit.id, sym: unit.sym,
      pairs: ws.map(w => ({ en: w.w, zh: w.m, emoji: emojiFor(w.w), syl: w.syl, ipa: w.ipa })) };
  }

  // 依据易错权重选择 unit 列表
  function weightedUnits(pool, count) {
    const weighted = [];
    pool.forEach(u => { const wgt = 1 + (wrongCountOfUnit(u.id) * 2); for (let i = 0; i < wgt; i++) weighted.push(u); });
    const out = [];
    for (let i = 0; i < count; i++) out.push(rand(weighted));
    return out;
  }
  function wrongCountOfUnit(unitId) { return state.wrong.filter(x => x.unitId === unitId).reduce((a, b) => a + b.count, 0); }

  // 同类变式题（错题巩固）
  function variantQuestions(unit, n) {
    const types = ['listen', 'read', 'blank'];
    const qs = [];
    const ws = shuffle(unit.words).slice(0, n);
    ws.forEach(w => qs.push(buildQuestion(unit, w, rand(types))));
    return qs;
  }

  /* ====================== 通用测验引擎 ====================== */
  function runQuiz(host, questions, meta) {
    let idx = 0, correct = 0, total = questions.length, weak = {}, mismatch = 0, perQ = [];
    const wrap = el('div', 'quiz-wrap');
    host.innerHTML = ''; host.appendChild(wrap);

    function header() {
      const h = el('div', 'q-head');
      h.innerHTML = `<span class="qno">第 ${idx + 1} / ${total} 题</span><span class="chip">${esc(meta.label || '')}</span>`;
      return h;
    }
    function render() {
      wrap.innerHTML = '';
      wrap.appendChild(header());
      const q = questions[idx];
      if (q.type === 'match') renderMatch(wrap, q, () => finish(true));
      else renderMCQ(wrap, q, ok => finish(ok));
    }
    function finish(ok, chosen) {
      const q = questions[idx];
      if (q.type === 'match') { correct++; perQ.push({ unitId: q.unitId, ok: true, layerId: q.layerId }); }
      else { if (ok) correct++; else { weak[q.unitId] = (weak[q.unitId] || 0) + 1; if (meta.recordWrong !== false) logWrong(q, chosen); } perQ.push({ unitId: q.unitId, ok: !!ok, layerId: q.layerId }); }
      recordAnswer(q.unitId, ok, q.type);
      if (ok && meta.onCorrect) meta.onCorrect(q);
      idx++;
      if (idx >= total) return summary();
      render();
    }
    function summary() {
      if (meta.diagnose) return meta.diagnose({ correct, total, weak, perQ, wrap, onAgain: () => meta.onAgain ? meta.onAgain() : go(meta.back || 'practice'), onBack: () => go(meta.back || 'practice') });
      wrap.innerHTML = '';
      const pct = Math.round(correct / total * 100);
      const weakUnits = Object.keys(weak).map(findUnit).filter(Boolean).map(u => u.label);
      const card = el('div', 'q-card center');
      let html = `<div style="font-size:54px">${pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : '💪'}</div>`;
      html += `<h2 style="margin:6px 0">本次正确率 ${pct}%</h2>`;
      html += `<p class="muted">共 ${total} 题，答对 ${correct} 题</p>`;
      if (weakUnits.length) html += `<div class="row" style="justify-content:center;margin-top:10px"><span class="chip warn">薄弱音素：${esc(weakUnits.join('、'))}</span></div>`;
      html += `<p class="muted" style="margin-top:14px">${pct >= 80 ? '真厉害！这块拼读你已经很稳啦～' : pct >= 60 ? '不错哦，再练几遍就更熟练啦！' : '别着急，多听多读，你一定行！'}</p>`;
      html += `<div class="q-actions"><button class="btn accent" id="again">🔄 再来一组</button><button class="btn soft" id="back">返回</button></div>`;
      card.innerHTML = html; wrap.appendChild(card);
      $('#again').onclick = () => meta.onAgain ? meta.onAgain() : go(meta.back || 'practice');
      $('#back').onclick = () => go(meta.back || 'practice');
    }
    render();
  }

  function renderMCQ(wrap, q, cb) {
    const card = el('div', 'q-card');
    if (q.type === 'listen' || q.type === 'read') {
      const ab = el('button', 'q-audio-btn'); ab.textContent = '🔊'; ab.onclick = () => speak(q.spoken); card.appendChild(ab);
      if (q.type === 'read') { const ww = el('div', 'q-word'); ww.textContent = q.word; card.appendChild(ww); }
      setTimeout(() => speak(q.spoken), 250);
    }
    const pr = el('div', 'q-prompt'); pr.textContent = q.prompt; card.appendChild(pr);
    const opts = el('div', 'q-options');
    let answered = false;
    q.options.forEach(o => {
      const b = el('button', 'opt'); b.innerHTML = `<span>${esc(o.label)}</span>`;
      b.onclick = () => {
        if (answered) return; answered = true;
        const ok = o.correct;
        b.classList.add(ok ? 'correct' : 'wrong');
        q.options.forEach((x, i) => { if (x.correct && i !== q.options.indexOf(o)) {} });
        $$('.opt', opts).forEach((ob, i) => { ob.disabled = true; if (q.options[i].correct) ob.classList.add('correct'); });
        const fb = el('div', 'q-feedback show ' + (ok ? 'ok' : 'no'));
        fb.textContent = ok ? '🌟 ' + q.feedback.correct : '💡 ' + q.feedback.wrong;
        card.appendChild(fb);
        const act = el('div', 'q-actions');
        const nb = el('button', 'btn ' + (ok ? 'mint' : 'accent')); nb.textContent = '下一题 →';
        nb.onclick = () => cb(ok, o.label); act.appendChild(nb); card.appendChild(act);
      };
      opts.appendChild(b);
    });
    card.appendChild(opts);
    wrap.appendChild(card);
  }

  function renderMatch(wrap, q, cb) {
    const card = el('div', 'q-card');
    const tip = el('div', 'q-prompt'); tip.textContent = `把左边的单词和右边对应的意思连起来吧！（点击配对）`;
    card.appendChild(tip);
    const grid = el('div', 'match-grid');
    const left = el('div', 'match-col'); const right = el('div', 'match-col');
    const items = q.pairs.map(p => ({ ...p, matched: false }));
    let selLeft = null, done = 0, errors = 0;
    shuffle(items).forEach(p => {
      const a = el('div', 'match-item'); a.innerHTML = `${p.emoji || ''} <b>${esc(p.en)}</b>`; a.onclick = () => select(a, p, 'L');
      left.appendChild(a);
    });
    shuffle(items).forEach(p => {
      const b = el('div', 'match-item'); b.innerHTML = `${esc(p.zh)}`; b.onclick = () => select(b, p, 'R');
      right.appendChild(b);
    });
    grid.appendChild(left); grid.appendChild(right); card.appendChild(grid);
    const fb = el('div', 'q-feedback'); card.appendChild(fb);
    function select(node, p, side) {
      if (node.classList.contains('done')) return;
      if (side === 'L') {
        if (selLeft) selLeft.node.classList.remove('sel');
        if (selLeft && selLeft.p.en === p.en) { selLeft = null; return; } // 再次点击取消
        node.classList.add('sel'); selLeft = { node, p };
      } else {
        if (!selLeft) { toast('先点左边的单词哦'); return; }
        if (selLeft.p.en === p.en) {
          selLeft.node.classList.add('done', 'right'); node.classList.add('done', 'right');
          selLeft.node.onclick = null; node.onclick = null; selLeft = null; done++;
          if (done === items.length) finishMatch();
        } else {
          node.classList.add('sel'); errors++; setTimeout(() => node.classList.remove('sel'), 400);
          selLeft.node.classList.remove('sel'); selLeft = null; toast('再试试看～');
        }
      }
    }
    function finishMatch() {
      fb.className = 'q-feedback show ok'; fb.textContent = errors === 0 ? '🌟 全对！连接得又快又准！' : `💡 完成啦！连对 ${items.length} 对，点错 ${errors} 次，下次更快！`;
      const act = el('div', 'q-actions'); const nb = el('button', 'btn mint'); nb.textContent = '下一题 →';
      nb.onclick = () => cb(true); act.appendChild(nb); card.appendChild(act);
    }
    wrap.appendChild(card);
  }

  /* ====================== 路由（独立视图 / 路由切换，绝不累加） ====================== */
  // 设计目标：每个侧边栏 / 底部导航 / 首页模块卡按钮 = 一个独立路由。
  // 点击后整体替换 #content（先清空再渲染），主页只保留概览，不会出现内容无限累加。
  const ROUTER = { current: 'home' };

  // 切换路由：写入可分享的 URL（#/xxx 或 #/xxx/arg），并整体渲染目标视图
  // 第二个参数 arg 用于带子路径的页面（如课程专属页 lessonId），可被深链/直接访问。
  function navigate(nav, arg, replace) {
    if (!NAV_META[nav]) nav = 'home';
    const target = '#/' + nav + (arg != null ? '/' + arg : '');
    if (location.hash === target) { renderRoute(nav, arg); return; }   // 同一路由：仅重渲染，不重复入栈
    if (replace) history.replaceState({ nav, arg }, '', target);        // 首屏：替换 URL，不新增历史
    else history.pushState({ nav, arg }, '', target);                  // 正常跳转：新增历史（支持后退）
    renderRoute(nav, arg);
  }

  // 真正负责「清空旧内容 + 渲染新视图」的核心：保证每次切换都是独立页面
  function renderRoute(nav, arg) {
    if (!NAV_META[nav]) nav = 'home';
    ROUTER.current = nav;
    ROUTER.arg = arg || null;
    $('#pageTitle').textContent = NAV_META[nav].t;
    $('#pageSub').textContent = NAV_META[nav].s;
    $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.nav === nav));
    $$('.bn-item').forEach(b => b.classList.toggle('active', b.dataset.nav === nav));
    const c = $('#content');
    c.innerHTML = '';                                  // 关键：每次切换先【清空】，内容不累加堆叠
    (VIEWS[nav] || VIEWS.home)(c, arg);               // 渲染该路由对应的独立视图（arg 透传子路径）
    // 重新触发「进入」动画，让切换平滑、所见即所得
    c.classList.remove('view-in'); void c.offsetWidth; c.classList.add('view-in');
    // 定位高亮：让目标板块的标题「亮一下」，明确告知用户已到位
    requestAnimationFrame(() => {
      const t = c.querySelector('.card .section-title') || c.querySelector('.hero') || c.firstElementChild;
      if (t) { t.classList.remove('locate-flash'); void t.offsetWidth; t.classList.add('locate-flash'); }
    });
    // 侧边栏较长时，把当前选中项平滑滚动进视野（仅滚动侧边栏自身，不带动主区）
    const sb = $('.sidebar');
    if (sb && sb.scrollHeight > sb.clientHeight) {
      const act = $$('.nav-item').find(b => b.classList.contains('active'));
      if (act) act.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 浏览器「后退 / 前进」按钮，或地址栏手动修改 hash（如粘贴新链接后回车改片段）：
  // 统一从 URL 的 hash 还原对应独立路由，确保深链 / 直接访问始终进入正确页面且布局样式不变。
  function routeFromHash() {
    const h = (location.hash || '').replace(/^#\/?/, '').trim();
    const seg = h.split('/');
    const nav = NAV_META[seg[0]] ? seg[0] : 'home';
    const arg = seg[1] || null;
    if (nav === ROUTER.current && arg === (ROUTER.arg || null)) return;   // 后退/前进与 hashchange 可能双触发，避免重复渲染造成闪烁
    ROUTER.arg = arg;
    renderRoute(nav, arg);
  }
  window.addEventListener('popstate', routeFromHash);
  window.addEventListener('hashchange', routeFromHash);

  // 兼容页面内部旧调用：go(nav) 等同 navigate(nav)
  function go(nav) { navigate(nav); }

  const VIEWS = {};

  /* ====================== 首页 ====================== */
  VIEWS.home = function (c) {
    const stats = computeStats();
    const hero = el('div', 'hero');
    hero.innerHTML = `
      <div class="deco">🔤</div>
      <h1>你好，${esc(state.nickname)} 👋</h1>
      <p>这里是为 5–12 岁小朋友准备的自然拼读乐园。点一点就能听发音、做练习、背单词、看微课，全部开箱即用，不用联网也能学！</p>
      <div class="stats">
        <div class="stat"><b>${stats.mastered}</b><span>已掌握考点</span></div>
        <div class="stat"><b>${stats.practice}</b><span>刷题次数</span></div>
        <div class="stat"><b>${state.wrong.length}</b><span>待巩固错题</span></div>
        <div class="stat"><b>${stats.streak}</b><span>连续打卡(天)</span></div>
      </div>`;
    c.appendChild(hero);

    const sec = el('div', 'section-title', `📚 ${MODULES.length} 个学习模块`);
    c.appendChild(sec);
    const grid = el('div', 'module-grid');
    MODULES.forEach(m => {
      const card = el('button', 'module-card');
      card.setAttribute('data-nav', m.id);
      card.innerHTML = `
        <div class="mc-top">
          <div class="mc-ico" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
          <div class="mc-no">NO.${m.no}</div>
        </div>
        <h3>${m.name}</h3>
        <p>${m.desc}</p>`;
      // 跳转交由全局事件委托处理（见 init），无需每个卡片单独绑定，
      // 这样即使首页被重新渲染，模块卡依然能正确切到对应独立路由。
      grid.appendChild(card);
    });
    c.appendChild(grid);

    /* —— 自愿赞助通道：放在首页底部 —— */
    const sponsor = el('div', 'sponsor-card');
    sponsor.innerHTML = `
      <div class="sponsor-glow">💝</div>
      <div class="sponsor-badge">自愿赞助通道</div>
      <h3 class="sponsor-title">支持服务器与 Token 费用</h3>
      <p class="sponsor-text">由于模型 Token 调用成本较高，为了维持服务稳定运行，现开启自愿赞助通道。如果您觉得本应用对您有帮助，欢迎扫码支持服务器及 Token 费用。金额不限，您的支持是我持续维护的动力！</p>
      <div class="sponsor-qr">
        <!-- 把您的微信/支付宝收款码图片放到项目目录，再把下面 src 改成对应文件名即可（例如 src="sponsor_qr.png"） -->
        <img id="sponsorQr" class="qr-img" alt="收款二维码" referrerpolicy="no-referrer" />
        <div class="qr-fallback">📱<br>收款二维码位<br><span>（将二维码图片命名为 sponsor_qr.png 放入目录后自动显示）</span></div>
      </div>
      <div class="sponsor-tip">金额不限 · 自愿支持 · 感谢您的每一份心意 ❤️</div>`;
    c.appendChild(sponsor);
    const qr = $('#sponsorQr');
    if (qr) {
      qr.onerror = () => { qr.style.display = 'none'; const f = sponsor.querySelector('.qr-fallback'); if (f) f.style.display = 'flex'; };
      qr.onload = () => { qr.style.display = 'block'; const f = sponsor.querySelector('.qr-fallback'); if (f) f.style.display = 'none'; };
      qr.src = 'sponsor_qr.png?t=' + Date.now(); // 若目录有该图片则自动显示，否则走 onerror 显示占位
    }
  };

  function computeStats() {
    let mastered = 0, seen = 0;
    KB.categories.forEach(cat => cat.units.forEach(u => { const m = masteryOf(u.id); if (m === 'mastered') mastered++; if (m !== 'unlearned') seen++; }));
    return { mastered, seen, practice: state.stats.practice, streak: currentStreak() };
  }
  function currentStreak() {
    let s = 0; const d = new Date();
    while (true) {
      const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      const rec = state.checkins[key];
      if (rec && (rec.listen || rec.speak || rec.read || rec.write || (rec.recite && rec.recite.length))) s++;
      else break;
      d.setDate(d.getDate() - 1);
      if (s > 3650) break;
    }
    return s;
  }

  /* ====================== 一、考点库管理 ====================== */
  VIEWS.library = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">📚 考点库（字母 — 音素 — 例词 · 高频词）</div>
      <p class="muted">每个考点标注掌握状态：<span class="chip gray">未学</span> <span class="chip">在学</span> <span class="chip mint">已掌握</span>。点 🔊 听发音。高频词（Sight Words）不按拼读规则、需整体认读。</p>
      <div class="row" style="margin:12px 0"><input type="text" class="search-box" id="libSearch" placeholder="🔍 搜单词或音素，如 cat / sh / the" /></div>
      <div class="cat-tabs" id="libTabs"></div>
      <div class="unit-list" id="libList"></div>`;
    const lb = renderLetterBoard(); if (lb) c.appendChild(lb);
    c.appendChild(card);
    const tabs = $('#libTabs');
    let activeCat = KB.categories[0];
    let isSight = false;
    KB.categories.forEach((cat, i) => {
      const t = el('button', 'cat-tab' + (i === 0 ? ' active' : ''), `${cat.icon} ${cat.name}`);
      t.onclick = () => { $$('.cat-tab', tabs).forEach(x => x.classList.remove('active')); t.classList.add('active'); isSight = false; activeCat = cat; renderLibList(cat); };
      tabs.appendChild(t);
    });
    const st = el('button', 'cat-tab', `🔑 高频词 Sight Words`);
    st.onclick = () => { $$('.cat-tab', tabs).forEach(x => x.classList.remove('active')); st.classList.add('active'); isSight = true; renderSight(); };
    tabs.appendChild(st);
    renderLibList(KB.categories[0]);
    $('#libSearch').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) { isSight ? renderSight() : renderLibList(activeCat); return; }
      renderLibSearch(q);
    });
    function renderLibList(cat) {
      isSight = false; activeCat = cat;
      const list = $('#libList'); list.innerHTML = '';
      cat.units.forEach(u => list.appendChild(unitCard(u)));
    }
    function sightRow(sw) {
      const row = el('div', 'unit-card');
      row.innerHTML = `<div class="uh"><div class="usym" style="color:#E8743B">${esc(sw.w)}</div></div>
        <div class="muted" style="font-size:13px;font-weight:800;margin:2px 0">${esc(sw.m)}</div>
        <div class="muted" style="font-size:12px;margin-bottom:4px">📝 ${esc(sw.note)}</div>
        <div class="muted" style="font-size:12px;margin-bottom:6px">💬 ${esc(sw.ex || '')}</div>
        <div class="row"><span class="wv" data-w="${esc(sw.w)}" style="cursor:pointer">🔊 听发音</span></div>`;
      row.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
      return row;
    }
    function renderSight() {
      const list = $('#libList'); list.innerHTML = '';
      if (!KB.sightWords.length) { list.innerHTML = '<div class="empty"><div class="big">🔑</div>暂未添加高频词。</div>'; return; }
      KB.sightWords.forEach(sw => list.appendChild(sightRow(sw)));
    }
    function renderLibSearch(q) {
      const list = $('#libList'); list.innerHTML = '';
      let any = false;
      KB.categories.forEach(cat => cat.units.forEach(u => {
        const hit = u.words.some(w => w.w.includes(q) || u.sym.toLowerCase().includes(q) || u.ipa.toLowerCase().includes(q) || u.label.toLowerCase().includes(q));
        if (hit) { list.appendChild(unitCard(u)); any = true; }
      }));
      KB.sightWords.forEach(sw => { if (sw.w.includes(q) || (sw.m || '').includes(q) || (sw.ex || '').toLowerCase().includes(q)) { list.appendChild(sightRow(sw)); any = true; } });
      if (!any) list.innerHTML = '<div class="empty"><div class="big">🔍</div>没有找到相关考点，换个词试试？</div>';
    }
  };
  function unitCard(u) {
    const m = masteryOf(u.id);
    const card = el('div', 'unit-card');
    let words = u.words.map(w => `<div class="word-row"><span class="w">${esc(w.w)}</span><span class="wm">${esc(w.m)} · ${esc(w.syl)}</span><span class="wv" data-w="${esc(w.w)}">🔊</span></div>`).join('');
    card.innerHTML = `<div class="uh"><div><div class="usym">${esc(u.sym || u.label)}</div></div><div style="text-align:right"><div class="uipa">${esc(u.ipa || '')}</div><span class="chip ${m === 'mastered' ? 'mint' : m === 'learning' ? '' : 'gray'}">${m === 'mastered' ? '已掌握' : m === 'learning' ? '在学' : '未学'}</span></div></div><div class="muted" style="font-size:12px;margin-bottom:6px">${esc(u.tip || u.label)}</div>${words}`;
    card.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
    return card;
  }

  /* ====================== 字母点读台（点击任意字母播放其发音） ====================== */
  function renderLetterBoard() {
    const cat = KB.categories.find(c => c.id === 'letters');
    if (!cat) return null;
    const wrap = el('div', 'card letter-board');
    wrap.innerHTML = `<div class="section-title" style="margin-top:0">🔤 字母点读台 <span class="muted" style="font-weight:700;font-size:13px">点任意字母，听它的名字与发音</span></div>
      <div class="letter-grid" id="letterGrid"></div>
      <p class="muted" style="font-size:12px;margin:10px 2px 0">💡 点击字母会先念字母名、再念代表词（如 A → apple），代表词里就藏着这个字母的发音。建议在手机上首次使用前先轻触屏幕开启声音。</p>`;
    const grid = wrap.querySelector('#letterGrid');
    cat.units.forEach(u => {
      const name = (u.label.replace('字母', '').trim()) || u.sym;
      const word = u.words && u.words[0] && u.words[0].w;
      const tile = el('button', 'letter-tile');
      tile.type = 'button';
      tile.innerHTML = `<span class="lt-ch">${esc(name.toUpperCase())}</span><span class="lt-sym">${esc(u.sym)}</span>`;
      tile.title = `${name} → ${word}`;
      tile.onclick = () => {
        unlockAudio();
        // 字母名 + 代表词：TTS 实时合成，离线可用，且不受手机静音键影响
        speak(`${name}. ${word}`, 'en-US');
        tile.classList.add('tapped');
        setTimeout(() => tile.classList.remove('tapped'), 260);
      };
      grid.appendChild(tile);
    });
    return wrap;
  }

  /* ====================== 二、智能刷题 ====================== */
  VIEWS.practice = function (c) {
    const card = el('div', 'card');
    const types = [['listen','听音辨字'],['read','看字读音'],['blank','选词填空'],['match','图文连线']];
    card.innerHTML = `<div class="section-title" style="margin-top:0">✏️ 智能刷题</div>
      <div class="toolbar">
        <div class="field"><label>练习范围</label><select id="pRange"></select></div>
        <div class="field"><label>题型</label><select id="pType"></select></div>
        <div class="field"><label>题量 (5–15)</label><input type="number" id="pCount" value="8" min="5" max="15" style="width:90px" /></div>
        <div class="field"><label>&nbsp;</label><button class="btn accent" id="pStart">▶ 开始练习</button></div>
      </div>
      <p class="muted">系统会根据你的<b>易错音素</b>自动加量，错题多的地方多练几次。</p>
      <div id="pHost"></div>`;
    c.appendChild(card);
    const rng = $('#pRange'); rng.innerHTML = '<option value="auto">🌈 全部·智能加权</option>' + KB.categories.map(cat => `<option value="${cat.id}">${cat.icon} ${cat.name}</option>`).join('');
    const typ = $('#pType'); typ.innerHTML = '<option value="mix">🔀 混合题型</option>' + types.map(t => `<option value="${t[0]}">${t[1]}</option>`).join('');
    $('#pStart').onclick = () => {
      let pool; const rid = rng.value;
      if (rid === 'auto') pool = KB.categories.flatMap(cat => cat.units);
      else pool = (KB.categories.find(c => c.id === rid) || KB.categories[0]).units;
      const count = Math.max(5, Math.min(15, parseInt($('#pCount').value) || 8));
      const ttype = typ.value;
      const questions = [];
      const units = weightedUnits(pool, count);
      units.forEach(u => {
        if (ttype === 'mix') {
          const roll = Math.random();
          if (roll < 0.25 && u.words.length >= 4) questions.push(buildMatch(u, 4));
          else questions.push(buildQuestion(u, rand(u.words), rand(['listen','read','blank'])));
        } else if (ttype === 'match') {
          questions.push(buildMatch(u, Math.min(4, u.words.length)));
        } else {
          questions.push(buildQuestion(u, rand(u.words), ttype));
        }
      });
      state.stats.practice++; save();
      runQuiz($('#pHost'), questions, { label: '智能刷题', back: 'practice', onAgain: () => $('#pStart').click() });
    };
  };

  /* ====================== 三、错题回顾 ====================== */
  VIEWS.wrong = function (c) {
    const card = el('div', 'card');
    if (!state.wrong.length) {
      card.innerHTML = `<div class="section-title" style="margin-top:0">🔁 错题回顾</div><div class="empty"><div class="big">🎉</div>暂时没有错题！去「智能刷题」练一练吧～</div>`;
      c.appendChild(card); return;
    }
    card.innerHTML = `<div class="section-title" style="margin-top:0">🔁 错题回顾</div>
      <p class="muted">每道题连续做对 <b>2 次</b>就算掌握，会自动从错题本移除。薄弱点会优先出现。</p>
      <div id="wList"></div>`;
    c.appendChild(card);
    renderWrongList();
    function renderWrongList() {
      const host = $('#wList'); host.innerHTML = '';
      // 按错误次数排序（易错优先）
      const list = state.wrong.slice().sort((a, b) => b.count - a.count);
      list.forEach(item => {
        const row = el('div', 'list-row');
        const errLabel = { listen: '听音不准', read: '规则不熟', blank: '字形混淆', match: '图文混淆' }[item.type] || '需巩固';
        const dots = '●'.repeat(Math.min(2, item.streak)) + '○'.repeat(Math.max(0, 2 - item.streak));
        row.innerHTML = `<div class="lr-top"><div class="lr-q">${esc(item.q)}</div><span class="tag err">错 ${item.count} 次</span></div>
          <div class="row">
            <span class="tag ${item.type === 'read' ? 'rule' : 'shape'}">${errLabel}</span>
            <span class="muted">正确答案：<b>${esc(item.correctAns)}</b>（${esc(item.sym)}）</span>
            <span class="dots" title="掌握进度">${dots}</span>
          </div>
          <div class="row" style="margin-top:4px">
            <button class="btn sm mint" data-act="redoTip">🔁 做同类题</button>
            <button class="btn sm soft" data-act="explain">💡 看讲解</button>
          </div>`;
        row.querySelector('[data-act=redoTip]').onclick = () => openVariant(item, host);
        row.querySelector('[data-act=explain]').onclick = () => {
          const u = findUnit(item.unitId);
          openModal(`<h3>📖 考点讲解：${esc(item.unitLabel)}</h3><div class="rule-card"><div class="muted">${esc(u ? u.tip : '')}</div><div class="one" style="margin-top:8px">核心音 <b>${esc(item.sym)}</b>，例词如 ${u ? u.words.map(w => w.w).join('、') : ''}。</div><div class="q-actions"><button class="btn soft" id="mclose">知道了</button></div></div>`);
          $('#mclose').onclick = closeModal;
        };
        host.appendChild(row);
      });
    }
    function openVariant(item, host) {
      const u = findUnit(item.unitId);
      if (!u) return;
      const qs = variantQuestions(u, Math.min(3, u.words.length));
      host.innerHTML = '';
      runQuiz(host, qs, {
        label: '同类巩固', back: 'wrong', recordWrong: false,
        onAgain: () => openVariant(item, host),
        onCorrect: () => {
          const it = state.wrong.find(x => x.key === item.key);
          if (it) { it.streak = (it.streak || 0) + 1; if (it.streak >= 2) state.wrong = state.wrong.filter(x => x.key !== item.key); save(); }
        }
      });
    }
  };

  /* ====================== 四、复习计划 ====================== */
  VIEWS.plan = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🗓️ 复习计划（艾宾浩斯）</div>
      <div class="toolbar">
        <div class="field"><label>每日可用</label><select id="plTime"><option>10分钟</option><option selected>15分钟</option><option>20分钟</option><option>30分钟</option></select></div>
        <div class="field"><label>节奏</label><select id="plRhythm"><option value="1">每日</option><option value="2">隔日</option></select></div>
        <div class="field"><label>周期(天)</label><input type="number" id="plDays" value="14" min="3" max="60" style="width:80px" /></div>
        <div class="field"><label>&nbsp;</label><button class="btn mint" id="plGen">✨ 生成计划</button></div>
      </div>
      <div id="plHost"></div>`;
    c.appendChild(card);
    $('#plGen').onclick = () => {
      const days = Math.max(3, Math.min(60, parseInt($('#plDays').value) || 14));
      const rhythm = parseInt($('#plRhythm').value) || 1;
      const plan = generatePlan(days, rhythm);
      state.plan = plan; save();
      renderPlan(plan, $('#plHost'));
    };
    if (state.plan) renderPlan(state.plan, $('#plHost'));
    else $('#plHost').innerHTML = '<div class="empty"><div class="big">🗓️</div>点「生成计划」，我帮你排好复习节奏！</div>';
  };
  function generatePlan(days, rhythm) {
    const today = new Date();
    // 收集需要复习的 unit：未掌握优先，全掌握则全量
    const allUnits = KB.categories.flatMap(cat => cat.units.map(u => ({ id: u.id, label: u.label })));
    const need = allUnits.filter(x => masteryOf(x.id) !== 'mastered');
    const pool = (need.length ? need : allUnits).slice();
    // 艾宾浩斯遗忘曲线标准复习节点（天）
    const revOffsets = [1, 2, 4, 7, 15, 30];
    const schedule = [];
    let introduced = 0;
    const introDay = {}; // unitId -> 引入当天索引
    for (let d = 0; d < days; d++) {
      const date = new Date(today); date.setDate(today.getDate() + d * rhythm);
      const ds = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
      // 新学考点：按节奏日引入，每次 2 个
      const newItems = [];
      if (d % rhythm === 0 && introduced < pool.length) {
        const take = Math.min(2, pool.length - introduced);
        for (let k = 0; k < take; k++) { const it = pool[introduced]; newItems.push(it); introDay[it.id] = d; introduced++; }
      }
      // 复习考点：依据引入日与艾宾浩斯节点错峰排布
      let revItems = [];
      if (d > 0) {
        for (const id in introDay) {
          if (revOffsets.includes(d - introDay[id])) {
            const it = need.find(x => x.id === id) || allUnits.find(x => x.id === id);
            if (it) revItems.push(it);
          }
        }
      }
      const seen = new Set(); revItems = revItems.filter(it => seen.has(it.id) ? false : (seen.add(it.id), true)).slice(0, 5);
      // 兜底：空日补一个最近学过的，或建议读短文
      let suggestion = null;
      if (!newItems.length && !revItems.length) {
        if (introduced > 0) revItems = [pool[introduced - 1]];
        else suggestion = '读一篇可解码短文 📖';
      }
      schedule.push({ date: ds, newItems, revItems, suggestion, done: false });
    }
    return { days: schedule, created: todayStr(), rhythm };
  }
  function renderPlan(plan, host) {
    host.innerHTML = '';
    const week = el('div', 'plan-week');
    plan.days.slice(0, 14).forEach(day => {
      const cell = el('div', 'plan-day' + (day.done ? ' done' : ''));
      const [Y, M, D] = day.date.split('-').map(Number);
      const dn = ['日','一','二','三','四','五','六'][new Date(Y, M - 1, D).getDay()];
      cell.innerHTML = `<div class="pd-d">${day.date.slice(5)} 周${dn}</div>`;
      day.newItems.forEach(it => cell.appendChild(el('div', 'pd-item new', '🆕 ' + esc(it.label))));
      day.revItems.forEach(it => cell.appendChild(el('div', 'pd-item-rev pd-item rev', '🔁 ' + esc(it.label))));
      if (day.suggestion) cell.appendChild(el('div', 'pd-item', '📖 ' + esc(day.suggestion)));
      if (!day.newItems.length && !day.revItems.length && !day.suggestion) cell.appendChild(el('div', 'pd-item', '😌 自由阅读'));
      const chk = el('label', 'pd-check'); chk.innerHTML = `<input type="checkbox" ${day.done ? 'checked' : ''}/> 完成`;
      chk.querySelector('input').onchange = e => { day.done = e.target.checked; if (day.done) cell.classList.add('done'); else cell.classList.remove('done'); save(); };
      cell.appendChild(chk);
      week.appendChild(cell);
    });
    host.appendChild(week);
    host.insertAdjacentHTML('beforeend', `<p class="muted" style="margin-top:14px">提示：新学考点（🆕）按「每 ${plan.rhythm || 1} 天」节奏引入；复习（🔁）按艾宾浩斯遗忘曲线在学后第 1 / 2 / 4 / 7 / 15 / 30 天错峰排布。勾选「完成」记录每日进度。</p>`);
  }

  /* ====================== 五、思维导图 ====================== */
  VIEWS.mindmap = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🧠 知识点思维导图</div>
      <p class="muted">选择一个主题，查看层级结构：中心 → 分支(音素) → 叶子(例词)。</p>
      <div class="row" style="margin:12px 0" id="mmCats"></div>
      <div id="mmHost"></div>`;
    c.appendChild(card);
    const cats = $('#mmCats');
    KB.categories.forEach((cat, i) => {
      const b = el('button', 'cat-tab' + (i === 0 ? ' active' : ''), `${cat.icon} ${cat.name}`);
      b.onclick = () => { $$('.cat-tab', cats).forEach(x => x.classList.remove('active')); b.classList.add('active'); renderMM(cat); };
      cats.appendChild(b);
    });
    const mmSt = el('button', 'cat-tab', '🔑 高频词');
    mmSt.onclick = () => { $$('.cat-tab', cats).forEach(x => x.classList.remove('active')); mmSt.classList.add('active'); renderSightMM(); };
    cats.appendChild(mmSt);
    renderMM(KB.categories[0]);
    function renderSightMM() {
      const host = $('#mmHost'); host.innerHTML = '';
      const wrap = el('div', 'mm-wrap');
      const center = el('div', 'badge', '🔑'); center.style.cssText = 'width:auto;height:auto;padding:10px 18px;font-size:16px;font-weight:900;border-radius:16px;background:#E8743B22;color:#E8743B';
      center.textContent = '高频词 Sight Words'; wrap.appendChild(center);
      const branches = el('div', 'mm-node-box');
      const b = el('div', 'unit-card'); b.style.cssText = 'border-color:#E8743B55;min-width:200px';
      b.innerHTML = `<div class="uh"><div class="usym" style="color:#E8743B">整体认读</div></div><div class="row">${KB.sightWords.map(w => `<span class="chip gray" data-w="${esc(w.w)}" style="cursor:pointer">${esc(w.w)}</span>`).join('')}</div>`;
      branches.appendChild(b); wrap.appendChild(branches); host.appendChild(wrap);
      host.querySelectorAll('[data-w]').forEach(ch => ch.onclick = () => speak(ch.dataset.w));
      const tree = el('div', 'tree'); let t = '高频词 Sight Words（不按拼读规则，整体认读）\n'; KB.sightWords.forEach(w => { t += '├─ ' + w.w + '  ' + (w.m || '') + '\n'; }); tree.textContent = t; host.appendChild(el('div')).appendChild(tree);
    }
    function renderMM(cat) {
      const host = $('#mmHost'); host.innerHTML = '';
      // 可视图
      const wrap = el('div', 'mm-wrap');
      const center = el('div', 'badge', cat.icon); center.style.cssText = 'width:auto;height:auto;padding:10px 18px;font-size:16px;font-weight:900;border-radius:16px;background:' + cat.color + '22;color:' + cat.color;
      center.textContent = cat.name; wrap.appendChild(center);
      const branches = el('div', 'mm-node-box');
      cat.units.forEach(u => {
        const b = el('div', 'unit-card'); b.style.cssText = 'border-color:' + cat.color + '55;min-width:200px';
        b.innerHTML = `<div class="uh"><div class="usym" style="color:${cat.color}">${esc(u.sym || u.label)}</div><div class="uipa">${esc(u.ipa || '')}</div></div>
          <div class="row">${u.words.map(w => `<span class="chip gray">${esc(w.w)}</span>`).join('')}</div>`;
        branches.appendChild(b);
      });
      wrap.appendChild(branches); host.appendChild(wrap);
      // 文本树
      const tree = el('div', 'tree'); 
      let t = cat.name + '\n';
      cat.units.forEach(u => { t += '├─ ' + (u.sym || u.label) + '  ' + (u.ipa || '') + '\n'; u.words.forEach((w, i) => { t += '│  ├─ ' + w.w + '（' + w.m + '）\n'; }); });
      tree.textContent = t; host.appendChild(el('div')).appendChild(tree);
      // Mermaid 代码（可复制）
      let mm = 'mindmap\n  root((' + cat.name + '))\n';
      cat.units.forEach(u => { mm += '    ' + (u.sym || u.label) + '\n'; u.words.slice(0,4).forEach(w => mm += '      ' + w.w + '\n'); });
      const pre = el('div', 'card soft'); pre.style.cssText = 'margin-top:14px';
      pre.innerHTML = `<div class="muted" style="font-weight:800;margin-bottom:6px">📐 Mermaid 代码（可粘贴到支持 Mermaid 的编辑器渲染）</div><pre style="white-space:pre;font-size:12.5px;overflow:auto;margin:0">${esc(mm)}</pre>`;
      host.appendChild(pre);
    }
  };

  /* ====================== 六、模拟考试 ====================== */
  VIEWS.exam = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">📝 模拟考试</div>
      <div class="toolbar">
        <div class="field"><label>考试范围</label><select id="eRange"></select></div>
        <div class="field"><label>题量 (≤30)</label><input type="number" id="eCount" value="10" min="5" max="30" style="width:90px" /></div>
        <div class="field"><label>&nbsp;</label><button class="btn" id="eStart">📋 开始组卷</button></div>
      </div>
      <div id="eHost"></div>`;
    c.appendChild(card);
    $('#eRange').innerHTML = KB.categories.map(cat => `<option value="${cat.id}">${cat.icon} ${cat.name}</option>`).join('');
    $('#eStart').onclick = () => {
      const cat = KB.categories.find(c => c.id === $('#eRange').value) || KB.categories[0];
      const count = Math.max(5, Math.min(30, parseInt($('#eCount').value) || 10));
      const questions = [];
      const units = shuffle(cat.units).slice(0, Math.min(cat.units.length, count));
      units.forEach(u => { const w = rand(u.words); questions.push(buildQuestion(u, w, rand(['listen','read','blank']))); });
      while (questions.length < count) { const u = rand(cat.units); questions.push(buildQuestion(u, rand(u.words), rand(['listen','read','blank']))); }
      state.stats.exam++; save();
      runQuiz($('#eHost'), questions, { label: '模拟考试', back: 'exam', diagnose: (res) => renderExamReport(res, cat), onAgain: () => $('#eStart').click() });
    };
    function renderExamReport(res, cat) {
      const wrap = res.wrap; wrap.innerHTML = '';
      const pct = Math.round(res.correct / res.total * 100);
      const unitCat = {}, unitLabel = {}, unitSym = {};
      KB.categories.forEach(c => c.units.forEach(u => { unitCat[u.id] = c.name; unitLabel[u.id] = u.label; unitSym[u.id] = u.sym; }));
      const catStat = {};
      res.perQ.forEach(r => { const cid = unitCat[r.unitId] || '其他'; const s = catStat[cid] || (catStat[cid] = { total:0, ok:0 }); s.total++; if (r.ok) s.ok++; });
      const weakAgg = {};
      res.perQ.forEach(r => { if (!r.ok) weakAgg[r.unitId] = (weakAgg[r.unitId] || 0) + 1; });
      const topWeak = Object.keys(weakAgg).map(id => ({ id, n: weakAgg[id], label: unitLabel[id] || id, sym: unitSym[id] || '' })).sort((a, b) => b.n - a.n).slice(0, 3);
      const card = el('div', 'q-card center');
      let html = `<div style="font-size:54px">${pct >= 80 ? '🏆' : pct >= 60 ? '🌟' : '💪'}</div>`;
      html += `<h2 style="margin:6px 0">模拟考试成绩：${pct}%</h2>`;
      html += `<p class="muted">共 ${res.total} 题，答对 ${res.correct} 题 · 范围：${esc(cat.name)}</p>`;
      const cats = Object.keys(catStat);
      if (cats.length) {
        html += `<div class="section-title" style="text-align:left;margin:14px 0 6px">📊 各模块正确率</div>`;
        cats.forEach(cid => { const s = catStat[cid]; const cp = Math.round(s.ok / s.total * 100);
          html += `<div class="bar-row"><span class="bar-label">${esc(cid)}</span><div class="bar"><i style="width:${cp}%;background:${cp >= 80 ? '#54C9A6' : cp >= 60 ? '#FF9F43' : '#FF6B9D'}"></i></div><span class="bar-val">${cp}%</span></div>`; });
      }
      if (topWeak.length) {
        html += `<div class="section-title" style="text-align:left;margin:14px 0 6px">🎯 薄弱音素 Top 3</div>`;
        html += topWeak.map(w => `<div class="row" style="justify-content:flex-start;gap:8px;margin:4px 0"><span class="chip warn">${esc(w.label)}</span><span class="muted">核心音 ${esc(w.sym)} · 错 ${w.n} 次</span></div>`).join('');
      }
      let advice = pct >= 80 ? '太棒了！这块拼读你已经很稳，可以挑战更难的组合或读可解码短文。' : pct >= 60 ? '不错哦，把上面的薄弱音素在「智能刷题」里多练几遍就更熟练啦！' : '别着急，先回到对应考点库听发音、看「规则说明」，再回来考试。';
      if (topWeak.length) advice += ` 重点复习：${topWeak.map(w => w.label).join('、')}。`;
      html += `<div class="intro-q" style="background:var(--c-mint);margin-top:12px">💡 ${esc(advice)}</div>`;
      html += `<div class="q-actions"><button class="btn accent" id="again">🔄 再来一套</button><button class="btn soft" id="back">返回</button></div>`;
      card.innerHTML = html; wrap.appendChild(card);
      $('#again').onclick = res.onAgain;
      $('#back').onclick = res.onBack;
    }
  };

  /* ====================== 七、背诵打卡 ====================== */
  VIEWS.recite = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🎤 背诵打卡</div>
      <div class="row" id="recTabs"></div>
      <div id="recHost"></div>`;
    c.appendChild(card);
    const tabs = $('#recTabs');
    const all = [{ id:'__rhyme', name:'🌟 经典韵文', type:'rhyme' }].concat(KB.recitationLists.map(l => ({ id:l.id, name:l.name, type:'list' })));
    all.forEach((it, i) => {
      const b = el('button', 'cat-tab' + (i === 0 ? ' active' : ''), it.name);
      b.onclick = () => { $$('.cat-tab', tabs).forEach(x => x.classList.remove('active')); b.classList.add('active'); renderRec(it); };
      tabs.appendChild(b);
    });
    renderRec(all[0]);
    function renderRec(it) {
      const host = $('#recHost'); host.innerHTML = '';
      if (it.type === 'rhyme') {
        KB.rhymes.forEach(rh => {
          const box = el('div', 'rule-card'); box.style.borderLeftColor = '#9B6BF2';
          let lines = rh.lines.map(l => `<div class="row" style="justify-content:space-between"><span><b>${esc(l.en)}</b> <span class="muted">/ ${esc(l.syl)} /</span></span><span class="wv" data-w="${esc(l.en)}" style="cursor:pointer">🔊</span></span></div><div class="muted" style="margin:-2px 0 8px">${esc(l.m)}</div>`).join('');
          box.innerHTML = `<div class="intro-card" style="background:transparent;padding:0;border:none"><div class="hook" style="color:#7A4FD0">${rh.emoji} ${esc(rh.title)}</div>${lines}<button class="btn sm pink" data-rec="${esc(rh.id)}">✅ 今日背诵完成</button></div>`;
          host.appendChild(box);
        });
        host.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
        host.querySelectorAll('[data-rec]').forEach(b => b.onclick = () => { markRecite(b.dataset.rec); b.textContent = '🌟 已打卡'; b.disabled = true; });
      } else {
        const list = KB.recitationLists.find(l => l.id === it.id);
        const box = el('div', 'card soft');
        let rows = list.words.map((w, i) => `<div class="word-row"><span class="w">${i+1}. ${esc(w.w)}</span><span class="wm">${esc(w.syl)} · ${esc(w.m)} · ${esc(w.ipa)}</span><span class="wv" data-w="${esc(w.w)}">🔊</span></div>`).join('');
        box.innerHTML = `<p class="muted">建议每次 ≤ 5 个，跟着读一读、背一背。点 🔊 听示范。</p>${rows}<div class="q-actions"><button class="btn mint" id="recDone">✅ 完成今日词表打卡</button></div>`;
        host.appendChild(box);
        box.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
        $('#recDone').onclick = () => { markRecite(it.id); toast('🌟 词表打卡成功！'); $('#recDone').textContent = '🌟 已打卡'; $('#recDone').disabled = true; };
      }
    }
  };
  function markRecite(id) {
    const key = todayStr();
    const rec = state.checkins[key] || (state.checkins[key] = { listen:false, speak:false, read:false, write:false, recite:[] });
    if (!rec.recite.includes(id)) rec.recite.push(id);
    state.lastCheckinDate = key; save();
  }

  /* ====================== 八、规则说明 ====================== */
  VIEWS.rule = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">💡 规则说明</div>
      <p class="muted">点开任意规则，看口诀、正例反例和发音拆解。顶部附「元音组合一页速查表」。</p>
      <div class="chart-card" id="chartCard" style="margin-top:10px">
        <div class="chart-head" id="chartHead" style="cursor:pointer">🗺️ 元音组合一页速查表 <span id="chartToggle" style="margin-left:auto;font-size:13px">展开 ▾</span></div>
        <div id="chartBody" style="display:none"></div>
      </div>
      <div id="ruleHost" class="row" style="margin-top:12px;align-items:stretch"></div>`;
    c.appendChild(card);
    // 速查表
    const chartBody = $('#chartBody');
    if (KB.vowelChart && KB.vowelChart.length) {
      chartBody.innerHTML = `<table class="chart-tbl">
        <thead><tr><th>发音</th><th>字母组合</th><th>示例</th></tr></thead>
        <tbody>${KB.vowelChart.map(r => `<tr><td><b>${esc(r.sound)}</b></td><td>${esc(r.combos)}</td><td class="muted">${esc(r.ex)}</td></tr>`).join('')}</tbody></table>
        <p class="muted" style="margin-top:8px">共 ${KB.vowelChart.length} 个发音 · 覆盖自然拼读 95% 以上的元音组合，可打印背诵。</p>`;
    }
    $('#chartHead').onclick = () => {
      const on = chartBody.style.display !== 'none';
      chartBody.style.display = on ? 'none' : 'block';
      $('#chartToggle').textContent = on ? '展开 ▾' : '收起 ▴';
    };
    const host = $('#ruleHost');
    KB.rules.forEach(r => {
      const box = el('div', 'rule-card'); box.style.cssText += ';flex:1;min-width:260px;cursor:pointer';
      box.innerHTML = `<div class="mnemonic">${esc(r.title)}</div><div class="muted" style="font-weight:800">${esc(r.sym)}</div><div class="one" style="margin-top:6px">${esc(r.oneLiner)}</div><button class="btn sm soft" data-id="${esc(r.id)}">展开讲解 →</button>`;
      box.querySelector('button').onclick = (e) => { e.stopPropagation(); showRule(r); };
      host.appendChild(box);
    });
    function showRule(r) {
      const pos = r.posExamples.map(x => `<span class="ex">🌰 ${esc(x)}</span>`).join('');
      const neg = r.negExamples.map(x => `<span class="ex neg">⚠️ ${esc(x)}</span>`).join('');
      const pat = r.patterns
        ? `<div class="section-title" style="font-size:14px;margin:10px 0 4px">🪄 四种 Magic e 发音规律（CVC → CVCe）</div>
           <div class="rule-ex">${r.patterns.map(p => `<span class="ex">${esc(p.vowel)}：<b>${esc(p.cvc)}</b> → <b>${esc(p.cvce)}</b> 发 <b>${esc(p.sound)}</b></span>`).join('')}</div>`
        : '';
      const actions = r.id === 'R-silentE'
        ? `<div class="q-actions"><button class="btn accent" id="mPractice">📝 做配套练习</button><button class="btn soft" id="mclose">关闭</button></div>`
        : `<div class="q-actions"><button class="btn soft" id="mclose">关闭</button></div>`;
      openModal(`<h3>💡 ${esc(r.title)} · ${esc(r.sym)}</h3>
        <div class="rule-card" style="border-left-color:var(--c-accent)">
          <div class="mnemonic">${esc(r.mnemonic)}</div>
          <div class="one">${esc(r.oneLiner)}</div>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">🌰 正例</div><div class="rule-ex">${pos}</div>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">⚠️ 易混反例</div><div class="rule-ex">${neg}</div>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">🔍 发音拆解</div><div class="muted" style="font-weight:800">${esc(r.breakdown)}</div>
          ${pat}
          <div class="intro-q" style="background:var(--c-mint)">📌 ${esc(r.summary)}</div>
          ${actions}
        </div>`);
      $('#mclose').onclick = closeModal;
      const mp = $('#mPractice'); if (mp) mp.onclick = startMagicEQuiz;
    }
    function startMagicEQuiz() {
      closeModal();
      c.innerHTML = '';
      const host = el('div'); c.appendChild(host);
      runMagicEQuiz(host);
    }
    function runMagicEQuiz(host) {
      const qs = shuffle(KB.magicEExercises);
      runQuiz(host, qs, {
        label: 'Magic e 配套练习', back: 'rule',
        onAgain: () => { host.innerHTML = ''; runMagicEQuiz(host); }
      });
    }
  };

  /* ====================== 九、测试题（单点 / 定级 / 结业） ====================== */
  VIEWS.quiz = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">✅ 测试题</div>
      <p class="muted">三种模式：单点自测（巩固某一知识点）、入门定级测评（找到起点级别）、阶段结业测评（检测是否达标升级）。</p>
      <div class="cat-tabs" id="qMode">
        <button class="cat-tab active" data-m="single">📍 单点自测</button>
        <button class="cat-tab" data-m="place">🎯 入门定级测评</button>
        <button class="cat-tab" data-m="grad">🏆 阶段结业测评</button>
      </div>
      <div id="qHost"></div>`;
    c.appendChild(card);
    const host = $('#qHost');
    $('#qMode').querySelectorAll('.cat-tab').forEach(b => b.onclick = () => { $('#qMode').querySelectorAll('.cat-tab').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderMode(b.dataset.m); });
    renderMode('single');

    function renderMode(mode) {
      host.innerHTML = '';
      if (mode === 'single') renderSingle();
      else if (mode === 'place') renderPlace();
      else renderGrad();
    }

    function renderSingle() {
      const box = el('div');
      box.innerHTML = `<div class="toolbar">
        <div class="field"><label>测试知识点</label><select id="qUnit"></select></div>
        <div class="field"><label>题型</label><select id="qType"><option value="mix">混合</option><option value="listen">听音辨字</option><option value="read">看字读音</option><option value="blank">选词填空</option></select></div>
        <div class="field"><label>题量 (3–10)</label><input type="number" id="qCount" value="5" min="3" max="10" style="width:80px" /></div>
        <div class="field"><label>&nbsp;</label><button class="btn mint" id="qStart">▶ 开始自测</button></div>
      </div>`;
      host.appendChild(box);
      $('#qUnit').innerHTML = KB.categories.flatMap(cat => cat.units.map(u => `<option value="${u.id}">${cat.icon} ${u.label}</option>`)).join('');
      $('#qStart').onclick = () => {
        const u = findUnit($('#qUnit').value); if (!u) return;
        const n = Math.max(3, Math.min(10, parseInt($('#qCount').value) || 5));
        const t = $('#qType').value;
        const qs = [];
        for (let i = 0; i < n; i++) { const w = rand(u.words); qs.push(buildQuestion(u, w, t === 'mix' ? rand(['listen','read','blank']) : t)); }
        runQuiz(host, qs, { label: '单点自测 · ' + u.label, back: 'quiz', onAgain: () => $('#qStart').click() });
      };
    }

    function buildLayerQuestions() {
      const qs = [];
      KB.placement.layers.forEach(layer => {
        const units = layer.cats.flatMap(cid => { const cat = KB.categories.find(c => c.id === cid); return cat ? cat.units : []; });
        if (!units.length) return;
        while (qs.filter(x => x.layerId === layer.id).length < layer.count) {
          const u = rand(units); const w = rand(u.words);
          const q = buildQuestion(u, w, rand(['listen','read','blank'])); q.layerId = layer.id; qs.push(q);
        }
      });
      return qs;
    }

    function renderPlace() {
      const box = el('div');
      box.innerHTML = `<p class="muted">阶梯式 4 层测评（字母音 → CVC → 长元音/组合 → 进阶），帮你找到最合适的起点级别。建议家长陪着一起做～</p>
        <div class="q-actions"><button class="btn accent" id="plStart">🎯 开始定级测评（约 ${KB.placement.layers.reduce((a,l)=>a+l.count,0)} 题）</button></div>`;
      host.appendChild(box);
      $('#plStart').onclick = () => {
        const qs = buildLayerQuestions();
        runQuiz(host, qs, { label: '入门定级测评', back: 'quiz', diagnose: renderPlaceReport, onAgain: () => $('#plStart').click() });
      };
    }
    function renderPlaceReport(res) {
      const wrap = res.wrap; wrap.innerHTML = '';
      const layers = KB.placement.layers.map(L => {
        const items = res.perQ.filter(p => p.layerId === L.id);
        const ok = items.filter(p => p.ok).length;
        const total = items.length || 1;
        const pct = Math.round(ok / total * 100);
        return { L, ok, total, pct, mastered: pct >= 80 };
      });
      const firstNot = layers.find(l => !l.mastered);
      const startLevel = firstNot ? firstNot.L.name : '已完成全部四层，可挑战分级读物与进阶组合！';
      const card = el('div', 'q-card center');
      let html = `<div style="font-size:54px">🎯</div><h2 style="margin:6px 0">定级测评报告</h2>`;
      html += layers.map(l => `<div class="bar-row"><span class="bar-label">${esc(l.L.name)}</span><div class="bar"><i style="width:${l.pct}%;background:${l.mastered ? '#54C9A6' : '#FF9F43'}"></i></div><span class="bar-val">${l.pct}% ${l.mastered ? '✅' : '⚠️'}</span></div>`).join('');
      html += `<div class="intro-q" style="background:var(--c-primary);margin-top:14px">💡 建议起点：<b>${esc(startLevel)}</b></div>`;
      html += `<p class="muted" style="margin-top:10px">${firstNot ? '先把没掌握的那一层在「智能刷题」里多练几遍吧！' : '基础已扎实，可进入分级阅读与进阶组合学习。'}</p>`;
      html += `<div class="q-actions"><button class="btn accent" id="again">🔄 再测一次</button><button class="btn soft" id="back">返回</button></div>`;
      card.innerHTML = html; wrap.appendChild(card);
      $('#again').onclick = res.onAgain; $('#back').onclick = res.onBack;
    }

    function renderGrad() {
      const box = el('div');
      const opts = KB.levels.map(l => `<option value="${l.id}">${l.name}</option>`).join('');
      box.innerHTML = `<div class="toolbar">
        <div class="field"><label>结业级别</label><select id="gLevel">${opts}</select></div>
        <div class="field"><label>题量 (5–30)</label><input type="number" id="gCount" value="12" min="5" max="30" style="width:90px" /></div>
        <div class="field"><label>&nbsp;</label><button class="btn" id="gStart">🏆 开始结业测评</button></div>
      </div>
      <p class="muted">结业线 80%：达到即可晋升下一级，并颁发结业证书（虚拟勋章）。</p>`;
      host.appendChild(box);
      $('#gStart').onclick = () => {
        const lvl = KB.levels.find(l => l.id === $('#gLevel').value) || KB.levels[0];
        const units = lvl.cats.flatMap(cid => { const cat = KB.categories.find(c => c.id === cid); return cat ? cat.units : []; });
        if (!units.length) { toast('该级别暂无对应考点库'); return; }
        const n = Math.max(5, Math.min(30, parseInt($('#gCount').value) || 12));
        const qs = [];
        for (let i = 0; i < n; i++) { const u = rand(units); qs.push(buildQuestion(u, rand(u.words), rand(['listen','read','blank']))); }
        runQuiz(host, qs, { label: '阶段结业 · ' + lvl.name, back: 'quiz', diagnose: (res) => renderGradReport(res, lvl), onAgain: () => $('#gStart').click() });
      };
    }
    function renderGradReport(res, lvl) {
      const wrap = res.wrap; wrap.innerHTML = '';
      const pct = Math.round(res.correct / res.total * 100);
      const pass = pct >= 80;
      const card = el('div', 'q-card center');
      let html = `<div style="font-size:54px">${pass ? '🏆' : '💪'}</div><h2 style="margin:6px 0">${esc(lvl.name)} 结业测评</h2>`;
      html += `<p class="muted">共 ${res.total} 题，答对 ${res.correct} 题 · 成绩 ${pct}%</p>`;
      html += `<div class="bar" style="margin:10px 0"><i style="width:${pct}%;background:${pass ? '#54C9A6' : '#FF6B9D'}"></i></div>`;
      if (pass) html += `<div class="intro-q" style="background:var(--c-mint)">🎉 恭喜结业通过！获得「${esc(lvl.name)}」结业勋章，可升入下一级！</div>`;
      else { const weakUnits = Object.keys(res.weak).map(findUnit).filter(Boolean).map(u => u.label); html += `<div class="intro-q" style="background:var(--c-accent)">🔁 未达 80% 达标线，再巩固：${esc(weakUnits.join('、') || '相关考点')}。加油，你一定行！</div>`; }
      html += `<div class="q-actions"><button class="btn accent" id="again">🔄 再来一套</button><button class="btn soft" id="back">返回</button></div>`;
      card.innerHTML = html; wrap.appendChild(card);
      $('#again').onclick = res.onAgain; $('#back').onclick = res.onBack;
    }
  };

  /* ====================== 十、文章阅读题 ====================== */
  VIEWS.reading = function (c) {
    const card = el('div', 'card');
    const levels = [...new Set(KB.readings.map(r => r.level))];
    const allTags = [...new Set(KB.readings.flatMap(r => r.tags || []))];
    card.innerHTML = `<div class="section-title" style="margin-top:0">📖 文章阅读题</div>
      <p class="muted">可解码短文（生词率低），点词听音、做理解题。共 ${KB.readings.length} 篇，可按难度与标签筛选。</p>
      <div class="row" style="margin:10px 0;gap:10px;flex-wrap:wrap">
        <select id="rdLevel" class="search-box" style="max-width:170px"><option value="">全部难度</option>${levels.map(l => `<option>${esc(l)}</option>`).join('')}</select>
        <select id="rdTag" class="search-box" style="max-width:170px"><option value="">全部标签</option>${allTags.map(t => `<option>${esc(t)}</option>`).join('')}</select>
        <span class="muted" id="rdCount" style="align-self:center"></span>
      </div>
      <div id="rdHost" class="row" style="margin-top:4px;align-items:stretch"></div>`;
    c.appendChild(card);
    const host = $('#rdHost');
    function paint() {
      const lv = $('#rdLevel').value, tg = $('#rdTag').value;
      const list = KB.readings.filter(r => (!lv || r.level === lv) && (!tg || (r.tags || []).includes(tg)));
      host.innerHTML = '';
      list.forEach(rd => {
        const box = el('div', 'card soft'); box.style.cssText += ';flex:1;min-width:240px;cursor:pointer';
        const tagChips = (rd.tags || []).map(t => `<span class="chip gray">${esc(t)}</span>`).join('');
        box.innerHTML = `<div class="row" style="justify-content:space-between"><b>${esc(rd.title)}</b><span class="chip">${'⭐'.repeat(rd.stars)}</span></div>
          <div class="muted" style="font-weight:800;margin:4px 0">聚焦：${esc(rd.focus)} · ${esc(rd.level)}</div>
          <div class="row" style="margin:2px 0 6px;flex-wrap:wrap">${tagChips}</div>
          <div class="muted" style="font-size:12px;margin-bottom:8px">📅 ${esc(rd.date || '—')}</div>
          <button class="btn sm soft" data-id="${esc(rd.id)}">开始阅读 →</button>`;
        box.querySelector('button').onclick = (e) => { e.stopPropagation(); showReading(rd); };
        host.appendChild(box);
      });
      $('#rdCount').textContent = '共 ' + list.length + ' 篇';
    }
    $('#rdLevel').onchange = paint; $('#rdTag').onchange = paint;
    paint();
    function showReading(rd) {
      const focusSet = new Set(rd.focusWords);
      const text = rd.text.split(' ').map(w => { const clean = w.replace(/[^a-zA-Z']/g, ''); return focusSet.has(clean) ? `<span class="hl">${esc(w)}</span>` : esc(w); }).join(' ');
      const vocab = rd.vocab.map(v => `<span class="chip gray">${esc(v.w)} ${esc(v.m)}</span>`).join('');
      const tagChipsM = (rd.tags || []).map(t => `<span class="chip gray">${esc(t)}</span>`).join('');
      openModal(`<h3>📖 ${esc(rd.title)}</h3>
        <div class="muted" style="font-weight:800">聚焦 ${esc(rd.focus)} · ${esc(rd.level)} · ${'⭐'.repeat(rd.stars)}</div>
        <div class="row" style="margin:6px 0;flex-wrap:wrap">${tagChipsM}</div>
        <div class="muted" style="font-size:13px">📅 发布日期：${esc(rd.date || '—')}</div>
        <div class="reading-text" style="margin-top:10px">${text}</div>
        <div class="section-title" style="font-size:14px;margin:12px 0 4px">🔑 重点拼读词（点词听音）</div>
        <div class="row" id="rdWords"></div>
        <div class="section-title" style="font-size:14px;margin:12px 0 4px">📘 难词表</div><div class="row">${vocab}</div>
        <div class="section-title" style="font-size:14px;margin:12px 0 4px">❓ 理解题</div><div id="rdQs"></div>
        <div class="q-actions"><button class="btn soft" id="mclose">关闭</button></div>`);
      $('#rdWords').innerHTML = rd.focusWords.map(w => `<button class="chip" data-w="${esc(w)}" style="cursor:pointer">🔊 ${esc(w)}</button>`).join('');
      $('#rdWords').querySelectorAll('[data-w]').forEach(b => b.onclick = () => speak(b.dataset.w));
      const qsHost = $('#rdQs');
      rd.questions.forEach((q, qi) => {
        const qdiv = el('div', 'list-row');
        qdiv.innerHTML = `<div class="lr-q">${qi+1}. ${esc(q.q)}</div>`;
        const opts = el('div', 'q-options'); opts.style.gridTemplateColumns = '1fr';
        q.options.forEach((o, oi) => {
          const b = el('button', 'opt'); b.style.fontSize = '14px'; b.textContent = o;
          b.onclick = () => {
            if (b.disabled) return;
            const ok = oi === q.answer;
            b.classList.add(ok ? 'correct' : 'wrong');
            $$('.opt', opts).forEach((ob, i) => { ob.disabled = true; if (i === q.answer) ob.classList.add('correct'); });
            const fb = el('div', 'q-feedback show ' + (ok ? 'ok' : 'no')); fb.textContent = (ok ? '🌟 ' : '💡 ') + q.explain;
            qdiv.appendChild(fb);
          };
          opts.appendChild(b);
        });
        qdiv.appendChild(opts); qsHost.appendChild(qdiv);
      });
      $('#mclose').onclick = closeModal;
    }
  };

  /* ====================== 名师讲课（课前导入 + 名师课程 + 播放器，二合一） ====================== */
  VIEWS.lecture = function (c) {
    // —— 区块一：课前导入（30 秒微课钩子）——
    const introCard = el('div', 'card');
    introCard.innerHTML = `<div class="section-title" style="margin-top:0">🎬 课前导入 · 30 秒微课钩子</div>
      <p class="muted">每节拼读课的课前导入：钩子开场 + 旧知桥接 + 本节目标 + 成就预告，帮孩子快速进入学习状态。</p>
      <div id="inHost" class="row" style="margin-top:12px;align-items:stretch"></div>`;
    c.appendChild(introCard);
    const inHost = $('#inHost');
    (KB.intros || []).forEach(inr => {
      const box = el('div', 'card soft'); box.style.cssText += ';flex:1;min-width:260px;cursor:pointer';
      box.innerHTML = `<div class="hook" style="color:var(--c-purple)">🎬 ${esc(inr.topic)}</div><div class="muted" style="font-weight:800;margin:4px 0">风格：${esc(inr.style)}</div><button class="btn sm soft" data-id="${esc(inr.id)}">查看导入卡 →</button>`;
      box.querySelector('button').onclick = (e) => { e.stopPropagation(); showIntro(inr); };
      inHost.appendChild(box);
    });
    function showIntro(inr) {
      const goals = (inr.goals || []).map(g => `<li>${esc(g)}</li>`).join('');
      openModal(`<h3>🎬 ${esc(inr.topic)} · 微课导入</h3>
        <div class="intro-card">
          <div class="section-title" style="font-size:14px;margin:4px 0">🪝 钩子开场</div><div class="hook">${esc(inr.hook)}</div>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">🌉 旧知桥接</div><div class="muted" style="font-weight:800">${esc(inr.bridge)}</div>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">🎯 本节目标</div><ul class="muted" style="font-weight:800">${goals}</ul>
          <div class="section-title" style="font-size:14px;margin:10px 0 4px">🏆 成就预告</div><div class="muted" style="font-weight:800">${esc(inr.achievement)}</div>
          <div class="intro-q">❓ ${esc(inr.question)}</div>
          <div class="q-actions"><button class="btn soft" id="mclose">关闭</button></div>
        </div>`);
      $('#mclose').onclick = closeModal;
    }

    // —— 区块二：名师课程（课程列表 + 播放器 + 章节字幕）——
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:24px">👩‍🏫 名师讲课</div>
      <p class="muted">精选名师拼读课程 · 点击卡片进入播放器，支持章节跳转、进度条与字幕跟读。</p>
      <div id="lcHost" class="row" style="margin-top:12px;align-items:stretch"></div>
      <div id="lcPlayer"></div>`;
    c.appendChild(card);
    const host = $('#lcHost');
    const playerBox = $('#lcPlayer');
    const cur = { course: null, chIdx: 0, playing: false, timer: null, elapsed: 0 };

    (KB.courses || []).forEach(cs => {
      const box = el('div', 'course-card card soft');
      box.style.setProperty('--cc', cs.color || '#9B6BF2');
      box.innerHTML = `
        <div class="cc-cover">${cs.emoji || '🎬'}</div>
        <div style="font-size:16px;font-weight:900;margin:4px 0">${esc(cs.title)}</div>
        <div class="muted" style="font-weight:800">${esc(cs.teacher.avatar || '👩‍🏫')} ${esc(cs.teacher.name)} · ${esc(cs.level)} · 聚焦 ${esc(cs.focus)}</div>
        <div class="muted" style="font-size:12.5px">⏱️ ${esc(cs.duration)} · ${cs.chapters.length} 个章节</div>
        <div class="cc-row">${(cs.tags || []).map(t => `<span class="cc-chip">${esc(t)}</span>`).join('')}</div>
        <button class="btn sm soft">进入听课 →</button>`;
      box.querySelector('button').onclick = (e) => { e.stopPropagation(); openCourse(cs); };
      box.onclick = () => openCourse(cs);
      host.appendChild(box);
    });

    function openCourse(cs) {
      stopPlayback();
      cur.course = cs; cur.chIdx = 0; cur.elapsed = 0;
      playerBox.innerHTML = '';
      const p = el('div', 'player');
      p.style.setProperty('--cc', cs.color || '#9B6BF2');
      p.innerHTML = `
        <div class="player-screen">
          <div class="p-avatar">${cs.teacher.avatar || '👩‍🏫'}</div>
          <div class="p-title">${esc(cs.title)}</div>
          <div class="p-sub">${esc(cs.teacher.name)} · ${esc(cs.level)} · ${esc(cs.duration)}</div>
          <button class="p-play" id="pPlay">▶️</button>
        </div>
        <div class="p-bar-wrap">
          <div class="p-bar"><i id="pFill"></i></div>
          <div class="p-time"><span id="pCur">00:00</span><span id="pTot">${esc(cs.duration)}</span></div>
        </div>
        <div class="p-controls">
          <button class="p-ctrl" id="pPrev">⏮ 上一章</button>
          <button class="p-ctrl" id="pNext">下一章 ⏭</button>
        </div>
        <div class="chapters" id="pChapters"></div>
        <div class="transcript" id="pTrans"></div>`;
      playerBox.appendChild(p);
      const chHost = $('#pChapters');
      cs.chapters.forEach((ch, i) => {
        const row = el('div', 'chapter'); row.dataset.i = i;
        row.innerHTML = `<span class="ch-no">${i + 1}</span><span class="ch-t">${esc(ch.t)}</span>`;
        row.onclick = () => { cur.chIdx = i; cur.elapsed = 0; renderChapter(); if (cur.playing) { pause(); play(); } };
        chHost.appendChild(row);
      });
      $('#pPlay').onclick = togglePlay;
      $('#pPrev').onclick = () => step(-1);
      $('#pNext').onclick = () => step(1);
      renderChapter();
      try { playerBox.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    }

    function chapterDur() {
      const cs = cur.course; if (!cs) return 0;
      const txt = cs.chapters[cur.chIdx].d || '';
      return Math.max(5, Math.round(txt.length * 0.22) + 2);
    }
    function renderChapter() {
      const cs = cur.course; if (!cs) return;
      $$('#pChapters .chapter').forEach((r, i) => r.classList.toggle('playing', i === cur.chIdx));
      const tr = $('#pTrans'); if (tr) tr.textContent = cs.chapters[cur.chIdx].d || '';
      updateBar();
    }
    function fmt(s) { const m = Math.floor(s / 60), x = Math.floor(s % 60); return String(m).padStart(2, '0') + ':' + String(x).padStart(2, '0'); }
    function updateBar() {
      const dur = chapterDur(); const pct = dur ? Math.min(100, cur.elapsed / dur * 100) : 0;
      const f = $('#pFill'); if (f) f.style.width = pct + '%';
      const pc = $('#pCur'); if (pc) pc.textContent = fmt(cur.elapsed);
    }
    function togglePlay() { cur.playing ? pause() : play(); }
    function play() {
      const cs = cur.course; if (!cs) return;
      cur.playing = true;
      const pb = $('#pPlay'); if (pb) pb.textContent = '⏸';
      speak(cs.chapters[cur.chIdx].d, 'zh-CN');
      cur.timer = setInterval(() => {
        cur.elapsed += 0.25;
        if (cur.elapsed >= chapterDur()) {
          clearInterval(cur.timer); cur.timer = null;
          if (cur.chIdx < cs.chapters.length - 1) { cur.chIdx++; cur.elapsed = 0; renderChapter(); play(); }
          else { pause(); toast('课程播放完毕，你真棒！🎉'); }
          return;
        }
        updateBar();
      }, 250);
      updateBar();
    }
    function pause() {
      cur.playing = false;
      if (cur.timer) { clearInterval(cur.timer); cur.timer = null; }
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      const pb = $('#pPlay'); if (pb) pb.textContent = '▶️';
    }
    function stopPlayback() { pause(); cur.course = null; }
    function step(d) {
      const cs = cur.course; if (!cs) return;
      cur.chIdx = Math.max(0, Math.min(cs.chapters.length - 1, cur.chIdx + d));
      cur.elapsed = 0; renderChapter();
      if (cur.playing) { pause(); play(); }
    }
  };

  /* ====================== 十三、打卡学习 ====================== */
  VIEWS.checkin = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🌟 打卡学习</div>
      <div class="row" style="align-items:center">
        <div class="streak-flame">🔥</div><div><div style="font-size:22px;font-weight:900">连续打卡 ${currentStreak()} 天</div><div class="muted">每天听·说·读·写，养成好习惯！</div></div>
      </div>
      <div class="checkin-grid" id="ciGrid"></div>
      <div class="row"><button class="btn accent" id="ciSave">💾 保存今日打卡</button><span class="muted" id="ciDate"></span></div>
      <hr class="div"/>
      <div id="ciReport"></div>`;
    c.appendChild(card);
    const key = todayStr();
    const rec = state.checkins[key] || (state.checkins[key] = { listen:false, speak:false, read:false, write:false, recite:[] });
    const cells = [['listen','👂','听'],['speak','🗣️','说'],['read','📚','读'],['write','✍️','写']];
    const grid = $('#ciGrid');
    cells.forEach(([k, ico, lab]) => {
      const cell = el('button', 'checkin-cell' + (rec[k] ? ' on' : ''));
      cell.innerHTML = `<div class="cc-ico">${ico}</div><div class="cc-lab">${lab}</div>`;
      cell.onclick = () => { rec[k] = !rec[k]; cell.classList.toggle('on', rec[k]); if (rec[k]) { if (k==='listen'||k==='read') speak('hello'); } save(); };
      grid.appendChild(cell);
    });
    $('#ciDate').textContent = '今日：' + key;
    $('#ciSave').onclick = () => { save(); renderCheckinStats(); toast('🌟 打卡已保存！' + (currentStreak() >= 3 ? '坚持得真棒！' : '')); };
    renderCheckinStats();
    function renderCheckinStats() {
      const host = $('#ciReport'); host.innerHTML = '';
      // 本周完成率
      const weekKeys = []; const d = new Date();
      for (let i = 6; i >= 0; i--) { const t = new Date(d); t.setDate(d.getDate() - i); weekKeys.push(t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')); }
      let done = 0; weekKeys.forEach(k => { const r = state.checkins[k]; if (r && (r.listen||r.speak||r.read||r.write||(r.recite&&r.recite.length))) done++; });
      const pct = Math.round(done / 7 * 100);
      const sec = el('div', 'section-title', '📊 本周成长周报');
      host.appendChild(sec);
      const rep = el('div', 'card soft');
      rep.innerHTML = `<div class="row" style="justify-content:space-between;align-items:center"><span class="muted" style="font-weight:800">本周打卡完成率</span><b>${pct}% (${done}/7天)</b></div><div class="progress" style="margin:8px 0"><i style="width:${pct}%"></i></div>`;
      // 徽章
      const badges = [];
      if (currentStreak() >= 3) badges.push('🔥 坚持星');
      if (state.wrong.length === 0 && state.stats.practice > 0) badges.push('🛡️ 无错侠');
      if (Object.values(state.unitStats).filter(s => s.correct >= 2 && s.wrong === 0).length >= 10) badges.push('📚 拼读小能手');
      if (badges.length) rep.insertAdjacentHTML('beforeend', `<div class="row" style="margin-top:8px">${badges.map(b=>`<span class="chip mint">${b}</span>`).join('')}</div>`);
      // 明日建议
      const weakUnits = KB.categories.flatMap(cat=>cat.units).filter(u=>wrongCountOfUnit(u.id)>0).map(u=>u.label);
      const advice = weakUnits.length ? `明天重点复习：${weakUnits.slice(0,3).join('、')}。` : '明天可以挑战新的音素组合，或读一篇可解码短文！';
      rep.insertAdjacentHTML('beforeend', `<div class="muted" style="font-weight:800;margin-top:10px">💡 明日建议：${advice}</div>`);
      host.appendChild(rep);
    }
  };

  /* ====================== 昵称 ====================== */
  function initNick() {
    $('#nickName').textContent = state.nickname;
    $('#nickAvatar').textContent = state.avatar;
    $('#nickEdit').onclick = () => {
      openModal(`<h3>🐯 设置昵称</h3>
        <p class="muted">只用昵称，不收集真实姓名哦～</p>
        <div class="field"><label>昵称</label><input type="text" id="nk" value="${esc(state.nickname)}" maxlength="12" /></div>
        <div class="field"><label>头像</label><div class="row" id="avPick"></div></div>
        <div class="q-actions"><button class="btn" id="nkSave">保存</button><button class="btn soft" id="nkCancel">取消</button></div>`);
      const avs = ['🐯','🐰','🦁','🐼','🦊','🐱','🐶','🐵','🦄','🐸'];
      const avHost = $('#avPick'); let sel = state.avatar;
      avs.forEach(a => { const b = el('button', 'badge' + (a===sel?' on':''), a); b.onclick = () => { sel=a; $$('.badge',avHost).forEach(x=>x.classList.remove('on')); b.classList.add('on'); }; avHost.appendChild(b); });
      $('#nkSave').onclick = () => { const v = $('#nk').value.trim() || '小勇士'; state.nickname=v; state.avatar=sel; save(); $('#nickName').textContent=v; $('#nickAvatar').textContent=sel; closeModal(); toast('保存成功！'); };
      $('#nkCancel').onclick = closeModal;
    };
  }

  /* ====================== 十三、发音评测与纠音（M13-01 ~ M13-05） ====================== */
  VIEWS.pronounce = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🎙️ 发音评测与纠音</div>
      <p class="muted">用「听标准音 → 孩子跟读 → 即时反馈」的方式练准发音。支持🎤麦克风识别（Chrome / Edge 最佳），也支持家长/自评三档，断网也能用。</p>
      <div class="module-grid" id="pHub"></div>
      <div id="pHost"></div>`;
    c.appendChild(card);
    const host = $('#pHost');
    const hub = [
      { id:'assess', icon:'🎤', name:'跟读评测', desc:'听标准音、跟读、给分与纠音（M13-01）' },
      { id:'minimal', icon:'🔍', name:'易混纠音', desc:'最小对立对对比训练（M13-02）' },
      { id:'mouth', icon:'👄', name:'口型指导', desc:'口型/舌位/送气图解（M13-03）' },
      { id:'challenge', icon:'🎮', name:'发音闯关', desc:'单音→单词→句子三关（M13-04）' },
      { id:'progress', icon:'📈', name:'进步追踪', desc:'发音准确度趋势报告（M13-05）' }
    ];
    const grid = $('#pHub');
    const openers = { assess: renderAssess, minimal: renderMinimal, mouth: renderMouth, challenge: renderChallenge, progress: renderProgress };
    hub.forEach(m => {
      const b = el('button', 'module-card');
      b.innerHTML = `<div class="mc-top"><div class="mc-ico" style="background:#E8743B22;color:#E8743B">${m.icon}</div></div><h3>${m.name}</h3><p>${m.desc}</p>`;
      b.onclick = () => { host.innerHTML = ''; openers[m.id](host); window.scrollTo({ top: 0, behavior: 'smooth' }); };
      grid.appendChild(b);
    });

    /* —— M13-01 跟读评测 —— */
    function renderAssess(host) {
      const box = el('div', 'card soft');
      const catOpts = KB.categories.map(cat => `<option value="${cat.id}">${cat.icon} ${cat.name}</option>`).join('');
      box.innerHTML = `<div class="section-title" style="margin-top:0;font-size:15px">🎤 跟读评测（M13-01）</div>
        <div class="toolbar">
          <div class="field"><label>练习范围</label><select id="aRange">${catOpts}</select></div>
          <div class="field"><label>题量 (5–15)</label><input type="number" id="aCount" value="6" min="5" max="15" style="width:90px" /></div>
          <div class="field"><label>&nbsp;</label><button class="btn accent" id="aStart">▶ 开始跟读</button></div>
        </div>
        <p class="muted" id="aMicTip">${micCaptureSupported() ? '🎤 可点「录下我的跟读」真实录音，录完对照标准音自评打分（100% 离线可用）。' + (micSupported() ? ' 部分浏览器还支持「自动辨音」自动给分（需联网）。' : '') : 'ℹ️ 当前环境不支持麦克风录音，请用「家长/自评」三档按钮给分（同样有效）。'}</p>
        <div id="aHost"></div>`;
      host.appendChild(box);
      $('#aStart').onclick = () => {
        const cat = KB.categories.find(c => c.id === $('#aRange').value) || KB.categories[0];
        const n = Math.max(5, Math.min(15, parseInt($('#aCount').value) || 6));
        const words = shuffle(cat.units).slice(0, Math.min(cat.units.length, n)).map(u => { const w = rand(u.words); return { w: w.w, sym: u.sym, ipa: u.ipa, unitLabel: u.label }; });
        runAssess($('#aHost'), words);
      };
    }
    function runAssess(host, words) {
      let idx = 0; const results = [];
      const wrap = el('div', 'quiz-wrap'); host.innerHTML = ''; host.appendChild(wrap);
      function render() {
        wrap.innerHTML = '';
        const item = words[idx];
        const p = pronOf(item.sym);
        const card = el('div', 'q-card center');
        card.innerHTML = `<div class="qno" style="font-weight:900;color:var(--c-primary)">第 ${idx + 1} / ${words.length} 词</div>
          <div class="q-word">${esc(item.w)}</div>
          <button class="q-audio-btn" id="aPlay">🔊</button>
          <div class="q-prompt">先听标准音，再大声跟读；可以录下自己的声音，对照标准音打分～</div>
          <div class="row" style="justify-content:center;gap:8px;flex-wrap:wrap">
            <button class="btn accent" id="aMic">🎤 录下我的跟读</button>
            <button class="btn soft sm" id="aStt" style="display:none">🤖 自动辨音（需联网）</button>
          </div>
          <div id="aRecPanel" style="display:none;margin-top:8px">
            <div class="rec-indicator" id="aRecDot"><span class="rec-dot"></span> 录音中…（读完点「停止并试听」）</div>
            <div class="vol-bar"><div class="vol-fill" id="aVol"></div></div>
            <button class="btn soft sm" id="aStop">⏹ 停止并试听</button>
          </div>
          <div id="aPlayPanel" style="display:none;margin-top:10px">
            <div class="muted" style="margin-bottom:4px">👂 这是你刚才读的：</div>
            <audio id="aMine" controls style="width:100%"></audio>
            <button class="btn soft sm" id="aStd" style="margin-top:6px">🔊 再听标准音</button>
          </div>
          <div class="q-feedback" id="aRes" style="display:none"></div>
          <div class="row" style="justify-content:center;gap:8px;margin-top:8px;flex-wrap:wrap">
            <button class="btn mint sm" data-s="92">🌟 准确</button>
            <button class="btn soft sm" data-s="80">⚠️ 基本准确</button>
            <button class="btn pink sm" data-s="55">🔴 需纠音</button>
          </div>`;
        wrap.appendChild(card);
        $('#aPlay').onclick = () => speak(item.w);
        setTimeout(() => speak(item.w), 200);
        const res = $('#aRes');
        function showScore(score, mode, heard) {
          const g = pronGrade(score);
          const extra = p ? `<div class="muted" style="margin-top:6px;font-weight:700">👄 纠音提示：${p.metaphor}。${p.errors[0] ? ' 常见错：' + p.errors[0].wrong + ' → ' + p.errors[0].fix : ''}</div>` : '';
          res.className = 'q-feedback show ' + (g.c === 'ok' ? 'ok' : g.c === 'warn' ? '' : 'no');
          res.innerHTML = `${g.emoji} 你的发音：<b>${score} 分（${g.t}）</b>${heard ? ' · 识别到：' + esc(heard) : ''}${extra}`;
          logPron(item.w, item.sym, score, mode);
          results.push({ w: item.w, score });
          const nb = el('button', 'btn ' + (score >= 70 ? 'mint' : 'accent')); nb.textContent = (idx + 1 < words.length) ? '下一词 →' : '看结果 →';
          nb.style.marginTop = '12px'; nb.onclick = () => { idx++; idx >= words.length ? summary() : render(); };
          res.appendChild(nb);
        }
        $('#aMic').onclick = () => {
          if (!micCaptureSupported()) {
            toast('当前环境不支持麦克风录音（请用 Chrome / Edge，并通过 https 分享链接打开）');
            return;
          }
          $('#aMic').style.display = 'none';
          $('#aStt').style.display = 'none';
          $('#aRecPanel').style.display = 'block';
          $('#aVol').style.width = '0%';
          recordUser({
            duration: 4000,
            onLevel: v => { const f = $('#aVol'); if (f) f.style.width = Math.round(v * 100) + '%'; },
            onDone: url => {
              $('#aRecPanel').style.display = 'none';
              if (url) {
                $('#aMine').src = url;
                $('#aPlayPanel').style.display = 'block';
                $('#aStt').style.display = micSupported() ? 'inline-block' : 'none';
                toast('录好啦！对比标准音，给自己打个分吧～');
              } else {
                $('#aMic').style.display = '';
                $('#aStt').style.display = micSupported() ? 'inline-block' : 'none';
                toast('录音结束');
              }
            },
            onErr: msg => {
              $('#aRecPanel').style.display = 'none';
              $('#aMic').style.display = '';
              if (msg === 'insecure') toast('麦克风需在 https 安全链接下使用，请用分享链接打开而非本地文件');
              else if (msg === 'denied') toast('麦克风权限被拒绝，请在地址栏允许麦克风后重试');
              else if (msg === 'unsupported') toast('当前环境不支持麦克风录音，请用下方自评打分');
              else toast('录音启动失败，请用下方自评打分');
            }
          });
        };
        $('#aStop').onclick = () => { if (recordUser._stop) recordUser._stop(); };
        $('#aStd').onclick = () => speak(item.w);
        $('#aStt').onclick = () => {
          if (!micSupported()) { toast('本浏览器不支持自动辨音'); return; }
          $('#aStt').disabled = true; $('#aStt').textContent = '🤖 辨音中…';
          recognize((txt, st) => {
            $('#aStt').disabled = false; $('#aStt').textContent = '🤖 自动辨音（需联网）';
            if (st === 'ok' && txt) {
              const sc = scoreFromText(item.w, txt);
              showScore(sc, 'mic', txt);
              toast('电脑识别到：' + txt + '（' + sc + ' 分）');
            } else {
              toast('自动辨音不可用（网络/浏览器限制），请自评');
            }
          });
        };
        wrap.querySelectorAll('.q-card .btn[data-s]').forEach(b => b.onclick = () => showScore(parseInt(b.dataset.s), 'self', null));
      }
      function summary() {
        wrap.innerHTML = '';
        const avg = results.length ? Math.round(results.reduce((a, b) => a + b.score, 0) / results.length) : 0;
        const low = results.filter(r => r.score < 70).map(r => r.w);
        const g = pronGrade(avg);
        const card = el('div', 'q-card center');
        let html = `<div style="font-size:54px">${g.emoji}</div><h2 style="margin:6px 0">跟读评测完成</h2>
          <p class="muted">共 ${results.length} 词，平均 ${avg} 分（${g.t}）</p>`;
        if (low.length) html += `<div class="intro-q" style="background:var(--c-accent)">🔴 建议重点练：${esc(low.join('、'))}。点开「口型指导」看每个音怎么发～</div>`;
        else html += `<div class="intro-q" style="background:var(--c-mint)">🌟 发音很准啦！继续保持～</div>`;
        html += `<div class="q-actions"><button class="btn accent" id="again">🔄 再来一组</button><button class="btn soft" id="back">返回</button></div>`;
        card.innerHTML = html; wrap.appendChild(card);
        $('#again').onclick = () => $('#aStart').click();
        $('#back').onclick = () => { host.innerHTML = ''; renderAssess(host); };
      }
      render();
    }

    /* —— M13-02 易混音素纠音 —— */
    function renderMinimal(host) {
      const box = el('div', 'card soft');
      const opts = (KB.minimalPairs || []).map(m => `<option value="${m.id}">${esc(m.contrast)}</option>`).join('');
      box.innerHTML = `<div class="section-title" style="margin-top:0;font-size:15px">🔍 易混纠音（M13-02）</div>
        <div class="toolbar"><div class="field"><label>易混音素对</label><select id="mSel">${opts}</select></div>
        <div class="field"><label>&nbsp;</label><button class="btn accent" id="mStart">▶ 开始练习</button></div></div>
        <div id="mHost"></div>`;
      host.appendChild(box);
      if (!opts) { $('#mHost').innerHTML = '<div class="empty"><div class="big">🔍</div>暂无易混音素数据。</div>'; return; }
      $('#mStart').onclick = () => {
        const mp = (KB.minimalPairs || []).find(x => x.id === $('#mSel').value) || KB.minimalPairs[0];
        renderMinimalSet($('#mHost'), mp);
      };
    }
    function renderMinimalSet(host, mp) {
      host.innerHTML = '';
      const head = el('div', 'rule-card');
      head.innerHTML = `<div class="mnemonic">${esc(mp.contrast)}</div>` + mp.tips.map(t => `<div class="one">👄 ${esc(t)}</div>`).join('');
      host.appendChild(head);
      mp.pairs.forEach(pair => {
        const row = el('div', 'list-row');
        row.innerHTML = `<div class="lr-top"><div class="lr-q">最小对立对（只差一个音，声音不同意思就不同）</div></div>
          <div class="row" style="justify-content:space-around;flex-wrap:wrap;gap:10px">
            ${pair.map(wd => `<div class="pd-item" style="min-width:120px;text-align:center;padding:10px"><b style="font-size:18px">${esc(wd)}</b>
              <div class="row" style="justify-content:center;margin-top:6px"><span class="wv" data-w="${esc(wd)}" style="cursor:pointer">🔊</span></div>
              <div class="row" style="justify-content:center;margin-top:6px"><button class="btn sm mint" data-s="92">🌟准</button><button class="btn sm pink" data-s="55">🔴纠</button></div></div>`).join('')}
          </div>`;
        host.appendChild(row);
        row.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
        row.querySelectorAll('[data-s]').forEach(b => b.onclick = () => toast(b.dataset.s === '92' ? '🌟 读得准！' : '💡 再对比一下两个音的口型～'));
      });
      host.insertAdjacentHTML('beforeend', `<p class="muted" style="margin-top:10px">提示：两个词只有<b>一个音不同</b>。家长可带孩子先听标准音、再跟读，用上面的「准/纠」按钮记录。</p>`);
    }

    /* —— M13-03 口型指导 —— */
    function renderMouth(host) {
      const box = el('div', 'card soft');
      const cards = (KB.pronunciation || []).map(p => {
        const ex = p.examples.map(w => `<span class="chip gray" data-w="${esc(w)}" style="cursor:pointer">🔊 ${esc(w)}</span>`).join('');
        return `<div class="unit-card" data-id="${esc(p.id)}" style="cursor:pointer">
          <div class="uh"><div class="usym" style="color:#E8743B">${esc(p.sym)} ${esc(p.ipa)}</div><div class="uipa">${esc(p.name)}</div></div>
          <div class="muted" style="font-weight:800;margin:4px 0">${esc(p.metaphor)}</div>
          <div class="row">${ex}</div></div>`;
      }).join('');
      box.innerHTML = `<div class="section-title" style="margin-top:0;font-size:15px">👄 口型指导（M13-03）</div>
        <p class="muted">点开任意音素，看口型 / 舌位 / 送气 / 常见错误 / 自我验证法。</p>
        <div class="unit-list" id="mMouth">${cards}</div>`;
      host.appendChild(box);
      box.querySelectorAll('.wv').forEach(b => b.onclick = () => speak(b.dataset.w));
      $('#mMouth').querySelectorAll('.unit-card').forEach(cardEl => cardEl.onclick = () => {
        const p = (KB.pronunciation || []).find(x => x.id === cardEl.dataset.id); if (!p) return;
        const errs = p.errors.map(e => `<div class="rule-ex"><span class="ex neg">❌ ${esc(e.wrong)}</span><span class="ex">✅ ${esc(e.fix)}</span></div>`).join('');
        const ex = p.examples.map(w => `<span class="chip gray" data-w="${esc(w)}" style="cursor:pointer">🔊 ${esc(w)}</span>`).join('');
        openModal(`<h3>👄 ${esc(p.name)} · ${esc(p.sym)} ${esc(p.ipa)}</h3>
          <div class="rule-card" style="border-left-color:#E8743B">
            <div class="mnemonic">${esc(p.metaphor)}</div>
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">👄 口型</div><div class="one">${esc(p.mouth)}</div>
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">👅 舌位</div><div class="one">${esc(p.tongue)}</div>
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">💨 送气 / 振动</div><div class="one">${esc(p.air)}</div>
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">🪞 自我验证法</div><div class="one">${esc(p.confirm)}</div>
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">⚠️ 常见错误</div>${errs}
            <div class="section-title" style="font-size:13px;margin:10px 0 4px">🔊 例词（点听发音）</div><div class="row">${ex}</div>
            <div class="q-actions"><button class="btn soft" id="mclose">关闭</button></div>
          </div>`);
        $('#mclose').onclick = closeModal;
        document.querySelectorAll('#modalBox [data-w]').forEach(b => b.onclick = () => speak(b.dataset.w));
      });
    }

    /* —— M13-04 发音闯关 —— */
    function renderChallenge(host) {
      const box = el('div', 'card soft');
      box.innerHTML = `<div class="section-title" style="margin-top:0;font-size:15px">🎮 发音闯关（M13-04）</div>
        <p class="muted">三关递进：① 单音 ② 单词 ③ 句子。每关按发音评分得星，满星通关得勋章。</p>
        <div class="q-actions"><button class="btn accent" id="cStart">🚀 开始闯关</button></div>
        <div id="cHost"></div>`;
      host.appendChild(box);
      $('#cStart').onclick = () => runChallenge($('#cHost'));
    }
    function runChallenge(host) {
      const stages = [
        { name: '第1关 · 单音', items: (KB.pronChallenges.phonemes || []).map(s => ({ text: s, isPhoneme: true })) },
        { name: '第2关 · 单词', items: (KB.pronChallenges.words || []).map(w => ({ text: w })) },
        { name: '第3关 · 句子', items: (KB.pronChallenges.sentences || []).map(s => ({ text: s })) }
      ];
      let si = 0, ii = 0, stars = 0, total = 0;
      const wrap = el('div', 'quiz-wrap'); host.innerHTML = ''; host.appendChild(wrap);
      function render() {
        wrap.innerHTML = '';
        const st = stages[si]; const it = st.items[ii];
        const card = el('div', 'q-card center');
        card.innerHTML = `<div class="qno" style="font-weight:900;color:var(--c-primary)">${esc(st.name)} · 第 ${ii + 1}/${st.items.length} 项</div>
          <div class="q-word">${esc(it.text)}</div>
          <button class="q-audio-btn" id="cPlay">🔊</button>
          <div class="q-prompt">听标准音，大声跟读这一${it.isPhoneme ? '个音' : (si === 2 ? '句话' : '个词')}！</div>
          <div class="row" style="justify-content:center;gap:8px;flex-wrap:wrap">
            <button class="btn accent" id="cMic">🎤 麦克风跟读</button>
            <button class="btn mint sm" data-s="92">🌟 准确</button>
            <button class="btn soft sm" data-s="80">⚠️ 基本</button>
            <button class="btn pink sm" data-s="55">🔴 纠音</button>
          </div>
          <div class="q-feedback" id="cRes" style="display:none"></div>`;
        wrap.appendChild(card);
        $('#cPlay').onclick = () => speak(it.text);
        setTimeout(() => speak(it.text), 200);
        function gain(score) {
          total++; if (score >= 70) stars++;
          const g = pronGrade(score);
          const res = $('#cRes'); res.className = 'q-feedback show ' + (g.c === 'ok' ? 'ok' : g.c === 'warn' ? '' : 'no');
          res.innerHTML = `${g.emoji} ${score} 分（${g.t}）` + (score < 70 ? ' · 重试一次或看口型指导 💪' : ' · 真棒！⭐');
          logPron(it.text, '', score, 'self');
          const nb = el('button', 'btn mint'); nb.textContent = '下一关项 →'; nb.style.marginTop = '12px';
          nb.onclick = () => { ii++; if (ii >= st.items.length) { si++; ii = 0; if (si >= stages.length) return finish(); } render(); };
          res.appendChild(nb);
        }
        $('#cMic').onclick = () => {
          if (!micSupported()) { toast('本浏览器不支持麦克风，点自评按钮'); return; }
          $('#cMic').textContent = '🎙️ 聆听…'; $('#cMic').disabled = true;
          recognize((txt, stt) => { $('#cMic').textContent = '🎤 麦克风跟读'; $('#cMic').disabled = false; if (stt === 'ok' && txt) gain(scoreFromText(it.text, txt)); else toast('没听清，用自评按钮'); });
        };
        wrap.querySelectorAll('.q-card .btn[data-s]').forEach(b => b.onclick = () => gain(parseInt(b.dataset.s)));
      }
      function finish() {
        wrap.innerHTML = '';
        const pct = total ? Math.round(stars / total * 100) : 0;
        const medal = stars === total ? '🎖️ 发音小百灵' : (pct >= 80 ? '🌟 发音小能手' : '💪 继续加油');
        const card = el('div', 'q-card center');
        card.innerHTML = `<div style="font-size:54px">${stars === total ? '🏆' : '🎮'}</div>
          <h2 style="margin:6px 0">闯关完成！</h2>
          <p class="muted">三关共 ${total} 项，得星 ${stars}/${total}（${pct}%）</p>
          <div class="intro-q" style="background:var(--c-mint)">🏅 获得称号：<b>${medal}</b></div>
          <div class="q-actions"><button class="btn accent" id="again">🔄 再闯一次</button><button class="btn soft" id="back">返回</button></div>`;
        wrap.appendChild(card);
        $('#again').onclick = () => runChallenge(host);
        $('#back').onclick = () => { host.innerHTML = ''; renderChallenge(host); };
      }
      render();
    }

    /* —— M13-05 进步追踪 —— */
    function renderProgress(host) {
      const box = el('div', 'card soft');
      const recs = state.pronScores || [];
      if (!recs.length) { box.innerHTML = `<div class="section-title" style="margin-top:0;font-size:15px">📈 进步追踪（M13-05）</div><div class="empty"><div class="big">🎙️</div>还没有发音记录，去「跟读评测」或「发音闯关」练一练吧～</div>`; host.appendChild(box); return; }
      const now = new Date();
      function avgSince(days) { const cut = new Date(now); cut.setDate(cut.getDate() - days); const rs = recs.filter(r => new Date(r.date) >= cut); return rs.length ? Math.round(rs.reduce((a, b) => a + b.score, 0) / rs.length) : null; }
      const last7 = avgSince(7), last30 = avgSince(30);
      const bySym = {};
      recs.forEach(r => { if (!r.sym) return; const o = bySym[r.sym] || (bySym[r.sym] = { n: 0, sum: 0 }); o.n++; o.sum += r.score; });
      const stuck = Object.keys(bySym).filter(s => bySym[s].n >= 2 && bySym[s].sum / bySym[s].n < 70).map(s => s);
      const mastered = Object.keys(bySym).filter(s => bySym[s].n >= 2 && bySym[s].sum / bySym[s].n >= 90).map(s => s);
      let html = `<div class="section-title" style="margin-top:0;font-size:15px">📈 进步追踪（M13-05）</div>`;
      html += `<div class="row" style="gap:10px;flex-wrap:wrap">
        <div class="checkin-cell ${last7 != null ? 'on' : ''}"><div class="cc-ico">⭐</div><div class="cc-lab">近 7 天平均<br><b>${last7 != null ? last7 + ' 分' : '—'}</b></div></div>
        <div class="checkin-cell ${last30 != null ? 'on' : ''}"><div class="cc-ico">📅</div><div class="cc-lab">近 30 天平均<br><b>${last30 != null ? last30 + ' 分' : '—'}</b></div></div>
        <div class="checkin-cell"><div class="cc-ico">📊</div><div class="cc-lab">总记录<br><b>${recs.length} 次</b></div></div></div>`;
      if (mastered.length) html += `<div class="row" style="margin-top:10px"><span class="chip mint">✅ 已掌握音素：${esc(mastered.join('、'))}</span></div>`;
      if (stuck.length) html += `<div class="row" style="margin-top:8px"><span class="chip warn">🔴 顽固音（重点练）：${esc(stuck.join('、'))}</span></div>`;
      html += `<div class="intro-q" style="background:var(--c-primary);margin-top:12px">👨‍👩‍👧 家长报告：宝贝发音${last7 != null && last30 != null && last7 >= last30 ? '稳步提升 👍' : '持续练习中 💪'}。${stuck.length ? '下周重点：' + esc(stuck.join('、')) + '（看口型指导 + 照镜子练习）。' : '继续保持，多读多练！'}</div>`;
      html += `<div class="q-actions"><button class="btn soft" id="pClear">🧹 清空记录</button></div>`;
      box.innerHTML = html; host.appendChild(box);
      $('#pClear').onclick = () => { if (window.confirm('确定清空全部发音记录？')) { state.pronScores = []; save(); renderProgress(host); } };
    }
  };

  /* ---------- 学习路线：区块渲染辅助（板块内容 → HTML） ---------- */
  const PHASE_META = {
    pre:   { icon: '🔍', c: '#3C7DFF', one: '准备与热身' },
    learn: { icon: '📖', c: '#FF7A45', one: '核心规则与例词' },
    review:{ icon: '🔁', c: '#2BB673', one: '巩固练习' },
    quiz:  { icon: '🏆', c: '#9B5DE5', one: '自测与答案' }
  };
  const PHASE_ORDER = ['pre', 'learn', 'review', 'quiz'];

  function renderPhaseBlock(b) {
    switch (b.k) {
      case 'txt':   return `<p class="ph-txt">${esc(b.body)}</p>`;
      case 'task':  return `<div class="ph-task">🎯 <span>${esc(b.body)}</span></div>`;
      case 'steps': return `<ol class="ph-steps">${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
      case 'rule':  return `<div class="ph-rule"><div class="ph-rule-sym">${esc(b.sym || '')}</div><div class="ph-rule-body"><div class="ph-rule-t">${esc(b.title || '')}</div><div class="ph-rule-d">${esc(b.body)}</div></div></div>`;
      case 'words': return `<div class="ph-words"><div class="ph-words-h">${esc(b.sym || '例词')}</div><div class="word-grid">${b.items.map(w => `<div class="wchip" data-w="${esc(w[0])}"><b>${esc(w[0])}</b><span>${esc(w[1])}</span><i>${esc(w[2])}</i><span class="wchip-spk">🔊</span></div>`).join('')}</div></div>`;
      case 'pairs': return `<div class="ph-pair-wrap"><div class="ph-pair"><div class="pp" data-w="${esc(b.a[0])}"><b>${esc(b.a[0])}</b><span>${esc(b.a[1])}</span><i>${esc(b.a[2])}</i><span class="wchip-spk">🔊</span></div><span class="pp-vs">vs</span><div class="pp" data-w="${esc(b.b[0])}"><b>${esc(b.b[0])}</b><span>${esc(b.b[1])}</span><i>${esc(b.b[2])}</i><span class="wchip-spk">🔊</span></div></div><div class="ph-pair-note">💡 ${esc(b.note || '')}</div></div>`;
      case 'sent':  return `<div class="ph-sent" data-w="${esc(b.en)}"><span class="ph-sent-en">${esc(b.en)}</span>${b.ipa ? `<span class="ph-sent-ipa">${esc(b.ipa)}</span>` : ''}<button class="ph-spk" type="button" aria-label="听发音">🔊</button></div>`;
      case 'quiz':  return `<div class="ph-quiz"><div class="ph-q">${esc(b.q)}</div><div class="ph-opts">${b.opts.map(o => `<button class="ph-opt" type="button">${esc(o)}</button>`).join('')}</div><button class="ph-show-ans" type="button">显示答案</button><div class="ph-ans" hidden><b>答案：${esc(b.ans)}</b><span>${esc(b.why)}</span></div></div>`;
      default: return '';
    }
  }
  function phaseSectionsHtml(L) {
    return PHASE_ORDER.map(k => {
      const ph = L.phases[k]; if (!ph) return '';
      const m = PHASE_META[k];
      return `<section class="ph-section" style="--pc:${m.c}">
        <div class="ph-head"><span class="ph-ico">${m.icon}</span><span class="ph-h-t">${esc(ph.title)}</span></div>
        <div class="ph-body">${ph.blocks.map(renderPhaseBlock).join('')}</div>
      </section>`;
    }).join('');
  }

  /* ---------- 学习路线：导航枢纽（8 关入口） ---------- */
  VIEWS.curriculum = function (c) {
    const card = el('div', 'card');
    card.innerHTML = `<div class="section-title" style="margin-top:0">🗺️ 拼读宝石大冒险 · 学习路线</div>
      <p class="muted">跟着吉祥物 🦖 豆豆 Rex，按 <b>预习 → 学习 → 复习 → 评测</b> 四步走，集齐 8 颗拼读宝石，点亮「流利阅读」魔法大门！点击任意关卡，进入<b>专属学习页</b>查看具体教学内容（字母、发音规则、例词例句、练习题与答案）。</p>
      <div class="gem-map" id="gemMap"></div>
      <div class="guide-grid" id="guideGrid"></div>`;
    c.appendChild(card);

    const map = $('#gemMap');
    const grid = $('#guideGrid');
    CURRICULUM.forEach(L => {
      const node = el('div', 'gem-node');
      node.setAttribute('data-lesson', L.id);
      node.style.setProperty('--gc', L.color);
      node.innerHTML = `<div class="gem">💎</div><div class="gn-no">第${L.no}关</div><div class="gn-t">${esc(L.title)}</div>`;
      map.appendChild(node);

      const lc = el('div', 'lesson-card');
      lc.style.setProperty('--lc', L.color);
      const outline = PHASE_ORDER.map(k => `<div class="lc-stage"><b>${PHASE_META[k].icon} ${esc(L.phases[k].title)}</b><span>${esc(PHASE_META[k].one)}</span></div>`).join('');
      lc.innerHTML = `<div class="lesson-head">
          <span class="lesson-badge">第 ${L.no} 关</span>
          <span class="lesson-cat" style="background:${L.color}">${esc(L.cat)}</span>
          <span class="lesson-scene">${esc(L.scene)}</span>
        </div>
        <div class="lesson-title">${esc(L.title)}</div>
        <div class="lesson-target">🎯 ${esc(L.goal)}</div>
        <div class="lc-outline">${outline}</div>
        <div class="guide-tip">🦖 ${esc(L.tip)}</div>
        <div class="guide-foot">
          <button class="btn accent sm" data-lesson="${esc(L.id)}">进入第 ${L.no} 关 →</button>
          <button class="btn soft sm" data-nav="pronounce">🎙️ 发音评测</button>
        </div>`;
      grid.appendChild(lc);
    });

    card.addEventListener('click', e => {
      const ln = e.target.closest('[data-lesson]');
      if (ln) { navigate('curriculumLesson', ln.getAttribute('data-lesson')); return; }
      const nv = e.target.closest('[data-nav]');
      if (nv) { e.preventDefault(); navigate(nv.getAttribute('data-nav')); }
    });
  };

  /* ---------- 学习路线：每关专属学习页（四阶段具体内容） ---------- */
  VIEWS.curriculumLesson = function (c, id) {
    const L = CURRICULUM.find(x => x.id === id) || CURRICULUM[0];
    const idx = CURRICULUM.indexOf(L);
    const prev = idx > 0 ? CURRICULUM[idx - 1] : null;
    const next = idx < CURRICULUM.length - 1 ? CURRICULUM[idx + 1] : null;
    const card = el('div', 'card lesson-page');
    card.style.setProperty('--lc', L.color);
    card.innerHTML = `
      <div class="lp-top">
        <button class="lp-back" data-nav="curriculum">← 返回学习路线</button>
        <span class="lp-progress">第 ${L.no} / ${CURRICULUM.length} 关 · ${esc(L.catEn)}</span>
      </div>
      <div class="lp-head">
        <div class="lp-badge">第 ${L.no} 关</div>
        <div class="lp-cat" style="background:${L.color}">${esc(L.cat)}</div>
        <div class="lp-scene">${esc(L.scene)}</div>
      </div>
      <h2 class="lp-title">${esc(L.title)}</h2>
      <div class="lp-goal">🎯 ${esc(L.goal)}</div>
      <div class="lp-phases">${phaseSectionsHtml(L)}</div>
      <div class="lp-tip">🦖 ${esc(L.tip)}</div>
      <div class="lp-nav">
        ${prev ? `<button class="btn soft sm" data-lesson="${prev.id}">← 上一关</button>` : `<span></span>`}
        <div class="lp-nav-mid">
          <button class="btn soft sm" data-nav="pronounce">🎙️ 发音评测</button>
          <button class="btn accent sm" data-nav="${esc(L.go)}">${esc(L.goLabel)} →</button>
        </div>
        ${next ? `<button class="btn soft sm" data-lesson="${next.id}">下一关 →</button>` : `<span></span>`}
      </div>`;
    c.appendChild(card);

    // 局部交互：进入其他关 / 测评选项高亮 / 显示答案（data-nav 交由全局委托处理）
    card.addEventListener('click', e => {
      const ln = e.target.closest('[data-lesson]');
      if (ln) { navigate('curriculumLesson', ln.getAttribute('data-lesson')); return; }
      const opt = e.target.closest('.ph-opt');
      if (opt) { const q = opt.closest('.ph-quiz'); q.querySelectorAll('.ph-opt').forEach(o => o.classList.remove('sel')); opt.classList.add('sel'); return; }
      const sa = e.target.closest('.ph-show-ans');
      if (sa) { const ans = sa.parentElement.querySelector('.ph-ans'); if (ans) { ans.hidden = false; sa.hidden = true; } return; }
      const spk = e.target.closest('[data-w]');
      if (spk) { unlockAudio(); speak(spk.getAttribute('data-w'), 'en-US'); return; }
    });
  };

  /* ====================== 座位模式（恢复 gate.html 口令系统） ======================
   * 进入应用前必须通过 gate.html 校验：URL 带 ?seat=XX 且本机已绑定（phonics_seatXX_bound）才放行；
   * 否则跳转 gate.html（未带座位号 → 手动输入；未绑定 → 输入口令完成绑定）。
   * 通过后按座位命名空间隔离存储：phonics_seatXX_state_v1，互不串档。
   */
  function seatBoundKey(id) { return SEAT_NS + id + '_bound'; }
  function seatValid(id) { return !!(window.SEATS || []).some(x => x.id === id); }
  function seatBound(id) { try { return localStorage.getItem(seatBoundKey(id)) === '1'; } catch (e) { return false; } }
  function checkSeatOrRedirect() {
    const id = (new URLSearchParams(location.search).get('seat') || '').trim().toUpperCase();
    if (!id || !seatValid(id)) { location.replace('gate.html'); return false; }
    if (!seatBound(id)) { location.replace('gate.html?seat=' + encodeURIComponent(id)); return false; }
    SEAT.id = id;
    STORE_KEY = SEAT_NS + id + '_state_v1';
    return true;
  }
  function renderSeatBadge() {
    const b = $('#seatBadge'); if (!b) return;
    b.style.display = '';
    b.textContent = '🪑 座位 ' + SEAT.id;
    b.title = '点击换座位 / 退出';
    b.style.cursor = 'pointer';
    b.onclick = () => { location.href = 'gate.html'; };
  }

  /* ====================== 初始化（座位模式 · 通过口令后进入） ====================== */
  function init() {
    // 全局事件委托：任何带 data-nav 的元素（侧边栏/底部导航/首页模块卡）点击后切换到对应独立路由
    document.addEventListener('click', function (e) {
      const t = e.target.closest('[data-nav]');
      if (t) { e.preventDefault(); navigate(t.getAttribute('data-nav')); }
    });
    // 座位门禁：未通过 gate.html 校验直接跳走，不再渲染主应用
    if (!checkSeatOrRedirect()) return;
    state = load();
    // 新座位默认昵称标注座位号，方便老师一眼识别
    if (!state.nickname || state.nickname === '小勇士') { state.nickname = '座位 ' + SEAT.id + ' 同学'; state.avatar = '🐯'; save(); }
    initNick();
    renderSeatBadge();
    const start = (location.hash || '').replace(/^#\/?/, '').trim();
    navigate(NAV_META[start] ? start : 'home', true);
    // 移动端：等待首次用户手势解锁系统媒体声音（iOS Safari / Android Chrome 自动播放策略）
    bindAudioUnlock();
    showAudioHint();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
