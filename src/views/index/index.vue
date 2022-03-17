<template>index page</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useUserStore from '@/store/user'
const userStore = useUserStore()
userStore.setToken('1688')
userStore.setUserInfo({name:'JyLie',nickname:'stephen',id:1,avatar:'',isAuth:false})
const {userInfo} = storeToRefs(userStore)
const token = userStore.token
console.log(`token: ${token} \n\t userInfo: ${JSON.stringify(userInfo)} `,userInfo.id)

</script>
