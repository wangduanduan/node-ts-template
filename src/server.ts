import app from './app'

const server = app.listen(3000, (err, address) => {
  if (err) throw err

  console.log('app running on port 3000')
})

export default server
