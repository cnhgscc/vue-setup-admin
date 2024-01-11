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
            <el-icon><ElementPlus /></el-icon>
            <template #title>{{ vmsept.slogn }}</template>
          </el-menu-item>
          <slot name="menu"></slot>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="footer">
      <DescriptionView :display="!vm.collapse"></DescriptionView>
      <div class="collapse">
        <el-icon @click="vm.collapse=false" v-if="vm.collapse"><Expand /></el-icon>
        <el-icon @click="vm.collapse=true" v-else><Fold /></el-icon>

        <template v-if="!vm.collapse">
          <el-icon v-if="isDark" @click="toggleDark()"><Sunny /></el-icon>
          <el-icon v-else @click="toggleDark()"><MoonNight /></el-icon>
        </template>

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
import { useDark, useToggle } from '@vueuse/core'
import { Fold, Expand, ChatRound, Setting, User, ElementPlus, MoonNight, Sunny } from '@element-plus/icons-vue'
import {useVmseptStore} from '@/stores/vmsept'

import DescriptionView from "../minix/description.vue"


const vmsept = useVmseptStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)


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
      

      .collapse{
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 3rem;
        color: var(--el-color-primary);
      }
    }
  }
  
  .el-main{
    padding: 0;
    margin: 0;
  }
}

.slogn{
  background-color: var(--el-color-primary);
  color:  var(--el-color-primary-light-9) !important;
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
