const { Comic, Seller } = require('../models')

const createComic = async (req, res) => {
  console.log('create game', req.body)
  try {
    const comic = await new Comic(req.body)
    await comic.save()
    return res.status(201).json({
      comic
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createSeller = async (req, res) => {
  console.log('create seller', req.body)
  try {
    const seller = await new Seller(req.body)
    await seller.save()
    return res.status(201).json({
      seller
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findAllComicsBySeller = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ comics })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findSeller = async (req, res) => {
  try {
    const games = await Seller.find()
    return res.status(200).json({ seller })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComic = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Game.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comic deleted')
    }
    throw new Error('Comic not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createComic,
  createSeller,
  findAllComicsBySeller,
  findSeller,
  deleteComic
}
