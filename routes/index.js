const router = require('koa-router')()
const store = require('../store')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
router.get('/', async (ctx, next) => {
  tasks = await store.listTasks()
  await ctx.render('index', { tasks })
})

module.exports = router
