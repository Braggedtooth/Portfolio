import React, { useEffect } from 'react'
import UserData from '../data/user'
import Header from './Header'
import Sidebar from './Sidebar'

interface layoutProps {
  data: any
  children?: React.ReactNode
}

const Index = ({ data, children }: layoutProps) => {
  const [user, setUser] = React.useState(data.user)

  // Fetch  data on mount if not passed from data prop
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
          flexDirection: 'column',
          alignContent: 'center',
          width: '100%'
        }}
      >
        <Header />
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            padding: '10rem',
            justifyContent: 'space-between'
          }}
        >
          <Sidebar user={user} />
          {children}
        </div>
      </div>
    )
  )
}

export default Index
