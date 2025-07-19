
    // Set max date to today
    const dobInput = document.getElementById('dob');
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);

    // Calculate Age
    function calculateAge() {
      const dob = new Date(dobInput.value);
      const today = new Date();
      if (!dobInput.value) {
        document.getElementById('result').innerHTML = "<span>Please select your date of birth.</span>";
        return;
      }
      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }

      if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }

      document.getElementById('result').innerHTML =
        `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
    }

    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      const button = document.querySelector('.dark-mode-toggle');
      button.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
