import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({ user: null as any }),
  actions: {
    login(user: any) {
      this.user = user
    },
    logout() {
      this.user = null
    }
  }
})
