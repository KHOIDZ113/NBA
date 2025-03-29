const API_KEY = '9145376e-18b8-4f11-aa88-e87fb116ea88';
const API_URL = 'https://api.balldontlie.io/v1/games';

const gamesList = document.getElementById('games-list');
const searchInput = document.getElementById('searchInput');

let gamesData = []; // Lưu trữ toàn bộ dữ liệu games

// =================== FETCH DATA TỪ API ===================
async function fetchGames() {
    try {
        const response = await fetch(API_URL, {
            headers: { 'Authorization': API_KEY }
        });

        if (!response.ok) {
            throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        gamesData = data.data.map(game => ({
            id: game.id,
            home_team: game.home_team.full_name,
            visitor_team: game.visitor_team.full_name,
            date: new Date(game.date).toLocaleDateString(), // Format lại ngày tháng
            home_team_score: game.home_team_score,
            visitor_team_score: game.visitor_team_score,
            venue: game.home_team.arena || "Chưa cập nhật",
            season: game.season,
            status: game.status
        }));

        displayGames(gamesData);
    } catch (error) {
        console.error("Lỗi khi fetch games:", error);
        gamesList.innerHTML = `<p class="error">Không thể tải dữ liệu trận đấu. Vui lòng thử lại sau.</p>`;
    }
}

// =================== HIỂN THỊ DANH SÁCH GAMES ===================
function displayGames(games) {
    gamesList.innerHTML = ""; // Xóa danh sách cũ

    if (games.length === 0) {
        gamesList.innerHTML = "<p class='no-data'>Không tìm thấy trận đấu nào.</p>";
        return;
    }

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('card');
        gameCard.innerHTML = `
            <h3>${game.home_team} 🆚 ${game.visitor_team}</h3>
            <p><strong>📅 Ngày:</strong> ${game.date}</p>
            <p><strong>🏆 Mùa giải:</strong> ${game.season}</p>
            <p><strong>📍 Sân đấu:</strong> ${game.venue}</p>
            <p><strong>🔢 Tỷ số:</strong> ${game.home_team_score} - ${game.visitor_team_score}</p>
            <p><strong>⏳ Trạng thái:</strong> ${game.status}</p>
        `;
        gamesList.appendChild(gameCard);
    });
}

// =================== TÌM KIẾM TRẬN ĐẤU ===================
function searchGames(keyword) {
    const filteredGames = gamesData.filter(game =>
        game.home_team.toLowerCase().includes(keyword) ||
        game.visitor_team.toLowerCase().includes(keyword) ||
        game.date.includes(keyword) ||
        game.season.toString().includes(keyword) ||
        game.venue.toLowerCase().includes(keyword)
    );
    displayGames(filteredGames);
}

// =================== SỰ KIỆN Ô TÌM KIẾM ===================
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    searchGames(keyword);
});

// =================== FETCH DATA KHI LOAD TRANG ===================
fetchGames();
