<template>
  <el-scrollbar  :class="{ 'is-collapse': collapse }">
    <!-- <logo /> -->
    <el-menu
      :background-color="variables['menu-background']"
      :text-color="variables['menu-color']"
      :active-text-color="variables['menu-color-active']"
      :default-active="activeMenu"
      :collapse="collapse"
      :collapse-transition="false"
      :default-openeds="defaultOpens"
      :unique-opened="uniqueOpened"
      mode="vertical"
    >
      <template v-for="route in routes">
        <side-bar-item :key="route.path" :base-path="route.path" :item="route"></side-bar-item>
      </template>
    </el-menu>
  </el-scrollbar>
  </template>

<script></script>
