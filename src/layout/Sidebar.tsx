import React from 'react'
import {
  MdEmail,
  MdPhone,
  MdLocationCity,
  MdCalendarToday
} from 'react-icons/md'
import ContactPill from '../components/molecules/ContactPill'
import ProfileImage from '../components/atoms/ProfileImage'
import TitleTag from '../components/atoms/TitleTag'
import theme from '../config/theme'

const Sidebar = ({ user }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '20%',

        backgroundColor: theme.colors.grey,
        padding: '0rem 1rem 2rem 1rem',
        alignItems: 'center'
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
      <ContactPill Icon={MdLocationCity} details={user.city} as="location" />
      <ContactPill Icon={MdCalendarToday} details={user.dob} as="birthday" />
    </div>
  )
}

export default Sidebar
