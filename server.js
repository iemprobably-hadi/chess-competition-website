const fs = require('fs');
const path = require('path');

const leaderboardFilePath = path.join(__dirname, 'leaderboard.json');

// Check if leaderboard.json exists, if not create it with an empty array
if (!fs.existsSync(leaderboardFilePath)) {
    console.log('Leaderboard file does not exist. Creating a new one.');
    fs.writeFileSync(leaderboardFilePath, JSON.stringify([])); // Create empty leaderboard file
}

let leaderboard = [];

try {
    // Read the leaderboard data
    const data = fs.readFileSync(leaderboardFilePath, 'utf8');

    // Handle empty or malformed file
    if (!data) {
        console.log('Leaderboard file is empty. Initializing with an empty array.');
        leaderboard = [];
    } else {
        leaderboard = JSON.parse(data);
    }

} catch (error) {
    console.error('Error reading leaderboard file:', error);
    leaderboard = [];
}

// Your server logic continues here...
