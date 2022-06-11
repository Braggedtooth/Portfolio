interface Contact {
  telephone: number
  email: string
}
interface IUser {
  name: string
  dob: string
  city: string
  github: string
  linkedin: string
  school: string
  worktitle: string
  work: string
  about: string
  contact: Contact
  imgUrl: string
}

export default IUser
