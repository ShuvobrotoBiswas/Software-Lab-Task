
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/loginPage.vue') },
      { path: '/signup', component: () => import('src/pages/signupPage.vue') },
      { path: '/index', component: () => import('pages/IndexPage.vue') },
      { path: '/forgotPassword', component: () => import('pages/forgotPassword.vue') },
      { path: '/otpVerify', component: () => import('pages/otpVerify.vue') },
      { path: '/resetPassword', component: () => import('pages/resetPassword.vue') },
      { path: '/signupPage1', component: () => import('pages/signupPage1.vue') },
      { path: '/signupPage2', component: () => import('pages/signupPage2.vue') },
      { path: '/signupPage3', component: () => import('pages/signupPage3.vue') },
      { path: '/signupPage4', component: () => import('pages/signupPage4.vue') },
      { path: '/signupPage5', component: () => import('pages/signupPage5.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
