let quizIndex = 0;
let score = 0;
let quizNumber = 1;

let quiz = [
  {
    question: '罪からの救い主といえばどなたでしょうか？',
    type: 'select',
    multiple: 1,
    answers : ['ダビデ',
      'パウロ',
      'ペトロ',
      'イエス'
    ],
    correct : ['イエス'],
    description : `【正解】
    イエス

    【解説】
    イエスは旧約聖書であらかじめ預言された通りに来られたキリストであり、すべての人の罪の身代わりに十字架にかかって死なれ、\
    罪の贖いを成し遂げられました。その方を信じればすべての罪が赦されます。
    
    ＜その他の選択肢＞
    ・ダビデはイスラエルの王です。キリストはダビデの子孫から生まれることが預言されていました。
    ・パウロは宣教をしてイエス・キリストを宣べ伝えた人です。
    ・ペトロはイエスの十二弟子の一人です。`
  }, {
    question: 'イエス様が生まれた場所どこですか？',
    type: 'select',
    multiple: 1,
    answers : ['ベツレヘム',
      'ナザレ',
      'ユダヤ',
      'エルサレム'
    ],
    correct : ['ベツレヘム'],
    description : `【正解】
    ベツレヘム
    
    【解説】
    イエスのご両親はナザレに住んでいましたが、初代ローマ皇帝アウグストゥスが出した住民登録の命令に従って故郷のベツレヘムに\
    帰ったときにイエスが生まれました。それは、ミカ書の預言が成就するためです。

    エフラタのベツレヘムよ／お前はユダの氏族の中でいと小さき者。お前の中から、わたしのために／イスラエルを治める者が出る。\
    彼の出生は古く、永遠の昔にさかのぼる。(ミカ書5:1)
    
    ＜その他の選択肢＞
    ・ナザレはガリラヤにある町で、イエスが育った場所です。
    ・ユダヤはエルサレムやベツレヘムを含む地方です。
    ・エルサレムは神殿があった場所で、ユダヤ人の宗教と政治の中心地です。紀元70年にエルサレムは陥落して、神殿も崩壊しました。`
  }, {
    question: '人は何によって罪から救われますか？',
    type: 'select',
    multiple: 1,
    answers : ['善行',
      '信仰',
      '修行',
      '何によっても救われない'
    ],
    correct : ['信仰'],
    description : `【正解】
    信仰
    
    【解説】
    生まれながらの人間は罪人です。罪人は自分を罪から救うことはできません。善行をしても、修行をしても、罪人は罪人です。\
    過去の罪を償うことはできず、現在も罪をやめることができず、将来にわたって罪を犯し続けます。\
    ただ、イエス・キリストが十字架の上で成し遂げてくださった救いの御業に、信仰によってあずかるしか救われる道はありません。`
  }, {
    question: 'イエス・キリストを受け入れたときに起こることは次の内のどれか？(複数選択可)',
    type: 'select',
    multiple: 5,
    answers : ['聖霊が内側に住む',
      '永遠の命を得る',
      '罪の赦しを受ける',
      '水のバプテスマを受ける',
      '神の子となる'
    ],
    correct : ['永遠の命を得る',
      '罪の赦しを受ける',
      '神の子となる',
      '聖霊が内側に住む'],
    description : `【正解】
    永遠の命を得る、罪の赦しを受ける、神の子となる、聖霊が内側に住む
    
    【解説】
    水のバプテスマはイエス・キリストを信じた人が悔い改めと信仰を公にする目的で、受ける聖礼典です。バプテスマとは、浸るという意味です。\
    全身を水に浸ることで、キリストと共に罪に死んで、水から出るときにキリストと共に新しい命に生きるようになります。\
    キリストを信じた人は受けることが推奨されますが、信じると同時に体験するものではありません。
    
    その他の選択肢はすべてイエス・キリストを信じると同時に体験するものです。
    ・永遠の命(ヨハネ3:16)
    ・罪の赦し(エフェソ1:7)
    ・神の子(ヨハネ1:12)
    ・聖霊の内住(エフェソ1:13-14)`
  }, {
    question: '使徒言行録1章8節によると、福音はどのような順番で伝わっていきますか？4つを順番に並べてください。',
    type: 'order',
    multiple: 4,
    answers : ['エルサレム',
      'ユダヤの全土',
      'サマリアの全土',
      '地の果て'
    ],
    correct : ['エルサレム',
      'ユダヤの全土',
      'サマリアの全土',
      '地の果て'],
    description : `【正解】
    エルサレム、ユダヤの全土、サマリアの全土、地の果て

    弟子たちはエルサレムで聖霊のバプテスマを受けて、福音を徐々に遠くへ伝えていきました。
    福音は近いところから遠いところに伝わっていきます。優先して伝道するのは、周りにいる家族や友人、知人です。

    「あなたがたの上に聖霊が降ると、あなたがたは力を受ける。そして、エルサレムばかりでなく、ユダヤとサマリアの全土で、\
    また、地の果てに至るまで、わたしの証人となる。」(使徒言行録1:8)`
  }, {
    question: '主なる神は、御父、御子、聖霊の三者が存在しながら、一人の神でもあります。\
    このことを漢字四文字で表す神学用語で回答してください。',
    type: 'text',
    multiple: 0,
    answers : [],
    correct : '三位一体',
    description : `【正解】
    三位一体

    三位一体という言葉自体は聖書に登場しませんが、創世記から黙示録に至るまで、聖書全体が三位一体を示しています。\
    三つでありながら一つであるというのは、人間の頭の理解を超えたものです。そのことから、聖書は人間の想像によるものではなく、\
    確かに神の霊の導きの下に書かれた書物であるとわかります。`
  }
];

//出題の順番をランダムにする
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
    [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替えます
  }
}
shuffle(quiz);


const quizLength = quiz.length;
const $button = document.getElementsByClassName('btn-primary');
const $hidden = document.getElementsByClassName('btn-secondary');
const $select = document.getElementsByClassName('btn-warning');
const $nextButton = document.getElementById('next-btn');
const buttonLength = $button.length;
let selected = [];
let selectedInt = 0;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("Input").value = "";
  document.getElementById("order").value = "";
  selected = [];
  selectedInt = 0;
  shuffle(quiz[quizIndex].answers);
  document.getElementById('js-question').textContent = 'Q' + quizNumber + '. ' + quiz[quizIndex].question;
  document.getElementById("answer-btn").style.display ="block";
  document.getElementById("js-description").style.display ="none";
  document.getElementById("js-description").innerText = quiz[quizIndex].description;
  document.getElementById("description-btn").style.display ="block";
  if(quizIndex + 1 < quizLength){
    $nextButton.textContent = '次の問題に進む';
  } else {
    $nextButton.textContent = '結果を表示する';
  } 

  if (!(quiz[quizIndex].type ==='text')){
    if (quiz[quizIndex].type ==='order'){
      document.getElementById("order-div").style.display ="block";
    } else {
      document.getElementById("order-div").style.display ="none";
    }
    document.getElementById("text-div").style.display ="none";
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      if (buttonIndex < quiz[quizIndex].answers.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        $button[buttonIndex].style.display ="block";
        $hidden[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        $hidden[buttonIndex].style.display ="none";
        $select[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        $select[buttonIndex].style.display ="none";
      } else {
        $button[buttonIndex].style.display ="none";
        $hidden[buttonIndex].style.display ="none";
        $select[buttonIndex].style.display ="none";
      }
      buttonIndex++;
    }
  } else {
    document.getElementById("text-div").style.display ="block";
    document.getElementById("order-div").style.display ="none";
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].style.display ="none";
      $hidden[buttonIndex].style.display ="none";
      $select[buttonIndex].style.display ="none";
      buttonIndex++;
    }
  }
};

setupQuiz();

//横棒グラフ表示
let labels = [];
let scores = [];
let times = 0;
const drawChart = () =>{
  times++;
  labels.push(times + "回目");
  scores.push(score);
  // <block:setup:1>
  const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      label: '得点',
      data: scores,
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1
    }]
  };
  // </block:setup>

  var options = {
    indexAxis: 'y',
    scales: {                          // 軸設定
      xAxes: [                           // Ｘ軸設定
          {
              ticks: {                      // 目盛り
                  min: 0,                        // 最小値
                  max: quizLength,                       // 最大値
                  stepSize: 1,                   // 軸間隔
              }
          }
      ],
    }
  };
  var canvas = document.getElementById('chart');
  var chart = new Chart(canvas, {
    type: 'horizontalBar',  //グラフの種類
    data: data,  //表示するデータ
    options: options
  });
}

//クイズの結果発表
let percentage = 0;
let judge = "";
const quizScore = () => {
  percentage = Math.round(score / quizLength * 1000) /10;
  if(percentage >= 80){
    judge = "合格です！";
  } else {
    judge = "不合格です！";
  }
  document.getElementById("js-score").innerText = `【結果発表】
  あなたの正解数は` + quizLength + '問中' + score + `問です！
  正解率は` + percentage + `%です！
  ` + judge + '(80%以上で合格)';
  document.getElementById("js-result").style.display ="block";
  document.getElementById("chart").style.display ="block";
  drawChart();
}

let answered = false;
let selectIndex = 0;
let wrongCount = 0;

//正解
const correctAnswer = () =>{
  score++;
  //正解！
  document.getElementsByClassName("alert-success")[0].style.display = "block";
};

//不正解
const wrongAnswer = () =>{
  //不正解！
  document.getElementsByClassName("alert-danger")[0].style.display = "block";
}


//回答するボタンのイベント
const clickHandler = () => {
  wrongCount = 0
  buttonIndex = 0
  if (!(quiz[quizIndex].type ==='text')){
    while(buttonIndex < quiz[quizIndex].answers.length){
      if ($select[buttonIndex].style.display === "none"){
        $button[buttonIndex].style.display ="none";
        $hidden[buttonIndex].style.display ="block";
      }
      buttonIndex++;
    }
    if(quiz[quizIndex].correct.length === selected.length){
      selectIndex = 0;
      while(selectIndex < selected.length){
        if(quiz[quizIndex].type ==='select'){
          if(quiz[quizIndex].correct.includes(selected[selectIndex])===false){
            wrongCount++;
          }
        } else if (quiz[quizIndex].type ==='order'){
          if(!(quiz[quizIndex].correct[selectIndex] === selected[selectIndex])){
            wrongCount++;
          }
        }
        selectIndex++;
      }
      if(wrongCount===0){
        correctAnswer();
      } else {
        wrongAnswer();
      }
    } else {
      wrongAnswer();
    }
  } else {
    if(document.getElementById("Input").value === quiz[quizIndex].correct){
      correctAnswer();
    } else {
      wrongAnswer();
    }
  }
  answered = true;
  document.getElementById("answer-btn").style.display ="none";
  document.getElementById("js-description").style.display ="block";
  document.getElementById("description-btn").style.display ="none";
  quizNumber++;
  quizIndex++;
  if(quizIndex < quizLength){
    //問題がまだある
  } else {
    //問題がもうない
    quizScore();
    $nextButton.textContent = 'もう一度最初からやり直す';
  }
};

//正解を表示するのイベント
const clickHandlerDescription = () =>{
  buttonIndex = 0
  if (!(quiz[quizIndex].type ==='text')){
    while(buttonIndex < quiz[quizIndex].answers.length){
      $button[buttonIndex].style.display ="none";
      $hidden[buttonIndex].style.display ="block";
      buttonIndex++;
    }
  } 
  document.getElementById("answer-btn").style.display ="none";
  document.getElementById("js-description").style.display ="block";
  document.getElementById("description-btn").style.display ="none";
};

let orderIndex = 0;
let orderNumber = 1;
//順番への追記
const reorder = () => {
  if (quiz[quizIndex].type === "order"){
    orderIndex = 0;
    orderNumber = 1;
    document.getElementById("order").value = ""
    while(orderIndex < selected.length){
      
      if (orderIndex != 0){
        document.getElementById("order").value = document.getElementById("order").value + " ⇒ " + orderNumber + ". " + selected[orderIndex]
      } else {
        document.getElementById("order").value = orderNumber + ". " + selected[orderIndex]
      }
      orderNumber++;
      orderIndex++;
    }
  }
};

//選択されていない選択肢ボタンのイベント
const clickHandlerSelect = (e) => {
  if (selectedInt < quiz[quizIndex].multiple){
    buttonIndex = 0
    e.target.style.display = "none";
    while(buttonIndex < quiz[quizIndex].answers.length){
      if (e.target.textContent === $select[buttonIndex].textContent){
        $select[buttonIndex].style.display ="block";
      }
      buttonIndex++;
    }
    selected.push(e.target.textContent)
    selectedInt++;
    //順番への追記
    reorder();
  }
};

//選択されている選択肢ボタンのイベント
const clickHandlerSelected = (e) => {
  buttonIndex = 0
  e.target.style.display = "none";
  while(buttonIndex < quiz[quizIndex].answers.length){
    if (e.target.textContent === $button[buttonIndex].textContent){
      $button[buttonIndex].style.display ="block";
    }
    buttonIndex++;
  }
  selected = selected.filter(function(x){return x != e.target.textContent});
  selectedInt--;
  //順番への追記
  reorder();
};

//選択肢ボタンをクリックしたときの処理
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  //選択されていない選択肢ボタン
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandlerSelect(e);
  });
  //選択されている選択肢ボタン
  $select[handlerIndex].addEventListener('click',(e)=>{
    clickHandlerSelected(e);
  });
  handlerIndex++;
};

//回答するをクリックしたときの処理
document.getElementById("answer-btn").addEventListener('click',()=>{
  clickHandler();
});

//解説を表示するをクリックしたときの処理
document.getElementById("description-btn").addEventListener('click',()=>{
  clickHandlerDescription();
});

//次の問題に進むをクリックしたら問題を切り替える
$nextButton.addEventListener('click',(e)=>{
  //選択肢をクリックしたか？
  if(answered === false){
    if(quizIndex + 1 < quizLength){
      //問題がまだある
      quizNumber++;
      quizIndex++;
      setupQuiz();
    } else {
      //問題がもうない
      clickHandlerDescription();
      quizScore();
      $nextButton.textContent = 'もう一度最初からやり直す';
      answered = true;
    }
  } else {
    answered = false;
    if($nextButton.textContent === 'もう一度最初からやり直す'){
      quizIndex = 0;
      score = 0;
      quizNumber = 1;
      document.getElementById("js-result").style.display ="none";
      document.getElementById("chart").style.display ="none";
      shuffle(quiz);
      $nextButton.textContent = '次の問題に進む';
    }
    document.getElementsByClassName("alert-success")[0].style.display = "none";
    document.getElementsByClassName("alert-danger")[0].style.display = "none";
    setupQuiz();
  }
  
});


