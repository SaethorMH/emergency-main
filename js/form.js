document.querySelector(".andet").classList.add("hide");
const form = document.querySelector("form");

const summary = document.querySelector("#form-summary");

// let vHed = formData.get("vHed");
// let svHed = document.querySelector("#svHed");

// let hImage = document.querySelector("#hbillede").value;

document.querySelector("#hRacer").addEventListener("change", andetChecker);
function andetChecker() {
  console.log("hundeRaceTestet");
  if (document.querySelector("#hRacer").value == "andet") {
    document.querySelector(".andet").classList.remove("hide");
  } else {
    document.querySelector(".andet").classList.add("hide");
  }
}

form.addEventListener("submit", submitter);

function submitter(e) {
  e.preventDefault();
  const formData = new FormData(form);

  //   let navnet = formData.get("fNavn");
  //   let skolen = formData.get("school");
  //   let navnet = formData.get("fNavn");
  //   let navnet = formData.get("fNavn");
  //   let navnet = formData.get("fNavn");
  //   let navnet = formData.get("fNavn");
  //   console.log(navnet);
  //   console.log(skolen);
  //   console.log(navnet);
  //   console.log(navnet);
  //   console.log(navnet);
  //   console.log(navnet);

  document.querySelector("#navnet").textContent = formData.get("fNavn");
  document.querySelector("#skolen").textContent = formData.get("school");
  document.querySelector("#hNavnet").textContent = formData.get("hNavn");
  document.querySelector("#hAlderen").textContent = formData.get("alder");
  document.querySelector("#hRacen").textContent = document.querySelector("#hRacer").options[document.querySelector("#hRacer").selectedIndex].text;

  document.querySelector("#vHeden").textContent = formData.get("vHed");
  document.querySelector("#faget").textContent = formData.get("skoleFag");

  //   document.querySelector("#navnet").innerHTML = `<h3>` + firstName + `</h3>`;
  //   hImage = document.querySelector("#hbillede").value;
  //   document.querySelector("#shBillede").src = hImage;
}

/* remember getAll og .join

FormData.get("name of input") = value
FormData.getAll("name of check").join("og") = all values with "og" betweem
*/

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

0;

document.querySelector("#vHed").addEventListener("input", vigtig);
function vigtig() {
  vHedNr = document.querySelector("#vHed").value;
  if (vHedNr == 5) {
    svHed.textContent = "Ekstremt";
  } else if (vHedNr == 4) {
    svHed.textContent = "Meget";
  } else if (vHedNr == 3) {
    svHed.textContent = "Lidt";
  } else if (vHedNr == 2) {
    svHed.textContent = "Ikke særlig";
  } else if (vHedNr == 1) {
    svHed.textContent = "Slet ikke";
  }
}
