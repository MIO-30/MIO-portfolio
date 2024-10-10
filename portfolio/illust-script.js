const preview = document.querySelector('#preview');

const thumbList = document.querySelector('#thumbList');

// {
//     imgUrl: '',
//     genre: '',
//     title: '',
//     date: '',
//     time: ':',
//     mainText: '',
// },

const thumbImg = [
    {
        imgUrl: 'jojo43.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】空条承太郎',
        date: '2024年2月',
        time: '10時間（未完成）',
        mainText: '製作途中ですが、着彩が気に入っているので掲載しました。<br>承太郎の誕生日は明かされておらず、みずがめ座（1月20日～2月18日）ということのみ明かされています。<br>肌の質感と、特に光の当たる角度を意識して色を塗りました。',
    },
    {
        imgUrl: 'v10.png',
        genre: 'FAN ART',
        title: '【Crazy Raccoon】だるまいずごっど',
        date: '2024年1月',
        time: '12時間',
        mainText: 'だるまいずごっどのファンである友人の誕生日に送ったイラストです。<br>パーカーの赤と、影色や光の色を混ぜるときに汚い色にならないように、暗く（明るく）なりすぎないように気にしながら描きました。手袋がレザーのような材質とわかるように反射光をいれました。',
    },
    {
        imgUrl: 'v11.png',
        genre: 'FAN ART',
        title: '【にじさんじ】ヤン・ナリ',
        date: '2024年1月',
        time: '7時間（未完成）',
        mainText: '製作途中ですが、顔をよく描けていると思ったので掲載しました。<br>ピンク髪に蛍光色の緑が目立ちすぎて浮かないようにまつ毛に細かい光を入れたり、目の中に差し色で青を入れたりすることで、緑単色よりもマイルドかつ綺麗な瞳になるようにしました。また、女の子の柔らかさが伝わるように頬と鼻回りに赤みを入れました。',
    },
    {
        imgUrl: 'v5-2.png',
        genre: 'FAN ART',
        title: '【にじさんじEN】ミスタ・リアス',
        date: '2023年8月',
        time: '24時間',
        mainText: '彼が卒業するときに描いたファンアートです。<br>Youtubeで活動している有名なイラストレーターの方が「（誰が見てもそのキャラだとわかってもらえるように）顔をとにかく原作に似せるべき」と言っていたのを参考に、目の形や髪の形、肌の色を特に意識して元のイラストに忠実に描きました。<br>棒立ちにならず、顔を強調できるポーズを考えることに苦労しました。',
    },
    {
        imgUrl: 'jojo39-2-2.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】空条承太郎',
        date: '2022年8月',
        time: '24時間',
        mainText: 'Twitter（現X）の友人が主催するイラスト集（アンソロジー）に寄稿したものです。「グロ、鬱」がテーマの本でした。<br>”羽化”をイメージしたイラストです。4部の承太郎は「最強のスタンド使い」「無敵のスタープラチナ」と称され、神格化のような扱いを受けていたので、背景に神を連想させるような光の環を配置しました。',
    },
    {
        imgUrl: 'illust-2.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】空条承太郎',
        date: '2021年6月',
        time: '20時間',
        mainText: 'Twitter（現X）の友人が主催するイラスト集（アンソロジー）に寄稿したものです。「花吐き病」がテーマの本でした。<br>ジョジョは色々なカラーバリエーションがあります。6部アニメ化発表前のイベントの際に発表された、白に青のカラーリングがとても印象的でしたので選びました。花は月下美人です。<br>青が鮮やかに映えるように、影の部分でも色が濁らないように気を付けました。',
    },
    {
        imgUrl: 'illust-1.png',
        genre: 'ORIGINAL',
        title: 'マオ （双子の魔法使い・弟）',
        date: '2020年6月',
        time: '12時間',
        mainText: '仕事をはじめてしばらく絵を描いていないときに、イラストレーターの米山舞さんのイラストを見て「久しぶりに絵を描こうかな」と思い立った時に制作したイラストです。<br>「双子の～」は、元は学生の頃に姉も一緒に描いた絵のキャラクターデザインを再利用したもの、ということです。<br>まつ毛と細かな髪の描写に力を入れました。',
    },
    {
        imgUrl: 'pkmn2.png',
        genre: 'FAN ART',
        title: '【ポケットモンスター】キバナ',
        date: '2019年12月',
        time: '12時間',
        mainText: 'ソードシールドのポケモントレーナーの中で一番気に入ったのがキバナでした。普段はたれ目で温厚そうな表情をしていますが、バトルになると目が吊り上がってやる気に満ちた顔に変わるのがとても印象的でした。<br>ゲーム内のリーグカード風のイラストに仕上げるため、ハートのホログラムのエフェクトと追加しています。',
    },
    {
        imgUrl: 'jojo20.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】岸部露伴',
        date: '2019年10月',
        time: '6時間',
        mainText: 'Twitter（現X）で特定の色をメインにジョジョのキャラを描こう、という企画に参加したときのイラストです。<br>同時期に遊んでいた「どうぶつの森」で、秋になるとオレンジの綺麗な蝶が舞うようになっていました。ちょうどオレンジを使う、というテーマだったので露伴のまわりを蝶に飛んでもらいました。',
    },
    {
        imgUrl: 'jojo6.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】空条承太郎',
        date: '2019年8月',
        time: '24時間',
        mainText: 'ひとつ前に制作したDIOのイラストで、金属を描くのがとても楽しかったので、もっと描きたいと思いチェーンを持ってもらいました。<br>チェーンは元はブラシですが、輪の塗りはひとつひとつ行いました。また、水中の泡の表現と、スタープラチナのなびく髪が綺麗に見えるように描きました。',
    },
    {
        imgUrl: 'jojo5-2.png',
        genre: 'FAN ART',
        title: '【ジョジョの奇妙な冒険】DIO',
        date: '2019年8月',
        time: '20時間',
        mainText: 'ジョジョのキャラをらくがきではなく、イラストとしてしっかり仕上げた最初のイラストです。化粧品のポスターのようなイメージで制作しました。<br>細かいハイライトで高級感を演出しました。手のリアル感、髪のうねりと塗りにとても力を入れました。正面で俯瞰の顔が苦手で、あごの下の描写は模索しながらの制作でした。',
    },
    {
        imgUrl: 'id5-1.png',
        genre: 'FAN ART',
        title: '【Identity V】機械技師 納棺師',
        date: '2019年7月',
        time: '18時間',
        mainText: 'カラーリングがとても似ている衣装だったので、並べて描きたいと思い制作しました。特に機械技師の衣装がとても好みです。<br>全体的に質感の表現に力を入れました。金属の塗りはたくさんの塗り方講座を参考にして挑んだのでよくできているとおもいますが、レザーの表現は今（2024年9月現在）ならもう少しツヤ感と温度感を表現できると思います。',
    },
    {
        imgUrl: 'cmps33-2.png',
        genre: 'FAN ART',
        title: '【#コンパス 戦闘摂理解析システム】魔法少女リリカ',
        date: '2019年6月',
        time: '12時間',
        mainText: '初音ミクとコラボしたときのコスチュームがとても可愛かったので描きました。<br>普段は水彩塗りや厚塗りをメインに制作しているのですが、今回は絵柄にあわせてアニメ塗りにしました。線画も丁寧に描きましたが、堅い印象にならないように水玉と淡いグラデーションであたたかみを表現しました。',
    },
    {
        imgUrl: 'gu_34.png',
        genre: 'FAN ART',
        title: '【#コンパス 戦闘摂理解析システム】グスタフ・ハイドリヒ',
        date: '2019年6月',
        time: '12時間',
        mainText: '#コンパスのキャラですが、衣装は【進撃の巨人】の兵団制服です。学生の頃はずっと進撃の巨人が大好きだったので、好きなキャラに好きな作品の衣装を着たもらいたかったので描きました。<br>この作品以前も時折厚塗りには挑戦していましたが、今回とてもうまくできたと感じてから以降積極的に厚塗りで絵を描くようになりました。',
    },
    {
        imgUrl: 'sousaku15.png',
        genre: 'ORIGINAL',
        title: 'ミニチョコケーキ（トレース）',
        date: '2019年4月',
        time: '8時間',
        mainText: 'トレースと表記していますが写真を下敷きにしたのではなく、キャンバスの横に写真を出して、色や形を”目でトレース”したものです。<br>写真を参考にしたことで、反射やハイライトの表現がとても勉強になりました。',
    },
    {
        imgUrl: 'sousaku13.png',
        genre: 'ORIGINAL',
        title: 'ピンク髪の女の子',
        date: '2019年4月',
        time: '18時間',
        mainText: 'イラスト制作会社に提出するポートフォリオで、「このような絵柄の絵も描けます」とアピールするために制作したイラストです。<br>「萌え絵」を描いているイラストレーターさんの絵を何枚も参考にして描きました。この絵を描いたことで、女の子の指先と肌の凹凸の描き方を学ぶことができました。描いているあいだとても楽しかった印象があります。',
    },
    {
        imgUrl: 'sousaku12.png',
        genre: 'ORIGINAL',
        title: 'ファンタジー風の女の子',
        date: '2019年4月',
        time: '12時間',
        mainText: 'イラスト制作会社に提出するポートフォリオで、「このような絵柄の絵も描けます」とアピールするために制作したイラストです。<br>普段自分では描かない目の形や髪の塗りに挑戦したことで、自分の表現力を広げることができました。もう少し衣装のデザインを凝れたらよかったなと思います。',
    },
    {
        imgUrl: 'kadai10.png',
        genre: 'ORIGINAL',
        title: '艶宴魄㐂（エンエンハッキ）',
        date: '2019年1月',
        time: '20時間',
        mainText: 'タイトルは創作四字熟語です。「とても強い鬼が張り合う相手が長らくいなかったが、久しぶりに腕が鳴る敵がやってきたことに喜んでいる」というストーリーがあります。<br>専門学校の卒業制作でしたので、授業で教わった視線誘導や煽りの構図、三分割法などを積極的に取り入れました。',
    },
    {
        imgUrl: 'kadai6.png',
        genre: 'ORIGINAL',
        title: '双子の魔法使い',
        date: '2018年9月',
        time: '30時間',
        mainText: '専門学校の課題で制作しました。「ファンタジー」がテーマでした。<br>自分の中でかなり衣装やキャラのデザインをこだわっていたのですが、画面がごちゃごちゃしすぎてこだわりポイントが見えなくなってしまっているところを反省したいです。',
    },
]


// ヘッダー読み込み ==================
const topBack = document.querySelector('#sub-header a');
const h2 = document.querySelector('h2');
const line = document.querySelector('.line');
const headerP = document.querySelector('p');

line.animate({
    translate: ['-200% 0', '0 0'],
    opacity: [0, 1],
},{
    duration: 1600,
    easing: 'ease',
    fill: 'forwards',
});
h2.animate({
    translate: ['100% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 1000,
    delay: 500,
    easing: 'ease',
    fill: 'forwards',
});
headerP.animate({
    translate: ['50% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 1200,
    delay: 600,
    easing: 'ease',
    fill: 'forwards',
});
topBack.animate({
    translate: ['-100% 0', '0 0'],
    opacity: [0, 1],
}, {
    duration: 800,
    delay: 500,
    easing: 'ease',
    fill: 'forwards',
});
thumbList.animate({
    opacity: [0, 1]
}, {
    duration: 800,
    delay: 300,
    easing: 'ease-out',
    fill: 'forwards',
})


for (let i = 0; i < thumbImg.length; i++) {

// サムネリスト ======================
const content = `<button class="listImg" style="background:url(img/illust/${thumbImg[i].imgUrl});background-size:cover;background-position:center;"></button>`;

thumbList.insertAdjacentHTML('beforeend', content);


// サムネふわっ =====================
const images = document.querySelectorAll('.listImg');

// window.addEventListener('load', () => {


images[i].animate({
    opacity: [0, 1],
    translate: ['0 50px', 0],
}, {
    duration: 300,
    delay: 400 + i * 100,
    easing: 'ease-out',
    fill: 'forwards',
});

preview.animate({
    opacity: [0, 1],
    translate: ['0 500px', 0],
}, {
    duration: 1000,
    easing: 'ease-out',
    fill: 'forwards',
});

// });


// メイン画像切り替え ================
images[i].addEventListener('mouseover', (event) => {

    // const imgUrl = event.target.src;

    preview.animate({
        opacity: [0, 1]
    }, 500);

    preview.style.backgroundColor = '#ffffff00';

    preview.innerHTML = `<div class="cover"></div><img src="img/illust/${thumbImg[i].imgUrl}" alt="">`;

});


// 説明文 ====================
const imgWindow = document.querySelector('#img-window');

images[i].addEventListener('click', () => {
    
    imgWindow.animate({
        translate: [0, '0 -300px'],
    }, {
        duration: 200,
        easing: 'ease-out',
        fill: 'forwards',
    });

    const imgName = document.querySelector('.img-name');
    const winDate = document.querySelector('.win-date');
    const winTime = document.querySelector('.win-time');
    const winText = document.querySelector('.win-text2');
    
    const cursor = document.querySelector('.cursor');
    const winFan = document.querySelector('.win-fanart');
    const winOri = document.querySelector('.win-original');



    imgName.textContent = thumbImg[i].title;
    winDate.textContent = thumbImg[i].date;
    winTime.textContent = `制作時間:${thumbImg[i].time}`;
    winText.innerHTML = thumbImg[i].mainText;


    console.log(thumbImg[i].genre);

    if(thumbImg[i].genre === 'ORIGINAL') {
        cursor.classList.add('cursor-ori');
        winFan.style.color = '#c7c7c7';
        winOri.style.color = '#3d3d3d';
    } else {
        cursor.classList.remove('cursor-ori');
        winFan.style.color = '#3d3d3d';
        winOri.style.color = '#c7c7c7';
    }

});

const xBtn = document.querySelector('#img-window button');

xBtn.addEventListener('click', () => {
    imgWindow.animate({
        translate: ['0 -300px', 0],
    }, {
        duration: 200,
        easing: 'ease-out',
        fill: 'forwards',
    });

})


// トップに戻る ========================
topBack.addEventListener('click', () => {

    const backOption = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
    };

    // ヘッダー ======================
    line.animate({
        translate: ['0', '-100% 0'],
        opacity: [1, 0],
        }, backOption);
    h2.animate({
        translate: ['0', '100% 0'],
        opacity: [1, 0],
        }, backOption);
    headerP.animate({
        translate: ['0', '50% 0'],
        opacity: [1, 0],
        }, backOption);
    topBack.animate({
        translate: ['0', '-100% 0'],
        opacity: [1, 0],
        }, backOption);

    // プレビュー ======================
    preview.animate({
        opacity: [1, 0],
        translate: [0, '0 30%'],
    }, backOption);

    // サムネ =========================
    thumbList.animate({
        opacity: [1, 0],
        translate: [0, '0 30%'],
    }, {
        duration: 600,
        delay: 100,
        easing: 'ease',
        fill: 'forwards',
    })    

    // 説明文 ========================
    imgWindow.animate({
        opacity: [1, 0],
    }, backOption);    
    

    // 遷移遅延 ===========================================
setTimeout(function() {

    const url = 'index.html';
        window.location.href = url;
}, 600);

});

};
