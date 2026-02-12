// ============================================================
// MAJOR ARCANA
// ============================================================
const majorArcana=[
{id:'m0',numeral:'0',name:'The Fool',nameJp:'愚者',symbol:'🃏',suit:'major',zodiac:'天王星',element:'風',keywords_up:'新たな始まり・自由・冒険',keywords_rev:'無謀・停滞・不注意',upright:'新しい旅立ちの時です。未知への恐れを手放し、純粋な心で一歩を踏み出しましょう。',reversed:'衝動的な行動に注意。大切なものを見失っていないか振り返りましょう。',symbolism:'崖の淵に立つ若者は無限の可能性を、白い犬は本能と忠誠を象徴します。',history:'タロットの旅の始まり。番号0は無であり無限でもあります。'},
{id:'m1',numeral:'I',name:'The Magician',nameJp:'魔術師',symbol:'🪄',suit:'major',zodiac:'水星',element:'風',keywords_up:'創造力・意志・才能',keywords_rev:'未熟・欺瞞・空回り',upright:'才能が開花する時。必要なものはすべて手の中にあります。',reversed:'才能の使い方を見直す時期。基礎に立ち返りましょう。',symbolism:'テーブル上の4つの道具は四大元素の統合を示し、頭上の∞は永遠の可能性を表します。',history:'ヘルメス・トリスメギストスと関連し「上なるものは下なるもののごとし」を体現します。'},
{id:'m2',numeral:'II',name:'The High Priestess',nameJp:'女教皇',symbol:'🌙',suit:'major',zodiac:'月',element:'水',keywords_up:'直感・神秘・内なる声',keywords_rev:'混乱・無視された直感',upright:'静かに内面に耳を傾ける時。答えはあなたの内側にあります。',reversed:'直感を無視していませんか。心の声に素直になりましょう。',symbolism:'二本の柱B・Jはソロモン神殿の入口、ベールの向こうに神秘の知識が隠されています。',history:'グノーシス的な知恵の女性原理を表し、イシスと関連づけられます。'},
{id:'m3',numeral:'III',name:'The Empress',nameJp:'女帝',symbol:'👑',suit:'major',zodiac:'金星',element:'地',keywords_up:'豊穣・母性・美',keywords_rev:'過保護・依存・創造性の枯渇',upright:'豊かさと愛に満ちた時期。創造的エネルギーが溢れています。',reversed:'与えすぎに注意。自分のための時間を確保しましょう。',symbolism:'小麦畑と自然は母なる大地の恵み、金星の紋章は愛と美を象徴します。',history:'大地母神デメテルやヴィーナスと関連する生命を育む力の原型です。'},
{id:'m4',numeral:'IV',name:'The Emperor',nameJp:'皇帝',symbol:'🏛️',suit:'major',zodiac:'牡羊座',element:'火',keywords_up:'権威・構造・安定',keywords_rev:'支配・頑固・柔軟性の欠如',upright:'秩序と規律が成功の鍵。リーダーシップを発揮しましょう。',reversed:'支配的になりすぎていないか省みましょう。',symbolism:'石の玉座は揺るぎない権威、牡羊の彫刻は火のエネルギーを表します。',history:'世俗的な権力と父性原理の象徴です。'},
{id:'m5',numeral:'V',name:'The Hierophant',nameJp:'教皇',symbol:'📿',suit:'major',zodiac:'牡牛座',element:'地',keywords_up:'伝統・教え・精神的指導',keywords_rev:'形骸化・反抗・自己探求',upright:'先人の知恵の中に答えがあります。指導者の助言に耳を傾けましょう。',reversed:'既存の枠組みに疑問を感じる時。自分の価値観を見つめ直しましょう。',symbolism:'三重の十字架は三位一体、二本の鍵は天と地の秘密を開く知恵です。',history:'教会と精神的権威の象徴であり、秘儀参入の儀式と関連があります。'},
{id:'m6',numeral:'VI',name:'The Lovers',nameJp:'恋人',symbol:'💕',suit:'major',zodiac:'双子座',element:'風',keywords_up:'愛・調和・選択',keywords_rev:'不調和・誘惑・価値観の衝突',upright:'大切な選択の時。真実の愛と調和を選びましょう。',reversed:'本質的な相性や価値観を大切にしましょう。',symbolism:'天使ラファエルが二人を祝福し、生命の樹と知恵の樹がエデンの園を再現しています。',history:'初期タロットでは「選択」のカードとして二つの道の間の決断を意味していました。'},
{id:'m7',numeral:'VII',name:'The Chariot',nameJp:'戦車',symbol:'⚔️',suit:'major',zodiac:'蟹座',element:'水',keywords_up:'勝利・前進・意志力',keywords_rev:'暴走・方向喪失・制御不能',upright:'強い意志で障害を乗り越え、目標へ突き進みましょう。',reversed:'一度立ち止まって軌道修正することが大切です。',symbolism:'白と黒のスフィンクスは相反する力を表し、御する者が勝利を手にします。',history:'プラトンの「馬車の比喩」と共鳴し、理性による情念の制御を象徴します。'},
{id:'m8',numeral:'VIII',name:'Strength',nameJp:'力',symbol:'🦁',suit:'major',zodiac:'獅子座',element:'火',keywords_up:'内なる力・勇気・忍耐',keywords_rev:'自信喪失・弱さ・不安',upright:'真の強さは優しさの中にあります。忍耐と慈愛をもって向き合いましょう。',reversed:'内側にある勇気を思い出してください。あなたは思っている以上に強いのです。',symbolism:'獅子を優しくなだめる女性は愛と忍耐による制御を、∞は永続する力を示します。',history:'四枢要徳の一つフォルティチュードとして知られています。'},
{id:'m9',numeral:'IX',name:'The Hermit',nameJp:'隠者',symbol:'🏔️',suit:'major',zodiac:'乙女座',element:'地',keywords_up:'内省・孤独・探求',keywords_rev:'孤立・引きこもり・頑なさ',upright:'一人の時間が必要な時期。静かに自分と向き合いましょう。',reversed:'助けを求めることも大切です。孤独と孤立は違います。',symbolism:'ランタンの光は内なる真実を照らす知恵、杖は経験に裏打ちされた判断力です。',history:'ディオゲネスや修道士と関連し、内なる光を求める魂の旅を象徴します。'},
{id:'m10',numeral:'X',name:'Wheel of Fortune',nameJp:'運命の輪',symbol:'☸️',suit:'major',zodiac:'木星',element:'火',keywords_up:'転換期・運命・好機',keywords_rev:'逆境・停滞・予期せぬ変化',upright:'運命の歯車が動き出す時。チャンスを逃さず掴みましょう。',reversed:'焦らず次の好転の波に備えましょう。',symbolism:'輪の上にスフィンクス、回りにヘブライ文字と錬金術記号が宇宙の循環を示します。',history:'フォルトゥナの輪として中世から親しまれ、運命の周期性を教えます。'},
{id:'m11',numeral:'XI',name:'Justice',nameJp:'正義',symbol:'⚖️',suit:'major',zodiac:'天秤座',element:'風',keywords_up:'公正・真実・均衡',keywords_rev:'不公平・偏り・責任回避',upright:'公正な判断が求められています。真実と道理に基づいて行動しましょう。',reversed:'自分の行動の結果に向き合いましょう。',symbolism:'天秤は均衡と公正、剣は真実を切り開く知性を表します。',history:'四枢要徳の一つ。マアトやテミスと関連があります。'},
{id:'m12',numeral:'XII',name:'The Hanged Man',nameJp:'吊るされた男',symbol:'🔮',suit:'major',zodiac:'海王星',element:'水',keywords_up:'試練・忍耐・新たな視点',keywords_rev:'無駄な犠牲・執着・抵抗',upright:'今は待つことに意味がある時期。逆さまの視点から新しい真実が見えるでしょう。',reversed:'別のアプローチを探しましょう。',symbolism:'逆さの姿は自発的な犠牲と視点の転換、光る後光は悟りを象徴します。',history:'北欧神話のオーディンの自己犠牲との関連が指摘されています。'},
{id:'m13',numeral:'XIII',name:'Death',nameJp:'死神',symbol:'🦋',suit:'major',zodiac:'蠍座',element:'水',keywords_up:'終わりと始まり・変容・再生',keywords_rev:'変化への抵抗・停滞・未練',upright:'古いものを手放すことで未来が開かれます。変容を恐れないでください。',reversed:'終わるべきものを終わらせましょう。',symbolism:'黒い鎧の騎士は避けられない変化、白い薔薇の旗は再生と純粋さです。',history:'物理的な死ではなく変容のシンボル。錬金術の「ニグレド」に対応します。'},
{id:'m14',numeral:'XIV',name:'Temperance',nameJp:'節制',symbol:'🏺',suit:'major',zodiac:'射手座',element:'火',keywords_up:'調和・バランス・適度',keywords_rev:'不均衡・焦り・過剰',upright:'バランスと調和を保ちましょう。忍耐が最良の結果を生みます。',reversed:'一歩引いて全体を見渡しましょう。',symbolism:'二つの杯の間を流れる水は対立する要素の調和と融合です。',history:'四枢要徳の一つ。錬金術の融合プロセスと深い関連があります。'},
{id:'m15',numeral:'XV',name:'The Devil',nameJp:'悪魔',symbol:'🔗',suit:'major',zodiac:'山羊座',element:'地',keywords_up:'束縛・執着・欲望',keywords_rev:'解放・覚醒・自由への一歩',upright:'何かに囚われていませんか。鎖は自分で外せます。',reversed:'束縛から解き放たれる時。真の自由を取り戻しましょう。',symbolism:'鎖につながれた男女の鎖は緩く、自らの意志で抜けられることを示唆しています。',history:'恋人のカードの影の側面であり、物質主義への警告です。'},
{id:'m16',numeral:'XVI',name:'The Tower',nameJp:'塔',symbol:'⚡',suit:'major',zodiac:'火星',element:'火',keywords_up:'崩壊・突然の変化・啓示',keywords_rev:'変化の遅延・恐れ・回避',upright:'古い構造の崩壊は新しい建設の始まりです。',reversed:'少しずつ準備を進めましょう。',symbolism:'雷に打たれる塔はバベルの塔を連想させ、偽りの構造の崩壊を意味します。',history:'タロットの中で最も劇的なカード。突然の啓示と解放を象徴します。'},
{id:'m17',numeral:'XVII',name:'The Star',nameJp:'星',symbol:'⭐',suit:'major',zodiac:'水瓶座',element:'風',keywords_up:'希望・癒し・インスピレーション',keywords_rev:'失望・希望の喪失・不信',upright:'希望の光が射しています。夢に向かって進んでください。',reversed:'小さな光を見つけることから始めましょう。',symbolism:'裸の女性は純粋さ、水を注ぐ行為は生命力の循環です。',history:'塔の崩壊後の希望と癒しを象徴し、水瓶座と結びつけられます。'},
{id:'m18',numeral:'XVIII',name:'The Moon',nameJp:'月',symbol:'🌕',suit:'major',zodiac:'魚座',element:'水',keywords_up:'幻想・不安・潜在意識',keywords_rev:'真実の顕現・恐怖の克服',upright:'幻想に惑わされず、直感を頼りに進みましょう。',reversed:'霧が晴れ真実が見え始めています。',symbolism:'月光に照らされた道は無意識への旅、犬とオオカミは本能と野性を表します。',history:'ヘカテーやセレネーと関連し、潜在意識の深層を象徴します。'},
{id:'m19',numeral:'XIX',name:'The Sun',nameJp:'太陽',symbol:'☀️',suit:'major',zodiac:'太陽',element:'火',keywords_up:'成功・喜び・活力',keywords_rev:'一時的な暗雲・自信の揺らぎ',upright:'喜びと成功の時期。自信をもって前に進みましょう。',reversed:'太陽は必ず戻ってきます。内なる光を信じましょう。',symbolism:'太陽の下の子供は純粋な喜び、ヒマワリは太陽への信仰です。',history:'アポロンやラーと関連し、意識の光と生命力の最高表現です。'},
{id:'m20',numeral:'XX',name:'Judgement',nameJp:'審判',symbol:'📯',suit:'major',zodiac:'冥王星',element:'火/水',keywords_up:'覚醒・再生・天命',keywords_rev:'自己批判・後悔・決断の先送り',upright:'人生の転機。内なる声に従い生まれ変わりましょう。',reversed:'自分を許し、学びを糧に前を向きましょう。',symbolism:'天使のラッパは最後の審判の呼び声、棺から立ち上がる人々は魂の覚醒です。',history:'キリスト教の最後の審判と結びつき、カルマの清算を象徴します。'},
{id:'m21',numeral:'XXI',name:'The World',nameJp:'世界',symbol:'🌍',suit:'major',zodiac:'土星',element:'地',keywords_up:'完成・達成・統合',keywords_rev:'未完成・停滞・遅延',upright:'大きな周期が完成を迎えます。達成感を味わいましょう。',reversed:'あと一歩。諦めずに歩みを進めましょう。',symbolism:'月桂樹のリースは完成と勝利、四隅の生き物は四大元素です。',history:'タロットの旅の最終到達点。宇宙的な完成と一体感を象徴する最も吉意のカードです。'}
];

// ============================================================
// MINOR ARCANA GENERATOR
// ============================================================
function createMinorArcana(){
const suits=[
{key:'wands',name:'Wands',nameJp:'ワンド',element:'火',zodiac:'牡羊座・獅子座・射手座',
 symbols:['🕯️','🔥','🌋','🏕️','⚔️','🏆','🛡️','⛰️','🌅','🎆','🌾','🐎','🦅','👑']},
{key:'cups',name:'Cups',nameJp:'カップ',element:'水',zodiac:'蟹座・蠍座・魚座',
 symbols:['🏆','💕','🎉','😔','💔','🧒','🌈','🌊','🍷','👨‍👩‍👧‍👦','💝','🐟','🌺','👑']},
{key:'swords',name:'Swords',nameJp:'ソード',element:'風',zodiac:'双子座・天秤座・水瓶座',
 symbols:['⚔️','⚖️','💔','🛏️','🌧️','🚣','🌙','🔒','😰','🗡️','🌬️','🦉','🕊️','👑']},
{key:'pentacles',name:'Pentacles',nameJp:'ペンタクル',element:'地',zodiac:'牡牛座・乙女座・山羊座',
 symbols:['💰','🔄','🏗️','💎','❄️','🎁','🌱','⚒️','🍇','🏠','📚','🐂','🌻','👑']}
];
const ranks=[
{key:'ace',name:'Ace',nameJp:'エース',num:'A'},
{key:'2',name:'Two',nameJp:'2',num:'2'},{key:'3',name:'Three',nameJp:'3',num:'3'},
{key:'4',name:'Four',nameJp:'4',num:'4'},{key:'5',name:'Five',nameJp:'5',num:'5'},
{key:'6',name:'Six',nameJp:'6',num:'6'},{key:'7',name:'Seven',nameJp:'7',num:'7'},
{key:'8',name:'Eight',nameJp:'8',num:'8'},{key:'9',name:'Nine',nameJp:'9',num:'9'},
{key:'10',name:'Ten',nameJp:'10',num:'10'},
{key:'page',name:'Page',nameJp:'ペイジ',num:'P'},{key:'knight',name:'Knight',nameJp:'ナイト',num:'Kn'},
{key:'queen',name:'Queen',nameJp:'クイーン',num:'Q'},{key:'king',name:'King',nameJp:'キング',num:'K'}
];
const M={
wands:[
{u:'新しい情熱・チャンス',r:'遅延・やる気の低下',mu:'新たな情熱やインスピレーションが芽生えています。このエネルギーを大切に育てましょう。',mr:'情熱が空回りしているかもしれません。タイミングを見直しましょう。'},
{u:'計画・決断・世界への一歩',r:'優柔不断・恐れ',mu:'大きなビジョンを持ち、世界に向かって一歩を踏み出す時です。',mr:'計画倒れになっていませんか。恐れを克服し行動に移しましょう。'},
{u:'拡大・先見の明',r:'障害・視野の狭さ',mu:'努力が実り始めています。さらなる成長の機会を探りましょう。',mr:'焦りが判断を曇らせています。長期的な視野を持ちましょう。'},
{u:'祝福・安定・調和',r:'不安定・変化の予兆',mu:'努力が実り、祝福と安定の時期です。この平和を味わいましょう。',mr:'表面的な安定に満足せず、変化の準備を始めましょう。'},
{u:'競争・葛藤・成長',r:'回避・内面の葛藤',mu:'競争や挑戦を通じて成長する時期。ライバルは最良の教師です。',mr:'争いを避けるあまり成長の機会を逃していませんか。'},
{u:'勝利・栄光・自信',r:'傲慢・虚栄',mu:'困難を乗り越え勝利を手にします。自信を持って前進しましょう。',mr:'過信に注意。謙虚さを忘れないでください。'},
{u:'防衛・信念・粘り強さ',r:'圧倒・諦め',mu:'信念を守り抜く強さが必要です。諦めなければ道は開けます。',mr:'一人で背負いすぎていませんか。助けを求めましょう。'},
{u:'迅速・展開・通信',r:'遅延・焦り',mu:'物事が急速に動き始めます。流れに乗りましょう。',mr:'焦りが失敗を招きます。正確さを重視しましょう。'},
{u:'忍耐・回復力・警戒',r:'疲弊・頑固',mu:'試練の中にありますが、あと一歩です。忍耐が報われます。',mr:'休息が必要です。無理をせず回復に努めましょう。'},
{u:'重荷・責任・燃え尽き',r:'解放・委任',mu:'背負いすぎていませんか。本当に必要なものを見極めましょう。',mr:'重荷を降ろし他者に委ねることで楽になれます。'},
{u:'冒険心・探求・メッセージ',r:'未熟・軽率',mu:'新しい冒険への招待。好奇心を持って探求しましょう。',mr:'もう少し準備が必要です。'},
{u:'情熱的行動・冒険・変化',r:'衝動・焦燥',mu:'情熱に突き動かされて行動する時。大胆な変化が良い結果を生みます。',mr:'無計画な行動は逆効果。情熱をコントロールしましょう。'},
{u:'自信・独立・温かさ',r:'自己中心・嫉妬',mu:'自信と温かさで周囲を照らす存在になれます。',mr:'周りへの配慮も大切にしましょう。'},
{u:'リーダーシップ・ビジョン・誠実',r:'独裁・高圧的',mu:'大きなビジョンで周囲を導くリーダーシップが求められています。',mr:'模範を示すリーダーを目指しましょう。'}
],
cups:[
{u:'愛の始まり・感情の開花',r:'感情の抑圧・空虚',mu:'新しい愛や感情的な充足が訪れます。心を開きましょう。',mr:'感情を押し殺していませんか。心に正直になりましょう。'},
{u:'パートナーシップ・調和',r:'不均衡・離別',mu:'大切な人との絆が深まる時。互いを尊重し調和を育みましょう。',mr:'関係のバランスを見直しましょう。'},
{u:'祝福・友情・共同体',r:'過剰・散漫',mu:'友人や仲間との喜びの時間。絆を深めましょう。',mr:'社交に疲れていませんか。自分の時間も大切に。'},
{u:'無関心・停滞・内省',r:'新たな気づき・行動',mu:'本当に求めているものを見つめ直しましょう。',mr:'停滞から抜け出す時。新しい可能性に目を向けましょう。'},
{u:'喪失・悲しみ・後悔',r:'受容・回復',mu:'残されているものに目を向けてください。',mr:'悲しみを乗り越え、前を向きましょう。'},
{u:'懐かしさ・純粋・子供時代',r:'過去への執着',mu:'初心を思い出しましょう。純粋な喜びが心を温めます。',mr:'今ここにある幸せを見つめましょう。'},
{u:'幻想・願望・選択肢',r:'現実直視・明確化',mu:'幻想に惑わされないよう注意。多くの可能性が目の前にあります。',mr:'現実を直視することで本当に大切な選択が見えてきます。'},
{u:'手放し・探求・内なる旅',r:'執着・恐怖',mu:'より深い意味を求めて旅立つ時です。',mr:'変化を恐れて留まっていませんか。'},
{u:'満足・願い事成就・幸福',r:'不満・欲張り',mu:'心からの満足と幸福の時期。感謝を忘れずに。',mr:'今ある幸せを見失っていませんか。'},
{u:'家族の幸福・調和',r:'不和・理想と現実の差',mu:'愛する人々との絆が深まり、穏やかな幸せに包まれます。',mr:'ありのままを受け入れましょう。'},
{u:'感受性・直感・メッセージ',r:'感情的未熟',mu:'繊細な感受性が高まっています。直感を大切にしましょう。',mr:'地に足をつけることも必要です。'},
{u:'ロマンス・想像力・理想',r:'非現実的',mu:'創造力を活かして夢を形にしましょう。',mr:'理想と現実のバランスを取りましょう。'},
{u:'共感・癒し・直感力',r:'感情的操作・依存',mu:'深い共感力と癒しの力が発揮されます。',mr:'自分を守ることも大切です。'},
{u:'感情的成熟・寛大・知恵',r:'感情の抑圧・冷淡',mu:'知恵ある助言者となれます。寛大さを持って接しましょう。',mr:'心を開くことで関係が改善します。'}
],
swords:[
{u:'真実・明晰・突破口',r:'混乱・誤用',mu:'真実を見極める知性が研ぎ澄まされています。明確な判断で道を切り開きましょう。',mr:'鋭い言葉が人を傷つけていませんか。'},
{u:'決断の膠着・バランス',r:'情報開示・決断',mu:'冷静に判断しましょう。感情を一旦横に置いて。',mr:'先延ばしにしていた決断の時です。'},
{u:'心痛・悲嘆・離別',r:'回復・許し',mu:'心に深い痛みを感じる時期ですが、浄化と成長をもたらします。',mr:'心の傷が癒え始めています。前に進みましょう。'},
{u:'休息・回復・瞑想',r:'燃え尽き・活動再開',mu:'心身の回復のため静かな休息を取りましょう。',mr:'そろそろ活動を再開する時です。'},
{u:'争い・敗北',r:'和解・切り替え',mu:'勝ち負けより学びに目を向けましょう。',mr:'和解の道を探る時です。'},
{u:'移行・旅立ち・回復',r:'停滞・未解決',mu:'困難な状況から新たな環境へ移行する時期です。',mr:'根本の問題に向き合いましょう。'},
{u:'策略・計画・慎重さ',r:'自滅・計画失敗',mu:'知恵と戦略を駆使して対処しましょう。',mr:'正攻法で行きましょう。'},
{u:'制限・束縛・無力感',r:'解放・新たな視点',mu:'制限は自ら作り出しているものです。',mr:'心の束縛から解放される時です。'},
{u:'不安・恐怖・悪夢',r:'希望・回復',mu:'多くは杞憂です。深呼吸して客観的に見つめましょう。',mr:'最悪の時期は過ぎました。光が戻ってきます。'},
{u:'終焉・痛み',r:'回復・再起',mu:'痛みを伴う終わりですが、新サイクルの始まりでもあります。',mr:'学びを糧に再起しましょう。'},
{u:'好奇心・新しいアイデア',r:'噂話・軽率',mu:'鋭い知性と好奇心が高まっています。',mr:'言葉の使い方に注意しましょう。'},
{u:'行動力・決断力',r:'無計画・攻撃的',mu:'迷わず突き進みましょう。',mr:'計画を立ててから動きましょう。'},
{u:'知性・独立・厳格',r:'冷酷・孤立',mu:'明確な判断を下しましょう。真実を恐れないで。',mr:'温かさも忘れずに。'},
{u:'知的権威・公正・論理',r:'権威の乱用',mu:'知恵をもって導きましょう。',mr:'力は正しく使ってこそ意味があります。'}
],
pentacles:[
{u:'新しい機会・繁栄の種',r:'機会損失・計画不足',mu:'物質的な豊かさの種が蒔かれました。地道な努力で育てましょう。',mr:'もっと現実的な視点で計画を立てましょう。'},
{u:'バランス・適応・優先順位',r:'不均衡・多忙',mu:'複数の課題をバランスよくこなしましょう。',mr:'本当に大切かを見極めましょう。'},
{u:'技術・協力・職人技',r:'技術不足',mu:'チームワークと専門スキルが成功の鍵です。',mr:'スキルアップに時間を投資しましょう。'},
{u:'安定・保守・蓄財',r:'強欲・執着',mu:'経済的安定を手にしています。築いたものを大切に。',mr:'本当の豊かさとは何かを考えましょう。'},
{u:'困窮・孤立・経済的困難',r:'回復・援助',mu:'必ず助けはあります。一人で抱え込まないで。',mr:'困難な時期を脱しつつあります。'},
{u:'寛大・施し・繁栄の共有',r:'負債・不均衡',mu:'豊かさを分かち合いましょう。寛大さが更なる繁栄を呼びます。',mr:'与える・受け取るのバランスを見直しましょう。'},
{u:'忍耐・長期投資',r:'焦り・不十分',mu:'種を蒔いた努力の成果をじっくり待ちましょう。',mr:'結果を急ぎすぎていませんか。'},
{u:'勤勉・スキル向上',r:'完璧主義',mu:'コツコツと取り組むことで大きな成果が得られます。',mr:'「十分に良い」で進みましょう。'},
{u:'豊穣・独立・贅沢',r:'過度の物質主義',mu:'物質的な成功と独立を手にする時です。',mr:'精神的な充足も大切にしましょう。'},
{u:'富・遺産・家族の繁栄',r:'財政的失敗',mu:'長期にわたる繁栄と絆を築く時です。',mr:'財産に関する問題に早めの対策を。'},
{u:'学び・新しい計画',r:'未熟・計画倒れ',mu:'新しいスキルを学ぶ絶好の機会です。',mr:'一つずつ着実に進めましょう。'},
{u:'実行力・信頼性・着実',r:'停滞・倦怠',mu:'着実に目標に向かっています。信頼性が評価されるでしょう。',mr:'新しいアプローチを試みましょう。'},
{u:'実務能力・豊かさ・安心',r:'仕事と私生活の不均衡',mu:'豊かで安定した環境を築きましょう。',mr:'大切なものを見失っていませんか。'},
{u:'繁栄・達成・実業',r:'権力欲・物質偏重',mu:'ビジネス面で大きな成功の時。知恵と経験を活かしましょう。',mr:'バランスの取れた豊かさを目指しましょう。'}
]};
const cards=[];
for(const suit of suits){const m=M[suit.key];for(let i=0;i<14;i++){const r=ranks[i];
cards.push({id:`${suit.key}_${r.key}`,numeral:r.num,name:`${r.name} of ${suit.name}`,nameJp:`${suit.nameJp}の${r.nameJp}`,
symbol:suit.symbols[i],suit:suit.key,element:suit.element,zodiac:suit.zodiac,
keywords_up:m[i].u,keywords_rev:m[i].r,upright:m[i].mu,reversed:m[i].mr,
symbolism:`${suit.nameJp}のスートは${suit.element}のエレメントに属し、${suit.zodiac}と対応します。`,
history:`小アルカナの${suit.nameJp}は日常における${suit.element}的テーマを扱います。`});}}
return cards;}

const minorArcana=createMinorArcana();
const fullDeck=[...majorArcana,...minorArcana];

// ============================================================
// SVG ICON SYSTEM
// ============================================================
function cardIcon(id, size=48) {
  const s = size;
  const vb = `0 0 48 48`;
  const wrap = (inner, cls='') =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${s}" height="${s}" class="card-icon ${cls}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

  // --- SUIT PIP SHAPES ---
  const suitPip = {
    wands: (cx,cy,sc=1) =>
      `<g transform="translate(${cx},${cy}) scale(${sc})"><line x1="0" y1="-6" x2="0" y2="6"/><circle cx="0" cy="-7.5" r="1.8" fill="currentColor" stroke="none" opacity="0.7"/><line x1="-2" y1="-3" x2="0" y2="-5"/><line x1="2" y1="-3" x2="0" y2="-5"/></g>`,
    cups: (cx,cy,sc=1) =>
      `<g transform="translate(${cx},${cy}) scale(${sc})"><ellipse cx="0" cy="-3" rx="4" ry="3.5"/><line x1="0" y1="0.5" x2="0" y2="4"/><ellipse cx="0" cy="5" rx="3" ry="1.2"/><path d="M4,-1 Q6,0 4,2" fill="none"/></g>`,
    swords: (cx,cy,sc=1) =>
      `<g transform="translate(${cx},${cy}) scale(${sc})"><line x1="0" y1="-8" x2="0" y2="5"/><line x1="-3.5" y1="-2" x2="3.5" y2="-2"/><path d="M-1,-8 L0,-10 L1,-8" fill="currentColor" stroke="none"/></g>`,
    pentacles: (cx,cy,sc=1) =>
      `<g transform="translate(${cx},${cy}) scale(${sc})"><circle cx="0" cy="0" r="6" fill="none"/>${[0,1,2,3,4].map(i=>{const a=-90+i*72;const r=6;const x=Math.cos(a*Math.PI/180)*r;const y=Math.sin(a*Math.PI/180)*r;const j=(i+2)%5;const a2=-90+j*72;const x2=Math.cos(a2*Math.PI/180)*r;const y2=Math.sin(a2*Math.PI/180)*r;return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="1"/>`;}).join('')}</g>`
  };

  // --- PIP LAYOUTS for numbered cards (1-10) ---
  const pipPositions = {
    1: [[24,24]],
    2: [[24,14],[24,34]],
    3: [[24,10],[24,24],[24,38]],
    4: [[16,14],[32,14],[16,34],[32,34]],
    5: [[16,12],[32,12],[24,24],[16,36],[32,36]],
    6: [[16,12],[32,12],[16,24],[32,24],[16,36],[32,36]],
    7: [[16,10],[32,10],[24,20],[16,28],[32,28],[16,40],[32,40]],
    8: [[16,8],[32,8],[16,18],[32,18],[16,28],[32,28],[16,38],[32,38]],
    9: [[16,7],[32,7],[16,16],[32,16],[24,24],[16,32],[32,32],[16,41],[32,41]],
    10:[[16,6],[32,6],[24,13],[16,20],[32,20],[16,28],[32,28],[24,35],[16,42],[32,42]]
  };

  // --- COURT CARD FIGURES ---
  const courtFigure = (suit, rank) => {
    const color = {wands:'#e67e22',cups:'#3498db',swords:'#95a5a6',pentacles:'#27ae60'}[suit]||'currentColor';
    const pip = suitPip[suit](36,8,0.5);
    if (rank==='page') return wrap(`<circle cx="24" cy="15" r="5" /><path d="M24,20 L24,33" /><path d="M18,25 L24,22 L30,25" /><path d="M20,33 L24,42 L28,33" />${pip}`, suit);
    if (rank==='knight') return wrap(`<circle cx="22" cy="13" r="4.5" /><path d="M22,17.5 L22,28" /><path d="M16,22 L22,19 L28,22" /><path d="M28,30 Q34,26 36,32 L30,36 Q28,32 28,30Z" fill="none"/><path d="M36,32 L38,28 L40,30" />${pip}`, suit);
    if (rank==='queen') return wrap(`<circle cx="24" cy="16" r="5" /><path d="M24,21 L24,34" /><path d="M17,24 L24,21 L31,24" /><path d="M18,34 Q24,38 30,34" /><path d="M18,10 L21,6 L24,10 L27,6 L30,10" />${pip}`, suit);
    if (rank==='king') return wrap(`<circle cx="24" cy="16" r="5" /><path d="M24,21 L24,34" /><path d="M17,24 L24,21 L31,24" /><path d="M18,34 Q24,38 30,34" /><rect x="18" y="6" width="12" height="5" rx="1" /><path d="M21,6 L24,2 L27,6" />${pip}`, suit);
    return '';
  };

  // --- MINOR ARCANA ---
  const parts = id.split('_');
  if (parts.length===2) {
    const [suit, rank] = parts;
    if (['page','knight','queen','king'].includes(rank)) return courtFigure(suit, rank);
    const num = rank==='ace'?1:parseInt(rank);
    if (num>=1 && num<=10 && suitPip[suit] && pipPositions[num]) {
      const sc = num<=3?1: num<=6?0.7: 0.55;
      const pips = pipPositions[num].map(([x,y]) => suitPip[suit](x,y,sc)).join('');
      return wrap(pips, suit);
    }
  }

  // --- MAJOR ARCANA ---
  const majorSVGs = {
    m0: // Fool - spiral path, star, cliff
      `<path d="M12,40 Q18,30 24,32 Q30,34 28,24 Q26,16 30,12" fill="none"/>
       <circle cx="30" cy="8" r="3" /><circle cx="30" cy="8" r="1" fill="currentColor"/>
       <path d="M10,42 L16,42" /><path d="M14,38 L14,42" />
       <circle cx="38" cy="16" r="1.5" fill="currentColor" stroke="none" opacity="0.5"/>
       <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.4"/>`,
    m1: // Magician - infinity, wand, table
      `<path d="M18,10 Q24,4 30,10 Q24,16 18,10Z" fill="none"/>
       <line x1="24" y1="18" x2="24" y2="38"/>
       <circle cx="24" cy="16" r="1.5" fill="currentColor" stroke="none"/>
       <line x1="14" y1="38" x2="34" y2="38"/>
       <circle cx="16" cy="42" r="2"/><rect x="21" y="40" width="3" height="4" rx="0.5"/>
       <line x1="30" y1="40" x2="32" y2="44"/><path d="M34,40 L36,42 L34,44"/>`,
    m2: // High Priestess - moon between pillars, veil
      `<rect x="8" y="10" width="5" height="30" rx="2"/>
       <rect x="35" y="10" width="5" height="30" rx="2"/>
       <path d="M13,14 Q24,12 35,14" fill="none" stroke-dasharray="2,2"/>
       <path d="M22,20 Q18,24 22,28 Q28,24 22,20Z" fill="none"/>
       <circle cx="24" cy="8" r="3"/><circle cx="26" cy="8" r="3" fill="var(--bg-deep,#0a0a12)" stroke="none"/>`,
    m3: // Empress - crown, venus symbol, wheat
      `<path d="M18,14 L21,8 L24,12 L27,8 L30,14" fill="none"/>
       <circle cx="24" cy="22" r="6" fill="none"/>
       <line x1="24" y1="28" x2="24" y2="38"/>
       <line x1="20" y1="34" x2="28" y2="34"/>
       <path d="M10,42 Q12,36 14,42 Q16,36 18,42" fill="none"/>
       <path d="M30,42 Q32,36 34,42 Q36,36 38,42" fill="none"/>`,
    m4: // Emperor - throne, ankh scepter
      `<path d="M14,12 L14,40" /><path d="M34,12 L34,40"/>
       <path d="M14,12 L18,8 L30,8 L34,12" fill="none"/>
       <rect x="18" y="18" width="12" height="8" rx="1" fill="none"/>
       <circle cx="24" cy="14" r="3" fill="none"/>
       <line x1="24" y1="17" x2="24" y2="26"/>
       <line x1="21" y1="20" x2="27" y2="20"/>
       <path d="M10,8 L12,4 L14,8" fill="none" stroke-width="1"/>
       <path d="M34,8 L36,4 L38,8" fill="none" stroke-width="1"/>`,
    m5: // Hierophant - triple cross, keys
      `<line x1="24" y1="4" x2="24" y2="38"/>
       <line x1="18" y1="10" x2="30" y2="10"/>
       <line x1="20" y1="18" x2="28" y2="18"/>
       <line x1="22" y1="26" x2="26" y2="26"/>
       <path d="M12,38 Q12,32 16,34" fill="none"/>
       <path d="M36,38 Q36,32 32,34" fill="none"/>
       <circle cx="12" cy="40" r="2.5"/><circle cx="36" cy="40" r="2.5"/>`,
    m6: // Lovers - angel wings, two figures
      `<path d="M18,38 L18,28" /><circle cx="18" cy="25" r="3"/>
       <path d="M30,38 L30,28" /><circle cx="30" cy="25" r="3"/>
       <path d="M24,8 Q16,4 14,12" fill="none"/>
       <path d="M24,8 Q32,4 34,12" fill="none"/>
       <circle cx="24" cy="10" r="2.5"/>
       <path d="M20,18 L24,14 L28,18" fill="none"/>
       <line x1="24" y1="14" x2="24" y2="20" stroke-dasharray="1,2"/>`,
    m7: // Chariot - wheel, star canopy
      `<circle cx="14" cy="36" r="5" fill="none"/>
       <circle cx="34" cy="36" r="5" fill="none"/>
       <line x1="14" y1="31" x2="14" y2="41"/><line x1="9" y1="36" x2="19" y2="36"/>
       <line x1="34" y1="31" x2="34" y2="41"/><line x1="29" y1="36" x2="39" y2="36"/>
       <rect x="12" y="18" width="24" height="14" rx="2" fill="none"/>
       <path d="M12,18 L18,8 L30,8 L36,18" fill="none"/>
       <circle cx="24" cy="6" r="2" fill="currentColor" stroke="none" opacity="0.6"/>`,
    m8: // Strength - lion profile, infinity
      `<path d="M18,10 Q24,4 30,10 Q24,16 18,10Z" fill="none" stroke-width="1"/>
       <path d="M14,28 Q10,22 16,18 Q22,16 26,20 Q30,24 28,30 Q24,36 18,34 Q12,32 14,28Z" fill="none"/>
       <circle cx="20" cy="24" r="1" fill="currentColor" stroke="none"/>
       <path d="M26,18 Q30,14 34,18 Q36,22 32,22" fill="none"/>
       <path d="M34,32 Q36,28 38,32" fill="none"/>`,
    m9: // Hermit - lantern, staff, mountain
      `<line x1="20" y1="16" x2="20" y2="42"/>
       <path d="M16,10 L20,4 L24,10 Z" fill="none"/>
       <circle cx="20" cy="8" r="1.5" fill="currentColor" stroke="none" opacity="0.7"/>
       <path d="M8,44 L24,28 L40,44" fill="none" stroke-width="1" opacity="0.3"/>
       <line x1="24" y1="28" x2="24" y2="20" stroke-dasharray="1,2" opacity="0.3"/>`,
    m10: // Wheel of Fortune - wheel with spokes and symbols
      `<circle cx="24" cy="24" r="14" fill="none"/>
       <circle cx="24" cy="24" r="8" fill="none"/>
       <line x1="24" y1="10" x2="24" y2="38"/>
       <line x1="10" y1="24" x2="38" y2="24"/>
       <line x1="14.1" y1="14.1" x2="33.9" y2="33.9" stroke-width="1" opacity="0.4"/>
       <line x1="33.9" y1="14.1" x2="14.1" y2="33.9" stroke-width="1" opacity="0.4"/>
       <text x="24" y="27" text-anchor="middle" font-size="6" fill="currentColor" stroke="none" font-family="serif">☸</text>`,
    m11: // Justice - scales and sword
      `<line x1="24" y1="6" x2="24" y2="40"/>
       <line x1="10" y1="16" x2="38" y2="16"/>
       <path d="M8,16 L6,26 L14,26 Z" fill="none"/>
       <path d="M40,16 L42,26 L34,26 Z" fill="none"/>
       <line x1="22" y1="6" x2="26" y2="6"/>
       <path d="M22,6 L24,2 L26,6" fill="currentColor" stroke="none"/>`,
    m12: // Hanged Man - inverted figure on cross
      `<line x1="14" y1="6" x2="34" y2="6"/>
       <line x1="24" y1="6" x2="24" y2="16"/>
       <circle cx="24" cy="36" r="4" fill="none"/>
       <path d="M24,16 L24,32" />
       <path d="M24,24 L18,20" /><path d="M24,24 L30,20"/>
       <path d="M20,16 L24,16 L28,12" fill="none"/>`,
    m13: // Death - rose, scythe
      `<path d="M14,14 Q14,6 24,6 Q34,6 34,14 Q34,22 24,26 Q14,22 14,14Z" fill="none"/>
       <circle cx="24" cy="14" r="3" fill="none"/>
       <path d="M20,14 Q24,10 28,14 Q24,18 20,14Z" fill="none" stroke-width="1"/>
       <line x1="24" y1="26" x2="24" y2="42"/>
       <path d="M18,30 Q24,28 30,30" fill="none" stroke-width="1"/>
       <path d="M20,34 Q24,32 28,34" fill="none" stroke-width="1"/>`,
    m14: // Temperance - angel pouring between cups
      `<path d="M18,8 Q12,4 12,10" fill="none"/><path d="M30,8 Q36,4 36,10" fill="none"/>
       <circle cx="24" cy="14" r="4" fill="none"/>
       <path d="M12,24 L16,20 L16,28 Z" fill="none"/>
       <path d="M36,24 L32,20 L32,28 Z" fill="none"/>
       <path d="M16,24 Q24,18 32,24" fill="none" stroke-dasharray="2,2"/>
       <line x1="24" y1="18" x2="24" y2="42"/>
       <path d="M20,36 L24,42 L28,36" fill="none"/>`,
    m15: // Devil - horns, chains
      `<path d="M16,10 L20,4 L24,12 L28,4 L32,10" fill="none"/>
       <circle cx="24" cy="18" r="6" fill="none"/>
       <circle cx="21" cy="16" r="1" fill="currentColor" stroke="none"/>
       <circle cx="27" cy="16" r="1" fill="currentColor" stroke="none"/>
       <path d="M21,21 Q24,24 27,21" fill="none"/>
       <path d="M14,28 Q12,32 14,36 Q12,40 14,44" fill="none" stroke-dasharray="2,1"/>
       <path d="M34,28 Q36,32 34,36 Q36,40 34,44" fill="none" stroke-dasharray="2,1"/>
       <path d="M24,24 L24,34" />`,
    m16: // Tower - tower struck by lightning
      `<rect x="16" y="16" width="16" height="28" rx="1" fill="none"/>
       <path d="M16,16 L20,8 L28,8 L32,16" fill="none"/>
       <path d="M34,4 L28,14 L32,14 L26,24" fill="none" stroke-width="2"/>
       <rect x="20" y="22" width="3" height="4" rx="0.5" fill="none"/>
       <rect x="25" y="22" width="3" height="4" rx="0.5" fill="none"/>
       <circle cx="14" cy="36" r="1.5" fill="currentColor" stroke="none" opacity="0.5"/>
       <circle cx="36" cy="30" r="1.5" fill="currentColor" stroke="none" opacity="0.5"/>`,
    m17: // Star - eight-pointed star, water
      `<polygon points="24,4 26.5,16 38,16 28.5,23 31.5,36 24,28 16.5,36 19.5,23 10,16 21.5,16" fill="none"/>
       <circle cx="24" cy="18" r="2" fill="currentColor" stroke="none" opacity="0.6"/>
       <path d="M8,40 Q16,36 24,40 Q32,44 40,40" fill="none" stroke-width="1" opacity="0.5"/>
       <circle cx="10" cy="8" r="1" fill="currentColor" stroke="none" opacity="0.3"/>
       <circle cx="38" cy="6" r="1" fill="currentColor" stroke="none" opacity="0.3"/>
       <circle cx="6" cy="28" r="0.8" fill="currentColor" stroke="none" opacity="0.3"/>`,
    m18: // Moon - crescent, path, wolves
      `<circle cx="24" cy="12" r="8" fill="none"/>
       <circle cx="28" cy="10" r="7" fill="var(--bg-deep,#0a0a12)" stroke="none"/>
       <path d="M8,44 Q16,34 24,38 Q32,42 40,32" fill="none" stroke-width="1" opacity="0.4"/>
       <path d="M12,36 L10,30 L14,32 L12,28" fill="none" stroke-width="1"/>
       <path d="M36,32 L34,26 L38,28 L36,24" fill="none" stroke-width="1"/>
       <circle cx="18" cy="24" r="1" fill="currentColor" stroke="none" opacity="0.4"/>
       <circle cx="30" cy="22" r="1" fill="currentColor" stroke="none" opacity="0.4"/>`,
    m19: // Sun - radiant sun, sunflower
      `<circle cx="24" cy="20" r="8" fill="none"/>
       <circle cx="24" cy="20" r="3" fill="currentColor" stroke="none" opacity="0.5"/>
       ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{const a=i*30;const x1=24+Math.cos(a*Math.PI/180)*10;const y1=20+Math.sin(a*Math.PI/180)*10;const x2=24+Math.cos(a*Math.PI/180)*14;const y2=20+Math.sin(a*Math.PI/180)*14;return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="1.2"/>`;}).join('')}
       <path d="M16,40 Q20,36 24,40 Q28,36 32,40" fill="none" stroke-width="1" opacity="0.4"/>`,
    m20: // Judgement - trumpet, rising figure
      `<path d="M24,4 L30,14 L18,14 Z" fill="none"/>
       <line x1="24" y1="14" x2="24" y2="22"/>
       <path d="M18,14 Q14,10 16,6" fill="none" stroke-width="1"/>
       <path d="M30,14 Q34,10 32,6" fill="none" stroke-width="1"/>
       <rect x="18" y="32" width="12" height="6" rx="1" fill="none"/>
       <circle cx="24" cy="28" r="3" fill="none"/>
       <path d="M20,32 L24,26 L28,32" fill="none" stroke-width="1"/>
       <path d="M18,38 L20,44" stroke-width="1"/><path d="M30,38 L28,44" stroke-width="1"/>`,
    m21: // World - wreath, dancer
      `<ellipse cx="24" cy="24" rx="14" ry="18" fill="none" stroke-dasharray="3,2"/>
       <circle cx="24" cy="18" r="3" fill="none"/>
       <path d="M24,21 L24,32" /><path d="M20,26 L28,26"/>
       <path d="M20,32 L24,38 L28,32" fill="none"/>
       <circle cx="8" cy="8" r="2" fill="none" stroke-width="1"/>
       <circle cx="40" cy="8" r="2" fill="none" stroke-width="1"/>
       <circle cx="8" cy="40" r="2" fill="none" stroke-width="1"/>
       <circle cx="40" cy="40" r="2" fill="none" stroke-width="1"/>`
  };

  if (majorSVGs[id]) return wrap(majorSVGs[id], 'major');

  return ''; // fallback
}

// Inline-icon helper for text contexts (result titles etc.)
function cardIconInline(id) {
  return cardIcon(id, 20);
}

const spreadLabels={1:['メッセージ'],3:['過去','現在','未来'],5:['テーマ','障害','現状','助言','結果'],
10:['現状','障害','顕在意識','潜在意識','過去','未来','自分自身','環境','希望と恐れ','最終結果']};
let currentSpread=3, drawnCards=[], allFlipped=false;

// Stars
function createStars(){const c=document.getElementById('stars');for(let i=0;i<70;i++){const s=document.createElement('div');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.setProperty('--dur',(2+Math.random()*4)+'s');s.style.setProperty('--max-opacity',0.3+Math.random()*0.7);s.style.animationDelay=Math.random()*3+'s';if(Math.random()>0.7){s.style.width='3px';s.style.height='3px';}c.appendChild(s);}}

// Navigation
function switchPanel(name,btn){document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));document.getElementById('panel-'+name).classList.add('active');btn.classList.add('active');if(name==='daily')showDailyCard();if(name==='gallery')renderGallery('all');}

function setSpread(n){currentSpread=n;document.querySelectorAll('.spread-btn').forEach(b=>b.classList.toggle('active',parseInt(b.dataset.spread)===n));resetReading();}

function resetReading(){drawnCards=[];allFlipped=false;document.getElementById('cardSpread').innerHTML='';const r=document.getElementById('resultSection');r.innerHTML='';r.classList.remove('visible');document.getElementById('drawBtn').disabled=false;const a=document.getElementById('spreadArea');a.className='';if(currentSpread===5)a.className='spread-five';}

function shuffleAndDraw(n){return[...fullDeck].sort(()=>Math.random()-0.5).slice(0,n).map(c=>({...c,isReversed:Math.random()<0.3}));}

function drawCards(){resetReading();drawnCards=shuffleAndDraw(currentSpread);const container=document.getElementById('cardSpread');const labels=spreadLabels[currentSpread];
container.className=currentSpread===10?'celtic-cross-layout':'card-spread';
drawnCards.forEach((card,i)=>{const slot=document.createElement('div');slot.className='card-slot';
const sc=card.suit!=='major'?`suit-${card.suit}`:'';
slot.innerHTML=`<span class="card-label">${labels[i]}</span>
<div class="card-container ${card.isReversed?'reversed':''}" onclick="flipCard(${i})" id="card-${i}">
<div class="card-face card-back"><div class="card-back-design"><span class="card-back-pattern"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="8" y1="24" x2="40" y2="24"/><path d="M14.3,14.3 L33.7,33.7" opacity="0.5"/><path d="M33.7,14.3 L14.3,33.7" opacity="0.5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg></span></div></div>
<div class="card-face card-front ${sc}"><span class="card-numeral">${card.numeral}</span><span class="card-symbol">${cardIcon(card.id)}</span><span class="card-name">${card.name}</span><span class="card-name-jp">${card.nameJp}</span>${card.isReversed?'<span class="reversed-indicator">逆位置</span>':''}</div></div>`;
container.appendChild(slot);setTimeout(()=>slot.classList.add('appear'),i*100+50);});
document.getElementById('drawBtn').disabled=true;}

function flipCard(i){const c=document.getElementById('card-'+i);if(c.classList.contains('flipped'))return;c.classList.add('flipped');
if(document.querySelectorAll('.card-container.flipped').length===drawnCards.length&&!allFlipped){allFlipped=true;setTimeout(showResults,600);}}

function showResults(){const section=document.getElementById('resultSection');const labels=spreadLabels[currentSpread];let html='';
drawnCards.forEach((card,i)=>{const kw=card.isReversed?card.keywords_rev:card.keywords_up;const meaning=card.isReversed?card.reversed:card.upright;
html+=`<div class="result-card"><div class="result-position">${labels[i]}</div><div class="result-title">${cardIconInline(card.id)} ${card.name}</div><div class="result-title-jp">${card.nameJp}</div>${card.isReversed?'<span class="result-reversed">逆位置</span>':''}<div class="result-keywords">${kw}</div><div class="result-meaning">${meaning}</div><span class="result-detail-link" onclick="showCardDetail('${card.id}')">カードの詳細を見る →</span></div>`;});
html+=`<div class="reading-summary"><h3>✦ 総合リーディング ✦</h3><p>${generateSummary()}</p></div><div class="action-row"><button class="reset-btn" onclick="resetReading()">もう一度占う</button><button class="save-btn" onclick="exportImage()">📷 画像を保存</button></div>`;
section.innerHTML=html;section.classList.add('visible');section.scrollIntoView({behavior:'smooth',block:'start'});}

function generateSummary(){
  const q=document.getElementById('questionInput').value.trim();
  const cards=drawnCards;
  const n=cards.length;
  const uprightCount=cards.filter(c=>!c.isReversed).length;
  const ratio=uprightCount/n;
  let s='';

  // Helper: get the first keyword of a card
  function kw(c){ return (c.isReversed ? c.keywords_rev : c.keywords_up).split('・')[0]; }
  // Helper: get full keywords
  function kwFull(c){ return c.isReversed ? c.keywords_rev : c.keywords_up; }
  // Helper: get meaning
  function mean(c){ return c.isReversed ? c.reversed : c.upright; }
  // Helper: element name
  function elemName(c){
    const m={wands:'火',cups:'水',swords:'風',pentacles:'地',major:'霊'};
    return m[c.suit]||'';
  }
  // Helper: detect thematic tension/harmony between two cards
  function relation(a, b){
    const compatMap={火:['火','風'],水:['水','地'],風:['風','火'],地:['地','水'],霊:['火','水','風','地']};
    const eA=elemName(a), eB=elemName(b);
    const compat=(compatMap[eA]||[]).includes(eB)||(compatMap[eB]||[]).includes(eA);
    // Check reversal contrast
    const bothUp=!a.isReversed&&!b.isReversed;
    const bothRev=a.isReversed&&b.isReversed;
    const mixed=a.isReversed!==b.isReversed;
    if(compat&&bothUp) return 'harmony';
    if(!compat&&mixed) return 'tension';
    if(mixed) return 'transition';
    return 'flow';
  }

  if(q) s+=`「${q}」というご質問に対して、カードは次のように語りかけています。\n\n`;

  // === SINGLE CARD ===
  if(n===1){
    s+=mean(cards[0]);
    return s;
  }

  // === OVERALL ENERGY ===
  if(ratio>=0.8) s+='全体に力強い肯定のエネルギーが流れており、追い風の中にあることを示しています。';
  else if(ratio>=0.6) s+='おおむね前向きな流れですが、一部に注意を促すサインも見られます。';
  else if(ratio>=0.4) s+='光と影が交錯するリーディングです。状況を多角的に捉えることが重要です。';
  else if(ratio>=0.2) s+='試練や内省を促すカードが多く現れています。今は立ち止まって見つめ直す時期かもしれません。';
  else s+='深い内省と根本的な見直しが求められていることをカードは示しています。';

  // Dominant suit analysis
  const suitCounts={};
  cards.forEach(c=>{if(c.suit!=='major')suitCounts[c.suit]=(suitCounts[c.suit]||0)+1;});
  const majors=cards.filter(c=>c.suit==='major');
  const domSuit=Object.entries(suitCounts).sort((a,b)=>b[1]-a[1])[0];
  if(majors.length>n*0.5){
    s+='大アルカナが多く出現しており、日常の出来事を超えた人生の大きなテーマが関わっています。運命的な力が働いている時期です。';
  } else if(domSuit&&domSuit[1]>=Math.ceil(n*0.4)){
    const suitInsight={
      wands:'ワンド（火）が多く、情熱・意欲・行動力がこのリーディングの核心です。やりたいこと、エネルギーの使い方が問われています。',
      cups:'カップ（水）が多く、感情・人間関係・心の充足がこのリーディングの中心テーマです。',
      swords:'ソード（風）が多く、思考・判断・コミュニケーションに関するテーマが色濃く出ています。',
      pentacles:'ペンタクル（地）が多く、仕事・経済・現実的な安定に関するテーマが中心です。'
    };
    s+=suitInsight[domSuit[0]];
  }

  // === THREE CARD: Past → Present → Future narrative ===
  if(n===3){
    const [past,present,future]=cards;
    const pastKw=kw(past), presentKw=kw(present), futureKw=kw(future);
    const rel1=relation(past,present), rel2=relation(present,future);

    // Past → Present transition
    if(rel1==='harmony'){
      s+=`過去に経験した「${pastKw}」のエネルギーは、現在の「${presentKw}」へと自然に受け継がれています。過去の蓄積が今を支えている状態です。`;
    } else if(rel1==='tension'){
      s+=`過去の「${pastKw}」と現在の「${presentKw}」の間にはエネルギーの転換が見られます。以前とは異なる課題に向き合っている最中です。`;
    } else if(rel1==='transition'){
      s+=`過去の「${pastKw}」から現在の「${presentKw}」へ、状況が大きく変化しつつあります。その変化の渦中にいることを自覚しましょう。`;
    } else {
      s+=`過去の「${pastKw}」のテーマは、形を変えて現在の「${presentKw}」として続いています。根底にある流れを意識してください。`;
    }

    // Present → Future transition
    if(!future.isReversed){
      s+=`この先、「${futureKw}」というエネルギーが開かれようとしています。`;
      if(rel2==='harmony') s+=`現在の延長線上に自然な展開が待っており、流れに乗ることが大切です。`;
      else if(rel2==='tension') s+=`ただし、今の状態からの転換が求められます。異なるアプローチが鍵になるでしょう。`;
      else s+=`今の取り組みが徐々に実を結ぶ方向に進んでいます。`;
    } else {
      s+=`未来のポジションに逆位置の「${futureKw}」が現れており、${kw(future)}の課題を乗り越える必要があることを示唆しています。`;
      s+=`今のうちに意識的な対処を始めることで、困難を軽減できるでしょう。`;
    }
  }

  // === FIVE CARD CROSS: Theme / Obstacle / Current / Advice / Outcome ===
  if(n===5){
    const [theme,obstacle,current,advice,outcome]=cards;

    s+=`このリーディングの核心は「${kw(theme)}」です。`;
    if(!theme.isReversed) s+=`${kwFull(theme)}のエネルギーがあなたの状況全体を包んでいます。`;
    else s+=`${kwFull(theme)}というテーマが裏返しに現れており、それ自体が問い直しの対象です。`;

    // Obstacle analysis
    s+=`それに対して立ちはだかるのが「${kw(obstacle)}」という壁です。`;
    if(obstacle.isReversed) s+=`ただしこの障害は既に弱まりつつあり、乗り越えられる段階に来ています。`;
    else s+=`この障害は現在も強い影響力を持っており、正面から向き合う必要があります。`;

    // Current state
    s+=`今のあなたの状態を表す「${kw(current)}」のカードは、${mean(current).slice(0, mean(current).indexOf('。')+1)}と示しています。`;

    // Advice → Outcome connection
    const advKw=kw(advice), outKw=kw(outcome);
    s+=`カードが勧める行動指針は「${advKw}」。`;
    if(!advice.isReversed) s+=`${kwFull(advice)}の姿勢を取り入れることが、`;
    else s+=`${kwFull(advice)}の状態に陥らないよう意識することが、`;

    if(!outcome.isReversed) s+=`「${outKw}」という望ましい結果へとつながるでしょう。`;
    else s+=`困難な結果を回避する助けになるでしょう。結果のカードには注意信号が出ているため、助言を真剣に受け止めてください。`;
  }

  // === CELTIC CROSS (10 cards) ===
  if(n===10){
    const [current,cross,conscious,subcon,past,future,self,env,hopes,final]=cards;

    // Core dynamic: current + cross
    s+=`あなたの現在の核心は「${kw(current)}」であり、それを「${kw(cross)}」が横切っています。`;
    if(relation(current,cross)==='tension'){
      s+=`この二つのエネルギーは相反しており、内なる葛藤や外部からの試練を表しています。`;
    } else {
      s+=`この二つは互いを補い合い、課題の中にも成長のチャンスがあることを示しています。`;
    }

    // Conscious vs Subconscious
    s+=`意識の上では「${kw(conscious)}」を目指していますが、心の奥底には「${kw(subcon)}」というテーマが横たわっています。`;
    if(conscious.isReversed!==subcon.isReversed){
      s+=`表の意識と深層心理の間にズレがあり、自分の本音と向き合うことが求められています。`;
    } else {
      s+=`意識と無意識の方向性は一致しており、内面的な一貫性があります。`;
    }

    // Past → Future arc
    s+=`過去の「${kw(past)}」の経験を経て、近い未来には「${kw(future)}」の展開が見えています。`;
    if(!future.isReversed) s+=`この流れは前向きな方向に進んでいます。`;
    else s+=`ただし未来のカードには注意が必要であり、過去の教訓を活かすことが重要です。`;

    // Self vs Environment
    const selfKw=kw(self), envKw=kw(env);
    if(relation(self,env)==='tension'){
      s+=`自分自身の内的状態（${selfKw}）と周囲の環境（${envKw}）の間に温度差があり、外部との調整が必要です。`;
    } else {
      s+=`自分自身（${selfKw}）と周囲（${envKw}）のエネルギーは調和しており、環境からのサポートが得られる状態です。`;
    }

    // Hopes/Fears → Final Outcome
    s+=`あなたの心の中には「${kw(hopes)}」への${hopes.isReversed?'恐れ':'希望'}があります。`;
    s+=`最終結果として現れた「${kw(final)}」のカードは、`;
    if(!final.isReversed){
      s+=`${kwFull(final)}のエネルギーが最終的に勝ることを示しており、全体的に建設的な方向へ向かっています。`;
    } else {
      s+=`${kwFull(final)}という課題が待ち受けていることを示しています。しかしこれは警告であり、今からの行動次第で結末は変わり得ます。`;
    }
    s+=`特に「${kw(cross)}」の障害への対処と「${kw(self)}」という自分の姿勢が、最終結果を左右する鍵となるでしょう。`;
  }

  return s;
}

// Yes/No
function drawYesNo(){const q=document.getElementById('yesnoInput').value.trim();const card=shuffleAndDraw(1)[0];
const yesIds=['m0','m1','m3','m6','m8','m10','m14','m17','m19','m21'];const noIds=['m12','m13','m15','m16','m18'];
let answer,cls,jp;
if(card.isReversed){if(yesIds.includes(card.id)){answer='Maybe';cls='maybe';jp='どちらとも言えない';}else{answer='No';cls='no';jp='いいえ';}}
else{if(noIds.includes(card.id)){answer='No';cls='no';jp='いいえ';}else if(yesIds.includes(card.id)){answer='Yes';cls='yes';jp='はい';}else{answer='Maybe';cls='maybe';jp='どちらとも言えない';}}
const meaning=card.isReversed?card.reversed:card.upright;
document.getElementById('yesnoResult').innerHTML=`<div class="yesno-result"><div style="margin-bottom:12px;display:flex;justify-content:center">${cardIcon(card.id,64)}</div><div style="font-family:'Cinzel',serif;font-size:0.9rem;color:var(--gold-light)">${card.name}</div><div style="font-size:0.95rem;margin-bottom:4px">${card.nameJp} ${card.isReversed?'（逆位置）':''}</div><div class="yesno-answer ${cls}">${answer}</div><div style="font-size:1rem;margin-bottom:16px;color:var(--text-light)">${jp}</div><div class="yesno-detail">${q?`「${q}」に対する答えは<strong>${jp}</strong>です。`:''} ${meaning}</div><span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:16px">カードの詳細を見る →</span></div>`;}

// Daily
function showDailyCard(){const today=new Date().toISOString().slice(0,10);let seed=0;for(let i=0;i<today.length;i++)seed=((seed<<5)-seed)+today.charCodeAt(i);seed=Math.abs(seed);
const card={...fullDeck[seed%fullDeck.length],isReversed:(seed%7)<2};const meaning=card.isReversed?card.reversed:card.upright;const kw=card.isReversed?card.keywords_rev:card.keywords_up;
const sc=card.suit!=='major'?`suit-${card.suit}`:'';
const ds=new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'long',day:'numeric',weekday:'long'});
document.getElementById('dailyDisplay').innerHTML=`<div class="daily-date">${ds}</div><div style="margin:0 auto 20px;width:fit-content"><div class="card-container flipped ${card.isReversed?'reversed':''}" style="width:160px;cursor:default"><div class="card-face card-back"><div class="card-back-design"><span class="card-back-pattern"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="8" y1="24" x2="40" y2="24"/><path d="M14.3,14.3 L33.7,33.7" opacity="0.5"/><path d="M33.7,14.3 L14.3,33.7" opacity="0.5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg></span></div></div><div class="card-face card-front ${sc}"><span class="card-numeral">${card.numeral}</span><span class="card-symbol">${cardIcon(card.id)}</span><span class="card-name">${card.name}</span><span class="card-name-jp">${card.nameJp}</span>${card.isReversed?'<span class="reversed-indicator">逆位置</span>':''}</div></div></div><div class="daily-message"><h4>✦ 今日のメッセージ ✦</h4><p style="font-style:italic;color:var(--gold);margin-bottom:10px">${kw}</p><p>${meaning}</p><p style="margin-top:14px;font-size:0.85rem;color:var(--text-dim)">今日一日、このカードのエネルギーを意識して過ごしてみてください。</p><span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:12px">カードの詳細を見る →</span></div>`;}

// Gallery
function renderGallery(filter){const grid=document.getElementById('galleryGrid');let cards=filter==='all'?fullDeck:fullDeck.filter(c=>c.suit===filter);
grid.innerHTML=cards.map(c=>`<div class="gallery-item suit-${c.suit}" onclick="showCardDetail('${c.id}')"><span class="gi-symbol">${cardIcon(c.id,36)}</span><span class="gi-name">${c.name}</span><span class="gi-name-jp">${c.nameJp}</span></div>`).join('');}
function filterGallery(f,btn){document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderGallery(f);}

// Modal
function showCardDetail(id){const card=fullDeck.find(c=>c.id===id);if(!card)return;
document.getElementById('modalContent').innerHTML=`<button class="modal-close" onclick="closeModal()">&times;</button><div class="modal-card-header"><span class="modal-symbol">${cardIcon(card.id,80)}</span><div class="modal-name">${card.name}</div><div class="modal-name-jp">${card.nameJp}</div></div><div class="modal-meta-grid"><div class="modal-meta-item"><div class="modal-meta-label">エレメント</div><div class="modal-meta-value">${card.element}</div></div><div class="modal-meta-item"><div class="modal-meta-label">対応星座</div><div class="modal-meta-value">${card.zodiac}</div></div></div><div class="modal-section" style="margin-top:20px"><h4>正位置のキーワード</h4><p>${card.keywords_up}</p></div><div class="modal-section"><h4>正位置の意味</h4><p>${card.upright}</p></div><div class="modal-section"><h4>逆位置のキーワード</h4><p>${card.keywords_rev}</p></div><div class="modal-section"><h4>逆位置の意味</h4><p>${card.reversed}</p></div><div class="modal-section"><h4>象徴と図像</h4><p>${card.symbolism}</p></div><div class="modal-section"><h4>歴史と伝統</h4><p>${card.history}</p></div>`;
document.getElementById('cardModal').classList.add('active');document.body.style.overflow='hidden';}
function closeModal(){document.getElementById('cardModal').classList.remove('active');document.body.style.overflow='';}
document.getElementById('cardModal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal();});

// Export
function exportImage(){const canvas=document.getElementById('exportCanvas');const ctx=canvas.getContext('2d');const W=800,pad=40,lineH=22;
const labels=spreadLabels[currentSpread];let totalH=200;drawnCards.forEach(()=>{totalH+=140;});totalH+=200;
canvas.width=W;canvas.height=totalH;
ctx.fillStyle='#0a0a12';ctx.fillRect(0,0,W,totalH);
const g=ctx.createLinearGradient(0,0,W,totalH);g.addColorStop(0,'rgba(42,26,78,0.3)');g.addColorStop(1,'rgba(10,10,18,1)');ctx.fillStyle=g;ctx.fillRect(0,0,W,totalH);
ctx.fillStyle='#c9a84c';ctx.font='bold 28px serif';ctx.textAlign='center';ctx.fillText('✦  Tarot Reading  ✦',W/2,50);
const q=document.getElementById('questionInput').value.trim();if(q){ctx.font='14px serif';ctx.fillStyle='#8a8298';ctx.fillText(`「${q}」`,W/2,75);}
ctx.font='12px serif';ctx.fillStyle='#8a8298';ctx.fillText(new Date().toLocaleDateString('ja-JP'),W/2,q?95:75);
let y=q?120:100;ctx.textAlign='left';ctx.strokeStyle='rgba(201,168,76,0.3)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W-pad,y);ctx.stroke();y+=20;
drawnCards.forEach((card,i)=>{const kw=card.isReversed?card.keywords_rev:card.keywords_up;const meaning=card.isReversed?card.reversed:card.upright;
ctx.fillStyle='#c9a84c';ctx.font='bold 11px sans-serif';ctx.fillText(labels[i].toUpperCase(),pad,y);y+=18;
ctx.fillStyle='#e8d48b';ctx.font='bold 16px serif';ctx.fillText(`${card.symbol}  ${card.nameJp}（${card.name}）${card.isReversed?' — 逆位置':''}`,pad,y);y+=20;
ctx.fillStyle='#c9a84c';ctx.font='italic 12px serif';ctx.fillText(kw,pad,y);y+=18;
ctx.fillStyle='#e8e0d0';ctx.font='13px serif';const maxW=W-pad*2;let line='';
for(const ch of meaning){const t=line+ch;if(ctx.measureText(t).width>maxW){ctx.fillText(line,pad,y);y+=lineH;line=ch;}else line=t;}
if(line){ctx.fillText(line,pad,y);y+=lineH;}y+=16;
ctx.strokeStyle='rgba(201,168,76,0.15)';ctx.beginPath();ctx.moveTo(pad,y-6);ctx.lineTo(W-pad,y-6);ctx.stroke();});
y+=10;ctx.fillStyle='#8a8298';ctx.font='11px serif';ctx.textAlign='center';ctx.fillText('✦ Tarot Reading ✦',W/2,y);
const link=document.createElement('a');link.download=`tarot_${new Date().toISOString().slice(0,10)}.png`;link.href=canvas.toDataURL('image/png');link.click();}

// ============================================================
// ASTROLOGY ENGINE
// ============================================================
const zodiacSigns = [
  { name:'牡羊座', nameEn:'Aries', symbol:'♈', element:'火', elementEn:'fire', modality:'活動宮',
    ruler:'火星', rulerSymbol:'♂', startM:3, startD:21, endM:4, endD:19,
    trait:'行動力と情熱に溢れ、新しいことを切り開く先駆者です。',
    tarotCard:'m4', // The Emperor
    compatElements:['火','風'], advice:'直感を信じて大胆に行動しましょう。ただし衝動を制御する力も大切です。' },
  { name:'牡牛座', nameEn:'Taurus', symbol:'♉', element:'地', elementEn:'earth', modality:'不動宮',
    ruler:'金星', rulerSymbol:'♀', startM:4, startD:20, endM:5, endD:20,
    trait:'安定と美を愛し、着実に物事を積み上げる力を持っています。',
    tarotCard:'m5', compatElements:['地','水'], advice:'五感を大切にし、地に足のついた判断を心がけましょう。' },
  { name:'双子座', nameEn:'Gemini', symbol:'♊', element:'風', elementEn:'air', modality:'柔軟宮',
    ruler:'水星', rulerSymbol:'☿', startM:5, startD:21, endM:6, endD:21,
    trait:'知的好奇心に溢れ、コミュニケーション能力に優れています。',
    tarotCard:'m6', compatElements:['風','火'], advice:'多方面への興味を活かしつつ、一つのことに集中する時間も大切にしましょう。' },
  { name:'蟹座', nameEn:'Cancer', symbol:'♋', element:'水', elementEn:'water', modality:'活動宮',
    ruler:'月', rulerSymbol:'☽', startM:6, startD:22, endM:7, endD:22,
    trait:'深い感受性と共感力を持ち、大切な人を守る力があります。',
    tarotCard:'m7', compatElements:['水','地'], advice:'感情を大切にしつつ、自分自身を守る境界線も意識しましょう。' },
  { name:'獅子座', nameEn:'Leo', symbol:'♌', element:'火', elementEn:'fire', modality:'不動宮',
    ruler:'太陽', rulerSymbol:'☉', startM:7, startD:23, endM:8, endD:22,
    trait:'創造力と自信に満ち、周囲を照らすカリスマ性があります。',
    tarotCard:'m8', compatElements:['火','風'], advice:'自信を発揮しながらも、謙虚さと他者への感謝を忘れずに。' },
  { name:'乙女座', nameEn:'Virgo', symbol:'♍', element:'地', elementEn:'earth', modality:'柔軟宮',
    ruler:'水星', rulerSymbol:'☿', startM:8, startD:23, endM:9, endD:22,
    trait:'緻密な分析力と奉仕の精神を持つ完璧主義者です。',
    tarotCard:'m9', compatElements:['地','水'], advice:'細部への目配りは長所ですが、完璧を求めすぎないようにしましょう。' },
  { name:'天秤座', nameEn:'Libra', symbol:'♎', element:'風', elementEn:'air', modality:'活動宮',
    ruler:'金星', rulerSymbol:'♀', startM:9, startD:23, endM:10, endD:23,
    trait:'調和と美を追求し、公正な判断力を持っています。',
    tarotCard:'m11', compatElements:['風','火'], advice:'バランスを大切にしつつ、時には自分の意見を主張する勇気も持ちましょう。' },
  { name:'蠍座', nameEn:'Scorpio', symbol:'♏', element:'水', elementEn:'water', modality:'不動宮',
    ruler:'冥王星', rulerSymbol:'♇', startM:10, startD:24, endM:11, endD:22,
    trait:'深い洞察力と変容の力を持ち、物事の本質を見抜きます。',
    tarotCard:'m13', compatElements:['水','地'], advice:'深い感情を力に変え、過去を手放し変容を受け入れましょう。' },
  { name:'射手座', nameEn:'Sagittarius', symbol:'♐', element:'火', elementEn:'fire', modality:'柔軟宮',
    ruler:'木星', rulerSymbol:'♃', startM:11, startD:23, endM:12, endD:21,
    trait:'冒険心と哲学的な探求心に溢れた楽観主義者です。',
    tarotCard:'m14', compatElements:['火','風'], advice:'広い視野を持ち冒険を楽しみつつ、地に足をつけることも意識しましょう。' },
  { name:'山羊座', nameEn:'Capricorn', symbol:'♑', element:'地', elementEn:'earth', modality:'活動宮',
    ruler:'土星', rulerSymbol:'♄', startM:12, startD:22, endM:1, endD:19,
    trait:'忍耐力と責任感に優れ、長期的な目標を達成する力があります。',
    tarotCard:'m15', compatElements:['地','水'], advice:'着実な計画を進めつつ、時には楽しむことも自分に許しましょう。' },
  { name:'水瓶座', nameEn:'Aquarius', symbol:'♒', element:'風', elementEn:'air', modality:'不動宮',
    ruler:'天王星', rulerSymbol:'⛢', startM:1, startD:20, endM:2, endD:18,
    trait:'独創的で革新的な思考を持ち、人道的な理想を追求します。',
    tarotCard:'m17', compatElements:['風','火'], advice:'独自の視点を大切にしつつ、周囲との協調も意識しましょう。' },
  { name:'魚座', nameEn:'Pisces', symbol:'♓', element:'水', elementEn:'water', modality:'柔軟宮',
    ruler:'海王星', rulerSymbol:'♆', startM:2, startD:19, endM:3, endD:20,
    trait:'豊かな想像力と深い共感力を持つ直感の人です。',
    tarotCard:'m18', compatElements:['水','地'], advice:'直感を信じつつ、現実との接点を忘れないようにしましょう。' }
];

// Simplified planetary transits based on month/day of year
const transitThemes = [
  { month:1, planet:'土星', theme:'構造と忍耐', advice:'基盤を固め、長期的な計画に集中する時期です。' },
  { month:2, planet:'天王星', theme:'変革と解放', advice:'古い枠組みを壊し、新しい可能性を探る時期です。' },
  { month:3, planet:'海王星', theme:'直感と想像力', advice:'創造的なインスピレーションが高まる時期。直感を信じましょう。' },
  { month:4, planet:'火星', theme:'行動と情熱', advice:'エネルギーが高まり、新しいことを始めるのに適した時期です。' },
  { month:5, planet:'金星', theme:'愛と美', advice:'人間関係と創造的な活動に恵まれた時期です。' },
  { month:6, planet:'水星', theme:'知性とコミュニケーション', advice:'学びや対話を通じて成長する時期です。' },
  { month:7, planet:'月', theme:'感情と直感', advice:'内面の声に耳を傾け、感情を大切にする時期です。' },
  { month:8, planet:'太陽', theme:'自己表現と活力', advice:'自信を持って自分を表現し、輝く時期です。' },
  { month:9, planet:'水星', theme:'分析と調整', advice:'細部を見直し、計画を洗練させる時期です。' },
  { month:10, planet:'金星', theme:'調和とパートナーシップ', advice:'人間関係のバランスを整え、美を追求する時期です。' },
  { month:11, planet:'冥王星', theme:'変容と再生', advice:'深層心理と向き合い、根本的な変化を受け入れる時期です。' },
  { month:12, planet:'木星', theme:'拡大と幸運', advice:'視野を広げ、成長のチャンスを掴む時期です。' }
];

function getZodiacSign(month, day) {
  for (const sign of zodiacSigns) {
    if (sign.startM <= sign.endM) {
      if ((month === sign.startM && day >= sign.startD) || (month === sign.endM && day <= sign.endD) ||
          (month > sign.startM && month < sign.endM)) return sign;
    } else {
      if ((month === sign.startM && day >= sign.startD) || (month === sign.endM && day <= sign.endD) ||
          month > sign.startM || month < sign.endM) return sign;
    }
  }
  return zodiacSigns[9]; // Capricorn fallback
}

function getCurrentTransit() {
  const now = new Date();
  const m = now.getMonth(); // 0-indexed
  return transitThemes[m];
}

// Day of year numerology (simplified lunar phase)
function getLunarPhase(date) {
  const known = new Date(2000, 0, 6); // known new moon
  const diff = (date - known) / (1000*60*60*24);
  const cycle = 29.53059;
  const phase = ((diff % cycle) + cycle) % cycle;
  if (phase < 1.85) return { name:'新月', symbol:'🌑', meaning:'新しい始まりの時。意図を設定し、種を蒔きましょう。' };
  if (phase < 7.38) return { name:'三日月〜上弦', symbol:'🌒', meaning:'成長と行動の時。計画を実行に移しましょう。' };
  if (phase < 11.07) return { name:'上弦の月', symbol:'🌓', meaning:'挑戦と調整の時。障害を乗り越える力があります。' };
  if (phase < 14.76) return { name:'十三夜〜満月', symbol:'🌔', meaning:'実りが近づいています。期待を持って待ちましょう。' };
  if (phase < 16.61) return { name:'満月', symbol:'🌕', meaning:'成就と啓示の時。感情が高まり、真実が明らかになります。' };
  if (phase < 22.14) return { name:'十八夜〜下弦', symbol:'🌖', meaning:'感謝と共有の時。得たものを分かち合いましょう。' };
  if (phase < 25.83) return { name:'下弦の月', symbol:'🌗', meaning:'手放しと浄化の時。不要なものを整理しましょう。' };
  return { name:'二十六夜〜闇夜', symbol:'🌘', meaning:'内省と休息の時。次の周期に備えましょう。' };
}

function getAstroProfile() {
  const bd = document.getElementById('birthDate').value;
  if (!bd) return null;
  const [y, m, d] = bd.split('-').map(Number);
  const sign = getZodiacSign(m, d);
  const transit = getCurrentTransit();
  const lunar = getLunarPhase(new Date());
  return { sign, transit, lunar, birthYear: y, birthMonth: m, birthDay: d };
}

function onBirthDateChange() {
  const profile = getAstroProfile();
  const badge = document.getElementById('astroBadge');
  if (!profile) { badge.style.display = 'none'; return; }
  badge.style.display = 'inline-flex';
  badge.innerHTML = `${profile.sign.symbol} ${profile.sign.name}（${profile.sign.nameEn}）`;
  // Sync to other panels
  document.querySelectorAll('.sync-birth').forEach(inp => { inp.value = document.getElementById('birthDate').value; });
  document.querySelectorAll('.astro-badge-sync').forEach(b => { b.style.display = 'inline-flex'; b.innerHTML = badge.innerHTML; });
}
function syncBirthDate(el) {
  document.getElementById('birthDate').value = el.value;
  onBirthDateChange();
}

// Element compatibility
function getElementCompatibility(signElement, cardElements) {
  const elementMap = { 'wands':'火', 'cups':'水', 'swords':'風', 'pentacles':'地' };
  const compatMap = { '火':['火','風'], '水':['水','地'], '風':['風','火'], '地':['地','水'] };
  const compat = compatMap[signElement] || [];
  let harmony = 0, tension = 0;
  for (const ce of cardElements) {
    const mapped = elementMap[ce] || ce;
    if (compat.includes(mapped)) harmony++;
    else tension++;
  }
  return { harmony, tension, total: cardElements.length };
}

function generateAstroInsight(profile, cards) {
  if (!profile) return '';
  const sign = profile.sign;
  const transit = profile.transit;
  const lunar = profile.lunar;

  // Collect card elements
  const cardElements = cards.filter(c => c.suit !== 'major').map(c => c.suit);
  const compat = getElementCompatibility(sign.element, cardElements);

  let s = '';
  s += `<div class="astro-insight">`;
  s += `<h3>✦ 占星術的リーディング ✦</h3>`;

  // Profile summary
  s += `<div class="astro-grid" style="margin-bottom:16px">`;
  s += `<div class="astro-item"><div class="astro-item-icon">${sign.symbol}</div><div class="astro-item-label">太陽星座</div><div class="astro-item-value">${sign.name}</div></div>`;
  s += `<div class="astro-item"><div class="astro-item-icon">${sign.rulerSymbol}</div><div class="astro-item-label">支配星</div><div class="astro-item-value">${sign.ruler}</div></div>`;
  s += `<div class="astro-item"><div class="astro-item-icon">${{火:'🔥',水:'💧',風:'🌬️',地:'🌿'}[sign.element]}</div><div class="astro-item-label">エレメント</div><div class="astro-item-value">${sign.element}</div></div>`;
  s += `<div class="astro-item"><div class="astro-item-icon">${lunar.symbol}</div><div class="astro-item-label">月相</div><div class="astro-item-value">${lunar.name}</div></div>`;
  s += `</div>`;

  // Sign trait
  s += `<p>${sign.trait}</p>`;

  // Element harmony with cards
  if (cardElements.length > 0) {
    const elementNames = { wands:'火（ワンド）', cups:'水（カップ）', swords:'風（ソード）', pentacles:'地（ペンタクル）' };
    s += `<div style="margin-top:14px">`;
    if (compat.harmony > compat.tension) {
      s += `<p>今回のリーディングでは、あなたの${sign.element}のエレメントと調和するカードが多く出ています。自然な流れに乗れる時期です。`;
    } else if (compat.tension > compat.harmony) {
      s += `<p>あなたの${sign.element}のエレメントとは異なるエネルギーのカードが多く出ており、新たな視点や挑戦を示唆しています。`;
    } else {
      s += `<p>エレメントの調和と緊張がバランスよく表れており、成長のための適度な刺激がある状態です。`;
    }
    s += `</p></div>`;
  }

  // Major Arcana zodiac connections
  const majorCards = cards.filter(c => c.suit === 'major');
  const linkedCard = majorCards.find(c => c.id === sign.tarotCard);
  if (linkedCard) {
    s += `<p style="margin-top:10px">特筆すべきことに、あなたの星座（${sign.name}）と直接関連する<strong>${linkedCard.nameJp}</strong>のカードが出現しています。これは星々があなたに特別なメッセージを送っているサインです。</p>`;
  }

  // Transit influence
  s += `<p style="margin-top:10px">現在の天体の動きとして、<strong>${transit.planet}</strong>の影響が強まっており、「${transit.theme}」のエネルギーが流れています。${transit.advice}</p>`;

  // Lunar phase
  s += `<p style="margin-top:10px">${lunar.symbol} 今日の月相は<strong>${lunar.name}</strong>。${lunar.meaning}</p>`;

  // Personal advice
  s += `<p style="margin-top:10px">${sign.symbol} ${sign.name}のあなたへ：${sign.advice}</p>`;

  s += `<p class="transit-note">※ 占星術的解釈は太陽星座に基づく一般的なものです</p>`;
  s += `</div>`;
  return s;
}

// Override showResults to include astrology
const _origShowResults = showResults;
showResults = function() {
  const section=document.getElementById('resultSection');const labels=spreadLabels[currentSpread];let html='';
  drawnCards.forEach((card,i)=>{const kw=card.isReversed?card.keywords_rev:card.keywords_up;const meaning=card.isReversed?card.reversed:card.upright;
  html+=`<div class="result-card"><div class="result-position">${labels[i]}</div><div class="result-title">${cardIconInline(card.id)} ${card.name}</div><div class="result-title-jp">${card.nameJp}</div>${card.isReversed?'<span class="result-reversed">逆位置</span>':''}<div class="result-keywords">${kw}</div><div class="result-meaning">${meaning}</div><span class="result-detail-link" onclick="showCardDetail('${card.id}')">カードの詳細を見る →</span></div>`;});
  html+=`<div class="reading-summary"><h3>✦ 総合リーディング ✦</h3><p>${generateSummary()}</p></div>`;

  // Add astrology section if birth date provided
  const profile = getAstroProfile();
  if (profile) html += generateAstroInsight(profile, drawnCards);

  html+=`<div class="action-row"><button class="reset-btn" onclick="resetReading()">もう一度占う</button><button class="save-btn" onclick="exportImage()">📷 画像を保存</button></div>`;
  section.innerHTML=html;section.classList.add('visible');section.scrollIntoView({behavior:'smooth',block:'start'});
};

// Override showDailyCard to include astrology
const _origShowDaily = showDailyCard;
showDailyCard = function() {
  const today=new Date().toISOString().slice(0,10);let seed=0;for(let i=0;i<today.length;i++)seed=((seed<<5)-seed)+today.charCodeAt(i);seed=Math.abs(seed);
  const card={...fullDeck[seed%fullDeck.length],isReversed:(seed%7)<2};const meaning=card.isReversed?card.reversed:card.upright;const kw=card.isReversed?card.keywords_rev:card.keywords_up;
  const sc=card.suit!=='major'?`suit-${card.suit}`:'';
  const ds=new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'long',day:'numeric',weekday:'long'});
  const lunar = getLunarPhase(new Date());
  const transit = getCurrentTransit();

  let astroHtml = '';
  const profile = getAstroProfile();
  if (profile) {
    astroHtml = `<div style="margin-top:18px; padding-top:14px; border-top:1px solid rgba(201,168,76,0.15)">
      <h4 style="font-size:0.82rem; color:#b8a0e0; margin-bottom:10px">✦ あなたの星からのメッセージ ✦</h4>
      <p style="font-size:0.85rem">${profile.sign.symbol} ${profile.sign.name}のあなたにとって、今日の${card.nameJp}は${profile.sign.compatElements.includes(card.element)?'調和的なエネルギー':'新たな視点をもたらすエネルギー'}を運んでいます。${profile.sign.advice}</p>
    </div>`;
  }

  document.getElementById('dailyDisplay').innerHTML=`<div class="daily-date">${ds}</div>
    <div style="display:flex;justify-content:center;gap:16px;margin-bottom:16px;flex-wrap:wrap">
      <span class="astro-badge">${lunar.symbol} ${lunar.name}</span>
      <span class="astro-badge">♇ ${transit.planet}の影響</span>
    </div>
    <div style="margin:0 auto 20px;width:fit-content"><div class="card-container flipped ${card.isReversed?'reversed':''}" style="width:160px;cursor:default"><div class="card-face card-back"><div class="card-back-design"><span class="card-back-pattern"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="8" y1="24" x2="40" y2="24"/><path d="M14.3,14.3 L33.7,33.7" opacity="0.5"/><path d="M33.7,14.3 L14.3,33.7" opacity="0.5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg></span></div></div><div class="card-face card-front ${sc}"><span class="card-numeral">${card.numeral}</span><span class="card-symbol">${cardIcon(card.id)}</span><span class="card-name">${card.name}</span><span class="card-name-jp">${card.nameJp}</span>${card.isReversed?'<span class="reversed-indicator">逆位置</span>':''}</div></div></div>
    <div class="daily-message">
      <h4>✦ 今日のメッセージ ✦</h4>
      <p style="font-style:italic;color:var(--gold);margin-bottom:10px">${kw}</p>
      <p>${meaning}</p>
      <p style="margin-top:12px;font-size:0.85rem">${lunar.symbol} <strong>${lunar.name}</strong>：${lunar.meaning}</p>
      <p style="margin-top:8px;font-size:0.85rem">🪐 <strong>${transit.planet}のトランジット</strong>：${transit.advice}</p>
      ${astroHtml}
      <p style="margin-top:14px;font-size:0.85rem;color:var(--text-dim)">今日一日、このカードと天体のエネルギーを意識して過ごしてみてください。</p>
      <span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:12px">カードの詳細を見る →</span>
    </div>`;
};

// Override drawYesNo to include astrology
const _origYesNo = drawYesNo;
drawYesNo = function() {
  const q=document.getElementById('yesnoInput').value.trim();const card=shuffleAndDraw(1)[0];
  const yesIds=['m0','m1','m3','m6','m8','m10','m14','m17','m19','m21'];const noIds=['m12','m13','m15','m16','m18'];
  let answer,cls,jp;
  if(card.isReversed){if(yesIds.includes(card.id)){answer='Maybe';cls='maybe';jp='どちらとも言えない';}else{answer='No';cls='no';jp='いいえ';}}
  else{if(noIds.includes(card.id)){answer='No';cls='no';jp='いいえ';}else if(yesIds.includes(card.id)){answer='Yes';cls='yes';jp='はい';}else{answer='Maybe';cls='maybe';jp='どちらとも言えない';}}
  const meaning=card.isReversed?card.reversed:card.upright;

  let astroHtml = '';
  const profile = getAstroProfile();
  if (profile) {
    const lunar = profile.lunar;
    const transit = profile.transit;
    const cardLinked = card.id === profile.sign.tarotCard;
    astroHtml = `<div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(201,168,76,0.15);text-align:left">
      <div style="font-family:'Cinzel',serif;font-size:0.8rem;color:#b8a0e0;letter-spacing:0.1em;margin-bottom:10px;text-align:center">✦ 占星術的な補足 ✦</div>
      <p style="font-size:0.85rem;line-height:1.8">${profile.sign.symbol} ${profile.sign.name}のあなたへ：${
        cls==='yes' ? profile.sign.advice + 'この判断はあなたの星座のエネルギーと共鳴しています。'
        : cls==='no' ? '今は慎重さが必要な時期かもしれません。' + transit.advice
        : '判断を急がず、' + lunar.meaning.replace('。','') + '時期でもあります。'
      }</p>
      ${cardLinked ? '<p style="font-size:0.85rem;margin-top:8px;color:var(--gold)">⭐ あなたの星座と関連するカードが出ています！星々からの特別なサインです。</p>' : ''}
      <p style="font-size:0.8rem;color:var(--text-dim);margin-top:8px">${lunar.symbol} 月相：${lunar.name} ／ 🪐 ${transit.planet}のトランジット</p>
    </div>`;
  }

  document.getElementById('yesnoResult').innerHTML=`<div class="yesno-result"><div style="margin-bottom:12px;display:flex;justify-content:center">${cardIcon(card.id,64)}</div><div style="font-family:'Cinzel',serif;font-size:0.9rem;color:var(--gold-light)">${card.name}</div><div style="font-size:0.95rem;margin-bottom:4px">${card.nameJp} ${card.isReversed?'（逆位置）':''}</div><div class="yesno-answer ${cls}">${answer}</div><div style="font-size:1rem;margin-bottom:16px;color:var(--text-light)">${jp}</div><div class="yesno-detail">${q?`「${q}」に対する答えは<strong>${jp}</strong>です。`:''} ${meaning}</div>${astroHtml}<span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:16px">カードの詳細を見る →</span></div>`;
};

createStars();

// ============================================================
// API BRIDGE (Python Worker)
// ============================================================
const DEFAULT_TAROT_API_BASE = 'https://tarot.mero-mero-merod.workers.dev';
const TAROT_API_BASE = window.TAROT_API_BASE || (
  window.location.protocol === 'file:' || !window.location.hostname.endsWith('workers.dev')
    ? DEFAULT_TAROT_API_BASE
    : ''
);
const spreadApiMap = { 1: 'one', 3: 'three', 5: 'five', 10: 'celtic_cross' };
let lastSpreadSummary = '';

function apiUrl(path) {
  return TAROT_API_BASE ? `${TAROT_API_BASE}${path}` : path;
}

async function requestApi(path, options = {}) {
  const init = { method: 'GET', headers: {}, ...options };
  if (init.body && typeof init.body !== 'string') {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(init.body);
  }

  const response = await fetch(apiUrl(path), init);
  const raw = await response.text();
  let data = {};

  if (raw) {
    try {
      data = JSON.parse(raw);
    } catch {
      data = { detail: raw };
    }
  }

  if (!response.ok) {
    const detail = data.detail || data.message || `HTTP ${response.status}`;
    throw new Error(`APIエラー: ${detail}`);
  }

  return data;
}

function normalizeCardId(rawId = '') {
  if (rawId.startsWith('m')) return rawId;
  return rawId.replace('-', '_');
}

function normalizeApiCard(apiCard = {}) {
  const id = normalizeCardId(apiCard.id || '');
  const localCard = fullDeck.find((c) => c.id === id || c.id === apiCard.id) || {};
  const isReversed = Boolean(apiCard.is_reversed ?? apiCard.isReversed ?? localCard.isReversed);

  return {
    ...localCard,
    ...apiCard,
    id,
    nameJp: apiCard.name_jp || apiCard.nameJp || localCard.nameJp || '',
    isReversed,
    keywords_up: apiCard.keywords_up || localCard.keywords_up || '',
    keywords_rev: apiCard.keywords_rev || localCard.keywords_rev || '',
    upright: apiCard.upright || localCard.upright || '',
    reversed: apiCard.reversed || localCard.reversed || '',
    suit: apiCard.suit || localCard.suit || 'major',
  };
}

function normalizeApiAstro(raw) {
  if (!raw || !raw.sign) return null;

  const localSign = zodiacSigns.find((s) => s.name === raw.sign.name) || {};
  return {
    ...raw,
    sign: {
      ...localSign,
      ...raw.sign,
      tarotCard: raw.sign.tarot_card || raw.sign.tarotCard || localSign.tarotCard,
      compatElements: localSign.compatElements || [],
      trait: localSign.trait || '',
      advice: raw.sign.advice || localSign.advice || '',
      ruler: localSign.ruler || '',
      rulerSymbol: localSign.rulerSymbol || '',
    },
    lunar: raw.lunar || getLunarPhase(new Date()),
    transit: raw.transit || getCurrentTransit(),
  };
}

function getBirthDateValue() {
  const birthInput = document.getElementById('birthDate');
  return birthInput && birthInput.value ? birthInput.value : null;
}

function renderDrawnCardsFromState() {
  const container = document.getElementById('cardSpread');
  const labels = spreadLabels[currentSpread] || [];
  container.className = currentSpread === 10 ? 'celtic-cross-layout' : 'card-spread';

  drawnCards.forEach((card, i) => {
    const slot = document.createElement('div');
    slot.className = 'card-slot';
    const sc = card.suit !== 'major' ? `suit-${card.suit}` : '';
    slot.innerHTML = `<span class="card-label">${labels[i] || ''}</span>
<div class="card-container ${card.isReversed ? 'reversed' : ''}" onclick="flipCard(${i})" id="card-${i}">
<div class="card-face card-back"><div class="card-back-design"><span class="card-back-pattern"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="8" y1="24" x2="40" y2="24"/><path d="M14.3,14.3 L33.7,33.7" opacity="0.5"/><path d="M33.7,14.3 L14.3,33.7" opacity="0.5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg></span></div></div>
<div class="card-face card-front ${sc}"><span class="card-numeral">${card.numeral || ''}</span><span class="card-symbol">${cardIcon(card.id)}</span><span class="card-name">${card.name || ''}</span><span class="card-name-jp">${card.nameJp || ''}</span>${card.isReversed ? '<span class="reversed-indicator">逆位置</span>' : ''}</div></div>`;
    container.appendChild(slot);
    setTimeout(() => slot.classList.add('appear'), i * 100 + 50);
  });
  document.getElementById('drawBtn').disabled = true;
}

const _origResetReadingApiBridge = resetReading;
resetReading = function() {
  lastSpreadSummary = '';
  _origResetReadingApiBridge();
};

const _origGenerateSummaryApiBridge = generateSummary;
generateSummary = function() {
  if (lastSpreadSummary) return lastSpreadSummary;
  return _origGenerateSummaryApiBridge();
};

const _origDrawCardsApiBridge = drawCards;
drawCards = async function() {
  resetReading();

  const drawBtn = document.getElementById('drawBtn');
  const originalText = drawBtn.textContent;
  const question = document.getElementById('questionInput').value.trim();
  drawBtn.textContent = '通信中...';
  drawBtn.disabled = true;

  try {
    const payload = {
      spread: spreadApiMap[currentSpread] || 'three',
      deck_filter: 'all',
      question,
    };
    const birthDate = getBirthDateValue();
    if (birthDate) payload.birth_date = birthDate;

    const response = await requestApi('/api/spread', { method: 'POST', body: payload });
    drawnCards = (response.cards || []).map(normalizeApiCard);
    if (!drawnCards.length) throw new Error('カード結果が取得できませんでした。');
    lastSpreadSummary = response.summary || '';
    renderDrawnCardsFromState();
  } catch (err) {
    console.error('API /api/spread failed; fallback to local draw.', err);
    drawBtn.textContent = originalText;
    _origDrawCardsApiBridge();
    return;
  }

  drawBtn.textContent = originalText;
};

const _origShowDailyApiBridge = showDailyCard;
showDailyCard = async function() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const params = new URLSearchParams({ target_date: today });
    const birthDate = getBirthDateValue();
    if (birthDate) params.set('birth_date', birthDate);

    const response = await requestApi(`/api/daily?${params.toString()}`);
    const card = normalizeApiCard(response.card || {});
    const kw = card.isReversed ? card.keywords_rev : card.keywords_up;
    const meaning = card.isReversed ? card.reversed : card.upright;
    const sc = card.suit !== 'major' ? `suit-${card.suit}` : '';
    const ds = new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    const lunar = response.lunar || getLunarPhase(new Date());
    const transit = response.transit || getCurrentTransit();
    const profile = normalizeApiAstro(response.astrology) || getAstroProfile();

    let astroHtml = '';
    if (profile) {
      const cardLinked = card.id === profile.sign.tarotCard;
      astroHtml = `<div style="margin-top:18px; padding-top:14px; border-top:1px solid rgba(201,168,76,0.15)">
        <h4 style="font-size:0.82rem; color:#b8a0e0; margin-bottom:10px">✦ あなたの星からのメッセージ ✦</h4>
        <p style="font-size:0.85rem">${profile.sign.symbol} ${profile.sign.name}のあなたにとって、今日の${card.nameJp}は${profile.sign.compatElements.includes(card.element) ? '調和的なエネルギー' : '新たな視点をもたらすエネルギー'}を運んでいます。${profile.sign.advice}</p>
        ${cardLinked ? '<p style="font-size:0.82rem;margin-top:8px;color:var(--gold)">⭐ 星座対応カードとの共鳴が出ています。</p>' : ''}
      </div>`;
    }

    document.getElementById('dailyDisplay').innerHTML = `<div class="daily-date">${ds}</div>
      <div style="display:flex;justify-content:center;gap:16px;margin-bottom:16px;flex-wrap:wrap">
        <span class="astro-badge">${lunar.symbol} ${lunar.name}</span>
        <span class="astro-badge">♇ ${transit.planet}の影響</span>
      </div>
      <div style="margin:0 auto 20px;width:fit-content"><div class="card-container flipped ${card.isReversed ? 'reversed' : ''}" style="width:160px;cursor:default"><div class="card-face card-back"><div class="card-back-design"><span class="card-back-pattern"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><line x1="24" y1="8" x2="24" y2="40"/><line x1="8" y1="24" x2="40" y2="24"/><path d="M14.3,14.3 L33.7,33.7" opacity="0.5"/><path d="M33.7,14.3 L14.3,33.7" opacity="0.5"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/></svg></span></div></div><div class="card-face card-front ${sc}"><span class="card-numeral">${card.numeral || ''}</span><span class="card-symbol">${cardIcon(card.id)}</span><span class="card-name">${card.name || ''}</span><span class="card-name-jp">${card.nameJp || ''}</span>${card.isReversed ? '<span class="reversed-indicator">逆位置</span>' : ''}</div></div></div>
      <div class="daily-message">
        <h4>✦ 今日のメッセージ ✦</h4>
        <p style="font-style:italic;color:var(--gold);margin-bottom:10px">${kw}</p>
        <p>${meaning}</p>
        <p style="margin-top:12px;font-size:0.85rem">${lunar.symbol} <strong>${lunar.name}</strong>：${lunar.meaning}</p>
        <p style="margin-top:8px;font-size:0.85rem">🪐 <strong>${transit.planet}のトランジット</strong>：${transit.advice}</p>
        ${astroHtml}
        <p style="margin-top:14px;font-size:0.85rem;color:var(--text-dim)">今日一日、このカードと天体のエネルギーを意識して過ごしてみてください。</p>
        <span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:12px">カードの詳細を見る →</span>
      </div>`;
  } catch (err) {
    console.error('API /api/daily failed; fallback to local daily.', err);
    _origShowDailyApiBridge();
  }
};

const _origYesNoApiBridge = drawYesNo;
drawYesNo = async function() {
  const button = document.querySelector('#panel-yesno .draw-btn');
  const originalText = button ? button.textContent : '';
  if (button) {
    button.disabled = true;
    button.textContent = '通信中...';
  }

  try {
    const question = document.getElementById('yesnoInput').value.trim();
    const payload = { question };
    const birthDate = getBirthDateValue();
    if (birthDate) payload.birth_date = birthDate;

    const response = await requestApi('/api/yesno', { method: 'POST', body: payload });
    const card = normalizeApiCard(response.card || {});
    const meaning = card.isReversed ? card.reversed : card.upright;

    const answerEn = response.answer?.en || 'Maybe';
    const cls = response.answer?.class_name || (answerEn === 'Yes' ? 'yes' : answerEn === 'No' ? 'no' : 'maybe');
    const jp = response.answer?.jp || (cls === 'yes' ? 'はい' : cls === 'no' ? 'いいえ' : 'どちらとも言えない');

    const profile = normalizeApiAstro(response.astrology) || getAstroProfile();
    let astroHtml = '';
    if (profile) {
      const lunar = profile.lunar;
      const transit = profile.transit;
      const cardLinked = card.id === profile.sign.tarotCard;
      astroHtml = `<div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(201,168,76,0.15);text-align:left">
        <div style="font-family:'Cinzel',serif;font-size:0.8rem;color:#b8a0e0;letter-spacing:0.1em;margin-bottom:10px;text-align:center">✦ 占星術的な補足 ✦</div>
        <p style="font-size:0.85rem;line-height:1.8">${profile.sign.symbol} ${profile.sign.name}のあなたへ：${
          cls === 'yes' ? profile.sign.advice + 'この判断はあなたの星座のエネルギーと共鳴しています。'
          : cls === 'no' ? '今は慎重さが必要な時期かもしれません。' + transit.advice
          : '判断を急がず、' + lunar.meaning.replace('。', '') + '時期でもあります。'
        }</p>
        ${cardLinked ? '<p style="font-size:0.85rem;margin-top:8px;color:var(--gold)">⭐ あなたの星座と関連するカードが出ています！星々からの特別なサインです。</p>' : ''}
        <p style="font-size:0.8rem;color:var(--text-dim);margin-top:8px">${lunar.symbol} 月相：${lunar.name} ／ 🪐 ${transit.planet}のトランジット</p>
      </div>`;
    }

    document.getElementById('yesnoResult').innerHTML = `<div class="yesno-result"><div style="margin-bottom:12px;display:flex;justify-content:center">${cardIcon(card.id,64)}</div><div style="font-family:'Cinzel',serif;font-size:0.9rem;color:var(--gold-light)">${card.name}</div><div style="font-size:0.95rem;margin-bottom:4px">${card.nameJp} ${card.isReversed ? '（逆位置）' : ''}</div><div class="yesno-answer ${cls}">${answerEn}</div><div style="font-size:1rem;margin-bottom:16px;color:var(--text-light)">${jp}</div><div class="yesno-detail">${question ? `「${question}」に対する答えは<strong>${jp}</strong>です。` : ''} ${meaning}</div>${astroHtml}<span class="result-detail-link" onclick="showCardDetail('${card.id}')" style="display:inline-block;margin-top:16px">カードの詳細を見る →</span></div>`;
  } catch (err) {
    console.error('API /api/yesno failed; fallback to local yes/no.', err);
    _origYesNoApiBridge();
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
};
