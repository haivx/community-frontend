<h4>Game Theory & Network attacks: How to destroy bitcoin</h4>

1. Pool strategies

1.1 Pool reward schemes

- Pay-per-share: Chủ pool sẽ trả cho thợ đào một số tiền nhất định khi thợ đào có submit một bằng chứng chứng tỏ là họ đang hoạt động(một số nonce mặc dù không chính xác) 

  - Thợ đào sẽ có lợi
  - Thợ đào riêng lẻ sẽ không có bị nguy cơ rủi ro bằng chủ pool: 
  - Vấn đề: Thợ đào không có áp lưc phải đào được bitcoin

- Proportional: Chủ pool chỉ trả tiền lời khi bitcoin đc đào ra.

  - Chủ pool có lợi
  - Thợ đào sẽ là người take risk, tốn chi phí lớn.


1.3 Pool reward

Pool hoping là hiện tượng 1 thợ đào nhảy qua lại giữa 2 xuỏng đào để họ tối ưu hoá nhất số tiền mà họ kiếm được

Theo thời gian, pool đào theo proportional ngày càng giảm vì số lượng bitcoin ngày càng giảm, xác suất đào được càng giảm. Lợi ích của thợ đào khi join các pool này càng giảm nhanh. DO đó họ nhanh chóng chuyển qua các xưởng đào theo giờ => pool hoping sẽ không xảy ra nhiều nữa

1.4 Pool Cannibalization

Cannibalizing Pools =  thợ đào không gửi số nonce lên cho chủ pool khi đào được, mà giữ lại, trong khi vẫn nhận tiền công đào từ chủ pool

1.5 Pool wars

Nash equilibrium: Điểm cân bằng nash

Các pool dùng những cheat ở phía trên để phá/cạnh tranh lẫn nhau.

Nếu không có pool nào tấn công các pool khác, một pool có thể có thêm doanh thu khi tấn công pool khác. Do đó để chắc chắn thì các pool sẽ tấn công lẫn nhau. Và thực tế là không ai xác định đc các pool có đang tấn công nhau hay không

Nếu các pool có thể xác định đc mình bị tấn công hay không thì cuộc chiến mới có hồi kết.

2. Double spending

- The classic attack
- Race attack
- Confirmation
- K Confirmations