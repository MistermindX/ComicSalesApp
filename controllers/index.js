const { Comic, Seller } = require('../models')

const createSeller = async (req, res) => {
  try {
    const seller = await new Seller(req.body)
    await seller.save()
    return res.status(201).json(seller)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findSellerById = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.findById(id)
    return res.status(200).json(seller)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findSellerByName = async (req, res) => {
  try {
    const sellerName = req.params.name
    const seller = await Seller.find({ name: sellerName })
    return res.status(200).json(seller)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find()
    return res.status(200).json(sellers)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteSeller = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.findByIdAndDelete(id)
    return res.status(200).json(seller)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComic = async (req, res) => {
  try {
    const comic = await new Comic(req.body)
    await comic.save()
    return res.status(200).json(comic)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findAllComics = async (req, res) => {
  try {
    const comics = await Comic.find()
    return res.status(200).json(comics)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findAllComicsBySeller = async (req, res) => {
  try {
    const sellerId = req.params.id
    const comics = await Comic.find({ seller_id: sellerId })
    return res.status(200).json(comics)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findComicById = async (req, res) => {
  try {
    const { id } = req.params
    const comic = await Comic.findById(id)
    return res.status(200).json(comic)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComic = async (req, res) => {
  try {
    const { id } = req.params
    const comic = await Comic.findByIdAndDelete(id)
    if (comic) {
      return res.status(200).send(comic)
    }
    throw new Error('Comic not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createSeller,
  findSellerById,
  findSellerByName,
  findAllSellers,
  deleteSeller,
  createComic,
  findAllComics,
  findAllComicsBySeller,
  findComicById,
  deleteComic
}
