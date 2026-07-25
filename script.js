document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// Get Started button functionality
document.getElementById("getStartedBtn").addEventListener("click", function() {
  // Option 1: Scroll to Services section
  document.querySelector(".services").scrollIntoView({ behavior: "smooth" });

  // Option 2: Show a message (you can remove if not needed)
  // alert("Welcome! Scroll down to see our services.");
});
