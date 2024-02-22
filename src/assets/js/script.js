// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//whatsapp
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil nilai input nama, email, dan pesan
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Nomor WhatsApp Anda
    var phoneNumber = "6285790663367"; // Ganti dengan nomor WhatsApp Anda

    // Menghasilkan pesan WhatsApp
    var whatsappMessage =
      "Nama: " + name + "\nEmail: " + email + "\nPesan: " + message;

    // Membuka aplikasi WhatsApp dengan pesan yang disiapkan
    window.open(
      "https://api.whatsapp.com/send?phone=" +
        phoneNumber +
        "&text=" +
        encodeURIComponent(whatsappMessage),
      "_blank"
    );
  });
