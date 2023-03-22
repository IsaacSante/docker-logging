const logger = require("./utils/logger");
const HEALTH_CHECK_INTERVAL = 1000 * 10; // 60 seconds
let healthIntervalId;

async function main() {
  startHealthCheck();
}

async function startHealthCheck() {
  const performHealthCheck = async () => {
    logger.info("performing health check...app is running");
  };

  performHealthCheck();
  healthIntervalId = setInterval(performHealthCheck, HEALTH_CHECK_INTERVAL);
  logger.info("health check scheduled");
}

main();
