 // Function to store user preference in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve user preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Function to trigger animation based on user action
function triggerAnimation() {
  const animatedElement = document.getElementById("animated-box");
  animatedElement.style.transition = "transform 0.5s ease-in-out";
  animatedElement.style.transform = "translateX(100px)";
  
  // Store animation trigger state
  savePreference("animationTriggered", "true");
}

// Apply stored preference on page load
document.addEventListener("DOMContentLoaded", function () {
  const animatedElement = document.getElementById("animated-box");
  
  if (getPreference("animationTriggered") === "true") {
    animatedElement.style.transform = "translateX(100px)";
  }
});