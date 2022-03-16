1. Cryptographic hash functions: Hàm băm mật mã
- integrity of information: Tính toàn vẹn của thông tin

Thế nào là hàm băm: Là một hàm một chiều lấy một số đầu vào và tạo ra một số đầu ra, và kết quả tạo ra là một kết quả ngẫu nhiên và có tính bất dịch(Với một đầu vào nhất định thì có đầu xa chính xác như vậy)

- SHA256 là một hash function mã hoá được design bởi NSA. Bitcoin dùng SHA-256 ^2 có nghĩa là SHA256(SHA256(X)) với x là value đầu vào

2. A tamper-evident database: Một cơ sở dữ liệu minh bạch, có thể truy vết được.
- Dissecting the blockchain:
  - Block header
  - Block Size
  - Transaction counter
  - Transactions

a. Block header
-  Pre Block hash: Kết quả hàm băm của block trước đó => nối với block trước đó
   prevBlockHash = Hash(prevBlockHash || merkle root || nonce)
-  Merkle root
-  Nonce: Dùng cho việc mining
-  Timestamp: Thời điểm block được tạo ra
-  Target: Độ khó của thợ đào trong thời điểm đó
-  Version: Version block

Block Id = Hash(Block Header)

b. Merkle root
Cách tạo merkle Root: Trong một block có nhiều transaction => cứ mỗi 2 transaction gần nhau => lấy hàm hash của mỗi transaction được 2 giá trị, tiếp tục gọi hash function với 2 giá trị được tạo => được 1 node trong tree => tiếp tục tạo ra một hash value mới với giá trị tương tự của 2 transaction kế tiếp => tạo ra đc giá trị => giá trị cuối cùng chính là merkle Tree

=> Binary tree

Khi có một transaction trong cây Merkle Root bị thay đổi(tampered) => merkle root bị thay đổi(tampered) => điều này sẽ giúp cho mình xác định được một transaction có thuộc một block hay không.

Ví dụ nếu có hàng ngàn transaction trong một block, làm sao để một node có thể nhanh chóng xác định đc một transaction có thuộc block hay không => việc tìm kiếm đơn giản hơn nhiều khi chỉ dựa vào hash của transtion đó => tìm giá trị parent của nó => ....

c. Nonce
Có bài toán được đặt ra là tìm một giá trị thoả mãn bất đẳng thức(Hash puzzle) `Hash(blockHeader) < target`

Như đã biết: prevBlockHash = Hash(prevBlockHash || merkle root || nonce)

khi `prevBlockHash`, `merkle root` không thay đổi => nonce sẽ là số cần tìm để thoả mãn bất đẳng thức trên

>> Nói một cách khác, mining chính là quá trình tìm ra số nonce để thoả mãn bất đẳng thức trên

Hash puzzle cần phải có:
- Độ khó được tính toán
- Có thể thay đổi chỉnh sửa(Nhiều thợ đào hay ít thợ đào => điều chỉnh lại độ khó)
- Dễ dàng verify

Vậy thuật toán để đào bitcoin là gì? Thực chất không có giải thuật nào cho bài toán này, thợ đào thực ra phải dùng phép thử liên tục để tìm ra kết quả.

Cứ mỗi 2 tuần hoặc 2016 block được nối vào network, độ khó sẽ được điều chỉnh.

Độ khó sẽ được tính xấp xỉ bởi công thức: two_weeks / time_to_mine_prev_2016_blocks

- Coinbase transaction là transaction mà người miner họ tự đào ra được 1 bitcoin và gửi về chính ví của họ, coi như đó là phần thưởng của họ. Là transction số 1.

3. Signatures, ecdsa, and addresses
3.1 Digital signature schemes(DSS)

signature = private key + message
message   = public key + signature

+ Sender: private key + signature + public key

+ Receiver: signature + public key

Nếu có `man in the middle` => thay đổi message, nhưng private key không có => signature sai => signature + public key => receive dùng public key sẽ ko mở đc message

3.2 Key and addresses

Private key => Public key => Bitcoin Address

Từ private key => dùng Eliptic curve multiplication tạo ra public key, dùng hashing function để tạo ra bitcoin address. Tất cả đều là hàm 1 chiều, ko thể backtrack

3.3 Elliptic curve cryptography

- Bitcoin sử dụng ECDSA(Elliptic curve digital signature algorithm) để tạo ra private key và public key

- `Elliptic curve` đc define bởi đẳng thức: `y^3 = x^3 + ax + b`

Với thuật toán này, việc tạo public key và private key là 1 : 1 cũng như là 1 chiều.

- Tạo bitcoin address từ public key:

`Publickey` ---  SHA256 - RIPEMD160 -----> `Publickey hash` -- Base58check encode  ------> `Bitcoin address`

4. Bitcoin script: cách chuyển tiền bằng bitcoin

4.1 UTXO Model

- Bitcoin sử dụng UTXO model để thực hiện việc chuyển tiền

Có 2 cách để chuyển tiền: 

- Public key + signature: Chứng minh tôi là người chủ của lượng bitcoin này, sau này tôi muốn chuyển đi, tôi sẽ dùng chính private key của tôi để xác minh rằng tôi chính là chủ sở hữu.

- Script + signature: Chuyển lượng bitcoin đến 1 địa chỉ / script => sau này tôi sẽ chứng minh cái địa chỉ/ script đó chính là của tôi => tôi sẽ dùng nó để chuyển cho người khác

4.2 Nội dung của 1 transaction:

- metadata: nội dung của 1 giao dịch
- input: Xác minh tính sở hữu của bản thân
- output: Số lượng bitcoin + script
   Script này là opcode => giải thích số lượng bitcoin sẽ đc chuyển tới số người mang public key XXX và trong tương lai người nhận muốn nhận phải sử dụng public key của họ.

Bitcoin dùng ngôn ngữ gọi là `Bitcoin scripting language` gồm 3 yếu tố:
- Stack based
- Support native cho việc mã hoá 
- Đơn giản, ko có loops => khó bị hack, exploit(khai thác), an toàn

4.3 Metadata

5. Advanced bitcoin script

5.1 P2PKH vs P2SH

- Pay to Publickey Hash: Vendor(Người nhận) sẽ nói "Gửi coin của bạn tới địa chỉ hash của public key này"
  - Đơn giản
  - Hay được sử dụng

- Pay to Script Hash: Vendor sẽ nói "GỬi coin tới địa chỉ hash của một đoạn script, khi tôi xác thực cái script sẽ lấy được số bitcoin đó"

>> Người nhận phải viết script => hash cái script đó => đưa cho người gửi. Người gửi chỉ việc đơn giản là gửi tiền bằng cái script đó, việc khó là người nhận, phải chứng minh là chủ sở hữu của đoạn bitcoin đó

P2SH là đợt nâng cấp quan trọng nhất của bitcoin ở thời điểm gần đây. 
MultiSig là một trong những feature đó, nó cho phép nhiều người ký xác nhận vào một transaction trước khi nó được gửi đi.

6. TOàn bộ quá trình đào bitcoin:

- Download entire bitcoin blockchain
- Verify incoming transaction
- Create a Block
- Find a valid nonce
- Broad cast your block
- Get Profit