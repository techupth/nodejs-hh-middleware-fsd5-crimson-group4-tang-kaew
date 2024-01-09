import fs from "fs";

function logging(req, res, next) {
  // Log the timestamp into Log file
  const timeStamp = new Date().toString();
  const logMessage = `${timeStamp} IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`;

  // Replace log to a file named "logging.txt"
  // Append for 'update', writeFile for 'replace'
  fs.writeFile("logging.txt", logMessage, (err) => {
    if (err) {
      console.error("Error appending to log file:", err);
    }
  });

  // Log to console
  // Can pass the logMessage variable to console as well (Opt)
  console.log(
    `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`
  );

  next();
}

export default logging;
