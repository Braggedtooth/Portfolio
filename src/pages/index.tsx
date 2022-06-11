import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import CalculateAge from '../utils/calculateAge'
import { REVALIDATE_SECONDS } from '../utils/constants'
import UserData from '../data/user'
import IUser from '../types/user'
import Button from '../components/atoms/button'

type userProps = {
  user: IUser
}

const Index = ({ user }: userProps) => {
  const router = useRouter()
  return (
    <div>
      <h1>Hello, Welcome to my portfolio</h1>
      <h2>
        I am {user.name}. I live in {user.city} and i am{' '}
        {CalculateAge(new Date(user.dob))} years old.
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
export const getStaticProps: GetStaticProps = async () => {
  const user = await UserData
  return {
    props: {
      user
    },
    revalidate: REVALIDATE_SECONDS
  }
}
