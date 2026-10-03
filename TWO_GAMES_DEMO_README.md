# HCM – 2 Game Demo

## Game 1: Giải mã câu hỏi
- File giao diện: `game-1.html`
- Logic + dữ liệu: `js/game-1.js`
- Cơ chế: đọc câu hỏi → chọn các mảnh từ khóa theo thứ tự → kiểm tra → nhận điểm/giải thích.
- Có: combo, gợi ý, trừ điểm khi sai, tổng kết cuối game.

## Game 2: Bản đồ tư tưởng
- File giao diện: `game-2.html`
- Logic + dữ liệu: `js/game-2.js`
- Cơ chế: kéo thả (desktop) hoặc chạm thẻ rồi chạm nhánh (mobile).
- 4 nhánh demo tương ứng Chương III–VI; 9 thẻ khái niệm.
- Có: kiểm tra, trả thẻ sai về kho, gợi ý, tính điểm, hiệu ứng hoàn thành.

## Trang danh sách Game
- `games.html`
- `js/games-config.js`
- `js/games-page.js`

## Chạy demo
Từ thư mục project:

```bash
npm install
npm start
```

Nếu project không cần backend cho trang tĩnh, có thể mở bằng VS Code Live Server.

## Ghi chú nội dung
Bản demo ưu tiên thuật ngữ và tên chủ đề/chương trong Giáo trình Tư tưởng Hồ Chí Minh. Có thể mở rộng thêm bộ câu hỏi và level sau khi chốt gameplay.
