import { questions } from './data.js'

// const : 변수 재선언, 재할당 모두 불가능
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

// let : 변수 재할당 가능
let currentNumber = 0 //현재 질문 번호
let mbti = '' //최종 결과 저장

function renderQuestion() {
    const question = questions[currentNumber]
    questionEl.innerHTML = question.question
    numberEl.innerHTML = question.number
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

//다음 질문 페이지
function nextQuestion(choiceNumber) {
    // 더 이상 질문이 없으면, 결과 페이지 보여주기
    if (currentNumber === questions.length - 1) {
      showResultPage()
      return
    }
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    currentNumber = currentNumber + 1
    renderQuestion()
  }

function showResultPage(){
    location.href = '/results.html?mbti=' + mbti //쿼리스트링
}

choice1El.addEventListener('click', function () {
    nextQuestion(0)
})
choice2El.addEventListener('click', function () {
    nextQuestion(1)
})

//첫번째 질문 페이지 렌더링
renderQuestion()

