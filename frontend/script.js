const hECMAthlon = {
  getMaxValue: function (input) {
    return [input.split(",").reduce((acc, curr)=>{
      const tempValue = parseInt(curr);
      return tempValue > acc ? tempValue : acc;
    }, 0)];
  },

  getGreaterThan: function (input) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((value)=>value>parseInt(input))
  },

  fizzBuzz: function (input) {
    return Array.from({ length: parseInt(input) }, (_, index) => index + 1).map((number)=>
      number % 5 === 0 && number% 3 === 0 ? "FizzBuzz":
      number % 3 === 0 ? "Fizz" :
      number % 5 === 0 ? "Buzz" :
      number
    )
  },
};

function setupEvents() {
  const maxValueButton = document.getElementById("max-value-button");
  const greaterThanButton = document.getElementById("greater-than-button");
  const fizzBuzzButton = document.getElementById("fizz-buzz-button");

  const maxValueInput = document.getElementById("max-value-input");
  const greaterThanInput = document.getElementById("greater-than-input");
  const fizzBuzzInput = document.getElementById("fizz-buzz-input");

  const maxValueContainer = document.getElementById("max-value-container");
  const greaterThanContainer = document.getElementById("greater-than-container");
  const fizzBuzzContainer = document.getElementById("fizz-buzz-container");

  maxValueButton.addEventListener("click", () => {
    const maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
    logResult(maxValueContainer, maxValue);
  });

  greaterThanButton.addEventListener("click", () => {
    const greaterValues = getOutput(
      hECMAthlon.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanContainer, greaterValues);
  });

  fizzBuzzButton.addEventListener("click", () => {
    const result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzContainer, result);
  });

  function getOutput(output) {
    return ["The function starts", ...output, "The function ends"]
  }

  function logResult(place, values) {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  }
}

setupEvents();
