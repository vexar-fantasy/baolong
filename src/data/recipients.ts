import type { Recipient } from "@/types/recipient";

// Chỉ cần sửa danh sách này để cá nhân hóa món quà cho từng người.
export const recipients: Recipient[] = [
  {
    id: "girl-16",
    name: "Cô Nguyễn Lê Minh Châu",
    password: "2010",
    greeting: "Má Mi yêu dấu, mặc dù tụi em hơi quậy hơi phá má mi 1 khoảng thời gian, nhưng mà tụi em cũng biết quan tâm mọi người nhiều lém, chúc má mi ngày càng xinh đẹp, cho tụi em điểm văn thiệt cao-) và luôn che chở tụi em"
  },
  {
    id: "girl-1",
    name: "Ngô Phương Quỳnh Anh",
    password: "2010",
    greeting: "Chúc bạn ngày càng xinh đẹp, học dỏi, được bạn bè yêu quý trong lớp nkaa"
  },
  {
    id: "girl-2",
    name: "Nông Phạm Khánh Băng",
    password: "2010",
    greeting: "Mấy hoàng tử chúc bà ngày càng học dỏi, hk1 loại xuất sắc và gày càng xinh đẹp nhe!!"
  },
  {
    id: "girl-3",
    name: "Trần Nguyễn Ngân Hà",
    password: "2010",
    greeting: "Chúc bà cosplay bộ anime nào cũng xinh cũng ngầu, mãi best thành viên của tổ 4 nhaa!?!?"
  },
  {
    id: "girl-4",
    name: "Mai Phạm Bảo Hân",
    password: "2010",
    greeting: "Phái nam xin chúc bà học dỏi, xinh đẹp và được mọi người yêu thươn nhố!!"
  },
  {
    id: "girl-5",
    name: "Nguyễn Khánh Huyền",
    password: "2010",
    greeting: "Mấy thk đàn ông chúc bà học dỏi và ngày càng xinh đẹp hơn đó nha!"
  },
  {
    id: "girl-6",
    name: "Lê Ngân Khánh",
    password: "2010",
    greeting: "Con trai tụi tui chúc bà học giỏi, siêng năng và được mọi người yêu thương nhaa"
  },
  {
    id: "girl-7",
    name: "Lưu Phương Khánh",
    password: "2010",
    greeting: "Anh em tụi tuôi chúc bà ngày càng xinh đẹp, điểm cao ngút trời, rạng danh 10TA4 nhíe"
  },
  {
    id: "girl-8",
    name: "Nguyễn Lê Thùy Lâm",
    password: "2010",
    greeting: "Ae xã đoàn tụi tui chúc bà ngày càng xinh đẹp, học dỏi, cục dàng của tổ 4 đó nhaa"
  },
  {
    id: "girl-9",
    name: "Huỳnh Khánh Linh",
    password: "2010",
    greeting: "Chúc bạn học dỏi, xink gái hơn như là luôn đặt điểm cao, luôn vui vẻ trong cuộc sống, luôn được thầy cô yêu quý"
  },
  {
    id: "girl-10",
    name: "Nguyễn Khánh Linh",
    password: "2010",
    greeting: "Mấy thằng đực tụi tui chúc bà ngày càng học dỏi, xinh yêu trong Võ Thị Sáu nhaa"
  },
  {
    id: "girl-11",
    name: "Nguyễn Bảo Ngân",
    password: "2010",
    greeting: "Tụi tui thương chúc bạn học giỏi, học bạ đẹp trong năm nay và ngày càng tỏa sáng ở 10TA4 nha"
  },
  {
    id: "girl-12",
    name: "Đỗ Minh Bảo Ngọc",
    password: "2010",
    greeting: "Đám con trai tụi tui chúc ní học giỏi, bớt ba tạo lại nhíee"
  },
  {
    id: "girl-13",
    name: "Nguyễn Trần Phương Như",
    password: "2010",
    greeting: "Chúc bạn Như ngày càng học dỏi, xinh đẹp và tạo ấn tượng tốt với thầy cô và câu lạc bộ của mình trong Võ Thị Sáu nha!"
  },
  {
    id: "girl-14",
    name: "Trịnh Mai Phương",
    password: "2010",
    greeting: "Chúc leader của lớp học giỏi, ngày càng xinh đẹp hơnn"
  },
  {
    id: "girl-15",
    name: "Phan Nguyễn Phương Thảo",
    password: "2010",
    greeting: "Tụi tui chúc bạn học dỏi, ngày càng xinh đẹp và được mọi người trân trọng nhaa"
  },
];

export const findRecipient = (id: string) => recipients.find((recipient) => recipient.id === id);
