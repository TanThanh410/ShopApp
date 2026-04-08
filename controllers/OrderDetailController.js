const db = require('../models')
const { Product } = db

exports.getOrderDetails = async (req, res) => {
  res.status(200).json({
    message: 'Lấy danh sách chi tiết đơn hàng thành công',
  })
}

exports.getOrderDetailById = async (req, res) => {
  res.status(200).json({
    message: 'Lấy thông tin chi tiết đơn hàng thành công',
  })
}

exports.insertOrderDetails = async (req, res) => {
  res.status(200).json({
    message: 'Thêm chi tiết đơn hàng thành công',
  })
}

exports.updateOrderDetails = async (req, res) => {
  res.status(200).json({
    message: 'Cập nhật chi tiết đơn hàng thành công',
  })
}

exports.deleteOrderDetails = async (req, res) => {
  res.status(200).json({
    message: 'Xóa chi tiết đơn hàng thành công',
  })
}