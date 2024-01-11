<template>
<el-container>
  <component :is="vm.navbar" class="navbar">
    <div class="header">
      <div class="slogn">vue-setup-admin</div>
      <el-scrollbar>
        <el-menu
          :mode="vm.width <= 768 ? 'horizontal':'vertical'"
        >
          <el-menu-item index="1">Processing Center</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="footer">
      <el-icon><Fold /></el-icon>
    </div>
  </component>
  <el-main>
    13123
  </el-main>
</el-container>
</template>
<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { Fold } from '@element-plus/icons-vue'

const vm = reactive({
  width: 0,
  navbar: 'el-aside',
})


onBeforeMount(()=>{
  vm.width = window.innerWidth
  vm.navbar =  vm.width <= 768 ? 'el-header': 'el-aside'
})


</script>

<style scoped lang="scss">
.el-container{
  height: 100vh;
  width: 100vw;

  .navbar{
    .slogn{
      padding: 0.5rem 0.3rem;
      font-size: 1.2rem;
      width: 11rem;
      color: var(--el-color-primary);
      font-weight: 700;
      font-style:italic;
    }
  }
}

.el-menu{
  border-right: none;
}


@media (max-width: 768px) {
  .navbar {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;

    .header{
      display: flex;

      .slogn{
        line-height: 4rem;
      }

      .el-scrollbar{
        padding: 0.5rem 0.3rem;
        width: auto;
        height: auto;
      }
      
    }

    .footer{
      display: none;
    }

  }
  el-main{
    height: 3rem;
  }
}
@media (min-width: 769px) {
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    width: auto;

    .header{
      margin-right: autos;
    }
    .footer{
      width: 100%;
      text-align: center;
    }
    
  }
}

</style>
