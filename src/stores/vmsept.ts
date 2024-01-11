import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVmseptStore = defineStore('vmsept', () => {
  const slogn = ref("vue-setup-admin")

  return { slogn }
})
