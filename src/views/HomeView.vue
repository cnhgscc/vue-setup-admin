<template>
<main>
  <LayoutView>
    <template #menu>
      <el-menu-item index="/">
        <el-icon><Grid /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
    </template>

    <template #main>
      main
    </template>
  </LayoutView>
</main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import LayoutView from '@/components/layout/template.vue'
import { Grid } from '@element-plus/icons-vue'


const vm = reactive({
})

</script>
<style scoped lang="scss">

.el-tag{
  font-size: 1rem;
}

</style>
