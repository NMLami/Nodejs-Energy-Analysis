import logger from "pino";
import moment from "moment";

const log = logger({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    base: {
        pid: false
    },
    timestamp: () => `,"time":"${moment().format()}"`
});

export default log;