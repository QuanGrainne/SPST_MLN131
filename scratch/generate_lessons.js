const fs = require('fs');
const file = 'd:/Work/HCM202/module2.html';
let content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('<section id="lesson-area" class="mb-16 min-h-[500px]">');
const endIndex = content.indexOf('<!-- MODULE QUIZ BANNER -->');

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find section markers');
    process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const newLessons = `
<section id="lesson-area" class="mb-16 min-h-[500px]">

    <!-- BÀI 2.1: VẤN ĐỀ ĐỘC LẬP DÂN TỘC -->
    <div id="lesson-M2-L1" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">🏴</span><span class="text-red-100 text-sm font-semibold uppercase tracking-wider">Bài 2.1 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Vấn đề độc lập dân tộc</h2>
                <p class="text-red-100 text-sm">🎯 <strong>Mục tiêu:</strong> Hiểu nội dung tư tưởng HCM về độc lập dân tộc: quyền thiêng liêng, gắn với tự do hạnh phúc, độc lập triệt để và toàn vẹn lãnh thổ.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-r-2xl p-6">
                    <p class="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">📖 Trích dẫn kinh điển</p>
                    <blockquote class="font-display text-lg italic text-text-main-light dark:text-text-main-dark leading-relaxed">
                        "Không có gì quý hơn độc lập, tự do!"
                    </blockquote>
                    <p class="text-right text-sm text-text-muted-light dark:text-text-muted-dark mt-3">— Hồ Chí Minh | <em>Lời kêu gọi chống Mỹ cứu nước, 17/7/1966</em></p>
                </div>
                <div class="prose prose-lg dark:prose-invert max-w-none space-y-5">
                    <h3 class="font-display text-xl font-bold">1. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Lịch sử dựng nước và giữ nước của dân tộc Việt Nam gắn liền với truyền thống yêu nước, đấu tranh chống ngoại xâm. Hồ Chí Minh đã tiếp thu quyền tự nhiên của con người (trong Tuyên ngôn Độc lập Mỹ 1776 và Tuyên ngôn nhân quyền Pháp 1789) và suy luận sáng tạo ra quyền của các dân tộc: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do." Người luôn khẳng định ý chí sắt đá: "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."
                    </p>
                    <h3 class="font-display text-xl font-bold">2. Độc lập dân tộc phải gắn liền với tự do, cơm no, áo ấm và hạnh phúc</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Theo Người, "nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì". Độc lập phải mang lại lợi ích thiết thực: Làm cho dân có ăn, có mặc, có chỗ ở, có học hành.
                    </p>
                    <h3 class="font-display text-xl font-bold">3. Độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Hồ Chí Minh kịch liệt vạch trần "độc lập giả hiệu" của bọn thực dân đế quốc. Một nền độc lập thật sự đòi hỏi dân tộc đó phải có quyền tự quyết về ngoại giao, có quân đội riêng, nền tài chính riêng.
                    </p>
                    <h3 class="font-display text-xl font-bold">4. Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Trước âm mưu chia cắt đất nước của thực dân, Người khẳng định: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi".
                    </p>
                </div>
                <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <h3 class="font-display text-lg font-bold mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-primary">psychology</span> Câu hỏi phản tư</h3>
                    <div class="space-y-3">
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>1. Hồ Chí Minh suy luận từ quyền con người sang quyền dân tộc trong Tuyên ngôn Độc lập mang ý nghĩa gì?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                                <strong class="text-primary block mb-1">Gợi ý:</strong> Đây là nghệ thuật "Gậy ông đập lưng ông" sắc bén. Người dùng chính các nguyên lý mà tư bản, đế quốc (Mỹ, Pháp) thừa nhận để khẳng định quyền thiêng liêng của dân tộc Việt Nam, đồng thời đặt cơ sở pháp lý quốc tế cho nền độc lập.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button onclick="completeLesson('M2-L1')" id="btn-complete-M2-L1" class="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center gap-2">
                        <span class="material-symbols-outlined">check_circle</span> Đánh dấu hoàn thành
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- BÀI 2.2: CÁCH MẠNG GIẢI PHÓNG DÂN TỘC -->
    <div id="lesson-M2-L2" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">⚔️</span><span class="text-emerald-100 text-sm font-semibold uppercase tracking-wider">Bài 2.2 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Cách mạng giải phóng dân tộc</h2>
                <p class="text-emerald-100 text-sm">🎯 <strong>Mục tiêu:</strong> Nắm vững 5 luận điểm cốt lõi của Hồ Chí Minh về cách mạng giải phóng dân tộc.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-secondary rounded-r-2xl p-6">
                    <p class="text-xs font-bold text-secondary uppercase tracking-wider mb-2">📖 Trích dẫn kinh điển</p>
                    <blockquote class="font-display text-lg italic text-text-main-light dark:text-text-main-dark leading-relaxed">
                        "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."
                    </blockquote>
                    <p class="text-right text-sm text-text-muted-light dark:text-text-muted-dark mt-3">— Hồ Chí Minh</p>
                </div>
                <div class="space-y-5">
                    <h3 class="font-display text-xl font-bold">5 Luận điểm sáng tạo về Cách mạng GPDT</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-red-50 dark:bg-red-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-red-600 mb-2">1. Con đường cách mạng vô sản</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Từ bài học thất bại của các phong trào yêu nước trước đó, Người khẳng định chỉ có cách mạng vô sản mới giải phóng triệt để dân tộc và giai cấp.</p>
                        </div>
                        <div class="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-blue-600 mb-2">2. Do Đảng Cộng sản lãnh đạo</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Cách mạng trước hết phải có Đảng. Đảng là đội tiên phong của giai cấp công nhân, nhân dân lao động và cả dân tộc.</p>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-green-600 mb-2">3. Lực lượng: Đại đoàn kết toàn dân</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Cách mạng là sự nghiệp của quần chúng. Lực lượng là toàn thể nhân dân, trong đó nền tảng là liên minh công - nông - trí thức.</p>
                        </div>
                        <div class="bg-purple-50 dark:bg-purple-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-purple-600 mb-2">4. Tính chủ động, sáng tạo</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Cách mạng thuộc địa không thụ thuộc hoàn toàn vào CM chính quốc. Nó có thể bùng nổ và giành thắng lợi <strong>trước</strong> cách mạng vô sản ở chính quốc.</p>
                        </div>
                        <div class="bg-orange-50 dark:bg-orange-900/10 rounded-2xl p-5 md:col-span-2">
                            <h4 class="font-bold text-orange-600 mb-2">5. Tiến hành bằng bạo lực cách mạng</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Dùng bạo lực CM chống lại bạo lực phản CM. Đó là sự kết hợp chặt chẽ giữa lực lượng chính trị của quần chúng với lực lượng vũ trang nhân dân.</p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <h3 class="font-display text-lg font-bold mb-4 flex items-center gap-2"><span class="material-symbols-outlined text-secondary">psychology</span> Câu hỏi phản tư</h3>
                    <div class="space-y-3">
                        <div class="reflection-item">
                            <button onclick="toggleReflection(this)" class="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors text-sm font-medium flex justify-between items-center">
                                <span>1. Luận điểm cách mạng thuộc địa có thể giành thắng lợi trước cách mạng chính quốc thể hiện sự sáng tạo như thế nào?</span>
                                <span class="material-symbols-outlined text-gray-400 flex-shrink-0 ml-2">expand_more</span>
                            </button>
                            <div class="reflection-answer p-4 text-sm text-text-muted-light dark:text-text-muted-dark">
                                <strong class="text-secondary block mb-1">Gợi ý:</strong> Quốc tế Cộng sản từng cho rằng CM thuộc địa phụ thuộc vào CM chính quốc. Hồ Chí Minh, với cái nhìn thực tiễn, nhận ra "nọc độc và sức sống của con rắn độc tư bản đang tập trung ở các thuộc địa". Do đó, thuộc địa có sức mạnh to lớn và có thể chủ động đánh đổ đế quốc, giúp đỡ CM chính quốc.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button onclick="showLesson('M2-L1')" class="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>
                    <div class="flex gap-3">
                        <button onclick="openFormativeQuiz('M2-FQ1')" class="bg-secondary hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">quiz</span> Kiểm tra hình thành (Bài 2.1–2.2)</button>
                        <button onclick="completeLesson('M2-L2')" id="btn-complete-M2-L2" class="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">check_circle</span> Hoàn thành</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- BÀI 2.3: CHỦ NGHĨA XÃ HỘI -->
    <div id="lesson-M2-L3" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">🌟</span><span class="text-purple-100 text-sm font-semibold uppercase tracking-wider">Bài 2.3 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Tư tưởng HCM về Chủ nghĩa xã hội</h2>
                <p class="text-purple-100 text-sm">🎯 <strong>Mục tiêu:</strong> Hiểu quan niệm, tính tất yếu và các đặc trưng cơ bản của xã hội XHCN theo Hồ Chí Minh.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-2xl p-6">
                    <p class="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">📖 Trích dẫn kinh điển</p>
                    <blockquote class="font-display text-lg italic text-text-main-light dark:text-text-main-dark leading-relaxed">
                        "Nói một cách tóm tắt, mộc mạc, chủ nghĩa xã hội trước hết nhằm làm cho nhân dân lao động thoát nạn bần cùng, làm cho mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc."
                    </blockquote>
                    <p class="text-right text-sm text-text-muted-light dark:text-text-muted-dark mt-3">— Hồ Chí Minh</p>
                </div>
                <div class="space-y-5">
                    <h3 class="font-display text-xl font-bold">1. Quan niệm và Tất yếu khách quan</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        Hồ Chí Minh diễn đạt CNXH bằng ngôn ngữ bình dị nhưng sâu sắc. Đó là xã hội ở giai đoạn đầu của chủ nghĩa cộng sản, không còn áp bức bóc lột, do nhân dân lao động làm chủ. Tiến lên CNXH là một <strong>tất yếu khách quan</strong> của lịch sử, nhưng lộ trình và phương thức đi lên ở mỗi nước (như Việt Nam bỏ qua giai đoạn TBCN) là khác nhau tùy hoàn cảnh cụ thể.
                    </p>
                    
                    <h3 class="font-display text-xl font-bold mt-6">2. Một số đặc trưng cơ bản của XHCN</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-4">
                            <div class="flex gap-3 items-start">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</span>
                                <div><strong class="block text-sm">Về chính trị</strong><span class="text-sm text-text-muted-light dark:text-text-muted-dark">Là xã hội có chế độ dân chủ do nhân dân làm chủ, dưới sự lãnh đạo của Đảng Cộng sản.</span></div>
                            </div>
                            <div class="flex gap-3 items-start">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</span>
                                <div><strong class="block text-sm">Về kinh tế</strong><span class="text-sm text-text-muted-light dark:text-text-muted-dark">Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.</span></div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex gap-3 items-start">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</span>
                                <div><strong class="block text-sm">Về văn hóa, đạo đức</strong><span class="text-sm text-text-muted-light dark:text-text-muted-dark">Trình độ phát triển cao, bảo đảm sự công bằng, hợp lý trong các quan hệ xã hội.</span></div>
                            </div>
                            <div class="flex gap-3 items-start">
                                <span class="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">4</span>
                                <div><strong class="block text-sm">Về chủ thể</strong><span class="text-sm text-text-muted-light dark:text-text-muted-dark">Là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <button onclick="showLesson('M2-L2')" class="text-sm text-text-muted-light hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>
                    <button onclick="completeLesson('M2-L3')" id="btn-complete-M2-L3" class="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-sm">check_circle</span> Hoàn thành</button>
                </div>
            </div>
        </div>
    </div>

    <!-- BÀI 2.4: XÂY DỰNG CNXH Ở VN -->
    <div id="lesson-M2-L4" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">🎯</span><span class="text-rose-100 text-sm font-semibold uppercase tracking-wider">Bài 2.4 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Xây dựng CNXH ở Việt Nam</h2>
                <p class="text-rose-100 text-sm">🎯 <strong>Mục tiêu:</strong> Nắm vững Mục tiêu và Động lực của CNXH ở Việt Nam theo tư tưởng Hồ Chí Minh.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="space-y-5">
                    <h3 class="font-display text-xl font-bold text-primary">1. Mục tiêu CNXH ở Việt Nam</h3>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5">
                            <h4 class="font-bold text-blue-700 mb-2">Chính trị</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Xây dựng chế độ dân chủ ("dân làm chủ", "dân là chủ"). Tất cả quyền lực thuộc về nhân dân.</p>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-green-700 mb-2">Kinh tế</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Xây dựng nền kinh tế phát triển cao gắn bó mật thiết với mục tiêu chính trị, với công nghiệp và nông nghiệp hiện đại.</p>
                        </div>
                        <div class="bg-purple-50 dark:bg-purple-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-purple-700 mb-2">Văn hóa</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Xây dựng nền văn hóa mang tính dân tộc, khoa học, đại chúng, tiếp thu tinh hoa nhân loại.</p>
                        </div>
                        <div class="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-5">
                            <h4 class="font-bold text-amber-700 mb-2">Quan hệ xã hội</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Bảo đảm dân chủ, công bằng, văn minh, thay đổi triệt để các quan hệ cũ, thói quen cũ.</p>
                        </div>
                    </div>

                    <h3 class="font-display text-xl font-bold text-secondary mt-6">2. Động lực của CNXH ở Việt Nam</h3>
                    <p class="text-text-muted-light dark:text-text-muted-dark">
                        Hệ thống động lực bao gồm nội lực và ngoại lực, nhưng <strong>nhân dân (động lực con người) là quan trọng nhất</strong>. Cụ thể: Lợi ích của dân, Dân chủ của dân, Sức mạnh đoàn kết toàn dân, Hoạt động của Đảng và Nhà nước.
                    </p>
                    <div class="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 rounded-2xl p-4">
                        <p class="text-sm"><strong>⚠️ Chú ý (Xây đi đôi với Chống):</strong> Cùng với việc phát huy động lực, HCM nhắc nhở phải khắc phục các lực cản ("giặc nội xâm" như tham ô, lãng phí, quan liêu, chủ nghĩa cá nhân).</p>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button onclick="showLesson('M2-L3')" class="text-sm text-text-muted-light hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>
                    <div class="flex gap-3">
                        <button onclick="openFormativeQuiz('M2-FQ2')" class="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">quiz</span> Kiểm tra (2.3–2.4)</button>
                        <button onclick="completeLesson('M2-L4')" id="btn-complete-M2-L4" class="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">check_circle</span> Hoàn thành</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- BÀI 2.5: THỜI KỲ QUÁ ĐỘ LÊN CNXH -->
    <div id="lesson-M2-L5" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">⚙️</span><span class="text-amber-100 text-sm font-semibold uppercase tracking-wider">Bài 2.5 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Thời kỳ quá độ lên CNXH ở Việt Nam</h2>
                <p class="text-amber-100 text-sm">🎯 <strong>Mục tiêu:</strong> Hiểu rõ tính chất, đặc điểm, nhiệm vụ và nguyên tắc xây dựng CNXH trong thời kỳ quá độ.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="space-y-5">
                    <div class="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-5 border-l-4 border-amber-500">
                        <h4 class="font-bold text-amber-700 mb-2">1. Đặc điểm và Tính chất</h4>
                        <p class="text-sm text-text-muted-light dark:text-text-muted-dark">
                            <strong>Đặc điểm lớn nhất:</strong> "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa."<br>
                            <strong>Tính chất:</strong> Là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ. Sự đan xen giữa yếu tố mới và tàn dư cũ.
                        </p>
                    </div>
                    <div class="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-5 border-l-4 border-blue-500">
                        <h4 class="font-bold text-blue-700 mb-2">2. Nhiệm vụ của thời kỳ quá độ</h4>
                        <p class="text-sm text-text-muted-light dark:text-text-muted-dark">
                            Đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ, xây dựng các yếu tố mới trên tất cả các lĩnh vực đời sống (Chính trị, Kinh tế, Văn hóa, Xã hội).
                        </p>
                    </div>
                    <h3 class="font-display text-xl font-bold mt-6">3. Nguyên tắc xây dựng CNXH trong thời kỳ quá độ</h3>
                    <ul class="list-disc pl-5 text-text-muted-light dark:text-text-muted-dark space-y-2">
                        <li>Mọi tư tưởng, hành động phải được thực hiện trên nền tảng <strong>chủ nghĩa Mác-Lênin</strong>.</li>
                        <li>Phải <strong>giữ vững độc lập dân tộc</strong>.</li>
                        <li>Phải <strong>đoàn kết, học tập kinh nghiệm</strong> của các nước anh em (nhưng không áp đặt máy móc).</li>
                        <li>Xây phải đi đôi với chống.</li>
                    </ul>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <button onclick="showLesson('M2-L4')" class="text-sm text-text-muted-light hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>
                    <button onclick="completeLesson('M2-L5')" id="btn-complete-M2-L5" class="bg-primary hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors flex items-center gap-2"><span class="material-symbols-outlined text-sm">check_circle</span> Hoàn thành</button>
                </div>
            </div>
        </div>
    </div>

    <!-- BÀI 2.6: MỐI QUAN HỆ ĐLDT VÀ CNXH -->
    <div id="lesson-M2-L6" class="lesson-content hidden">
        <div class="bg-surface-light dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
            <div class="lesson-header-academic">
                <div class="flex items-center gap-3 mb-3"><span class="text-3xl">🔗</span><span class="text-sky-100 text-sm font-semibold uppercase tracking-wider">Bài 2.6 — Module 2</span></div>
                <h2 class="font-display text-3xl font-bold text-white mb-2">Mối quan hệ giữa độc lập dân tộc và CNXH</h2>
                <p class="text-sky-100 text-sm">🎯 <strong>Mục tiêu:</strong> Nắm vững cốt lõi tư tưởng HCM: Độc lập dân tộc gắn liền với CNXH.</p>
            </div>
            <div class="p-8 space-y-8">
                <div class="space-y-5">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-5 border-l-4 border-blue-500">
                            <h4 class="font-bold text-blue-600 mb-2">1. Độc lập dân tộc là cơ sở, tiền đề</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">Độc lập dân tộc là mục tiêu đầu tiên (cơ sở) để tiến lên CNXH. Cuộc cách mạng giải phóng dân tộc càng triệt để thì càng tạo tiền đề thuận lợi cho cách mạng XHCN.</p>
                        </div>
                        <div class="bg-red-50 dark:bg-red-900/10 rounded-2xl p-5 border-l-4 border-red-500">
                            <h4 class="font-bold text-red-600 mb-2">2. CNXH bảo đảm nền độc lập vững chắc</h4>
                            <p class="text-sm text-text-muted-light dark:text-text-muted-dark">CNXH là xu thế tất yếu. Chỉ có CNXH mới giải phóng được dân tộc bị áp bức tận gốc. Xây dựng CNXH thành công sẽ tạo sức mạnh tổng hợp bảo vệ nền độc lập tự do.</p>
                        </div>
                    </div>
                    
                    <h3 class="font-display text-xl font-bold mt-6">3. Điều kiện bảo đảm ĐLDT gắn liền với CNXH</h3>
                    <ul class="list-disc pl-5 text-text-muted-light dark:text-text-muted-dark space-y-2">
                        <li><strong>Vai trò lãnh đạo tuyệt đối của Đảng Cộng sản:</strong> Là điều kiện tiên quyết. Nếu không, cách mạng không thể đi theo con đường vô sản.</li>
                        <li><strong>Củng cố khối đại đoàn kết dân tộc:</strong> Nền tảng là liên minh công - nông - trí thức. Sức mạnh bên trong quyết định thắng lợi.</li>
                        <li><strong>Đoàn kết quốc tế:</strong> Gắn bó chặt chẽ với phong trào cách mạng thế giới, kết hợp sức mạnh dân tộc với sức mạnh thời đại.</li>
                    </ul>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <button onclick="showLesson('M2-L5')" class="text-sm text-text-muted-light hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-sm">arrow_back</span> Bài trước</button>
                    <div class="flex gap-3">
                        <button onclick="openFormativeQuiz('M2-FQ3')" class="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">quiz</span> Kiểm tra (2.5–2.6)</button>
                        <button onclick="completeLesson('M2-L6')" id="btn-complete-M2-L6" class="bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-sm">check_circle</span> Hoàn thành</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
`;

content = before + newLessons + after;

fs.writeFileSync(file, content, 'utf8');
