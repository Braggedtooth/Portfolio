interface IUser {
  name: string
  email: string
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}
type Author = Pick<IUser, 'name' | 'email'> & {
  username: string
}
type Pusher = Pick<IUser, 'name' | 'email'>
type Sender = Omit<IUser, 'name' | 'email'>

interface ICommit {
  id: string
  tree_id: string
  distinct: boolean
  message: string
  timestamp: Date
  url: string
  author: Author
  committer: Author
  added: string[]
  removed: string[]
  modified: string[]
}
interface IRepo {
  id: number
  name: string
  full_name: string
  owner: IUser
  private: boolean
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string
  size: number
  stargazers_count: number
  watchers_count: number
  language: string
  has_issues: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  forks_count: number
  mirror_url: string
  open_issues_count: number
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
  archived: boolean
  disabled: boolean
  license: string | null
  allow_forking: boolean
  is_template: boolean
  topics: string[]
  visibility: string
  stargazers: number
  master_branch: string
  deployments_url: string
}

interface IWebhook {
  ref: string
  before: string
  after: string
  repository: IRepo
  pusher: Pusher
  sender: Sender
  created: boolean
  deleted: boolean
  forced: boolean
  base_ref: string | null
  compare: string
  commits: ICommit[]
  head_commit: ICommit
}

export default IWebhook
