import axios from 'axios'

// Sử dụng mockapi.io hoặc json-server cho trước:
// URL mẫu: https://67xxxxx.mockapi.io/books
export const API_URL = 'https://69f9e1b2c509a40d3aa37925.mockapi.io/books'

// TODO (Câu 2): SV viết hàm fetch danh sách sách bằng axios
export async function getBooks() {
  const data = await axios.get(API_URL)
  return data.data
}

// TODO (Câu 7): SV viết hàm POST thêm sách mới
export async function addBook(book) {
  const response = await axios.post(API_URL, book)
  return response.data
}

// TODO (Câu 8): SV viết hàm DELETE sách theo id
export async function deleteBook(id) {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data

}

// TODO (Câu 5): SV viết hàm GET chi tiết 1 cuốn sách theo id
export async function getBookById(id) {
  const data = await axios.get(`${API_URL}/${id}`)
  return data.data
}
