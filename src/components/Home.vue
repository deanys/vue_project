<template>
  <div>
    这是home 界面，也是主要界面
    <p>{{msg}}</p>
    <el-button @click="getWeather" type="info">跨域实验</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){return {
      msg:"你好"
  }},
  methods: {
    getWeather: function () {
      // https://way.jd.com/he/freeweather?city=beijing&appkey=b6b6aecaf4fec068207033491c4f1ea1
      // this.$http.get()
      // this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      const baseurl =
        "http://10.36.147.48:3000/sign/show_book/";
      this.$http.get(baseurl).then(function (res) {
        // res.setHeader("Access-Control-Allow-Origin", "*"); //允许访问的来源地址
        // res.setHeader(
        //   "Access-Control-Allow-Headers",
        //   "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        // ); //有些会把token放到header里,加在这里
        // res.setHeader(
        //   "Access-Control-Allow-Methods",
        //   "PUT,POST,GET,DELETE,OPTIONS"
        // ); //这个一看就懂,
        console.log(res);
      });
    },
  },
};
</script>
<style lang="less" scoped>
div {
  color: #fff;
}
</style>