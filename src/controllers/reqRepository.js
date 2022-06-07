const { getRepository } = require('../service/repository')

const responseRepository = async (req, res) => {
  const { owner, repo } = req.body
  try {
    if (!req.body || !req.body.owner || !req.body.repo) {
      return res.status(400).json({ message: 'Por favor insira as informações solicitadas' })
    }

    const response = await getRepository(owner, repo)
    const data = response.data
    return res.status(200).json({ data })
  } catch (error) {
    return res.status(400).json({ error, message: error.message })
  }

}


module.exports = {
  responseRepository
}