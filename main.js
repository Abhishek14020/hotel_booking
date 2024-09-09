const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
// Scroll to Booking Form
document.getElementById('scrollToBookingBtn').addEventListener('click', function () {
    // Scroll to the booking form section
    document.querySelector('.booking__container').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('scrollToBookingBtn2').addEventListener('click', function () {
    // Scroll to the booking form section
    document.querySelector('.booking__container').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('scrollToBookingBtn3').addEventListener('click', function () {
    // Scroll to the booking form section
    document.querySelector('.booking__container').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('scrollToBookingBtn4').addEventListener('click', function () {
    // Scroll to the booking form section
    document.querySelector('.booking__container').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('proceedBtn').addEventListener('click', function () {
    // Get the form values
    const city = document.getElementById('CityName').value;
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    const guests = document.getElementById('guest').value;

    // Check if all fields are filled
    if (city && checkInDate && checkOutDate && guests) {
        // Hide the booking form and show the room selection form
        document.querySelector('.booking__form').style.display = 'none';
        document.getElementById('roomSelectionForm').style.display = 'block';
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('proceedBtn').addEventListener('click', function () {
    const city = document.getElementById('CityName').value;
    const checkInDate = document.getElementById('check-in').value;
    const checkOutDate = document.getElementById('check-out').value;
    const guests = document.getElementById('guest').value;
  
    if (city && checkInDate && checkOutDate && guests) {
      document.querySelector('.booking__form').style.display = 'none';
      document.getElementById('roomSelectionForm').style.display = 'block';
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Handle room selection and proceed to payment
  document.getElementById('roomForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('roomSelectionForm').style.display = 'none';
    document.getElementById('paymentForm').style.display = 'flex'; // Show the payment form as a modal
  });
  
  // Handle payment form submission
  document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
  
    if (fullName && cardNumber && expiryDate && cvv) {
      alert('Payment successful! Thank you for booking.');
      // Optionally, send data to the server here.
      document.getElementById('paymentForm').style.display = 'none'; // Close the modal after payment
    } else {
      alert('Please fill out all payment fields.');
    }
  });
  
  // Close the payment popup when clicking on the close button
document.querySelector('.close-btn').addEventListener('click', function () {
document.getElementById('paymentForm').style.display = 'none';
});
  
    