import router from 'next/router'
import React from 'react'
import Button from '../components/atoms/Button'
import theme from '../config/theme'

const Header = () => {
  return (
    <div
      style={{
        background: theme.colors.grey,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Button
        onClick={() => router.push('/')}
        label="Home"
        style={{
          flex: '0 1'
        }}
      />
      <div>
        <Button onClick={() => router.push('/resume')} label="Resumé" />
        <Button onClick={() => router.push('/projects')} label="Projects" />
        <Button onClick={() => router.push('/contact')} label="Contact" />
      </div>
    </div>
  )
}

export default Header
