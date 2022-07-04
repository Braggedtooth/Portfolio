import { NextApiRequest, NextApiResponse } from 'next'
import { DISCORD_WEBHOOK_URL } from '../../utils/constants'

const eventsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = req.body
    fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: 'New Message From Contact Form',
            description: data.message,
            color: 26343,
            url: 'https://bayo.se/',
            fields: [
              {
                name: 'Sender Email:',
                value: data.email
              },
              {
                name: 'Sender Name:',
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

export default eventsHandler
