/* =========================================================================
 * 少儿英语自然拼读学习系统 · 数据扩展 (data_pron.js)
 * 为「模块十三：发音评测与纠音(M13-01~M13-05)」与「模块九：定级/结业测评」补充数据。
 * 注意：data.js 已用 `const KB` 声明全局对象，本文件【仅扩展、不重新声明】KB，
 * 直接挂载新属性到全局 KB 上（置于 data.js 之后、app.js 之前加载）。
 * 发音描述全部面向 3–12 岁儿童：口型 / 舌位 / 送气 / 比喻 / 自我验证法 / 常见错误。
 * ========================================================================= */

/* ============ 音素口型 / 舌位 / 纠音指导（M13-03 口型指导） ============
 * 字段：id 唯一；sym 拼读符号；ipa；name 中文名；
 *       mouth 口型；tongue 舌位；air 送气/振动；metaphor 生活化比喻；
 *       confirm 自我验证法；errors 常见错误[{wrong,fix}]；examples 例词
 */
KB.pronunciation = [
  { id:'p-ae', sym:'ă', ipa:'/æ/', name:'短元音 a', mouth:'嘴巴张大，下巴往下掉', tongue:'舌尖轻抵下齿', air:'浊音（喉咙振动）', metaphor:'像咬了一大口苹果 🍎', confirm:'照镜子：嘴角向两边拉、下巴明显下沉', errors:[{wrong:'读成 /e/（嘴巴太小，像 bed）', fix:'把下巴再往下掉一点，嘴巴张大'}], examples:['cat','hat','map','bag'] },
  { id:'p-e', sym:'ĕ', ipa:'/e/', name:'短元音 e', mouth:'嘴巴微张，嘴角向两边拉', tongue:'舌尖抵下齿', air:'浊音', metaphor:'像微笑 😊', confirm:'照镜子：嘴角往两边拉，嘴巴比 /æ/ 小', errors:[{wrong:'读成 /æ/（嘴巴太大，像 cat）', fix:'嘴角向两边咧，嘴巴收小'}], examples:['pen','bed','red','leg'] },
  { id:'p-i', sym:'ĭ', ipa:'/ɪ/', name:'短元音 i', mouth:'嘴巴微张放松', tongue:'舌尖抵下齿，舌中部微抬', air:'浊音', metaphor:'像小蝌蚪轻轻游 🐟', confirm:'声音短而轻，不要拖长成 /iː/', errors:[{wrong:'读成 /iː/（拖长，像 see）', fix:'发得又短又轻，别加长音'}], examples:['pig','sit','big','pin'] },
  { id:'p-o', sym:'ŏ', ipa:'/ɒ/', name:'短元音 o', mouth:'圆嘴、短促', tongue:'舌身后缩', air:'浊音', metaphor:'像小鱼圆圆的嘴 🐟', confirm:'嘴巴圆起来，声音短', errors:[{wrong:'读成 /əʊ/（拖长像 boat）', fix:'保持短促，不要加长音'}], examples:['dog','hot','pot','box'] },
  { id:'p-u', sym:'ŭ', ipa:'/ʌ/', name:'短元音 u', mouth:'嘴巴半开放松', tongue:'舌中部微抬', air:'浊音', metaphor:'像撑开的小伞 ☂️', confirm:'声音短而松，不要拖长', errors:[{wrong:'读成 /uː/（拖长像 food）', fix:'发得短促放松'}], examples:['cup','sun','bus','bug'] },

  { id:'p-ae2', sym:'ā', ipa:'/eɪ/', name:'长元音 a (magic e / ai)', mouth:'嘴角向两边拉，由大到小滑过去', tongue:'舌尖抵下齿', air:'浊音', metaphor:'像打招呼「嘿～」', confirm:'这是一个滑动音，a→i 滑一下', errors:[{wrong:'停在短音 /æ/（如 cake→cak）', fix:'词尾的 e 让 a 变长，滑到 /i/ 收尾'}], examples:['cake','rain','name','play'] },
  { id:'p-ee', sym:'ē', ipa:'/iː/', name:'长元音 e (ee/ea)', mouth:'嘴角向两边拉，嘴型放松', tongue:'舌尖抵下齿，舌前部抬高', air:'浊音', metaphor:'像微微笑着说「衣～」', confirm:'声音拉长，像蜜蜂 /iː/', errors:[{wrong:'读成短音 /ɪ/（如 see→sit）', fix:'把音拉长，像 /iː/ 而不是 /ɪ/'}], examples:['bee','tree','leaf','eat'] },
  { id:'p-ie', sym:'ī', ipa:'/aɪ/', name:'长元音 i (i_e/igh)', mouth:'由大到小，下巴下落再抬起', tongue:'由舌后滑向舌前', air:'浊音', metaphor:'像惊讶「哎～」', confirm:'这是一个滑动音，a→i 滑一下', errors:[{wrong:'停在短音 /ɪ/（如 bike→bik）', fix:'加长并滑动到 /i/ 收尾'}], examples:['bike','kite','time','fly'] },
  { id:'p-oa', sym:'ō', ipa:'/əʊ/', name:'长元音 o (o_e/oa/ow)', mouth:'圆唇，由大到小', tongue:'舌身后缩再前移', air:'浊音', metaphor:'像小船划水「欧～」', confirm:'圆嘴滑动，o→u 收尾', errors:[{wrong:'停在短音 /ɒ/（如 boat→bot）', fix:'加长并滑动，保持圆唇'}], examples:['boat','coat','home','snow'] },

  { id:'p-th', sym:'th', ipa:'/θ/', name:'清辅音 th（咬舌）', mouth:'牙齿轻咬舌尖', tongue:'舌尖伸到上下牙之间', air:'清音（喉咙不振动），向外吹气', metaphor:'像小蛇吐信子 🐍', confirm:'照镜子：能看到舌尖露出来一点点；摸喉咙不振动', errors:[{wrong:'读成 /s/（舌头没伸出来，think→sink）', fix:'舌尖一定要夹在上下牙之间再吐气'}, {wrong:'读成 /t/（舌头太硬）', fix:'把舌尖轻轻吐出来再吹气'}], examples:['three','thumb','think','math'] },
  { id:'p-thd', sym:'th', ipa:'/ð/', name:'浊辅音 th（咬舌振动）', mouth:'牙齿轻咬舌尖', tongue:'舌尖伸到上下牙之间', air:'浊音（喉咙振动）', metaphor:'像小蛇吐信子还哼哼 🐍', confirm:'摸喉咙有振动；舌尖夹在牙间', errors:[{wrong:'读成 /z/（this→zis）', fix:'舌尖伸出、振动发出 /ð/'}], examples:['this','that','the','they'] },
  { id:'p-r', sym:'r', ipa:'/r/', name:'卷舌 r', mouth:'嘴唇撅起像小猪鼻子', tongue:'舌尖卷起不碰牙齿', air:'浊音', metaphor:'像小猪拱鼻子 🐽', confirm:'嘴唇向前撅，舌头卷起离开牙齿', errors:[{wrong:'读成 /l/（rice→lice）', fix:'舌头卷起不碰上颚，嘴唇撅起'}], examples:['red','rabbit','rain','tree'] },
  { id:'p-l', sym:'l', ipa:'/l/', name:'舌边音 l', mouth:'嘴微张', tongue:'舌尖顶住上牙龈（上牙床）', air:'浊音，气流从舌头两边出来', metaphor:'像小灯亮一下 💡', confirm:'舌尖顶上牙龈，能感到气流从两边出', errors:[{wrong:'读成 /r/（light→right）', fix:'舌尖顶住上牙床，不要卷起'}], examples:['lion','leaf','leg','blue'] },
  { id:'p-v', sym:'v', ipa:'/v/', name:'上齿咬唇 v', mouth:'上牙轻咬下唇', tongue:'不碰牙齿', air:'浊音（喉咙振动）', metaphor:'像小兔子咬嘴唇 🐰', confirm:'摸喉咙有振动；上牙咬下唇', errors:[{wrong:'读成 /w/（vest→west）', fix:'上牙一定要咬住下嘴唇再振动'}], examples:['van','vest','violin','five'] },
  { id:'p-w', sym:'w', ipa:'/w/', name:'圆唇半元音 w', mouth:'双唇收圆像吹口哨', tongue:'舌身后缩', air:'浊音', metaphor:'像吹蜡烛 🌬️', confirm:'双唇收圆突出，像发「乌」', errors:[{wrong:'读成 /v/（web→veb）', fix:'双唇圆撮不咬唇'}], examples:['water','web','wind','wet'] },
  { id:'p-sh', sym:'sh', ipa:'/ʃ/', name:'嘘音 sh', mouth:'双唇微圆前突', tongue:'舌面抬起靠近上颚', air:'清音，气流从窄缝挤出', metaphor:'把食指放嘴前「嘘——」🤫', confirm:'像让人安静的「嘘」声', errors:[{wrong:'读成 /s/（ship→sip）', fix:'双唇收圆、气流从舌面与上颚窄缝出'}], examples:['ship','fish','shoe','wash'] },
  { id:'p-ch', sym:'ch', ipa:'/tʃ/', name:'啾音 ch', mouth:'双唇微圆', tongue:'舌面抵住上颚再弹开', air:'清音，短促', metaphor:'像小鸟「啾」一声 🐦', confirm:'像「吃」字开头的音，短促有力', errors:[{wrong:'读成 /ʃ/（chair→share）', fix:'开头加一个轻 /t/ 爆破'}], examples:['chip','chair','watch','much'] }
];

/* ============ 易混音素最小对立对（M13-02 音素级纠音） ============
 * 每对含：contrast 对比名；tips 两个音的区别要点；pairs 最小对立对[{a,b}]
 */
KB.minimalPairs = [
  { id:'mp-ae-e', contrast:'/æ/ vs /e/', tips:['/æ/：嘴巴张大、下巴掉（咬苹果）', '/e/：嘴巴微张、嘴角咧（微笑）'], pairs:[['cat','bed'],['hat','hen'],['map','met'],['bad','bed'],['cap','cab']] },
  { id:'mp-i-ee', contrast:'/ɪ/ vs /iː/', tips:['/ɪ/：短而轻（小蝌蚪）', '/iː/：拉长像微笑（蜜蜂）'], pairs:[['pig','pea'],['sit','seat'],['big','beef'],['pin','peel'],['bit','beat']] },
  { id:'mp-th-s', contrast:'/θ/ vs /s/', tips:['/θ/：舌尖伸出来吐气（小蛇）', '/s/：舌尖抵下齿、气从缝出（蛇嘶嘶）'], pairs:[['three','see'],['think','sink'],['thumb','sum'],['mouth','mouse']] },
  { id:'mp-b-p', contrast:'b vs p', tips:['b：浊音，喉咙振动（气球爆破）', 'p：清音，不振动（轻轻爆破）'], pairs:[['big','pig'],['bed','pet'],['bat','pat'],['cab','cap']] },
  { id:'mp-b-d', contrast:'b vs d', tips:['b：双唇闭合再开（气球）', 'd：舌尖弹上牙龈（门）'], pairs:[['big','dig'],['bat','dad'],['bad','dad'],['cab','dad']] },
  { id:'mp-r-l', contrast:'r vs l', tips:['r：嘴唇撅起、舌头卷（小猪）', 'l：舌尖顶上牙龈（小灯）'], pairs:[['red','led'],['rice','lice'],['rat','light'],['right','light']] },
  { id:'mp-v-w', contrast:'v vs w', tips:['v：上牙咬下唇振动（兔子）', 'w：双唇圆撮不咬唇（吹烛）'], pairs:[['vest','west'],['vine','wine'],['vet','wet'],['van','wand']] },
  { id:'mp-sh-s', contrast:'sh vs s', tips:['sh：双唇收圆、气流从窄缝（嘘——）', 's：嘴角咧、气从齿缝嘶嘶'], pairs:[['she','see'],['ship','sip'],['wash','watch'],['fish','fit']] }
];

/* ============ 跟读闯关词库（M13-04 发音闯关） ============
 * 三关：单音(phonemes) → 单词(words) → 句子(sentences)
 */
KB.pronChallenges = {
  phonemes: ['ă','ĕ','ĭ','ŏ','ŭ','ā','ē','ī','ō','th','sh','ch','r','l','v','w'],
  words: ['cat','bed','pig','dog','sun','ship','chair','three','red','leaf','van','web','rain','tree','bike','boat','fish','duck'],
  sentences: [
    'The cat sat on the mat.',
    'A big red dog ran fast.',
    'I see a blue fish.',
    'We like to read and play.',
    'The sun is hot and red.'
  ]
};

/* ============ 多音节与进阶分类（补足 data.js 中未单独成类的 Level 4 内容） ============ */
KB.categories.push({
  id: 'multisyllable', name: '多音节与进阶', icon: '🧩', color: '#7A6BF2',
  desc: '多音节词拆分 + 易混淆进阶组合（oi/oy、ou/ow、aw/au）。',
  units: [
    { id: 'MS-split', label: '多音节拆分', sym: '🧩', ipa:'', tip:'按音节把长词切开，一个一个拼', words:[
      {w:'rabbit',syl:'rab-bit',m:'兔子',ipa:'/ˈræb.ɪt/'},{w:'pencil',syl:'pen-cil',m:'铅笔',ipa:'/ˈpen.səl/'},
      {w:'banana',syl:'ba-na-na',m:'香蕉',ipa:'/bəˈnɑː.nə/'},{w:'elephant',syl:'el-e-phant',m:'大象',ipa:'/ˈel.ɪ.fənt/'},
      {w:'computer',syl:'com-pu-ter',m:'电脑',ipa:'/kəmˈpjuː.tə/'} ] },
    { id: 'MS-oi', label: 'oi / oy 组合', sym:'oy', ipa:'/ɔɪ/', tip:'oi 在词中（boss）、oy 在词尾', words:[
      {w:'coin',syl:'coin',m:'硬币',ipa:'/kɔɪn/'},{w:'boy',syl:'boy',m:'男孩',ipa:'/bɔɪ/'},
      {w:'voice',syl:'voice',m:'声音',ipa:'/vɔɪs/'},{w:'toy',syl:'toy',m:'玩具',ipa:'/tɔɪ/'} ] },
    { id: 'MS-ou', label: 'ou / ow 组合', sym:'ow', ipa:'/aʊ/', tip:'ou/ow 常发 /aʊ/（如 out、cow）', words:[
      {w:'cloud',syl:'cloud',m:'云',ipa:'/klaʊd/'},{w:'cow',syl:'cow',m:'奶牛',ipa:'/kaʊ/'},
      {w:'house',syl:'house',m:'房子',ipa:'/haʊs/'},{w:'brown',syl:'brown',m:'棕色',ipa:'/braʊn/'} ] },
    { id: 'MS-aw', label: 'aw / au 组合', sym:'aw', ipa:'/ɔː/', tip:'aw/au 常发 /ɔː/（如 saw、autumn）', words:[
      {w:'saw',syl:'saw',m:'看见(过去式)',ipa:'/sɔː/'},{w:'autumn',syl:'au-tumn',m:'秋天',ipa:'/ˈɔː.təm/'},
      {w:'draw',syl:'draw',m:'画',ipa:'/drɔː/'},{w:'pause',syl:'pause',m:'暂停',ipa:'/pɔːz/'} ] }
  ]
});

/* ============ 阶段层级映射（M9 定级 / 阶段结业测评） ============
 * 绑定到 data.js 中已存在的 category.id；若某 id 不存在则自动跳过。
 */
KB.levels = [
  { id:'L1', name:'Level 1 · 字母音启蒙', cats:['letters'] },
  { id:'L2', name:'Level 2 · 短元音 CVC', cats:['short-vowel','blends'] },
  { id:'L3', name:'Level 3 · 长元音与组合', cats:['silent-e','vowel-teams','digraphs'] },
  { id:'L4', name:'Level 4 · 进阶与多音节', cats:['r-controlled','multisyllable'] }
];

/* ============ 定级测评四层（M9-01） ============
 * 每层抽 N 题；正确率 ≥ 80% 视为「已掌握」。
 */
KB.placement = {
  layers: [
    { id:'p1', name:'第一层 · 字母音认读', count:8, cats:['letters'] },
    { id:'p2', name:'第二层 · CVC 拼读',   count:8, cats:['short-vowel'] },
    { id:'p3', name:'第三层 · 长元音/组合', count:8, cats:['silent-e','vowel-teams','digraphs'] },
    { id:'p4', name:'第四层 · 进阶/多音节', count:8, cats:['blends','r-controlled','multisyllable'] }
  ]
};

/* ============ 兼容保护：若 data.js 未提供下列字段，给出最小兜底，避免视图报错 ============ */
KB.sightWords = KB.sightWords || [];
KB.rhymes = KB.rhymes || [];
KB.recitationLists = KB.recitationLists || [];
KB.rules = KB.rules || [];
KB.vowelChart = KB.vowelChart || [];
KB.magicEExercises = KB.magicEExercises || [];
KB.readings = KB.readings || [];
KB.intros = KB.intros || [];
KB.courses = KB.courses || [];
