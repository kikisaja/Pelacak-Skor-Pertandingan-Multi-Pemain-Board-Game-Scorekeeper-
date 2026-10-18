// --- STATE APLIKASI ---
let playerCount = 4;
let scores = [0, 0, 0, 0];
let playerNames = ["Pemain 1", "Pemain 2", "Pemain 3", "Pemain 4"];
let historyLog = [];

const cardColors = ["p1", "p2", "p3", "p4"];

// --- AMBIL ELEMEN DOM ---
const playerCountSelect = document.getElementById("player-count");
const resetScoresBtn = document.getElementById("reset-scores");
const playersGrid = document.getElementById("players-grid");
const historyBox = document.getElementById("history-box");

// --- FUNGSI RENDER PAPAN PEMAIN ---
function renderPlayers() {
    playersGrid.innerHTML = "";

    for (let i = 0; i < playerCount; i++) {
        const card = document.createElement("div");
        card.className = `player-card ${cardColors[i]}`;

        card.innerHTML = `
            <div class="player-header">
                <input type="text" class="player-name" value="${playerNames[i]}" data-index="${i}" aria-label="Nama Pemain">
            </div>
            <div class="score-display">
                <span class="score-number" id="score-${i}">${scores[i]}</span>
            </div>
            <div class="score-buttons">
                <button class="pts-btn" onclick="modifyScore(${i}, -1)">-1</button>
                <button class="pts-btn" onclick="modifyScore(${i}, 1)">+1</button>
                <button class="pts-btn" onclick="modifyScore(${i}, 5)">+5</button>
                <button class="pts-btn" onclick="modifyScore(${i}, 10)">+10</button>
            </div>
        `;

        playersGrid.appendChild(card);
    }

    // Event listener untuk ubah nama pemain secara langsung
    document.querySelectorAll(".player-name").forEach((input) => {
        input.addEventListener("input", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            playerNames[index] = e.target.value || `Pemain ${index + 1}`;
        });
    });
}

// --- MODIFIKASI SKOR ---
function modifyScore(playerIndex, amount) {
    scores[playerIndex] += amount;
    
    // Update tampilan angka skor langsung di DOM
    const scoreEl = document.getElementById(`score-${playerIndex}`);
    if (scoreEl) {
        scoreEl.textContent = scores[playerIndex];
    }

    // Catat ke riwayat
    const playerName = playerNames[playerIndex];
    const sign = amount > 0 ? `+${amount}` : `${amount}`;
    const logText = `${playerName} mendapat ${sign} poin (Total: ${scores[playerIndex]})`;
    
    historyLog.unshift(logText); // Tambah ke urutan teratas
    renderHistory();
}

// --- RENDER RIWAYAT LOG ---
function renderHistory() {
    if (historyLog.length === 0) {
        historyBox.innerHTML = `<p class="history-empty">Belum ada aktivitas poin tercatat.</p>`;
        return;
    }

    historyBox.innerHTML = "";
    historyLog.forEach((log) => {
        const item = document.createElement("div");
        item.className = "history-item";
        item.textContent = log;
        historyBox.appendChild(item);
    });
}

// --- EVENT LISTENERS ---
playerCountSelect.addEventListener("change", (e) => {
    playerCount = parseInt(e.target.value);
    renderPlayers();
});

resetScoresBtn.addEventListener("click", () => {
    if (confirm("Reset semua skor pemain ke 0?")) {
        scores = scores.map(() => 0);
        historyLog = [];
        renderPlayers();
        renderHistory();
    }
});

// Inisialisasi awal
renderPlayers();
