const db = require('../models')
const { Product } = db  
const InsertProductRequest = require('../dtos/requests/InsertProductRequest')

exports.getProducts = async (req, res) => {
  res.status(200).json({
    message: 'Lấy danh sách sản phẩm thành công',
  })
}

exports.getProductById = async (req, res) => {
  res.status(200).json({
    message: 'Lấy thông tin sản phẩm thành công',
  })
}

exports.insertProducts = async (req, res) => {
  const { error } = InsertProductRequest.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: 'Lỗi khi thêm sản phẩm mới',
      error: error.details[0]?.message
    });
  }
  try {
    //console.log(JSON.stringify(req.body))
    const product = await db.Product.create(req.body)
    res.status(201).json({
      message: 'Thêm sản phẩm thành công',
      data: product
    })
  } catch (error) {
    res.status(500).json({ 
      message: "Thêm sản phẩm thất bại",
      error })
  }
}

exports.updateProducts = async (req, res) => {
  res.status(200).json({
    message: 'Cập nhật sản phẩm thành công',
  })
}

exports.deleteProducts = async (req, res) => {
  res.status(200).json({
    message: 'Xóa sản phẩm thành công',
  })
}