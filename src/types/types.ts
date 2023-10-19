export type Companies = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: null | string
}
export type CompanyDetail = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: string | null
  is_verified: boolean
  has_organization_projects: boolean
  has_repository_projects: boolean
  public_repos: number
  public_gists: number
  followers: number
  following: number
  html_url: string
  created_at: string
  updated_at: string
  archived_at: string | null
  type: string
}
export type CompanyInitialState = {
  companies: Companies[]
  isLoading: boolean
  error: null | string
  searchQuery: string
  filteredCompanies: Companies[]
}
export type InitialState = {
  company: CompanyDetail | null
  isLoading: boolean
  error: null | string
}
