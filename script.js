// const btn = document.getElementById("submit");
// // (function() {
// //             // https://dashboard.emailjs.com/admin/account

// //         })();

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     emailjs.init({
//       publicKey: "4uOalBos7z0ptqh6w",
//     });
//     event.preventDefault();
//     btn.value = "Sending...";
//     const params = {
//       user_name: document.getElementById("user_name").value,
//       user_email: document.getElementById("user_email").value,
//       subject: document.getElementById("subject").value,
//       message: document.getElementById("query").value,
//     };

//     const serviceID = "service_kn3pvnn";
//     const templateID = "template_ozn03hk";
//     emailjs.sendForm(serviceID, templateID, params).then(
//       () => {
//         btn.value = "Send Email";
//         alert("Sent!");
//       },
//       (err) => {
//         btn.value = "Send Email";
//         alert(JSON.stringify(err));
//       }
//     );
//   });
// const itemBox = document.getElementsByClassName("item-box");
// const displaydots = document.getElementById("more-button");
// console.log(displaydots);
// displaydots.addEventListener("click", function (event) {

// });9

const viewmode = document.getElementById("viewmode");
console.log(viewmode);
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "lightmode");
  viewmode.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
} else {
  if (localStorage.getItem("mode") === "lightmode")
    viewmode.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
  else viewmode.innerHTML = `<i class = "fa-solid fa-sun"></i>`;
}
document.body.classList.add(localStorage.getItem("mode"));

viewmode.addEventListener("click", function (event) {
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.replace("darkmode", "lightmode");
    viewmode.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
    localStorage.setItem("mode", "lightmode");
  } else {
    document.body.classList.replace("lightmode", "darkmode");
    viewmode.innerHTML = `<i class = "fa-solid fa-sun"></i>`;
    localStorage.setItem("mode", "darkmode");
  }
});

const more = document.getElementById("more");
const item = document.getElementsByClassName("items");
more.onclick = function () {
   document.getElementById('display').classList.toggle('active-list');
};
const viewModeSidebar = document.getElementById("viewmodesidebar");
console.log(viewModeSidebar);
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "lightmode");
  viewModeSidebar.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
} else {
  if (localStorage.getItem("mode") === "lightmode")
    viewModeSidebar.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
  else viewModeSidebar.innerHTML = `<i class = "fa-solid fa-sun"></i>`;
}
document.body.classList.add(localStorage.getItem("mode"));

viewModeSidebar.addEventListener("click", function (event) {
  if (document.body.classList.contains("darkmode")) {
    document.body.classList.replace("darkmode", "lightmode");
    viewModeSidebar.innerHTML = `<i class = "fa-solid fa-moon"></i>`;
    localStorage.setItem("mode", "lightmode");
  } else {
    document.body.classList.replace("lightmode", "darkmode");
    viewModeSidebar.innerHTML = `<i class = "fa-solid fa-sun"></i>`;
    localStorage.setItem("mode", "darkmode");
  }
});