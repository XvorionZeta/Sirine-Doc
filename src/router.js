import { createRouter, createWebHistory } from 'vue-router'

// Path To View
import Home from '@/views/Home.vue'
import FormLayout from '@/views/components/FormLayout.vue'
import Input from '@/views/components/Input.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      name: 'Home',
      component: Home 
    },
    { 
      path: '/FormLayout',
      name: 'FormLayout',
      component: FormLayout 
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input 
    },
  ],
})
