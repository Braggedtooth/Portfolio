import axios from 'axios'
import IUser from '../types/user'

const UserData: Promise<IUser> = axios
  .get('https://braggedtooth.github.io/portfolio-data/user.json')
  .then((res) => res.data)

export default UserData
