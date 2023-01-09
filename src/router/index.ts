import { createRouter, createWebHashHistory, Router } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import SettingsComponent from '../components/SettingsComponent.vue'

export default (): Router => {
  return createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeComponent
      },
      {
        path: '/settings',
        name: 'Settings',
        component: SettingsComponent
      }
    ]
  })
}
