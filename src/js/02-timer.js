import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};
const dateTimePicker = flatpickr('#datetime-picker', options);

document
  .querySelector('[data-start]')
  .addEventListener('click', startCountdown);

function startCountdown() {
  const targetDate = dateTimePicker.selectedDates[0];
  const currentDate = new Date();

  if (targetDate <= currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      clearInterval(timerInterval);
      return;
    }
    const timeRemaining = convertMs(difference);

    timerFields.days.textContent = addLeadingZero(timeRemaining.days);
    timerFields.hours.textContent = addLeadingZero(timeRemaining.hours);
    timerFields.minutes.textContent = addLeadingZero(timeRemaining.minutes);
    timerFields.seconds.textContent = addLeadingZero(timeRemaining.seconds);
  }
}

function convertMs(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
