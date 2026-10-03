(function () {
  const root = document.getElementById("game-root");
  if (!root) return;

  // =========================================================
  // 1. NGÂN HÀNG CHỦ ĐỀ + KEYWORD
  // Muốn thêm keyword sau này chỉ cần thêm vào keywords[]
  // =========================================================

  const TOPIC_BANK = [
    {
      id: "independence",
      title: "Độc lập dân tộc & CNXH",
      chapter: "Chương III",
      icon: "flag",
      desc: "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội.",
      keywords: [
        "Độc lập dân tộc",
        "Chủ nghĩa xã hội",
        "Tự do",
        "Hạnh phúc",
        "Quyền dân tộc",
        "Cách mạng giải phóng dân tộc",
        "Bạo lực cách mạng",
        "Độc lập gắn liền CNXH"
      ]
    },

    {
      id: "party",
      title: "Đảng Cộng sản Việt Nam",
      chapter: "Chương IV",
      icon: "groups",
      desc: "Quan điểm về Đảng Cộng sản Việt Nam.",
      keywords: [
        "Đảng cầm quyền",
        "Tập trung dân chủ",
        "Tự phê bình",
        "Phê bình",
        "Kỷ luật nghiêm minh",
        "Đoàn kết thống nhất",
        "Đạo đức",
        "Văn minh"
      ]
    },

    {
      id: "state",
      title: "Nhà nước của nhân dân",
      chapter: "Chương IV",
      icon: "account_balance",
      desc: "Nhà nước của nhân dân, do nhân dân và vì nhân dân.",
      keywords: [
        "Nhân dân làm chủ",
        "Của nhân dân",
        "Do nhân dân",
        "Vì nhân dân",
        "Thượng tôn pháp luật",
        "Kiểm soát quyền lực",
        "Phục vụ nhân dân",
        "Pháp quyền"
      ]
    },

    {
      id: "solidarity",
      title: "Đại đoàn kết dân tộc",
      chapter: "Chương V",
      icon: "diversity_1",
      desc: "Tư tưởng về đại đoàn kết toàn dân tộc.",
      keywords: [
        "Đại đoàn kết",
        "Toàn dân tộc",
        "Mặt trận dân tộc thống nhất",
        "Công nhân",
        "Nông dân",
        "Trí thức",
        "Lợi ích dân tộc",
        "Đoàn kết lâu dài"
      ]
    },

    {
      id: "international",
      title: "Đoàn kết quốc tế",
      chapter: "Chương V",
      icon: "public",
      desc: "Tư tưởng Hồ Chí Minh về đoàn kết quốc tế.",
      keywords: [
        "Đoàn kết quốc tế",
        "Đoàn kết với nhân dân thế giới",
        "Hòa bình",
        "Độc lập",
        "Dân chủ",
        "Tiến bộ xã hội",
        "Có lý",
        "Có tình"
      ]
    },

    {
      id: "culture",
      title: "Văn hóa",
      chapter: "Chương VI",
      icon: "theater_comedy",
      desc: "Tư tưởng Hồ Chí Minh về văn hóa.",
      keywords: [
        "Văn hóa",
        "Đời sống mới",
        "Nâng cao dân trí",
        "Bồi dưỡng tư tưởng",
        "Đạo đức",
        "Lối sống",
        "Văn hóa giáo dục",
        "Văn hóa đời sống"
      ]
    },

    {
      id: "ethics",
      title: "Đạo đức cách mạng",
      chapter: "Chương VI",
      icon: "volunteer_activism",
      desc: "Các chuẩn mực và nguyên tắc xây dựng đạo đức cách mạng.",
      keywords: [
        "Cần",
        "Kiệm",
        "Liêm",
        "Chính",
        "Chí công vô tư",
        "Nói đi đôi với làm",
        "Xây đi đôi với chống",
        "Tu dưỡng suốt đời"
      ]
    },

    {
      id: "human",
      title: "Con người",
      chapter: "Chương VI",
      icon: "person_heart",
      desc: "Quan điểm Hồ Chí Minh về con người.",
      keywords: [
        "Con người",
        "Nhân dân",
        "Yêu thương con người",
        "Trồng người",
        "Giáo dục",
        "Phẩm chất",
        "Năng lực",
        "Phát triển con người"
      ]
    }
  ];

  // =========================================================
  // 2. CẤU HÌNH MỖI LƯỢT
  // =========================================================

  const NUMBER_OF_TOPICS = 4;
  const KEYWORDS_PER_TOPIC = 3;

  let activeTopics = [];
  let activeConcepts = [];
  let poolOrder = [];

  let state = {
    placed: {},
    selected: null,
    score: 0,
    mistakes: 0,
    hints: 0,
    checked: false,
    roundCode: 0
  };

  // =========================================================
  // 3. HÀM TIỆN ÍCH
  // =========================================================

  function shuffle(items) {
    const arr = [...items];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function esc(text) {
    return String(text).replace(
      /[&<>'"]/g,
      ch =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;"
        })[ch]
    );
  }

  function getConcept(id) {
    return activeConcepts.find(item => item.id === id);
  }

  function getTopic(id) {
    return activeTopics.find(item => item.id === id);
  }

  // =========================================================
  // 4. TẠO BỘ KEYWORD NGẪU NHIÊN
  // =========================================================

  function generateRound() {
    activeTopics = shuffle(TOPIC_BANK).slice(0, NUMBER_OF_TOPICS);

    activeConcepts = [];

    activeTopics.forEach(topic => {
      const selectedKeywords = shuffle(topic.keywords).slice(
        0,
        KEYWORDS_PER_TOPIC
      );

      selectedKeywords.forEach((keyword, index) => {
        activeConcepts.push({
          id: `${topic.id}-${Date.now()}-${index}-${Math.random()
            .toString(36)
            .slice(2, 7)}`,
          text: keyword,
          branch: topic.id
        });
      });
    });

    poolOrder = shuffle(activeConcepts.map(item => item.id));

    state = {
      placed: {},
      selected: null,
      score: 0,
      mistakes: 0,
      hints: 0,
      checked: false,
      roundCode: Math.floor(1000 + Math.random() * 9000)
    };
  }

  // =========================================================
  // 5. MÀN HÌNH GIỚI THIỆU
  // =========================================================

  function renderIntro() {
    root.innerHTML = `
      <div class="min-h-[680px] grid lg:grid-cols-[.95fr_1.05fr] bg-philo-burgundy/40 backdrop-blur-md rounded-3xl overflow-hidden border border-philo-gold/30 shadow-cinematic">
        <div class="p-7 md:p-12 flex flex-col justify-center relative z-10">
          <div class="inline-flex self-start items-center gap-2 rounded-full border border-philo-gold/40 bg-philo-gold/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-philo-gold mb-5 shadow-sm">
            <span class="material-symbols-outlined text-base">account_tree</span> GAME 02 · KEYWORD MAP
          </div>
          <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-philo-ivory leading-tight">Bản đồ<br><span class="text-philo-gold">tư tưởng</span></h1>
          <p class="mt-5 text-philo-ivory/80 text-base md:text-lg leading-relaxed">
            Nhận diện các từ khóa trong Tư tưởng Hồ Chí Minh và đưa chúng vào đúng nhóm kiến thức.
          </p>
          <div class="mt-6 rounded-2xl border border-philo-gold/25 p-4 bg-philo-blackBurgundy/60 backdrop-blur-sm shadow-sm">
            <div class="font-bold text-philo-ivory text-sm mb-3 flex items-center gap-2">
              <span class="material-symbols-outlined text-philo-gold text-base">tune</span> Mỗi lượt chơi
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="p-2 rounded-xl bg-philo-burgundy/50 border border-philo-gold/15">
                <div class="text-2xl font-black font-heading text-philo-gold">${TOPIC_BANK.length}</div>
                <div class="text-[11px] text-philo-ivory/70 mt-0.5">chủ đề</div>
              </div>
              <div class="p-2 rounded-xl bg-philo-burgundy/50 border border-philo-gold/15">
                <div class="text-2xl font-black font-heading text-philo-gold">${NUMBER_OF_TOPICS}</div>
                <div class="text-[11px] text-philo-ivory/70 mt-0.5">chủ đề ngẫu nhiên</div>
              </div>
              <div class="p-2 rounded-xl bg-philo-burgundy/50 border border-philo-gold/15">
                <div class="text-2xl font-black font-heading text-philo-gold">${NUMBER_OF_TOPICS * KEYWORDS_PER_TOPIC}</div>
                <div class="text-[11px] text-philo-ivory/70 mt-0.5">keyword</div>
              </div>
            </div>
          </div>
          <div class="mt-5 space-y-2 text-sm text-philo-ivory/80">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-philo-gold text-base">shuffle</span>
              <span>Mỗi lượt sẽ tạo một bộ keyword khác nhau.</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-philo-gold text-base">drag_indicator</span>
              <span><b class="text-philo-gold">PC:</b> kéo keyword vào nhóm phù hợp.</span>
            </div>
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-philo-gold text-base">touch_app</span>
              <span><b class="text-philo-gold">Điện thoại:</b> chọn keyword rồi chọn nhóm.</span>
            </div>
          </div>
          <button id="map-start" class="mt-8 inline-flex self-start items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-philo-warmGold to-philo-gold text-philo-deep font-bold text-base shadow-goldGlow hover:scale-105 transition-all duration-300">
            Tạo bộ keyword <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div class="p-6 md:p-10 flex items-center justify-center relative overflow-hidden bg-philo-blackBurgundy">
          <img src="assets/images/games/game2-mindmap.png" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105 filter blur-[1px]">
          <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-philo-blackBurgundy via-philo-burgundy/80 to-transparent"></div>
          <div class="relative w-full max-w-lg z-10">
            <div class="mx-auto w-56 rounded-2xl border-2 border-philo-gold bg-philo-blackBurgundy/90 text-philo-gold text-center p-4 font-black shadow-goldGlow">
              <span class="material-symbols-outlined text-xl block mb-1">hub</span>
              TƯ TƯỞNG<br>HỒ CHÍ MINH
            </div>
            <div class="h-8 w-0.5 bg-gradient-to-b from-philo-gold to-philo-gold/40 mx-auto"></div>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-2xl border border-philo-gold/25 bg-philo-blackBurgundy/70 backdrop-blur-sm p-4 text-center text-philo-ivory shadow-sm">
                <span class="material-symbols-outlined text-philo-gold">security</span>
                <div class="font-bold mt-1 text-sm">Cần</div>
              </div>
              <div class="rounded-2xl border border-philo-gold/25 bg-philo-blackBurgundy/70 backdrop-blur-sm p-4 text-center text-philo-ivory shadow-sm">
                <span class="material-symbols-outlined text-philo-gold">public</span>
                <div class="font-bold mt-1 text-sm">Có lý · Có tình</div>
              </div>
              <div class="rounded-2xl border border-philo-gold/25 bg-philo-blackBurgundy/70 backdrop-blur-sm p-4 text-center text-philo-ivory shadow-sm">
                <span class="material-symbols-outlined text-philo-gold">groups</span>
                <div class="font-bold mt-1 text-sm">Đại đoàn kết</div>
              </div>
              <div class="rounded-2xl border border-philo-gold/25 bg-philo-blackBurgundy/70 backdrop-blur-sm p-4 text-center text-philo-ivory shadow-sm">
                <span class="material-symbols-outlined text-philo-gold">account_balance</span>
                <div class="font-bold mt-1 text-sm">Nhân dân làm chủ</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    `;

    document
      .getElementById("map-start")
      ?.addEventListener("click", startNewRound);
  }

  // =========================================================
  // 6. BẮT ĐẦU BỘ MỚI
  // =========================================================

  function startNewRound() {
    generateRound();
    renderGame();
  }

  // =========================================================
  // 7. LÀM LẠI CÙNG BỘ KEYWORD
  // =========================================================

  function restartSameRound() {
    state.placed = {};
    state.selected = null;
    state.score = 0;
    state.mistakes = 0;
    state.hints = 0;
    state.checked = false;

    poolOrder = shuffle(activeConcepts.map(item => item.id));

    renderGame();
  }

  // =========================================================
  // 8. GIAO DIỆN GAME
  // =========================================================

  function renderGame() {
    const unplaced = poolOrder.filter(id => !state.placed[id]);

    root.innerHTML = `
      <div class="p-5 md:p-8 min-h-[680px] bg-philo-burgundy/30 backdrop-blur-md rounded-3xl border border-philo-gold/30 shadow-cinematic">
        <div class="flex flex-wrap justify-between items-center gap-3 mb-6">
          <div>
            <div class="text-xs font-bold tracking-[.22em] uppercase text-philo-gold">
              Bản đồ từ khóa Hồ Chí Minh · Bộ #${state.roundCode}
            </div>
            <div class="text-sm text-philo-ivory/80 mt-1 font-medium">
              ${activeTopics.length} chủ đề ngẫu nhiên · ${activeConcepts.length} keyword
            </div>
          </div>
          <div class="flex gap-2.5">
            ${scoreBox("Đã đặt", `${Object.keys(state.placed).length}/${activeConcepts.length}`, "category")}
            ${scoreBox("Điểm", state.score, "stars")}
          </div>
        </div>

        <!-- KHO KEYWORD -->

        <div
          class="rounded-2xl border border-slate-200
          dark:border-slate-700 bg-slate-50/70
          dark:bg-slate-950/25 p-4 mb-5"
        >

          <div
            class="flex flex-wrap items-center
            justify-between gap-3 mb-3"
          >

            <div
              class="text-sm font-black
              text-slate-800 dark:text-slate-100"
            >
              Kho keyword
            </div>

            <div
              id="map-selected-label"
              class="text-xs text-[#B8860B]
              dark:text-[#D4A017] font-bold"
            >
              ${
                state.selected
                  ? `Đã chọn: ${esc(getConcept(state.selected).text)}`
                  : "Chọn hoặc kéo một keyword"
              }
            </div>

          </div>

          <div
            id="concept-pool"
            class="flex flex-wrap gap-2.5 min-h-[58px]"
          >

            ${
              unplaced.length
                ? unplaced
                    .map(id =>
                      conceptCard(getConcept(id), false)
                    )
                    .join("")
                : `
                  <div
                    class="w-full text-center py-3
                    text-sm text-emerald-600 font-bold"
                  >
                    ✓ Tất cả keyword đã được đưa lên bản đồ
                  </div>
                `
            }

          </div>
        </div>

        <!-- TRUNG TÂM -->

        <div class="text-center mb-3">

          <div
            class="inline-flex items-center gap-2
            rounded-2xl border-2
            border-[#D4A017]/40
            bg-amber-50 dark:bg-amber-950/20
            px-5 py-3 font-black
            text-slate-900 dark:text-white"
          >
            <span
              class="material-symbols-outlined text-[#D4A017]"
            >
              hub
            </span>

            TƯ TƯỞNG HỒ CHÍ MINH
          </div>

        </div>

        <div
          class="connector max-w-4xl mx-auto mb-3"
        ></div>

        <!-- CÁC NHÁNH -->

        <div
          id="map-zones"
          class="grid md:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          ${activeTopics.map(topic => branchZone(topic)).join("")}
        </div>

        <!-- FEEDBACK -->

        <div
          id="map-feedback"
          class="mt-5 hidden"
        ></div>

        <!-- BUTTON -->

        <div
          class="mt-6 flex flex-wrap
          justify-between gap-3"
        >

          <div class="flex flex-wrap gap-2">

            <button
              id="map-new"
              class="px-4 py-2.5 rounded-xl
              bg-[#991B1B] text-white
              font-bold text-sm"
            >
              <span
                class="material-symbols-outlined
                text-lg align-middle mr-1"
              >
                shuffle
              </span>

              Bộ keyword mới
            </button>

            <button
              id="map-reset"
              class="px-4 py-2.5 rounded-xl
              border border-slate-200
              dark:border-slate-700 font-bold text-sm
              text-slate-600 dark:text-slate-300"
            >
              <span
                class="material-symbols-outlined
                text-lg align-middle mr-1"
              >
                restart_alt
              </span>

              Làm lại bộ này
            </button>

            <button
              id="map-hint"
              class="px-4 py-2.5 rounded-xl
              border border-amber-200
              dark:border-amber-900
              font-bold text-sm
              text-[#B8860B] dark:text-[#D4A017]"
            >
              <span
                class="material-symbols-outlined
                text-lg align-middle mr-1"
              >
                lightbulb
              </span>

              Gợi ý (-20)
            </button>

          </div>

          <button
            id="map-check"
            class="px-6 py-2.5 rounded-xl
            bg-slate-900 dark:bg-[#D4A017]
            text-white dark:text-slate-950
            font-bold
            ${
              Object.keys(state.placed).length ===
              activeConcepts.length
                ? ""
                : "opacity-50"
            }"
          >
            Kiểm tra bản đồ
          </button>

        </div>

      </div>
    `;

    bindInteractions();
  }

  // =========================================================
  // 9. Ô ĐIỂM
  // =========================================================

  function scoreBox(label, value, icon) {
    return `
      <div
        class="rounded-xl border border-slate-200
        dark:border-slate-700
        bg-white/70 dark:bg-slate-900/60
        px-3 py-2 min-w-[90px]"
      >

        <div
          class="text-[10px] uppercase tracking-wider
          text-slate-400"
        >
          ${label}
        </div>

        <div
          class="font-black text-slate-900
          dark:text-white flex items-center gap-1"
        >
          <span
            class="material-symbols-outlined
            text-base text-[#D4A017]"
          >
            ${icon}
          </span>

          ${value}
        </div>

      </div>
    `;
  }

  // =========================================================
  // 10. CARD KEYWORD
  // =========================================================

  function conceptCard(concept, placed) {
    if (!concept) return "";

    return `
      <button
        type="button"
        draggable="true"

        class="
          concept-card
          ${placed ? "placed-card" : ""}
          rounded-xl
          border border-slate-200
          dark:border-slate-700
          bg-white dark:bg-slate-800
          px-3.5 py-2.5
          text-sm font-bold
          text-slate-800 dark:text-slate-100
          text-left
        "

        data-concept="${concept.id}"
      >

        <span
          class="material-symbols-outlined
          text-base text-[#D4A017]
          align-middle mr-1"
        >
          drag_indicator
        </span>

        ${esc(concept.text)}

      </button>
    `;
  }

  // =========================================================
  // 11. NHÁNH BẢN ĐỒ
  // =========================================================

  function branchZone(topic) {
    const ids = Object.entries(state.placed)
      .filter(([, branch]) => branch === topic.id)
      .map(([id]) => id);

    return `
      <div
        class="map-zone rounded-2xl border-2
        border-dashed border-slate-250
        dark:border-slate-700
        bg-white/75 dark:bg-slate-900/55
        p-4 min-h-[240px]"

        data-branch="${topic.id}"
      >

        <div
          class="flex items-start gap-3 pb-3
          border-b border-slate-100
          dark:border-slate-800"
        >

          <div
            class="w-10 h-10 rounded-xl
            bg-amber-50 dark:bg-amber-950/20
            text-[#D4A017]
            flex items-center justify-center shrink-0"
          >
            <span class="material-symbols-outlined">
              ${topic.icon}
            </span>
          </div>

          <div>

            <div
              class="text-[10px] uppercase
              tracking-widest font-bold
              text-[#B8860B] dark:text-[#D4A017]"
            >
              ${topic.chapter}
            </div>

            <h3
              class="font-black text-slate-900
              dark:text-white leading-snug"
            >
              ${esc(topic.title)}
            </h3>

          </div>

        </div>

        <div
          class="branch-items mt-3 flex
          flex-col gap-2 min-h-[125px]"
        >

          ${
            ids.length
              ? ids
                  .map(id =>
                    conceptCard(getConcept(id), true)
                  )
                  .join("")
              : `
                <div
                  class="empty-label text-center
                  text-xs text-slate-400 py-8"
                >
                  Thả keyword vào đây
                </div>
              `
          }

        </div>

      </div>
    `;
  }

  // =========================================================
  // 12. DRAG / DROP / CLICK
  // =========================================================

  function bindInteractions() {
    document
      .querySelectorAll("[data-concept]")
      .forEach(card => {

        card.addEventListener("click", event => {
          event.stopPropagation();

          selectConcept(card.dataset.concept);
        });

        card.addEventListener("dragstart", event => {
          event.dataTransfer.setData(
            "text/plain",
            card.dataset.concept
          );

          event.dataTransfer.effectAllowed = "move";

          card.classList.add("dragging");
        });

        card.addEventListener("dragend", () => {
          card.classList.remove("dragging");
        });
      });

    document
      .querySelectorAll("[data-branch]")
      .forEach(zone => {

        zone.addEventListener("click", () => {
          if (state.selected) {
            placeConcept(
              state.selected,
              zone.dataset.branch
            );
          }
        });

        zone.addEventListener("dragover", event => {
          event.preventDefault();

          zone.classList.add("drag-over");
        });

        zone.addEventListener("dragleave", () => {
          zone.classList.remove("drag-over");
        });

        zone.addEventListener("drop", event => {
          event.preventDefault();

          zone.classList.remove("drag-over");

          const conceptId =
            event.dataTransfer.getData("text/plain");

          if (conceptId) {
            placeConcept(
              conceptId,
              zone.dataset.branch
            );
          }
        });
      });

    document
      .getElementById("map-new")
      ?.addEventListener("click", startNewRound);

    document
      .getElementById("map-reset")
      ?.addEventListener("click", restartSameRound);

    document
      .getElementById("map-hint")
      ?.addEventListener("click", showHint);

    document
      .getElementById("map-check")
      ?.addEventListener("click", checkMap);
  }

  // =========================================================
  // 13. CHỌN KEYWORD
  // =========================================================

  function selectConcept(id) {
    if (state.checked) return;

    state.selected =
      state.selected === id ? null : id;

    document
      .querySelectorAll("[data-concept]")
      .forEach(element => {
        element.classList.toggle(
          "selected",
          element.dataset.concept === state.selected
        );
      });

    document
      .querySelectorAll("[data-branch]")
      .forEach(element => {
        element.classList.toggle(
          "click-target",
          Boolean(state.selected)
        );
      });

    const label =
      document.getElementById("map-selected-label");

    if (!label) return;

    if (state.selected) {
      label.textContent =
        `Đã chọn: ${getConcept(state.selected).text}` +
        " — chọn một nhánh";
    } else {
      label.textContent =
        "Chọn hoặc kéo một keyword";
    }
  }

  // =========================================================
  // 14. ĐẶT KEYWORD
  // =========================================================

  function placeConcept(id, branchId) {
    if (state.checked) return;

    if (!getConcept(id) || !getTopic(branchId)) {
      return;
    }

    state.placed[id] = branchId;
    state.selected = null;

    renderGame();
  }

  // =========================================================
  // 15. GỢI Ý
  // =========================================================

  function showHint() {
    if (state.checked) return;

    let conceptId = state.selected;

    // Nếu chưa chọn keyword,
    // lấy keyword chưa đặt đầu tiên.
    if (!conceptId) {
      conceptId =
        poolOrder.find(id => !state.placed[id]);
    }

    // Nếu tất cả đã đặt,
    // tìm một keyword đang sai.
    if (!conceptId) {
      conceptId =
        Object.keys(state.placed).find(id => {
          const concept = getConcept(id);

          return (
            concept &&
            state.placed[id] !== concept.branch
          );
        });
    }

    if (!conceptId) return;

    const concept = getConcept(conceptId);
    const topic = getTopic(concept.branch);

    if (!concept || !topic) return;

    state.hints++;

    const target = document.querySelector(
      `[data-branch="${topic.id}"]`
    );

    if (target) {
      target.classList.add("click-target");
    }

    const feedback =
      document.getElementById("map-feedback");

    if (feedback) {
      feedback.className =
        "mt-5 rounded-2xl " +
        "border border-amber-200 " +
        "dark:border-amber-900 " +
        "bg-amber-50 dark:bg-amber-950/20 " +
        "p-4 text-sm " +
        "text-amber-800 dark:text-amber-200";

      feedback.innerHTML = `
        <b>Gợi ý:</b>
        Keyword
        <b>“${esc(concept.text)}”</b>
        thuộc nhóm
        <b>${esc(topic.title)}</b>.
      `;
    }

    setTimeout(() => {
      target?.classList.remove("click-target");
    }, 2500);
  }

  // =========================================================
  // 16. KIỂM TRA
  // =========================================================

  function checkMap() {
    if (state.checked) {
      renderFinish();
      return;
    }

    const placedCount =
      Object.keys(state.placed).length;

    if (placedCount < activeConcepts.length) {
      const feedback =
        document.getElementById("map-feedback");

      if (feedback) {
        feedback.className =
          "mt-5 rounded-2xl " +
          "border border-amber-200 " +
          "dark:border-amber-900 " +
          "bg-amber-50 dark:bg-amber-950/20 " +
          "p-4 text-sm " +
          "text-amber-800 dark:text-amber-200";

        feedback.innerHTML = `
          Bạn còn
          <b>
            ${activeConcepts.length - placedCount}
          </b>
          keyword chưa được đặt.
        `;
      }

      return;
    }

    const wrongConcepts =
      activeConcepts.filter(concept => {
        return (
          state.placed[concept.id] !== concept.branch
        );
      });

    // ---------------------------------------------------------
    // CÓ KEYWORD SAI
    // ---------------------------------------------------------

    if (wrongConcepts.length > 0) {
      state.mistakes += wrongConcepts.length;

      wrongConcepts.forEach(concept => {
        const element = document.querySelector(
          `[data-concept="${concept.id}"]`
        );

        element?.classList.add("wrong");
      });

      const feedback =
        document.getElementById("map-feedback");

      if (feedback) {
        feedback.className =
          "mt-5 rounded-2xl " +
          "border border-rose-200 " +
          "dark:border-rose-900 " +
          "bg-rose-50 dark:bg-rose-950/20 " +
          "p-4 text-sm " +
          "text-rose-700 dark:text-rose-300";

        feedback.innerHTML = `
          Có
          <b>${wrongConcepts.length}</b>
          keyword đang ở sai nhóm.

          Các keyword sai sẽ được đưa lại
          vào kho để bạn thử lại.
        `;
      }

      setTimeout(() => {
        wrongConcepts.forEach(concept => {
          delete state.placed[concept.id];
        });

        renderGame();

        const newFeedback =
          document.getElementById("map-feedback");

        if (newFeedback) {
          newFeedback.className =
            "mt-5 rounded-2xl " +
            "border border-rose-200 " +
            "dark:border-rose-900 " +
            "bg-rose-50 dark:bg-rose-950/20 " +
            "p-4 text-sm " +
            "text-rose-700 dark:text-rose-300";

          newFeedback.innerHTML = `
            Hãy thử lại
            <b>${wrongConcepts.length}</b>
            keyword vừa đặt sai.
          `;
        }
      }, 650);

      return;
    }

    // ---------------------------------------------------------
    // ĐÚNG TOÀN BỘ
    // ---------------------------------------------------------

    state.checked = true;

    const maxScore =
      activeConcepts.length * 100;

    const earned = Math.max(
      100,
      maxScore -
        state.hints * 20 -
        state.mistakes * 15
    );

    state.score = earned;

    document
      .querySelectorAll("[data-branch]")
      .forEach(zone => {
        zone.classList.add("zone-correct");
      });

    const feedback =
      document.getElementById("map-feedback");

    if (feedback) {
      feedback.className =
        "mt-5 rounded-2xl " +
        "border border-emerald-200 " +
        "dark:border-emerald-900 " +
        "bg-emerald-50 dark:bg-emerald-950/20 " +
        "p-4";

      feedback.innerHTML = `
        <div class="flex gap-3">

          <span
            class="material-symbols-outlined
            text-emerald-600"
          >
            verified
          </span>

          <div>

            <div
              class="font-black text-emerald-700
              dark:text-emerald-300"
            >
              Chính xác! +${earned} điểm
            </div>

            <p
              class="text-sm text-slate-600
              dark:text-slate-300 mt-1"
            >
              Bạn đã phân loại đúng toàn bộ
              ${activeConcepts.length} keyword.
            </p>

          </div>

        </div>
      `;
    }

    const checkButton =
      document.getElementById("map-check");

    if (checkButton) {
      checkButton.textContent = "Xem tổng kết";
      checkButton.classList.remove("opacity-50");

      checkButton.onclick = renderFinish;
    }

    document
      .getElementById("map-hint")
      ?.setAttribute("disabled", "disabled");

    launchConfetti();
  }

  // =========================================================
  // 17. CONFETTI
  // =========================================================

  function launchConfetti() {
    const symbols = ["★", "◆", "●", "▲"];

    for (let i = 0; i < 30; i++) {
      const element =
        document.createElement("span");

      element.textContent =
        symbols[i % symbols.length];

      element.style.cssText = `
        position:absolute;
        z-index:40;
        top:-30px;
        left:${Math.random() * 100}%;
        font-size:${10 + Math.random() * 13}px;
        color:${i % 2 ? "#D4A017" : "#991B1B"};
        animation:
          confettiFall
          ${2.2 + Math.random() * 1.7}s
          linear forwards;
        animation-delay:${Math.random() * 0.5}s;
        pointer-events:none;
      `;

      root.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 4500);
    }
  }

  // =========================================================
  // 18. MÀN HÌNH KẾT QUẢ
  // =========================================================

  function renderFinish() {
    root.innerHTML = `
      <div
        class="min-h-[680px]
        flex items-center justify-center
        p-6 md:p-10"
      >

        <div
          class="w-full max-w-4xl text-center"
        >

          <div
            class="w-24 h-24 mx-auto rounded-3xl
            bg-amber-100 dark:bg-amber-950/30
            text-[#D4A017]
            flex items-center justify-center mb-5"
          >
            <span
              class="material-symbols-outlined text-6xl"
            >
              account_tree
            </span>
          </div>

          <div
            class="text-xs uppercase
            tracking-[.25em]
            text-[#B8860B]
            dark:text-[#D4A017]
            font-bold"
          >
            Bộ keyword #${state.roundCode}
          </div>

          <h2
            class="font-serif text-4xl
            md:text-5xl font-bold
            text-slate-900 dark:text-white mt-2"
          >
            Hoàn thành
            ${activeConcepts.length}/${activeConcepts.length}
            keyword
          </h2>

          <div
            class="grid sm:grid-cols-3
            gap-3 mt-8"
          >

            ${finishCard(
              state.score,
              "Tổng điểm",
              "stars"
            )}

            ${finishCard(
              state.mistakes,
              "Keyword đặt sai",
              "close"
            )}

            ${finishCard(
              state.hints,
              "Gợi ý đã dùng",
              "lightbulb"
            )}

          </div>

          <div
            class="mt-7 text-left
            rounded-2xl
            border border-slate-200
            dark:border-slate-700
            bg-slate-50/70
            dark:bg-slate-900/50
            p-5"
          >

            <div
              class="font-black
              text-slate-900 dark:text-white mb-4"
            >
              Các nhóm trong lượt này
            </div>

            <div
              class="grid md:grid-cols-2 gap-3"
            >

              ${activeTopics
                .map(topic => {
                  const keywords =
                    activeConcepts
                      .filter(
                        concept =>
                          concept.branch === topic.id
                      )
                      .map(concept => concept.text);

                  return `
                    <div
                      class="rounded-xl
                      bg-white dark:bg-slate-800
                      border border-slate-200
                      dark:border-slate-700
                      p-4"
                    >

                      <div
                        class="text-xs font-bold
                        text-[#B8860B]
                        dark:text-[#D4A017]"
                      >
                        ${topic.chapter}
                      </div>

                      <div
                        class="font-black
                        text-slate-800
                        dark:text-slate-100"
                      >
                        ${esc(topic.title)}
                      </div>

                      <div
                        class="flex flex-wrap
                        gap-1.5 mt-3"
                      >
                        ${keywords
                          .map(
                            keyword => `
                              <span
                                class="px-2 py-1
                                rounded-lg
                                bg-amber-50
                                dark:bg-amber-950/30
                                text-xs
                                text-[#8B6508]
                                dark:text-amber-200"
                              >
                                ${esc(keyword)}
                              </span>
                            `
                          )
                          .join("")}
                      </div>

                    </div>
                  `;
                })
                .join("")}

            </div>

          </div>

          <div
            class="mt-8 flex flex-wrap
            justify-center gap-3"
          >

            <button
              id="map-replay-new"
              class="px-6 py-3 rounded-xl
              bg-slate-900 dark:bg-[#D4A017]
              text-white dark:text-slate-950
              font-bold"
            >
              <span
                class="material-symbols-outlined
                align-middle mr-1"
              >
                shuffle
              </span>

              Chơi bộ keyword mới
            </button>

            <button
              id="map-replay-same"
              class="px-6 py-3 rounded-xl
              border border-slate-200
              dark:border-slate-700
              font-bold text-slate-700
              dark:text-slate-200"
            >
              <span
                class="material-symbols-outlined
                align-middle mr-1"
              >
                replay
              </span>

              Chơi lại bộ này
            </button>

            <a
              href="games.html"
              class="px-6 py-3 rounded-xl
              border border-slate-200
              dark:border-slate-700
              font-bold text-slate-700
              dark:text-slate-200"
            >
              Về trang game
            </a>

          </div>

        </div>

      </div>
    `;

    document
      .getElementById("map-replay-new")
      ?.addEventListener(
        "click",
        startNewRound
      );

    document
      .getElementById("map-replay-same")
      ?.addEventListener(
        "click",
        restartSameRound
      );
  }

  function finishCard(value, label, icon) {
    return `
      <div
        class="rounded-2xl
        border border-slate-200
        dark:border-slate-700
        bg-white/70 dark:bg-slate-900/55
        p-4"
      >

        <span
          class="material-symbols-outlined
          text-[#D4A017]"
        >
          ${icon}
        </span>

        <div
          class="text-3xl font-black
          text-slate-900 dark:text-white"
        >
          ${value}
        </div>

        <div
          class="text-xs
          text-slate-500 dark:text-slate-400"
        >
          ${label}
        </div>

      </div>
    `;
  }

  // =========================================================
  // 19. KHỞI ĐỘNG
  // =========================================================

  renderIntro();
})();