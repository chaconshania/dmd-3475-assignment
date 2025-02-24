/**
 * Get references to each of the form inputs
 */
let total = document.querySelector("#total");
let tip = document.querySelector("#tip");
let people = document.querySelector("#people");

/**
 * Whenever the fields are updated, we call
 * the updateValues function.
 */
total.addEventListener("change", updateValues);
total.addEventListener("keyup", updateValues);
tip.addEventListener("change", updateValues);
tip.addEventListener("keyup", updateValues);
people.addEventListener("change", updateValues);
people.addEventListener("keyup", updateValues);

/**
 * We will need references for the span tags
 * that we will use to output our results.
 */
let tipOutput = document.querySelector(".tipOutput");
let totalOutput = document.querySelector(".totalOutput");

/**
 * This function is run every time an input is changed
 * by a user.
 */
function updateValues(event) {
  // Get the latest values from our form inputs
  let totalValue = total.value;
  let tipValue = tip.value;
  let peopleValue = people.value;

  // Update the values on the screen
  tipOutput.innerText = calculateTipPerPerson(
    totalValue,
    tipValue,
    peopleValue
  );
  totalOutput.innerText = calculateTotalPerPerson(
    totalValue,
    tipValue,
    peopleValue
  );
}

/**
 * Your code goes down here ...
 * @todo Write functions for calculateTipPerPerson() and calculateTotalPerPerson()
 */
// Instructions

/* Define both required functions: calculateTipPerPerson() and calculateTotalPerPerson().
Each function should accept the 3 arguments being passed to them within the updateValues() function.
Using those values, calculate and return the appropriate answer.
Extra credit: Properly round the dollars and cents that are returned by your functions.*/

//formula: bill amount * (tippercentage /100) / total of people

function calculateTipPerPerson(billAmount, tipPercentage, numberOfPeople) {
  return ((billAmount * (tipPercentage / 100)) / numberOfPeople).toFixed(2);
}
