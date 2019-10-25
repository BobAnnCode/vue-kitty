<template>
    <div class = "page">
        <h2>Home</h2>
      <el-button type="primary" @click="getUser()">用户</el-button>
      <el-button type="primary" @click="getMenu()">菜单</el-button>
      <el-button type="primary" @click="tologin">登陆</el-button>
      <router-link to="/login">login</router-link>
    </div>
</template>

<script>
  import axios from 'axios';
  import mock from '@/mock/mock.js';
  import router from '@/router'
    export default {
        name: 'Home',
        methods: {
            getUser() {
                axios.get('http://localhost:8080/user').then(function (res) {
                    alert(JSON.stringify(res.data));
                }).catch(function (res) {
                   alert(res);
                });
            },
            getMenu() {
                axios.get('http://localhost:8080/menu').then(function (res) {
                    alert(JSON.stringify(res.data));
                }).catch(function (res) {
                    alert(res);
                });
            },
            tologin() {
                router.push('/login')
            }
        }
    }
</script>
