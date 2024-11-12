let token = '';

// Show the popup with a custom message
function showCompetitionPopup(customMessage) {
    const popup = document.getElementById('competition-popup');
    const message = document.getElementById('popup-message');
    message.textContent = customMessage;  // Set the custom message
    popup.classList.add('show');  // Show the popup

    // Hide the popup after 10 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 10000);  // 10000ms = 10 seconds
}

// Function to create a match
function createMatch() {
    const opponent = prompt('Enter the username of your opponent:');
    const customMessage = "Good luck, the competition is fierce!"; // Customize this message

    // Show the popup with the custom message
    showCompetitionPopup(customMessage);

    fetch('/create-match', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ opponent })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
}

// Function to log in the user
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        token = data.token;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
    })
    .catch(error => {
        document.getElementById('login-message').innerText = 'Login failed. Please try again.';
    });
}

// Other functions like viewing leaderboard and logout can be similarly handled
