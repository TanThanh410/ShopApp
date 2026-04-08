const db = require('../models')
const { Product } = db

exports.getCategory = async (req, res) => {
  res.status(200).json({
    message: 'Lấy danh sách danh mục thành công',
  })
}

exports.getCategoryById = async (req, res) => {
  res.status(200).json({
    message: 'Lấy thông tin danh mục thành công',
  })
}

exports.insertCategory = async (req, res) => {
  try {
    const category = await db.Category.create(req.body)

    res.status(201).json({
      message: 'Thêm danh mục thành công',
      data: category
    })

  } catch (error) {
    res.status(500).json({
      message: 'Thêm danh mục thất bại',
      error: error.message
    })
  }
}

exports.updateCategory = async (req, res) => {
  res.status(200).json({
    message: 'Cập nhật danh mục thành công',
  })
}

exports.deleteCategory = async (req, res) => {
  res.status(200).json({
    message: 'Xóa danh mục thành công',
  })
}