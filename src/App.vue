<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute(); 
const router = useRouter(); 
  
// import HelloWorld from './components/HelloWorld.vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const clickFn = (path) => {
  console.log('clickFn', path)
  router.push(path)
}
</script>

<template>
  <!-- <div id="app" > -->
  <el-container>
    <el-header class="header">
      <h4>vue-router</h4>
      <!-- 使用 router-link 组件进行导航 -->
      <router-link to="/A/P1">Go to /A/P1</router-link>
      <br />
      <router-link to="/A/M">Go to /A/M</router-link>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu :default-active="route.path" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="A">
            <template #title>
              A
            </template>
            <el-menu-item @click="clickFn('/A/P1')" v-if="route.path === '/A/M'" index="/A/M">P1</el-menu-item>
            <el-menu-item  @click="clickFn('/A/P1')" v-else index="/A/P1">P1</el-menu-item>
            <el-menu-item @click="clickFn('/A/P2')" index="/A/P2">P2</el-menu-item>
          </el-sub-menu>
          <el-menu-item  @click="clickFn('/B')" index="/B">
            B
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- </div> -->
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}

.header {
  height: 140px;
  background-color: #eee;
}

.aside .el-menu {
  /* --el-menu-bg-color: #ccc; */
}
</style>
