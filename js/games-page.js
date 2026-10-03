(function () {
  const games = window.HCM_GAMES || [];
  const list = document.getElementById("games-list");

  if (!list) return;

  if (!games.length) {
    list.innerHTML = `
      <div class="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
        <span class="material-symbols-outlined text-5xl text-slate-400">sports_esports</span>
        <p class="mt-3 text-slate-600 dark:text-slate-300">Chưa có game nào được cấu hình.</p>
      </div>`;
    return;
  }

  list.innerHTML = games.map((game, index) => {
    const tags = (game.tags || []).map(tag => `
      <span class="px-3 py-1 bg-philo-blackBurgundy/60 text-philo-ivory/80 rounded-full text-xs font-medium flex items-center gap-1.5 border border-philo-gold/20">
        <span class="material-symbols-outlined text-sm text-philo-gold">${tag.icon || "label"}</span>
        ${tag.label}
      </span>`).join("");

    const media = game.image
      ? `<img src="${game.image}" alt="${game.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out">`
      : `<div class="absolute inset-0 bg-gradient-to-br from-philo-blackBurgundy via-philo-burgundy to-philo-crimson"></div>`;

    return `
      <a href="${game.url}"
        class="philo-card rounded-2xl overflow-hidden shadow-cinematic hover:shadow-goldGlow border border-philo-gold/20 hover:border-philo-gold/50 group flex flex-col md:flex-row transition-all duration-300 transform hover:-translate-y-1">
        <div class="w-full md:w-80 h-52 md:h-auto relative flex items-center justify-center shrink-0 overflow-hidden bg-philo-blackBurgundy">
          ${media}
          <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-philo-blackBurgundy/90 via-philo-blackBurgundy/40 to-transparent z-10"></div>
          <div class="absolute inset-0 bg-philo-blackBurgundy/30 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          <div class="absolute top-4 left-4 z-20">
            <span class="px-3 py-1 bg-gradient-to-r from-philo-warmGold to-philo-gold rounded-full text-philo-deep text-[11px] font-black uppercase tracking-wider shadow-md">${game.badge || `GAME ${index + 1}`}</span>
          </div>
          <div class="absolute bottom-4 right-4 z-20 md:hidden">
            <span class="material-symbols-outlined text-philo-gold text-2xl drop-shadow-md">sports_esports</span>
          </div>
        </div>
        <div class="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-20">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-black tracking-widest uppercase text-philo-gold">Trò chơi 0${index + 1}</span>
              <span class="material-symbols-outlined text-philo-gold/50 group-hover:text-philo-gold transition-colors hidden md:inline-block">${game.icon || "sports_esports"}</span>
            </div>
            <h3 class="text-2xl font-bold font-heading text-philo-ivory mb-3 group-hover:text-philo-gold transition-colors">
              ${game.title}
            </h3>
            <p class="text-philo-ivory/70 text-sm md:text-base mb-6 leading-relaxed">
              ${game.description}
            </p>
          </div>
          <div>
            <div class="flex flex-wrap gap-2 mb-6">${tags}</div>
            <div class="flex items-center text-philo-gold font-bold text-sm group-hover:gap-3 transition-all">
              <span>Bắt đầu trải nghiệm</span>
              <span class="material-symbols-outlined text-base ml-1.5 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>
      </a>`;
  }).join("");
})();
