const openBtn1 = document.querySelector("#cta_open1");
const closeBtn1 = document.querySelector("#close_btn");
const dialog1 = document.querySelector("#dialog1");

const openBtn2 = document.querySelector("#cta_open2");
const closeBtn2 = document.querySelector("#close_btn2");
const dialog2 = document.querySelector("#dialog2");

const openBtn3 = document.querySelector("#cta_open3");
const closeBtn3 = document.querySelector("#close_bt3");
const dialog3 = document.querySelector("#dialog3");
let dialogOpen = 0;

openBtn1.addEventListener("click", openDialog1);
function openDialog1() {
  console.log("dialog1 Opened");
  dialog1.classList.add("fadeIn");
  dialog1.classList.remove("rotate");
  dialogOpen = 1;
  dialogOpen = dialog1.showModal();
}

closeBtn1.addEventListener("mousedown", closeDialog1);
function closeDialog1() {
  console.log("dialog1 Closing");
  dialog1.classList.remove("fadeIn");
  dialog1.classList.add("rotate");

  dialog1.addEventListener("animationend", closeDialog1_1);
  function closeDialog1_1() {
    console.log("dialog1 ANIMATIONEND Closed1");

    dialog1.classList.remove("rotate");

    dialog1.close();
    dialogOpen = 0;
    dialog1.removeEventListener("animationend", closeDialog1_1);
  }
}

openBtn2.addEventListener("click", openDialog2);
function openDialog2() {
  dialog2.classList.add("fadeIn");
  dialog2.showModal();
}

closeBtn2.addEventListener("click", closeDialog2);
function closeDialog2() {
  dialog2.close();
}

openBtn3.addEventListener("click", openDialog3);
function openDialog3() {
  dialog3.classList.add("fadeIn");
  dialog3.showModal();
}

closeBtn3.addEventListener("click", closeDialog3);
function closeDialog3() {
  dialog3.close();
}
