const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const ISSUE = window.HISTORICAL_ISSUE;

// Nạp lớp giao diện hoàn thiện và thay ký tự tạm bằng biểu tượng SVG đồng bộ.
const polish = document.createElement("link");
polish.rel = "stylesheet"; polish.href = "ui-polish.css?v=3";
document.head.appendChild(polish);

// Replace the decorative poster with the supplied historical photograph.
const historicalPhotos = {
  "historical-data.js": {
    src: "assets/man-1-ba-dinh-1945.png",
    alt: "Lễ đài tại Quảng trường Ba Đình ngày 2 tháng 9 năm 1945",
    caption: "LỄ ĐỘC LẬP TẠI BA ĐÌNH • 02–09–1945"
  },
  "historical-data2.js": {
    src: "assets/man-2-dien-bien-phu.png",
    alt: "Lá cờ chiến thắng trên nóc hầm De Castries tại Điện Biên Phủ",
    caption: "LÁ CỜ CHIẾN THẮNG TẠI ĐIỆN BIÊN PHỦ • 1954"
  },
  "historical-data3.js": {
    src: "assets/man-3-du-kich.png",
    alt: "Ảnh tư liệu một đội du kích",
    caption: "ẢNH TƯ LIỆU ĐỘI DU KÍCH"
  },
  "historical-data4.js": {
    src: "assets/man-4-dinh-doc-lap-1975.png",
    alt: "Xe tăng tiến qua cổng Dinh Độc Lập ngày 30 tháng 4 năm 1975",
    caption: "XE TĂNG TIẾN VÀO DINH ĐỘC LẬP • 30–04–1975"
  },
  "historical-data5.js": {
    src: "assets/man-3-du-kich.png",
    alt: "Tư tưởng Hồ Chí Minh về con người",
    caption: "TƯ TƯỞNG HỒ CHÍ MINH VỀ CON NGƯỜI"
  }
};
const issueScript = [...document.scripts].map(script => script.src.split("/").pop().split("?")[0]).find(name => historicalPhotos[name]);
const issuePhoto = historicalPhotos[issueScript];
const poster = $(".poster");
if (poster && issuePhoto) {
  poster.className = "poster archival-photo";
  poster.replaceChildren();
  const photo = document.createElement("img");
  photo.src = issuePhoto.src;
  photo.alt = issuePhoto.alt;
  const caption = document.createElement("span");
  caption.className = "poster-caption";
  caption.textContent = issuePhoto.caption;
  poster.append(photo, caption);
}
const toolIcons = {
  pen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l4.2-1 10.6-10.6a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z"/><path d="m14.7 6.5 3 3M5.2 16l3 3"/></svg>',
  magnifier: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.2 15.2 4.8 4.8"/></svg>',
  dossier: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h6l1.6 2H20v11.5H4z"/><path d="M7.5 11h9M7.5 14h9M7.5 17h6"/></svg>'
};
$$('.tool').forEach(button => {
  const icon = $('.tool-icon', button);
  if (icon && toolIcons[button.dataset.tool]) icon.innerHTML = toolIcons[button.dataset.tool];
});
const state = { tool: "pen", score: 0, lives: 3, combo: 0, best: 0, found: new Set(), running: true, dossierUsed: false };
const timerEl = $("#timer"), scoreEl = $("#score"), foundEl = $("#found"), toast = $("#toast");
let toastTimer;

function render() {
  if (timerEl) timerEl.textContent = "TỰ DO";
  scoreEl.textContent = Math.max(0, state.score).toString().padStart(4,"0");
  foundEl.textContent = state.found.size;
  $("#combo").textContent = `COMBO ×${Math.max(1, state.combo)}`;
  $$("#lives span").forEach((heart, i) => heart.classList.toggle("lost", i >= state.lives));
}

function notify(title, body, good = true) {
  clearTimeout(toastTimer);
  toast.className = `toast show ${good ? "good" : "bad"}`;
  toast.innerHTML = `<b>${title}</b><span>${body}</span>`;
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
}

function markError(button) {
  const id = button.dataset.error;
  if (!state.running || state.found.has(id)) return;
  // Khi người chơi bấm đúng vùng sai, tự chuyển về bút đỏ. Điều này tránh
  // trạng thái bị kẹt sau khi đóng Kính lúp/Hồ sơ.
  if (state.tool !== "pen") setTool("pen");
  const item = ISSUE.errors[id];
  state.found.add(id); state.combo += 1; state.best = Math.max(state.best, state.combo);
  state.score += 100 + Math.min(state.combo - 1, 4) * 50;
  button.classList.add("found");
  button.setAttribute("aria-label", `${item.wrong}, sai; chính xác là ${item.correct}`);
  notify("PHÁT HIỆN SAI LỆCH", `${item.wrong} → ${item.correct}. ${item.fact}  •  +${100 + Math.min(state.combo - 1, 4) * 50}`);
  render();
  if (state.found.size === Object.keys(ISSUE.errors).length) complete();
}

// Điểm vào trực tiếp cho từng vùng lỗi, không phụ thuộc nổi bọt sự kiện DOM.
window.markHistoricalError = id => {
  const button = $(`[data-error="${id}"]`);
  if (button) markError(button);
};

function wrongGuess(target) {
  if (!state.running || state.tool !== "pen" || target.closest(".suspect, dialog")) return;
  state.lives -= 1; state.score -= 100; state.combo = 0;
  target.closest("p, h3, .poster, .timeline-item")?.classList.add("wrong-flash");
  setTimeout(() => target.closest("p, h3, .poster, .timeline-item")?.classList.remove("wrong-flash"), 500);
  notify("KHÔNG PHÁT HIỆN SAI LỆCH", "Chi tiết này phù hợp với hồ sơ.  •  −100  •  mất 1 mạng", false);
  render();
  if (state.lives <= 0) gameOver();
}

function gameOver() {
  state.running = false;
  const dialog = document.createElement("dialog");
  dialog.className = "result";
  dialog.innerHTML = `<p class="eyebrow">HỒ SƠ CHƯA HOÀN TẤT</p><h2>ĐÃ HẾT MẠNG</h2><p>Bạn đã khoanh nhầm ba lần. Tờ báo phải được kiểm tra lại từ đầu.</p><button>CHƠI LẠI</button>`;
  document.body.appendChild(dialog);
  dialog.querySelector("button").addEventListener("click", () => location.reload());
  dialog.showModal();
}

function complete() {
  state.running = false;
  Object.entries(ISSUE.errors).forEach(([id, item]) => { const b = $(`[data-error="${id}"]`); b.textContent = item.correct; b.classList.add("corrected"); });
  $("#stamp").classList.add("show");
  setTimeout(() => { $("#finalScore").textContent = Math.max(0, state.score); $("#bestCombo").textContent = `×${state.best}`; $("#resultDialog").showModal(); }, 1250);
}

function setTool(tool) {
  state.tool = tool; $$(".tool").forEach(b => b.classList.toggle("active", b.dataset.tool === tool));
  $("#newspaper").classList.toggle("magnifying", tool === "magnifier");
  if (tool === "dossier") openDossier();
}

function openDossier() {
  if (!state.dossierUsed) { state.score -= 250; state.combo = 0; state.dossierUsed = true; render(); }
  $("#dossierDialog").showModal();
}

$("#dossierEntries").innerHTML = ISSUE.dossier.map(x => `<div class="record"><b>${x.date}</b><p>${x.clue}</p></div>`).join("");
// Một bộ nhận click duy nhất ở cấp tờ báo, chạy ở pha capture để không bị
// lớp trang trí hoặc cấu trúc chữ nhỏ chặn mất thao tác.
$("#newspaper").addEventListener("click", e => {
  const direct = e.target.closest("[data-error]");
  const id = direct?.dataset.error;
  if (id) {
    e.preventDefault();
    e.stopPropagation();
    return markError($(`[data-error="${id}"]`));
  }
  wrongGuess(e.target);
}, true);
$$('.tool').forEach(b => b.addEventListener("click", () => setTool(b.dataset.tool)));
$$('[data-close]').forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));
$("#replayBtn").addEventListener("click", () => {
  if (ISSUE.nextPage) location.href = ISSUE.nextPage;
  else location.reload();
});
$("#soundBtn").addEventListener("click", e => e.currentTarget.classList.toggle("on"));
document.addEventListener("keydown", e => { if (["1","2","3"].includes(e.key)) setTool({1:"pen",2:"magnifier",3:"dossier"}[e.key]); if (e.key === "Escape") $$("dialog[open]").forEach(d => d.close()); });
render();
