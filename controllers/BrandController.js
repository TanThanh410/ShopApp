const db = require('../models')
const { Product } = db

exports.getBrands = async (req, res) => {
  res.status(200).json({
    message: 'Lấy danh sách thương hiệu thành công',
  })
}

exports.getBrandById = async (req, res) => {
  res.status(200).json({
    message: 'Lấy thông tin thương hiệu thành công',
  })
}

exports.insertBrands = async (req, res) => {
  try {
    const brand = await db.Brand.create(req.body)

    res.status(201).json({
      message: 'Thêm thương hiệu thành công',
      data: brand
    })

  } catch (error) {
    res.status(500).json({
      message: 'Thêm thương hiệu thất bại',
      error: error.message
    })
  }
}

exports.updateBrands = async (req, res) => {
  res.status(200).json({
    message: 'Cập nhật thương hiệu thành công',
  })
}

exports.deleteBrands = async (req, res) => {
  res.status(200).json({
    message: 'Xóa thương hiệu thành công',
  })
}