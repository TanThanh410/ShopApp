export async function getBrands(req, res) {
  res.status(200).json({
    message: 'Lấy danh sách thương hiệu thành công',
  })
}
export async function getBrandById(req, res) {
  res.status(200).json({
    message: 'Lấy thông tin thương hiệu thành công',
  })
}
export async function insertBrands(req, res) {
  res.status(200).json({
    message: 'Thêm thương hiệu thành công',
  })
}
export async function updateBrands (req, res) {
  res.status(200).json({
    message: 'Cập nhật thương hiệu thành công',
  })
}
export async function deleteBrands(req, res) {
  res.status(200).json({
    message: 'Xóa thương hiệu thành công',
  })
}