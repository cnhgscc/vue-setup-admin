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
          :default-active="vm.pathname"
        >
          <!-- slogn -->
          <el-menu-item class="slogn">
            <el-icon><ChatRound /></el-icon>
            <template #title>{{ vmsept.slogn }}</template>
          </el-menu-item>
          <slot name="menu"></slot>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="footer">

      <div class="description" v-if="!vm.collapse">
        <div class="left">
          <div class="loginuser">{{ vmsept.loginuser }}</div>
          <div class="timezone">{{ vmsept.timezone }}</div>
        </div>
        <div class="right"><el-icon><User /></el-icon></div>
      </div>

      <div class="collapse">
        <el-icon @click="vm.collapse=false" v-if="vm.collapse"><Expand /></el-icon>
        <el-icon @click="vm.collapse=true" v-else><Fold /></el-icon>
      </div>
    </div>
  </component>
  <el-main>
    <slot name="main"></slot>
  </el-main>
</el-container>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, reactive } from 'vue';
import { Fold, Expand, ChatRound, Setting, User } from '@element-plus/icons-vue'
import {useVmseptStore} from '@/stores/vmsept'

const vmsept = useVmseptStore()


const vm = reactive({
  width: 0,
  navbar: 'el-aside',
  collapse: false,
  pathname: window.location.pathname
})

onBeforeMount(()=>{
  vm.width = window.innerWidth
  vm.navbar =  vm.width <= 768 ? 'el-header': 'el-aside'
})

onMounted(()=>{
  vm.pathname = window.location.pathname
})

</script>

<style scoped lang="scss">
.el-container{
  height: 100vh;
  width: 100vw;

  .navbar{ // el-aside || el-header
    .el-menu{
      border-right: none;
      .slogn{
        font-size: 1.2rem;
        color: var(--el-color-primary);
        font-weight: 600;
        font-style:italic;
      }
    }


    .footer{
      width: 100%;
      text-align: center;
      
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

      .collapse{
        height: 3rem;
        line-height: 3rem;
        color: var(--el-color-primary);
      }
    }
  }
  
  .el-main{
    padding: 0;
    margin: 0;
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
    border-right: 1px solid var(--gb-border-primary);

    .header{
      margin-right: autos;
    }
    
  }
}

</style>
