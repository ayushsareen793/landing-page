// hamburger menu toggle
var hamburger = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

hamburger.onclick = function() {
    navLinks.classList.toggle('open');
}

// close the menu when a link is clicked
var links = navLinks.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        navLinks.classList.remove('open');
    }
}

// contact form - basic validation
var form = document.getElementById('contactForm');
var successMsg = document.getElementById('successMsg');

form.onsubmit = function(e) {
    e.preventDefault();

    var name    = document.getElementById('nameInput').value;
    var email   = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    if (name == '' || email == '' || message == '') {
        alert('Please fill in all fields!');
        return;
    }

    // normally you would send this data to a backend
    // for now just showing a success message
    successMsg.textContent = 'Thanks ' + name + '! We will get back to you soon.';

    // clear the form
    form.reset();
}