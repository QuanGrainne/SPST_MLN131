(function () {
  const root = document.getElementById("game-root");
  if (!root) return;

  const QUESTIONS = [
    {
      chapter: "Chương I: Nhập môn KTCT",
      prompt: "Đối tượng nghiên cứu trọng tâm của Kinh tế chính trị Mác - Lênin là gì?",
      answer: ["QUAN", "HỆ", "SẢN", "XUẤT"],
      distractors: ["LỰC", "LƯỢNG", "THỊ", "TRƯỜNG"],
      explanation: "Kinh tế chính trị Mác - Lênin nghiên cứu quan hệ xã hội của sản xuất và trao đổi (quan hệ sản xuất) đặt trong mối quan hệ biện chứng với lực lượng sản xuất."
    },
    {
      chapter: "Chương I: Nhập môn KTCT",
      prompt: "Phương pháp nghiên cứu đặc thù và cốt lõi nhất của môn Kinh tế chính trị Mác - Lênin là gì?",
      answer: ["TRỪU", "TƯỢNG", "HÓA", "KHOA", "HỌC"],
      distractors: ["THỰC", "NGHIỆM", "LỊCH", "SỬ"],
      explanation: "Trừu tượng hóa khoa học là phương pháp gạt bỏ những hiện tượng ngẫu nhiên, bề ngoài để đi sâu nắm bắt bản chất và quy luật vận động khách quan."
    },
    {
      chapter: "Chương II: Hàng hóa & Thị trường",
      prompt: "Phát hiện thiên tài của C. Mác: Mặt nào của lao động sản xuất tạo ra giá trị hàng hóa?",
      answer: ["LAO", "ĐỘNG", "TRỪU", "TƯỢNG"],
      distractors: ["CỤ", "THỂ", "PHỨC", "TẠP"],
      explanation: "Lao động trừu tượng là sự hao phí sức lao động nói chung của con người, tạo ra thực thể giá trị của hàng hóa."
    },
    {
      chapter: "Chương II: Giá trị thặng dư",
      prompt: "Hòn đá tảng trong toàn bộ học thuyết kinh tế của C. Mác nghiên cứu về phạm trù nào?",
      answer: ["GIÁ", "TRỊ", "THẶNG", "DƯ"],
      distractors: ["TIỀN", "TỆ", "TƯ", "BẢN"],
      explanation: "Học thuyết giá trị thặng dư được V.I. Lênin coi là 'hòn đá tảng' trong toàn bộ hệ thống lý luận kinh tế của C. Mác."
    },
    {
      chapter: "Chương II: Giá trị thặng dư",
      prompt: "Bộ phận tư bản tồn tại dưới hình thái tư liệu sản xuất không thay đổi lượng giá trị gọi là gì?",
      answer: ["TƯ", "BẢN", "BẤT", "BIẾN"],
      distractors: ["KHẢ", "BIẾN", "LƯU", "ĐỘNG"],
      explanation: "Tư bản bất biến (c) là bộ phận tư bản dùng mua tư liệu sản xuất, giá trị được bảo tồn và chuyển nguyên vẹn vào sản phẩm mới."
    },
    {
      chapter: "Chương II: Giá trị thặng dư",
      prompt: "Bộ phận tư bản mua sức lao động và tự tăng thêm lượng giá trị trong sản xuất gọi là gì?",
      answer: ["TƯ", "BẢN", "KHẢ", "BIẾN"],
      distractors: ["BẤT", "BIẾN", "CỐ", "ĐỊNH"],
      explanation: "Tư bản khả biến (v) là bộ phận tư bản dùng mua sức lao động, nguồn gốc trực tiếp tạo ra giá trị mới và giá trị thặng dư."
    },
    {
      chapter: "Chương II: Hàng hóa đặc biệt",
      prompt: "Hàng hóa đặc biệt khi sử dụng có thể tạo ra lượng giá trị mới lớn hơn giá trị bản thân là gì?",
      answer: ["SỨC", "LAO", "ĐỘNG"],
      distractors: ["MÁY", "MÓC", "TIỀN", "VÀNG"],
      explanation: "Sức lao động là hàng hóa đặc biệt, việc tiêu dùng nó là quá trình sáng tạo ra giá trị và giá trị thặng dư cho nhà tư bản."
    },
    {
      chapter: "Chương III: Cạnh tranh & Độc quyền",
      prompt: "Hình thức liên minh giữa các xí nghiệp lớn nhằm chi phối sản xuất và giá cả thu lợi nhuận cao là gì?",
      answer: ["ĐỘC", "QUYỀN"],
      distractors: ["CẠNH", "TRANH", "TỰ", "DO"],
      explanation: "Độc quyền sinh ra từ cạnh tranh tự do khi tích tụ và tập trung sản xuất đạt đến trình độ cao."
    },
    {
      chapter: "Chương III: Độc quyền trong CNTB",
      prompt: "Lực lượng kinh tế chi phối xã hội sinh ra từ sự hòa hợp giữa độc quyền ngân hàng và công nghiệp là gì?",
      answer: ["TƯ", "BẢN", "TÀI", "CHÍNH"],
      distractors: ["THƯƠNG", "NGHIỆP", "CHO", "VAY"],
      explanation: "Tư bản tài chính là sự thâm nhập hòa hợp lẫn nhau giữa tư bản độc quyền ngân hàng và tư bản độc quyền công nghiệp."
    },
    {
      chapter: "Chương III: Độc quyền nhà nước",
      prompt: "Sự kết hợp sức mạnh giữa tổ chức độc quyền tư nhân và bộ máy nhà nước tư sản gọi là gì?",
      answer: ["ĐỘC", "QUYỀN", "NHÀ", "NƯỚC"],
      distractors: ["QUÂN", "SỰ", "TOÀN", "CẦU"],
      explanation: "Chủ nghĩa tư bản độc quyền nhà nước là sự kết hợp sức mạnh của các tổ chức độc quyền với sức mạnh của nhà nước tư sản thành một cơ chế thống nhất."
    },
    {
      chapter: "Chương IV: KTTT định hướng XHCN",
      prompt: "Thành phần kinh tế giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng XHCN ở Việt Nam là gì?",
      answer: ["KINH", "TẾ", "NHÀ", "NƯỚC"],
      distractors: ["TƯ", "NHÂN", "TẬP", "THỂ"],
      explanation: "Kinh tế nhà nước giữ vai trò chủ đạo, là công cụ vật chất hàng đầu để Nhà nước định hướng và điều tiết nền kinh tế vĩ mô."
    },
    {
      chapter: "Chương IV: Quan hệ phân phối",
      prompt: "Hình thức phân phối giữ vai trò chủ đạo và phản ánh bản chất ưu việt trong thời kỳ quá độ ở Việt Nam là gì?",
      answer: ["PHÂN", "PHỐI", "THEO", "LAO", "ĐỘNG"],
      distractors: ["VỐN", "GÓP", "PHÚC", "LỢI"],
      explanation: "Phân phối theo kết quả lao động và hiệu quả kinh tế là hình thức phân phối chủ đạo của nền kinh tế thị trường định hướng XHCN."
    },
    {
      chapter: "Chương V: CNH - HĐH & CMCN 4.0",
      prompt: "Quá trình chuyển đổi căn bản các hoạt động sản xuất từ thủ công sang sử dụng máy móc hiện đại là gì?",
      answer: ["CÔNG", "NGHIỆP", "HÓA"],
      distractors: ["HIỆN", "ĐẠI", "TỰ", "DO"],
      explanation: "Công nghiệp hóa là nhiệm vụ trọng tâm xuyên suốt thời kỳ quá độ nhằm xây dựng cơ sở vật chất - kỹ thuật vững mạnh cho CNXH."
    },
    {
      chapter: "Chương V: Kinh tế tri thức",
      prompt: "Nền kinh tế mà sự sản sinh và ứng dụng tri thức đóng vai trò quyết định tăng trưởng gọi là gì?",
      answer: ["KINH", "TẾ", "TRI", "THỨC"],
      distractors: ["NÔNG", "NGHIỆP", "CÔNG", "NGHIỆP"],
      explanation: "Kinh tế tri thức là nền kinh tế dựa trực tiếp vào việc sản xuất, phân phối và sử dụng tri thức và thông tin."
    },
    {
      chapter: "Chương V: Hội nhập kinh tế quốc tế",
      prompt: "Nguyên tắc then chốt trong hội nhập kinh tế quốc tế để bảo đảm chủ quyền và lợi ích quốc gia dân tộc là gì?",
      answer: ["ĐỘC", "LẬP", "TỰ", "CHỦ"],
      distractors: ["LỆ", "THUỘC", "ĐÓNG", "CỬA"],
      explanation: "Hội nhập kinh tế quốc tế phải đi đôi với xây dựng nền kinh tế độc lập tự chủ, tự lực tự cường."
    },
    {
      chapter: "Chương VI: Quan hệ lợi ích kinh tế",
      prompt: "Động lực trực tiếp của các chủ thể tham gia vào các hoạt động sản xuất kinh doanh là gì?",
      answer: ["LỢI", "ÍCH", "KINH", "TẾ"],
      distractors: ["DANH", "VỌNG", "QUYỀN", "LỰC"],
      explanation: "Lợi ích kinh tế là lợi ích vật chất thu được từ các hoạt động kinh tế, là động lực trực tiếp của các chủ thể kinh tế - xã hội."
    }
  ];

  // Bộ câu hỏi thực tế của mỗi lượt. Mỗi lần bắt đầu/chơi lại sẽ xáo thứ tự.
  let activeQuestions = [];

  function buildQuestionSet() {
    let randomized = shuffle(QUESTIONS);

    try {
      const lastFirstPrompt = sessionStorage.getItem("mln131_decode_last_first_prompt");
      if (lastFirstPrompt && randomized.length > 1 && randomized[0].prompt === lastFirstPrompt) {
        const swapIndex = 1 + Math.floor(Math.random() * (randomized.length - 1));
        [randomized[0], randomized[swapIndex]] = [randomized[swapIndex], randomized[0]];
      }
      sessionStorage.setItem("mln131_decode_last_first_prompt", randomized[0].prompt);
    } catch (_) {
      // Game vẫn chạy bình thường nếu trình duyệt chặn storage.
    }

    return randomized.slice(0, 10);
  }

  let state = {
    index: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    selected: [],
    usedHint: false,
    wrongThisRound: 0,
    locked: false,
    solved: 0
  };

  function shuffle(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function esc(text) {
    return String(text).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));
  }

  function renderIntro() {
    root.innerHTML = `
      <div class="min-h-[620px] grid lg:grid-cols-[1.05fr_.95fr] bg-philo-burgundy/40 backdrop-blur-md rounded-3xl overflow-hidden border border-philo-gold/30 shadow-cinematic">
        <div class="p-7 md:p-12 flex flex-col justify-center relative z-10">
          <div class="inline-flex self-start items-center gap-2 rounded-full border border-philo-gold/40 bg-philo-gold/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-philo-gold mb-5 shadow-sm">
            <span class="material-symbols-outlined text-base">encrypted</span> GAME 01 · GIẢI MÃ
          </div>
          <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-philo-ivory leading-tight">Giải mã<br><span class="text-philo-gold">Thuật ngữ KTCT</span></h1>
          <p class="mt-5 text-philo-ivory/80 text-base md:text-lg leading-relaxed max-w-xl">Đọc gợi ý từ giáo trình MLN131, sau đó bấm các mảnh từ khóa theo đúng thứ tự để tạo đáp án. Càng ít dùng gợi ý, điểm thưởng càng cao.</p>
          <div class="grid sm:grid-cols-3 gap-3 mt-7 max-w-2xl">
            ${statCard("10", "Câu giải mã/lượt", "grid_view")}
            ${statCard("100", "Điểm tối đa/câu", "stars")}
            ${statCard("Combo", "Thưởng chuỗi đúng", "bolt")}
          </div>
          <button id="decode-start" class="mt-8 inline-flex self-start items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-philo-warmGold to-philo-gold text-philo-deep font-bold text-base shadow-goldGlow hover:scale-105 transition-all duration-300">
            Bắt đầu giải mã <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div class="p-6 md:p-10 flex items-center justify-center relative overflow-hidden bg-philo-blackBurgundy">
          <img src="assets/images/games/game1-decode.png" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105 filter blur-[1px]">
          <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-philo-blackBurgundy via-philo-burgundy/80 to-transparent"></div>
          <div class="relative w-full max-w-md z-10">
            <div class="text-xs uppercase tracking-[.3em] text-philo-gold font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-base">menu_book</span> CÁCH CHƠI
            </div>
            <div class="space-y-3.5">
              ${stepCard(1,"Đọc gợi ý","Xác định phạm trù hoặc quy luật kinh tế cần tìm.")}
              ${stepCard(2,"Ghép mảnh","Bấm các mảnh từ theo đúng thứ tự thuật ngữ.")}
              ${stepCard(3,"Kiểm tra","Nhận điểm và xem trích dẫn sách giáo trình 2021.")}
            </div>
            <div class="mt-7 rounded-2xl border border-philo-gold/20 bg-philo-blackBurgundy/70 p-4 text-xs md:text-sm text-philo-ivory/80 leading-relaxed shadow-sm">
              <b class="text-philo-gold">Nội dung chuẩn:</b> sử dụng hệ thống phạm trù và quy luật kinh tế cốt lõi trong Giáo trình Kinh tế chính trị Mác - Lênin 2021 (MLN131).
            </div>
          </div>
        </div>
      </div>`;
    document.getElementById("decode-start")?.addEventListener("click", startGame);
  }

  function statCard(value, label, icon) {
    return `<div class="rounded-2xl border border-philo-gold/25 bg-philo-blackBurgundy/60 backdrop-blur-sm p-4 hover:border-philo-gold/50 transition-colors"><span class="material-symbols-outlined text-philo-gold">${icon}</span><div class="text-xl font-bold font-heading text-philo-ivory mt-1">${value}</div><div class="text-xs text-philo-ivory/70">${label}</div></div>`;
  }
  function stepCard(n, title, desc) {
    return `<div class="rounded-2xl border border-philo-gold/20 bg-philo-blackBurgundy/60 backdrop-blur-sm p-4 flex gap-4 items-center shadow-sm"><div class="w-9 h-9 rounded-xl bg-gradient-to-br from-philo-warmGold to-philo-gold text-philo-deep font-black flex items-center justify-center shrink-0 shadow-sm">${n}</div><div><div class="font-bold text-philo-ivory text-sm">${title}</div><div class="text-xs text-philo-ivory/70 mt-0.5">${desc}</div></div></div>`;
  }

  function startGame() {
    activeQuestions = buildQuestionSet();
    state = { index:0, score:0, streak:0, bestStreak:0, selected:[], usedHint:false, wrongThisRound:0, locked:false, solved:0 };
    renderQuestion();
  }

  function renderQuestion() {
    const q = activeQuestions[state.index];
    if (!q) return renderFinish();
    state.selected = [];
    state.usedHint = false;
    state.wrongThisRound = 0;
    state.locked = false;
    const bank = shuffle([
      ...q.answer.map((text, i) => ({ id:`a-${i}`, text })),
      ...q.distractors.map((text, i) => ({ id:`d-${i}`, text }))
    ]);

    root.innerHTML = `
      <div class="p-5 md:p-8 lg:p-10 min-h-[620px] bg-philo-burgundy/30 backdrop-blur-md rounded-3xl border border-philo-gold/30">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-7">
          <div>
            <div class="text-xs font-bold tracking-[.22em] uppercase text-philo-gold">Giải mã câu ${state.index + 1}/${activeQuestions.length}</div>
            <div class="text-sm text-philo-ivory/80 mt-1 font-medium">${esc(q.chapter)}</div>
          </div>
          <div class="flex gap-2 sm:gap-3">
            ${miniScore("Điểm", state.score, "stars")}
            ${miniScore("Combo", `x${state.streak}`, "bolt")}
          </div>
        </div>
        <div class="h-2.5 rounded-full bg-philo-blackBurgundy border border-philo-gold/20 overflow-hidden mb-8 shadow-inner"><div class="h-full bg-gradient-to-r from-philo-warmGold to-philo-gold transition-all duration-500 rounded-full" style="width:${(state.index/activeQuestions.length)*100}%"></div></div>

        <div class="max-w-4xl mx-auto">
          <div class="rounded-3xl border border-philo-gold/30 bg-philo-blackBurgundy/80 backdrop-blur-md p-6 md:p-8 shadow-cinematic">
            <div class="flex items-start gap-4">
              <div class="hidden sm:flex w-12 h-12 rounded-2xl bg-philo-gold/15 border border-philo-gold/30 text-philo-gold items-center justify-center shrink-0 shadow-sm"><span class="material-symbols-outlined text-3xl">help</span></div>
              <div>
                <div class="text-xs uppercase tracking-wider font-bold text-philo-gold/70 mb-2">Câu hỏi</div>
                <h2 class="text-xl md:text-2xl font-bold font-heading text-philo-ivory leading-relaxed">${esc(q.prompt)}</h2>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <div class="flex items-center justify-between mb-2"><span class="text-sm font-bold text-philo-ivory">Đáp án của bạn</span><span id="answer-count" class="text-xs text-philo-gold font-semibold">0/${q.answer.length} mảnh</span></div>
            <div id="decode-answer" class="min-h-[86px] rounded-2xl border-2 border-dashed border-philo-gold/30 bg-philo-blackBurgundy/50 p-3 flex flex-wrap items-center gap-2"></div>
          </div>

          <div class="mt-6">
            <div class="text-sm font-bold text-philo-ivory mb-3">Mảnh giải mã</div>
            <div id="decode-bank" class="flex flex-wrap gap-2.5">
              ${bank.map(item => `<button class="decode-token px-4 py-3 rounded-xl border border-philo-gold/30 bg-philo-blackBurgundy/90 hover:bg-philo-gold/15 hover:border-philo-gold font-bold text-philo-ivory shadow-sm transition-all" data-id="${item.id}" data-text="${esc(item.text)}">${esc(item.text)}</button>`).join("")}
            </div>
          </div>

          <div id="decode-feedback" class="mt-5 hidden"></div>

          <div class="mt-8 flex flex-wrap gap-3 justify-between items-center">
            <div class="flex gap-2">
              <button id="decode-reset" class="px-4 py-2.5 rounded-xl border border-philo-gold/30 text-sm font-bold text-philo-ivory/80 hover:text-philo-gold hover:bg-philo-gold/10 transition-colors"><span class="material-symbols-outlined align-middle text-lg mr-1">restart_alt</span>Làm lại</button>
              <button id="decode-hint" class="px-4 py-2.5 rounded-xl border border-philo-gold/40 text-sm font-bold text-philo-gold hover:bg-philo-gold/10 transition-colors"><span class="material-symbols-outlined align-middle text-lg mr-1">lightbulb</span>Gợi ý (-25)</button>
            </div>
            <button id="decode-check" class="px-7 py-3 rounded-xl bg-gradient-to-r from-philo-warmGold to-philo-gold text-philo-deep font-bold shadow-goldGlow hover:scale-105 transition-all disabled:opacity-40 disabled:cursor-not-allowed">Kiểm tra đáp án</button>
          </div>
        </div>
      </div>`;

    document.querySelectorAll("#decode-bank .decode-token").forEach(btn => btn.addEventListener("click", () => addToken(btn)));
    document.getElementById("decode-reset")?.addEventListener("click", clearSelected);
    document.getElementById("decode-hint")?.addEventListener("click", showHint);
    document.getElementById("decode-check")?.addEventListener("click", checkAnswer);
    updateAnswer();
  }

  function miniScore(label, value, icon) {
    return `<div class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 min-w-[86px]"><div class="text-[10px] uppercase tracking-wider text-slate-400">${label}</div><div class="font-black text-slate-900 dark:text-white flex items-center gap-1"><span class="material-symbols-outlined text-base text-[#D4A017]">${icon}</span>${value}</div></div>`;
  }

  function addToken(btn) {
    if (state.locked || btn.classList.contains("used")) return;
    const q = activeQuestions[state.index];
    if (state.selected.length >= q.answer.length) return;
    state.selected.push({ id:btn.dataset.id, text:btn.dataset.text });
    btn.classList.add("used");
    updateAnswer();
  }

  function removeToken(id) {
    if (state.locked) return;
    const idx = state.selected.findIndex(x => x.id === id);
    if (idx < 0) return;
    state.selected.splice(idx, 1);
    document.querySelector(`#decode-bank [data-id="${CSS.escape(id)}"]`)?.classList.remove("used");
    updateAnswer();
  }

  function clearSelected() {
    if (state.locked) return;
    state.selected = [];
    document.querySelectorAll("#decode-bank .decode-token").forEach(x => x.classList.remove("used"));
    updateAnswer();
  }

  function updateAnswer() {
    const q = activeQuestions[state.index];
    const answer = document.getElementById("decode-answer");
    if (!answer) return;
    answer.innerHTML = state.selected.length
      ? state.selected.map((item, idx) => `<button class="answer-token px-3.5 py-2.5 rounded-xl bg-[#D4A017] text-slate-950 font-black shadow-sm" data-remove="${item.id}" title="Bấm để bỏ mảnh này"><span class="text-[10px] opacity-60 mr-1">${idx+1}</span>${esc(item.text)} <span class="material-symbols-outlined text-sm align-middle ml-1">close</span></button>`).join("")
      : `<div class="w-full text-center text-sm text-slate-400">Bấm các mảnh phía dưới để ghép đáp án…</div>`;
    answer.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => removeToken(btn.dataset.remove)));
    const count = document.getElementById("answer-count");
    if (count) count.textContent = `${state.selected.length}/${q.answer.length} mảnh`;
    const check = document.getElementById("decode-check");
    if (check) check.disabled = state.selected.length !== q.answer.length || state.locked;
  }

  function showHint() {
    if (state.locked || state.usedHint) return;
    const q = activeQuestions[state.index];
    state.usedHint = true;
    const nextIndex = state.selected.length;
    const expected = q.answer[nextIndex] || q.answer[0];
    const hintBtn = document.getElementById("decode-hint");
    if (hintBtn) {
      hintBtn.disabled = true;
      hintBtn.innerHTML = `<span class="material-symbols-outlined align-middle text-lg mr-1">lightbulb</span>Mảnh tiếp theo: ${esc(expected)}`;
    }
  }

  function checkAnswer() {
    if (state.locked) return;
    const q = activeQuestions[state.index];
    const current = state.selected.map(x => x.text);
    const correct = current.length === q.answer.length && current.every((x, i) => x === q.answer[i]);
    const answerBox = document.getElementById("decode-answer");
    const feedback = document.getElementById("decode-feedback");

    if (!correct) {
      state.wrongThisRound += 1;
      state.streak = 0;
      answerBox?.classList.remove("shake");
      void answerBox?.offsetWidth;
      answerBox?.classList.add("shake");
      if (feedback) {
        feedback.className = "mt-5 rounded-2xl border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/20 p-4 text-sm text-rose-700 dark:text-rose-300";
        feedback.innerHTML = `<b>Chưa đúng.</b> Thứ tự các mảnh chưa khớp. Bạn bị trừ 15 điểm, hãy thử sắp xếp lại.`;
      }
      return;
    }

    state.locked = true;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.solved += 1;
    const base = Math.max(45, 100 - (state.usedHint ? 25 : 0) - state.wrongThisRound * 15);
    const comboBonus = state.streak >= 3 ? 25 : state.streak === 2 ? 10 : 0;
    state.score += base + comboBonus;
    answerBox?.classList.add("pulse-good", "border-emerald-400");

    if (feedback) {
      feedback.className = "mt-5 rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20 p-4";
      feedback.innerHTML = `<div class="flex gap-3"><span class="material-symbols-outlined text-emerald-600">check_circle</span><div><div class="font-black text-emerald-700 dark:text-emerald-300">Chính xác! +${base + comboBonus} điểm${comboBonus ? ` (gồm +${comboBonus} combo)` : ""}</div><p class="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">${esc(q.explanation)}</p></div></div>`;
    }

    document.querySelectorAll("#decode-bank .decode-token").forEach(btn => btn.disabled = true);
    document.querySelectorAll("#decode-answer [data-remove]").forEach(btn => btn.disabled = true);
    const reset = document.getElementById("decode-reset"); if (reset) reset.disabled = true;
    const hint = document.getElementById("decode-hint"); if (hint) hint.disabled = true;
    const check = document.getElementById("decode-check");
    if (check) {
      check.disabled = false;
      check.textContent = state.index === activeQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo";
      check.onclick = () => { state.index += 1; renderQuestion(); };
    }
  }

  function renderFinish() {
    const maxApprox = activeQuestions.length * 100 + Math.max(0, activeQuestions.length - 2) * 25;
    const pct = Math.min(100, Math.round((state.score / maxApprox) * 100));
    const rank = pct >= 80 ? "Nhà giải mã xuất sắc" : pct >= 60 ? "Nhà giải mã tiềm năng" : "Tiếp tục khám phá";
    root.innerHTML = `
      <div class="min-h-[620px] flex items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-2xl text-center">
          <div class="w-24 h-24 mx-auto rounded-3xl bg-amber-100 dark:bg-amber-950/30 text-[#D4A017] flex items-center justify-center mb-5"><span class="material-symbols-outlined text-6xl">workspace_premium</span></div>
          <div class="text-xs font-bold uppercase tracking-[.25em] text-[#B8860B] dark:text-[#D4A017]">Hoàn thành</div>
          <h2 class="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">${rank}</h2>
          <p class="text-slate-500 dark:text-slate-400 mt-3">Bạn đã hoàn thành ${activeQuestions.length} câu giải mã.</p>
          <div class="grid grid-cols-3 gap-3 mt-8">
            ${resultCard(state.score, "Tổng điểm")}
            ${resultCard(state.bestStreak, "Combo cao nhất")}
            ${resultCard(`${state.solved}/${activeQuestions.length}`, "Đã giải")}
          </div>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <button id="decode-replay" class="px-6 py-3 rounded-xl bg-slate-900 dark:bg-[#D4A017] text-white dark:text-slate-950 font-bold"><span class="material-symbols-outlined align-middle mr-1">replay</span>Chơi lại</button>
            <a href="games.html" class="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200">Về trang game</a>
          </div>
        </div>
      </div>`;
    document.getElementById("decode-replay")?.addEventListener("click", startGame);
  }

  function resultCard(value, label) {
    return `<div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-4"><div class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">${value}</div><div class="text-xs text-slate-500 dark:text-slate-400 mt-1">${label}</div></div>`;
  }

  renderIntro();
})();
