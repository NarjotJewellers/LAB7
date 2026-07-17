// Commit 1: Added mouse event handlers
// ----------------------
// Mouse Events
// ----------------------
const mouseBtn = document.getElementById("mouseBtn");
const mouseMsg = document.getElementById("mouseMsg");

mouseBtn.addEventListener("mouseover", () => {
    mouseMsg.textContent = "Mouse is hovering!";
});

mouseBtn.addEventListener("mouseleave", () => {
    mouseMsg.textContent = "Mouse left the button!";
});
// Commit 2: Implemented keyboard event listener

// ----------------------
// Keyboard Events
// ----------------------
const keyInput = document.getElementById("keyInput");
const keyMsg = document.getElementById("keyMsg");

keyInput.addEventListener("keydown", (event) => {
    keyMsg.textContent = `Last key pressed: ${event.key}`;
});
// Commit 3: Added form submit event with preventDefault
// ----------------------
// Form Events
// ----------------------
const myForm = document.getElementById("myForm");
const formMsg = document.getElementById("formMsg");

myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent refresh
    formMsg.textContent = "Form submitted successfully!";
});
// Commit 4: Added focus and blur event handlers
// ----------------------
// Focus & Blur Events
// ----------------------
const focusInput = document.getElementById("focusInput");
const focusMsg = document.getElementById("focusMsg");

focusInput.addEventListener("focus", () => {
    focusMsg.textContent = "Input is focused!";
});

focusInput.addEventListener("blur", () => {
    focusMsg.textContent = "Input lost focus!";
});

// ----------------------
// Event Delegation
// ----------------------
const btnContainer = document.getElementById("btnContainer");
const delegateMsg = document.getElementById("delegateMsg");

btnContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("innerBtn")) {
        delegateMsg.textContent = `You clicked: ${event.target.textContent}`;
    }
});
