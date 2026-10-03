const fs = require('fs');

let html = fs.readFileSync('home.html', 'utf8');

const newHero = `      <!-- HERO SECTION -->
      <section class="relative min-h-[95vh] flex items-center pt-48 pb-20 px-4 md:px-10 overflow-hidden bg-philo-blackBurgundy border-b border-[#FFD34E]/20">
        <!-- Layer 1 & 2: Base Background & Flag Texture -->
        <div class="absolute inset-0 bg-[#140303] z-0"></div>
        <img src="assets/images/cinematic/hero_flag_background.png" alt="Cờ đỏ sao vàng" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen z-0" style="-webkit-mask-image: radial-gradient(circle at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 100%); mask-image: radial-gradient(circle at right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 100%);" />
        
        <!-- Layer 3: Atmospheric Golden Light -->
        <img src="assets/images/cinematic/hero_golden_light.png" alt="Ánh sáng" class="absolute top-0 right-0 w-[80%] h-full object-cover opacity-90 mix-blend-screen z-10 pointer-events-none" style="-webkit-mask-image: radial-gradient(circle at right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%); mask-image: radial-gradient(circle at right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%);" />
        
        <!-- Layer 4: Distant Landscape overlay -->
        <img src="assets/images/cinematic/hero_vietnam_landscape.png" alt="Phong cảnh" class="absolute bottom-0 left-0 w-full md:w-[60%] h-[60%] object-cover opacity-40 mix-blend-screen z-10 pointer-events-none" style="-webkit-mask-image: radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%); mask-image: radial-gradient(ellipse at bottom left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%);" />

        <!-- Layer 6: Doves -->
        <img src="assets/images/cinematic/hero_doves.png" alt="Chim bồ câu" class="absolute top-1/4 right-1/3 w-[35%] object-contain opacity-80 mix-blend-screen animate-pulse z-20 pointer-events-none" style="animation-duration: 8s; -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%); mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%);" />
        
        <!-- Dark Gradient behind text for readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#140303] via-[#3A0505]/60 to-transparent z-20"></div>

        <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between relative z-30">
          
          <!-- LEFT CONTENT: Text (50% width) -->
          <div class="w-full md:w-1/2 flex flex-col items-start gap-6 text-left animate-fade-in-up">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D9A62E]/50 rounded-full text-xs font-semibold text-[#FFD34E] uppercase tracking-[0.2em] bg-[#140303]/50 backdrop-blur-sm">
              <span class="material-symbols-outlined text-sm">history_edu</span>
              Học viện Triết học Số
            </div>
            
            <h1 class="text-5xl md:text-[72px] lg:text-[84px] font-bold font-heading leading-[1.1] text-[#FFF4DC] drop-shadow-2xl">
              Tư Tưởng <br />
              <span class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] bg-clip-text text-transparent filter drop-shadow-gold">Hồ Chí Minh</span>
            </h1>
            
            <p class="text-lg md:text-xl font-heading italic text-[#F5D98A] border-l-2 border-[#FFD34E] pl-4 my-2 opacity-90">
              "Không có gì quý hơn độc lập, tự do."
            </p>
            
            <p class="text-sm md:text-base text-[#FFF4DC]/80 leading-relaxed font-body max-w-lg font-light">
              Trải nghiệm học tập hiện đại với 6 module cốt lõi, ngân hàng đề thi đa dạng, trò chơi chữ và hệ thống AI trợ giảng thông minh 24/7.
            </p>
            
            <div class="flex flex-wrap items-center justify-start gap-4 mt-4">
              <a href="#overview" class="bg-gradient-to-r from-[#FFD34E] to-[#D9A62E] text-[#140303] font-semibold rounded-full px-8 py-3.5 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                Khám phá 6 Module
                <span class="material-symbols-outlined text-base font-bold">arrow_forward</span>
              </a>
              <a href="ai-assistants.html" class="bg-[#3A0505]/40 backdrop-blur-md border border-[#FFD34E]/50 text-[#FFD34E] font-medium rounded-full px-6 py-3.5 hover:bg-[#FFD34E]/10 hover:border-[#FFD34E] transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                Hỏi Đáp AI
                <span class="material-symbols-outlined text-base">auto_awesome</span>
              </a>
            </div>
            
            <div class="flex flex-wrap justify-start items-center gap-4 mt-8 text-xs text-[#FFF4DC]/60 font-medium">
              <div class="flex items-center gap-1"><span class="material-symbols-outlined text-[#FFD34E] text-sm">view_module</span> 6 Module</div>
              <span class="w-1 h-1 rounded-full bg-[#D9A62E]/50"></span>
              <div class="flex items-center gap-1"><span class="material-symbols-outlined text-[#FFD34E] text-sm">article</span> 18 Bài viết</div>
              <span class="w-1 h-1 rounded-full bg-[#D9A62E]/50"></span>
              <div class="flex items-center gap-1"><span class="material-symbols-outlined text-[#FFD34E] text-sm">school</span> 36+ Bài học</div>
              <span class="w-1 h-1 rounded-full bg-[#D9A62E]/50"></span>
              <div class="flex items-center gap-1"><span class="material-symbols-outlined text-[#FFD34E] text-sm">smart_toy</span> AI 24/7</div>
            </div>
          </div>
          
          <!-- RIGHT CONTENT: Subject Layer (55% width) -->
          <div class="hidden md:flex w-6/12 absolute right-0 bottom-0 top-0 pointer-events-none z-30 items-end justify-end">
            <!-- Fade the edges of the subject using radial mask-image -->
            <img src="assets/images/cinematic/hero_hcm_cutout.png" alt="Hồ Chí Minh" class="h-[105%] max-w-none object-cover mix-blend-screen translate-y-8" style="-webkit-mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%); mask-image: radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);" />
          </div>
        </div>
      </section>`;

const startIndex = html.indexOf('<!-- HERO SECTION -->');
const nextSectionIndex = html.indexOf('<!-- QUOTE CAROUSEL SECTION -->');

if (startIndex !== -1 && nextSectionIndex !== -1) {
    html = html.substring(0, startIndex) + newHero + '\n\n      ' + html.substring(nextSectionIndex);
    fs.writeFileSync('home.html', html, 'utf8');
    console.log("Successfully replaced Hero section");
} else {
    console.log("Could not find boundaries");
}
