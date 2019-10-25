<template>
    <div class = "page">
        <h2>Login</h2>
      <el-button type="primary" @click="login()">登陆</el-button>
    </div>
</template>

<script>
  import mock from '@/mock/mock.js';
  import Cookies from "js-cookie";
  import router from '@/router'

    export default {
        name: 'Login',
        methods: {
            login() {
                this.$api.login().then(function (res) {
                    alert(res.data.token)
                    Cookies.set('token',res.data.token())
                    router.push('/')
                }).catch(function (res) {
                    alert(res);
                });
            }
        }
    }
</script>
