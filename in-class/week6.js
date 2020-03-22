const feedbackE1 = document.getElementByElementById('username');

function checkUserName(){
    console.log(usernameEl);
    console.log(usernameEl.value);

    if ((usernameEl.value.length <5)
    {feedbackE1.El.innerHTML='Username must be at least 5 characters.'
    feedbackEl.classList.add('danger')}
}


usernameE1.addEventlistener('blur,'checkUserName);