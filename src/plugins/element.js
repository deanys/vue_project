import Vue from 'vue'
import { Button } from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message //需要用全局配置模式挂载