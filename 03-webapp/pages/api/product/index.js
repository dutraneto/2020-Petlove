import { data } from '../../../data'

const handler = (req, res) => {
    res.status(200).json(data)
}

export default handler
