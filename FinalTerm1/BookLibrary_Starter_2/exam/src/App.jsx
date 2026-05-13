import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import BookListPage from './pages/BookListPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import AddBookPage from './pages/AddBookPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState } from './store/atoms.js'
import { useEffect } from 'react'
import ProtectedRouter from './pages/ProtectedRouter.jsx'

function App() {
  // TODO (Câu 9): Lấy thông tin user từ Recoil để hiển thị tên + nút Logout
  const [user, setUser] = useRecoilState(userState)
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [setUser])
  // TODO (Câu 10): Làm ProtectedRoute cho các trang cần đăng nhập

  const handleLogout = () => {
    const confirm = window.confirm('Ban co chac chan muon dang xuat?')
    if (confirm) {
      setUser(null)
      localStorage.removeItem('user')
    }
  }

  return (
    <>
      <nav className="navbar">
        <h1>📚 My Book Library</h1>
        <div>
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/books">Danh sách sách</NavLink>
          <NavLink to="/add">Thêm sách</NavLink>
          <NavLink to="/login">Đăng nhập</NavLink>
          {/* TODO: Hiển thị "Xin chào, {username}" và nút Logout khi đã login */}
          {user && (
            <div>Xin chao, {user.username}
              <button onClick={handleLogout}>Dang xuat</button>
            </div>
          )}

        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<ProtectedRouter><BookDetailPage /></ProtectedRouter>} />
          <Route path="/add" element={<ProtectedRouter><AddBookPage /></ProtectedRouter>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
