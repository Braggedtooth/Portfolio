import React, { ReactElement } from 'react'
import theme from '../config/theme'
import Layout from '../layout'
import IUser from '../types/user'

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '0.5rem',
        margin: '0 0.5rem',
        width: '100%',
        backgroundColor: theme.colors.grey,
        alignItems: 'flex-start'
      }}
    >
      contact
    </div>
  )
}

export default Contact
Contact.getLayout = (page: ReactElement, user: IUser) => (
  <Layout data={user}>{page}</Layout>
)
