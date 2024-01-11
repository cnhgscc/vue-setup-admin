import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVmseptStore = defineStore('vmsept', () => {
  const slogn = ref("vue-setup-admin")
  const loginuser = ref("vue admin")
  const timezone = ref("Asia/Manila")

  return { slogn, loginuser,  timezone }
})
