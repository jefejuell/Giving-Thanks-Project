/*** Declare Variables ****/
const quotes = [ 
    "Gratitude is much more than a verbal expression of thanks.  ~ Mary Baker Eddy",
    "Action expresses more gratitude than speech.  ~ Mary Baker Eddy",
    "We make a living by what we get. We make a life by what we give.",
    "I am happy because I'm grateful. I choose to be grateful. That gratitude allows me to be happy.  ~ Will Arnett",
    "Always have an attitude of gratitude.  ~ Sterling K. Brown",
    "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.  ~ John F. Kennedy",
    "It is a good thing to give thanks unto the Lord.  ~ Psalm 92:1",
    "Our gratitude is riches, Complaint is poverty  ~ Vivian Burnett",
    "This is the day that the Lord has made; let us rejoice and be glad in it. ~ Psalm 118:24",
    "And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful. ~ Colossians 3:15",
    "Oh give thanks to the Lord, for he is good, for his steadfast love endures forever! ~ Psalm 107:1",
    "For where your treasure is, there your heart will be also. ~ Matthew 6:21",
    "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you. ~ 1 Thessalonians 5:16-18",
    "You will be enriched in every way to be generous in every way, which through us will produce thanksgiving to God. ~ Corinthians 9:11",
    "Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise! ~ Psalm 95:2",
    "Rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.  ~ Colossians 2:7",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.  ~ Psalm 28:7", 
    "It's not happiness that brings us gratitude. It's gratitude that brings us happiness.",
    "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that. ~Martin Luther King, Jr."
]
const gratitudeForm = document.querySelector(".form-gratitude");
const listInput = document.getElementById("gratitude-entry");
const gratitudeArea = document.querySelector(".gratitude-container");
const btnSubmit = document.querySelector(".btn-submit");
const alert = document.querySelector(".alert");
const btnReset = document.querySelector(".btn-reset");
const reasonInput = document.getElementById("reason");
const gratitudeReason = document.querySelector(".form-reason");
const reasonArea = document.querySelector(".reason-container");
const btnQuote = document.querySelector(".btn-quote");
const quoteArea = document.querySelector(".quote-container");
const btnLike = document.querySelector(".btn-like");
const favoriteArea = document.querySelector(".favorite-container");
const btnShare = document.querySelector(".btn-share");
const gratCommentForm = document.querySelector(".comment-form");
const btnComment = document.querySelector(".btn-comment");
const gratEntry = document.getElementById("comment-entry");
const nameComment = document.getElementById("comment-name");
const commentArea = document.querySelector(".comment-container");

//edit option
let editElement;
let editFlag = false;
let editID = "";

/*****Event Listeners*****/
gratitudeForm.addEventListener("submit", addItem);

gratitudeReason.addEventListener("submit", addReason);

btnReset.addEventListener("click", resetList);

btnQuote.addEventListener("click", quoteDisplay);

btnLike.addEventListener("click", e => {
    e.currentTarget.classList.toggle("liked");
    quoteLike();
});

//gratCommentForm.addEventListener("submit", addComment);

// btnShare.addEventListener("click", function(e) {
// })

/****Functions******/
function addItem(e) {
    e.preventDefault();
    showTitles();
    // const areaTitle = document.querySelector(".list-title");
    // areaTitle.classList.add("show-title");
    const itemTitle = listInput.value;
    if (itemTitle.length != 0) {
        const element = document.createElement("article");
        element.classList.add("list-item");
        element.innerHTML = `<li class="title">${itemTitle}</li>`;
        gratitudeArea.appendChild(element);
    } else {
        window.alert("Please enter gratitude.");
    }
    displayAlert("Gratitude added successfully. Please add a reason for this gratitude.", "success");
    resetDefaults();
}

function addReason(e) {
    e.preventDefault();
    showTitles();
    const reason = reasonInput.value;
    if (reason.length != 0) {
        const element = document.createElement("article");
        element.classList.add("reason-item");
        element.innerHTML = `<li class="title2">${reason}</li>`;
        reasonArea.appendChild(element);
    } else {
        window.alert("Please enter reason.")
    }
    displayAlert("Reason added successfully", "success");
    resetDefaults();
}

function showTitles() {
    const areaTitles = document.querySelectorAll(".list-title");
    areaTitles.forEach(function (title) {
        title.classList.add("show-title");
    }); 
}

function resetDefaults() {
    listInput.value = "";
    reasonInput.value = "";
    gratEntry.value = "";
    nameComment = "";
}

function resetList() {
    const items = document.querySelectorAll(".list-item");
    console.log(items);
    if (items.length > 0) {
        items.forEach(function (item) {
            gratitudeArea.removeChild(item);
        });
    }
    const reasons = document.querySelectorAll(".reason-item");
    console.log(reasons);
    if (reasons.length > 0) {
        reasons.forEach(function (reason) {
            reasonArea.removeChild(reason);
        });
    }    
    const areaTitles = document.querySelectorAll(".list-title");
    areaTitles.forEach(function (title){
        title.classList.remove("show-title");
        });  
    
    displayAlert("Lists reset", "danger");
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 3000);
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
    let element = document.createElement("article");
    element.classList.add("quote-item");
    // let quote = document.createTextNode("p");
    // element.appendChild(quote);

    element.innerHTML = `<h2><em>${quoteChoice}</em></h2>`;
    quoteArea.appendChild(element);
    btnLike.classList.remove("liked");
}

function quoteLike() {
    let quoteItem = quoteArea.querySelector(".quote-item");
    let like = quoteItem.innerHTML;
    favoriteArea.appendChild(like);
    
}
/*
function addComment(e) { 
    e.preventDefault();
    showTitles();
    const username = nameComment.value;
    const gratComment = gratEntry.value;
    if (!editFlag) {
        const element = document.createElement("article");
        element.classList.add("comment-item");
        element.innerHTML = `<p id=${username}>"${gratComment}"  ~${username}</p>
        
            <button type="button" class="btn-edit">Edit</button>
            <button type="button" class="btn-delete">Delete</button>`;
        const btnDelete = element.querySelector(".btn-delete");
        const btnEdit = element.querySelector(".btn-edit");
        btnDelete.addEventListener("click", deleteComment);
        btnEdit.addEventListener("click", editComment);
        // Append (display) child below Comment form
        commentArea.appendChild(element);
        restoreCommentDefaults();
        displayAlert("Thanks for sharing your thoughts", "success");
    } else {
        editElement.innerHTML = `"${gratComment}"  ~${username}`;
        editElement.id = username;
        btnComment.textContent = "Submit"
        restoreCommentDefaults();
        displayAlert("Value changed", "success");
    }
}

function editComment(e) {
    const element = e.currentTarget.parentElement;
    editElement = e.currentTarget.previousElementSibling;
    gratEntry.value = editElement.innerHTML;
    nameComment.value = editElement.id;
    editFlag = "true";
    //editID = element.dataset.id;
    btnComment.textContent = "Edit";
}

function deleteComment(e) {
    const element = e.currentTarget.parentElement;
    commentArea.removeChild(element);
    if (commentArea.children.length == 0) {
        const areaTitle = document.querySelector(".list-title");
        areaTitle.classList.remove("show-title");
    }
    displayAlert("Item Removed", "danger");
    restoreCommentDefaults();
}

function restoreCommentDefaults () {
    gratEntry.value = "";
    nameComment.value = "";
    btnComment.textContent = "Submit";
}
*/