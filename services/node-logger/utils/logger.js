const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, colorize } = format;
const fs = require("fs");

let configData;

try {
  const data = fs.readFileSync("/app/config.json", "utf8");
  configData = JSON.parse(data);
} catch (err) {
  console.error(err);
}

const logger = createLogger({
  format: format.json(),
  defaultMeta: {
    roomName: configData.name,
    roomID: configData.roomId,
  },
  transports: [new transports.Console()],
});

module.exports = logger;
