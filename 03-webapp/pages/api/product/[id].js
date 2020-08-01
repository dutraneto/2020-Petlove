import { data } from '../../../data'

const dataHandler = ({ query: { id } }, res) => {
  const filtered = data.filter((d) => d.id === id)

  // Product with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Product with id: ${id} not found.` })
  }
}

export default dataHandler
