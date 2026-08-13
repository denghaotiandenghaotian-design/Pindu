/* ============================================================================
 * 拼读宝石大冒险 · 课程体系数据
 * 顺序：字母 → 元音 → 辅音 → 多元音 → 句子 → 文章（逐步深入，共 8 课）
 * 每课四阶段：预习(pre) / 学习(learn) / 复习(review) / 评测(quiz)
 * 阶段内容均为具体、可落地的教学内容（字母、发音规则、例词例句带 IPA、练习题与答案）。
 *
 * 区块类型（供 VIEWS.curriculumLesson 渲染）：
 *   txt   : 说明文字            { k:'txt',   body }
 *   steps : 有序步骤            { k:'steps', items:[...] }
 *   rule  : 发音规则卡          { k:'rule',  sym, title, body }
 *   words : 例词网格            { k:'words', sym, items:[[词, IPA, 中文], ...] }
 *   pairs : 易混音对比          { k:'pairs', a:[词,IPA,中文], b:[词,IPA,中文], note }
 *   sent  : 可点读句子/短文     { k:'sent',  en, ipa? }  （点整句/全文听发音）
 *   task  : 动手任务            { k:'task',  body }
 *   quiz  : 测评题（含答案）    { k:'quiz',  q, opts:[...], ans, why }
 * ========================================================================== */
const CURRICULUM = [
  {
    id: 'L1', no: 1, cat: '字母', catEn: 'Letters', color: '#3C7DFF',
    scene: '🏔️ 字母音山谷', title: '26 个字母音启蒙',
    go: 'library', goLabel: '去考点库听发音',
    goal: '认识 26 个字母的「形」，掌握每个字母的「字母音」(letter sound)，建立 形→音 对应，为拼读打地基。',
    tip: '关键提示：字母有两个身份——名字（A 读“诶”，用于念字母表）和发音（A 在 apple 里发 /æ/，用于拼读）。先会“字母音”再学拼读。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'task', body: '准备一张 26 字母表（大写+小写）和一支彩色笔。' },
        { k: 'steps', items: [
          '和吉祥物 🦖 豆豆 Rex 一起唱 ABC 字母歌，边唱边指认每个字母。',
          '用红笔圈出 5 个元音字母 Aa Ee Ii Oo Uu，其余 21 个辅音用蓝笔。',
          '打开本应用「考点库 · 字母」，点开 a 听标准音。'
        ] },
        { k: 'task', body: '跟读挑战：家长指字母，孩子不念名字、改念“字母音”（指 A 说 /æ/，指 B 说 /b/）。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'A / æ', title: '字母的两个身份', body: '①字母名（A 读作“诶”，用于念字母表）；②字母音（A 在 apple 里发 /æ/，用于拼读）。先会“字母音”再学拼读。' },
        { k: 'words', sym: '5 个元音字母音', items: [
          ['Aa', '/æ/', 'apple 苹果'], ['Ee', '/e/', 'egg 蛋'], ['Ii', '/ɪ/', 'igloo 冰屋'],
          ['Oo', '/ɒ/', 'octopus 章鱼'], ['Uu', '/ʌ/', 'umbrella 伞']
        ] },
        { k: 'words', sym: '常用辅音字母音（含口型）', items: [
          ['Bb', '/b/', 'ball 球·双唇爆破'], ['Cc', '/k/', 'cat 猫·舌根抵软腭'], ['Dd', '/d/', 'dog 狗'],
          ['Ff', '/f/', 'fish 鱼·上齿咬下唇送气'], ['Ss', '/s/', 'sun 太阳'], ['Tt', '/t/', 'top 陀螺'],
          ['Mm', '/m/', 'map 地图'], ['Nn', '/n/', 'net 网']
        ] },
        { k: 'txt', body: '口型要点：元音要“张口送气、声音响亮”；辅音多数要“舌头/嘴唇制造阻碍”再放开。点「发音评测」可看每个音的口型图解。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '听音指字母：家长读 /æ/，孩子指出 A；读 /s/ 指出 S。做 10 轮。' },
        { k: 'steps', items: [
          '字母音接龙：A→/æ/，B→/b/，C→/k/ …… 轮流说，说错重来。',
          '找元音：在 CAT 里圈出 A（元音），在 DOG 里圈出 O。'
        ] },
        { k: 'task', body: '小游戏“钓鱼拼读”：把字母卡当鱼，念对字母音才能钓上来。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '听到 /d/ 这个字母音，应该指哪个字母？', opts: ['Bb', 'Dd', 'Pp'], ans: 'Dd', why: '/d/ 是 D 的字母音；B 发 /b/，P 发 /p/。' },
        { k: 'quiz', q: '圈出下面词里的元音字母：b a t e', opts: ['a、e', 'b、t', '没有'], ans: 'a、e', why: '五个元音是 a e i o u，b、t 是辅音。' },
        { k: 'quiz', q: '填空：__ pple（苹果）缺的首字母是？', opts: ['a', 'b', 'c'], ans: 'a', why: 'apple 首字母 A，字母音 /æ/。' },
        { k: 'quiz', q: '判断：单词 "cat" 的字母音连起来是 /k/-/æ/-/t/ 吗？', opts: ['对', '错'], ans: '对', why: 'c→/k/，a→/æ/，t→/t/，连读即 cat。' }
      ] }
    }
  },

  {
    id: 'L2', no: 2, cat: '元音', catEn: 'Short Vowels', color: '#FF7A45',
    scene: '🐱 猫咪词族村', title: '短元音 a/e/i/o/u（CVC 入门）',
    go: 'practice', goLabel: '去做 CVC 拼读练习',
    goal: '掌握 5 个短元音 /æ/ /e/ /ɪ/ /ɒ/ /ʌ/ 在 CVC（辅-元-辅）结构中的发音，能拼读常见 CVC 词。',
    tip: '关键提示：CVC = 辅音+元音+辅音；词尾 -at 不变，换首字母就变新词（cat/hat/bat）。短元音“短促有力”。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习 5 个元音字母音：Aa/æ、Ee/e、Ii/ɪ、Oo/ɒ、Uu/ʌ。',
          '看示例 cat，发现“辅音+元音+辅音”的三明治结构。',
          '准备词族卡：-at / -en / -ig。'
        ] },
        { k: 'task', body: '热身：快速读 cat / hat / map，感受短元音“短促有力”。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'CVC', title: '短元音结构', body: 'CVC = 辅音 + 元音 + 辅音，中间的元音发【短音】。短元音“短、快、嘴型放松”。' },
        { k: 'words', sym: '/æ/', items: [['cat','/kæt/','猫'],['hat','/hæt/','帽'],['mat','/mæt/','垫'],['sad','/sæd/','伤心'],['map','/mæp/','地图'],['bad','/bæd/','坏']] },
        { k: 'words', sym: '/e/', items: [['pen','/pen/','钢笔'],['ten','/ten/','十'],['bed','/bed/','床'],['red','/red/','红'],['leg','/leɡ/','腿'],['net','/net/','网']] },
        { k: 'words', sym: '/ɪ/', items: [['pig','/pɪɡ/','猪'],['big','/bɪɡ/','大'],['sit','/sɪt/','坐'],['pin','/pɪn/','别针'],['lit','/lɪt/','点燃'],['fig','/fɪɡ/','无花果']] },
        { k: 'words', sym: '/ɒ/', items: [['dog','/dɒɡ/','狗'],['hot','/hɒt/','热'],['pot','/pɒt/','锅'],['log','/lɒɡ/','木头'],['fox','/fɒks/','狐狸'],['box','/bɒks/','盒子']] },
        { k: 'words', sym: '/ʌ/', items: [['cup','/kʌp/','杯'],['sun','/sʌn/','太阳'],['bus','/bʌs/','公交'],['rug','/rʌɡ/','地毯'],['hug','/hʌɡ/','抱'],['nut','/nʌt/','坚果']] },
        { k: 'pairs', a: ['pin','/pɪn/','别针'], b: ['pen','/pen/','钢笔'], note: 'i 短促“衣”，e 微笑嘴，别混淆。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '拼读连音：c-a-t 指读连成 cat；换首字母读 hat / bat / rat。' },
        { k: 'steps', items: [
          '圈出短 a 词：cat、pen、hat → 答案是 cat、hat。',
          '词族接龙：-at 家（cat/hat/mat），-ig 家（pig/big/fig）。'
        ] },
        { k: 'task', body: '听音拍卡：家长读 /pɪɡ/，孩子拍 pig 卡。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '听到 /kæt/，应该选哪个词？', opts: ['cat', 'cut', 'cot'], ans: 'cat', why: '/æ/ 是短 a；cut 用 /ʌ/，cot 用 /ɒ/。' },
        { k: 'quiz', q: '补全 CVC：h__t（帽）缺的元音是？', opts: ['a', 'e', 'i'], ans: 'a', why: 'hat 含短 a /æ/。' },
        { k: 'quiz', q: '判断："dog" 中的 o 发短音 /ɒ/ 吗？', opts: ['对', '错'], ans: '对', why: 'dog = d-o-g，o 在 CVC 中发短音 /ɒ/。' },
        { k: 'quiz', q: '读句子并圈出 CVC 词：The cat is big.', opts: ['cat, big', 'The, is', 'cat, is'], ans: 'cat, big', why: 'cat、big 都是“辅-元-辅”结构。' }
      ] }
    }
  },

  {
    id: 'L3', no: 3, cat: '元音', catEn: 'Long Vowels', color: '#FF7A45',
    scene: '🏰 魔法城堡', title: '长元音 magic e（CVCe）',
    go: 'rule', goLabel: '去看 Magic e 讲解',
    goal: '理解“词尾 e 不发音，让前面元音发长音（字母名音）”，掌握 a_e / i_e / o_e / u_e，会做 cap→cape 变形。',
    tip: '关键提示：Silent e 自己不发音，却让前面的元音念出“字母本名”（a→A /eɪ/，i→I /aɪ/）。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习短元音 CVC：cap /kæp/、kit /kɪt/、not /nɒt/、cut /kʌt/。',
          '提问“如果词尾加个不发音的 e，会怎样？”',
          '看对比：cap（帽）vs cape（斗篷）。'
        ] },
        { k: 'task', body: '手势预热：双手比“短”（贴近）→ 加 e 后张开双臂比“长”。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'CVCe', title: '魔法 e 规则', body: '结构 元音+辅音+不发音e。词尾 silent e 让中间元音“变长”，发其字母名音：a→/eɪ/、i→/aɪ/、o→/əʊ/、u→/juː/。口诀：“元音+辅音+e，元音大声读字母名”。' },
        { k: 'words', sym: '/eɪ/ (a_e)', items: [['cake','/keɪk/','蛋糕'],['make','/meɪk/','做'],['take','/teɪk/','拿'],['name','/neɪm/','名字'],['came','/keɪm/','来']] },
        { k: 'words', sym: '/aɪ/ (i_e)', items: [['bike','/baɪk/','自行车'],['like','/laɪk/','喜欢'],['time','/taɪm/','时间'],['fine','/faɪn/','好'],['nine','/naɪn/','九']] },
        { k: 'words', sym: '/əʊ/ (o_e)', items: [['note','/nəʊt/','笔记'],['hope','/həʊp/','希望'],['rope','/rəʊp/','绳'],['bone','/bəʊn/','骨头'],['home','/həʊm/','家']] },
        { k: 'words', sym: '/juː/ (u_e)', items: [['cube','/kjuːb/','方块'],['tube','/tjuːb/','管子'],['cute','/kjuːt/','可爱'],['mule','/mjuːl/','骡'],['June','/dʒuːn/','六月']] },
        { k: 'pairs', a: ['cap','/kæp/','帽'], b: ['cape','/keɪp/','斗篷'], note: '只差一个 e，元音从 /æ/ 变成 /eɪ/。' },
        { k: 'txt', body: '易错：e_e 是特殊组合（these /ðiːz/）；ee 算元音组合，不算 magic e。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '变形魔法：给 CVC 加 e —— cap→cape、pin→pine、cut→cute、hop→hope。' },
        { k: 'steps', items: [
          '划出 magic e：在 cake 词尾的 e 上画一颗星星。',
          '长短音连线：cap↔/æ/，cape↔/eɪ/。'
        ] },
        { k: 'task', body: '拍蚊子：家长读 /baɪk/，孩子拍 bike（长 i），区分 bit /bɪt/。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '帮单词加 magic e 变长音：pin →', opts: ['pine', 'pin', 'pen'], ans: 'pine', why: '加 e 后 i 发长音 /aɪ/。' },
        { k: 'quiz', q: '听到 /keɪk/ 选哪个词？', opts: ['cake', 'cock', 'cook'], ans: 'cake', why: '/eɪ/ 是 a_e 长音。' },
        { k: 'quiz', q: '判断："bite" 中的 i 发 /aɪ/ 吗？', opts: ['对', '错'], ans: '对', why: 'b-i-t-e 是 i_e 结构，i 发长音 /aɪ/。' },
        { k: 'quiz', q: '读句子：I like my bike. 圈出 magic e 词', opts: ['like, bike', 'I, my', 'like, my'], ans: 'like, bike', why: 'like、bike 都是 i_e 结构。' }
      ] }
    }
  },

  {
    id: 'L4', no: 4, cat: '辅音', catEn: 'Consonants', color: '#2BB673',
    scene: '🌲 辅音森林', title: '辅音组合（连缀 + 双辅音）',
    go: 'practice', goLabel: '去练辅音组合',
    goal: '掌握辅音连缀(blends)与辅音组合(digraphs)：sh / ch / th / wh / ng / ck，拼读提速。',
    tip: '关键提示：辅音连缀（bl）是两个音各自发声、快速连读；双辅音（sh）是两个字母合发一个音，别拆开。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习单辅音：b / c / d / f / s / t / m / n。',
          '引出“两个辅音手拉手”会发出新声音。',
          '看示例：black、ship。'
        ] },
        { k: 'task', body: '热身：快速连说 b-l、s-h、c-h，感受“两个音”。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'bl / sh', title: '两类辅音组合', body: '①辅音连缀 blend：两个辅音各自发声、快速连读（bl、st、tr）；②辅音组合 digraph：两个字母合发一个音（sh /ʃ/、ch /tʃ/、th、wh、ng、ck）。' },
        { k: 'words', sym: '连缀 l-', items: [['black','/blæk/','黑'],['blue','/bluː/','蓝'],['block','/blɒk/','块'],['blanket','/ˈblæŋkɪt/','毯']] },
        { k: 'words', sym: '连缀 s-/t-', items: [['star','/stɑː/','星'],['stop','/stɒp/','停'],['step','/step/','步'],['tree','/triː/','树'],['truck','/trʌk/','卡车'],['train','/treɪn/','火车']] },
        { k: 'words', sym: '组合 sh / ch', items: [['ship','/ʃɪp/','船'],['shop','/ʃɒp/','店'],['fish','/fɪʃ/','鱼'],['chair','/tʃeə/','椅'],['chat','/tʃæt/','聊'],['much','/mʌtʃ/','多']] },
        { k: 'words', sym: '组合 th / ng / ck', items: [['this','/ðɪs/','这'],['thin','/θɪn/','瘦'],['sing','/sɪŋ/','唱'],['ring','/rɪŋ/','环'],['duck','/dʌk/','鸭']] },
        { k: 'pairs', a: ['ship','/ʃɪp/','船'], b: ['chip','/tʃɪp/','芯片'], note: 'sh 发 /ʃ/，ch 发 /tʃ/，别混。' },
        { k: 'txt', body: 'th 有两种：this（舌头放齿间振动，/ð/）与 thin（只送气不振动，/θ/）。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '分类游戏：把卡分成“连缀(bl/st)”与“组合(sh/ch)”两堆。' },
        { k: 'steps', items: [
          '拼读连缀：b-l-a-ck → black。',
          '听音辨 sh/ch：家长读 /ʃɪp/ 拍 ship，读 /tʃɪp/ 拍 chip。'
        ] },
        { k: 'task', body: '寻宝：在 fish 里圈出 sh，在 chair 里圈出 ch。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '哪个组合发 /ʃ/？', opts: ['sh', 'ch', 'th'], ans: 'sh', why: 'sh 合发 /ʃ/；ch 发 /tʃ/。' },
        { k: 'quiz', q: '补全：__ ip（船）缺的开头是？', opts: ['sh', 'ch', 'st'], ans: 'sh', why: 'ship 以 sh 开头。' },
        { k: 'quiz', q: '判断："black" 中的 bl 发两个音吗？', opts: ['对', '错'], ans: '对', why: 'bl 是辅音连缀，b 和 l 都发声、快速连读。' },
        { k: 'quiz', q: '读句子并圈出组合词：The ship is on the shop.', opts: ['ship, shop', 'The, is', 'on, the'], ans: 'ship, shop', why: 'ship、shop 都含 sh 组合。' }
      ] }
    }
  },

  {
    id: 'L5', no: 5, cat: '多元音', catEn: 'Vowel Teams', color: '#9B5DE5',
    scene: '⛵ 元音海洋', title: '元音组合 + R 控制元音',
    go: 'rule', goLabel: '去看元音组合',
    goal: '掌握元音组合(vowel teams)与 r 控制元音(ar / or / er·ir·ur)，理解“两个元音一起走，第一个发本音”。',
    tip: '关键提示：两个元音在一起，通常第一个发声、第二个安静——ai 读 A，ee 读 E。但 ar/or/er 受 r 控制，元音不再发本音。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习 magic e 长音（a_e / i_e / o_e）。',
          '引出“两个元音组队开小船”。',
          '看示例：rain、boat。'
        ] },
        { k: 'task', body: '手势：两手并排走，代表“两个元音一起走”。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'ai / ee', title: '元音组合口诀', body: '“两个元音在一起，通常第一个发声、第二个安静”。如 ai→A /eɪ/，ee→E /iː/，oa→O /əʊ/。' },
        { k: 'words', sym: 'ai / ay', items: [['rain','/reɪn/','雨'],['pain','/peɪn/','痛'],['day','/deɪ/','天'],['play','/pleɪ/','玩'],['say','/seɪ/','说']] },
        { k: 'words', sym: 'ee / ea', items: [['see','/siː/','看'],['tree','/triː/','树'],['eat','/iːt/','吃'],['read','/riːd/','读'],['sea','/siː/','海']] },
        { k: 'words', sym: 'oa / ow', items: [['boat','/bəʊt/','船'],['coat','/kəʊt/','外套'],['snow','/snəʊ/','雪'],['grow','/ɡrəʊ/','生长'],['low','/ləʊ/','低']] },
        { k: 'words', sym: 'r 控制元音', items: [['car','/kɑː/','车'],['star','/stɑː/','星'],['park','/pɑːk/','公园'],['for','/fɔː/','为了'],['corn','/kɔːn/','玉米'],['her','/hɜː/','她'],['tiger','/ˈtaɪɡə/','虎']] },
        { k: 'pairs', a: ['boat','/bəʊt/','船'], b: ['boot','/buːt/','靴'], note: 'oa 发 /əʊ/，oo 发 /uː/，别读错。' },
        { k: 'txt', body: '易错：oo 有长短两读（moon /uː/ 长，book /ʊ/ 短）；er/ir/ur 三个都发同一个音 /ɜː/。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '归类游戏：day/play→ay，rain/train→ai，see/tree→ee。' },
        { k: 'steps', items: [
          '读组合词：r-a-i-n → rain。',
          '圈出 r 控制元音：在 car / for / her 下划线。'
        ] },
        { k: 'task', body: '拍蚊子：家长读 /reɪn/ 拍 rain，读 /ræn/ 拍 ran（区分 ai 与短 a）。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '听到 /reɪn/ 选哪个词？', opts: ['rain', 'ran', 'run'], ans: 'rain', why: '/eɪ/ 是 ai 组合；ran 是 /ræn/。' },
        { k: 'quiz', q: '补全：r__n（雨）用的组合是？', opts: ['ai', 'ay', 'ee'], ans: 'ai', why: 'rain 用 ai 组合。' },
        { k: 'quiz', q: '判断："star" 中 ar 发 /ɑː/ 吗？', opts: ['对', '错'], ans: '对', why: 'ar 受 r 控制发 /ɑː/。' },
        { k: 'quiz', q: '读句子并圈出元音组合：I see a boat on the sea.', opts: ['see, boat, sea', 'I, a, on', 'boat, on, the'], ans: 'see, boat, sea', why: 'see(ee)、boat(oa)、sea(ea) 都是元音组合。' }
      ] }
    }
  },

  {
    id: 'L6', no: 6, cat: '多元音', catEn: 'Diphthongs', color: '#9B5DE5',
    scene: '🐉 恐龙山谷', title: '双元音 + 多音节词拆分',
    go: 'rule', goLabel: '去看难点规则',
    goal: '掌握双元音(ou/ow、oi/oy)与多音节词拆分，综合运用前面所有规则。',
    tip: '关键提示：双元音是两个元音快速滑动成一个音（ou→/aʊ/，oi→/ɔɪ/）；一个元音构成一个音节，长词按音节拆开读再连起来。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习元音组合 ai / ee / oa。',
          '引出“元音滑动组合”双元音。',
          '看示例：out、coin、rabbit。'
        ] },
        { k: 'task', body: '热身：发 /aʊ/ 像“啊—呜”滑动；发 /ɔɪ/ 像“奥—衣”滑动。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: 'ou / oi', title: '双元音与音节', body: '双元音 = 两个元音快速滑动成一个音：ou/ow→/aʊ/(house)，oi/oy→/ɔɪ/(coin)。多音节：一个元音 = 一个音节，按元音数拆分。' },
        { k: 'words', sym: '/aʊ/ ou·ow', items: [['out','/aʊt/','出'],['house','/haʊs/','房'],['cow','/kaʊ/','牛'],['how','/haʊ/','怎样'],['now','/naʊ/','现在']] },
        { k: 'words', sym: '/ɔɪ/ oi·oy', items: [['oil','/ɔɪl/','油'],['coin','/kɔɪn/','硬币'],['boy','/bɔɪ/','男孩'],['toy','/tɔɪ/','玩具']] },
        { k: 'words', sym: '多音节拆分', items: [['rab-bit','/ˈræbɪt/','兔'],['pen-cil','/ˈpensl/','铅笔'],['bas-ket','/ˈbɑːskɪt/','篮'],['win-dow','/ˈwɪndəʊ/','窗'],['hap-py','/ˈhæpi/','开心']] },
        { k: 'words', sym: '组合多音节', items: [['sun-flower','/ˈsʌnflaʊə/','向日葵'],['but-ter-fly','/ˈbʌtəflaɪ/','蝴蝶']] },
        { k: 'pairs', a: ['house','/haʊs/','房'], b: ['horse','/hɔːs/','马'], note: 'ou/ow 发 /aʊ/，or 受 r 控制发 /ɔː/。' },
        { k: 'txt', body: '重音：多音节词常第一音节重读；拆分口诀“数元音、一元音一拍”。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '拍手数音节：rab-bit（2 拍），but-ter-fly（3 拍）。' },
        { k: 'steps', items: [
          '拆分长词：pen-cil、sun-flower。',
          '拼读多音节：逐拍拼再连起来。'
        ] },
        { k: 'task', body: '找双元音：在 cow / coin 下圈出 ou / oi。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '"rabbit" 有几个音节？', opts: ['1', '2', '3'], ans: '2', why: '两元音 a、i，故两音节 rab-bit。' },
        { k: 'quiz', q: '拆分 pencil 正确的是？', opts: ['pen-cil', 'pe-ncil', 'penc-il'], ans: 'pen-cil', why: '按元音 e、i 拆。' },
        { k: 'quiz', q: '判断："cow" 中的 ow 发 /aʊ/ 吗？', opts: ['对', '错'], ans: '对', why: 'ow 在此发双元音 /aʊ/。' },
        { k: 'quiz', q: '读句子：The butterfly is on the flower. 圈出多音节词', opts: ['butterfly, flower', 'The, is', 'on, the'], ans: 'butterfly, flower', why: 'butterfly(3)、flower(2) 都是多音节。' }
      ] }
    }
  },

  {
    id: 'L7', no: 7, cat: '句子', catEn: 'Sentences', color: '#E8B23B',
    scene: '🗼 句子小镇', title: '句子拼读与标点',
    go: 'reading', goLabel: '去读句子练习',
    goal: '能流利拼读并理解简单句子，掌握标点与停顿，识别高频词(sight words)。',
    tip: '关键提示：句子 = 主语 + 动作（The cat sits.）。句尾 . 用降调、? 用升调、! 强调。高频词(the/is/my)要先一眼认出。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习 CVC / CVCE / 元音组合。',
          '看例句：The cat sits.',
          '准备“句子卡”。'
        ] },
        { k: 'task', body: '热身：逐词指读 The cat is big.，不跳词。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: '. ? !', title: '句子与标点', body: '句子 = 主语 + 动作（The cat sits.）。句尾 . 用降调；? 用升调；! 强调。词间短停，意群不断。' },
        { k: 'words', sym: '高频词 sight words', items: [['the','/ðə/','这'],['is','/ɪz/','是'],['my','/maɪ/','我的'],['we','/wiː/','我们'],['a','/ə/','一个'],['I','/aɪ/','我'],['on','/ɒn/','在…上'],['see','/siː/','看见']] },
        { k: 'txt', body: '例句解码：下面三句都可点 🔊 逐句听读（标 /…/ 的是完整音标）。' },
        { k: 'sent', en: 'The cat is big.', ipa: '/ðə kæt ɪz bɪɡ/' },
        { k: 'sent', en: 'I like my red bike.', ipa: '/aɪ laɪk maɪ red baɪk/' },
        { k: 'sent', en: 'We see a blue ship.', ipa: '/wiː siː ə bluː ʃɪp/' },
        { k: 'steps', items: [
          '阅读四步：①逐词拼读 ②连成句 ③看图理解 ④用降调读句尾。'
        ] },
        { k: 'pairs', a: ['sat','/sæt/','坐(短a)'], b: ['set','/set/','放(短e)'], note: '句内元音也要注意：sat 用 /æ/，set 用 /e/。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '指读句子：The dog is hot. 边读边点词。' },
        { k: 'steps', items: [
          '给句子配图（cat→猫图）。',
          '划出 sight words：在 The / is / my / we 下划线。'
        ] },
        { k: 'task', body: '升降调练习：陈述句降调；疑问句 Is it big? 升调。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '读句子并圈出 CVC 词：The cat sat on the mat.', opts: ['cat, sat, mat', 'The, on', 'cat, the'], ans: 'cat, sat, mat', why: 'cat、sat、mat 都是 CVC。' },
        { k: 'quiz', q: '选标点："The dog is hot ___"', opts: ['.', '?', '!'], ans: '.', why: '陈述句用句号、降调。' },
        { k: 'quiz', q: '高频词 the 读作？', opts: ['/ðə/', '/θiː/', '/tɛ/'], ans: '/ðə/', why: 'the 是高频词，弱读 /ðə/。' },
        { k: 'quiz', q: '读句子：We can see the sun. 圈出 sight words', opts: ['we, see, the', 'can, sun', 'We, the'], ans: 'we, see, the', why: 'we、see、the 都是高频词。' }
      ] }
    }
  },

  {
    id: 'L8', no: 8, cat: '文章', catEn: 'Passages', color: '#E8743B',
    scene: '🏖️ 阅读灯塔', title: '可解码短文阅读',
    go: 'reading', goLabel: '去读可解码短文',
    goal: '能拼读并理解短篇可解码故事，综合运用全部规则，回答简单问题。',
    tip: '关键提示：可解码文只含已学音素。阅读策略：逐词拼读 → 连句 → 看图理解 → 回答谁/做什么。',
    phases: {
      pre: { title: '① 预习', blocks: [
        { k: 'steps', items: [
          '复习句子拼读。',
          '准备两篇小故事卡。',
          '看《The Big Pig》。'
        ] },
        { k: 'task', body: '热身：用“手指词”法，一词一指读短句。' }
      ] },
      learn: { title: '② 学习', blocks: [
        { k: 'rule', sym: '读文四步', title: '短文阅读策略', body: '逐词拼读 → 连句 → 看图理解 → 回答谁/做什么。可解码文只含已学音素。' },
        { k: 'txt', body: '短文1《The Big Pig》（点 🔊 听全文）：' },
        { k: 'sent', en: 'The big pig is in the mud. The pig is hot. The pup is on the rug. The pup is not hot. The pig and the pup are fun.' },
        { k: 'txt', body: '短文2《A Cake for Jake》（点 🔊 听全文）：' },
        { k: 'sent', en: 'Jake can make a cake. The cake is in the pan. Kate ate the cake. Jake is late. The pan is safe.' },
        { k: 'steps', items: [
          '提问练习：①Who is in the mud?（the pig）②What did Kate eat?（the cake）③Is the pup hot?（no）'
        ] },
        { k: 'pairs', a: ['cake','/keɪk/','蛋糕(a_e长音)'], b: ['cook','/kʊk/','煮(oo短音)'], note: '文章里注意长/短音：cake 用 a_e，cook 用 oo 短音。' }
      ] },
      review: { title: '③ 复习', blocks: [
        { k: 'task', body: '指读短文：逐句读《The Big Pig》，不卡顿。' },
        { k: 'steps', items: [
          '复述故事：用 3 句话讲 pig 和 pup。',
          '圈学过的规则词：在 cake(magic e)、rain(元音组合) 下划线。'
        ] },
        { k: 'task', body: '角色扮演：一人当 pig，一人当 pup 对话。' }
      ] },
      quiz: { title: '④ 评测', blocks: [
        { k: 'quiz', q: '读《The Big Pig》回答：Where is the pig?', opts: ['in the mud', 'on the rug', 'in the pan'], ans: 'in the mud', why: '原文 "The big pig is in the mud."' },
        { k: 'quiz', q: '圈出 magic e 词（短文2）：', opts: ['cake, make, late, safe', 'Jake, pan, Kate', 'the, is, ate'], ans: 'cake, make, late, safe', why: '四个都是 a_e 结构。' },
        { k: 'quiz', q: '判断：《A Cake for Jake》里 Jake 迟到(late)了吗？', opts: ['对', '错'], ans: '对', why: '原文 "Jake is late."' },
        { k: 'quiz', q: '读句子：The cat and the pup are on the mat. 圈出 CVC 词', opts: ['cat, pup, mat', 'The, and', 'on, the'], ans: 'cat, pup, mat', why: 'cat、pup、mat 都是 CVC。' }
      ] }
    }
  }
];
