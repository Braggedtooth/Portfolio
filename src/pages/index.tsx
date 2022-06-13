import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  MdCalendarToday,
  MdEmail,
  MdLocationCity,
  MdPhone
} from 'react-icons/md'
import CalculateAge from '../utils/calculateAge'
import { REVALIDATE_SECONDS } from '../utils/constants'
import UserData from '../data/user'
import IUser from '../types/user'
import ProfileImage from '../components/atoms/ProfileImage'
import TitleTag from '../components/atoms/TitleTag'
import ContactPill from '../components/atoms/ContactPill'
import Button from '../components/atoms/Button'

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
      <Button onClick={() => router.push('/projects')} label="View Projects" />
      <Button label="H" size="small" />

      <ProfileImage src={user.imgUrl} />
      <TitleTag title={user.worktitle} />
      <ContactPill Icon={MdEmail} details={user.contact.email} />
      <ContactPill Icon={MdPhone} details={`+${user.contact.telephone}`} />
      <ContactPill Icon={MdLocationCity} details={user.city} />
      <ContactPill Icon={MdCalendarToday} details={user.dob} />
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
