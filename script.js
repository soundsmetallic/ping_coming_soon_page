const btn = document.querySelector('button');
const msg1 = "Whoops! It looks like you forgot to add your email";
const msg2 = "Please provide a valid email address";

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', () => {
    const email = document.getElementById('email');
    const errorMsg = document.querySelector('p.error-message');
    const errorMsgMobile = document.querySelector('p.error-message-mobile');
    if (email.value.length == 0) {
        email.classList.add('error');
        if (window.screen.width > 650) {
            errorMsg.style.display = 'initial';
            errorMsg.textContent = msg1;
        } else {
            errorMsgMobile.style.display= 'initial';
            errorMsgMobile.textContent = msg1;
        }
        
    } else if (emailRegExp.test(email.value))
        ;
    else {
        email.style.color = 'initial';
        email.classList.add('error');
        if (window.screen.width > 650) {
            errorMsg.style.display = 'initial';
            errorMsg.textContent = msg2;
        } else {
            errorMsgMobile.style.display= 'initial';
            errorMsgMobile.textContent = msg2;
        }
    }
});