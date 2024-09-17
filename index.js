document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
  
    button.addEventListener("click", function() {
      const dayInput = document.getElementById("day");
      const monthInput = document.getElementById("month");
      const yearInput = document.getElementById("year");
  
      const dayValue = parseInt(dayInput.value);
      const monthValue = parseInt(monthInput.value);
      const yearValue = parseInt(yearInput.value);
  
      const startDate = new Date(yearValue, monthValue - 1, dayValue);
      const endDate = new Date();
  
      if (dayValue >= 1 && dayValue <= 31 && monthValue >= 1 && monthValue <= 12) {
        let ageYears = endDate.getFullYear() - startDate.getFullYear();
        let ageMonths = endDate.getMonth() - startDate.getMonth();
        let ageDays = endDate.getDate() - startDate.getDate();
  
        if (ageDays < 0) {
          ageMonths--;
          ageDays += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        }
  
        if (ageMonths < 0) {
          ageYears--;
          ageMonths += 12;
        }
  
        document.getElementById("years").innerHTML = ageYears + " years";
        document.getElementById("months").innerHTML = ageMonths + " months";
        document.getElementById("days").innerHTML = ageDays + " days";
  
        // Remove error class if input is valid
        dayInput.classList.remove("error");
        monthInput.classList.remove("error");
        yearInput.classList.remove("error");
      } else {
        // Add error class to inputs if input is invalid
        dayInput.classList.add("error");
        monthInput.classList.add("error");
        yearInput.classList.add("error");
      }
    });
  });
  