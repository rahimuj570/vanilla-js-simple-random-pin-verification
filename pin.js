/* -------------------
---RANDOM PIN GENERATOR
------------------ */
function randomPin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin + "";
}

// -------PIN GENERATE CLICK HANDLER----
document.querySelector(".generate-btn").addEventListener("click", function () {
  const randomPinGenerator = randomPin();
  if (randomPinGenerator.length === 4) {
    document.getElementById("pin-generate-display").value = randomPinGenerator;
  } else {
    randomPin();
  }
});

// -------PIN VERIFY CLICK HANDLER----
document.querySelector(".submit-btn").addEventListener("click", function () {
  const randomPinGenerator = parseInt(
    document.getElementById("pin-generate-display").value
  );
  const randomPinVerify = parseInt(
    document.getElementById("pin-verify-display").value
  );
  console.log(randomPinVerify);
  console.log(randomPinGenerator);
  if (randomPinGenerator == randomPinVerify) {
    document.getElementById("error-notify").style.display = "none";
    document.getElementById("demo-notify").style.display = "none";
    document.getElementById("success-notify").style.display = "block";
  } else {
    document.getElementById("error-notify").style.display = "block";
    document.getElementById("demo-notify").style.display = "none";
    document.getElementById("success-notify").style.display = "none";
  }
});

// ------------BUTTON CLICK------------
const btnElem = document.getElementsByClassName("button");
for (const btn of btnElem) {
  console.log(btn.innerText);
}
