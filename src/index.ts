import { Logger } from '~/services/Logger'

export { Logger }

const t = new Logger()
t.logSuperSecret()

console.log('Making the world a better place!')
