import React from 'react'
import { ProductCard } from './prop_state/ProductCard'
import Darkmode from './prop_state/Darkmode'
import UserBadge from './prop_state/UserBadge'
import TaskList from './prop_state/TaskList'
import FormInputEcho from './prop_state/FormInputEcho'
import MultipleInputForm from './hooks/MultipleInputForm'
import Stopwatch from './hooks/Stopwatch'
import WindowResize from './hooks/WindowResize'
import { AutoFocus } from './hooks/AutoFocus'
import VideoController from './hooks/VideoController'

const App = () => {
  const product = {
    name: "Tai nghe SONY",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    description: "Tai nghe chụp tai cao cấp với công nghệ chống ồn chủ động hàng đầu, âm thanh Hi-Res, kết nối Bluetooth 5.2, thời lượng pin lên đến 30 giờ và thiết kế siêu nhẹ thoải mái đeo cả ngày.",
    price: 6490000

  }

  const user = {
    name: 'Kim Ngan',
    state: 'offline'
  }

  const taskList = [
    {
      id: 'task-001',
      title: 'Thiet ke giao dien trang chu',
      description: 'Tao ban thiet ke UI/UX cho trang chu',
      status: 'in-progress',
      priority: 'high',
      dueDate: "2026-04-30T17:00:00Z",
      createAt: "2026-04-20T08:30:00Z"
    },
    {
      id: "task-002",
      title: "Viết API đăng nhập",
      description: "Xây dựng REST API cho chức năng đăng nhập bằng JWT, bao gồm xác thực và refresh token.",
      status: "todo",
      priority: "high",
      dueDate: "2026-05-02T09:00:00Z",
      createdAt: "2026-04-21T10:00:00Z"
    },
    {
      id: "task-003",
      title: "Kiểm thử chức năng thanh toán",
      description: "Thực hiện test case cho luồng thanh toán VNPay, kiểm tra phản hồi từ cổng thanh toán và xử lý lỗi.",
      status: "in-progress",
      priority: "medium",
      dueDate: "2026-04-28T12:00:00Z",
      createdAt: "2026-04-22T14:15:00Z"
    },
    {
      id: "task-004",
      title: "Tối ưu hiệu năng cơ sở dữ liệu",
      description: "Phân tích các truy vấn chậm, thêm index và tinh chỉnh cấu hình PostgreSQL.",
      status: "todo",
      priority: "medium",
      dueDate: "2026-05-05T18:00:00Z",
      createdAt: "2026-04-23T09:45:00Z"
    },
    {
      id: "task-005",
      title: "Viết tài liệu hướng dẫn sử dụng",
      description: "Soạn thảo tài liệu người dùng cho các tính năng mới của phiên bản 2.0, bao gồm ảnh chụp màn hình.",
      status: "done",
      priority: "low",
      dueDate: "2026-04-25T16:00:00Z",
      createdAt: "2026-04-18T11:00:00Z"
    }

  ]
  return (
    <div>
      {/* <ProductCard product={product}></ProductCard> */}
      {/* <Darkmode /> */}
      {/* <UserBadge user={user} /> */}
      {/* <TaskList taskList={taskList} /> */}
      {/* <FormInputEcho></FormInputEcho> */}
      {/* <MultipleInputForm /> */}
      {/* <Stopwatch /> */}
      {/* <WindowResize /> */}
      {/* <AutoFocus /> */}
      <VideoController />
    </div>
  )
}

export default App