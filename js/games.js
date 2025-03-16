const apiKey = '9145376e-18b8-4f11-aa88-e87fb116ea88';

async function fetchGames() {
    const response = await fetch('https://api.balldontlie.io/v1/games', {
        headers: { 'Authorization': apiKey }
    });
    const data = await response.json();
    const gamesList = document.getElementById('games-list');
    data.data.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${game.home_team.full_name} vs ${game.visitor_team.full_name}</h3><p>${game.date}</p><p>Score: ${game.home_team_score} - ${game.visitor_team_score}</p>`;
        gamesList.appendChild(card);
    });
}

fetchGames();
// Fetch data từ API hoặc mẫu data
const gamesList = document.getElementById('games-list');
const searchInput = document.getElementById('searchInput');

// Dữ liệu mẫu (bạn có thể thay bằng API)
const gamesData = [
    { home_team: "Lakers", visitor_team: "Warriors", date: "2024-04-15" },
    { home_team: "Celtics", visitor_team: "Bulls", date: "2024-04-16" },
    { home_team: "Heat", visitor_team: "Nets", date: "2024-04-17" },
    { home_team: "Suns", visitor_team: "Knicks", date: "2024-04-18" }
];

// Hàm hiển thị danh sách games
function displayGames(games) {
    gamesList.innerHTML = ""; // Xóa danh sách cũ

    if (games.length === 0) {
        gamesList.innerHTML = "<p>No games found.</p>";
        return;
    }

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('card');
        gameCard.innerHTML = `
            <h3>${game.home_team} vs ${game.visitor_team}</h3>
            <p>Date: ${game.date}</p>
        `;
        gamesList.appendChild(gameCard);
    });
}

// Hàm tìm kiếm games
function searchGames(keyword) {
    const filteredGames = gamesData.filter(game =>
        game.home_team.toLowerCase().includes(keyword) ||
        game.visitor_team.toLowerCase().includes(keyword) ||
        game.date.includes(keyword)
    );
    displayGames(filteredGames);
}

// Sự kiện nhập vào thanh search
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    searchGames(keyword);
});

// Hiển thị toàn bộ games khi load trang
displayGames(gamesData);

