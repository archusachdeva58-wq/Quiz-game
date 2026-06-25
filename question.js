let q=[
    {
        question:"What does HTML stands for?",
        options:[
            "Hyper Text Markup Language",
            "Hyper Text Mixup Language",
            "Hyper Test Markup Language",
            "Hiper Text Markup Language"
        ],
        answer:"Hyper Text Markup Language"
    },
    {
        question:"What does CSS stands for?",
        options:[
            "Cascading Style Sheets",
            "Cascadeng Style Sheets",
            "Cascading Stile Sheets",
            "Cascading Style Shets"
        ],
        answer:"Cascading Style Sheets"
    },
    {
        question:"What is used for styling Web pages?",
        options:[
            "CSS",
            "HTML",
            "Javascript",
            "None of the above"
        ],
        answer:"CSS"
    },
    {
        question:"Which of the following develop structure of a web page?",
        options:[
            "HTML",
            "CSS",
            "Javascript",
            "None of the above"
        ],
        answer:"HTML"
    },
    {
        question:"Which is used to add dynamic changes to Web pages?",
        options:[
            "HTML",
            "CSS",
            "Javascript",
            "None of the above"
        ],
        answer:"Javascript"
    },
]
let currentindex=0;
function display(){
     document.getElementById("question").innerText=q[currentindex].question;
     let answers=document.getElementById("answers");
     answers.innerHTML="";
       q[currentindex].options.forEach(function(option){
        answers.innerHTML += `<button class="nex"  onclick="Checkanswer('${option}',this)">${option}</button><br>`;});
}
let answered=false;
function next(){
    if(currentindex<q.length-1){
        currentindex++;
        answered=false;
         display();
    if(currentindex==q.length-1){
        document.getElementById("next").innerText="Submit";
    }
}
    else{
    
        submit();
        return;
    }
    display();
}
let score=0;
function Checkanswer(option,button){
    if (answered){
    return;
}
answered=true;
    if(option==q[currentindex].answer){
        score++;
        button.classList.add("correct");
    }
    else{
        button.classList.add("wrong");
    }
}
function submit(){
    document.getElementById("question").innerText=`Your score is ${score}/${q.length}`;
    document.getElementById("answers").innerHTML="";
    document.getElementById("next").style.display = "none";
    answers.innerHTML+=` <button onclick="load()" class="nex" id="Home">Home</button>`;
}
display();
function load(){
    window.location.reload();
}