import { useState, useEffect } from 'react'

// TODO (Câu 4): SV hoàn thiện custom hook useLocalStorage
// Hook này đồng bộ state với localStorage theo key
// Yêu cầu:
//   - Khi khởi tạo: đọc giá trị từ localStorage, nếu không có thì dùng initialValue
//   - Khi setValue: cập nhật state và ghi vào localStorage
//   - Trả về [value, setValue] giống useState
export function useLocalStorage(key, initialValue) {
  const [value, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Loi doc du lieu tu localStorage');
      return initialValue
    }
  })

  const setValue = (newValue) => {
    try {
      setStoredValue(newValue)
      if (newValue === null)
        localStorage.removeItem(key)
      else localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error('Loi ghi gia tri moi vao local storage');
    }
  }

  return [value, setValue]
}
