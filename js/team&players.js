const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';
const teamsContainer = document.getElementById('teams-container');
const playersContainer = document.getElementById('players-container');
const teamsSection = document.getElementById('teams-section');
const playersSection = document.getElementById('players-section');
const showTeamsBtn = document.getElementById('show-teams');
const showPlayersBtn = document.getElementById('show-players');
const searchTeamInput = document.getElementById('search-team');
const searchPlayerInput = document.getElementById('search-player');

let teamsList = [];
let playersList = [];

function fetchTeams() {
  fetch('https://api.balldontlie.io/v1/teams', {
    headers: { 'Authorization': apiKey }
  })
    .then(res => res.json())
    .then(data => {
      teamsList = data.data;
      displayTeams(teamsList);
    })
    .catch(err => console.error('Error fetching teams:', err));
}

function fetchPlayers() {
  fetch('https://api.balldontlie.io/v1/players', {
    headers: { 'Authorization': apiKey }
  })
    .then(res => res.json())
    .then(data => {
      playersList = data.data;
      displayPlayers(playersList);
    })
    .catch(err => console.error('Error fetching players:', err));
}

function displayTeams(teams) {
  teamsContainer.innerHTML = '';
  teams.forEach(team => {
    const btn = document.createElement('button');
    btn.className = 'team-button';
    btn.textContent = team.full_name;
    btn.onclick = () => {
      alert(`
🏀 Team: ${team.full_name}
📍 City: ${team.city}
🔤 Abbreviation: ${team.abbreviation}
🏆 Conference: ${team.conference}
🌍 Division: ${team.division}
      `);
    };
    teamsContainer.appendChild(btn);
  });
}

function displayPlayers(players) {
  playersContainer.innerHTML = '';
  players.forEach(player => {
    const btn = document.createElement('button');
    btn.className = 'player-button';
    btn.textContent = `${player.first_name} ${player.last_name}`;
    btn.onclick = () => {
      alert(`
👤 Player: ${player.first_name} ${player.last_name}
🏀 Team: ${player.team.full_name}
📏 Height: ${player.height_feet || 'N/A'}' ${player.height_inches || ''}
⚖️ Weight: ${player.weight_pounds || 'N/A'} lbs
🎽 Position: ${player.position || 'N/A'}
      `);
    };
    playersContainer.appendChild(btn);
  });
}

searchTeamInput.addEventListener('input', () => {
  const query = searchTeamInput.value.toLowerCase();
  const filtered = teamsList.filter(t => t.full_name.toLowerCase().includes(query));
  displayTeams(filtered);
});

searchPlayerInput.addEventListener('input', () => {
  const query = searchPlayerInput.value.toLowerCase();
  const filtered = playersList.filter(p =>
    `${p.first_name} ${p.last_name}`.toLowerCase().includes(query)
  );
  displayPlayers(filtered);
});

showTeamsBtn.onclick = () => {
  teamsSection.style.display = 'block';
  playersSection.style.display = 'none';
  showTeamsBtn.classList.add('active');
  showPlayersBtn.classList.remove('active');
  fetchTeams();
};

showPlayersBtn.onclick = () => {
  playersSection.style.display = 'block';
  teamsSection.style.display = 'none';
  showPlayersBtn.classList.add('active');
  showTeamsBtn.classList.remove('active');
  fetchPlayers();
};

window.onload = () => {
  fetchTeams();
  teamsSection.style.display = 'block';
  playersSection.style.display = 'none';
  showTeamsBtn.classList.add('active');
};

firebase.auth().onAuthStateChanged((user) => {
  const authLinks = document.getElementById("auth-links");
  const userInfo = document.getElementById("user-info");
  const userAvatarImg = document.getElementById("user-avatar-img");
  const userName = document.getElementById("user-name");

  if (user) {
    authLinks.style.display = "none";
    userInfo.style.display = "flex";
    userAvatarImg.src = user.photoURL || "https://via.placeholder.com/42";
    userName.textContent = user.displayName || "User";
  } else {
    authLinks.style.display = "flex";
    userInfo.style.display = "none";
  }
});
