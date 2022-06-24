import axios from 'axios'
import IUser from '../types/user'

const getUserData = (): Promise<IUser> =>
  axios
    .get(
      'https://braggedtooth.github.io/portfolio-data/user.json'
      /*  'https://cdn.statically.io/gh/Braggedtooth/portfolio-data/main/user.json' */
    )
    .then((res) => res.data)

export default getUserData
