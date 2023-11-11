const container1 = document.getElementById("container1");
const form = document.getElementById("form");
const email = document.getElementById("email-input");
const dismissMessage = document.getElementById("dismiss-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInput();
});

const validateInput = () => {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setError(email, "Email can not be empty!");
    } else if (!isEmail(emailValue)) {
        setError(email, "Valid email required");
    } else {
        setSuccess();
    }
};

const setError = (element, message) => {
    element.className = "w-full h-[55px] border-2 border-primary-tomato rounded-lg placeholder:text-primary-tomato px-6 py-4 bg-primary-tomato-a";
    const small = document.querySelector("small");
    small.innerText = message;
};

function setSuccess() {
    window.location.href = form.action;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
