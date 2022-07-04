import { NextApiRequest, NextApiResponse } from 'next'

const eventsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(req.body)
    return res.status(200).send('Form Submitted')
  }
  return res.status(400).send('Form Not Submitted')
}

export default eventsHandler
