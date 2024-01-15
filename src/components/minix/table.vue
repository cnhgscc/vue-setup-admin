<template>
  <el-card>
    
    <template #header>
      <div class="slogn">1</div>
      <div class="extend">2</div>
    </template>

    <el-table :data="vm.list">
      <el-table-column type="selection" width="55" v-if="vm.list.length > 0" />
      <el-table-column :label="fs" width="120" v-for="fs in fields">
        <template #default="scope">{{ scope.row?.[fs] }}</template>
      </el-table-column>
    </el-table>

    <template #footer>
      1
    </template>

  </el-card>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';

const vm = reactive({
  list: [{"ag": 0}]
})

onMounted(()=>{

})

const fields = computed(()=>{
  return Object.keys(vm.list?.[0] || {}) || []
})




</script>

<style scoped lang="scss">

</style>