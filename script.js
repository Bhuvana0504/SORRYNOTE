document.getElementById('sorryButton').addEventListener('click', function() {
    // Select the paragraph element
    const messageElement = document.getElementById('message');
    // Update the text content with the "Sorry" message
    messageElement.textContent = 'Extremely Sorry Balkees for what happened today as of';
    // Remove the 'hidden' class to make it visible
    messageElement.classList.remove('hidden');
  });
