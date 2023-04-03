console.log(localStorage.getItem("questions"));

if(localStorage.getItem("questions") !== null) {
    LoadQuestions();
}

function SubmitQuestion() {
    // alert("MessageBox");
    console.log("capstone");
    let userInput = document.getElementById("questioninput").value;
    if(userInput) {
        let questionList = [];
        if(localStorage.getItem("questions") === null) {
            questionList = [userInput];
        }
        else {
            questionList = JSON.parse(localStorage.getItem("questions"));
            questionList.push(userInput);
        }
        localStorage.setItem("questions", JSON.stringify(questionList));
        console.log(localStorage.getItem("questions"));
    }
    else {
        alert("enter text");
    }
}

function LoadQuestions() {
    let listquestions = document.getElementById("listquestions");
    let questionList = JSON.parse(localStorage.getItem("questions"));
    for(let i = 0; i <= questionList.length; i++) {
        let currentQuestion = questionList[i];
        let html = `<div class="questionstemplate">
        <p>${currentQuestion}</p>
        <div class="templateimages">
            <img src="images/pencil.png" alt="">
            <img src="images/bin.png" alt="">
        </div>
        </div>`
        listquestions.insertAdjacentHTML("afterbegin", html);
    }
}