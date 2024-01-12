<template>
  <div class="description" v-if="display">
    <div class="left">
        <div class="loginuser">{{ vmsept.loginuser }}</div>
        <div class="timezone">{{ vmsept.timezone }}</div>
    </div>
    <div class="right"><el-icon><User /></el-icon></div>
  </div>
</template>

<script setup lang="ts">
import {useVmseptStore} from '../../stores/vmsept'
import {  User } from '@element-plus/icons-vue'


const vmprops = defineProps<{
    display: boolean
}>()

const vmsept = useVmseptStore()
</script>

<style scoped lang="scss">

.description{
  display: flex;
  justify-items: center;
  padding: 0.6rem 1rem;
  border-top: 1px solid var(--gb-border-primary);
  border-bottom: 1px solid var(--gb-border-primary);

  .loginuser{
    font-size: 0.9rem;
    text-align: left;
  }
  .timezone{
    font-size: 0.5rem;
    text-align: left;
  }

  .right{
    padding-top: 0.3rem;
    margin-left: auto;
    line-height: 1.4rem;
    justify-items: center;
  }
}
</style>