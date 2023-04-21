/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let numberOfSelectedDays = 0;

let daySelectors = document.querySelector('.day-selector li');
let totalCostElement = document.querySelector('#calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let selectedDays = null;
// let totalCost = 0;

daySelectors.forEach(function(daySelector) {
    daySelector.addEventListener('click', function() {
        daySelectors.forEach(function(button) {
            button.classList.remove('clicked');
        });

        selectedDays = daySelector.dataset.day;

        totalCost = calculateTotalCost(selectedDays);

        totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    });
});

function calculateTotalCost(selectedDays) {
    let costPerDay = 10;
    if (selectedDays === 'monday') {
        costPerDay = 15;
    }
    return costPerDay;
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.querySelector('#clear-button')

clearDays.addEventListener('click', function() {
    daySelectors.forEach(function(button) {
        button.classList.remove('.clicked');
    });

    selectedDays = null;
    totalCost = 0;

    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
});

clearButton.addEventListener('click', function() { 
    daySelectors.forEach(function(button) {
        button.classList.remove('.clicked');
    });

    selectedDays = null;
    totalCost = 0;

    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const fullDayButton = document.querySelector('#full');
const halfDayButton = document.querySelector('#half');

let selectedDay = null;
let dailyRate = 10;
let totalCost = 0;

halfDayButton.addEventListener('click', function() {

  dailyRate = 20;

  halfDayButton.classList.add('.clicked');
  fullDayButton.classList.remove('.clicked');

  totalCost = calculateTotalCost(selectedDay, dailyRate);

  totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
});

function calculateTotalCost(selectedDay, dailyRate) {
  let costPerDay = dailyRate;
  if (selectedDay === 'saturday' || selectedDay === 'sunday') {
    costPerDay *= 1.5;
  }
  return costPerDay;
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    dailyRate = 35;

    halfDayButton.classList.remove('.clicked');
    fullDayButton.classList.add('.clicked');

    totalCost = calculateTotalCost(selectedDay, dailyRate);

    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
})

function calculateTotalCost(selectedDay, dailyRate) {
    let costPerDay = dailyRate;
    if (selectedDay === 'saturday' || selectedDay === 'sunday') {
        costPerDay *= 1.5;
    }
    return costPerDay;
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

calculatedCostElement.innerHTML = `$${calculatedValue.toFixed(2)}`;

