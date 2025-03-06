let btns = document.querySelectorAll("button");
let totalQuestions = 6;
let yesCount = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const siblings = parent.children;

    // Remove 'light' from all siblings
    Array.from(siblings).forEach((sib) => sib.classList.remove("light"));

    // Add 'light' to the clicked button
    btn.classList.add("light");

    // Check if Yes or No clicked
    if (btn.innerText.toLowerCase() === "yes") {
      if (!parent.hasAttribute("yesClicked")) {
        yesCount++;
        parent.setAttribute("yesClicked", "true");
        parent.setAttribute("noClicked", "false"); // prevent No from toggling
        console.log("Yes clicked first time!");
      } else {
        console.log("Yes already clicked before.");
      }
    } else if (btn.innerText.toLowerCase() === "no") {
      if (parent.getAttribute("yesClicked") === "true") {
        yesCount--; // remove the yes count if switching back to No
        parent.setAttribute("yesClicked", "false");
      }
      console.log("No clicked.");
    }
  
    updateMeter()
  });

});



function updateMeter() {
    let dangerPercent = (yesCount / totalQuestions) * 100;
    document.getElementById("danger-meter").innerText = `Your chances to go to jail are : ${Math.round(dangerPercent)}%`;
  
    let meterFill = document.getElementById("meter-fill");
    meterFill.style.height = `${dangerPercent}%`;
  
    // Color steps
    if (dangerPercent <= 16) {
      meterFill.style.backgroundColor = "#4caf50"; // Green
    } else if (dangerPercent <= 33) {
      meterFill.style.backgroundColor = "#8bc34a"; // Light Green
    } else if (dangerPercent <= 50) {
      meterFill.style.backgroundColor = "#ffeb3b"; // Yellow
    } else if (dangerPercent <= 66) {
      meterFill.style.backgroundColor = "#ff9800"; // Orange
    } else if (dangerPercent <= 83) {
      meterFill.style.backgroundColor = "#f44336"; // Light Red
    } else {
      meterFill.style.backgroundColor = "#b71c1c"; // Dark Red
    }
  }
  