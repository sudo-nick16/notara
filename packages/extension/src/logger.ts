class Logger {
    constructor() {
        this.log('Logger initialized')
    }
    log(logStatement: string) {
        console.log(`[NOTARA] ${logStatement}`)
    }
}

export default Logger
