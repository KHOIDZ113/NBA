const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';
const teamsContainer = document.getElementById('teams-container');
const playersContainer = document.getElementById('players-container');
const teamsSection = document.getElementById('teams-section');
const playersSection = document.getElementById('players-section');
const showTeamsBtn = document.getElementById('show-teams');
const showPlayersBtn = document.getElementById('show-players');
const searchTeamInput = document.getElementById('search-team');
const searchPlayerInput = document.getElementById('search-player');

// Lấy danh sách đội bóng
let teamsList = [];
function fetchTeams() {
    fetch('https://api.balldontlie.io/v1/teams', {
        headers: { 'Authorization': apiKey }
    })
    .then(response => response.json())
    .then(data => {
        teamsList = data.data;
        displayTeams(teamsList);
    })
    .catch(error => console.error('Error fetching teams:', error));
}

// Lấy danh sách cầu thủ
let playersList = [];
function fetchPlayers() {
    fetch('https://api.balldontlie.io/v1/players', {
        headers: { 'Authorization': apiKey }
    })
    .then(response => response.json())
    .then(data => {
        playersList = data.data;
        displayPlayers(playersList);
    })
    .catch(error => console.error('Error fetching players:', error));
}

// Hiển thị đội bóng bằng nút và đầy đủ thông tin khi bấm vào
function displayTeams(teams) {
    teamsContainer.innerHTML = ''; 
    teams.forEach(team => {
        const teamElement = document.createElement('button');
        teamElement.classList.add('team-button');
        teamElement.textContent = team.full_name;
        
        teamElement.addEventListener('click', () => {
            alert(`
                🏀 Đội: ${team.full_name}
                📍 Thành phố: ${team.city}
                🏆 Tên viết tắt: ${team.abbreviation}
                🎯 Hội nghị: ${team.conference}
                🌍 Khu vực: ${team.division}
            `);
        });

        teamsContainer.appendChild(teamElement);
    });
}

// Hiển thị cầu thủ bằng nút và đầy đủ thông tin khi bấm vào
function displayPlayers(players) {
    playersContainer.innerHTML = '';  
    players.forEach(player => {
        const playerElement = document.createElement('button');
        playerElement.classList.add('player-button');
        playerElement.textContent = `${player.first_name} ${player.last_name}`;
        
        playerElement.addEventListener('click', () => {
            alert(`
                👤 Cầu thủ: ${player.first_name} ${player.last_name}
                🏀 Đội: ${player.team.full_name}
                📏 Chiều cao: ${player.height_feet ? player.height_feet + "'" : "N/A"} ${player.height_inches ? player.height_inches + '"' : ""}
                ⚖️ Cân nặng: ${player.weight_pounds ? player.weight_pounds + " lbs" : "N/A"}
                🔢 Số áo: ${player.jersey_number || "N/A"}
                🏅 Vị trí: ${player.position || "N/A"}
            `);
        });

        playersContainer.appendChild(playerElement);
    });
}

// Lọc đội bóng theo tên
searchTeamInput.addEventListener('input', function() {
    const query = searchTeamInput.value.toLowerCase();
    const filteredTeams = teamsList.filter(team => team.full_name.toLowerCase().includes(query));
    displayTeams(filteredTeams);
});

// Lọc cầu thủ theo tên
searchPlayerInput.addEventListener('input', function() {
    const query = searchPlayerInput.value.toLowerCase();
    const filteredPlayers = playersList.filter(player => {
        const playerName = `${player.first_name} ${player.last_name}`.toLowerCase();
        return playerName.includes(query);
    });
    displayPlayers(filteredPlayers);
});

// Chuyển đổi giữa đội bóng và cầu thủ
showTeamsBtn.addEventListener('click', () => {
    teamsSection.style.display = 'block';
    playersSection.style.display = 'none';
    fetchTeams();
    showTeamsBtn.classList.add('active');
    showPlayersBtn.classList.remove('active');
});

showPlayersBtn.addEventListener('click', () => {
    playersSection.style.display = 'block';
    teamsSection.style.display = 'none';
    fetchPlayers();
    showPlayersBtn.classList.add('active');
    showTeamsBtn.classList.remove('active');
});

// Mặc định hiển thị đội bóng khi trang được tải
window.onload = () => {
    fetchTeams();
    teamsSection.style.display = 'block';
    playersSection.style.display = 'none';
    showTeamsBtn.classList.add('active');
};
