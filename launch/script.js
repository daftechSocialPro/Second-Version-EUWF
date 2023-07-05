function startCountdown() {
    const startButton = document.getElementById('startButton');
    startButton.style.visibility = 'hidden';
  
    let count = 3;
    const countdownElement = document.getElementById('countdown');
  
    const countdownInterval = setInterval(() => {
      countdownElement.innerHTML = count;
      count--;
  
      if (count < 0) {
        clearInterval(countdownInterval);
        celebration();
      }
    }, 1000);
  }
  
  function celebration() {
    const celebrationElement = document.getElementById('celebration');
    celebrationElement.style.opacity = '1';
    celebrationElement.style.visibility = 'visible';
    celebrationElement.classList.add('fade-in');
  
    const fireworksElement = document.getElementById('fireworks');
    fireworksElement.classList.remove('hidden');
  
    // Replace the URL below with your desired destination
    setTimeout(() => {
      window.location.href = 'http://localhost:4001/';
    }, 3000);
  }
  