/* =========================================================================
 * 少儿英语自然拼读学习系统 · 数据底座 (data.js)
 * 三级考点库：字母 — 音素 — 例词
 * 覆盖体系：26字母音 → CVC → 短元音 → 辅音连缀(blends)/字母组合(digraphs)
 *          → 长元音/静音e → 元音组合 → r控制元音 → 特殊发音与高频词
 * 同时承载：规则说明 / 可解码阅读 / 微课导入 / 背诵韵文 / 词表
 * 所有发音标注采用 IPA 或自然拼读符号(ă/ā)，例词与规则以权威体系为准。
 * ========================================================================= */

const KB = {
  meta: {
    grades: ['通用启蒙级', '一年级上', '一年级下', '二年级上', '二年级下', '三年级上', '三年级下'],
    publishers: ['人教版PEP', '外研社新标准', '牛津上海版', '译林版', '朗文'],
    note: '未声明教材版本时默认「通用启蒙级」并显式标注。'
  },

  /* ============ 一、考点库（字母—音素—例词 三级） ============ */
  categories: [
    /* —— 26 字母音 —— */
    {
      id: 'letters', name: '26 字母音', icon: '🔤', color: '#5B8DEF',
      desc: '每个字母最基础的声音，是自然拼读的起点。',
      units: [
        { id: 'L-a', label: '字母 a', sym: 'ă', ipa: '/æ/', tip: '苹果 a，嘴巴张大', words: [{w:'apple',syl:'ap-ple',m:'苹果',ipa:'/ˈæp.əl/'},{w:'ant',syl:'ant',m:'蚂蚁',ipa:'/ænt/'},{w:'ax',syl:'ax',m:'斧头',ipa:'/æks/'}] },
        { id: 'L-b', label: '字母 b', sym: 'b', ipa: '/b/', tip: '气球 b，双唇爆破', words: [{w:'ball',syl:'ball',m:'球',ipa:'/bɔːl/'},{w:'bus',syl:'bus',m:'公交车',ipa:'/bʌs/'},{w:'book',syl:'book',m:'书',ipa:'/bʊk/'}] },
        { id: 'L-c', label: '字母 c', sym: 'k', ipa: '/k/', tip: '猫 c 常发 /k/', words: [{w:'cat',syl:'cat',m:'猫',ipa:'/kæt/'},{w:'cup',syl:'cup',m:'杯子',ipa:'/kʌp/'},{w:'cap',syl:'cap',m:'帽子',ipa:'/kæp/'}] },
        { id: 'L-d', label: '字母 d', sym: 'd', ipa: '/d/', tip: '门 d，舌尖弹一下', words: [{w:'dog',syl:'dog',m:'狗',ipa:'/dɒɡ/'},{w:'duck',syl:'duck',m:'鸭子',ipa:'/dʌk/'},{w:'desk',syl:'desk',m:'书桌',ipa:'/desk/'}] },
        { id: 'L-e', label: '字母 e', sym: 'ĕ', ipa: '/e/', tip: '蛋 e，嘴角微咧', words: [{w:'egg',syl:'egg',m:'蛋',ipa:'/eɡ/'},{w:'elephant',syl:'el-e-phant',m:'大象',ipa:'/ˈel.ɪ.fənt/'},{w:'pen',syl:'pen',m:'钢笔',ipa:'/pen/'}] },
        { id: 'L-f', label: '字母 f', sym: 'f', ipa: '/f/', tip: '鱼 f，上牙轻咬下唇', words: [{w:'fish',syl:'fish',m:'鱼',ipa:'/fɪʃ/'},{w:'fan',syl:'fan',m:'扇子',ipa:'/fæn/'},{w:'fox',syl:'fox',m:'狐狸',ipa:'/fɒks/'}] },
        { id: 'L-g', label: '字母 g', sym: 'g', ipa: '/ɡ/', tip: '鹅 g，舌后爆破', words: [{w:'goat',syl:'goat',m:'山羊',ipa:'/ɡəʊt/'},{w:'gate',syl:'gate',m:'大门',ipa:'/ɡeɪt/'},{w:'girl',syl:'girl',m:'女孩',ipa:'/ɡɜːl/'}] },
        { id: 'L-h', label: '字母 h', sym: 'h', ipa: '/h/', tip: '马 h，轻轻吐气', words: [{w:'hat',syl:'hat',m:'帽子',ipa:'/hæt/'},{w:'hen',syl:'hen',m:'母鸡',ipa:'/hen/'},{w:'house',syl:'house',m:'房子',ipa:'/haʊs/'}] },
        { id: 'L-i', label: '字母 i', sym: 'ĭ', ipa: '/ɪ/', tip: '蝌蚪 i，短而轻', words: [{w:'igloo',syl:'ig-loo',m:'冰屋',ipa:'/ˈɪɡ.luː/'},{w:'pig',syl:'pig',m:'猪',ipa:'/pɪɡ/'},{w:'in',syl:'in',m:'在…里',ipa:'/ɪn/'}] },
        { id: 'L-j', label: '字母 j', sym: 'j', ipa: '/dʒ/', tip: ' jellyfish 发 /dʒ/', words: [{w:'jump',syl:'jump',m:'跳',ipa:'/dʒʌmp/'},{w:'jet',syl:'jet',m:'喷气式飞机',ipa:'/dʒet/'},{w:'jam',syl:'jam',m:'果酱',ipa:'/dʒæm/'}] },
        { id: 'L-k', label: '字母 k', sym: 'k', ipa: '/k/', tip: '风筝 k，舌后爆破', words: [{w:'kite',syl:'kite',m:'风筝',ipa:'/kaɪt/'},{w:'key',syl:'key',m:'钥匙',ipa:'/kiː/'},{w:'king',syl:'king',m:'国王',ipa:'/kɪŋ/'}] },
        { id: 'L-l', label: '字母 l', sym: 'l', ipa: '/l/', tip: '灯 l，舌尖顶上颚', words: [{w:'lion',syl:'li-on',m:'狮子',ipa:'/ˈlaɪ.ən/'},{w:'leg',syl:'leg',m:'腿',ipa:'/leɡ/'},{w:'leaf',syl:'leaf',m:'叶子',ipa:'/liːf/'}] },
        { id: 'L-m', label: '字母 m', sym: 'm', ipa: '/m/', tip: '嘴 m，双唇闭合哼鸣', words: [{w:'monkey',syl:'mon-key',m:'猴子',ipa:'/ˈmʌŋ.ki/'},{w:'milk',syl:'milk',m:'牛奶',ipa:'/mɪlk/'},{w:'map',syl:'map',m:'地图',ipa:'/mæp/'}] },
        { id: 'L-n', label: '字母 n', sym: 'n', ipa: '/n/', tip: '鼻 n，舌尖顶上颚哼鸣', words: [{w:'nest',syl:'nest',m:'鸟巢',ipa:'/nest/'},{w:'nose',syl:'nose',m:'鼻子',ipa:'/nəʊz/'},{w:'net',syl:'net',m:'网',ipa:'/net/'}] },
        { id: 'L-o', label: '字母 o', sym: 'ŏ', ipa: '/ɒ/', tip: '章鱼 o，圆嘴短音', words: [{w:'octopus',syl:'oc-to-pus',m:'章鱼',ipa:'/ˈɒk.tə.pəs/'},{w:'ox',syl:'ox',m:'公牛',ipa:'/ɒks/'},{w:'box',syl:'box',m:'盒子',ipa:'/bɒks/'}] },
        { id: 'L-p', label: '字母 p', sym: 'p', ipa: '/p/', tip: '铅笔 p，双唇爆破', words: [{w:'pencil',syl:'pen-cil',m:'铅笔',ipa:'/ˈpen.səl/'},{w:'pig',syl:'pig',m:'猪',ipa:'/pɪɡ/'},{w:'pan',syl:'pan',m:'平底锅',ipa:'/pæn/'}] },
        { id: 'L-q', label: '字母 qu', sym: 'kw', ipa: '/kw/', tip: 'q 常和 u 一起发 /kw/', words: [{w:'queen',syl:'queen',m:'女王',ipa:'/kwiːn/'},{w:'quiet',syl:'qui-et',m:'安静的',ipa:'/ˈkwaɪ.ət/'},{w:'quack',syl:'quack',m:'鸭叫',ipa:'/kwæk/'}] },
        { id: 'L-r', label: '字母 r', sym: 'r', ipa: '/r/', tip: '彩虹 r，卷舌', words: [{w:'rabbit',syl:'rab-bit',m:'兔子',ipa:'/ˈræb.ɪt/'},{w:'red',syl:'red',m:'红色',ipa:'/red/'},{w:'rain',syl:'rain',m:'雨',ipa:'/reɪn/'}] },
        { id: 'L-s', label: '字母 s', sym: 's', ipa: '/s/', tip: '蛇 s，咝咝漏气', words: [{w:'sun',syl:'sun',m:'太阳',ipa:'/sʌn/'},{w:'snake',syl:'snake',m:'蛇',ipa:'/sneɪk/'},{w:'six',syl:'six',m:'六',ipa:'/sɪks/'}] },
        { id: 'L-t', label: '字母 t', sym: 't', ipa: '/t/', tip: '乌龟 t，舌尖弹一下', words: [{w:'tiger',syl:'ti-ger',m:'老虎',ipa:'/ˈtaɪ.ɡə/'},{w:'ten',syl:'ten',m:'十',ipa:'/ten/'},{w:'top',syl:'top',m:'顶/陀螺',ipa:'/tɒp/'}] },
        { id: 'L-u', label: '字母 u', sym: 'ŭ', ipa: '/ʌ/', tip: '伞 u，短而松', words: [{w:'umbrella',syl:'um-brel-la',m:'伞',ipa:'/ʌmˈbrel.ə/'},{w:'up',syl:'up',m:'向上',ipa:'/ʌp/'},{w:'bug',syl:'bug',m:'小虫',ipa:'/bʌɡ/'}] },
        { id: 'L-v', label: '字母 v', sym: 'v', ipa: '/v/', tip: '上牙轻咬下唇震动', words: [{w:'van',syl:'van',m:'厢式车',ipa:'/væn/'},{w:'violin',syl:'vi-o-lin',m:'小提琴',ipa:'/ˌvaɪəˈlɪn/'},{w:'vest',syl:'vest',m:'背心',ipa:'/vest/'}] },
        { id: 'L-w', label: '字母 w', sym: 'w', ipa: '/w/', tip: '风 w，圆唇吹气', words: [{w:'water',syl:'wa-ter',m:'水',ipa:'/ˈwɔː.tə/'},{w:'worm',syl:'worm',m:'蠕虫',ipa:'/wɜːm/'},{w:'web',syl:'web',m:'网',ipa:'/web/'}] },
        { id: 'L-x', label: '字母 x', sym: 'ks', ipa: '/ks/', tip: 'x 常在词尾发 /ks/', words: [{w:'box',syl:'box',m:'盒子',ipa:'/bɒks/'},{w:'fox',syl:'fox',m:'狐狸',ipa:'/fɒks/'},{w:'six',syl:'six',m:'六',ipa:'/sɪks/'}] },
        { id: 'L-y', label: '字母 y', sym: 'y', ipa: '/j/', tip: '瑜伽 y 词首发 /j/', words: [{w:'yellow',syl:'yel-low',m:'黄色',ipa:'/ˈjel.əʊ/'},{w:'yes',syl:'yes',m:'是',ipa:'/jes/'},{w:'yoyo',syl:'yo-yo',m:'悠悠球',ipa:'/ˈjəʊ.jəʊ/'}] },
        { id: 'L-z', label: '字母 z', sym: 'z', ipa: '/z/', tip: '蜜蜂 z，震动漏气', words: [{w:'zebra',syl:'ze-bra',m:'斑马',ipa:'/ˈziː.brə/'},{w:'zoo',syl:'zoo',m:'动物园',ipa:'/zuː/'},{w:'zip',syl:'zip',m:'拉链',ipa:'/zɪp/'}] }
      ]
    },

    /* —— 短元音 CVC —— */
    {
      id: 'short-vowel', name: '短元音 CVC', icon: '🅰️', color: '#FF9F43',
      desc: '辅音+元音+辅音，发短促元音。拼读第一步。',
      units: [
        { id: 'SV-a', label: '短音 a (ă)', sym: 'ă', ipa: '/æ/', tip: 'a 在中间发短音 /æ/', words: [{w:'cat',syl:'cat',m:'猫',ipa:'/kæt/'},{w:'map',syl:'map',m:'地图',ipa:'/mæp/'},{w:'hat',syl:'hat',m:'帽子',ipa:'/hæt/'},{w:'bag',syl:'bag',m:'包',ipa:'/bæɡ/'}] },
        { id: 'SV-e', label: '短音 e (ĕ)', sym: 'ĕ', ipa: '/e/', tip: 'e 在中间发短音 /e/', words: [{w:'pen',syl:'pen',m:'钢笔',ipa:'/pen/'},{w:'bed',syl:'bed',m:'床',ipa:'/bed/'},{w:'red',syl:'red',m:'红色',ipa:'/red/'},{w:'leg',syl:'leg',m:'腿',ipa:'/leɡ/'}] },
        { id: 'SV-i', label: '短音 i (ĭ)', sym: 'ĭ', ipa: '/ɪ/', tip: 'i 在中间发短音 /ɪ/', words: [{w:'pig',syl:'pig',m:'猪',ipa:'/pɪɡ/'},{w:'sit',syl:'sit',m:'坐',ipa:'/sɪt/'},{w:'big',syl:'big',m:'大的',ipa:'/bɪɡ/'},{w:'pin',syl:'pin',m:'别针',ipa:'/pɪn/'}] },
        { id: 'SV-o', label: '短音 o (ŏ)', sym: 'ŏ', ipa: '/ɒ/', tip: 'o 在中间发短音 /ɒ/', words: [{w:'dog',syl:'dog',m:'狗',ipa:'/dɒɡ/'},{w:'hot',syl:'hot',m:'热的',ipa:'/hɒt/'},{w:'pot',syl:'pot',m:'锅',ipa:'/pɒt/'},{w:'box',syl:'box',m:'盒子',ipa:'/bɒks/'}] },
        { id: 'SV-u', label: '短音 u (ŭ)', sym: 'ŭ', ipa: '/ʌ/', tip: 'u 在中间发短音 /ʌ/', words: [{w:'cup',syl:'cup',m:'杯子',ipa:'/kʌp/'},{w:'sun',syl:'sun',m:'太阳',ipa:'/sʌn/'},{w:'bus',syl:'bus',m:'公交车',ipa:'/bʌs/'},{w:'bug',syl:'bug',m:'小虫',ipa:'/bʌɡ/'}] }
      ]
    },

    /* —— 辅音连缀 blends —— */
    {
      id: 'blends', name: '辅音连缀 Blends', icon: '🔗', color: '#54C9A6',
      desc: '两个辅音挨在一起，各自发声、快速连读（如 bl、st）。',
      units: [
        { id: 'BL-l', label: '词首 l 连缀', sym: 'bl/cl/fl', ipa: '/bl//kl//fl/', tip: 'l 连缀：两个音都发', words: [{w:'blue',syl:'blue',m:'蓝色',ipa:'/bluː/'},{w:'clock',syl:'clock',m:'时钟',ipa:'/klɒk/'},{w:'flag',syl:'flag',m:'旗',ipa:'/flæɡ/'}] },
        { id: 'BL-r', label: '词首 r 连缀', sym: 'br/cr/dr', ipa: '/br//kr//dr/', tip: 'r 连缀：卷舌连读', words: [{w:'bread',syl:'bread',m:'面包',ipa:'/bred/'},{w:'crab',syl:'crab',m:'螃蟹',ipa:'/kræb/'},{w:'drum',syl:'drum',m:'鼓',ipa:'/drʌm/'}] },
        { id: 'BL-s', label: '词首 s 连缀', sym: 'st/sp/sw', ipa: '/st//sp//sw/', tip: 's 连缀：先吐气后连读', words: [{w:'star',syl:'star',m:'星星',ipa:'/stɑː/'},{w:'spoon',syl:'spoon',m:'勺子',ipa:'/spuːn/'},{w:'swim',syl:'swim',m:'游泳',ipa:'/swɪm/'}] }
      ]
    },

    /* —— 字母组合 digraphs —— */
    {
      id: 'digraphs', name: '字母组合 Digraphs', icon: '💞', color: '#FF6B9D',
      desc: '两个字母合在一起发一个全新的音（如 sh、ch、th）。',
      units: [
        { id: 'DG-sh', label: 'sh 的发音', sym: 'sh', ipa: '/ʃ/', tip: 'sh 把食指放嘴前「嘘——」', words: [{w:'ship',syl:'ship',m:'船',ipa:'/ʃɪp/'},{w:'fish',syl:'fish',m:'鱼',ipa:'/fɪʃ/'},{w:'shoe',syl:'shoe',m:'鞋',ipa:'/ʃuː/'}] },
        { id: 'DG-ch', label: 'ch 的发音', sym: 'ch', ipa: '/tʃ/', tip: 'ch 像小鸟「啾」一声', words: [{w:'chip',syl:'chip',m:'薯片',ipa:'/tʃɪp/'},{w:'chair',syl:'chair',m:'椅子',ipa:'/tʃeə/'},{w:'watch',syl:'watch',m:'手表',ipa:'/wɒtʃ/'}] },
        { id: 'DG-th', label: 'th 的发音', sym: 'th', ipa: '/θ//ð/', tip: 'th 舌尖伸到上下牙之间', words: [{w:'three',syl:'three',m:'三',ipa:'/θriː/'},{w:'thumb',syl:'thumb',m:'拇指',ipa:'/θʌm/'},{w:'this',syl:'this',m:'这个',ipa:'/ðɪs/'}] },
        { id: 'DG-wh', label: 'wh 的发音', sym: 'wh', ipa: '/w//h/', tip: 'wh 常在词首发 /w/（或/h/）', words: [{w:'whale',syl:'whale',m:'鲸',ipa:'/weɪl/'},{w:'wheel',syl:'wheel',m:'轮子',ipa:'/wiːl/'},{w:'white',syl:'white',m:'白色',ipa:'/waɪt/'}] },
        { id: 'DG-ck', label: 'ck 的发音', sym: 'ck', ipa: '/k/', tip: 'ck 在词尾发 /k/', words: [{w:'duck',syl:'duck',m:'鸭子',ipa:'/dʌk/'},{w:'lock',syl:'lock',m:'锁',ipa:'/lɒk/'},{w:'sock',syl:'sock',m:'袜子',ipa:'/sɒk/'}] }
      ]
    },

    /* —— 长元音 / 静音 e（Magic e） —— */
    {
      id: 'silent-e', name: '长元音·静音 e（Magic e）', icon: '🪄', color: '#9B6BF2',
      desc: '「元音+辅音+e」（CVCe）结构里，词尾的 e 不发音，却让前面的元音变「长」——发它的字母名。这就是小朋友最爱的「魔术 e / magic e」：cap→cape、bit→bite、hop→hope、cub→cube。',
      units: [
        { id: 'SE-a', label: 'a_e 发 /eɪ/', sym: 'ā', ipa: '/eɪ/', tip: 'a 碰到结尾 e，a 发字母名 ā', words: [
          {w:'cake',syl:'cake',m:'蛋糕',ipa:'/keɪk/'},{w:'name',syl:'name',m:'名字',ipa:'/neɪm/'},{w:'gate',syl:'gate',m:'大门',ipa:'/ɡeɪt/'},
          {w:'cape',syl:'cape',m:'斗篷；海角',ipa:'/keɪp/'},{w:'tape',syl:'tape',m:'胶带',ipa:'/teɪp/'},{w:'plane',syl:'plane',m:'飞机',ipa:'/pleɪn/'},
          {w:'game',syl:'game',m:'游戏',ipa:'/ɡeɪm/'},{w:'make',syl:'make',m:'制作',ipa:'/meɪk/'},{w:'take',syl:'take',m:'拿；带',ipa:'/teɪk/'},
          {w:'face',syl:'face',m:'脸',ipa:'/feɪs/'},{w:'lake',syl:'lake',m:'湖',ipa:'/leɪk/'} ] },
        { id: 'SE-i', label: 'i_e 发 /aɪ/', sym: 'ī', ipa: '/aɪ/', tip: 'i 碰到结尾 e，i 发 /aɪ/', words: [
          {w:'bike',syl:'bike',m:'自行车',ipa:'/baɪk/'},{w:'time',syl:'time',m:'时间',ipa:'/taɪm/'},{w:'kite',syl:'kite',m:'风筝',ipa:'/kaɪt/'},
          {w:'bite',syl:'bite',m:'咬',ipa:'/baɪt/'},{w:'ride',syl:'ride',m:'骑',ipa:'/raɪd/'},{w:'five',syl:'five',m:'五',ipa:'/faɪv/'},
          {w:'line',syl:'line',m:'线；排',ipa:'/laɪn/'},{w:'side',syl:'side',m:'边；面',ipa:'/saɪd/'},{w:'nice',syl:'nice',m:'好的',ipa:'/naɪs/'},
          {w:'rice',syl:'rice',m:'米饭',ipa:'/raɪs/'},{w:'mine',syl:'mine',m:'我的',ipa:'/maɪn/'} ] },
        { id: 'SE-o', label: 'o_e 发 /əʊ/', sym: 'ō', ipa: '/əʊ/', tip: 'o 碰到结尾 e，o 发 /əʊ/', words: [
          {w:'note',syl:'note',m:'笔记；音符',ipa:'/nəʊt/'},{w:'rope',syl:'rope',m:'绳子',ipa:'/rəʊp/'},{w:'bone',syl:'bone',m:'骨头',ipa:'/bəʊn/'},
          {w:'hope',syl:'hope',m:'希望',ipa:'/həʊp/'},{w:'hole',syl:'hole',m:'洞',ipa:'/həʊl/'},{w:'home',syl:'home',m:'家',ipa:'/həʊm/'},
          {w:'nose',syl:'nose',m:'鼻子',ipa:'/nəʊz/'},{w:'rose',syl:'rose',m:'玫瑰',ipa:'/rəʊz/'},{w:'pole',syl:'pole',m:'杆；柱',ipa:'/pəʊl/'},
          {w:'stone',syl:'stone',m:'石头',ipa:'/stəʊn/'} ] },
        { id: 'SE-u', label: 'u_e 发 /juː/', sym: 'ū', ipa: '/juː/', tip: 'u 碰到结尾 e，u 发 /juː/', words: [
          {w:'cube',syl:'cube',m:'立方体',ipa:'/kjuːb/'},{w:'cute',syl:'cute',m:'可爱的',ipa:'/kjuːt/'},{w:'mule',syl:'mule',m:'骡子',ipa:'/mjuːl/'},
          {w:'tube',syl:'tube',m:'管子',ipa:'/tjuːb/'},{w:'rule',syl:'rule',m:'规则',ipa:'/ruːl/'},{w:'June',syl:'June',m:'六月',ipa:'/dʒuːn/'},
          {w:'use',syl:'use',m:'使用',ipa:'/juːz/'},{w:'tune',syl:'tune',m:'曲调',ipa:'/tjuːn/'} ] },
        { id: 'SE-e', label: 'e_e 发 /iː/', sym: 'ē', ipa: '/iː/', tip: 'e 碰到结尾 e，e 发字母名 ē（较少见，如 these）', words: [
          {w:'these',syl:'these',m:'这些',ipa:'/ðiːz/'},{w:'theme',syl:'theme',m:'主题',ipa:'/θiːm/'},{w:'scene',syl:'scene',m:'场景',ipa:'/siːn/'},
          {w:'athlete',syl:'ath-lete',m:'运动员',ipa:'/ˈæθ.liːt/'} ] }
      ]
    },

    /* —— 元音组合 vowel teams —— */
    {
      id: 'vowel-teams', name: '元音组合 Vowel Teams', icon: '👯', color: '#3FB6C9',
      desc: '两个元音走一起，通常「第一个元音说话，第二个 vowel 闭嘴」——发第一个音的长音。',
      units: [
        { id: 'VT-ai', label: 'ai / ay / ey 发 /eɪ/', sym: 'ā', ipa: '/eɪ/', tip: 'ai 在词中、ay 在词尾；ey 也可发 /eɪ/（they）', words: [{w:'rain',syl:'rain',m:'雨',ipa:'/reɪn/'},{w:'mail',syl:'mail',m:'邮件',ipa:'/meɪl/'},{w:'play',syl:'play',m:'玩',ipa:'/pleɪ/'},{w:'they',syl:'they',m:'他们',ipa:'/ðeɪ/'}] },
        { id: 'VT-ee', label: 'ee / ea 发 /iː/', sym: 'ē', ipa: '/iː/', tip: 'ee/ea 常发长音 /iː/；ea 也有 /e/（bread）与 /eɪ/（break）', words: [{w:'bee',syl:'bee',m:'蜜蜂',ipa:'/biː/'},{w:'tree',syl:'tree',m:'树',ipa:'/triː/'},{w:'leaf',syl:'leaf',m:'叶子',ipa:'/liːf/'},{w:'eat',syl:'eat',m:'吃',ipa:'/iːt/'}] },
        { id: 'VT-oa', label: 'oa / ow / oe 发 /əʊ/', sym: 'ō', ipa: '/əʊ/', tip: 'oa 在词中、oe 在词尾；ow 可发 /əʊ/（snow）或 /aʊ/（cow）', words: [{w:'boat',syl:'boat',m:'船',ipa:'/bəʊt/'},{w:'coat',syl:'coat',m:'外套',ipa:'/kəʊt/'},{w:'snow',syl:'snow',m:'雪',ipa:'/snəʊ/'},{w:'toe',syl:'toe',m:'脚趾',ipa:'/təʊ/'}] },
        { id: 'VT-oo', label: 'oo 发 /uː/、/ʊ/ 或 /ʌ/', sym: 'oo', ipa: '/uː//ʊ//ʌ/', tip: 'oo 多读 /uː/（moon），次读 /ʊ/（book），特殊 /ʌ/（blood）', words: [{w:'moon',syl:'moon',m:'月亮',ipa:'/muːn/'},{w:'book',syl:'book',m:'书',ipa:'/bʊk/'},{w:'food',syl:'food',m:'食物',ipa:'/fuːd/'},{w:'blood',syl:'blood',m:'血液',ipa:'/blʌd/'},{w:'flood',syl:'flood',m:'洪水',ipa:'/flʌd/'}] },
        { id: 'VT-ie', label: 'ie 发 /iː/ 或 /aɪ/', sym: 'ī', ipa: '/iː//aɪ/', tip: 'ie 在词中常发 /iː/（piece），在词尾发 /aɪ/（pie）', words: [{w:'piece',syl:'piece',m:'块；片',ipa:'/piːs/'},{w:'chief',syl:'chief',m:'首领',ipa:'/tʃiːf/'},{w:'field',syl:'field',m:'田野',ipa:'/fiːld/'},{w:'pie',syl:'pie',m:'派',ipa:'/paɪ/'}] },
        { id: 'VT-ei', label: 'ei 发 /iː/ 或 /eɪ/', sym: 'ē', ipa: '/iː//eɪ/', tip: 'ei 在 c 后常发 /iː/（receive）；其它发 /eɪ/（eight、vein）', words: [{w:'receive',syl:'re-ceive',m:'收到',ipa:'/rɪˈsiːv/'},{w:'eight',syl:'eight',m:'八',ipa:'/eɪt/'},{w:'veil',syl:'veil',m:'面纱',ipa:'/veɪl/'}] },
        { id: 'VT-eigh', label: 'eigh 发 /eɪ/', sym: 'eigh', ipa: '/eɪ/', tip: 'eigh 固定发 /eɪ/（如 eight、weigh）', words: [{w:'eight',syl:'eight',m:'八',ipa:'/eɪt/'},{w:'weigh',syl:'weigh',m:'称重',ipa:'/weɪ/'},{w:'weight',syl:'weight',m:'重量',ipa:'/weɪt/'}] },
        { id: 'VT-ey', label: 'ey 发 /iː/ 或 /eɪ/', sym: 'ey', ipa: '/iː//eɪ/', tip: 'ey 在词尾多发 /iː/（key、money），少数发 /eɪ/（they）', words: [{w:'key',syl:'key',m:'钥匙',ipa:'/kiː/'},{w:'honey',syl:'hon-ey',m:'蜂蜜',ipa:'/ˈhʌn.i/'},{w:'monkey',syl:'mon-key',m:'猴子',ipa:'/ˈmʌŋ.ki/'},{w:'they',syl:'they',m:'他们',ipa:'/ðeɪ/'}] },
        { id: 'VT-igh', label: 'igh 发 /aɪ/', sym: 'igh', ipa: '/aɪ/', tip: 'igh 固定发 /aɪ/（如 light、night）', words: [{w:'light',syl:'light',m:'光',ipa:'/laɪt/'},{w:'night',syl:'night',m:'夜晚',ipa:'/naɪt/'},{w:'high',syl:'high',m:'高的',ipa:'/haɪ/'},{w:'right',syl:'right',m:'正确的',ipa:'/raɪt/'}] },
        { id: 'VT-ind', label: 'i+nd/ld 发 /aɪ/', sym: 'ind', ipa: '/aɪ/', tip: 'i 在 nd、ld 前发长音 /aɪ/（如 find、child）', words: [{w:'find',syl:'find',m:'找到',ipa:'/faɪnd/'},{w:'kind',syl:'kind',m:'友善的',ipa:'/kaɪnd/'},{w:'child',syl:'child',m:'孩子',ipa:'/tʃaɪld/'},{w:'wild',syl:'wild',m:'野生的',ipa:'/waɪld/'}] },
        { id: 'VT-o', label: '词尾 o 发 /əʊ/', sym: 'ō', ipa: '/əʊ/', tip: 'o 在词尾（开音节）发字母名 /əʊ/（如 go、no）', words: [{w:'go',syl:'go',m:'去',ipa:'/ɡəʊ/'},{w:'no',syl:'no',m:'不',ipa:'/nəʊ/'},{w:'so',syl:'so',m:'所以',ipa:'/səʊ/'},{w:'hero',syl:'he-ro',m:'英雄',ipa:'/ˈhɪə.rəʊ/'}] },
        { id: 'VT-al', label: 'al 发 /ɔː/', sym: 'al', ipa: '/ɔː/', tip: 'all/alk 里的 al 发圆嘴卷舌 /ɔː/（如 ball、talk）', words: [{w:'ball',syl:'ball',m:'球',ipa:'/bɔːl/'},{w:'call',syl:'call',m:'打电话',ipa:'/kɔːl/'},{w:'talk',syl:'talk',m:'说话',ipa:'/tɔːk/'},{w:'walk',syl:'walk',m:'走路',ipa:'/wɔːk/'}] },
        { id: 'VT-ui', label: 'ui 发 /uː/', sym: 'ū', ipa: '/uː/', tip: 'ui 常发 /uː/（如 fruit）；build 等少数发 /ɪ/', words: [{w:'fruit',syl:'fruit',m:'水果',ipa:'/fruːt/'},{w:'suit',syl:'suit',m:'西装',ipa:'/suːt/'},{w:'juice',syl:'juice',m:'果汁',ipa:'/dʒuːs/'}] },
        { id: 'VT-ue', label: 'ue 发 /juː/ 或 /uː/', sym: 'ū', ipa: '/juː//uː/', tip: 'ue 在词尾发 /juː/（value）或 /uː/（blue）', words: [{w:'blue',syl:'blue',m:'蓝色',ipa:'/bluː/'},{w:'glue',syl:'glue',m:'胶水',ipa:'/ɡluː/'},{w:'value',syl:'val-ue',m:'价值',ipa:'/ˈvæl.juː/'}] },
        { id: 'VT-oe', label: 'oe 发 /əʊ/', sym: 'ō', ipa: '/əʊ/', tip: 'oe 在词尾发 /əʊ/（如 toe、doe）', words: [{w:'toe',syl:'toe',m:'脚趾',ipa:'/təʊ/'},{w:'hoe',syl:'hoe',m:'锄头',ipa:'/həʊ/'},{w:'doe',syl:'doe',m:'母鹿',ipa:'/dəʊ/'}] },
        { id: 'VT-ew', label: 'ew 发 /juː/ 或 /uː/', sym: 'ū', ipa: '/juː//uː/', tip: 'ew 常发 /juː/（new），l 后发 /uː/（blew、flew）', words: [{w:'new',syl:'new',m:'新的',ipa:'/njuː/'},{w:'few',syl:'few',m:'少量',ipa:'/fjuː/'},{w:'flew',syl:'flew',m:'飞过',ipa:'/fluː/'},{w:'drew',syl:'drew',m:'画了',ipa:'/druː/'}] }
      ]
    },

    /* —— r 控制元音 —— */
    {
      id: 'r-controlled', name: 'r 控制元音', icon: '🌀', color: '#E8743B',
      desc: '元音后面跟着 r，发音被 r「卷」走，不再是单纯的长/短音。',
      units: [
        { id: 'RC-ar', label: 'ar 发 /ɑː/', sym: 'ar', ipa: '/ɑː/', tip: 'ar 像海盗「啊——」', words: [{w:'car',syl:'car',m:'汽车',ipa:'/kɑː/'},{w:'star',syl:'star',m:'星星',ipa:'/stɑː/'},{w:'farm',syl:'farm',m:'农场',ipa:'/fɑːm/'},{w:'park',syl:'park',m:'公园',ipa:'/pɑːk/'}] },
        { id: 'RC-or', label: 'or 发 /ɔː/', sym: 'or', ipa: '/ɔː/', tip: 'or 圆嘴卷舌；also al（ball）、oar（board）', words: [{w:'fork',syl:'fork',m:'叉子',ipa:'/fɔːk/'},{w:'corn',syl:'corn',m:'玉米',ipa:'/kɔːn/'},{w:'horse',syl:'horse',m:'马',ipa:'/hɔːs/'},{w:'morning',syl:'morn-ing',m:'早晨',ipa:'/ˈmɔː.nɪŋ/'}] },
        { id: 'RC-er', label: 'er/ir/ur/ear 发 /ɜː/', sym: 'er', ipa: '/ɜː/', tip: 'er、ir、ur 都发卷舌 /ɜː/；ear 在 earth/learn 里也发 /ɜː/', words: [{w:'her',syl:'her',m:'她的',ipa:'/hɜː/'},{w:'bird',syl:'bird',m:'鸟',ipa:'/bɜːd/'},{w:'turn',syl:'turn',m:'转动',ipa:'/tɜːn/'},{w:'earth',syl:'earth',m:'地球',ipa:'/ɜːθ/'},{w:'learn',syl:'learn',m:'学习',ipa:'/lɜːn/'}] },
        { id: 'RC-air', label: 'air/are/ear/ere 发 /eə/', sym: 'air', ipa: '/eə/', tip: 'air、are、ear(熊)、ere(where) 都发 /eə/', words: [{w:'hair',syl:'hair',m:'头发',ipa:'/heə/'},{w:'care',syl:'care',m:'关心',ipa:'/keə/'},{w:'bear',syl:'bear',m:'熊',ipa:'/beə/'},{w:'where',syl:'where',m:'哪里',ipa:'/weə/'}] },
        { id: 'RC-eer', label: 'eer/ere/ear 发 /ɪə/', sym: 'eer', ipa: '/ɪə/', tip: 'eer、ere、ear(听) 都发 /ɪə/', words: [{w:'deer',syl:'deer',m:'鹿',ipa:'/dɪə/'},{w:'here',syl:'here',m:'这里',ipa:'/hɪə/'},{w:'ear',syl:'ear',m:'耳朵',ipa:'/ɪə/'},{w:'near',syl:'near',m:'近的',ipa:'/nɪə/'}] },
        { id: 'RC-ore', label: 'ore/oar 发 /ɔː/', sym: 'ore', ipa: '/ɔː/', tip: 'ore、oar 都发 /ɔː/（如 more、board）', words: [{w:'more',syl:'more',m:'更多',ipa:'/mɔː/'},{w:'oar',syl:'oar',m:'船桨',ipa:'/ɔː/'},{w:'shore',syl:'shore',m:'海岸',ipa:'/ʃɔː/'},{w:'board',syl:'board',m:'木板',ipa:'/bɔːd/'}] },
        { id: 'RC-our', label: 'our/oor 发 /ɔː/ 或 /aʊə/', sym: 'our', ipa: '/ɔː//aʊə/', tip: 'our 常发 /ɔː/（four）；hour/our/flour 发 /aʊə/', words: [{w:'four',syl:'four',m:'四',ipa:'/fɔː/'},{w:'door',syl:'door',m:'门',ipa:'/dɔː/'},{w:'hour',syl:'hour',m:'小时',ipa:'/ˈaʊə/'},{w:'flour',syl:'flour',m:'面粉',ipa:'/ˈflaʊə/'}] },
        { id: 'RC-ure', label: 'ure 发 /jʊə/', sym: 'ure', ipa: '/jʊə/', tip: 'ure 发「you-er」滑音 /jʊə/（如 pure、sure）', words: [{w:'pure',syl:'pure',m:'纯净的',ipa:'/pjʊə/'},{w:'cure',syl:'cure',m:'治愈',ipa:'/kjʊə/'},{w:'sure',syl:'sure',m:'确定的',ipa:'/ʃʊə/'}] }
      ]
    },

    /* —— 双元音 Diphthongs（滑动音） —— */
    {
      id: 'diphthongs', name: '双元音 Diphthongs', icon: '🌊', color: '#2BB3C0',
      desc: '两个元音快速滑动成一个新音，嘴型从一种转到另一种（如 ow 的 /aʊ/、oi 的 /ɔɪ/）。',
      units: [
        { id: 'DP-ou', label: 'ou / ow 发 /aʊ/', sym: 'ow', ipa: '/aʊ/', tip: 'ou、ow 发「奥—乌」滑动音（如 house、cow）；注意 ow 也可发 /əʊ/（见元音组合）', words: [{w:'house',syl:'house',m:'房子',ipa:'/haʊs/'},{w:'mouse',syl:'mouse',m:'老鼠',ipa:'/maʊs/'},{w:'cow',syl:'cow',m:'牛',ipa:'/kaʊ/'},{w:'how',syl:'how',m:'怎样',ipa:'/haʊ/'}] },
        { id: 'DP-oi', label: 'oi / oy 发 /ɔɪ/', sym: 'oy', ipa: '/ɔɪ/', tip: 'oi 在词中、oy 在词尾，都发「奥—衣」滑动音', words: [{w:'coin',syl:'coin',m:'硬币',ipa:'/kɔɪn/'},{w:'boy',syl:'boy',m:'男孩',ipa:'/bɔɪ/'},{w:'toy',syl:'toy',m:'玩具',ipa:'/tɔɪ/'},{w:'oil',syl:'oil',m:'油',ipa:'/ɔɪl/'}] },
        { id: 'DP-au', label: 'au / aw 发 /ɔː/', sym: 'aw', ipa: '/ɔː/', tip: 'au、aw 都发圆嘴卷舌 /ɔː/；al（ball）也发此音', words: [{w:'author',syl:'au-thor',m:'作者',ipa:'/ˈɔː.θə/'},{w:'saw',syl:'saw',m:'看见（过去）',ipa:'/sɔː/'},{w:'law',syl:'law',m:'法律',ipa:'/lɔː/'},{w:'draw',syl:'draw',m:'画',ipa:'/drɔː/'},{w:'autumn',syl:'au-tumn',m:'秋天',ipa:'/ˈɔː.təm/'}] }
      ]
    },

    /* —— Y 作元音 —— */
    {
      id: 'y-vowel', name: 'Y 作元音', icon: '🪀', color: '#E8A33D',
      desc: 'y 是「半个元音」：多音节词尾发 /iː/（happy），单音节词尾发 /aɪ/（my），词中发 /ɪ/（gym）。',
      units: [
        { id: 'YV-ee', label: '词尾 y 发 /iː/', sym: 'y → /iː/', ipa: '/iː/', tip: '多音节词末尾的 y 发 /iː/（如 happy、city）', words: [{w:'happy',syl:'hap-py',m:'快乐的',ipa:'/ˈhæp.i/'},{w:'baby',syl:'ba-by',m:'婴儿',ipa:'/ˈbeɪ.bi/'},{w:'city',syl:'cit-y',m:'城市',ipa:'/ˈsɪt.i/'},{w:'candy',syl:'can-dy',m:'糖果',ipa:'/ˈkæn.di/'}] },
        { id: 'YV-eye', label: '词尾 y 发 /aɪ/', sym: 'y → /aɪ/', ipa: '/aɪ/', tip: '单音节词末尾的 y 发 /aɪ/（如 my、fly）', words: [{w:'my',syl:'my',m:'我的',ipa:'/maɪ/'},{w:'fly',syl:'fly',m:'飞',ipa:'/flaɪ/'},{w:'sky',syl:'sky',m:'天空',ipa:'/skaɪ/'},{w:'cry',syl:'cry',m:'哭',ipa:'/kraɪ/'}] },
        { id: 'YV-i', label: '词中 y 发 /ɪ/', sym: 'y → /ɪ/', ipa: '/ɪ/', tip: '单词中间的 y 发 /ɪ/（如 gym、myth）', words: [{w:'gym',syl:'gym',m:'体育馆',ipa:'/dʒɪm/'},{w:'myth',syl:'myth',m:'神话',ipa:'/mɪθ/'},{w:'system',syl:'sys-tem',m:'系统',ipa:'/ˈsɪs.təm/'}] }
      ]
    },

    /* —— 特殊 / 不规则组合 —— */
    {
      id: 'special', name: '特殊组合 Special', icon: '⚠️', color: '#E84393',
      desc: '不规则组合需要单独记：ough 有 6 种发音、augh、old/ost/ild/ind、all/alk/ass。',
      units: [
        { id: 'SP-ough', label: 'ough 六种发音', sym: 'ough', ipa: '/əʊ//uː//ɒf//ʌf//ɔː//ə/', tip: 'ough 是英语最不规则的组合：though /əʊ/、through /uː/、cough /ɒf/、rough /ʌf/、thought /ɔː/、thorough /ə/', words: [{w:'though',syl:'though',m:'虽然',ipa:'/ðəʊ/'},{w:'through',syl:'through',m:'穿过',ipa:'/θruː/'},{w:'cough',syl:'cough',m:'咳嗽',ipa:'/kɒf/'},{w:'rough',syl:'rough',m:'粗糙的',ipa:'/rʌf/'},{w:'thought',syl:'thought',m:'想法',ipa:'/θɔːt/'}] },
        { id: 'SP-augh', label: 'augh 发 /ɔː/', sym: 'augh', ipa: '/ɔː/', tip: 'augh 常发 /ɔː/（caught、taught）；laugh 是例外发 /ɑːf/ / /æf/', words: [{w:'caught',syl:'caught',m:'抓住',ipa:'/kɔːt/'},{w:'taught',syl:'taught',m:'教了',ipa:'/tɔːt/'},{w:'daughter',syl:'daugh-ter',m:'女儿',ipa:'/ˈdɔː.tə/'},{w:'laugh',syl:'laugh',m:'笑',ipa:'/lɑːf/'}] },
        { id: 'SP-old', label: 'old/ost 发 /əʊ/', sym: 'old', ipa: '/əʊld//əʊst/', tip: 'old、ost 组合发 /əʊ/（如 cold、most）', words: [{w:'cold',syl:'cold',m:'冷的',ipa:'/kəʊld/'},{w:'gold',syl:'gold',m:'金子',ipa:'/ɡəʊld/'},{w:'most',syl:'most',m:'最',ipa:'/məʊst/'},{w:'post',syl:'post',m:'邮寄',ipa:'/pəʊst/'}] },
        { id: 'SP-ild', label: 'ild/ind 发 /aɪ/', sym: 'ild', ipa: '/aɪld//aɪnd/', tip: 'ild、ind 组合发 /aɪ/（如 child、find）', words: [{w:'child',syl:'child',m:'孩子',ipa:'/tʃaɪld/'},{w:'wild',syl:'wild',m:'野生的',ipa:'/waɪld/'},{w:'find',syl:'find',m:'找到',ipa:'/faɪnd/'},{w:'kind',syl:'kind',m:'友善的',ipa:'/kaɪnd/'}] },
        { id: 'SP-all', label: 'all/alk/ass 特殊', sym: 'all', ipa: '/ɔːl//ɔːk//ɑːs/', tip: 'all 发 /ɔːl/（ball）、alk 发 /ɔːk/（talk）、ass 发 /ɑːs/（class）', words: [{w:'ball',syl:'ball',m:'球',ipa:'/bɔːl/'},{w:'tall',syl:'tall',m:'高的',ipa:'/tɔːl/'},{w:'talk',syl:'talk',m:'说话',ipa:'/tɔːk/'},{w:'class',syl:'class',m:'班级',ipa:'/klɑːs/'},{w:'glass',syl:'glass',m:'玻璃杯',ipa:'/ɡlɑːs/'}] }
      ]
    }
  ],

  /* ============ 特殊发音与高频词（ sight words ） ============ */
  sightWords: [
    {w:'the',m:'这/那（定冠词）',note:'不按拼读规则，整体认读',ex:'The sun is bright. (太阳很明亮。)'},
    {w:'a',m:'一个',note:'不按拼读规则',ex:'I have a cat. (我有一只猫。)'},
    {w:'and',m:'和',note:'不按拼读规则',ex:'I have a cat and two dogs. (我有一只猫和两只狗。)'},
    {w:'you',m:'你',note:'ou 特殊发 /uː/',ex:'You are my friend. (你是我的朋友。)'},
    {w:'is',m:'是',note:'s 特殊发 /z/',ex:'The dog is brown. (狗是棕色的。)'},
    {w:'to',m:'到',note:'o 特殊发 /uː/',ex:'We go to school. (我们去上学。)'},
    {w:'in',m:'在…里',note:'可解码，但属高频',ex:'The cat is in the box. (猫在盒子里。)'},
    {w:'it',m:'它',note:'可解码',ex:'It is sunny today. (今天晴朗。)'},
    {w:'of',m:'…的',note:'o 特殊发 /ʌ/',ex:'I think of you. (我想着你。)'},
    {w:'that',m:'那个',note:'th 清音',ex:'That is a cat. (那是一只猫。)'},
    {w:'for',m:'为了',note:'or 可解码',ex:'This gift is for you. (这份礼物是给你的。)'},
    {w:'with',m:'和…一起',note:'th 清音',ex:'I play with you. (我和你一起玩。)'},
    {w:'see',m:'看见',note:'ee 可解码',ex:'I see a dog. (我看见一只狗。)'},
    {w:'said',m:'说（过去）',note:'ai 特殊发 /e/',ex:'Mom said yes. (妈妈答应了。)'},
    {w:'was',m:'是（过去）',note:'a 特殊发 /ɒ/',ex:'I was happy. (我当时很开心。)'},
    {w:'are',m:'是',note:'are 特殊发 /ɑː/',ex:'The apples are red. (苹果是红色的。)'},
    {w:'have',m:'有',note:'ve 特殊发 /v/',ex:'I have a book. (我有一本书。)'},
    {w:'they',m:'他们',note:'ey 特殊发 /eɪ/',ex:'They are my friends. (他们是我的朋友。)'},
    {w:'where',m:'哪里',note:'wh+h 特殊',ex:'Where is your hat? (你的帽子在哪里？)'},
    {w:'come',m:'来',note:'o 特殊发 /ʌ/',ex:'Come here, please. (请过来。)'}
  ],

  /* ============ 八、规则说明（可独立调用） ============ */
  rules: [
    { id:'R-silentE', title:'神奇的静音 e（Magic e）', sym:'a_e / i_e / o_e / u_e', mnemonic:'「e 在结尾不说话，前面的元音变长大」', oneLiner:'在「辅音+元音+辅音+e」（CVCe）结构里，词尾的 e 自己不发音，却让前面的元音发它的「字母名」（长音）。这就是 magic e（魔术 e）。', posExamples:['cap /kæp/（短 a）→ 加 e → cape /keɪp/（长 a /eɪ/）','bit /bɪt/（短 i）→ 加 e → bite /baɪt/（长 i /aɪ/）','hop /hɒp/（短 o）→ 加 e → hope /həʊp/（长 o /əʊ/）','cub /kʌb/（短 u）→ 加 e → cube /kjuːb/（长 u /juː/）'], negExamples:['cap /kæp/ 帽子（没有 e，a 发短音）','bit /bɪt/ 一点（没有 e，i 发短音）','hop /hɒp/ 跳（没有 e，o 发短音）','cub /kʌb/ 幼兽（没有 e，u 发短音）'], breakdown:'cap → 加 e → cape：a 由短音 /æ/ 变成字母名 /eɪ/。记忆口诀：「Big A, little a, what begins with A? 加个 magic e，元音大声念字母名！」', summary:'看到「元音+辅音+e」，记住 e 沉默、前面的元音发长音（字母名）。这是拼读里最重要的「魔术规则」之一，先找 CVCe，再让元音长大。',
      patterns:[
        { vowel:'a + 辅音 + e', cvc:'cap /kæp/ 短 a', cvce:'cape /keɪp/ 长 a', sound:'/eɪ/' },
        { vowel:'i + 辅音 + e', cvc:'bit /bɪt/ 短 i', cvce:'bite /baɪt/ 长 i', sound:'/aɪ/' },
        { vowel:'o + 辅音 + e', cvc:'hop /hɒp/ 短 o', cvce:'hope /həʊp/ 长 o', sound:'/əʊ/' },
        { vowel:'u + 辅音 + e', cvc:'cub /kʌb/ 短 u', cvce:'cube /kjuːb/ 长 u', sound:'/juː/' }
      ] },
    { id:'R-sh', title:'sh 的发音', sym:'sh → /ʃ/', mnemonic:'「把食指放在嘴前，轻轻说 嘘——」', oneLiner:'字母 s 和 h 在一起，发 /ʃ/（像安静的「嘘」）。', posExamples:['ship /ʃɪp/ 船','fish /fɪʃ/ 鱼','shoe /ʃuː/ 鞋'], negExamples:['sit /sɪt/ 坐（只有 s）','hit /hɪt/ 打（只有 h）'], breakdown:'sh-i-p：sh 发 /ʃ/，i 短音，p 收尾 → /ʃɪp/。', summary:'sh 合体发「嘘」的音 /ʃ/，两个字母一个音。' },
    { id:'R-ch', title:'ch 的发音', sym:'ch → /tʃ/', mnemonic:'「小鸟啾啾，ch 啾一声」', oneLiner:'字母 c 和 h 在一起，发 /tʃ/（像「吃」的开头）。', posExamples:['chip /tʃɪp/ 薯片','chair /tʃeə/ 椅子','watch /wɒtʃ/ 手表'], negExamples:['cat /kæt/ 猫（只有 c）','hat /hæt/ 帽子（只有 h）'], breakdown:'ch-i-p：ch 发 /tʃ/，i 短音，p 收尾 → /tʃɪp/。', summary:'ch 合体发「吃」/tʃ/，是两个字母一个音。' },
    { id:'R-th', title:'th 的发音', sym:'th → /θ/ 或 /ð/', mnemonic:'「舌尖轻轻伸到上下牙之间，让气流从缝里出来」', oneLiner:'字母 t 和 h 在一起，舌尖咬缝吐气：清音 /θ/（三）或浊音 /ð/（这个）。', posExamples:['three /θriː/ 三（清）','thumb /θʌm/ 拇指（清）','this /ðɪs/ 这个（浊）'], negExamples:['top /tɒp/ 顶（只有 t）','hop /hɒp/ 跳（只有 h）'], breakdown:'th-r-ee：th 舌尖咬缝 /θ/，r 卷舌，ee 长音 → /θriː/。', summary:'th 舌尖咬缝：词首多清音 /θ/，代词 this/that 多浊音 /ð/。' },
    { id:'R-ar', title:'ar 的发音', sym:'ar → /ɑː/', mnemonic:'「海盗船长，张开嘴喊 啊——」', oneLiner:'字母 a 后面跟着 r，a 被卷走，发 /ɑː/。', posExamples:['car /kɑː/ 汽车','star /stɑː/ 星星','farm /fɑːm/ 农场'], negExamples:['cat /kæt/ 猫（无 r，短 a）','cap /kæp/ 帽子（无 r）'], breakdown:'c-ar：c 爆破，ar 卷舌 /ɑː/ → /kɑː/。', summary:'ar 组合发海盗的「啊」/ɑː/，r 把 a 卷走了。' },
    { id:'R-ee', title:'ee / ea 的发音', sym:'ee / ea → /iː/', mnemonic:'「两个 e 排排坐，发长长的 e——」', oneLiner:'ee 或 ea 在一起，常发长音 /iː/。', posExamples:['bee /biː/ 蜜蜂','tree /triː/ 树','leaf /liːf/ 叶子'], negExamples:['bed /bed/ 床（e+e 不相邻，短 e）','ten /ten/ 十'], breakdown:'tr-ee：tr 连缀，ee 长音 /iː/ → /triː/。', summary:'ee/ea 多读长音 /iː/，是「元音组合」常见规律。' },
    { id:'R-ai', title:'ai / ay 的发音', sym:'ai / ay → /eɪ/', mnemonic:'「a 和 i 手拉手，a 大声读字母名」', oneLiner:'ai 在词中、ay 在词尾，都发 /eɪ/（a 的字母名）。', posExamples:['rain /reɪn/ 雨','mail /meɪl/ 邮件','play /pleɪ/ 玩'], negExamples:['ran /ræn/ 跑（无 i，短 a）','pan /pæn/ 锅'], breakdown:'r-ai-n：r 卷舌，ai 长音 /eɪ/，n 收尾 → /reɪn/。', summary:'ai 在中间、ay 在结尾，都发 /eɪ/。' },
    { id:'R-oo', title:'oo 的发音', sym:'oo → /uː/ 或 /ʊ/', mnemonic:'「oo 大多读长 u（月亮），少数读短 u（书）」', oneLiner:'oo 组合多读 /uː/（如 moon），少数读 /ʊ/（如 book）。', posExamples:['moon /muːn/ 月亮','food /fuːd/ 食物','soon /suːn/ 不久'], negExamples:['book /bʊk/ 书（短 u）','look /lʊk/ 看（短 u）'], breakdown:'m-oo-n：m 爆破，oo 长音 /uː/，n 收尾 → /muːn/。', summary:'oo 多数发 /uː/，遇到 book/look/cook 等发 /ʊ/，需单独记。' },
    { id:'R-ck', title:'ck 的发音', sym:'ck → /k/', mnemonic:'「ck 在词尾，像小锤子敲一下 k」', oneLiner:'ck 出现在词尾时，发 /k/。', posExamples:['duck /dʌk/ 鸭子','lock /lɒk/ 锁','sock /sɒk/ 袜子'], negExamples:['cup /kʌp/ 杯子（用 p 收尾，k 不在尾）'], breakdown:'d-u-ck：d 爆破，u 短音，ck 收尾 /k/ → /dʌk/。', summary:'ck 在词尾发 /k/，帮助单词「站稳」结尾。' },
    { id:'R-ou', title:'ou / ow 的发音', sym:'ou / ow → /aʊ/ 或 /əʊ/', mnemonic:'「ou 和 ow 像在喊 嗷——，多数发 /aʊ/」', oneLiner:'字母组合 ou / ow 常发 /aʊ/（如 cow 奶牛、house 房子），ow 在词尾也可发 /əʊ/（如 snow 雪）。', posExamples:['cow /kaʊ/ 奶牛','house /haʊs/ 房子','snow /snəʊ/ 雪（ow 词尾发 /əʊ/）'], negExamples:['low /ləʊ/ 低的（ow 发 /əʊ/，不是 /aʊ/）'], breakdown:'c-ow：c 爆破，ow 发 /aʊ/ → /kaʊ/；s-n-ow：ow 在词尾发 /əʊ/ → /snəʊ/。', summary:'ou/ow 多读 /aʊ/（嗷），ow 在词尾也常读 /əʊ/，注意区分。' },
    { id:'R-oi', title:'oi / oy 的发音', sym:'oi / oy → /ɔɪ/', mnemonic:'「o 和 i、y 手拉手，发 喔衣—— 的合音 /ɔɪ/」', oneLiner:'oi 在词中、oy 在词尾，都发 /ɔɪ/（如 oil 油、boy 男孩）。', posExamples:['oil /ɔɪl/ 油','boy /bɔɪ/ 男孩','toy /tɔɪ/ 玩具'], negExamples:['boil /bɔɪl/ 煮（仍是 /ɔɪ/，注意与 ball 区分）'], breakdown:'b-oy：b 爆破，oy 发 /ɔɪ/ → /bɔɪ/；o-i-l：oi 发 /ɔɪ/ → /ɔɪl/。', summary:'oi 在中间、oy 在结尾，都发 /ɔɪ/，是「元音组合」常见规律。' },
    { id:'R-softC', title:'软 c 的发音', sym:'c → /s/（在 e/i/y 前）', mnemonic:'「c 碰到 e、i、y，变成温柔的 /s/」', oneLiner:'字母 c 在 e、i、y 前面发 /s/（如 city 城市、ice 冰）；在 a、o、u 前仍发 /k/（如 cat 猫）。', posExamples:['city /ˈsɪt.i/ 城市','ice /aɪs/ 冰','cycle /ˈsaɪ.kəl/ 自行车'], negExamples:['cat /kæt/ 猫（c 在 a 前，发硬音 /k/）'], breakdown:'c-i-t-y：c 在 i 前 → /s/，i 短音，t 收尾，y 发 /i/ → /ˈsɪ.ti/；c-a-t：c 在 a 前 → /k/。', summary:'c 遇 e/i/y 变 /s/（软 c），遇 a/o/u 发 /k/（硬 c）。' },
    { id:'R-softG', title:'软 g 的发音', sym:'g → /dʒ/（在 e/i/y 前）', mnemonic:'「g 碰到 e、i、y，变成温柔的 /dʒ/（叽）」', oneLiner:'字母 g 在 e、i、y 前面发 /dʒ/（如 gentle 温柔的、giant 巨人）；在 a、o、u 前仍发 /ɡ/（如 go 去）。', posExamples:['gentle /ˈdʒen.təl/ 温柔的','giant /ˈdʒaɪ.ənt/ 巨人','gym /dʒɪm/ 体育馆'], negExamples:['go /ɡəʊ/ 去（g 在 o 前，发硬音 /ɡ/）'], breakdown:'g-e-n-t-l-e：g 在 e 前 → /dʒ/；g-o：g 在 o 前 → /ɡ/。', summary:'g 遇 e/i/y 变 /dʒ/（软 g），遇 a/o/u 发 /ɡ/（硬 g）。' },
    { id:'R-ph', title:'ph 的发音', sym:'ph → /f/', mnemonic:'「p 和 h 抱一起，悄悄发 /f/」', oneLiner:'字母组合 ph 发 /f/（如 phone 电话、photo 照片、elephant 大象）。', posExamples:['phone /fəʊn/ 电话','photo /ˈfəʊ.təʊ/ 照片','elephant /ˈel.ɪ.fənt/ 大象'], negExamples:['fan /fæn/ 扇子（用单个 f 发 /f/）'], breakdown:'ph-o-n-e：ph 发 /f/，o 长音，n，e 沉默 → /ˈfəʊn/。', summary:'ph 合体发 /f/，是两个字母一个音，常见于希腊来源词。' },
    { id:'R-ng', title:'ng / nk 的发音', sym:'ng → /ŋ/ · nk → /ŋk/', mnemonic:'「ng 像敲钟嗡——，nk 是嗡加 k」', oneLiner:'ng 在词尾发鼻音 /ŋ/（如 ring 戒指、sing 唱歌）；nk 发 /ŋk/（如 sink 下沉、bank 银行）。', posExamples:['ring /rɪŋ/ 戒指','sing /sɪŋ/ 唱歌','sink /sɪŋk/ 下沉'], negExamples:['sit /sɪt/ 坐（无 ng/nk）'], breakdown:'r-i-ng：ng 在词尾发 /ŋ/ → /rɪŋ/；s-i-nk：nk 发 /ŋk/ → /sɪŋk/。', summary:'ng 词尾发 /ŋ/，nk 发 /ŋk/，是「后鼻音」组合，要练准。' },
    { id:'R-ou', title:'ou / ow 的滑动音 /aʊ/', sym:'ou / ow → /aʊ/', mnemonic:'「嘴从「奥」滑到「乌」，像惊讶的 ouch！」', oneLiner:'ou、ow 常发 /aʊ/（如 house、cow、how）。注意 ow 也可发 /əʊ/（见元音组合）。', posExamples:['house /haʊs/ 房子','cow /kaʊ/ 牛','how /haʊ/ 怎样'], negExamples:['snow /snəʊ/ 雪（ow 此处发 /əʊ/）'], breakdown:'h-ou-se：ou 滑动 /aʊ/，s，e 沉默 → /haʊs/。', summary:'ou/ow 发「奥—乌」的滑动音 /aʊ/，是双元音 diphthong。' },
    { id:'R-oi', title:'oi / oy 的滑动音 /ɔɪ/', sym:'oi / oy → /ɔɪ/', mnemonic:'「嘴从「奥」滑到「衣」，像说 哦咦~」', oneLiner:'oi 在词中、oy 在词尾，都发 /ɔɪ/（如 coin、boy、toy）。', posExamples:['coin /kɔɪn/ 硬币','boy /bɔɪ/ 男孩','toy /tɔɪ/ 玩具'], negExamples:['book /bʊk/ 书（无 oi/oy）'], breakdown:'c-oi-n：oi 滑动 /ɔɪ/，n 收尾 → /kɔɪn/。', summary:'oi/oy 发「奥—衣」的滑动音 /ɔɪ/，是双元音 diphthong。' },
    { id:'R-au', title:'au / aw 的发音', sym:'au / aw → /ɔː/', mnemonic:'「au、aw 圆嘴卷舌，像医生看 a——」', oneLiner:'au、aw 都发 /ɔː/（如 author 作者、saw 看见、law 法律）。', posExamples:['author /ˈɔː.θə/ 作者','saw /sɔː/ 看见','law /lɔː/ 法律'], negExamples:['cat /kæt/ 猫（无 au/aw）'], breakdown:'s-aw：aw 圆嘴卷舌 /ɔː/ → /sɔː/。', summary:'au/aw 发圆嘴卷舌的 /ɔː/，常出现在词中或词尾。' },
    { id:'R-ie', title:'ie 的发音', sym:'ie → /iː/ 或 /aɪ/', mnemonic:'「ie 在中间读衣（ee），在词尾读爱（i）」', oneLiner:'ie 在词中常发 /iː/（如 piece、chief）；在词尾发 /aɪ/（如 pie、tie）。', posExamples:['piece /piːs/ 块','chief /tʃiːf/ 首领','pie /paɪ/ 派'], negExamples:['pet /pet/ 宠物（无 ie）'], breakdown:'p-ie-ce：ie 在中间读 /iː/ → /piːs/；p-ie：ie 在词尾读 /aɪ/ → /paɪ/。', summary:'ie 在中间多读 /iː/，在词尾多读 /aɪ/，看位置定音。' },
    { id:'R-ui', title:'ui 的发音', sym:'ui → /juː/ 或 /ɪ/', mnemonic:'「ui 多读 you（/juː/），b 后读 i（/ɪ/）」', oneLiner:'ui 常发 /juː/（如 fruit 水果、suit 西装）；在 b 后发 /ɪ/（如 build 建造）。', posExamples:['fruit /fruːt/ 水果','suit /suːt/ 西装','juice /dʒuːs/ 果汁'], negExamples:['red /red/ 红（无 ui）'], breakdown:'f-r-ui-t：ui 读 /juː/ → /fruːt/。', summary:'ui 多读 /juː/（you），b 后读短 i。' },
    { id:'R-ue', title:'ue 的发音', sym:'ue → /juː/ 或 /uː/', mnemonic:'「ue 在词尾，蓝又黏（blue），读 u（/uː/ 或 /juː/）」', oneLiner:'ue 在词尾常发 /juː/（如 blue 蓝、glue 胶）或 /uː/（如 true 真）。', posExamples:['blue /bluː/ 蓝色','glue /ɡluː/ 胶水','clue /kluː/ 线索'], negExamples:['bed /bed/ 床（无 ue）'], breakdown:'b-l-ue：ue 在词尾读 /uː/ → /bluː/。', summary:'ue 在词尾常读 /uː/ 或 /juː/，是元音组合收尾。' },
    { id:'R-oe', title:'oe 的发音', sym:'oe → /əʊ/', mnemonic:'「oe 在词尾，像说 哦~（o 的字母名）」', oneLiner:'oe 在词尾发 /əʊ/（如 toe 脚趾、hoe 锄头、foe 敌人）。', posExamples:['toe /təʊ/ 脚趾','hoe /həʊ/ 锄头','foe /fəʊ/ 敌人'], negExamples:['top /tɒp/ 顶（无 oe）'], breakdown:'t-oe：oe 在词尾读 /əʊ/ → /təʊ/。', summary:'oe 在词尾发 /əʊ/，是元音组合收尾。' },
    { id:'R-ew', title:'ew 的发音', sym:'ew → /juː/ 或 /uː/', mnemonic:'「ew 多读 you（/juː/），l 后读 u（/uː/）」', oneLiner:'ew 常发 /juː/（如 new 新、few 少）；在 l 后发 /uː/（如 blew 吹、flew 飞）。', posExamples:['new /njuː/ 新的','few /fjuː/ 少','crew /kruː/ 船员'], negExamples:['red /red/ 红（无 ew）'], breakdown:'n-ew：ew 读 /juː/ → /njuː/；bl-ew：l 后读 /uː/ → /bluː/。', summary:'ew 多读 /juː/，l 后读 /uː/，与 ue 类似。' },
    { id:'R-air', title:'air / are / ear 的发音', sym:'air/are/ear → /eə/', mnemonic:'「air 像轻轻叹气 e——r」', oneLiner:'air、are、ear(熊) 都发 /eə/（如 hair 头发、care 关心、bear 熊）。', posExamples:['hair /heə/ 头发','care /keə/ 关心','bear /beə/ 熊'], negExamples:['cat /kæt/ 猫（无 air/are）'], breakdown:'h-air：air 发 /eə/ → /heə/。', summary:'air/are/ear(熊) 都发 /eə/，是 r 控制元音的一种。' },
    { id:'R-eer', title:'eer / ere / ear 的发音', sym:'eer/ere/ear → /ɪə/', mnemonic:'「eer 像小鹿 ear 竖起来，听 e——r」', oneLiner:'eer、ere、ear(听) 都发 /ɪə/（如 deer 鹿、here 这里、ear 耳朵）。', posExamples:['deer /dɪə/ 鹿','here /hɪə/ 这里','ear /ɪə/ 耳朵'], negExamples:['cat /kæt/ 猫（无 eer/ere）'], breakdown:'h-ere：ere 发 /ɪə/ → /hɪə/。', summary:'eer/ere/ear(听) 都发 /ɪə/，是 r 控制元音的一种。' },
    { id:'R-ore', title:'ore / oar 的发音', sym:'ore/oar → /ɔː/', mnemonic:'「ore 像矿石，圆嘴卷舌 or——」', oneLiner:'ore、oar 都发 /ɔː/（如 more 更多、oar 船桨、shore 海岸）。', posExamples:['more /mɔː/ 更多','oar /ɔː/ 船桨','shore /ʃɔː/ 海岸'], negExamples:['pot /pɒt/ 锅（无 ore/oar）'], breakdown:'m-ore：ore 发 /ɔː/ → /mɔː/。', summary:'ore/oar 都发 /ɔː/，是 r 控制元音的一种。' },
    { id:'R-our', title:'our / oor 的发音', sym:'our/oor → /ɔː/', mnemonic:'「our 像四个门 door，圆嘴卷舌 or——」', oneLiner:'our、oor 常发 /ɔː/（如 four 四、door 门、pour 倒）；our 也可 /aʊə/（如 flour 面粉）。', posExamples:['four /fɔː/ 四','door /dɔː/ 门','pour /pɔː/ 倒'], negExamples:['pot /pɒt/ 锅（无 our/oor）'], breakdown:'f-our：our 发 /ɔː/ → /fɔː/。', summary:'our/oor 常发 /ɔː/，是 r 控制元音的一种。' },
    { id:'R-ey', title:'ey 的发音', sym:'ey → /iː/ 或 /eɪ/', mnemonic:'「ey 在词尾多读衣（iː），少数读诶（eɪ）」', oneLiner:'ey 在词尾多发 /iː/（如 key 钥匙、money 钱、honey 蜂蜜、monkey 猴子）；少数发 /eɪ/（如 they 他们、grey 灰色、hey 嘿）。', posExamples:['key /kiː/ 钥匙','money /ˈmʌn.i/ 钱','they /ðeɪ/ 他们','grey /ɡreɪ/ 灰色'], negExamples:['bed /bed/ 床（无 ey）'], breakdown:'k-ey：ey 在词尾读 /iː/ → /kiː/；th-ey：ey 读 /eɪ/ → /ðeɪ/。', summary:'ey 词尾多读 /iː/（衣），少数读 /eɪ/（诶）。' },
    { id:'R-eigh', title:'eigh 的发音', sym:'eigh → /eɪ/', mnemonic:'「eigh 固定读诶——，eight 八、weigh 称」', oneLiner:'eigh 固定发 /eɪ/（如 eight 八、weigh 称重、weight 重量）。', posExamples:['eight /eɪt/ 八','weigh /weɪ/ 称重','weight /weɪt/ 重量'], negExamples:['egg /eɡ/ 蛋（无 eigh）'], breakdown:'eigh-t：eigh 读 /eɪ/，t 收尾 → /eɪt/。', summary:'eigh 固定发 /eɪ/，见到就记住。' },
    { id:'R-igh', title:'igh 的发音', sym:'igh → /aɪ/', mnemonic:'「igh 固定读爱——，light 光、night 夜」', oneLiner:'igh 固定发 /aɪ/（如 light 光、night 夜晚、high 高、right 正确）。', posExamples:['light /laɪt/ 光','night /naɪt/ 夜晚','high /haɪ/ 高的'], negExamples:['sit /sɪt/ 坐（无 igh）'], breakdown:'l-igh-t：igh 读 /aɪ/ → /laɪt/。', summary:'igh 固定发 /aɪ/，i 字母读自己的长音。' },
    { id:'R-ind', title:'i+nd/ld 的长音', sym:'i+nd/ld → /aɪ/', mnemonic:'「i 在 nd、ld 前，调皮读爱——」', oneLiner:'i 在 nd、ld 前面时发长音 /aɪ/（如 find 找到、kind 友善、child 孩子、wild 野生）。', posExamples:['find /faɪnd/ 找到','kind /kaɪnd/ 友善','child /tʃaɪld/ 孩子'], negExamples:['pin /pɪn/ 别针（i 后无 nd/ld，短音）'], breakdown:'f-ind：i 在 nd 前读 /aɪ/ → /faɪnd/。', summary:'i 在 nd/ld 前读长音 /aɪ/，是一个例外规律。' },
    { id:'R-oend', title:'词尾 o 的长音', sym:'o（词尾）→ /əʊ/', mnemonic:'「o 在词尾，读自己的名字哦——」', oneLiner:'o 在词尾（开音节）发字母名 /əʊ/（如 go 去、no 不、so 所以、hero 英雄）。', posExamples:['go /ɡəʊ/ 去','no /nəʊ/ 不','so /səʊ/ 所以','hero /ˈhɪə.rəʊ/ 英雄'], negExamples:['hot /hɒt/ 热（o 被辅音关住，短音）'], breakdown:'g-o：o 在词尾读 /əʊ/ → /ɡəʊ/。', summary:'o 在词尾读自己的字母名 /əʊ/，与 magic e 同理。' },
    { id:'R-al', title:'al 的发音', sym:'all/alk → /ɔː/', mnemonic:'「al 圆嘴卷舌哦——，ball 球、talk 说」', oneLiner:'all 发 /ɔːl/（如 ball 球、call 打电话、tall 高）；alk 发 /ɔːk/（如 talk 说话、walk 走路）。', posExamples:['ball /bɔːl/ 球','call /kɔːl/ 打电话','talk /tɔːk/ 说话','walk /wɔːk/ 走路'], negExamples:['cat /kæt/ 猫（无 al）'], breakdown:'b-all：al 读 /ɔːl/ → /bɔːl/；t-alk：alk 读 /ɔːk/ → /tɔːk/。', summary:'all 读 /ɔːl/、alk 读 /ɔːk/，圆嘴卷舌哦——。' },
    { id:'R-ure', title:'ure 的发音', sym:'ure → /jʊə/', mnemonic:'「ure 读 you-er 的滑动音」', oneLiner:'ure 发 /jʊə/（如 pure 纯净、cure 治愈、sure 确定）。', posExamples:['pure /pjʊə/ 纯净的','cure /kjʊə/ 治愈','sure /ʃʊə/ 确定的'], negExamples:['car /kɑː/ 汽车（无 ure）'], breakdown:'p-ure：ure 读 /jʊə/ → /pjʊə/。', summary:'ure 读「you-er」滑音 /jʊə/，是 r 控制元音的一种。' },
    { id:'R-ough', title:'ough 的六种发音', sym:'ough → 6 种', mnemonic:'「ough 最调皮，六个声音随便挑」', oneLiner:'ough 是英语最不规则的组合，6 种发音：though /əʊ/、through /uː/、cough /ɒf/、rough /ʌf/、thought /ɔː/、thorough /ə/。', posExamples:['though /ðəʊ/ 虽然','through /θruː/ 穿过','cough /kɒf/ 咳嗽','rough /rʌf/ 粗糙','thought /θɔːt/ 想法'], negExamples:['——（无规律可循，逐个记忆）'], breakdown:'t-h-ough-t：ough 在此读 /ɔː/ → /θɔːt/；c-ough：ough 读 /ɒf/ → /kɒf/。', summary:'ough 有 6 种发音，遇到就单独记，别按规律猜。' },
    { id:'R-augh', title:'augh 的发音', sym:'augh → /ɔː/', mnemonic:'「augh 多读哦——，caught 抓住、taught 教」', oneLiner:'augh 常发 /ɔː/（如 caught 抓住、taught 教了、daughter 女儿）；laugh 是唯一例外读 /ɑːf/（英）/ /æf/（美）。', posExamples:['caught /kɔːt/ 抓住','taught /tɔːt/ 教了','daughter /ˈdɔː.tə/ 女儿'], negExamples:['laugh /lɑːf/ 笑（唯一例外）'], breakdown:'c-aught：augh 读 /ɔː/ → /kɔːt/。', summary:'augh 多读 /ɔː/，只有 laugh 例外。' },
    { id:'R-old', title:'old / ost 的发音', sym:'old/ost → /əʊ/', mnemonic:'「old 老伙计，读哦——ld」', oneLiner:'old 发 /əʊld/（如 cold 冷、gold 金、hold 握住）；ost 发 /əʊst/（如 most 最、post 邮寄、host 主人）。', posExamples:['cold /kəʊld/ 冷的','gold /ɡəʊld/ 金子','most /məʊst/ 最','post /pəʊst/ 邮寄'], negExamples:['pot /pɒt/ 锅（o 无 old/ost 后缀）'], breakdown:'c-old：old 读 /əʊld/ → /kəʊld/。', summary:'old 读 /əʊld/、ost 读 /əʊst/，o 读长音。' },
    { id:'R-ild', title:'ild / ind 的发音', sym:'ild/ind → /aɪ/', mnemonic:'「ild、ind 读爱——，child 孩子、find 找到」', oneLiner:'ild 发 /aɪld/（如 child 孩子、wild 野生）；ind 发 /aɪnd/（如 find 找到、kind 友善、mind 介意）。', posExamples:['child /tʃaɪld/ 孩子','wild /waɪld/ 野生的','find /faɪnd/ 找到','kind /kaɪnd/ 友善'], negExamples:['pin /pɪn/ 别针（i 后无 ild/ind）'], breakdown:'ch-ild：ild 读 /aɪld/ → /tʃaɪld/。', summary:'ild 读 /aɪld/、ind 读 /aɪnd/，i 读长音爱。' },
    { id:'R-all', title:'all / alk / ass 的发音', sym:'all→/ɔːl/ · alk→/ɔːk/ · ass→/ɑːs/', mnemonic:'「all 全家读哦——，ball 球、talk 说、class 班」', oneLiner:'all 发 /ɔːl/（ball 球、call 电话、tall 高、small 小）；alk 发 /ɔːk/（talk 说、walk 走）；ass 发 /ɑːs/（class 班、glass 杯，美音 /æs/）。', posExamples:['ball /bɔːl/ 球','tall /tɔːl/ 高的','talk /tɔːk/ 说话','class /klɑːs/ 班级'], negExamples:['cat /kæt/ 猫（无 all/alk/ass）'], breakdown:'b-all：all 读 /ɔːl/ → /bɔːl/。', summary:'all/alk/ass 是 a 的特殊读法，遇到直接记。' },
    { id:'R-yvowel', title:'Y 作元音', sym:'y → /iː/ 或 /aɪ/ 或 /ɪ/', mnemonic:'「y 是半个元音：多音节词尾读衣、单音节词尾读爱」', oneLiner:'y 在单词末尾多音节发 /iː/（happy 快乐、baby 婴儿、city 城市）；单音节发 /aɪ/（my 我的、fly 飞、sky 天空）；词中发 /ɪ/（gym、myth）。', posExamples:['happy /ˈhæp.i/ 快乐','baby /ˈbeɪ.bi/ 婴儿','my /maɪ/ 我的','fly /flaɪ/ 飞','gym /dʒɪm/ 体育馆'], negExamples:['yes /jes/ 是（y 在词首是辅音）'], breakdown:'h-a-p-p-y：y 在词尾读 /iː/ → /ˈhæp.i/；m-y：单音节词尾读 /aɪ/ → /maɪ/。', summary:'y 是半个元音：结尾读衣（iː）或爱（aɪ），词中读短衣（ɪ）。' },
    { id:'R-schwa', title:'弱读音 Schwa /ə/', sym:'/ə/', mnemonic:'「不重读的元音，都躲进 schwa 小屋 /ə/」', oneLiner:'非重读音节里的元音经常弱化成 /ə/（schwa）：about /əˈbaʊt/、banana /bəˈnɑːnə/、family /ˈfæməli/、teacher /ˈtiːtʃə/。', posExamples:['about /əˈbaʊt/ 关于（a 弱读）','banana /bəˈnɑːnə/ 香蕉（两个 a 弱读）','teacher /ˈtiːtʃə/ 老师（er 弱读）'], negExamples:['cat /kæt/ 猫（单音节重读，无弱读）'], breakdown:'a-bout：a 在非重读位置弱化成 /ə/ → /əˈbaʊt/。', summary:'不重读的元音常读 /ə/，这是英语听力的秘密武器。' }
  ],

  /* ============ Magic e 配套练习题（辨音 / 填空 / 选词 / 选音） ============ */
  magicEExercises: [
    /* —— 辨音：听 CVCe 词，选出正确拼写 —— */
    { kind:'辨音', type:'listen', unitId:'SE-a', word:'cape', sym:'ā', spoken:'cape',
      prompt:'🔊 仔细听，是哪个单词呢？',
      options:[{label:'cap',value:'cap',correct:false},{label:'cape',value:'cape',correct:true},{label:'cup',value:'cup',correct:false},{label:'cope',value:'cope',correct:false}],
      feedback:{correct:'太棒了！是 cape（斗篷），a 发长音 /eɪ/。',wrong:'正确答案：cape（斗篷）。cap 没有 e，a 是短音 /æ/。'} },
    { kind:'辨音', type:'listen', unitId:'SE-i', word:'bite', sym:'ī', spoken:'bite',
      prompt:'🔊 仔细听，是哪个单词呢？',
      options:[{label:'bit',value:'bit',correct:false},{label:'bat',value:'bat',correct:false},{label:'bite',value:'bite',correct:true},{label:'boat',value:'boat',correct:false}],
      feedback:{correct:'对啦！是 bite（咬），i 发长音 /aɪ/。',wrong:'正确答案：bite（咬）。bit 没有 e，i 是短音 /ɪ/。'} },
    { kind:'辨音', type:'listen', unitId:'SE-o', word:'note', sym:'ō', spoken:'note',
      prompt:'🔊 仔细听，是哪个单词呢？',
      options:[{label:'not',value:'not',correct:false},{label:'net',value:'net',correct:false},{label:'nut',value:'nut',correct:false},{label:'note',value:'note',correct:true}],
      feedback:{correct:'太棒了！是 note（笔记），o 发长音 /əʊ/。',wrong:'正确答案：note（笔记）。not 没有 e，o 是短音 /ɒ/。'} },
    { kind:'辨音', type:'listen', unitId:'SE-u', word:'cube', sym:'ū', spoken:'cube',
      prompt:'🔊 仔细听，是哪个单词呢？',
      options:[{label:'cub',value:'cub',correct:false},{label:'cube',value:'cube',correct:true},{label:'cape',value:'cape',correct:false},{label:'cope',value:'cope',correct:false}],
      feedback:{correct:'对啦！是 cube（立方体），u 发长音 /juː/。',wrong:'正确答案：cube（立方体）。cub 没有 e，u 是短音 /ʌ/。'} },

    /* —— 辨音·长短对比：听后选出「长音（有 magic e）」的那个 —— */
    { kind:'辨音·长短对比', type:'listen', unitId:'SE-a', word:'cape', sym:'ā', spoken:'cape',
      prompt:'🔊 听一听：是 cap 还是 cape？选「长音（有 e）」的那个！',
      options:[{label:'cap /kæp/ 短 a',value:'cap',correct:false},{label:'cape /keɪp/ 长 a',value:'cape',correct:true}],
      feedback:{correct:'对！你听到了长音 /eɪ/，所以是 cape。',wrong:'再听一次：长音 /eɪ/ 是 cape；cap 是短音 /æ/。'} },
    { kind:'辨音·长短对比', type:'listen', unitId:'SE-i', word:'bite', sym:'ī', spoken:'bite',
      prompt:'🔊 听一听：是 bit 还是 bite？选「长音（有 e）」的那个！',
      options:[{label:'bit /bɪt/ 短 i',value:'bit',correct:false},{label:'bite /baɪt/ 长 i',value:'bite',correct:true}],
      feedback:{correct:'对！你听到了长音 /aɪ/，所以是 bite。',wrong:'再听一次：长音 /aɪ/ 是 bite；bit 是短音 /ɪ/。'} },
    { kind:'辨音·长短对比', type:'listen', unitId:'SE-o', word:'hope', sym:'ō', spoken:'hope',
      prompt:'🔊 听一听：是 hop 还是 hope？选「长音（有 e）」的那个！',
      options:[{label:'hop /hɒp/ 短 o',value:'hop',correct:false},{label:'hope /həʊp/ 长 o',value:'hope',correct:true}],
      feedback:{correct:'对！你听到了长音 /əʊ/，所以是 hope。',wrong:'再听一次：长音 /əʊ/ 是 hope；hop 是短音 /ɒ/。'} },
    { kind:'辨音·长短对比', type:'listen', unitId:'SE-u', word:'cube', sym:'ū', spoken:'cube',
      prompt:'🔊 听一听：是 cub 还是 cube？选「长音（有 e）」的那个！',
      options:[{label:'cub /kʌb/ 短 u',value:'cub',correct:false},{label:'cube /kjuːb/ 长 u',value:'cube',correct:true}],
      feedback:{correct:'对！你听到了长音 /juː/，所以是 cube。',wrong:'再听一次：长音 /juː/ 是 cube；cub 是短音 /ʌ/。'} },

    /* —— 选词填空：看中文意思，选出正确的 CVCe 词 —— */
    { kind:'选词填空', type:'blank', unitId:'SE-a', word:'cake', sym:'ā', spoken:'cake',
      prompt:'🎂 「蛋糕」应该填哪个英文词？',
      options:[{label:'cake',value:'cake',correct:true},{label:'cook',value:'cook',correct:false},{label:'cane',value:'cane',correct:false},{label:'cock',value:'cock',correct:false}],
      feedback:{correct:'没错！「蛋糕」就是 cake（a 发长音 /eɪ/）。',wrong:'正确答案：cake（蛋糕）。'} },
    { kind:'选词填空', type:'blank', unitId:'SE-i', word:'bite', sym:'ī', spoken:'bite',
      prompt:'🦷 「咬」应该填哪个英文词？',
      options:[{label:'bike',value:'bike',correct:false},{label:'bite',value:'bite',correct:true},{label:'like',value:'like',correct:false},{label:'line',value:'line',correct:false}],
      feedback:{correct:'对！「咬」就是 bite（i 发长音 /aɪ/）。',wrong:'正确答案：bite（咬）。'} },
    { kind:'选词填空', type:'blank', unitId:'SE-o', word:'note', sym:'ō', spoken:'note',
      prompt:'🎵 「笔记；音符」应该填哪个英文词？',
      options:[{label:'net',value:'net',correct:false},{label:'nest',value:'nest',correct:false},{label:'nose',value:'nose',correct:false},{label:'note',value:'note',correct:true}],
      feedback:{correct:'没错！「笔记」就是 note（o 发长音 /əʊ/）。',wrong:'正确答案：note（笔记）。'} },
    { kind:'选词填空', type:'blank', unitId:'SE-u', word:'cute', sym:'ū', spoken:'cute',
      prompt:'🐱 「可爱的」应该填哪个英文词？',
      options:[{label:'cat',value:'cat',correct:false},{label:'cot',value:'cot',correct:false},{label:'cube',value:'cube',correct:false},{label:'cute',value:'cute',correct:true}],
      feedback:{correct:'对！「可爱的」就是 cute（u 发长音 /juː/）。',wrong:'正确答案：cute（可爱的）。'} },

    /* —— 选音：看 CVCe 词，选出核心长音 —— */
    { kind:'选音', type:'read', unitId:'SE-a', word:'cake', sym:'ā', spoken:'cake',
      prompt:'🔤 听一听、看一看「cake」，它的核心音发什么？',
      options:[{label:'ā /eɪ/',value:'ā',correct:true},{label:'ă /æ/',value:'ă',correct:false},{label:'ē /iː/',value:'ē',correct:false},{label:'ō /əʊ/',value:'ō',correct:false}],
      feedback:{correct:'对啦！cake 里的 a 遇到结尾 e，发长音 ā /eɪ/。',wrong:'cake 是 CVCe 结构，a 发长音 ā /eɪ/。'} },
    { kind:'选音', type:'read', unitId:'SE-i', word:'bike', sym:'ī', spoken:'bike',
      prompt:'🔤 听一听、看一看「bike」，它的核心音发什么？',
      options:[{label:'ī /aɪ/',value:'ī',correct:true},{label:'ǐ /ɪ/',value:'ǐ',correct:false},{label:'ē /iː/',value:'ē',correct:false},{label:'ū /juː/',value:'ū',correct:false}],
      feedback:{correct:'对啦！bike 里的 i 遇到结尾 e，发长音 ī /aɪ/。',wrong:'bike 是 CVCe 结构，i 发长音 ī /aɪ/。'} }
  ],

  /* ============ 十、文章阅读题（可解码短文） ============ */
  readings: [
  {
    "id": "RD-1",
    "title": "The Cat and the Hat",
    "focus": "短元音 a (ă)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "启蒙"
    ],
    "date": "2025-09-01",
    "text": "The cat sat on a mat. The cat had a hat. The hat is red. The cat is glad. The cat and the hat are a match!",
    "focusWords": [
      "cat",
      "sat",
      "mat",
      "hat",
      "glad"
    ],
    "vocab": [
      {
        "w": "mat",
        "m": "垫子"
      },
      {
        "w": "glad",
        "m": "高兴的"
      },
      {
        "w": "match",
        "m": "一对/相配"
      }
    ],
    "questions": [
      {
        "q": "短文里哪只动物坐在垫子上？",
        "options": [
          "A. 狗 dog",
          "B. 猫 cat",
          "C. 鱼 fish"
        ],
        "answer": 1,
        "explain": "原文 \"The cat sat on a mat.\" 猫坐在垫子上。"
      },
      {
        "q": "下面哪个词含有短音 a (ă)？",
        "options": [
          "A. cake",
          "B. cat",
          "C. kite"
        ],
        "answer": 1,
        "explain": "cat 中的 a 发短音 /æ/；cake、kite 是长音。"
      },
      {
        "q": "猫的帽子是什么颜色？",
        "options": [
          "A. 红色 red",
          "B. 蓝色 blue",
          "C. 绿色 green"
        ],
        "answer": 0,
        "explain": "原文 \"The hat is red.\" 帽子是红色的。"
      }
    ]
  },
  {
    "id": "RD-2",
    "title": "The Big Pig",
    "focus": "短元音 i (ĭ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "启蒙"
    ],
    "date": "2025-09-02",
    "text": "A big pig sits in the pit. The pig is six. The pig digs and digs. The pig is fit and fun!",
    "focusWords": [
      "pig",
      "sit",
      "six",
      "dig",
      "fit"
    ],
    "vocab": [
      {
        "w": "pit",
        "m": "坑"
      },
      {
        "w": "digs",
        "m": "挖（第三人称）"
      },
      {
        "w": "fit",
        "m": "健康的"
      }
    ],
    "questions": [
      {
        "q": "猪坐在哪里？",
        "options": [
          "A. 坑里 pit",
          "B. 树上 tree",
          "C. 车上 car"
        ],
        "answer": 0,
        "explain": "原文 \"A big pig sits in the pit.\" 猪坐在坑里。"
      },
      {
        "q": "这只猪几岁？",
        "options": [
          "A. 五岁",
          "B. 六岁 six",
          "C. 十岁"
        ],
        "answer": 1,
        "explain": "原文 \"The pig is six.\" 猪六岁。"
      },
      {
        "q": "下面哪个词含有短音 i (ĭ)？",
        "options": [
          "A. bike",
          "B. time",
          "C. pig"
        ],
        "answer": 2,
        "explain": "pig 中的 i 发短音 /ɪ/；bike、time 是长音。"
      }
    ]
  },
  {
    "id": "RD-3",
    "title": "The Magic Silent e",
    "focus": "静音 e (a_e)",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "静音e",
      "规则",
      "一年级"
    ],
    "date": "2025-09-03",
    "text": "Cap is a hat. Add e and cap is cape! A man has a name. A tap can be a tape. The magic e makes the vowel say its name.",
    "focusWords": [
      "cap",
      "cape",
      "name",
      "tape"
    ],
    "vocab": [
      {
        "w": "cape",
        "m": "披风"
      },
      {
        "w": "tap",
        "m": "轻拍"
      },
      {
        "w": "tape",
        "m": "胶带"
      }
    ],
    "questions": [
      {
        "q": "加上静音 e 后，cap 变成了什么？",
        "options": [
          "A. cape 披风",
          "B. cup 杯子",
          "C. cop 警察"
        ],
        "answer": 0,
        "explain": "原文 \"Add e and cap is cape!\" 加 e 后 cap→cape。"
      },
      {
        "q": "静音 e 的作用是什么？",
        "options": [
          "A. 让元音发长音（字母名）",
          "B. 让元音发短音",
          "C. 什么也不做"
        ],
        "answer": 0,
        "explain": "原文点明 \"The magic e makes the vowel say its name.\""
      },
      {
        "q": "下面哪个词有静音 e？",
        "options": [
          "A. cat",
          "B. name",
          "C. map"
        ],
        "answer": 1,
        "explain": "name 词尾 e 不发音，让 a 发长音 /eɪ/。"
      }
    ]
  },
  {
    "id": "RD-4",
    "title": "The Sheep on the Ship",
    "focus": "sh / ee",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "动物",
      "sh",
      "海洋"
    ],
    "date": "2025-09-04",
    "text": "A sheep sees a ship. The ship is green. The sheep sits on the ship. The sheep and the fish meet. They eat and sleep. What a sweet trip!",
    "focusWords": [
      "sheep",
      "ship",
      "fish",
      "meet",
      "sleep",
      "sweet"
    ],
    "vocab": [
      {
        "w": "sheep",
        "m": "绵羊"
      },
      {
        "w": "sweet",
        "m": "甜蜜的"
      },
      {
        "w": "trip",
        "m": "旅行"
      }
    ],
    "questions": [
      {
        "q": "绵羊看到了什么？",
        "options": [
          "A. 一艘船 ship",
          "B. 一棵树 tree",
          "C. 一只猫 cat"
        ],
        "answer": 0,
        "explain": "原文 \"A sheep sees a ship.\" 绵羊看到一艘船。"
      },
      {
        "q": "下面哪个词含有 sh 的发音 /ʃ/？",
        "options": [
          "A. sun",
          "B. ship",
          "C. sit"
        ],
        "answer": 1,
        "explain": "ship 中的 sh 发 /ʃ/。"
      },
      {
        "q": "绵羊和鱼相遇后做了什么？",
        "options": [
          "A. 吃和睡 eat and sleep",
          "B. 跑和跳",
          "C. 哭"
        ],
        "answer": 0,
        "explain": "原文 \"They eat and sleep.\" 它们吃和睡。"
      }
    ]
  },
  {
    "id": "RD-5",
    "title": "Star Farm",
    "focus": "ar / or",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "农场",
      "ar",
      "自然"
    ],
    "date": "2025-09-05",
    "text": "On the farm, a star is born. The horse and the bird see the star. The corn is for the horse. The farm is warm. We are happy on the star farm!",
    "focusWords": [
      "star",
      "farm",
      "horse",
      "bird",
      "corn",
      "warm"
    ],
    "vocab": [
      {
        "w": "born",
        "m": "出生"
      },
      {
        "w": "warm",
        "m": "温暖的"
      },
      {
        "w": "happy",
        "m": "开心的"
      }
    ],
    "questions": [
      {
        "q": "故事发生在哪里？",
        "options": [
          "A. 农场 farm",
          "B. 学校 school",
          "C. 海边 sea"
        ],
        "answer": 0,
        "explain": "原文 \"On the farm, a star is born.\""
      },
      {
        "q": "下面哪个词含有 ar 的发音 /ɑː/？",
        "options": [
          "A. car",
          "B. cat",
          "C. cup"
        ],
        "answer": 0,
        "explain": "car 中的 ar 发 /ɑː/。"
      },
      {
        "q": "玉米是给谁的？",
        "options": [
          "A. 给马 horse",
          "B. 给鸟 bird",
          "C. 给鱼 fish"
        ],
        "answer": 0,
        "explain": "原文 \"The corn is for the horse.\" 玉米给马。"
      }
    ]
  },
  {
    "id": "RD-6",
    "title": "The Blue Flag",
    "focus": "辅音连缀 Blends",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "自然",
      "辅音连缀",
      "色彩"
    ],
    "date": "2025-09-06",
    "text": "A blue flag flaps in the wind. A black crab creeps up. The frog flips and splashes. We spot a star and stop. The plant is green and glad!",
    "focusWords": [
      "blue",
      "flag",
      "flaps",
      "black",
      "crab",
      "creeps",
      "frog",
      "flips",
      "splashes",
      "spot",
      "star",
      "plant",
      "glad"
    ],
    "vocab": [
      {
        "w": "flag",
        "m": "旗"
      },
      {
        "w": "crab",
        "m": "螃蟹"
      },
      {
        "w": "frog",
        "m": "青蛙"
      },
      {
        "w": "plant",
        "m": "植物"
      }
    ],
    "questions": [
      {
        "q": "什么在风里飘？",
        "options": [
          "A. 一面蓝旗 blue flag",
          "B. 一只红猫 red cat",
          "C. 一条大鱼 big fish"
        ],
        "answer": 0,
        "explain": "原文 \"A blue flag flaps in the wind.\" 一面蓝旗在风里飘。"
      },
      {
        "q": "下面哪个词含有 s 连缀（sp-）？",
        "options": [
          "A. sun",
          "B. spot",
          "C. sit"
        ],
        "answer": 1,
        "explain": "spot 中的 sp- 是 s 连缀，两个音都要发出来。"
      },
      {
        "q": "青蛙做了什么？",
        "options": [
          "A. flips and splashes 翻滚溅水",
          "B. sleeps 睡觉",
          "C. sings 唱歌"
        ],
        "answer": 0,
        "explain": "原文 \"The frog flips and splashes.\" 青蛙翻滚又溅水。"
      }
    ]
  },
  {
    "id": "RD-7",
    "title": "Chick on the Chair",
    "focus": "ch 的发音 /tʃ/",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "动物",
      "ch",
      "生活"
    ],
    "date": "2025-09-07",
    "text": "The chick is on the chair. The child has a chip. The child checks the watch. They chat and have a big lunch. What a catch!",
    "focusWords": [
      "chick",
      "chair",
      "child",
      "chip",
      "checks",
      "watch",
      "chat",
      "lunch",
      "catch"
    ],
    "vocab": [
      {
        "w": "chick",
        "m": "小鸡"
      },
      {
        "w": "chair",
        "m": "椅子"
      },
      {
        "w": "lunch",
        "m": "午餐"
      },
      {
        "w": "catch",
        "m": "抓住"
      }
    ],
    "questions": [
      {
        "q": "小鸡在哪里？",
        "options": [
          "A. 在椅子上 on the chair",
          "B. 在盒子里 in the box",
          "C. 在床下 under the bed"
        ],
        "answer": 0,
        "explain": "原文 \"The chick is on the chair.\" 小鸡在椅子上。"
      },
      {
        "q": "下面哪个词含有 ch 的发音 /tʃ/？",
        "options": [
          "A. ship",
          "B. chair",
          "C. sit"
        ],
        "answer": 1,
        "explain": "chair 中的 ch 发 /tʃ/。"
      },
      {
        "q": "他们吃了丰盛的什么？",
        "options": [
          "A. lunch 午餐",
          "B. breakfast 早餐",
          "C. dinner 晚餐"
        ],
        "answer": 0,
        "explain": "原文 \"have a big lunch\" 吃了一顿丰盛的午餐。"
      }
    ]
  },
  {
    "id": "RD-8",
    "title": "The Sad Rat",
    "focus": "短元音 a (ă)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "启蒙"
    ],
    "date": "2025-09-12",
    "text": "A sad rat sat on a mat. The rat had a hat. The cat saw the rat. The rat ran fast to the pad.",
    "focusWords": [
      "rat",
      "sat",
      "mat",
      "hat",
      "cat",
      "ran",
      "pad",
      "sad",
      "fast"
    ],
    "vocab": [
      {
        "w": "rat",
        "m": "老鼠"
      },
      {
        "w": "sad",
        "m": "伤心的"
      },
      {
        "w": "pad",
        "m": "小垫/本子"
      }
    ],
    "questions": [
      {
        "q": "谁坐在垫子上？",
        "options": [
          "A. 老鼠 rat",
          "B. 猫 cat",
          "C. 狗 dog"
        ],
        "answer": 0,
        "explain": "原文 \"A sad rat sat on a mat.\" 老鼠坐在垫子上。"
      },
      {
        "q": "老鼠的心情怎样？",
        "options": [
          "A. 伤心 sad",
          "B. 开心 glad",
          "C. 生气 mad"
        ],
        "answer": 0,
        "explain": "原文 \"A sad rat...\" 老鼠是伤心的。"
      },
      {
        "q": "下面哪个词含有短音 a？",
        "options": [
          "A. cake",
          "B. rat",
          "C. kite"
        ],
        "answer": 1,
        "explain": "rat 中的 a 发短音 /æ/。"
      }
    ]
  },
  {
    "id": "RD-9",
    "title": "The Red Cap",
    "focus": "短元音 a (ă)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "生活",
      "短元音",
      "启蒙"
    ],
    "date": "2025-09-19",
    "text": "Dad has a cap. The cap is red. Dad can tap the map. The map shows a path. We are glad!",
    "focusWords": [
      "cap",
      "red",
      "tap",
      "map",
      "path",
      "glad",
      "dad"
    ],
    "vocab": [
      {
        "w": "cap",
        "m": "帽子"
      },
      {
        "w": "path",
        "m": "小路"
      },
      {
        "w": "tap",
        "m": "轻拍"
      }
    ],
    "questions": [
      {
        "q": "爸爸的帽子是什么颜色？",
        "options": [
          "A. 红色 red",
          "B. 蓝色 blue",
          "C. 绿色 green"
        ],
        "answer": 0,
        "explain": "原文 \"The cap is red.\" 帽子是红色的。"
      },
      {
        "q": "地图展示了什么？",
        "options": [
          "A. 一条小路 path",
          "B. 一棵树 tree",
          "C. 一条河 river"
        ],
        "answer": 0,
        "explain": "原文 \"The map shows a path.\" 地图展示了一条小路。"
      },
      {
        "q": "下面哪个词有短音 a？",
        "options": [
          "A. name",
          "B. cap",
          "C. tape"
        ],
        "answer": 1,
        "explain": "cap 中的 a 发短音 /æ/。"
      }
    ]
  },
  {
    "id": "RD-10",
    "title": "The Big Jam",
    "focus": "短元音 a (ă)",
    "level": "一年级上",
    "stars": 3,
    "tags": [
      "食物",
      "短元音",
      "家庭"
    ],
    "date": "2025-09-26",
    "text": "Nan has jam in a jar. The jam is bad. Dad is mad. Nan gets a bag of ham. We eat and laugh!",
    "focusWords": [
      "jam",
      "jar",
      "bad",
      "mad",
      "bag",
      "ham",
      "Nan",
      "laugh",
      "has"
    ],
    "vocab": [
      {
        "w": "jam",
        "m": "果酱"
      },
      {
        "w": "jar",
        "m": "罐子"
      },
      {
        "w": "ham",
        "m": "火腿"
      }
    ],
    "questions": [
      {
        "q": "果酱放在哪里？",
        "options": [
          "A. 罐子里 jar",
          "B. 盒子里 box",
          "C. 碗里 bowl"
        ],
        "answer": 0,
        "explain": "原文 \"Nan has jam in a jar.\" 果酱在罐子里。"
      },
      {
        "q": "爸爸为什么生气？",
        "options": [
          "A. 果酱坏了 bad",
          "B. 猫跑了",
          "C. 没早饭"
        ],
        "answer": 0,
        "explain": "原文 \"The jam is bad. Dad is mad.\" 果酱坏了，爸爸生气。"
      },
      {
        "q": "下面哪个词有短音 a？",
        "options": [
          "A. cake",
          "B. ham",
          "C. bike"
        ],
        "answer": 1,
        "explain": "ham 中的 a 发短音 /æ/。"
      }
    ]
  },
  {
    "id": "RD-11",
    "title": "A Black Bat",
    "focus": "短元音 a (ă)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "动物",
      "短元音",
      "自然"
    ],
    "date": "2025-10-03",
    "text": "A black bat flaps at night. The bat sat on a branch. A cat ran past. The bat was not sad. It flew fast!",
    "focusWords": [
      "bat",
      "black",
      "flaps",
      "sat",
      "branch",
      "cat",
      "ran",
      "past",
      "sad",
      "flew",
      "fast"
    ],
    "vocab": [
      {
        "w": "bat",
        "m": "蝙蝠"
      },
      {
        "w": "branch",
        "m": "树枝"
      },
      {
        "w": "flew",
        "m": "飞（过去）"
      }
    ],
    "questions": [
      {
        "q": "蝙蝠什么时候飞？",
        "options": [
          "A. 夜里 at night",
          "B. 早上 morning",
          "C. 中午 noon"
        ],
        "answer": 0,
        "explain": "原文 \"A black bat flaps at night.\" 蝙蝠夜里飞。"
      },
      {
        "q": "蝙蝠停在哪里？",
        "options": [
          "A. 树枝上 branch",
          "B. 地上 ground",
          "C. 水里 water"
        ],
        "answer": 0,
        "explain": "原文 \"The bat sat on a branch.\" 蝙蝠停在树枝上。"
      },
      {
        "q": "下面哪个词有短音 a？",
        "options": [
          "A. star",
          "B. bat",
          "C. cake"
        ],
        "answer": 1,
        "explain": "bat 中的 a 发短音 /æ/。"
      }
    ]
  },
  {
    "id": "RD-12",
    "title": "The Red Hen",
    "focus": "短元音 e (ĕ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "农场"
    ],
    "date": "2025-10-10",
    "text": "A red hen sits in a pen. The hen is ten. The hen gets a web. The web is wet. The hen is not sad!",
    "focusWords": [
      "red",
      "hen",
      "sits",
      "pen",
      "ten",
      "web",
      "wet",
      "sad"
    ],
    "vocab": [
      {
        "w": "hen",
        "m": "母鸡"
      },
      {
        "w": "pen",
        "m": "围栏"
      },
      {
        "w": "wet",
        "m": "湿的"
      }
    ],
    "questions": [
      {
        "q": "母鸡坐在哪里？",
        "options": [
          "A. 围栏里 pen",
          "B. 树上 tree",
          "C. 车上 car"
        ],
        "answer": 0,
        "explain": "原文 \"A red hen sits in a pen.\" 母鸡坐在围栏里。"
      },
      {
        "q": "母鸡几岁了？",
        "options": [
          "A. 十岁 ten",
          "B. 三岁",
          "C. 五岁"
        ],
        "answer": 0,
        "explain": "原文 \"The hen is ten.\" 母鸡十岁。"
      },
      {
        "q": "下面哪个词有短音 e？",
        "options": [
          "A. bee",
          "B. hen",
          "C. tree"
        ],
        "answer": 1,
        "explain": "hen 中的 e 发短音 /e/。"
      }
    ]
  },
  {
    "id": "RD-13",
    "title": "The Bed and the Pet",
    "focus": "短元音 e (ĕ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "生活",
      "短元音",
      "家庭"
    ],
    "date": "2025-10-17",
    "text": "The pet is on the bed. The bed is red. The pet is wet. We get a net. The net is set. The pet is fed!",
    "focusWords": [
      "pet",
      "bed",
      "red",
      "wet",
      "net",
      "set",
      "fed"
    ],
    "vocab": [
      {
        "w": "pet",
        "m": "宠物"
      },
      {
        "w": "net",
        "m": "网"
      },
      {
        "w": "fed",
        "m": "喂（过去）"
      }
    ],
    "questions": [
      {
        "q": "宠物在哪里？",
        "options": [
          "A. 床上 bed",
          "B. 地上 floor",
          "C. 桌上 table"
        ],
        "answer": 0,
        "explain": "原文 \"The pet is on the bed.\" 宠物在床上。"
      },
      {
        "q": "我们用什么喂宠物？",
        "options": [
          "A. 网 net",
          "B. 盒子 box",
          "C. 书 book"
        ],
        "answer": 0,
        "explain": "原文 \"We get a net... The pet is fed!\" 用网喂宠物。"
      },
      {
        "q": "下面哪个词有短音 e？",
        "options": [
          "A. Pete",
          "B. pet",
          "C. me"
        ],
        "answer": 1,
        "explain": "pet 中的 e 发短音 /e/。"
      }
    ]
  },
  {
    "id": "RD-14",
    "title": "The Wet Ted",
    "focus": "短元音 e (ĕ)",
    "level": "一年级上",
    "stars": 3,
    "tags": [
      "天气",
      "短元音",
      "生活"
    ],
    "date": "2025-10-24",
    "text": "Ted is wet. The west wind is ten. Ted has a red vest. The vest gets wet. Ted is a wet kid on the step!",
    "focusWords": [
      "wet",
      "Ted",
      "west",
      "ten",
      "red",
      "vest",
      "kid",
      "step"
    ],
    "vocab": [
      {
        "w": "vest",
        "m": "背心"
      },
      {
        "w": "west",
        "m": "西"
      },
      {
        "w": "step",
        "m": "台阶"
      }
    ],
    "questions": [
      {
        "q": "Ted 为什么湿了？",
        "options": [
          "A. 西风把背心弄湿",
          "B. 他游泳",
          "C. 下雨"
        ],
        "answer": 0,
        "explain": "原文 \"The west wind... The vest gets wet.\" 西风把背心弄湿。"
      },
      {
        "q": "Ted 穿着什么？",
        "options": [
          "A. 红色背心 red vest",
          "B. 蓝帽 blue hat",
          "C. 绿鞋 green shoe"
        ],
        "answer": 0,
        "explain": "原文 \"Ted has a red vest.\""
      },
      {
        "q": "下面哪个词有短音 e？",
        "options": [
          "A. we",
          "B. Ted",
          "C. he"
        ],
        "answer": 1,
        "explain": "Ted 中的 e 发短音 /e/。"
      }
    ]
  },
  {
    "id": "RD-15",
    "title": "The Ten Eggs",
    "focus": "短元音 e (ĕ)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "校园",
      "短元音",
      "动物"
    ],
    "date": "2025-10-31",
    "text": "Ben has ten eggs. The eggs are in a nest. The nest is on a desk. Ben gets wet. The eggs are kept. We met at the test!",
    "focusWords": [
      "ten",
      "eggs",
      "nest",
      "desk",
      "wet",
      "kept",
      "met",
      "test",
      "Ben"
    ],
    "vocab": [
      {
        "w": "eggs",
        "m": "蛋"
      },
      {
        "w": "nest",
        "m": "鸟巢"
      },
      {
        "w": "kept",
        "m": "保存（过去）"
      }
    ],
    "questions": [
      {
        "q": "蛋放在哪里？",
        "options": [
          "A. 鸟巢里 nest",
          "B. 盒子里 box",
          "C. 碗里 bowl"
        ],
        "answer": 0,
        "explain": "原文 \"The eggs are in a nest.\" 蛋在鸟巢里。"
      },
      {
        "q": "Ben 有多少个蛋？",
        "options": [
          "A. 十个 ten",
          "B. 三个",
          "C. 五个"
        ],
        "answer": 0,
        "explain": "原文 \"Ben has ten eggs.\""
      },
      {
        "q": "下面哪个词有短音 e？",
        "options": [
          "A. these",
          "B. eggs",
          "C. theme"
        ],
        "answer": 1,
        "explain": "eggs 中的 e 发短音 /e/。"
      }
    ]
  },
  {
    "id": "RD-16",
    "title": "The Pig in the Pit",
    "focus": "短元音 i (ĭ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "农场"
    ],
    "date": "2025-11-07",
    "text": "A big pig sits in a pit. The pig is six. The pig digs and digs. The pig is fit and grins. What a silly pig!",
    "focusWords": [
      "pig",
      "sit",
      "six",
      "dig",
      "fit",
      "grins",
      "silly"
    ],
    "vocab": [
      {
        "w": "pit",
        "m": "坑"
      },
      {
        "w": "digs",
        "m": "挖"
      },
      {
        "w": "grins",
        "m": "咧嘴笑"
      }
    ],
    "questions": [
      {
        "q": "猪坐在哪里？",
        "options": [
          "A. 坑里 pit",
          "B. 树上 tree",
          "C. 车上 car"
        ],
        "answer": 0,
        "explain": "原文 \"A big pig sits in a pit.\""
      },
      {
        "q": "猪几岁？",
        "options": [
          "A. 六岁 six",
          "B. 四岁",
          "C. 十岁"
        ],
        "answer": 0,
        "explain": "原文 \"The pig is six.\""
      },
      {
        "q": "下面哪个词有短音 i？",
        "options": [
          "A. bike",
          "B. pig",
          "C. time"
        ],
        "answer": 1,
        "explain": "pig 中的 i 发短音 /ɪ/。"
      }
    ]
  },
  {
    "id": "RD-17",
    "title": "The Little Tick",
    "focus": "短元音 i (ĭ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "昆虫",
      "短元音",
      "自然"
    ],
    "date": "2025-11-14",
    "text": "A tick is on the stick. The stick is thin. The tick is sick. The kid picks it. The tick is in the bin!",
    "focusWords": [
      "tick",
      "stick",
      "thin",
      "sick",
      "kid",
      "picks",
      "bin"
    ],
    "vocab": [
      {
        "w": "tick",
        "m": "小虫"
      },
      {
        "w": "stick",
        "m": "树枝"
      },
      {
        "w": "bin",
        "m": "垃圾桶"
      }
    ],
    "questions": [
      {
        "q": "小虫在哪里？",
        "options": [
          "A. 树枝上 stick",
          "B. 地上 ground",
          "C. 水里 water"
        ],
        "answer": 0,
        "explain": "原文 \"A tick is on the stick.\""
      },
      {
        "q": "小虫怎么了？",
        "options": [
          "A. 生病了 sick",
          "B. 睡着了",
          "C. 在唱歌"
        ],
        "answer": 0,
        "explain": "原文 \"The tick is sick.\""
      },
      {
        "q": "下面哪个词有短音 i？",
        "options": [
          "A. kite",
          "B. tick",
          "C. light"
        ],
        "answer": 1,
        "explain": "tick 中的 i 发短音 /ɪ/。"
      }
    ]
  },
  {
    "id": "RD-18",
    "title": "The Pink Milk",
    "focus": "短元音 i (ĭ)",
    "level": "一年级上",
    "stars": 3,
    "tags": [
      "食物",
      "短元音",
      "生活"
    ],
    "date": "2025-11-21",
    "text": "Tim drinks milk. The milk is pink. Tim is six. The milk is in a tin. Tim grins and sits. The milk is a win!",
    "focusWords": [
      "Tim",
      "drinks",
      "milk",
      "pink",
      "six",
      "tin",
      "grins",
      "sits",
      "win"
    ],
    "vocab": [
      {
        "w": "milk",
        "m": "牛奶"
      },
      {
        "w": "tin",
        "m": "罐头"
      },
      {
        "w": "pink",
        "m": "粉色"
      }
    ],
    "questions": [
      {
        "q": "Tim 喝了什么？",
        "options": [
          "A. 牛奶 milk",
          "B. 水 water",
          "C. 果汁 juice"
        ],
        "answer": 0,
        "explain": "原文 \"Tim drinks milk.\""
      },
      {
        "q": "牛奶是什么颜色？",
        "options": [
          "A. 粉色 pink",
          "B. 白色 white",
          "C. 蓝色 blue"
        ],
        "answer": 0,
        "explain": "原文 \"The milk is pink.\""
      },
      {
        "q": "下面哪个词有短音 i？",
        "options": [
          "A. like",
          "B. milk",
          "C. ice"
        ],
        "answer": 1,
        "explain": "milk 中的 i 发短音 /ɪ/。"
      }
    ]
  },
  {
    "id": "RD-19",
    "title": "A Big Gift",
    "focus": "短元音 i (ĭ)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "礼物",
      "短元音",
      "情感"
    ],
    "date": "2025-11-28",
    "text": "Liz gets a gift. The gift is big. It is in a box with a ribbon. Liz lifts it quick. The gift is a trick - a pink pig!",
    "focusWords": [
      "Liz",
      "gift",
      "big",
      "it",
      "box",
      "ribbon",
      "lifts",
      "quick",
      "trick",
      "pink",
      "pig"
    ],
    "vocab": [
      {
        "w": "gift",
        "m": "礼物"
      },
      {
        "w": "ribbon",
        "m": "丝带"
      },
      {
        "w": "trick",
        "m": "戏法"
      }
    ],
    "questions": [
      {
        "q": "礼物里是什么？",
        "options": [
          "A. 一只粉色猪 pink pig",
          "B. 一本书 book",
          "C. 一个球 ball"
        ],
        "answer": 0,
        "explain": "原文 \"The gift is a trick - a pink pig!\""
      },
      {
        "q": "Liz 怎么拿起礼物？",
        "options": [
          "A. 很快地 quick",
          "B. 慢慢地 slow",
          "C. 用脚 with foot"
        ],
        "answer": 0,
        "explain": "原文 \"Liz lifts it quick.\""
      },
      {
        "q": "下面哪个词有短音 i？",
        "options": [
          "A. bite",
          "B. gift",
          "C. bike"
        ],
        "answer": 1,
        "explain": "gift 中的 i 发短音 /ɪ/。"
      }
    ]
  },
  {
    "id": "RD-20",
    "title": "The Hot Dog",
    "focus": "短元音 o (ŏ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "食物"
    ],
    "date": "2025-12-05",
    "text": "A hot dog on a log. The dog is not glad. The dog nods and trots. The dog gets a top. The dog is not mad!",
    "focusWords": [
      "hot",
      "dog",
      "log",
      "not",
      "glad",
      "nods",
      "trots",
      "top",
      "mad"
    ],
    "vocab": [
      {
        "w": "log",
        "m": "木头"
      },
      {
        "w": "nods",
        "m": "点头"
      },
      {
        "w": "trots",
        "m": "小跑"
      }
    ],
    "questions": [
      {
        "q": "狗坐在什么上？",
        "options": [
          "A. 木头上 log",
          "B. 垫子上 mat",
          "C. 椅子上 chair"
        ],
        "answer": 0,
        "explain": "原文 \"A hot dog on a log.\""
      },
      {
        "q": "狗拿到什么后不生气了？",
        "options": [
          "A. 一个顶饰 top",
          "B. 一根骨头 bone",
          "C. 一个球 ball"
        ],
        "answer": 0,
        "explain": "原文 \"The dog gets a top. The dog is not mad!\""
      },
      {
        "q": "下面哪个词有短音 o？",
        "options": [
          "A. nose",
          "B. dog",
          "C. note"
        ],
        "answer": 1,
        "explain": "dog 中的 o 发短音 /ɒ/。"
      }
    ]
  },
  {
    "id": "RD-21",
    "title": "The Fox and the Box",
    "focus": "短元音 o (ŏ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "动物",
      "短元音",
      "自然"
    ],
    "date": "2025-12-12",
    "text": "A fox sits on a box. The box is orange. The fox has a sock. The sock is on a rock. The fox is not shocked!",
    "focusWords": [
      "fox",
      "box",
      "orange",
      "sock",
      "rock",
      "shocked",
      "not"
    ],
    "vocab": [
      {
        "w": "fox",
        "m": "狐狸"
      },
      {
        "w": "sock",
        "m": "袜子"
      },
      {
        "w": "rock",
        "m": "石头"
      }
    ],
    "questions": [
      {
        "q": "狐狸坐在哪里？",
        "options": [
          "A. 盒子上 box",
          "B. 树上 tree",
          "C. 地上 ground"
        ],
        "answer": 0,
        "explain": "原文 \"A fox sits on a box.\""
      },
      {
        "q": "盒子是什么颜色？",
        "options": [
          "A. 橙色 orange",
          "B. 红色 red",
          "C. 蓝色 blue"
        ],
        "answer": 0,
        "explain": "原文 \"The box is orange.\""
      },
      {
        "q": "下面哪个词有短音 o？",
        "options": [
          "A. rope",
          "B. fox",
          "C. rose"
        ],
        "answer": 1,
        "explain": "fox 中的 o 发短音 /ɒ/。"
      }
    ]
  },
  {
    "id": "RD-22",
    "title": "The Clock Shop",
    "focus": "短元音 o (ŏ)",
    "level": "一年级上",
    "stars": 3,
    "tags": [
      "校园",
      "短元音",
      "生活"
    ],
    "date": "2025-12-19",
    "text": "Tom stops at the shop. The shop has a clock. The clock is on a block. Tom got a mop. The mop is not soft!",
    "focusWords": [
      "Tom",
      "stops",
      "shop",
      "clock",
      "block",
      "got",
      "mop",
      "soft",
      "not"
    ],
    "vocab": [
      {
        "w": "shop",
        "m": "商店"
      },
      {
        "w": "clock",
        "m": "钟"
      },
      {
        "w": "mop",
        "m": "拖把"
      }
    ],
    "questions": [
      {
        "q": "Tom 在商店买了什么？",
        "options": [
          "A. 拖把 mop",
          "B. 钟 clock",
          "C. 书 book"
        ],
        "answer": 0,
        "explain": "原文 \"Tom got a mop.\""
      },
      {
        "q": "钟放在哪里？",
        "options": [
          "A. 积木上 block",
          "B. 桌上 table",
          "C. 地上 floor"
        ],
        "answer": 0,
        "explain": "原文 \"The clock is on a block.\""
      },
      {
        "q": "下面哪个词有短音 o？",
        "options": [
          "A. note",
          "B. shop",
          "C. home"
        ],
        "answer": 1,
        "explain": "shop 中的 o 发短音 /ɒ/。"
      }
    ]
  },
  {
    "id": "RD-23",
    "title": "The Pond Frog",
    "focus": "短元音 o (ŏ)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "动物",
      "短元音",
      "自然"
    ],
    "date": "2025-12-26",
    "text": "A frog on a rock. The frog is odd. The frog hops and nods. A dog trots to the pond. The frog is not gone!",
    "focusWords": [
      "frog",
      "rock",
      "odd",
      "hops",
      "nods",
      "dog",
      "trots",
      "pond",
      "gone",
      "not"
    ],
    "vocab": [
      {
        "w": "pond",
        "m": "池塘"
      },
      {
        "w": "odd",
        "m": "奇怪的"
      },
      {
        "w": "hops",
        "m": "跳"
      }
    ],
    "questions": [
      {
        "q": "青蛙在哪里？",
        "options": [
          "A. 石头上 rock",
          "B. 草里 grass",
          "C. 树上 tree"
        ],
        "answer": 0,
        "explain": "原文 \"A frog on a rock.\""
      },
      {
        "q": "狗去了哪里？",
        "options": [
          "A. 池塘 pond",
          "B. 商店 shop",
          "C. 学校 school"
        ],
        "answer": 0,
        "explain": "原文 \"A dog trots to the pond.\""
      },
      {
        "q": "下面哪个词有短音 o？",
        "options": [
          "A. rose",
          "B. frog",
          "C. rope"
        ],
        "answer": 1,
        "explain": "frog 中的 o 发短音 /ɒ/。"
      }
    ]
  },
  {
    "id": "RD-24",
    "title": "The Ugly Bug",
    "focus": "短元音 u (ŭ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "昆虫",
      "短元音",
      "自然"
    ],
    "date": "2026-01-02",
    "text": "A bug on a rug. The bug is ugly. The bug hums a tune. The sun is up. The bug is not fun!",
    "focusWords": [
      "bug",
      "rug",
      "ugly",
      "hums",
      "tune",
      "sun",
      "up",
      "not",
      "fun"
    ],
    "vocab": [
      {
        "w": "rug",
        "m": "小地毯"
      },
      {
        "w": "ugly",
        "m": "丑的"
      },
      {
        "w": "hums",
        "m": "哼唱"
      }
    ],
    "questions": [
      {
        "q": "虫子在哪里？",
        "options": [
          "A. 小地毯上 rug",
          "B. 桌上 table",
          "C. 椅子上 chair"
        ],
        "answer": 0,
        "explain": "原文 \"A bug on a rug.\""
      },
      {
        "q": "虫子做了什么？",
        "options": [
          "A. 哼了一支曲子 hums a tune",
          "B. 睡了觉",
          "C. 跳了舞"
        ],
        "answer": 0,
        "explain": "原文 \"The bug hums a tune.\""
      },
      {
        "q": "下面哪个词有短音 u？",
        "options": [
          "A. use",
          "B. bug",
          "C. unit"
        ],
        "answer": 1,
        "explain": "bug 中的 u 发短音 /ʌ/。"
      }
    ]
  },
  {
    "id": "RD-25",
    "title": "The Red Cup",
    "focus": "短元音 u (ŭ)",
    "level": "通用启蒙级",
    "stars": 3,
    "tags": [
      "生活",
      "短元音",
      "家庭"
    ],
    "date": "2026-01-09",
    "text": "Mum has a cup. The cup is red. The cup has mud. The mud is from the tub. Mum is not glad!",
    "focusWords": [
      "Mum",
      "cup",
      "red",
      "mud",
      "from",
      "tub",
      "not",
      "glad"
    ],
    "vocab": [
      {
        "w": "cup",
        "m": "杯子"
      },
      {
        "w": "mud",
        "m": "泥"
      },
      {
        "w": "tub",
        "m": "浴缸"
      }
    ],
    "questions": [
      {
        "q": "妈妈的杯子里有什么？",
        "options": [
          "A. 泥 mud",
          "B. 水 water",
          "C. 牛奶 milk"
        ],
        "answer": 0,
        "explain": "原文 \"The cup has mud.\""
      },
      {
        "q": "泥来自哪里？",
        "options": [
          "A. 浴缸 tub",
          "B. 花园 garden",
          "C. 厨房 kitchen"
        ],
        "answer": 0,
        "explain": "原文 \"The mud is from the tub.\""
      },
      {
        "q": "下面哪个词有短音 u？",
        "options": [
          "A. cute",
          "B. cup",
          "C. suit"
        ],
        "answer": 1,
        "explain": "cup 中的 u 发短音 /ʌ/。"
      }
    ]
  },
  {
    "id": "RD-26",
    "title": "The Fun Run",
    "focus": "短元音 u (ŭ)",
    "level": "一年级上",
    "stars": 3,
    "tags": [
      "运动",
      "短元音",
      "户外"
    ],
    "date": "2026-01-16",
    "text": "The sun is up. The kids run. The run is fun. A bus comes. The bus has a bun? No, a bun! The kids laugh and eat the bun.",
    "focusWords": [
      "sun",
      "up",
      "kids",
      "run",
      "fun",
      "bus",
      "comes",
      "bun",
      "laugh",
      "eat"
    ],
    "vocab": [
      {
        "w": "bus",
        "m": "公交车"
      },
      {
        "w": "bun",
        "m": "小圆面包"
      },
      {
        "w": "kids",
        "m": "孩子们"
      }
    ],
    "questions": [
      {
        "q": "孩子们为什么笑？",
        "options": [
          "A. 吃到小面包 bun",
          "B. 输了比赛",
          "C. 下雨了"
        ],
        "answer": 0,
        "explain": "原文 \"The kids laugh and eat the bun.\""
      },
      {
        "q": "什么车来了？",
        "options": [
          "A. 公交车 bus",
          "B. 出租车 taxi",
          "C. 火车 train"
        ],
        "answer": 0,
        "explain": "原文 \"A bus comes.\""
      },
      {
        "q": "下面哪个词有短音 u？",
        "options": [
          "A. use",
          "B. bus",
          "C. flute"
        ],
        "answer": 1,
        "explain": "bus 中的 u 发短音 /ʌ/。"
      }
    ]
  },
  {
    "id": "RD-27",
    "title": "The Duck and the Nut",
    "focus": "短元音 u (ŭ)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "动物",
      "短元音",
      "自然"
    ],
    "date": "2026-01-23",
    "text": "A duck on the rug. The duck has a nut. The nut is from a hut. The hut is shut. The duck is stuck! But the duck jumps up.",
    "focusWords": [
      "duck",
      "rug",
      "nut",
      "from",
      "hut",
      "shut",
      "stuck",
      "jumps",
      "up"
    ],
    "vocab": [
      {
        "w": "duck",
        "m": "鸭子"
      },
      {
        "w": "nut",
        "m": "坚果"
      },
      {
        "w": "hut",
        "m": "小屋"
      }
    ],
    "questions": [
      {
        "q": "鸭子为什么卡住了？",
        "options": [
          "A. 小屋关着 shut",
          "B. 它睡着了",
          "C. 它饿了"
        ],
        "answer": 0,
        "explain": "原文 \"The hut is shut. The duck is stuck!\""
      },
      {
        "q": "坚果来自哪里？",
        "options": [
          "A. 小屋 hut",
          "B. 商店 shop",
          "C. 树上 tree"
        ],
        "answer": 0,
        "explain": "原文 \"The nut is from a hut.\""
      },
      {
        "q": "下面哪个词有短音 u？",
        "options": [
          "A. tune",
          "B. duck",
          "C. cube"
        ],
        "answer": 1,
        "explain": "duck 中的 u 发短音 /ʌ/。"
      }
    ]
  },
  {
    "id": "RD-28",
    "title": "The Cake and the Name",
    "focus": "静音 e (a_e)",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "食物",
      "静音e",
      "家庭"
    ],
    "date": "2026-01-30",
    "text": "Jane makes a cake. The cake has a name. The name is on a plate. The plate is not late. Jane is so brave!",
    "focusWords": [
      "Jane",
      "makes",
      "cake",
      "name",
      "plate",
      "late",
      "brave",
      "not"
    ],
    "vocab": [
      {
        "w": "cake",
        "m": "蛋糕"
      },
      {
        "w": "plate",
        "m": "盘子"
      },
      {
        "w": "brave",
        "m": "勇敢的"
      }
    ],
    "questions": [
      {
        "q": "蛋糕上有什么？",
        "options": [
          "A. 一个名字 name",
          "B. 一支蜡烛 candle",
          "C. 一朵花 flower"
        ],
        "answer": 0,
        "explain": "原文 \"The cake has a name.\""
      },
      {
        "q": "Jane 做了什么？",
        "options": [
          "A. 一个蛋糕 cake",
          "B. 一本书 book",
          "C. 一首歌 song"
        ],
        "answer": 0,
        "explain": "原文 \"Jane makes a cake.\""
      },
      {
        "q": "下面哪个词有静音 e？",
        "options": [
          "A. cat",
          "B. name",
          "C. cap"
        ],
        "answer": 1,
        "explain": "name 词尾 e 不发音，让 a 发长音 /eɪ/。"
      }
    ]
  },
  {
    "id": "RD-29",
    "title": "The Bike Ride",
    "focus": "静音 e (i_e)",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "交通",
      "静音e",
      "运动"
    ],
    "date": "2026-02-06",
    "text": "Mike rides a bike. The bike is white. Mike hides a kite. The kite is in the light. What a nice ride!",
    "focusWords": [
      "Mike",
      "rides",
      "bike",
      "white",
      "hides",
      "kite",
      "light",
      "nice"
    ],
    "vocab": [
      {
        "w": "bike",
        "m": "自行车"
      },
      {
        "w": "kite",
        "m": "风筝"
      },
      {
        "w": "ride",
        "m": "骑行"
      }
    ],
    "questions": [
      {
        "q": "Mike 骑什么？",
        "options": [
          "A. 自行车 bike",
          "B. 公交车 bus",
          "C. 马 horse"
        ],
        "answer": 0,
        "explain": "原文 \"Mike rides a bike.\""
      },
      {
        "q": "风筝在哪里？",
        "options": [
          "A. 光里 light",
          "B. 盒里 box",
          "C. 树上 tree"
        ],
        "answer": 0,
        "explain": "原文 \"The kite is in the light.\""
      },
      {
        "q": "下面哪个词有静音 e？",
        "options": [
          "A. bit",
          "B. bike",
          "C. win"
        ],
        "answer": 1,
        "explain": "bike 词尾 e 让 i 发长音 /aɪ/。"
      }
    ]
  },
  {
    "id": "RD-30",
    "title": "The Home Note",
    "focus": "静音 e (o_e)",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "家庭",
      "静音e",
      "生活"
    ],
    "date": "2026-02-13",
    "text": "Rose has a home. The home is fine. Rose writes a note. The note is in a rope? No, in a cone. The cone is on the stove.",
    "focusWords": [
      "Rose",
      "home",
      "fine",
      "writes",
      "note",
      "rope",
      "cone",
      "stove",
      "no"
    ],
    "vocab": [
      {
        "w": "home",
        "m": "家"
      },
      {
        "w": "note",
        "m": "便条"
      },
      {
        "w": "cone",
        "m": "锥桶"
      }
    ],
    "questions": [
      {
        "q": "便条在哪里？",
        "options": [
          "A. 锥桶里 cone",
          "B. 盒子里 box",
          "C. 桌上 table"
        ],
        "answer": 0,
        "explain": "原文 \"The note is ... in a cone.\""
      },
      {
        "q": "Rose 写了什么？",
        "options": [
          "A. 一张便条 note",
          "B. 一封信 letter",
          "C. 一首诗 poem"
        ],
        "answer": 0,
        "explain": "原文 \"Rose writes a note.\""
      },
      {
        "q": "下面哪个词有静音 e？",
        "options": [
          "A. hop",
          "B. note",
          "C. not"
        ],
        "answer": 1,
        "explain": "note 词尾 e 让 o 发长音 /əʊ/。"
      }
    ]
  },
  {
    "id": "RD-31",
    "title": "The Cube Mule",
    "focus": "静音 e (u_e)",
    "level": "二年级上",
    "stars": 4,
    "tags": [
      "动物",
      "静音e",
      "形状"
    ],
    "date": "2026-02-20",
    "text": "A mule sees a cube. The cube is huge. The mule is cute. The mule uses the cube. The cube is a rude joke? No, it is a flute!",
    "focusWords": [
      "mule",
      "sees",
      "cube",
      "huge",
      "cute",
      "uses",
      "rude",
      "flute",
      "no"
    ],
    "vocab": [
      {
        "w": "mule",
        "m": "骡子"
      },
      {
        "w": "cube",
        "m": "立方体"
      },
      {
        "w": "flute",
        "m": "长笛"
      }
    ],
    "questions": [
      {
        "q": "骡子看到了什么？",
        "options": [
          "A. 一个立方体 cube",
          "B. 一个球 ball",
          "C. 一本书 book"
        ],
        "answer": 0,
        "explain": "原文 \"A mule sees a cube.\""
      },
      {
        "q": "立方体是怎样的？",
        "options": [
          "A. 巨大的 huge",
          "B. 小小的 small",
          "C. 红色的 red"
        ],
        "answer": 0,
        "explain": "原文 \"The cube is huge.\""
      },
      {
        "q": "下面哪个词有静音 e？",
        "options": [
          "A. cub",
          "B. cube",
          "C. cut"
        ],
        "answer": 1,
        "explain": "cube 词尾 e 让 u 发长音 /juː/。"
      }
    ]
  },
  {
    "id": "RD-32",
    "title": "The Fish and the Ship",
    "focus": "sh 的发音 /ʃ/",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "动物",
      "sh",
      "海洋"
    ],
    "date": "2026-02-27",
    "text": "A fish sees a ship. The ship is shiny. The fish shakes its tail. The ship shuts its door. They share a dish. What a wish!",
    "focusWords": [
      "fish",
      "ship",
      "shiny",
      "shakes",
      "shuts",
      "share",
      "dish",
      "wish"
    ],
    "vocab": [
      {
        "w": "fish",
        "m": "鱼"
      },
      {
        "w": "shiny",
        "m": "闪亮的"
      },
      {
        "w": "dish",
        "m": "盘子/菜"
      }
    ],
    "questions": [
      {
        "q": "鱼和船分享了什么？",
        "options": [
          "A. 一盘菜 dish",
          "B. 一个球 ball",
          "C. 一本书 book"
        ],
        "answer": 0,
        "explain": "原文 \"They share a dish.\""
      },
      {
        "q": "船是怎样的？",
        "options": [
          "A. 闪亮的 shiny",
          "B. 破旧的 old",
          "C. 红色的 red"
        ],
        "answer": 0,
        "explain": "原文 \"The ship is shiny.\""
      },
      {
        "q": "下面哪个词有 sh 音？",
        "options": [
          "A. sit",
          "B. ship",
          "C. sip"
        ],
        "answer": 1,
        "explain": "ship 中的 sh 发 /ʃ/。"
      }
    ]
  },
  {
    "id": "RD-33",
    "title": "The Shy Sheep",
    "focus": "sh 的发音 /ʃ/",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "动物",
      "sh",
      "自然"
    ],
    "date": "2026-03-06",
    "text": "A shy sheep sits in the shade. The sheep shapes a shell. The shell is shiny and fresh. The sheep shows the shell. We shout: how fresh!",
    "focusWords": [
      "shy",
      "sheep",
      "shade",
      "shapes",
      "shell",
      "shiny",
      "fresh",
      "shows",
      "shout"
    ],
    "vocab": [
      {
        "w": "shy",
        "m": "害羞的"
      },
      {
        "w": "shade",
        "m": "树荫"
      },
      {
        "w": "shell",
        "m": "贝壳"
      }
    ],
    "questions": [
      {
        "q": "害羞的羊坐在哪里？",
        "options": [
          "A. 树荫下 shade",
          "B. 太阳下 sun",
          "C. 水里 water"
        ],
        "answer": 0,
        "explain": "原文 \"A shy sheep sits in the shade.\""
      },
      {
        "q": "羊做了什么？",
        "options": [
          "A. 塑了一个贝壳 shell",
          "B. 唱了一首歌",
          "C. 跳了一支舞"
        ],
        "answer": 0,
        "explain": "原文 \"The sheep shapes a shell.\""
      },
      {
        "q": "下面哪个词有 sh 音？",
        "options": [
          "A. say",
          "B. shell",
          "C. see"
        ],
        "answer": 1,
        "explain": "shell 中的 sh 发 /ʃ/。"
      }
    ]
  },
  {
    "id": "RD-34",
    "title": "The Sugar Shake",
    "focus": "sh 的发音 /ʃ/",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "食物",
      "sh",
      "生活"
    ],
    "date": "2026-03-13",
    "text": "Dad shakes the sugar. The sugar is white. The dish has a shadow. The shadow is short. We wash the dish. The fish is fresh!",
    "focusWords": [
      "shakes",
      "sugar",
      "white",
      "dish",
      "shadow",
      "short",
      "wash",
      "fish",
      "fresh"
    ],
    "vocab": [
      {
        "w": "sugar",
        "m": "糖"
      },
      {
        "w": "shadow",
        "m": "影子"
      },
      {
        "w": "short",
        "m": "短的"
      }
    ],
    "questions": [
      {
        "q": "爸爸在摇什么？",
        "options": [
          "A. 糖 sugar",
          "B. 盐 salt",
          "C. 面粉 flour"
        ],
        "answer": 0,
        "explain": "原文 \"Dad shakes the sugar.\""
      },
      {
        "q": "影子是怎样的？",
        "options": [
          "A. 短的 short",
          "B. 长的 long",
          "C. 高的 tall"
        ],
        "answer": 0,
        "explain": "原文 \"The shadow is short.\""
      },
      {
        "q": "下面哪个词有 sh 音？",
        "options": [
          "A. sit",
          "B. shadow",
          "C. see"
        ],
        "answer": 1,
        "explain": "shadow 中的 sh 发 /ʃ/。"
      }
    ]
  },
  {
    "id": "RD-35",
    "title": "The Beach Lunch",
    "focus": "ch 的发音 /tʃ/",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "食物",
      "ch",
      "海滩"
    ],
    "date": "2026-03-20",
    "text": "A child chews lunch. The lunch is rich. The child chats with a chick. The chick chases a cheese. What a catch!",
    "focusWords": [
      "child",
      "chews",
      "lunch",
      "rich",
      "chats",
      "chick",
      "chases",
      "cheese",
      "catch"
    ],
    "vocab": [
      {
        "w": "chews",
        "m": "咀嚼"
      },
      {
        "w": "rich",
        "m": "丰富的"
      },
      {
        "w": "chases",
        "m": "追逐"
      }
    ],
    "questions": [
      {
        "q": "孩子在做什么？",
        "options": [
          "A. 咀嚼午餐 chews lunch",
          "B. 睡觉",
          "C. 跑步"
        ],
        "answer": 0,
        "explain": "原文 \"A child chews lunch.\""
      },
      {
        "q": "小鸡在追什么？",
        "options": [
          "A. 奶酪 cheese",
          "B. 球 ball",
          "C. 书 book"
        ],
        "answer": 0,
        "explain": "原文 \"The chick chases a cheese.\""
      },
      {
        "q": "下面哪个词有 ch 音？",
        "options": [
          "A. cat",
          "B. chick",
          "C. kit"
        ],
        "answer": 1,
        "explain": "chick 中的 ch 发 /tʃ/。"
      }
    ]
  },
  {
    "id": "RD-36",
    "title": "The Teacher's Watch",
    "focus": "ch 的发音 /tʃ/",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "校园",
      "ch",
      "生活"
    ],
    "date": "2026-03-27",
    "text": "The teacher checks the watch. The watch is cheap. The children chat and cheer. The teacher chops a peach. We reach the bench!",
    "focusWords": [
      "teacher",
      "checks",
      "watch",
      "cheap",
      "children",
      "chat",
      "cheer",
      "chops",
      "peach",
      "reach",
      "bench"
    ],
    "vocab": [
      {
        "w": "teacher",
        "m": "老师"
      },
      {
        "w": "cheap",
        "m": "便宜的"
      },
      {
        "w": "peach",
        "m": "桃子"
      }
    ],
    "questions": [
      {
        "q": "老师在检查什么？",
        "options": [
          "A. 手表 watch",
          "B. 书 book",
          "C. 球 ball"
        ],
        "answer": 0,
        "explain": "原文 \"The teacher checks the watch.\""
      },
      {
        "q": "老师切了什么？",
        "options": [
          "A. 一个桃子 peach",
          "B. 一个苹果 apple",
          "C. 一个梨 pear"
        ],
        "answer": 0,
        "explain": "原文 \"The teacher chops a peach.\""
      },
      {
        "q": "下面哪个词有 ch 音？",
        "options": [
          "A. catch",
          "B. kit",
          "C. cat"
        ],
        "answer": 1,
        "explain": "catch 中的 ch 发 /tʃ/。"
      }
    ]
  },
  {
    "id": "RD-37",
    "title": "The Chicken Chase",
    "focus": "ch 的发音 /tʃ/",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "食物",
      "ch",
      "厨房"
    ],
    "date": "2026-04-03",
    "text": "A chicken chunks cheese. The cheese is rich. The chef checks the chart. The chart shows a chain. The chicken cheers the chief!",
    "focusWords": [
      "chicken",
      "chunks",
      "cheese",
      "rich",
      "chef",
      "checks",
      "chart",
      "shows",
      "chain",
      "cheers",
      "chief"
    ],
    "vocab": [
      {
        "w": "chicken",
        "m": "鸡肉/小鸡"
      },
      {
        "w": "chef",
        "m": "厨师"
      },
      {
        "w": "chain",
        "m": "链子"
      }
    ],
    "questions": [
      {
        "q": "厨师在检查什么？",
        "options": [
          "A. 一张图表 chart",
          "B. 一本书 book",
          "C. 一个球 ball"
        ],
        "answer": 0,
        "explain": "原文 \"The chef checks the chart.\""
      },
      {
        "q": "图表展示了什么？",
        "options": [
          "A. 一条链子 chain",
          "B. 一棵树 tree",
          "C. 一条河 river"
        ],
        "answer": 0,
        "explain": "原文 \"The chart shows a chain.\""
      },
      {
        "q": "下面哪个词有 ch 音？",
        "options": [
          "A. kitchen",
          "B. chin",
          "C. cat"
        ],
        "answer": 1,
        "explain": "chin 中的 ch 发 /tʃ/（kitchen 也含 ch）。"
      }
    ]
  },
  {
    "id": "RD-38",
    "title": "The Three Thumbs",
    "focus": "th 的发音 /θ/",
    "level": "一年级上",
    "stars": 4,
    "tags": [
      "数字",
      "th",
      "身体"
    ],
    "date": "2026-04-10",
    "text": "Three thin thumbs. The thumb is on the thumb. Beth thinks the thumb is thick. The thumb thanks Beth. They throw a bath!",
    "focusWords": [
      "three",
      "thin",
      "thumb",
      "Beth",
      "thinks",
      "thick",
      "thanks",
      "throw",
      "bath"
    ],
    "vocab": [
      {
        "w": "thumb",
        "m": "拇指"
      },
      {
        "w": "thick",
        "m": "厚的"
      },
      {
        "w": "throw",
        "m": "扔"
      }
    ],
    "questions": [
      {
        "q": "有几个拇指？",
        "options": [
          "A. 三个 three",
          "B. 两个 two",
          "C. 五个 five"
        ],
        "answer": 0,
        "explain": "原文 \"Three thin thumbs.\""
      },
      {
        "q": "拇指是怎样的？",
        "options": [
          "A. 厚的 thick",
          "B. 薄的 thin",
          "C. 长的 long"
        ],
        "answer": 0,
        "explain": "原文 \"Beth thinks the thumb is thick.\""
      },
      {
        "q": "下面哪个词有 th 音？",
        "options": [
          "A. this",
          "B. thumb",
          "C. tip"
        ],
        "answer": 1,
        "explain": "thumb 中的 th 发 /θ/。"
      }
    ]
  },
  {
    "id": "RD-39",
    "title": "The Weather Brother",
    "focus": "th 的发音 /ð/",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "天气",
      "th",
      "自然"
    ],
    "date": "2026-04-17",
    "text": "Brother sees the weather. The weather is warm. Heather breathes the air. They gather feathers. The feather is smooth and then they bathe.",
    "focusWords": [
      "brother",
      "weather",
      "warm",
      "Heather",
      "breathes",
      "gather",
      "feathers",
      "smooth",
      "then",
      "bathe"
    ],
    "vocab": [
      {
        "w": "weather",
        "m": "天气"
      },
      {
        "w": "gather",
        "m": "收集"
      },
      {
        "w": "smooth",
        "m": "光滑的"
      }
    ],
    "questions": [
      {
        "q": "天气怎样？",
        "options": [
          "A. 温暖 warm",
          "B. 寒冷 cold",
          "C. 炎热 hot"
        ],
        "answer": 0,
        "explain": "原文 \"The weather is warm.\""
      },
      {
        "q": "他们收集了什么？",
        "options": [
          "A. 羽毛 feathers",
          "B. 石头 stones",
          "C. 叶子 leaves"
        ],
        "answer": 0,
        "explain": "原文 \"They gather feathers.\""
      },
      {
        "q": "下面哪个词有 th 音？",
        "options": [
          "A. that",
          "B. feather",
          "C. fat"
        ],
        "answer": 1,
        "explain": "feather 中的 th 发 /ð/。"
      }
    ]
  },
  {
    "id": "RD-40",
    "title": "The Bath Math",
    "focus": "th 的发音 /θ/",
    "level": "二年级上",
    "stars": 4,
    "tags": [
      "校园",
      "th",
      "洗澡"
    ],
    "date": "2026-04-24",
    "text": "Math class with a bath. The path has a math. The brothers breathe and think. They throw three balls. The bath is smooth then they laugh!",
    "focusWords": [
      "math",
      "bath",
      "path",
      "brothers",
      "breathe",
      "think",
      "throw",
      "three",
      "smooth",
      "then",
      "laugh"
    ],
    "vocab": [
      {
        "w": "bath",
        "m": "洗澡"
      },
      {
        "w": "brothers",
        "m": "兄弟们"
      },
      {
        "w": "smooth",
        "m": "光滑的"
      }
    ],
    "questions": [
      {
        "q": "兄弟们扔了几个球？",
        "options": [
          "A. 三个 three",
          "B. 两个 two",
          "C. 一个 one"
        ],
        "answer": 0,
        "explain": "原文 \"They throw three balls.\""
      },
      {
        "q": "浴缸是怎样的？",
        "options": [
          "A. 光滑的 smooth",
          "B. 粗糙的 rough",
          "C. 红色的 red"
        ],
        "answer": 0,
        "explain": "原文 \"The bath is smooth.\""
      },
      {
        "q": "下面哪个词有 th 音？",
        "options": [
          "A. think",
          "B. tip",
          "C. tap"
        ],
        "answer": 1,
        "explain": "think 中的 th 发 /θ/。"
      }
    ]
  },
  {
    "id": "RD-41",
    "title": "The King's Song",
    "focus": "ng 的发音 /ŋ/",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "音乐",
      "ng",
      "想象"
    ],
    "date": "2026-05-01",
    "text": "The king sings a song. The song is long. A ring goes ding. The spring brings a swing. The thing goes ping!",
    "focusWords": [
      "king",
      "sings",
      "song",
      "long",
      "ring",
      "ding",
      "spring",
      "brings",
      "swing",
      "thing",
      "ping"
    ],
    "vocab": [
      {
        "w": "king",
        "m": "国王"
      },
      {
        "w": "ring",
        "m": "戒指/铃声"
      },
      {
        "w": "swing",
        "m": "秋千"
      }
    ],
    "questions": [
      {
        "q": "国王唱了什么？",
        "options": [
          "A. 一首歌 song",
          "B. 一首诗 poem",
          "C. 一个故事 story"
        ],
        "answer": 0,
        "explain": "原文 \"The king sings a song.\""
      },
      {
        "q": "什么带来了秋千？",
        "options": [
          "A. 春天 spring",
          "B. 夏天 summer",
          "C. 风 wind"
        ],
        "answer": 0,
        "explain": "原文 \"The spring brings a swing.\""
      },
      {
        "q": "下面哪个词有 ng 音？",
        "options": [
          "A. sing",
          "B. sin",
          "C. sip"
        ],
        "answer": 1,
        "explain": "sing 中的 ng 发 /ŋ/。"
      }
    ]
  },
  {
    "id": "RD-42",
    "title": "The Pink Ink",
    "focus": "nk 的发音 /ŋk/",
    "level": "二年级上",
    "stars": 4,
    "tags": [
      "颜色",
      "nk",
      "想象"
    ],
    "date": "2026-05-08",
    "text": "A pink ink on the sink. The sink is in the bank. The bank has a trunk. The trunk is think? No, the trunk is a link to a drink. The drink is pink!",
    "focusWords": [
      "pink",
      "ink",
      "sink",
      "bank",
      "trunk",
      "think",
      "link",
      "drink"
    ],
    "vocab": [
      {
        "w": "ink",
        "m": "墨水"
      },
      {
        "w": "sink",
        "m": "水槽"
      },
      {
        "w": "trunk",
        "m": "树干/象鼻"
      }
    ],
    "questions": [
      {
        "q": "墨水在哪里？",
        "options": [
          "A. 水槽上 sink",
          "B. 桌上 table",
          "C. 地上 floor"
        ],
        "answer": 0,
        "explain": "原文 \"A pink ink on the sink.\""
      },
      {
        "q": "饮料是什么颜色？",
        "options": [
          "A. 粉色 pink",
          "B. 白色 white",
          "C. 蓝色 blue"
        ],
        "answer": 0,
        "explain": "原文 \"The drink is pink!\""
      },
      {
        "q": "下面哪个词有 nk 音？",
        "options": [
          "A. sink",
          "B. sin",
          "C. sip"
        ],
        "answer": 1,
        "explain": "sink 中的 nk 发 /ŋk/。"
      }
    ]
  },
  {
    "id": "RD-43",
    "title": "The Blue Block",
    "focus": "辅音连缀 bl-",
    "level": "一年级下",
    "stars": 4,
    "tags": [
      "色彩",
      "辅音连缀",
      "玩具"
    ],
    "date": "2026-05-15",
    "text": "A blue block on the black blanket. The block blinks. A blonde boy blows a blue bubble. The bubble blends with the black block. What a blast!",
    "focusWords": [
      "blue",
      "block",
      "black",
      "blanket",
      "blinks",
      "blonde",
      "blows",
      "bubble",
      "blends",
      "blast"
    ],
    "vocab": [
      {
        "w": "blanket",
        "m": "毯子"
      },
      {
        "w": "blinks",
        "m": "闪烁"
      },
      {
        "w": "blast",
        "m": "一阵/爆炸"
      }
    ],
    "questions": [
      {
        "q": "蓝色积木在哪里？",
        "options": [
          "A. 黑毯子上 black blanket",
          "B. 桌上 table",
          "C. 地上 floor"
        ],
        "answer": 0,
        "explain": "原文 \"A blue block on the black blanket.\""
      },
      {
        "q": "金发男孩吹了什么？",
        "options": [
          "A. 蓝色泡泡 blue bubble",
          "B. 一个球 ball",
          "C. 一个气球 balloon"
        ],
        "answer": 0,
        "explain": "原文 \"A blonde boy blows a blue bubble.\""
      },
      {
        "q": "下面哪个词有 bl 连缀？",
        "options": [
          "A. blue",
          "B. bus",
          "C. bin"
        ],
        "answer": 1,
        "explain": "blue 中的 bl- 是辅音连缀。"
      }
    ]
  },
  {
    "id": "RD-44",
    "title": "The Star Street",
    "focus": "辅音连缀 st-",
    "level": "二年级上",
    "stars": 4,
    "tags": [
      "自然",
      "辅音连缀",
      "城市"
    ],
    "date": "2026-05-22",
    "text": "A star on the street. The street is still. A stick stands still. The story starts with a stone. The storm stops. We smile at the star!",
    "focusWords": [
      "star",
      "street",
      "still",
      "stick",
      "stands",
      "story",
      "starts",
      "stone",
      "storm",
      "stops",
      "smile"
    ],
    "vocab": [
      {
        "w": "street",
        "m": "街道"
      },
      {
        "w": "stone",
        "m": "石头"
      },
      {
        "w": "storm",
        "m": "暴风雨"
      }
    ],
    "questions": [
      {
        "q": "星星在哪里？",
        "options": [
          "A. 街道上 street",
          "B. 树上 tree",
          "C. 水里 water"
        ],
        "answer": 0,
        "explain": "原文 \"A star on the street.\""
      },
      {
        "q": "故事从哪里开始？",
        "options": [
          "A. 一块石头 stone",
          "B. 一本书 book",
          "C. 一个球 ball"
        ],
        "answer": 0,
        "explain": "原文 \"The story starts with a stone.\""
      },
      {
        "q": "下面哪个词有 st 连缀？",
        "options": [
          "A. star",
          "B. sit",
          "C. sip"
        ],
        "answer": 1,
        "explain": "star 中的 st- 是辅音连缀。"
      }
    ]
  },
  {
    "id": "RD-45",
    "title": "The Tree Trip",
    "focus": "辅音连缀 tr-/br-",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "自然",
      "辅音连缀",
      "交通"
    ],
    "date": "2026-05-29",
    "text": "A brown truck on the trail. The truck brings a branch. The branch is green. A brave boy travels the trail. The trip is a treat!",
    "focusWords": [
      "brown",
      "truck",
      "trail",
      "brings",
      "branch",
      "green",
      "brave",
      "travels",
      "trip",
      "treat"
    ],
    "vocab": [
      {
        "w": "trail",
        "m": "小径"
      },
      {
        "w": "branch",
        "m": "树枝"
      },
      {
        "w": "treat",
        "m": "款待"
      }
    ],
    "questions": [
      {
        "q": "棕色卡车在小径上带了什么？",
        "options": [
          "A. 一根树枝 branch",
          "B. 一个球 ball",
          "C. 一本书 book"
        ],
        "answer": 0,
        "explain": "原文 \"The truck brings a branch.\""
      },
      {
        "q": "这趟旅行是怎样的？",
        "options": [
          "A. 一种款待 treat",
          "B. 一场噩梦",
          "C. 一次考试"
        ],
        "answer": 0,
        "explain": "原文 \"The trip is a treat!\""
      },
      {
        "q": "下面哪个词有 tr 连缀？",
        "options": [
          "A. trip",
          "B. tip",
          "C. tap"
        ],
        "answer": 1,
        "explain": "trip 中的 tr- 是辅音连缀。"
      }
    ]
  },
  {
    "id": "RD-46",
    "title": "The Smart Farmer",
    "focus": "ar 的发音 /ɑː/",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "农场",
      "ar",
      "自然"
    ],
    "date": "2026-06-05",
    "text": "A smart farmer on the farm. The farm has a barn. The barn is far. The farmer starts a party. The star is sharp in the dark. We are charmed!",
    "focusWords": [
      "smart",
      "farmer",
      "farm",
      "barn",
      "far",
      "starts",
      "party",
      "star",
      "sharp",
      "dark",
      "charmed"
    ],
    "vocab": [
      {
        "w": "farmer",
        "m": "农民"
      },
      {
        "w": "barn",
        "m": "谷仓"
      },
      {
        "w": "charmed",
        "m": "被迷住"
      }
    ],
    "questions": [
      {
        "q": "谷仓在哪里？",
        "options": [
          "A. 很远 far",
          "B. 很近 near",
          "C. 在树上"
        ],
        "answer": 0,
        "explain": "原文 \"The barn is far.\""
      },
      {
        "q": "星星在黑暗中怎样？",
        "options": [
          "A. 明亮 sharp",
          "B. 暗淡 dim",
          "C. 红色 red"
        ],
        "answer": 0,
        "explain": "原文 \"The star is sharp in the dark.\""
      },
      {
        "q": "下面哪个词有 ar 音？",
        "options": [
          "A. car",
          "B. cat",
          "C. cup"
        ],
        "answer": 1,
        "explain": "car 中的 ar 发 /ɑː/。"
      }
    ]
  },
  {
    "id": "RD-47",
    "title": "The Red Car Park",
    "focus": "ar 的发音 /ɑː/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "交通",
      "ar",
      "城市"
    ],
    "date": "2026-06-12",
    "text": "A red car in the park. The park is large. A card starts a chart. The star is on the carpet. The guard is smart. We march to the market!",
    "focusWords": [
      "red",
      "car",
      "park",
      "large",
      "card",
      "starts",
      "chart",
      "star",
      "carpet",
      "guard",
      "smart",
      "march",
      "market"
    ],
    "vocab": [
      {
        "w": "carpet",
        "m": "地毯"
      },
      {
        "w": "guard",
        "m": "守卫"
      },
      {
        "w": "march",
        "m": "行进"
      }
    ],
    "questions": [
      {
        "q": "红色汽车在哪里？",
        "options": [
          "A. 公园里 park",
          "B. 商店 shop",
          "C. 学校 school"
        ],
        "answer": 0,
        "explain": "原文 \"A red car in the park.\""
      },
      {
        "q": "谁很聪明？",
        "options": [
          "A. 守卫 guard",
          "B. 猫 cat",
          "C. 狗 dog"
        ],
        "answer": 0,
        "explain": "原文 \"The guard is smart.\""
      },
      {
        "q": "下面哪个词有 ar 音？",
        "options": [
          "A. car",
          "B. cup",
          "C. cut"
        ],
        "answer": 1,
        "explain": "car 中的 ar 发 /ɑː/。"
      }
    ]
  },
  {
    "id": "RD-48",
    "title": "The Storm Horn",
    "focus": "or 的发音 /ɔː/",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "自然",
      "or",
      "天气"
    ],
    "date": "2026-06-19",
    "text": "A horn in the storm. The storm is born. The corn is for the horse. The horse snores on the shore. The north wind roars. We are bored no more!",
    "focusWords": [
      "horn",
      "storm",
      "born",
      "corn",
      "horse",
      "snores",
      "shore",
      "north",
      "roars",
      "bored",
      "more"
    ],
    "vocab": [
      {
        "w": "horn",
        "m": "号角"
      },
      {
        "w": "shore",
        "m": "岸"
      },
      {
        "w": "roars",
        "m": "咆哮"
      }
    ],
    "questions": [
      {
        "q": "号角在哪里？",
        "options": [
          "A. 暴风雨里 storm",
          "B. 太阳下 sun",
          "C. 水里 water"
        ],
        "answer": 0,
        "explain": "原文 \"A horn in the storm.\""
      },
      {
        "q": "玉米给谁？",
        "options": [
          "A. 马 horse",
          "B. 牛 cow",
          "C. 羊 sheep"
        ],
        "answer": 0,
        "explain": "原文 \"The corn is for the horse.\""
      },
      {
        "q": "下面哪个词有 or 音？",
        "options": [
          "A. horse",
          "B. house",
          "C. hot"
        ],
        "answer": 1,
        "explain": "horse 中的 or 发 /ɔː/。"
      }
    ]
  },
  {
    "id": "RD-49",
    "title": "The Morning Fork",
    "focus": "or 的发音 /ɔː/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "生活",
      "or",
      "食物"
    ],
    "date": "2026-06-26",
    "text": "A fork in the morning. The morning is warm. A horn on the corner. The corner store sells corn. The horse is torn? No, the horse is born. We adorn the shore!",
    "focusWords": [
      "fork",
      "morning",
      "warm",
      "horn",
      "corner",
      "store",
      "sells",
      "corn",
      "horse",
      "torn",
      "born",
      "adorn",
      "shore"
    ],
    "vocab": [
      {
        "w": "fork",
        "m": "叉子"
      },
      {
        "w": "corner",
        "m": "角落"
      },
      {
        "w": "adorn",
        "m": "装饰"
      }
    ],
    "questions": [
      {
        "q": "角落的商店卖什么？",
        "options": [
          "A. 玉米 corn",
          "B. 苹果 apple",
          "C. 书 book"
        ],
        "answer": 0,
        "explain": "原文 \"The corner store sells corn.\""
      },
      {
        "q": "早晨怎样？",
        "options": [
          "A. 温暖 warm",
          "B. 寒冷 cold",
          "C. 炎热 hot"
        ],
        "answer": 0,
        "explain": "原文 \"The morning is warm.\""
      },
      {
        "q": "下面哪个词有 or 音？",
        "options": [
          "A. fork",
          "B. far",
          "C. fit"
        ],
        "answer": 1,
        "explain": "fork 中的 or 发 /ɔː/。"
      }
    ]
  },
  {
    "id": "RD-50",
    "title": "The Tiger's Dinner",
    "focus": "er 的发音 /ɜː/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "动物",
      "er",
      "食物"
    ],
    "date": "2026-07-03",
    "text": "A tiger at dinner. The dinner is better. The tiger is clever. The river has a feather. The weather is never cold. The tiger is a winner!",
    "focusWords": [
      "tiger",
      "dinner",
      "better",
      "clever",
      "river",
      "feather",
      "weather",
      "never",
      "winner"
    ],
    "vocab": [
      {
        "w": "dinner",
        "m": "晚餐"
      },
      {
        "w": "clever",
        "m": "聪明的"
      },
      {
        "w": "winner",
        "m": "赢家"
      }
    ],
    "questions": [
      {
        "q": "老虎的晚餐怎样？",
        "options": [
          "A. 更好 better",
          "B. 更差 worse",
          "C. 一样 same"
        ],
        "answer": 0,
        "explain": "原文 \"The dinner is better.\""
      },
      {
        "q": "老虎是怎样的？",
        "options": [
          "A. 聪明 clever",
          "B. 懒惰 lazy",
          "C. 矮小 short"
        ],
        "answer": 0,
        "explain": "原文 \"The tiger is clever.\""
      },
      {
        "q": "下面哪个词有 er 音？",
        "options": [
          "A. tiger",
          "B. tip",
          "C. tap"
        ],
        "answer": 1,
        "explain": "tiger 中的 er 发 /ɜː/。"
      }
    ]
  },
  {
    "id": "RD-51",
    "title": "The Bird's Shirt",
    "focus": "ir 的发音 /ɜː/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "动物",
      "ir",
      "衣服"
    ],
    "date": "2026-07-10",
    "text": "A bird in a shirt. The shirt is dirty. The bird twirls and whirls. The girl hears a chirp. The sir gives a pearl. The bird is a star!",
    "focusWords": [
      "bird",
      "shirt",
      "dirty",
      "twirls",
      "whirls",
      "girl",
      "hears",
      "chirp",
      "sir",
      "pearl",
      "star"
    ],
    "vocab": [
      {
        "w": "shirt",
        "m": "衬衫"
      },
      {
        "w": "twirls",
        "m": "旋转"
      },
      {
        "w": "pearl",
        "m": "珍珠"
      }
    ],
    "questions": [
      {
        "q": "鸟穿着什么？",
        "options": [
          "A. 一件衬衫 shirt",
          "B. 一顶帽子 hat",
          "C. 一双鞋 shoe"
        ],
        "answer": 0,
        "explain": "原文 \"A bird in a shirt.\""
      },
      {
        "q": "女孩听到了什么？",
        "options": [
          "A. 一声啁啾 chirp",
          "B. 一声吼 roar",
          "C. 一声笑 laugh"
        ],
        "answer": 0,
        "explain": "原文 \"The girl hears a chirp.\""
      },
      {
        "q": "下面哪个词有 ir 音？",
        "options": [
          "A. bird",
          "B. bat",
          "C. bit"
        ],
        "answer": 1,
        "explain": "bird 中的 ir 发 /ɜː/。"
      }
    ]
  },
  {
    "id": "RD-52",
    "title": "The Nurse's Purse",
    "focus": "ur 的发音 /ɜː/",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "职业",
      "ur",
      "医院"
    ],
    "date": "2026-07-17",
    "text": "A nurse with a purse. The purse is furry. The nurse is in a hurry. The turtle is purple. The curtain is burnt. The nurse cures the hurt turtle!",
    "focusWords": [
      "nurse",
      "purse",
      "furry",
      "hurry",
      "turtle",
      "purple",
      "curtain",
      "burnt",
      "cures",
      "hurt"
    ],
    "vocab": [
      {
        "w": "nurse",
        "m": "护士"
      },
      {
        "w": "purse",
        "m": "钱包"
      },
      {
        "w": "hurt",
        "m": "受伤的"
      }
    ],
    "questions": [
      {
        "q": "护士的钱包怎样？",
        "options": [
          "A. 毛茸茸 furry",
          "B. 破旧 old",
          "C. 红色 red"
        ],
        "answer": 0,
        "explain": "原文 \"The purse is furry.\""
      },
      {
        "q": "护士治好了谁？",
        "options": [
          "A. 受伤的乌龟 hurt turtle",
          "B. 一只猫 cat",
          "C. 一条狗 dog"
        ],
        "answer": 0,
        "explain": "原文 \"The nurse cures the hurt turtle!\""
      },
      {
        "q": "下面哪个词有 ur 音？",
        "options": [
          "A. nurse",
          "B. nut",
          "C. net"
        ],
        "answer": 1,
        "explain": "nurse 中的 ur 发 /ɜː/。"
      }
    ]
  },
  {
    "id": "RD-53",
    "title": "The Bee Tree",
    "focus": "ee 的发音 /iː/",
    "level": "二年级上",
    "stars": 5,
    "tags": [
      "动物",
      "ee",
      "自然"
    ],
    "date": "2026-07-24",
    "text": "A bee on a tree. The tree is green. The bee sees a sweet leaf. The bee feels free. The queen bee agrees. We eat cheese and cream!",
    "focusWords": [
      "bee",
      "tree",
      "green",
      "sees",
      "sweet",
      "leaf",
      "feels",
      "free",
      "queen",
      "agrees",
      "cheese",
      "cream"
    ],
    "vocab": [
      {
        "w": "bee",
        "m": "蜜蜂"
      },
      {
        "w": "queen",
        "m": "女王"
      },
      {
        "w": "cream",
        "m": "奶油"
      }
    ],
    "questions": [
      {
        "q": "蜜蜂在哪一棵树上？",
        "options": [
          "A. 绿色的树 green tree",
          "B. 红色的树 red tree",
          "C. 蓝色的树 blue tree"
        ],
        "answer": 0,
        "explain": "原文 \"The tree is green.\""
      },
      {
        "q": "女王蜂怎样？",
        "options": [
          "A. 同意 agrees",
          "B. 拒绝 refuses",
          "C. 睡觉 sleeps"
        ],
        "answer": 0,
        "explain": "原文 \"The queen bee agrees.\""
      },
      {
        "q": "下面哪个词有 ee 音？",
        "options": [
          "A. bee",
          "B. bet",
          "C. bit"
        ],
        "answer": 1,
        "explain": "bee 中的 ee 发 /iː/。"
      }
    ]
  },
  {
    "id": "RD-54",
    "title": "The Sea Read",
    "focus": "ea 的发音 /iː/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "动物",
      "ea",
      "海洋"
    ],
    "date": "2026-07-31",
    "text": "A seal reads a book by the sea. The book is cheap. The seal eats a peach. The peach is sweet. The seal dreams of a leaf. We speak of the sea!",
    "focusWords": [
      "seal",
      "reads",
      "book",
      "sea",
      "cheap",
      "eats",
      "peach",
      "sweet",
      "dreams",
      "leaf",
      "speak"
    ],
    "vocab": [
      {
        "w": "seal",
        "m": "海豹"
      },
      {
        "w": "dreams",
        "m": "做梦"
      },
      {
        "w": "speak",
        "m": "说话"
      }
    ],
    "questions": [
      {
        "q": "海豹在哪里读书？",
        "options": [
          "A. 海边 by the sea",
          "B. 树下 under tree",
          "C. 屋里 in house"
        ],
        "answer": 0,
        "explain": "原文 \"A seal reads a book by the sea.\""
      },
      {
        "q": "海豹吃了什么？",
        "options": [
          "A. 一个桃子 peach",
          "B. 一个苹果 apple",
          "C. 一根香蕉 banana"
        ],
        "answer": 0,
        "explain": "原文 \"The seal eats a peach.\""
      },
      {
        "q": "下面哪个词有 ea 音？",
        "options": [
          "A. seal",
          "B. sit",
          "C. set"
        ],
        "answer": 1,
        "explain": "seal 中的 ea 发 /iː/。"
      }
    ]
  },
  {
    "id": "RD-55",
    "title": "The Clean Dream",
    "focus": "ee / ea 的发音 /iː/",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "团队",
      "ee",
      "环保"
    ],
    "date": "2026-08-07",
    "text": "A team has a dream. The dream is to clean the street. The stream is clean and green. The eagle flies and screams. We reach the peak. The dream is a treat!",
    "focusWords": [
      "team",
      "dream",
      "clean",
      "street",
      "stream",
      "green",
      "eagle",
      "flies",
      "screams",
      "reach",
      "peak",
      "treat"
    ],
    "vocab": [
      {
        "w": "team",
        "m": "团队"
      },
      {
        "w": "stream",
        "m": "小溪"
      },
      {
        "w": "peak",
        "m": "顶峰"
      }
    ],
    "questions": [
      {
        "q": "团队的梦想是什么？",
        "options": [
          "A. 清洁街道 clean the street",
          "B. 建一座桥",
          "C. 种一棵树"
        ],
        "answer": 0,
        "explain": "原文 \"The dream is to clean the street.\""
      },
      {
        "q": "小溪怎样？",
        "options": [
          "A. 干净又绿 clean and green",
          "B. 又脏又黑",
          "C. 又长又宽"
        ],
        "answer": 0,
        "explain": "原文 \"The stream is clean and green.\""
      },
      {
        "q": "下面哪个词有 ee/ea 音？",
        "options": [
          "A. team",
          "B. tip",
          "C. tap"
        ],
        "answer": 1,
        "explain": "team 中的 ea 发 /iː/。"
      }
    ]
  },
  {
    "id": "RD-56",
    "title": "The Rain Mail",
    "focus": "ai 的发音 /eɪ/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "天气",
      "ai",
      "交通"
    ],
    "date": "2026-08-14",
    "text": "The rain is plain. A snail sends mail. The mail is in a pail. The pail is on a train. The train waits in the rain. We pray it is safe!",
    "focusWords": [
      "rain",
      "plain",
      "snail",
      "mail",
      "pail",
      "train",
      "waits",
      "pray",
      "safe"
    ],
    "vocab": [
      {
        "w": "snail",
        "m": "蜗牛"
      },
      {
        "w": "pail",
        "m": "桶"
      },
      {
        "w": "train",
        "m": "火车"
      }
    ],
    "questions": [
      {
        "q": "信放在哪里？",
        "options": [
          "A. 一个桶里 pail",
          "B. 一个盒子里 box",
          "C. 一个袋子里 bag"
        ],
        "answer": 0,
        "explain": "原文 \"The mail is in a pail.\""
      },
      {
        "q": "火车在做什么？",
        "options": [
          "A. 在雨中等待 waits in the rain",
          "B. 在飞",
          "C. 在唱歌"
        ],
        "answer": 0,
        "explain": "原文 \"The train waits in the rain.\""
      },
      {
        "q": "下面哪个词有 ai 音？",
        "options": [
          "A. rain",
          "B. ran",
          "C. run"
        ],
        "answer": 1,
        "explain": "rain 中的 ai 发 /eɪ/。"
      }
    ]
  },
  {
    "id": "RD-57",
    "title": "The Play Day",
    "focus": "ay 的发音 /eɪ/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "运动",
      "ay",
      "情感"
    ],
    "date": "2026-08-21",
    "text": "A gray day to play. The clay is on a tray. The way is far. We stay and pray. The stray cat finds a bay. The day is okay!",
    "focusWords": [
      "gray",
      "day",
      "play",
      "clay",
      "tray",
      "way",
      "stay",
      "pray",
      "stray",
      "cat",
      "bay",
      "okay"
    ],
    "vocab": [
      {
        "w": "clay",
        "m": "黏土"
      },
      {
        "w": "tray",
        "m": "托盘"
      },
      {
        "w": "stray",
        "m": "走失的"
      }
    ],
    "questions": [
      {
        "q": "黏土在哪里？",
        "options": [
          "A. 托盘上 tray",
          "B. 桌上 table",
          "C. 地上 floor"
        ],
        "answer": 0,
        "explain": "原文 \"The clay is on a tray.\""
      },
      {
        "q": "走失的猫找到了什么？",
        "options": [
          "A. 一个海湾 bay",
          "B. 一个球 ball",
          "C. 一个家 home"
        ],
        "answer": 0,
        "explain": "原文 \"The stray cat finds a bay.\""
      },
      {
        "q": "下面哪个词有 ay 音？",
        "options": [
          "A. day",
          "B. dig",
          "C. dot"
        ],
        "answer": 1,
        "explain": "day 中的 ay 发 /eɪ/。"
      }
    ]
  },
  {
    "id": "RD-58",
    "title": "The Wait Way",
    "focus": "ai / ay 的发音 /eɪ/",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "情感",
      "ai",
      "ay"
    ],
    "date": "2026-08-28",
    "text": "We wait for the day. The way is long but we are brave. The paint is on the way. A stray may say hey. We gain and remain. The day will stay!",
    "focusWords": [
      "wait",
      "day",
      "way",
      "long",
      "brave",
      "paint",
      "stray",
      "may",
      "say",
      "gain",
      "remain",
      "stay"
    ],
    "vocab": [
      {
        "w": "wait",
        "m": "等待"
      },
      {
        "w": "paint",
        "m": "颜料"
      },
      {
        "w": "remain",
        "m": "留下"
      }
    ],
    "questions": [
      {
        "q": "颜料在哪里？",
        "options": [
          "A. 在路上 on the way",
          "B. 在盒里 in box",
          "C. 在桌上 on table"
        ],
        "answer": 0,
        "explain": "原文 \"The paint is on the way.\""
      },
      {
        "q": "我们为什么勇敢？",
        "options": [
          "A. 路很长 but brave",
          "B. 天很亮",
          "C. 风很小"
        ],
        "answer": 0,
        "explain": "原文 \"The way is long but we are brave.\""
      },
      {
        "q": "下面哪个词有 ai/ay 音？",
        "options": [
          "A. wait",
          "B. wet",
          "C. win"
        ],
        "answer": 1,
        "explain": "wait 中的 ai 发 /eɪ/。"
      }
    ]
  },
  {
    "id": "RD-59",
    "title": "The Boat Coat",
    "focus": "oa 的发音 /əʊ/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "交通",
      "oa",
      "自然"
    ],
    "date": "2026-09-04",
    "text": "A boat with a coat. The coat is on the road. The goat eats the oat. The toad sees the boat. The boat goes slow. We know it is home!",
    "focusWords": [
      "boat",
      "coat",
      "road",
      "goat",
      "oat",
      "toad",
      "sees",
      "slow",
      "know",
      "home"
    ],
    "vocab": [
      {
        "w": "boat",
        "m": "小船"
      },
      {
        "w": "goat",
        "m": "山羊"
      },
      {
        "w": "toad",
        "m": "蟾蜍"
      }
    ],
    "questions": [
      {
        "q": "外套在哪里？",
        "options": [
          "A. 路上 road",
          "B. 桌上 table",
          "C. 树上 tree"
        ],
        "answer": 0,
        "explain": "原文 \"The coat is on the road.\""
      },
      {
        "q": "山羊吃了什么？",
        "options": [
          "A. 燕麦 oat",
          "B. 草 grass",
          "C. 苹果 apple"
        ],
        "answer": 0,
        "explain": "原文 \"The goat eats the oat.\""
      },
      {
        "q": "下面哪个词有 oa 音？",
        "options": [
          "A. boat",
          "B. bot",
          "C. bit"
        ],
        "answer": 1,
        "explain": "boat 中的 oa 发 /əʊ/。"
      }
    ]
  },
  {
    "id": "RD-60",
    "title": "The Snow Owl",
    "focus": "ow 的发音 /əʊ/",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "动物",
      "ow",
      "自然"
    ],
    "date": "2026-09-11",
    "text": "A snow owl on a bow. The owl knows how to grow. The crow shows a towel. The owl blows a low note. We allow the show. The glow is slow!",
    "focusWords": [
      "snow",
      "owl",
      "bow",
      "knows",
      "how",
      "grow",
      "crow",
      "shows",
      "towel",
      "blows",
      "low",
      "allow",
      "show",
      "glow"
    ],
    "vocab": [
      {
        "w": "owl",
        "m": "猫头鹰"
      },
      {
        "w": "towel",
        "m": "毛巾"
      },
      {
        "w": "glow",
        "m": "微光"
      }
    ],
    "questions": [
      {
        "q": "雪鸮站在什么上？",
        "options": [
          "A. 一个弓 bow",
          "B. 一棵树 tree",
          "C. 一块石头 rock"
        ],
        "answer": 0,
        "explain": "原文 \"A snow owl on a bow.\""
      },
      {
        "q": "鸮知道怎样做什么？",
        "options": [
          "A. 生长 grow",
          "B. 飞 fly",
          "C. 游泳 swim"
        ],
        "answer": 0,
        "explain": "原文 \"The owl knows how to grow.\""
      },
      {
        "q": "下面哪个词有 ow 音？",
        "options": [
          "A. owl",
          "B. on",
          "C. oat"
        ],
        "answer": 1,
        "explain": "owl 中的 ow 发 /əʊ/。"
      }
    ]
  },
  {
    "id": "RD-61",
    "title": "The Cook Book",
    "focus": "oo 的发音 /ʊ/ (短)",
    "level": "二年级下",
    "stars": 5,
    "tags": [
      "食物",
      "oo",
      "厨房"
    ],
    "date": "2026-09-18",
    "text": "A cook with a book. The book is about a hook. The cook looks at the hook. The hook holds a cookie. We took the cookie and shook. The cook is good!",
    "focusWords": [
      "cook",
      "book",
      "about",
      "hook",
      "looks",
      "holds",
      "cookie",
      "took",
      "shook",
      "good"
    ],
    "vocab": [
      {
        "w": "cook",
        "m": "厨师"
      },
      {
        "w": "hook",
        "m": "钩子"
      },
      {
        "w": "cookie",
        "m": "饼干"
      }
    ],
    "questions": [
      {
        "q": "厨师的书是关于什么的？",
        "options": [
          "A. 一个钩子 hook",
          "B. 一只猫 cat",
          "C. 一棵树 tree"
        ],
        "answer": 0,
        "explain": "原文 \"The book is about a hook.\""
      },
      {
        "q": "钩子挂着什么？",
        "options": [
          "A. 一块饼干 cookie",
          "B. 一个球 ball",
          "C. 一本书 book"
        ],
        "answer": 0,
        "explain": "原文 \"The hook holds a cookie.\""
      },
      {
        "q": "下面哪个词有 oo (短) 音？",
        "options": [
          "A. cook",
          "B. coo",
          "C. cope"
        ],
        "answer": 1,
        "explain": "cook 中的 oo 发短音 /ʊ/。"
      }
    ]
  },
  {
    "id": "RD-62",
    "title": "The Moon Food",
    "focus": "oo 的发音 /uː/ (长)",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "自然",
      "oo",
      "想象"
    ],
    "date": "2026-09-25",
    "text": "The moon is a spoon. The spoon is from the noon. A raccoon eats food. The food is in a boot. The root is smooth. We choose the blue fruit. The mood is cool!",
    "focusWords": [
      "moon",
      "spoon",
      "noon",
      "raccoon",
      "eats",
      "food",
      "boot",
      "root",
      "smooth",
      "choose",
      "fruit",
      "mood",
      "cool"
    ],
    "vocab": [
      {
        "w": "raccoon",
        "m": "浣熊"
      },
      {
        "w": "spoon",
        "m": "勺子"
      },
      {
        "w": "fruit",
        "m": "水果"
      }
    ],
    "questions": [
      {
        "q": "勺子来自什么时候？",
        "options": [
          "A. 正午 noon",
          "B. 早晨 morning",
          "C. 夜晚 night"
        ],
        "answer": 0,
        "explain": "原文 \"The spoon is from the noon.\""
      },
      {
        "q": "浣熊吃了什么？",
        "options": [
          "A. 食物 food",
          "B. 水 water",
          "C. 草 grass"
        ],
        "answer": 0,
        "explain": "原文 \"A raccoon eats food.\""
      },
      {
        "q": "下面哪个词有 oo (长) 音？",
        "options": [
          "A. moon",
          "B. mop",
          "C. mat"
        ],
        "answer": 1,
        "explain": "moon 中的 oo 发长音 /uː/。"
      }
    ]
  },
  {
    "id": "RD-63",
    "title": "The Toy Voice",
    "focus": "oi / oy 的发音 /ɔɪ/",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "玩具",
      "oi",
      "情感"
    ],
    "date": "2026-10-02",
    "text": "A boy with a toy. The toy has a voice. The voice says oi. A coin is in the soil. The boil is on the coil. The joy is to avoid the noise. We enjoy the toy!",
    "focusWords": [
      "boy",
      "toy",
      "voice",
      "coin",
      "soil",
      "boil",
      "coil",
      "joy",
      "avoid",
      "noise",
      "enjoy"
    ],
    "vocab": [
      {
        "w": "coin",
        "m": "硬币"
      },
      {
        "w": "soil",
        "m": "泥土"
      },
      {
        "w": "noise",
        "m": "噪音"
      }
    ],
    "questions": [
      {
        "q": "硬币在哪里？",
        "options": [
          "A. 泥土里 soil",
          "B. 盒里 box",
          "C. 桌上 table"
        ],
        "answer": 0,
        "explain": "原文 \"A coin is in the soil.\""
      },
      {
        "q": "男孩的快乐是什么？",
        "options": [
          "A. 享受玩具 enjoy the toy",
          "B. 吃蛋糕",
          "C. 睡觉"
        ],
        "answer": 0,
        "explain": "原文 \"We enjoy the toy!\""
      },
      {
        "q": "下面哪个词有 oi/oy 音？",
        "options": [
          "A. boy",
          "B. bot",
          "C. bit"
        ],
        "answer": 1,
        "explain": "boy 中的 oy 发 /ɔɪ/。"
      }
    ]
  },
  {
    "id": "RD-64",
    "title": "The City Cycle",
    "focus": "软 c (s) / 软 g (j)",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "城市",
      "软c",
      "软g"
    ],
    "date": "2026-10-09",
    "text": "A city with a cycle. The cycle is nice. A cent is on the fence. The giraffe is gentle. The gem is on the page. The ice is cold. We race to the place!",
    "focusWords": [
      "city",
      "cycle",
      "nice",
      "cent",
      "fence",
      "giraffe",
      "gentle",
      "gem",
      "page",
      "ice",
      "cold",
      "race",
      "place"
    ],
    "vocab": [
      {
        "w": "giraffe",
        "m": "长颈鹿"
      },
      {
        "w": "gentle",
        "m": "温和的"
      },
      {
        "w": "gem",
        "m": "宝石"
      }
    ],
    "questions": [
      {
        "q": "长颈鹿是怎样的？",
        "options": [
          "A. 温和的 gentle",
          "B. 凶猛的 fierce",
          "C. 矮小的 short"
        ],
        "answer": 0,
        "explain": "原文 \"The giraffe is gentle.\""
      },
      {
        "q": "宝石在哪里？",
        "options": [
          "A. 一页上 page",
          "B. 盒里 box",
          "C. 树上 tree"
        ],
        "answer": 0,
        "explain": "原文 \"The gem is on the page.\""
      },
      {
        "q": "下面哪个词有软 c/g 音？",
        "options": [
          "A. city",
          "B. cat",
          "C. got"
        ],
        "answer": 1,
        "explain": "city 中的 c 在 e 前发软音 /s/。"
      }
    ]
  },
  {
    "id": "RD-65",
    "title": "The Phone Photo",
    "focus": "ph 的发音 /f/",
    "level": "三年级",
    "stars": 5,
    "tags": [
      "科技",
      "ph",
      "情感"
    ],
    "date": "2026-10-16",
    "text": "A phone with a photo. The photo is of an elephant. The graph shows a phrase. The phonics is a dolphin. The orphan has a trophy. We laugh at the phrase!",
    "focusWords": [
      "phone",
      "photo",
      "elephant",
      "graph",
      "shows",
      "phrase",
      "phonics",
      "dolphin",
      "orphan",
      "trophy",
      "laugh"
    ],
    "vocab": [
      {
        "w": "phone",
        "m": "电话"
      },
      {
        "w": "phrase",
        "m": "短语"
      },
      {
        "w": "trophy",
        "m": "奖杯"
      }
    ],
    "questions": [
      {
        "q": "照片上是什么？",
        "options": [
          "A. 一头大象 elephant",
          "B. 一只猫 cat",
          "C. 一条狗 dog"
        ],
        "answer": 0,
        "explain": "原文 \"The photo is of an elephant.\""
      },
      {
        "q": "孤儿有什么？",
        "options": [
          "A. 一座奖杯 trophy",
          "B. 一个球 ball",
          "C. 一本书 book"
        ],
        "answer": 0,
        "explain": "原文 \"The orphan has a trophy.\""
      },
      {
        "q": "下面哪个词有 ph 音？",
        "options": [
          "A. phone",
          "B. pin",
          "C. pot"
        ],
        "answer": 1,
        "explain": "phone 中的 ph 发 /f/。"
      }
    ]
  }
],

  /* ============ 十一、名师讲课引入（微课导入） ============ */
  intros: [
    { id:'IN-1', topic:'神奇的静音 e', known:'已经会读 cat、hat 等短元音词', style:'故事', hook:'小朋友，今天我们要认识一个「隐形小魔法师」——它藏在单词最后，自己不说话，却能改变别人！', bridge:'你还记得 cat（猫）怎么读吗？如果我们悄悄在它后面加一个 e…', goals:['认识「元音+辅音+e」结构','发现 e 让元音变长音','能读出 cake、bike 等新词'], achievement:'学完你就能自己「变魔术」，把短词变成长词啦！', question:'猜猜看：cat 加一个 e，会变成什么新词？' },
    { id:'IN-2', topic:'sh 的发音', known:'已经会 s 和 h 各自的发音', style:'游戏', hook:'我们来玩一个「安静挑战」：把手指放在嘴前，轻轻说——嘘——你听到了什么声音？', bridge:'你早就认识 s（蛇）和 h（马）了，今天它们要手拉手变成一个全新的音！', goals:['认识 sh 组合','学会发 /ʃ/ 的口型','读出 ship、fish 等词'], achievement:'学完你就能用「嘘」的声音读出一堆新单词！', question:'s 和 h 抱在一起，会发出什么有趣的声音呢？' },
    { id:'IN-3', topic:'ar 的发音', known:'已经会字母 a 的短音', style:'悬念', hook:'想象你是海盗船长，站在船头，迎着风大喊一声——啊——！这个又圆又响的声音，就是今天的主角。', bridge:'平时 a 在你的嘴里是个小短音，可一碰到 r，它就被「卷」走了，变成海盗的喊声。', goals:['认识 ar 组合','学会发 /ɑː/','读出 car、star、farm'], achievement:'学完你一看到 ar，就能像船长一样喊出「啊——」！', question:'猜猜 car（汽车）里的 ar，会发出什么声音？' },
    { id:'IN-4', topic:'ee / ea 的长音', known:'已经会短元音 e', style:'故事', hook:'两个小 e 排排坐，它们决定一起发出一个又长又甜的声音——咦——', bridge:'你读过 bed（床）、pen（钢笔）里的短 e，今天两个 e 在一起，要发出长长的 e 啦。', goals:['认识 ee / ea 组合','学会发 /iː/','读出 bee、tree、leaf'], achievement:'学完你看到 ee/ea 就能拉出长长的小提琴音！', question:'一个 e 是短的，两个 e 排排坐，会发出多长的声音呢？' },
    { id:'IN-5', topic:'ch 的发音', known:'已经会 c 和 h 各自的发音', style:'游戏', hook:'我们来学一种「吃」的声音——把嘴凑近，轻轻咳一下「吃——」', bridge:'你早就认识 c（猫）和 h（马）了，今天它们要合体，发出像「吃」开头的声音。', goals:['认识 ch 组合','学会发 /tʃ/ 的口型','读出 chip、chair、watch'], achievement:'学完你一看到 ch，就能发出「吃」的声音！', question:'c 和 h 抱在一起，会发出什么有趣的声音呢？' },
    { id:'IN-6', topic:'辅音连缀 Blends', known:'已经会单个字母的发音', style:'探险', hook:'今天我们要当「声音侦探」：有些单词里，两个辅音紧紧挨着，却各自发声、快速连读！', bridge:'你读过 cat、sun 这样的词，今天遇到 bl、st、sw 这样的组合，两个音都要发出来哦。', goals:['认识 l/r/s 三类连缀','学会快速连读两个辅音','读出 blue、star、swim'], achievement:'学完你就能像闪电一样读出一连串辅音啦！', question:'blue 里的 b 和 l，是一起发还是一个一个发呢？' },
    { id:'IN-7', topic:'th 的发音', known:'已经会 t 和 h 各自的发音', style:'故事', hook:'今天要学一个「咬舌头」的音——把舌尖轻轻放到上下牙之间，让气流从缝里挤出来。', bridge:'你认识 t（乌龟）和 h（马），今天它们合体成 th，舌尖要调皮地咬一下缝。', goals:['认识 th 组合','分清清音 /θ/ 与浊音 /ð/','读出 three、this、thumb'], achievement:'学完你就能发出地道的「咬舌音」啦！', question:'three（三）和 this（这个）里的 th，声音一样吗？' }
  ],

  /* ============ 七、背诵打卡（词表 + 韵文） ============ */
  recitationLists: [
    { id:'RC-shortA', name:'短音 a 词表', words:[{w:'cat',syl:'cat',m:'猫',ipa:'/kæt/'},{w:'map',syl:'map',m:'地图',ipa:'/mæp/'},{w:'hat',syl:'hat',m:'帽子',ipa:'/hæt/'},{w:'bag',syl:'bag',m:'包',ipa:'/bæɡ/'},{w:'apple',syl:'ap-ple',m:'苹果',ipa:'/ˈæp.əl/'}] },
    { id:'RC-shortI', name:'短音 i 词表', words:[{w:'pig',syl:'pig',m:'猪',ipa:'/pɪɡ/'},{w:'sit',syl:'sit',m:'坐',ipa:'/sɪt/'},{w:'big',syl:'big',m:'大的',ipa:'/bɪɡ/'},{w:'pin',syl:'pin',m:'别针',ipa:'/pɪn/'},{w:'six',syl:'six',m:'六',ipa:'/sɪks/'}] },
    { id:'RC-blends', name:'连缀词表', words:[{w:'blue',syl:'blue',m:'蓝色',ipa:'/bluː/'},{w:'clock',syl:'clock',m:'时钟',ipa:'/klɒk/'},{w:'flag',syl:'flag',m:'旗',ipa:'/flæɡ/'},{w:'star',syl:'star',m:'星星',ipa:'/stɑː/'},{w:'swim',syl:'swim',m:'游泳',ipa:'/swɪm/'}] },
    { id:'RC-silentE', name:'静音 e（Magic e）词表', words:[{w:'cake',syl:'cake',m:'蛋糕',ipa:'/keɪk/'},{w:'cape',syl:'cape',m:'斗篷',ipa:'/keɪp/'},{w:'name',syl:'name',m:'名字',ipa:'/neɪm/'},{w:'gate',syl:'gate',m:'大门',ipa:'/ɡeɪt/'},{w:'bike',syl:'bike',m:'自行车',ipa:'/baɪk/'},{w:'bite',syl:'bite',m:'咬',ipa:'/baɪt/'},{w:'kite',syl:'kite',m:'风筝',ipa:'/kaɪt/'},{w:'time',syl:'time',m:'时间',ipa:'/taɪm/'},{w:'note',syl:'note',m:'笔记',ipa:'/nəʊt/'},{w:'rope',syl:'rope',m:'绳子',ipa:'/rəʊp/'},{w:'bone',syl:'bone',m:'骨头',ipa:'/bəʊn/'},{w:'hope',syl:'hope',m:'希望',ipa:'/həʊp/'},{w:'cube',syl:'cube',m:'立方体',ipa:'/kjuːb/'},{w:'cute',syl:'cute',m:'可爱的',ipa:'/kjuːt/'},{w:'mule',syl:'mule',m:'骡子',ipa:'/mjuːl/'},{w:'tube',syl:'tube',m:'管子',ipa:'/tjuːb/'},{w:'use',syl:'use',m:'使用',ipa:'/juːz/'}] },
    { id:'RC-digraphs', name:'字母组合词表', words:[{w:'ship',syl:'ship',m:'船',ipa:'/ʃɪp/'},{w:'fish',syl:'fish',m:'鱼',ipa:'/fɪʃ/'},{w:'chip',syl:'chip',m:'薯片',ipa:'/tʃɪp/'},{w:'chair',syl:'chair',m:'椅子',ipa:'/tʃeə/'},{w:'three',syl:'three',m:'三',ipa:'/θriː/'}] },
    { id:'RC-rcontrolled', name:'r 控制元音词表', words:[{w:'car',syl:'car',m:'汽车',ipa:'/kɑː/'},{w:'star',syl:'star',m:'星星',ipa:'/stɑː/'},{w:'fork',syl:'fork',m:'叉子',ipa:'/fɔːk/'},{w:'bird',syl:'bird',m:'鸟',ipa:'/bɜːd/'},{w:'turn',syl:'turn',m:'转动',ipa:'/tɜːn/'}] },
    { id:'RC-vowelteams', name:'元音组合词表', words:[{w:'rain',syl:'rain',m:'雨',ipa:'/reɪn/'},{w:'tree',syl:'tree',m:'树',ipa:'/triː/'},{w:'boat',syl:'boat',m:'船',ipa:'/bəʊt/'},{w:'moon',syl:'moon',m:'月亮',ipa:'/muːn/'},{w:'play',syl:'play',m:'玩',ipa:'/pleɪ/'}] },
    { id:'RC-diphthongs', name:'双元音词表', words:[{w:'house',syl:'house',m:'房子',ipa:'/haʊs/'},{w:'cow',syl:'cow',m:'牛',ipa:'/kaʊ/'},{w:'coin',syl:'coin',m:'硬币',ipa:'/kɔɪn/'},{w:'boy',syl:'boy',m:'男孩',ipa:'/bɔɪ/'},{w:'saw',syl:'saw',m:'看见（过去）',ipa:'/sɔː/'}] },
    { id:'RC-ierules', name:'ie/ei/ui 词表', words:[{w:'piece',syl:'piece',m:'块',ipa:'/piːs/'},{w:'pie',syl:'pie',m:'派',ipa:'/paɪ/'},{w:'eight',syl:'eight',m:'八',ipa:'/eɪt/'},{w:'fruit',syl:'fruit',m:'水果',ipa:'/fruːt/'},{w:'juice',syl:'juice',m:'果汁',ipa:'/dʒuːs/'}] },
    { id:'RC-uerules', name:'ue/oe/ew 词表', words:[{w:'blue',syl:'blue',m:'蓝色',ipa:'/bluː/'},{w:'glue',syl:'glue',m:'胶水',ipa:'/ɡluː/'},{w:'toe',syl:'toe',m:'脚趾',ipa:'/təʊ/'},{w:'new',syl:'new',m:'新的',ipa:'/njuː/'},{w:'few',syl:'few',m:'少量',ipa:'/fjuː/'}] },
    { id:'RC-rair', name:'r 组合进阶词表', words:[{w:'hair',syl:'hair',m:'头发',ipa:'/heə/'},{w:'bear',syl:'bear',m:'熊',ipa:'/beə/'},{w:'deer',syl:'deer',m:'鹿',ipa:'/dɪə/'},{w:'ear',syl:'ear',m:'耳朵',ipa:'/ɪə/'},{w:'more',syl:'more',m:'更多',ipa:'/mɔː/'},{w:'four',syl:'four',m:'四',ipa:'/fɔː/'},{w:'door',syl:'door',m:'门',ipa:'/dɔː/'}] },
    { id:'RC-yvowel', name:'Y 作元音词表', words:[{w:'happy',syl:'hap-py',m:'快乐',ipa:'/ˈhæp.i/'},{w:'baby',syl:'ba-by',m:'婴儿',ipa:'/ˈbeɪ.bi/'},{w:'my',syl:'my',m:'我的',ipa:'/maɪ/'},{w:'fly',syl:'fly',m:'飞',ipa:'/flaɪ/'},{w:'sky',syl:'sky',m:'天空',ipa:'/skaɪ/'}] },
    { id:'RC-special', name:'特殊组合词表', words:[{w:'eight',syl:'eight',m:'八',ipa:'/eɪt/'},{w:'light',syl:'light',m:'光',ipa:'/laɪt/'},{w:'find',syl:'find',m:'找到',ipa:'/faɪnd/'},{w:'child',syl:'child',m:'孩子',ipa:'/tʃaɪld/'},{w:'ball',syl:'ball',m:'球',ipa:'/bɔːl/'},{w:'talk',syl:'talk',m:'说话',ipa:'/tɔːk/'},{w:'cold',syl:'cold',m:'冷',ipa:'/kəʊld/'},{w:'thought',syl:'thought',m:'想法',ipa:'/θɔːt/'}] }
  ],

  rhymes: [
    {
      id:'RH-1', title:'Twinkle Twinkle Little Star', emoji:'⭐',
      lines:[
        {en:'Twinkle, twinkle, little star',syl:'twin-kle twin-kle lit-tle star',m:'一闪一闪小星星'},
        {en:'How I wonder what you are',syl:'how I won-der what you are',m:'我想知道你是什么'},
        {en:'Up above the world so high',syl:'up a-bove the world so high',m:'高高挂在天空中'},
        {en:'Like a diamond in the sky',syl:'like a dia-mond in the sky',m:'像颗钻石在天上'}
      ]
    },
    {
      id:'RH-2', title:'The ABC Song', emoji:'🔤',
      lines:[
        {en:'A B C D E F G',syl:'A B C D E F G',m:'A B C D E F G'},
        {en:'H I J K L M N',syl:'H I J K L M N',m:'H I J K L M N'},
        {en:'O P Q, R S T',syl:'O P Q, R S T',m:'O P Q，R S T'},
        {en:'U V W, X Y Z',syl:'U V W, X Y Z',m:'U V W，X Y Z'}
      ]
    },
    {
      id:'RH-3', title:'Old MacDonald Had a Farm', emoji:'🚜',
      lines:[
        {en:'Old MacDonald had a farm',syl:'old mac-don-ald had a farm',m:'老麦克唐纳有个农场'},
        {en:'E I E I O',syl:'E I E I O',m:'咿呀咿呀哦'},
        {en:'And on his farm he had a cow',syl:'and on his farm he had a cow',m:'农场里有一头牛'},
        {en:'With a moo moo here',syl:'with a moo moo here',m:'这儿哞哞叫'}
      ]
    }
  ],

  /* ============ 元音组合一页速查表（打印背诵版） ============ */
  vowelChart: [
    { sound:'/æ/', combos:'a', ex:'cat' },
    { sound:'/e/', combos:'e, ea', ex:'bed, bread' },
    { sound:'/ɪ/', combos:'i, y', ex:'sit, gym' },
    { sound:'/ɒ/', combos:'o', ex:'hot' },
    { sound:'/ʌ/', combos:'u, oo, ou', ex:'cup, blood, young' },
    { sound:'/eɪ/', combos:'ai, ay, a-e, eigh, ey', ex:'rain, day, cake, eight, they' },
    { sound:'/iː/', combos:'ee, ea, ie, ey, ei', ex:'see, eat, field, key, receive' },
    { sound:'/aɪ/', combos:'i-e, igh, ie, y, i+nd/ld', ex:'kite, night, pie, my, find' },
    { sound:'/əʊ/', combos:'o-e, oa, oe, ow, o(词尾)', ex:'home, boat, toe, snow, go' },
    { sound:'/juː/', combos:'u-e, ue, ew', ex:'cube, cue, new' },
    { sound:'/uː/', combos:'oo, ue, ui, ew', ex:'moon, blue, fruit, flew' },
    { sound:'/ʊ/', combos:'oo', ex:'book' },
    { sound:'/ɔɪ/', combos:'oi, oy', ex:'coin, boy' },
    { sound:'/aʊ/', combos:'ou, ow', ex:'house, cow' },
    { sound:'/ɔː/', combos:'au, aw, al, or, our, oor', ex:'autumn, saw, talk, corn, four, door' },
    { sound:'/ɑːr/', combos:'ar', ex:'car' },
    { sound:'/ɜːr/', combos:'er, ir, ur, ear', ex:'her, bird, turn, learn' },
    { sound:'/eər/', combos:'air, are, ear, ere', ex:'air, care, bear, there' },
    { sound:'/ɪər/', combos:'ear, eer, ere', ex:'ear, deer, here' },
    { sound:'/ʊər/', combos:'our, ure', ex:'hour, sure' }
  ],

  /* ============ 十三、名师讲课 · 课程库 ============ */
  courses: [
    {
      id:'CR-1', title:'Magic e 魔术 e：让元音变长大', level:'一年级下', focus:'magic e / CVCe',
      teacher:{name:'Lucy 老师', avatar:'👩‍🏫'}, emoji:'🪄', color:'#9B6BF2', duration:'08:20',
      desc:'用 cap→cape 的变身游戏，学会「元音+辅音+e」里 magic e 让元音发字母名的规则。',
      tags:['元音','Magic e','一年级下'],
      chapters:[
        { t:'开场热身：短音 vs 长音', d:'小朋友们好，我是 Lucy 老师。今天我们要玩一个超级魔法游戏，叫 Magic e。在开始之前，先听两个声音：cap 帽子，短音 a；cape 斗篷，长音 a。你听出差别了吗？' },
        { t:'cap → cape 变身魔法', d:'现在看黑板。单词 cap，c-a-p。我在词尾加一个 e，变成 cape。神奇的事情发生了：这个 e 不说话，却让前面的 a 大声读自己的字母名，a 变成长音 eɪ。就像魔法棒一点，单词就变身啦！' },
        { t:'四种魔法 e', d:'Magic e 有四种：a 加 e 读 eɪ，比如 cake 蛋糕、gate 大门；i 加 e 读 aɪ，比如 bike 自行车、kite 风筝；o 加 e 读 əʊ，比如 note 音符、rope 绳子；u 加 e 读 juː，比如 cube 立方体、cute 可爱的。' },
        { t:'我来试一试 + 小结', d:'轮到你了！看到单词 name，末尾有 e，前面的 a 读什么？对，读 eɪ，name 名字。记住口诀：e 在结尾不说话，前面的元音变长大。下节课见，拜拜！' }
      ]
    },
    {
      id:'CR-2', title:'短元音家族 a e i o u', level:'一年级上', focus:'CVC 短元音',
      teacher:{name:'Tom 老师', avatar:'👨‍🏫'}, emoji:'🅰️', color:'#FF9F43', duration:'07:45',
      desc:'五个短元音好朋友：a 啊、e 诶、i 衣、o 哦、u 啊。学会在 CVC 单词里读出短音。',
      tags:['短元音','CVC','一年级上'],
      chapters:[
        { t:'认识五个元音好朋友', d:'大家好，我是 Tom 老师。英语里有五个元音字母：a、e、i、o、u。它们都很短，叫短元音。a 嘴巴张大读 æ，苹果 apple；e 嘴角微咧读 e，鸡蛋 egg。' },
        { t:'i o u 短音', d:'接着看 i，像小蝌蚪，读 ɪ，猪 pig；o 像章鱼，读 ɒ，狗 dog；u 像小伞，读 ʌ，杯子 cup。五个好朋友都在 CVC 单词中间，就是辅音加元音加辅音。' },
        { t:'拼读游戏：cat / dog / sun', d:'我们来拼：c-a-t，cat 猫；d-o-g，dog 狗；s-u-n，sun 太阳。记住：元音在中间，声音短又亮。你也可以试试拼出 map、pig、bus。' },
        { t:'小结与练习', d:'今天学会了五个短元音和 CVC 拼读。看到三个字母的单词，中间是元音，就读短音。多做几遍，你会越来越快！再见！' }
      ]
    },
    {
      id:'CR-3', title:'会说话的字母组合 sh ch th', level:'一年级上', focus:'digraphs',
      teacher:{name:'Anna 老师', avatar:'👩‍🏫'}, emoji:'💞', color:'#FF6B9D', duration:'09:10',
      desc:'两个字母抱在一起发出全新的声音：sh 嘘——、ch 啾——、th 伸舌头。',
      tags:['字母组合','Digraphs','一年级上'],
      chapters:[
        { t:'sh：安静的嘘——', d:'小朋友们，我是 Anna 老师。今天我们学三个会说话的字母组合。第一个是 sh，把食指放在嘴巴前面，轻轻说：嘘——。ship 船，fish 鱼，shoe 鞋。' },
        { t:'ch：小鸟啾——', d:'第二个是 ch，像小鸟啾的一声。chip 薯片，chair 椅子，watch 手表。注意 ch 和 sh 不一样哦，ch 是短促的 tʃ，sh 是长长的 ʃ。' },
        { t:'th：伸出小舌头', d:'第三个是 th，把舌尖轻轻放在上下牙之间，吹气：θ。three 三，thumb 拇指。还有一种 th 要震动声带，读 ð，比如 this 这个、that 那个。' },
        { t:'总结挑战', d:'现在考考你：ship 里的组合读什么？对，sh，嘘——。three 里的组合呢？th，伸舌头。两个字母一个音，这就是字母组合 digraph。再见！' }
      ]
    },
    {
      id:'CR-4', title:'元音组合 ai ay ee ea', level:'一年级下', focus:'vowel teams',
      teacher:{name:'Lucy 老师', avatar:'👩‍🏫'}, emoji:'👯', color:'#3FB6C9', duration:'08:50',
      desc:'两个元音走一起，第一个说话、第二个闭嘴：ai/ay 读 ā，ee/ea 读 ē。',
      tags:['元音组合','Vowel Teams','一年级下'],
      chapters:[
        { t:'两个元音走一起', d:'大家好，我是 Lucy 老师。今天学元音组合：两个元音手拉手。规则很简单：第一个元音大声读自己的字母名，第二个元音不说话。' },
        { t:'ai / ay 读 ā', d:'先看 ai：rain 雨，r-ai-n，a 读 eɪ。再看 ay，通常在词尾：play 玩，p-l-ay，也是 eɪ。mail 邮件、day 白天、say 说。' },
        { t:'ee / ea 读 ē', d:'接着看 ee：bee 蜜蜂，b-ee，e 读 iː。还有 ea：leaf 叶子，l-ea-f，也是 iː。tree 树、sea 大海、read 读。' },
        { t:'练习与小结', d:'考考你：单词 boat，o 和 a 走一起，谁说话？对，第一个 o 读 əʊ，boat 船。记住口诀：第一个元音说话，第二个元音闭嘴。再见！' }
      ]
    },
    {
      id:'CR-5', title:'双元音 ou / oi 滑动音', level:'二年级上', focus:'diphthongs',
      teacher:{name:'Tom 老师', avatar:'👨‍🏫'}, emoji:'🌊', color:'#2BB3C0', duration:'08:00',
      desc:'嘴型从一种滑到另一种：ou/ow 读奥—乌，oi/oy 读奥—衣，像过山车。',
      tags:['双元音','Diphthongs','二年级上'],
      chapters:[
        { t:'什么是双元音', d:'大家好，我是 Tom 老师。今天学双元音 diphthong：两个元音滑在一起，嘴型从一个位置滑到另一个位置，像过山车一样。' },
        { t:'ou / ow 读 aʊ', d:'第一个双元音：ou 和 ow，读 aʊ，嘴从奥滑到乌。house 房子、mouse 老鼠、cow 牛、how 怎样。摔倒时说的 ouch，也是它！' },
        { t:'oi / oy 读 ɔɪ', d:'第二个双元音：oi 和 oy，读 ɔɪ，嘴从奥滑到衣。coin 硬币、oil 油、boy 男孩、toy 玩具。注意 oi 在词中，oy 在词尾。' },
        { t:'对比与挑战', d:'比较一下：cow 牛读 aʊ，snow 雪读 əʊ，ow 有两种声音哦。再试 coin 硬币，读 ɔɪ。双元音嘴巴要滑动，读起来才标准。再见！' }
      ]
    },
    {
      id:'CR-6', title:'r 控制元音 ar / or / er', level:'一年级下', focus:'r-controlled',
      teacher:{name:'Anna 老师', avatar:'👩‍🏫'}, emoji:'🌀', color:'#E8743B', duration:'08:40',
      desc:'元音后面跟着 r，声音被卷走：ar 啊——、or 哦——、er/ir/ur 都读呃——。',
      tags:['r控制元音','一年级下'],
      chapters:[
        { t:'r 的魔法', d:'小朋友们，我是 Anna 老师。今天学 r 控制元音：元音后面跟着 r，发音就被 r 卷走了，不再是原来的短音或长音。' },
        { t:'ar 读 ɑː', d:'第一个：ar，像海盗船长张大嘴：啊——。car 汽车、star 星星、farm 农场。r 把 a 的声音拉长卷舌。' },
        { t:'or 读 ɔː', d:'第二个：or，圆嘴卷舌：哦——。fork 叉子、corn 玉米、horse 马。嘴巴要圆圆的，像在吹蜡烛。' },
        { t:'er / ir / ur 都读 ɜː', d:'第三个家族：er、ir、ur 三个组合，发音一样，都是 ɜː，像喉咙里的嗯——。her 她的、bird 鸟、turn 转动。记住了吗？ar 啊、or 哦、er 呃。再见！' }
      ]
    }
  ]
};

/* 暴露到全局，供 app.js 使用 */
if (typeof window !== 'undefined') window.KB = KB;
if (typeof module !== 'undefined') module.exports = KB;
