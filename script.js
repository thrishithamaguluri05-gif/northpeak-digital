// Show Continue button after course selection
document.getElementById("courseSelect")?.addEventListener("change", function() {
  const continueBtn = document.getElementById("continueBtn");
  if (this.value) {
    continueBtn.style.display = "inline-block";
  } else {
    continueBtn.style.display = "none";
    document.getElementById("planForm").style.display = "none";
    document.getElementById("output").textContent = "";
  }
});

// Show duration options only after Continue
document.getElementById("continueBtn")?.addEventListener("click", function() {
  document.getElementById("planForm").style.display = "block";
});

// Handle Submit → show course + duration + price
document.getElementById("planForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const selectedCourse = document.getElementById("courseSelect").value;
  const selectedDuration = document.querySelector('input[name="duration"]:checked');

  if (!selectedCourse || !selectedDuration) {
    document.getElementById("output").textContent = "⚠️ Please select a course and duration.";
    return;
  }

  let price;
  switch (selectedDuration.value) {
    case "2": price = 300; break;
    case "4": price = 600; break;
    case "6": price = 800; break;
    case "12": price = 1500; break;
    default: price = 0;
  }

  document.getElementById("output").textContent =
    `✅ You selected ${selectedCourse} for ${selectedDuration.value} months. Price = ₹${price}`;
});


// Toggle Contact Us sidebar when Help Desk is clicked
document.getElementById("helpBtn")?.addEventListener("click", function() {
  const sidebar = document.getElementById("contactSidebar");
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";   // show
  } else {
    sidebar.style.display = "none";    // hide
  }
});

// Contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// Toggle sidebar visibility
document.getElementById("helpBtn")?.addEventListener("click", function() {
  const sidebar = document.getElementById("contactSidebar");
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";   // show
  } else {
    sidebar.style.display = "none";    // hide
  }
});

// Handle form submission
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});



document.addEventListener("DOMContentLoaded", function() {
  const helpBtn = document.getElementById("helpBtn");
  const sidebar = document.getElementById("contactSidebar");

  // Toggle sidebar when Help Desk is clicked
  helpBtn.addEventListener("click", function() {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      sidebar.style.display = "block";   // show
    } else {
      sidebar.style.display = "none";    // hide
    }
  });

  // Handle form submission
  document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
});

