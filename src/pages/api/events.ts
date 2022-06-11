import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import {
  GITHUB_HASH_ALG,
  GITHUB_HEADER_NAME,
  GITHUB_SECRET
} from '../../utils/constants'
import IWebhook from '../../types/webhook'

interface IEvent extends NextApiRequest {
  body: IWebhook
}
const eventsHandler = async (req: IEvent, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const sigTistring = JSON.stringify(req.headers[GITHUB_HEADER_NAME])
    const signature = Buffer.from(sigTistring || '', 'utf8')
    const hmac = crypto.createHmac(GITHUB_HASH_ALG, GITHUB_SECRET)
    const payload = JSON.stringify(req.body)
    const digest = Buffer.from(
      `"${GITHUB_HASH_ALG}=${hmac.update(payload).digest('hex')}"`,
      'utf8'
    )
    if (
      signature.length !== digest.length ||
      !crypto.timingSafeEqual(digest, signature)
    ) {
      return res.status(401).send('Unauthorised')
    }
    if (req.body.head_commit.modified.includes('project.json')) {
      console.log(req.body.head_commit)
      try {
        await res.unstable_revalidate('/projects')
        return res.status(200).send('OK!')
      } catch (error) {
        console.log(error)
      }
    }
    if (req.body.head_commit.modified.includes('user.json')) {
      console.log(req.body.head_commit)
      try {
        await res.unstable_revalidate('/')
        return res.status(200).send('OK!')
      } catch (error) {
        console.log(error)
      }
    }
    console.log('modified files', {
      modified: req.body.head_commit.modified
    })
  }
  return res.status(405).send('Not allowed')
}

export default eventsHandler
