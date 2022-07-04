const REVALIDATE_SECONDS = parseInt(process.env.NEXT_PUBLIC_REVALIDATE, 10)
const GITHUB_SECRET = process.env.NEXT_PUBLIC_GITHUB_SECRET
const GITHUB_HEADER_NAME = 'x-hub-signature-256'
const GITHUB_HASH_ALG = 'sha256'
const EMIAL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL

export {
  REVALIDATE_SECONDS,
  GITHUB_SECRET,
  GITHUB_HEADER_NAME,
  GITHUB_HASH_ALG,
  EMIAL_REGEX,
  DISCORD_WEBHOOK_URL
}
