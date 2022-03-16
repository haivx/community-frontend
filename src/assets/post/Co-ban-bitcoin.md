1. What is bitcoin?

1.1 Basic concept

- Là đồng tiền mã hoá được sử dụng đầu tiên và rộng rãi nhất. ĐƯợc xây dựng trên nền tảng của 3 công nghệ rất quan trọng, đó là khoa học máy tính, công nghệ mã hoá và yếu tố kinh tế

- Bitcoin được nói đến cả về cộng đồng tin tưởng vào sự phi tập trung, cả về mạng lưới những người ủng hộ sử dụng bitcoin cũng như phần mềm mà người ta sử dụng.

- Là nguồn cảm hứng cho sự phát triển của công nghệ blockchain. Mặc dù công nghệ blockchain đã được phát minh từ 30 năm trước nhưng nhờ có bitcoin mà blockchain mới phát triển mạnh được.

- Tổng số bitcoin trong mạng lưới chỉ có đúng 21 triệu.

1.2 The cypherpunk movement
1.3 Satoshi's innovation

- Bitcoin cố giải quyết 2 vấn đề mà nền kinh tế phi tập trung khác mắc phải.
  + Tính không đồng nhất của các hồ sơ giao dịch => dùng `blockchain`
  + Rất khó để chống lại chuyện mạo danh, hacker, tấn công mạng => dùng `proof of work`

1.4 Bitcoin vs banks
 - Quản lý danh tính và tài khoản
 - Dịch vụ
 - Quản lý giao dịch
 - Tin tưởng

2. Identity - Quản lý danh tính và tài khoản

3. Transaction

4. Record-keeping

Bitcoin sử dụng blockchain, có nghĩa là nhiều giao dịch sẽ được gom lại thành 1 block và cứ mỗi khoảng thời gian nhất định, system sẽ gom lại những giao dịch trong thời gian vừa rồi. Và sử dụng công nghệ mã hoá để đánh dấu và bảo đảm rằng cái block đã được bảo vệ, không ai có thể thay đổi. Và system lồng thành những chain, tức là block này nối vào block nọ

Khi đó những nodes không update cơ sở dữ liệu của họ trong mỗi giao dịch mà chỉ update giao dịch mỗi lần 10 phút hay 20 phút ...

5. Consensus (Proof of work) - Cơ chế đồng thuận

Để giải quyết vấn đề `double spend attack`, với hệ thống P2P, xác thực hàng ngang, khi 1 message được gửi đi, tất cả node trên hệ thống sẽ nhận được message và tiến hành biểu quyết, nếu chỉ cần có ít nhất 1 node không xác nhận giao dịch là hợp lệ, giao dịch sẽ được huỷ và không ghi vào sổ cái database.

=> cơ chế này có nhược điểm nếu có nhiều người cùng gian lận => kết quả sẽ sai

=> Solution: Tăng chi phí khi tham gia vào biểu quyết => hình thành khái niệm đào bitcoin

- Cách biểu quyết: Mọi người cùng vào giải một bài toán(Tìm ra con số đúng), ai giải nhanh hơn thì được quyền ghi tất cả transaction vào block và đồng thời máy đó sẽ được nhận một khoản tiền thưởng là một số bitcoin nhất định. Đây gọi là đào bitcoin. Thợ đào lúc này vừa nhận được tiền phí transaction vừa nhận được tiền thưởng lúc đào bitcoin

- Hash power: Độ khó của việc giải bài toán. Nếu có nhiều người cùng tham gia => xác suất giải ra đáp án nhanh => thời gian giải nhanh => độ khó sẽ tăng lên và ngược lại.

Vậy tóm lại việc đào bitcoin thực chất là việc các node trên hệ thống mạng bitcoin cùng tham gia vào xác nhận giao dịch trong block có hợp lệ hay không thông qua việc giải một thuật toán. Nếu hợp lệ thì tất cả transaction trong block được xác nhận là hợp lệ.