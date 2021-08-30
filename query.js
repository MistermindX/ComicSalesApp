const db = require('./db')
const { Comic, Seller } = require('./models')

async function main() {
  try {
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
