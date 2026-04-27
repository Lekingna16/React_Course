import React, { useEffect, useMemo, useState } from 'react'

const HeavyFiltering = () => {
    const ho = [
        "Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Võ", "Đặng", "Bùi", "Đỗ",
        "Hồ", "Ngô", "Dương", "Lý", "Mai", "Tạ", "Vũ", "Đinh", "Nghiêm", "Tô",
        "Trịnh", "Lưu", "Lâm", "Thái", "Đoàn", "Triệu", "Chu", "Phan", "Hà", "Cao",
        "Tăng", "Từ", "Bạch", "Đào", "Tiêu", "Tôn", "Mã", "La", "Khương", "Quách"
    ];

    const dem = [
        "Văn", "Thị", "Minh", "Thanh", "Hữu", "Đức", "Quốc", "Xuân", "Ngọc", "Mỹ",
        "Kim", "Thu", "Hồng", "Bích", "Diệu", "Hải", "Anh", "Tuấn", "Hoàng", "Thế",
        "Đình", "Công", "Tiến", "Trọng", "Phúc", "Gia", "Như", "Khánh", "Tú", "Quỳnh",
        "Thảo", "Phương", "Linh", "Thùy", "Yến", "Nhi", "Mai", "Lan", "Cúc", "Trúc",
        "Đan", "Vy", "Uyên", "Ánh", "Diễm"
    ];

    const tenNam = [
        "Anh", "Hùng", "Dũng", "Tuấn", "Sơn", "Minh", "Phong", "Long", "Thắng", "Linh",
        "Trung", "Hiếu", "Tâm", "Tài", "Lộc", "Vinh", "Quang", "Đạt", "Bảo", "Kiên",
        "Thành", "Cường", "Nam", "Hải", "Phú", "Khôi", "Gia", "Nghĩa", "Đăng", "Khoa",
        "Nhật", "Huy", "Hoàng", "Phúc", "Tín", "Tùng", "Lâm", "Sang", "Vượng", "Trường",
        "Văn", "Duy", "Quý", "Quân", "Thiện", "Chính", "Nhân", "Nguyên", "Bình", "Hòa",
        "Hưng", "Phát", "Thịnh", "Tấn", "Khánh", "An", "Vũ", "Dương", "Bách", "Cao",
        "Đức", "Hạnh", "Khang", "Lợi", "Ngọc", "Sỹ", "Toàn", "Trực", "Việt", "Ý",
        "Bắc", "Chiến", "Công", "Đại", "Đông", "Giang", "Hà", "Hậu", "Hiển", "Huân",
        "Huỳnh", "Kha", "Khiêm", "Lịch", "Luân", "Mẫn", "Ninh", "Phi", "Quốc", "Sinh",
        "Tạo", "Thái", "Thanh", "Thuận", "Thủy", "Tiến", "Trí", "Trọng", "Trung", "Tuệ"
    ];

    const tenNu = [
        "Hương", "Trang", "Linh", "Mai", "Hoa", "Anh", "Ngọc", "Lan", "Ly", "Thảo",
        "Phương", "Vy", "Nhi", "My", "Uyên", "Khuê", "Tú", "Quỳnh", "Hồng", "Bích",
        "Cúc", "Trúc", "Đan", "Mỹ", "Diệp", "Giáng", "Hạnh", "Hiếu", "Khánh", "Kim",
        "Lài", "Liên", "Loan", "Na", "Ngà", "Nhung", "Oanh", "Phụng", "Quyên", "Sa",
        "Sương", "Thắm", "Thoa", "Thủy", "Thư", "Tiên", "Tuyết", "Vân", "Xuân", "Yến",
        "Ái", "Băng", "Chi", "Dung", "Giang", "Hà", "Hân", "Hiền", "Huệ", "Hường",
        "Kha", "Kiều", "Lam", "Lê", "Lộc", "Mẫn", "Ngân", "Nghi", "Nguyệt", "Phượng",
        "Quân", "Sang", "Tâm", "Thanh", "Thùy", "Trâm", "Trinh", "Tuyền", "Vi", "Ý"
    ];

    const [users, setUsers] = useState([])
    const [keyword, setKeyword] = useState("")

    const userFilter = useMemo(() => {

        return users.filter((user) => user.toLowerCase().includes(keyword.toLowerCase()))

    }, [keyword, users])

    useEffect(() => {

        function generateNames(count) {
            const used = new Set();
            const users = [];

            while (users.length < count) {
                const laNam = Math.random() < 0.5;
                const hoPick = ho[Math.floor(Math.random() * ho.length)];
                const demPick = dem[Math.floor(Math.random() * dem.length)];
                const tenPick = laNam
                    ? tenNam[Math.floor(Math.random() * tenNam.length)]
                    : tenNu[Math.floor(Math.random() * tenNu.length)];

                const fullName = `${hoPick} ${demPick} ${tenPick}`;
                if (!used.has(fullName)) {
                    used.add(fullName);
                    users.push(fullName);
                }
            }

            return users;
        }

        setUsers(() => generateNames(10000))


    }, [])


    return (
        <div>
            <input type="text" placeholder='Enter name...' onChange={(e) => setKeyword(e.target.value)} />
            {userFilter.map((user, index) => {
                return (
                    <p key={index}>{user}</p>
                )
            })}
        </div>
    )
}

export default HeavyFiltering