<template>
  <el-scrollbar  :class="{ 'is-collapse': collapse }">
    <el-menu
      @select="selectRouter"
      mode="vertical"
    >
      <template v-for="route in asyncRouter" :key="`${route.name}-${route.path}`">
        <template v-if="route.children">
          <el-sub-menu :index="route.name" >
              <template v-if="route.meta.title" #title>
                {{route.meta.title}}
              </template>
              <template v-for="routeChild in route.children" :key="routeChild.path">
                <el-menu-item :index="routeChild.name" >{{routeChild.meta.title}}</el-menu-item>
              </template>
          </el-sub-menu>
        </template>
        <template v-else>
        <el-menu-item :index="route.name" >{{route.meta.title}}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>

</template>

<script setup lang="ts" >
import {useRouter} from 'vue-router'
import {asyncRouter} from '@/router/routes'
const collapse = ref(true)

const router = useRouter();
function selectRouter(name:string){
  router.push({name})
}
</script>
