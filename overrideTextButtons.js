document.addEventListener('DOMContentLoaded', function () {
  const specificTextNumber = '1111-1111-1111';
  const formattedTextNumber = specificTextNumber.replace(/[^0-9]/g, '');
  const messageBody = encodeURIComponent(
    "Hi I'd like to schedule an appointment."
  );
  const targetClass = 'text-me';

  function overrideTextButtonNumbers() {
    document.querySelectorAll(`a.${targetClass}`).forEach((button) => {
      const href = button.getAttribute('href');
      if (href && href.startsWith('sms:')) {
        button.setAttribute(
          'href',
          `sms:+1${formattedTextNumber}?body=${messageBody}`
        );
        button.textContent = `Text Now: ${specificTextNumber}`; // Ensure text content is updated
      }
    });
  }

  // Run the override function once after the DOM is fully loaded
  overrideTextButtonNumbers();

  // Set an interval to continuously reapply the override if needed
  setInterval(overrideTextButtonNumbers, 500); // Adjust the interval as needed

  console.log('OverrideTextButtonNumbers is running');
});
