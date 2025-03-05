
let currentStep = 1;

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const stepDescription = document.getElementById("step-description");

function nextStep() {
    if (currentStep === 1) {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
        stepDescription.textContent = "Indiquez votre niveau d'étude et votre année.";
        currentStep = 2;
    }
}

function prevStep() {
    if (currentStep === 2) {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
        stepDescription.textContent = "Commencez par renseigner vos informations personnelles.";
        currentStep = 1;
    }
}

document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        level: document.getElementById("level").value,
        year: document.getElementById("year").value,
    };
    console.log("Form submitted:", formData);
    // Redirect to dashboard (example)
    window.location.href = "/dashboard";
});
