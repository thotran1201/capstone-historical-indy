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
        window.location.reload();

    }
    else {
        alert("enter text");
    }
}

function DeleteQuestion(pos) {
    let questionList = JSON.parse(localStorage.getItem("questions"));
    questionList.splice(pos, 1);
    localStorage.setItem("questions", JSON.stringify(questionList));
    window.location.reload();
}

function EditQuestion(pos) {
    let questionList = JSON.parse(localStorage.getItem("questions"));
    let updateQuestion = prompt("please enter a question", "");
    let text;
    if(updateQuestion === null || updateQuestion === "") {
        alert("no question entered");
    } else {
        text = updateQuestion;
        questionList[pos] = text;
        localStorage.setItem("questions", JSON.stringify(questionList));
        window.location.reload();
    }
}

function LoadQuestions() {
    let listquestions = document.getElementById("listquestions");
    let questionList = JSON.parse(localStorage.getItem("questions"));
    for(let i = 0; i <= questionList.length - 1; i++) {
        let currentQuestion = questionList[i];
        let html = `<div class="questionstemplate">
        <h2>Question ${i+1}</h2>
        <p>${currentQuestion}</p>
        <div class="templateimages">
            <img onclick="EditQuestion(${i})" src="images/pencil.png" alt="">
            <img onclick="DeleteQuestion(${i})" src="images/bin.png" alt="">
        </div>
        </div>`
        listquestions.insertAdjacentHTML("beforeend", html);
    }
}