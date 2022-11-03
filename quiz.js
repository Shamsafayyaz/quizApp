const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: "Brendan Eich"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: "npm"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers:"ESLint"
    }
];
const prompt = require("prompt-sync")({sigint:true});
let name=prompt("enter your name: ")
let score=0
for(let i=0;i<myQuestions.length;i++){
    let ques=myQuestions[i].question;
    let name=prompt(ques)
    if(name==myQuestions[i].answers){
        score=score+5;
    }
}
console.log(name+" your score is: "+score)
if(score<6)
{
    console.log("you lose")
}
else{
    console.log("you win")
}

