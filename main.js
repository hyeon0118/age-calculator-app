const form = document.getElementById('form');

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const dayLabel = document.querySelector('.dayLabel');
const monthLabel = document.querySelector('.monthLabel');
const yearLabel = document.querySelector('.yearLabel');

const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');

const button = document.querySelector('.button');
const submitButton = document.getElementById('submit');

const years = document.querySelector('.years span');
const months = document.querySelector('.months span');
const days = document.querySelector('.days span');

button.addEventListener('click', function () {
    submitButton.click();
})

form.addEventListener('submit', function (event) {
    let isFormValid = true;
    const currentYear = new Date().getFullYear();

    if (dayInput.value < 1 || dayInput.value > 31 || isNaN(dayInput.value)) {
        isFormValid = false;
        dayInput.style.borderColor = 'var(--light-red)';
        dayLabel.style.color = 'var(--light-red)';
        dayError.textContent = 'Must be a valid day';
    } else {
        dayInput.style.borderColor = 'initial';
        dayLabel.style.color = "initial";
        dayError.textContent = '';
    }

    if (monthInput.value < 1 || monthInput.value > 12 || isNaN(monthInput.value)) {
        isFormValid = false;
        monthInput.style.borderColor = 'var(--light-red)';
        monthLabel.style.color = 'var(--light-red)';
        monthError.textContent = 'Must be a valid month';
    } else {
        monthInput.style.borderColor = 'initial';
        monthLabel.style.color = "initial";
        monthError.textContent = '';
    }

    if (yearInput.value < 0 || yearInput.value > currentYear || isNaN(yearInput.value)) {
        isFormValid = false;
        yearInput.style.borderColor = 'var(--light-red)';
        yearLabel.style.color = 'var(--light-red)';
        yearError.textContent = 'Year must be in the past';
    } else {
        yearInput.style.borderColor = 'initial';
        yearLabel.style.color = "initial";
        yearError.textContent = '';
    }

    if (!isFormValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        calculate();
    }

})

function calculate() {
    const now = new Date();
    const current = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    const diff = now - current;

    const year = Math.floor(diff / 31536000000);
    const month = Math.floor((diff % 31536000000) / 2628000000);
    const day = Math.floor(((diff % 31536000000) % 2628000000) / 86400000);

    years.textContent = year;
    months.textContent = month;
    days.textContent = day;
}
