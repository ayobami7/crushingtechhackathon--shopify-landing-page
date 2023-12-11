// Function to toggle the setup steps dropdown and change the button icon
function toggleSetupSteps() {
    // Select the setup steps container
    var setupSteps = document.getElementById('setupSteps');

    // Toggle the 'show' class to display or hide the setup steps
    setupSteps.classList.toggle('show');

    // Toggle the visibility of open and close buttons
    var openBtn = document.getElementById('openBtn');
    openBtn.classList.toggle('show');

    var closeBtn = document.getElementById('closeBtn');
    closeBtn.classList.toggle('show');
}


// Function to toggle the content of a step
document.addEventListener("DOMContentLoaded", function() {
    var setupSteps = document.querySelectorAll('.step');

    setupSteps.forEach(function(step) {
      var stepContent = document.getElementById(step.id + '-content');
      step.addEventListener('click', function() {
        toggleStepContent(stepContent.id);
      });
    });
  });

function toggleStepContent(stepId) {
    var allSteps = document.querySelectorAll('.step-content.active');
    allSteps.forEach(function (step) {
        if (step.id !== stepId) {
            step.classList.remove('active');
        }
    });

    var stepContent = document.getElementById(stepId);
    stepContent.classList.toggle('active');
}

// Event listener for DOMContentLoaded to add click event listeners to each step
document.addEventListener("DOMContentLoaded", function () {
    var setupSteps = document.querySelectorAll('.step');

    setupSteps.forEach(function (step) {
        var stepContent = document.getElementById(step.id + '-content');
        step.addEventListener('click', function () {
            toggleStepContent(stepContent.id);
        });
    });
});
