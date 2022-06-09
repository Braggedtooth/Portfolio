import { useRouter } from 'next/router'
import React from 'react'
import Button from '../components/atoms/button'
import WhoAmI, { calculateAge, User } from '../data/user'
import { REVALIDATE_SECONDS } from '../utils/constants'

type userProps = {
  user: User
}
const Index = ({ user }: userProps) => {
  const router = useRouter()
  return (
    <div>
      <h1>Hello, Welcome to my portfolio</h1>
      <h2>
        I am {user.name}. I live in {user.city} and i am{' '}
        {calculateAge(new Date(user.dob))} years old.
      </h2>
      <p> {user.about}</p>
      <Button
        color="#fff"
        size={{ w: 120, h: 40 }}
        p={0}
        bg="#333"
        onClick={() => console.log('hello')}
      >
        Hello
      </Button>
      <Button
        color="#efe"
        size={{ w: 100, h: 30 }}
        bg="#e59"
        label="Projects"
        ml={100}
        onClick={() => router.push('/projects')}
      />
    </div>
  )
}

export default Index
export const getStaticProps = async () => {
  const user = await WhoAmI
  return {
    props: {
      user
    },
    revalidate: REVALIDATE_SECONDS
  }
}
