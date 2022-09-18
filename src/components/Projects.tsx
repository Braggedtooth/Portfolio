import {
  ActionIcon,
  Anchor,
  Badge,
  Card,
  createStyles,
  Group,
  Image,
  Text
} from '@mantine/core'
import { IconType } from 'react-icons'
import { AiFillGithub } from 'react-icons/ai'
import { FaGlobe } from 'react-icons/fa'
import Technologies from '../types/technologies'

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md
  },

  like: {
    color: theme.white
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700
  }
}))

interface BadgeCardProps {
  image: string
  title: string
  country: string
  description: string
  github: string
  website: string
  badges: {
    emoji: IconType
    label: Technologies
  }[]
}

export default function BadgeCard({
  image,
  title,
  description,
  country,
  github,
  website,
  badges
}: BadgeCardProps) {
  const { classes, theme } = useStyles()

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={<badge.emoji />}
    >
      {badge.label}
    </Badge>
  ))

  return (
    <Card withBorder radius="md" p="md" className={classes.card} shadow="lg">
      {image && (
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>
      )}

      <Card.Section className={classes.section} mt="md" sx={{ flexGrow: 1 }}>
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Tech Stack
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs" position="center">
        {website && (
          <Anchor href={website} target="_blank">
            <ActionIcon variant="default" radius="md" size={36}>
              <FaGlobe size={18} className={classes.like} />
            </ActionIcon>
          </Anchor>
        )}

        {github && (
          <Anchor href={github} target="_blank">
            <ActionIcon variant="default" radius="md" size={36}>
              <AiFillGithub size={18} className={classes.like} />
            </ActionIcon>
          </Anchor>
        )}
      </Group>
    </Card>
  )
}
