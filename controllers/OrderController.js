const db = require('../models')
const { Product } = db

exports.getOrders = async (req, res) => {
  res.status(200).json({
    message: 'Lấy danh sách đơn hàng thành công',
  })
}

exports.getOrderById = async (req, res) => {
  res.status(200).json({
    message: 'Lấy thông tin đơn hàng thành công',
  })
}

exports.insertOrders = async (req, res) => {
  res.status(200).json({
    message: 'Thêm đơn hàng thành công',
  })
}

exports.updateOrders = async (req, res) => {
  res.status(200).json({
    message: 'Cập nhật đơn hàng thành công',
  })
}

exports.deleteOrders = async (req, res) => {
  res.status(200).json({
    message: 'Xóa đơn hàng thành công',
  })
}