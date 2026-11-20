import { createRouter } from '@nanostores/router'
import { useStore } from '@nanostores/react'
export const $router = createRouter({
  home: '/',
  dashboard: '/dashboard',
    experimentList: '/dashboard/experiments',
    experiment: '/dashboard/experiments/:id',
    messages: '/dashboard/messages/:id?',
    outcomes:"/dashboard/outcomes"

})

export let useRouter = ()=>useStore($router)