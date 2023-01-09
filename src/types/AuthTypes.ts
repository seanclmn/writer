export interface User {
  email: string 
  id: string
  username: string
  blogs: string[]
}

export interface Credentials {
  email: string
  password: string
  username?: string
}
