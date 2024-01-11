<template>
<el-container>
  <component :is="vm.navbar" class="navbar">
    <div class="header">
      <el-scrollbar>
        <el-menu
          :mode="vm.width <= 768 ? 'horizontal':'vertical'"
          :collapse="vm.collapse"
          collapse-transition
          router
        >
          <!-- slogn -->
          <el-menu-item index="/" class="slogn">
            <el-icon><ChatRound /></el-icon>
            <template #title>vue-setup-admin</template>
          </el-menu-item>
          
          <el-menu-item index="1">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="footer">
      <div class="collapse">
        <el-icon @click="vm.collapse=false" v-if="vm.collapse"><Expand /></el-icon>
        <el-icon @click="vm.collapse=true" v-else><Fold /></el-icon>
      </div>
    </div>
  </component>
  <el-main>
    13123
  </el-main>
</el-container>
</template>
<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { Fold, Expand, ChatRound, Setting } from '@element-plus/icons-vue'

const vm = reactive({
  width: 0,
  navbar: 'el-aside',
  collapse: false,
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
      font-size: 1.2rem;
      // width: 11rem;
      color: var(--el-color-primary);
      font-weight: 600;
      font-style:italic;
    }
  }
}

.el-menu{
  border-right: none;
}

.footer{
  .collapse{
    color: var(--el-color-primary);
  }
}


@media (max-width: 768px) {
  .navbar {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;

    .header{
      display: flex;


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
    border-right: 1px solid #ddd;

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
