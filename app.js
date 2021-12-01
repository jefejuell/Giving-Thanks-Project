const gratitudeForm = document.querySelector(".form-gratitude");
const listInput = document.getElementById("gratitude-entry");
const listArea = document.querySelector(".list-container");
const btnSubmit = document.querySelector(".btn-submit");
const btnReset = document.querySelector(".btn-reset");
const reasonInput = document.getElementById("reason");
const gratitudeReason = document.querySelector(".form-reason");
const reasonArea = document.querySelector(".reason-container");
const btnQuote = document.querySelector(".btn-quote");
const quoteArea = document.querySelector(".quote-container");
const quotes = [ 
    "Gratitude is much more than a verbal expression of thanks.  ~Mary Baker Eddy",
    "Action expresses more gratitude than speech.  ~Mary Baker Eddy",
    "We make a living by what we get. We make a life by what we give.",
    "I am happy because I'm grateful. I choose to be grateful. That gratitude allows me to be happy.  ~Will Arnett",
    "Always have an attitude of gratitude.  ~Sterling K. Brown",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.  ~John F. Kennedy",
    "It is a good thing to give thanks unto the Lord.  ~Psalm 92:1",
    "Our gratitude is riches, Complaint is poverty  ~Vivian Burnett"
]
/*****Event Listeners*****/
gratitudeForm.addEventListener("submit", addItem);

gratitudeReason.addEventListener("submit", addReason);

btnReset.addEventListener("click", resetList);

btnQuote.addEventListener("click", quoteDisplay);

/****Functions******/
function addItem(e) {
    e.preventDefault();
    showTitle();
    // const areaTitle = document.querySelector(".list-title");
    // areaTitle.classList.add("show-title");
    const itemTitle = listInput.value;
    if (itemTitle.length != 0) {
    const element = document.createElement("article");
    element.classList.add("list-item");

    element.innerHTML = `<li class="title">${itemTitle}</li>`;
    listArea.appendChild(element);
    } else {
        window.alert("Please enter gratitude.");
    }

    resetDefaults();
}

function addReason(e) {
    e.preventDefault();
    showTitle();
    // const areaTitle = document.querySelector(".list-title2");
    // areaTitle.classList.add("show-title");
    const reason = reasonInput.value;
    if (reason.length != 0) {
    const element = document.createElement("article");
    element.classList.add("reason-item");
    element.innerHTML = `<li class="title2">${reason}</li>`;
    reasonArea.appendChild(element);
    // const areaTitle = document.querySelector(".list-title2");
    // areaTitle.classList.add("show-title");
    } else {
        window.alert("Please enter reason.")
    }
    resetDefaults();
}

function showTitle() {
    const areaTitles = document.querySelectorAll(".list-title");
    areaTitles.forEach(function (title) {
        title.classList.add("show-title");
    }); 
}

function resetDefaults() {
    listInput.value = "";
    reasonInput.value = "";
}

function resetList() {
    const items = document.querySelectorAll(".list-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            listArea.removeChild(item);
        });
        const areaTitles = document.querySelectorAll(".list-title");
        areaTitles.forEach(function (title){
            title.classList.remove("show-title");
        });
    }  
}

function quoteDisplay() {
    const items = document.querySelectorAll(".quote-item")
    if (items.length > 0) {
        items.forEach(function (item) {
            quoteArea.removeChild(item);
        });
    }
    const quoteTotal = quotes.length;
    const quoteNum = Math.floor(Math.random()*quoteTotal);
    const quoteChoice = quotes[quoteNum];
    console.log(quoteChoice);
    let element = document.createElement("article");
    element.classList.add("quote-item");
    let quote = document.createTextNode("p");
    element.appendChild(quote);

    element.innerHTML = `${quoteChoice}`;
    quoteArea.appendChild(element);
}

