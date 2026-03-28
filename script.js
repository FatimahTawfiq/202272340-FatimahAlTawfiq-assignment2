
/* Greating by day time*/

let currentTime= new Date().getHours();
/* Using if-else if-else condition to write the suitable greeting message based on the time */
let message;
if (currentTime < 12) {
    message = "Good Morning";
} else if (currentTime < 18) {
    message = "Good Afternoon";
} else {
    message = "Good Evening";
}

/* Locate the greeting message and update its text content */
let greetingMessage = document.getElementById('greeting');
if (greetingMessage) {
    greetingMessage.textContent = `${message}!`;
}


/* Filtering projects */

// Select all filter category buttons and all project cards
let filterItems = document.querySelectorAll('#projectFiltering li');
let projectCards = document.querySelectorAll('.pCard');

filterItems.forEach(item => {
  item.addEventListener('click', () => {
    
    // moving the 'active' class to the currently clicked category
    document.querySelector('#projectFiltering li.active').classList.remove('active');
    item.classList.add('active');

    // getting the category name from the 'data-filter' attribute
    let filterValue = item.getAttribute('data-filter');
    // loop through cards: show if they match the filter or if 'all' is selected
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'flex'; // display the card
      } else {
        card.style.display = 'none'; // hide the card
      }
    });
  });
});

/* displaying input error message */

let form=document.getElementById("contactForm")

form.addEventListener('submit', (event) => {
  // create eValid to check email validity and mValid to check that the message is not empty
  let eValid = true;
  let mValid=true;
    
  // Clear previous error messages
  document.querySelectorAll('.errorMessage').forEach(el => el.textContent = '');
    

  // Check Email
  const email = document.getElementById('email');
  if (!email.validity.valid) {
      document.getElementById('emailError').textContent = "Please enter a valid email address.";
      eValid = false;
  }

  // Check email
  let userMesage = document.getElementById('message');
  if (userMesage.value.trim() === "") {
      document.getElementById('messageError').textContent = "Please enter a message content.";
      mValid = false;
  }

  // If any field is invalid, stop the form from submitting
  if (!eValid || !mValid) {
      event.preventDefault();
  }
  else{alert("Your subbmition has been sent correctly")}
});

/*  Dark/Light modes  */

const toggleBtn = document.getElementById("mode_icon");
const body = document.body;

// Check LocalStorage to see if the user previously chose dark mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  // Add or remove the 'dark-mode' class on the body tag
  body.classList.toggle("dark-mode");
  
  // Save preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});