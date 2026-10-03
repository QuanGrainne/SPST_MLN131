const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const TOPIC_BANK = [
  {
    id: "independence",
    title: "Độc lập dân tộc & CNXH",
    chapter: "CHƯƠNG III",
    keywords: ["Độc lập dân tộc", "Chủ nghĩa xã hội", "Tự do", "Hạnh phúc", "Quyền dân tộc", "Cách mạng giải phóng dân tộc", "Độc lập gắn liền CNXH", "Sức mạnh dân tộc"]
  },
  {
    id: "party",
    title: "Đảng Cộng sản Việt Nam",
    chapter: "CHƯƠNG IV",
    keywords: ["Đảng cầm quyền", "Tập trung dân chủ", "Tự phê bình", "Phê bình", "Kỷ luật nghiêm minh", "Đoàn kết thống nhất", "Đạo đức", "Văn minh"]
  },
  {
    id: "state",
    title: "Nhà nước của dân, do dân, vì dân",
    chapter: "CHƯƠNG IV",
    keywords: ["Nhân dân làm chủ", "Của nhân dân", "Do nhân dân", "Vì nhân dân", "Pháp quyền", "Kiểm soát quyền lực", "Phục vụ nhân dân", "Pháp luật"]
  },
  {
    id: "solidarity",
    title: "Đại đoàn kết toàn dân tộc",
    chapter: "CHƯƠNG V",
    keywords: ["Đại đoàn kết", "Toàn dân tộc", "Mặt trận dân tộc thống nhất", "Công nhân", "Nông dân", "Trí thức", "Lợi ích dân tộc", "Đoàn kết lâu dài"]
  },
  {
    id: "international",
    title: "Đoàn kết quốc tế",
    chapter: "CHƯƠNG V",
    keywords: ["Đoàn kết quốc tế", "Các dân tộc bị áp bức", "Lực lượng tiến bộ", "Hòa bình", "Độc lập", "Dân chủ", "Có lý", "Có tình"]
  },
  {
    id: "culture",
    title: "Văn hóa",
    chapter: "CHƯƠNG VI",
    keywords: ["Văn hóa", "Đời sống mới", "Nâng cao dân trí", "Bồi dưỡng tư tưởng", "Lối sống", "Văn hóa giáo dục", "Văn hóa văn nghệ", "Mục tiêu và động lực"]
  },
  {
    id: "ethics",
    title: "Đạo đức cách mạng",
    chapter: "CHƯƠNG VI",
    keywords: ["Cần", "Kiệm", "Liêm", "Chính", "Chí công vô tư", "Nói đi đôi với làm", "Xây đi đôi với chống", "Tu dưỡng suốt đời"]
  },
  {
    id: "human",
    title: "Con người",
    chapter: "CHƯƠNG VI",
    keywords: ["Mục tiêu của cách mạng", "Động lực của cách mạng", "Vốn quý nhất", "Trồng người", "Vừa hồng vừa chuyên", "Phát triển toàn diện", "Trí lực · tâm lực · thể lực", "Chiến lược con người"]
  }
];

const TOPICS_PER_ROUND = 4;
const KEYWORDS_PER_TOPIC = 3;

const state = {
  topics: [],
  cards: [],
  order: [],
  placed: {},
  selected: null,
  score: 0,
  mistakes: 0,
  hints: 0,
  code: 0,
  complete: false
};

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

function cardById(id) { return state.cards.find(card => card.id === id); }
function topicById(id) { return state.topics.find(topic => topic.id === id); }

function buildRound() {
  state.topics = shuffle(TOPIC_BANK).slice(0, TOPICS_PER_ROUND);
  state.cards = [];
  state.topics.forEach(topic => {
    shuffle(topic.keywords).slice(0, KEYWORDS_PER_TOPIC).forEach((text, index) => {
      state.cards.push({ id: `${topic.id}-${Date.now()}-${index}-${Math.random().toString(36).slice(2,7)}`, text, topicId: topic.id });
    });
  });
  state.order = shuffle(state.cards.map(card => card.id));
  state.placed = {};
  state.selected = null;
  state.score = 0;
  state.mistakes = 0;
  state.hints = 0;
  state.code = Math.floor(1000 + Math.random() * 9000);
  state.complete = false;
  render();
}

function resetSameRound() {
  state.order = shuffle(state.cards.map(card => card.id));
  state.placed = {};
  state.selected = null;
  state.score = 0;
  state.mistakes = 0;
  state.hints = 0;
  state.complete = false;
  render();
}

function renderCard(card) {
  return `<button type="button" draggable="true" class="keyword-card${state.selected === card.id ? " selected" : ""}" data-card="${card.id}">${escapeHtml(card.text)}</button>`;
}

function render() {
  $("#roundCode").textContent = `#${state.code}`;
  $("#totalCount").textContent = state.cards.length;
  $("#placedCount").textContent = Object.keys(state.placed).length;
  $("#score").textContent = String(Math.max(0, state.score)).padStart(4, "0");
  $("#mistakes").textContent = state.mistakes;
  $("#hintCount").textContent = `GỢI Ý ×${state.hints}`;

  const unplaced = state.order.filter(id => !state.placed[id]);
  $("#keywordPool").innerHTML = unplaced.length
    ? unplaced.map(id => renderCard(cardById(id))).join("")
    : `<div class="empty-label">TẤT CẢ KEYWORD ĐÃ ĐƯỢC ĐƯA LÊN BẢN ĐỒ</div>`;

  $("#branches").innerHTML = state.topics.map((topic, index) => {
    const ids = Object.entries(state.placed).filter(([, topicId]) => topicId === topic.id).map(([id]) => id);
    return `<article class="branch" data-branch="${topic.id}">
      <div class="branch-head">
        <div class="branch-no">0${index + 1}</div>
        <div><div class="branch-kicker">${topic.chapter}</div><h3>${escapeHtml(topic.title)}</h3></div>
      </div>
      <div class="branch-items">
        ${ids.length ? ids.map(id => renderCard(cardById(id))).join("") : `<div class="empty-label">THẢ KEYWORD VÀO ĐÂY</div>`}
      </div>
    </article>`;
  }).join("");

  $("#selectedLabel").textContent = state.selected ? `Đã chọn: ${cardById(state.selected).text} — chọn một nhánh` : "Chọn hoặc kéo một keyword";
  bindBoardEvents();
}

function selectCard(id) {
  if (state.complete) return;
  state.selected = state.selected === id ? null : id;
  render();
  if (state.selected) $$("[data-branch]").forEach(zone => zone.classList.add("click-target"));
}

function placeCard(cardId, topicId) {
  if (state.complete || !cardById(cardId) || !topicById(topicId)) return;
  state.placed[cardId] = topicId;
  state.selected = null;
  hideFeedback();
  render();
}

function bindBoardEvents() {
  $$("[data-card]").forEach(card => {
    card.addEventListener("click", event => {
      event.stopPropagation();
      selectCard(card.dataset.card);
    });
    card.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", card.dataset.card);
      event.dataTransfer.effectAllowed = "move";
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });

  $$("[data-branch]").forEach(zone => {
    zone.addEventListener("click", () => {
      if (state.selected) placeCard(state.selected, zone.dataset.branch);
    });
    zone.addEventListener("dragover", event => {
      event.preventDefault();
      zone.classList.add("drag-over");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", event => {
      event.preventDefault();
      zone.classList.remove("drag-over");
      const id = event.dataTransfer.getData("text/plain");
      if (id) placeCard(id, zone.dataset.branch);
    });
  });
}

function showFeedback(message, type = "") {
  const box = $("#feedback");
  box.className = `feedback show ${type}`.trim();
  box.innerHTML = message;
}

function hideFeedback() {
  const box = $("#feedback");
  box.className = "feedback";
  box.textContent = "";
}

function useHint() {
  if (state.complete) return;
  let id = state.selected || state.order.find(cardId => !state.placed[cardId]);
  if (!id) {
    id = Object.keys(state.placed).find(cardId => state.placed[cardId] !== cardById(cardId).topicId);
  }
  if (!id) return;
  const card = cardById(id);
  const topic = TOPIC_BANK.find(item => item.id === card.topicId);
  state.hints += 1;
  state.score -= 20;
  render();
  const zone = $(`[data-branch="${topic.id}"]`);
  zone?.classList.add("click-target");
  setTimeout(() => zone?.classList.remove("click-target"), 2400);
  showFeedback(`<b>GỢI Ý:</b> “${escapeHtml(card.text)}” thuộc nhánh <b>${escapeHtml(topic.title)}</b>.`, "");
}

function checkBoard() {
  if (state.complete) {
    $("#resultDialog").showModal();
    return;
  }
  const placedCount = Object.keys(state.placed).length;
  if (placedCount < state.cards.length) {
    showFeedback(`Bạn còn <b>${state.cards.length - placedCount}</b> keyword chưa được đặt.`, "bad");
    return;
  }

  const wrong = state.cards.filter(card => state.placed[card.id] !== card.topicId);
  if (wrong.length) {
    state.mistakes += wrong.length;
    state.score -= wrong.length * 15;
    wrong.forEach(card => $(`[data-card="${card.id}"]`)?.classList.add("wrong"));
    showFeedback(`Có <b>${wrong.length}</b> keyword ở sai nhánh. Các thẻ sai sẽ quay lại kho để bạn thử lại.`, "bad");
    setTimeout(() => {
      wrong.forEach(card => delete state.placed[card.id]);
      render();
      showFeedback(`Hãy thử lại <b>${wrong.length}</b> keyword vừa đặt sai.`, "bad");
    }, 650);
    return;
  }

  state.complete = true;
  state.score += 1200;
  render();
  $$("[data-branch]").forEach(zone => zone.classList.add("correct"));
  showFeedback(`<b>CHÍNH XÁC.</b> Toàn bộ ${state.cards.length} keyword đã về đúng nhánh. +1200 điểm.`, "good");
  $("#finalScore").textContent = Math.max(0, state.score);
  $("#finalMistakes").textContent = state.mistakes;
  $("#finalHints").textContent = state.hints;
  setTimeout(() => $("#resultDialog").showModal(), 700);
}

$("#hintBtn").addEventListener("click", useHint);
$("#checkBtn").addEventListener("click", checkBoard);
$("#sameRoundBtn").addEventListener("click", resetSameRound);
$("#newRoundBtn").addEventListener("click", buildRound);
$("#newRoundTop").addEventListener("click", buildRound);
$("#resultNewRound").addEventListener("click", () => { $("#resultDialog").close(); buildRound(); });
$("#resultClose").addEventListener("click", () => $("#resultDialog").close());
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && $("#resultDialog").open) $("#resultDialog").close();
  if (event.key.toLowerCase() === "h") useHint();
  if (event.key === "Enter") checkBoard();
});

buildRound();
