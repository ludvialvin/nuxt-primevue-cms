import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cc354d98 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _49f6c01e = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _b95d9436 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _68a86c86 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _4cacda64 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8f6e3c04 = () => interopDefault(import('~/pages/404.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _cc354d98,
    name: "404"
  }, {
    path: "/articles",
    component: _49f6c01e,
    name: "articles"
  }, {
    path: "/login",
    component: _b95d9436,
    name: "login"
  }, {
    path: "/profile",
    component: _68a86c86,
    name: "profile"
  }, {
    path: "/",
    component: _4cacda64,
    name: "index"
  }, {
    path: "*",
    component: _8f6e3c04,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
