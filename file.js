let question = [
  "Javascript is an _______ language?",
  "Which of the following keywords is used to define a variable in Javascript?",
  "Which of the following methods is used to access HTML elements using Javascript?",
  "Upon encountering empty statements, what does the Javascript Interpreter do?",
];
let optins = [
  ["object-orinted", "object-based", "Procedural", "None of the above"],
  ["var ", "let  ", "Both A & B", "None of the above"],
  [
    "GetElementByID()",
    "GetElementByClassName()",
    "BOTH A & B",
    "None of the above",
  ],
  [
    "Throw an error",
    "ignore the statements",
    "Gives warning",
    "None of the above",
  ],
];


let questionOptions = document.querySelectorAll(".options-w");
let questions = document.getElementById("question");
let nxt = document.getElementById("next");
let prev = document.getElementById("prev");
let rend = document.getElementById("option");
let a = 0;

const calculated = () => {
  nxt.disabled = true;
  nxt.removeAttribute("class");
};
let t = 0;
function render() {
  if (optins[a]) {
   let title =  document.createElement('h1');
   title.innerText = question[t];
   
    rend.appendChild(title)


    optins[a].map((item, i) => {
      let par = document.createElement("div");
   
      let inpu = document.createElement("input");
      inpu.className = "radioActive";
      let l = document.createElement("label");
     l.className ='labelActive'
      l.innerText = item;
      inpu.setAttribute("type", "radio");
      inpu.setAttribute("name", "options");
      
      par.appendChild(inpu);
      par.appendChild(l);
      
      rend.appendChild(par);

    });


  }

}
let answer = [
  "object-orinted",
  "Both A & B",
  "BOTH A & B",
  "ignore the statements",
];
render();
let ans = 0;
let start = 0; 
const checkAnswer = (index, elemnt, labelCheck) => {

 if(labelCheck[index].innerText===answer[start]){
  ans++;
  start++;
 
 ;
  console.log(ans)
 }else{
 
  start++;
 }
  
};
nxt.addEventListener("click", function () {
  let radioCheck = document.querySelectorAll(".radioActive");
  let labelCheck = document.querySelectorAll('.labelActive');
  radioCheck.forEach((item, i) => {
    if (item.checked) {
      checkAnswer(i, radioCheck, labelCheck);
    }
  });

  if (a < question.length - 1) {
    rend.innerHTML = "";
    a++;
    t++
    render();
    check();
  }
});
function check() {
  if (a < 1) {
    prev.disabled = true;
    prev.removeAttribute("class");
  } else {
    prev.disabled = false;
    prev.setAttribute("class", "btn2");
  }

  if (a >= question.length - 1) {
    nxt.disabled = true;
    nxt.removeAttribute("class");
  }
}
check();

prev.addEventListener("click", function () {
  if (a > 0) {
    rend.innerHTML = "";
    a--;
    t--
    nxt.disabled = false;
    nxt.setAttribute("class", "btn1");
    render();
    check();
  }
});

// declare__Score
let submit = document.getElementById("submit-btn");
let optionClicked = document.getElementById("options");
let score= document.getElementById('score');
const submitCalculate = () => {
  let radioCheck = document.querySelectorAll(".radioActive");
  let labelCheck = document.querySelectorAll('.labelActive');
  radioCheck.forEach((item,i)=>{
      if(item.checked){
        checkAnswer(i,radioCheck,labelCheck)
      }
  })
  console.log(a)
  score.innerText = `${ans}/${question.length}`;


};

submit.addEventListener("click", submitCalculate);
function playAgain(){
 window.location.reload()
}