import { createStyles, ThemeIcon, ThemeIconProps } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface MainLinkProps {
  icon: ReactNode
  link: string
  label: string
  external?: boolean
  variant?: ThemeIconProps['variant']
  color?: ThemeIconProps['color']
  close?: () => void
}
const useStyles = createStyles((theme, _params, getref) => {
  const icon = getref('icon')
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      marginBottom: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.black

        /*   [`& .${icon}`]: {
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.black
        } */
      }
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[6],
      marginRight: theme.spacing.sm
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor
        }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor
          }).color
        }
      }
    }
  }
})

const MainLink = ({
  icon,
  label,
  link,
  close,
  external,
  variant,
  color = 'teal'
}: MainLinkProps) => {
  const { classes, cx } = useStyles()
  const router = useRouter()
  const active = router.pathname

  return (
    <Link passHref href={link}>
      <a
        className={cx(classes.link, { [classes.linkActive]: link === active })}
        href={link}
        key={label}
        target={external ? '_blank' : '_self'}
        onClick={close}
        rel="external noreferrer"
      >
        <ThemeIcon className={classes.linkIcon} variant={variant} color={color}>
          {icon}
        </ThemeIcon>
        <span>{label}</span>
      </a>
    </Link>
  )
}

export default MainLink
