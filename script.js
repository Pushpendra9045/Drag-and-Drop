// Retrieve the necessary elements from the DOM
let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");
let resetButton = document.getElementById("reset-button");
let popupMessage = document.getElementById("popup");

let selectedElement = null; // Variable to track the selected element

// Iterate over the list elements
for (let list of lists) {
  // Touch events for mobile devices
  list.addEventListener("touchstart", function (e) {
    selectedElement = e.currentTarget;
  });

  rightbox.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  rightbox.addEventListener("touchend", function (e) {
    if (selectedElement) {
      rightbox.appendChild(selectedElement);
      selectedElement = null;
      showPopupMessage("Drop and drag successful!");
    }
  });

  leftbox.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });

  leftbox.addEventListener("touchend", function (e) {
    if (selectedElement) {
      leftbox.appendChild(selectedElement);
      selectedElement = null;
      showPopupMessage("Drop and drag successful!");
    }
  });

  // Mouse events for desktop/laptop devices
  list.addEventListener("dragstart", function (e) {
    selectedElement = e.currentTarget;
  });

  rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  rightbox.addEventListener("drop", function (e) {
    if (selectedElement) {
      rightbox.appendChild(selectedElement);
      selectedElement = null;
      showPopupMessage("Drop and drag successful!");
    }
  });

  leftbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  leftbox.addEventListener("drop", function (e) {
    if (selectedElement) {
      leftbox.appendChild(selectedElement);
      selectedElement = null;
      showPopupMessage("Drop and drag successful!");
    }
  });
}

// Reset button click event listener
resetButton.addEventListener("click", function () {
  // Reset the image to its original state by moving all elements back to the left box
  while (rightbox.firstChild) {
    leftbox.appendChild(rightbox.firstChild);
  }
});

// Function to show the popup message
function showPopupMessage(message) {
  popupMessage.textContent = message;
  popupMessage.style.display = "block";
  setTimeout(function () {
    popupMessage.style.display = "none";
  }, 2000);
}
