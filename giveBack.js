/*** Declare Variables ****/
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
gratCommentForm.addEventListener("submit", addComment);

/****Functions******/

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

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 3000);
}

