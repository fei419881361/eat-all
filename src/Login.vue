<template>
    <div id="login">
            <div id="login-box">
                <el-form ref="form" :model="form" id="form"
                v-loading="loading"
                >
                    <el-form-item label="邮箱">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                     <el-form-item label="密码">
                        <el-input placeholder="请输入密码" v-model="form.pwd" show-password></el-input>
                    </el-form-item>
                    
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          pwd: ''
        },
        loading : false
      }
    },
    methods: {
      onSubmit() {
        if(this.form.email === null || this.form.pwd === null 
        ||this.form.email === '' || this.form.pwd === ''
        ){
          this.open('请输入用户名或密码');
          return;
        }
        let loginRequest = {
          email:this.form.email,
          password:this.form.pwd
          
        }
        this.loading = true;
        this.$http.post(this.$store.state.baseUrl+'/login/passwordLogin',loginRequest)
        .then((response)=>{
          this.loading = false;
          this.open(response.body.msg);
          this.$store.state.token = response.data
          console.log(response.body.msg);
          if('登录成功' === response.body.msg){
            this.$router.push({name:'home', params:{email:this.form.email}})
            this.$store.state.token = response.data
          }
        },error=>{
          this.loading = false;
          this.open(error)
        })
      },
       open(msg) {
        this.$message(msg);
      },
    }
  }
</script>

<style>

#login{
    overflow: hidden;
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
    position: absolute;
    background-image: url(./assets/login.png);

    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-box{
    height:600px;
    line-height: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 350px;
    height: 500px;
    background-color: azure;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    top:50%;
    transform:translateY(-50%);
}
#form{

}
</style>