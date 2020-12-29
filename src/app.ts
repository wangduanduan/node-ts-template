import fastify from 'fastify'

const app = fastify({
  logger: true
})

app.get('/', (req, res) => {
  res.send({ hello: 'world' })
})

export default app
