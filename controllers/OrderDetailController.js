export async function getOrderDetails(req, res) {
  res.status(200).json({
    message: 'Lấy danh sách chi tiết đơn hàng thành công',
  })
}
export async function getOrderDetailById(req, res) {
  res.status(200).json({
    message: 'Lấy thông tin chi tiết đơn hàng thành công',
  })
}
export async function insertOrderDetails(req, res) {
  res.status(200).json({
    message: 'Thêm chi tiết đơn hàng thành công',
  })
}
export async function updateOrderDetails(req, res) {
  res.status(200).json({
    message: 'Cập nhật chi tiết đơn hàng thành công',
  })
}
export async function deleteOrderDetails(req, res) {
  res.status(200).json({
    message: 'Xóa chi tiết đơn hàng thành công',
  })
}