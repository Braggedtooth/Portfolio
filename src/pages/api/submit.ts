import { NextApiRequest, NextApiResponse } from 'next'
import { DISCORD_WEBHOOK_URL } from '../../utils/constants'

const eventsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data = req.body
      fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: null,
          embeds: [
            {
              title: 'New submission from porfolio',
              description: data.message,
              color: 26343,
              url: 'https://bayo.se/',
              fields: [
                {
                  name: 'Nmail:',
                  value: data.email
                },
                {
                  name: 'Name:',
                  value: data.name
                }
              ],
              timestamp: new Date().toISOString()
            }
          ]
        })
      })
      return res.status(200).send('Success')
    } catch (error) {
      return res.status(400).send('Form Not Submitted')
    }
  }
  return res.status(405).send('Not allowed')
}

export default eventsHandler
