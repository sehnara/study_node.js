const logger = require('./logger.js')
const emitter = new logger.Logger()

emitter.on('log', event => {
    console.log(event)
})

emitter.log(()=>{
    console.log('....doing Something!')
})

// eventEmitter는 포함된 한 객체에서만 event를 들을 수 있다.
// 다른 객체에서는 들을 수가 없다.