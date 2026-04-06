export async function getOrders(req, res) {
  res.status(200).json({
    message: 'Lấy danh sách đơn hàng thành công',
  })
}
export async function getOrderById(req, res) {
  res.status(200).json({
    message: 'Lấy thông tin đơn hàng thành công',
  })
}
export async function insertOrders(req, res) {
  res.status(200).json({
    message: 'Thêm đơn hàng thành công',
  })
}
export async function updateOrders(req, res) {
  res.status(200).json({
    message: 'Cập nhật đơn hàng thành công',
  })
}
export async function deleteOrders(req, res) {
  res.status(200).json({
    message: 'Xóa đơn hàng thành công',
  })
}