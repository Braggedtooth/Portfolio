import axios from 'axios'

export const calculateAge = (birthday: Date) => {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
export interface User {
  name: string
  dob: string
  city: string
  github: string
  linkedin: string
  school: string
  worktitle: string
  work: string
  about: string
  contact: {
    telephone: number
    email: string
  }
  imgUrl: string
}
const WhoAmI: Promise<User> = axios
  .get('https://braggedtooth.github.io/portfolio-data/user.json')
  .then((res) => res.data)

export default WhoAmI
