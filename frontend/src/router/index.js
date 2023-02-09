import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookRental from '../views/BookRental.vue'
import BarcodeReader from '../views/BarcodeReader.vue'
import BookReturn from '../views/BookReturn.vue'
import UserLogin from '../views/UserLogin.vue'
import SignUp from '../views/SignUp.vue'
import ResetPassword from '../views/ResetPassword.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/rental',
    name: 'rental',
    component: BookRental,
  },
  {
    path: '/rental/BarcodeReader',
    name: 'BarcodeReader',
    component: BarcodeReader,
  },
  {
    path: '/return',
    name: 'return',
    component: BookReturn,
  },
  {
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
