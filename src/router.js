
import Login from './Login.vue'
import Home from './Home.vue'

const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },  
  {
    path: '/login',
    component: Login
  },
]

export default routers