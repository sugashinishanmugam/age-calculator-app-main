window.onload = function () {
  let calculatorForm = document.getElementById("agecalculator");
  let years = "";
  let months = "";
  let days = "";
  if (calculatorForm) {
    calculatorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const day = Number(document.getElementById("day").value);
      const month = Number(document.getElementById("month").value);
      const year = Number(document.getElementById("year").value);
      console.log("1st", day,month,year);

      let dayerror = document.getElementById("dayerror");
      let montherror = document.getElementById("montherror");
      let yearerror = document.getElementById("yearerror");

      let currentDate = new Date().getDate();
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      console.log("2nd", currentDate,currentMonth,currentYear);
      
      let yearsout = document.getElementById("yearsout");
      let monthsout = document.getElementById("monthsout");
      let daysout = document.getElementById("daysout");

      const daysInMonth = new Date(year, month, 0).getDate();

      yearsout.innerHTML = "--";
      monthsout.innerHTML = "--";
      daysout.innerHTML = "--";

      dayerror.innerHTML = "";
      montherror.innerHTML = "";
      yearerror.innerHTML = "";

      if (day <= 0 || day > 31) {
        dayerror.innerHTML = "Must be a valid day";
      } else if (day === "") {
        dayerror.innerHTML = "This field is required";
      }

      if (month > 12 || month <= 0 || String(month).match("/^dd$/") === "") {
        montherror.innerHTML = "Must be a valid month";
      } else if (month === "") {
        montherror.innerHTML = "This field is required";
      }

      if (
        year > new Date().getFullYear() ||
        (year - currentYear === 0 && month > currentMonth)
      ) {
        yearerror.innerHTML = "Must be in the past";
      } else if (year === "") {
        yearerror.innerHTML = "This field is required";
      }

      if (!((0 == year % 4 && 0 != year % 100) || 0 == year % 400)) {
        if (day > 28 && month === "02") {
          dayerror.innerHTML = "Must be a valid day1";
        }
      }

      if (day > daysInMonth) {
        dayerror.innerHTML = "Must be a valid day2";
      }

      if (new Date(`${year}/${month}/${day}`).getDate() !== day) {
        dayerror.innerHTML = `Must be a valid day3`;
      }

      if (
        dayerror.innerHTML === "" &&
        montherror.innerHTML === "" &&
        yearerror.innerHTML === ""
      ) {
        //calculate years
        const diffyears = Math.abs(year - currentYear);
        if (month > currentMonth) {
          years = diffyears - 1;
        } else {
          years = diffyears;
        }

        //calculate months
        if (month >= currentMonth) {
          const middleValue = 12 - month;
          months = middleValue + currentMonth;
        } else {
          months = Math.abs(month - currentMonth);
        }
        if (day > currentDate) {
          months = months - 1;
        }

        //calculate days
        days = Math.abs(day - new Date().getDate());
        if (day > currentDate) {
          const middValue = daysInMonth - day;
          days = middValue + currentDate;
        } else {
          days = Math.abs(day - currentDate);
        }

        yearsout.innerHTML = years;
        monthsout.innerHTML = months;
        daysout.innerHTML = days;
      }
    });
  }
};
