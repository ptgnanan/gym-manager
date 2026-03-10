const TOKEN_KEY = 'gym_token'
const USER_KEY = 'gym_user'

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY)
}

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY)
}

export const getUser = (): Record<string, unknown> | null => {
  const userStr = localStorage.getItem(USER_KEY)
  return userStr ? JSON.parse(userStr) : null
}

export const setUser = (user: Record<string, unknown>): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const removeUser = (): void => {
  localStorage.removeItem(USER_KEY)
}

export const clearAuth = (): void => {
  removeToken()
  removeUser()
}
