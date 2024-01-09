import fs from "fs";

function logging(req, res, next) {
  const logMessage = `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`;
  fs.writeFile("logging.txt", logMessage, (err) => {
    if (err) {
      console.error("Error appending to log file:", err);
    }
  });
  console.log(
    `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`
  );

  next();
}

export default logging;
