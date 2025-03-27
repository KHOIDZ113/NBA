const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

// DOM Elements
const gamesList = document.getElementById('games-list');
const teamsContainer = document.getElementById('teams-container');
const playersContainer = document.getElementById('players-container');
const searchGameInput = document.getElementById('search-game');
const searchTeamInput = document.getElementById('search-team');
const searchPlayerInput = document.getElementById('search-player');

// Fetch Games
async function fetchGames() {
    try {
        const response = await fetch('https://api.balldontlie.io/v1/games', {
            headers: { 'Authorization': apiKey }
        });
        const data = await response.json();
        displayGames(data.data);
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

function displayGames(games) {
    gamesList.innerHTML = "";
    if (games.length === 0) {
        gamesList.innerHTML = "<p>No games found.</p>";
        return;
    }
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('card');
        gameCard.innerHTML = `
            <h3>${game.home_team.full_name} vs ${game.visitor_team.full_name}</h3>
            <p>Date: ${new Date(game.date).toLocaleDateString()}</p>
            <p>Score: ${game.home_team_score} - ${game.visitor_team_score}</p>
            <p>Period: ${game.period}</p>
            <p>Status: ${game.status}</p>
        `;
        gamesList.appendChild(gameCard);
    });
}

searchGameInput.addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    fetchGames().then(() => {
        const filteredGames = gamesData.filter(game =>
            game.home_team.full_name.toLowerCase().includes(keyword) ||
            game.visitor_team.full_name.toLowerCase().includes(keyword) ||
            game.date.includes(keyword)
        );
        displayGames(filteredGames);
    });
});

fetchGames();

// Fetch Teams
async function fetchTeams() {
    try {
        const response = await fetch('https://api.balldontlie.io/v1/teams', {
            headers: { 'Authorization': apiKey }
        });
        const data = await response.json();
        displayTeams(data.data);
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

function displayTeams(teams) {
    teamsContainer.innerHTML = "";
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('card');
        teamCard.innerHTML = `
            <h3>${team.full_name}</h3>
            <p>📍 City: ${team.city}</p>
            <p>🏆 Abbreviation: ${team.abbreviation}</p>
            <p>🎯 Conference: ${team.conference}</p>
            <p>🌍 Division: ${team.division}</p>
        `;
        teamsContainer.appendChild(teamCard);
    });
}

searchTeamInput.addEventListener('input', function() {
    const query = searchTeamInput.value.toLowerCase();
    fetchTeams().then(() => {
        const filteredTeams = teamsList.filter(team => team.full_name.toLowerCase().includes(query));
        displayTeams(filteredTeams);
    });
});

fetchTeams();

// Fetch Players
async function fetchPlayers() {
    try {
        const response = await fetch('https://api.balldontlie.io/v1/players', {
            headers: { 'Authorization': apiKey }
        });
        const data = await response.json();
        displayPlayers(data.data);
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}

function displayPlayers(players) {
    playersContainer.innerHTML = "";
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('card');
        playerCard.innerHTML = `
            <h3>${player.first_name} ${player.last_name}</h3>
            <p>🏀 Team: ${player.team.full_name}</p>
            <p>📏 Height: ${player.height_feet ? player.height_feet + "'" : "N/A"} ${player.height_inches ? player.height_inches + '"' : ""}</p>
            <p>⚖️ Weight: ${player.weight_pounds ? player.weight_pounds + " lbs" : "N/A"}</p>
            <p>🔢 Jersey: ${player.jersey_number || "N/A"}</p>
            <p>🏅 Position: ${player.position || "N/A"}</p>
        `;
        playersContainer.appendChild(playerCard);
    });
}

searchPlayerInput.addEventListener('input', function() {
    const query = searchPlayerInput.value.toLowerCase();
    fetchPlayers().then(() => {
        const filteredPlayers = playersList.filter(player => {
            const playerName = `${player.first_name} ${player.last_name}`.toLowerCase();
            return playerName.includes(query);
        });
        displayPlayers(filteredPlayers);
    });
});

fetchPlayers();