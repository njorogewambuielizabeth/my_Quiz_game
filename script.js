const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;


startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions= questions.sort( ()=>Math.random() -0.5  )
  currentQuestionIndex=0;
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  quizScore=0
}


function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.anwers.forEach((answer)=>{
   const button = document.createElement('button')
    button.innerText = answer.text;
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct

    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  const selectedButton=e.target
  const correct = selectedButton.dataset.correct

  setStatusClass(document.body,correct)
  Array.from(answerButtonsElement.children).forEach((button)=>{
    setStatusClass(button,button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide')
  }else{
    startButton.innerText = "restart"
    startButton.classList.remove("hide")
  }
  if (selectedButton.dataset = correct) {
    quizScore++
  }
  document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element,correct) {
  clearStatusClass(correct)
  if (correct){
    element.classList.add("correct")
  }else{
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions =[
  { 
  question: 'which one of these is a JavaScript framework?',
  anwers:[
    {text:'Python',correct:false},
    {text:'Django',correct:false},
    {text:'React',correct:true},
    {text:'Eclipse',correct:false}
  ],
},
{ 
  question: 'who is the president of Kenya?',
  anwers:[
    {text:'Uhuru Kenyatta',correct:false},
    {text:'William Ruto',correct:true},
    {text:'Raila Odinga',correct:false},
    {text:'Musalia Mudavadi',correct:false}
  ],
},
{ 
  question: 'what is 9*5 ',
  anwers:[
    {text:'14',correct:false},
    {text:'45',correct:true},
    {text:'25',correct:false},
    {text:'35',correct:false}
  ],
},
{ 
  question: 'which one of the following is a red fruit?',
  anwers:[
    {text:'pineapple',correct:false},
    {text:'banana',correct:false},
    {text:'mango',correct:false},
    {text:'cherry',correct:true}
  ],
},
{ 
  question: 'which one of these is among the rainbow colors?',
  anwers:[
    {text:'brown',correct:false},
    {text:'white',correct:false},
    {text:'violet',correct:true},
    {text:'beige',correct:false}
  ],
},
]


  