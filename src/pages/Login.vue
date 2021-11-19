<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 24px; margin-left: 1px">在线图书商城</span>
      </div>
      <el-tabs v-model="currentIndex" stretch @tab-click="handTabsClick">
        <el-tab-pane label="登陆" name="login">
          <el-form
            :model="loginForm"
            :rules="rules"
            status-icon
            ref="loginForm"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            :rules="rules"
            status-icon
            ref="registerForm"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.username" />
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="registerForm.password" />
            </el-form-item>
            <el-form-item
              label="确认密码"
              label-width="80px"
              prop="configurePassword"
            >
              <el-input
                type="password"
                v-model="registerForm.configurePassword"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4) {
        callback(new Error("长度不够"));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateConfigurePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword: "",
      },
      activeTab: "login",
      rules: {
        username: [
          {
            validator: validateUserName,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassWord,
            trigger: "blur",
          },
        ],
        configurePassword: [
          {
            validator: validateConfigurePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.activeTab === "login") {
            //  const obj = JSON.parse(localStorage.getItem("user"));
            const user = {
              username: this.loginForm.username,
              password: this.loginForm.password,
            };
            const b = JSON.stringify(user);
            /* if(a.username===user.username&&a.password===user.password){
             alert('成功');
           }else{
             alert('用户名或密码不正确，请重新输入');
           } */

            const a = localStorage.getItem("user"); //将json对象转换成字符串
            console.log(b.length, a.length);
            if (b.username === a.username && b.password === a.password) {
              alert("成功");
              this.$router.push({ name: "index" });
            } else {
              alert("用户名或密码不正确，请重新输入");
            }
          }
          if (this.activeTab === "register") {
            //注册
            const comment = {
              username: this.registerForm.username,
              password: this.registerForm.password,
            };
            const list = JSON.parse(localStorage.getItem("user") || "[]");
            list.unshift(comment);
            localStorage.setItem("user", JSON.stringify(list));
          }
        } else {
          return;
        }
      });
    },
    handTabsClick(tab) {
      this.activeTab = tab.name;
    },
  },
};
</script>

<style scoped>
.login {
  width: 1200px;
  margin: 0 auto;
}
.box-card {
  width: 600px;
  margin: 100px auto;
}
</style>
