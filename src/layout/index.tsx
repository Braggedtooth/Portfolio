import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {
  MdEmail,
  MdPhone,
  MdLocationCity,
  MdCalendarToday
} from 'react-icons/md'
import Button from '../components/atoms/Button'
import ContactPill from '../components/atoms/ContactPill'
import ProfileImage from '../components/atoms/ProfileImage'
import TitleTag from '../components/atoms/TitleTag'
import theme from '../config/theme'
import UserData from '../data/user'

interface layoutProps {
  data: any
  children?: React.ReactNode
}

const Index = ({ data, children }: layoutProps) => {
  const router = useRouter()
  const [user, setUser] = React.useState(data.user)

  // Fetch user data on mount if not passed from data prop
  useEffect(() => {
    if (!data.user) {
      UserData.then((res) => setUser(res))
    }
  }, [data])

  return (
    user && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            width: '30%',
            backgroundColor: theme.colors.black,
            alignItems: 'center',
            height: '100%'
          }}
        >
          <ProfileImage src={user.imgUrl} />
          <TitleTag title={user.worktitle} />
          <ContactPill Icon={MdEmail} details={user.contact.email} as="email" />
          <ContactPill
            Icon={MdPhone}
            details={`+${user.contact.telephone}`}
            as="phone"
          />
          <ContactPill
            Icon={MdLocationCity}
            details={user.city}
            as="location"
          />
          <ContactPill
            Icon={MdCalendarToday}
            details={user.dob}
            as="birthday"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center'
          }}
        >
          <div
            style={{
              background: theme.colors.grey,
              borderRadius: '5px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Button
              onClick={() => router.push('/')}
              label="Home"
              style={{ flex: '0 1' }}
            />
            <div>
              <Button onClick={() => router.push('/')} label="Resumé" />
              <Button
                onClick={() => router.push('/projects')}
                label="Projects"
              />
              <Button onClick={() => router.push('/')} label="Contact" />
            </div>
          </div>
          <div
            style={{
              padding: '1rem'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  )
}

export default Index
