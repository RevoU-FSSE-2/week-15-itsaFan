


const corsOption = (req, callback) => {
  const originUrl = ["http://localhost:5173", "http://localhost:5174"];
  let corsOptions;

  if (originUrl.includes(req.header("Origin"))) {
    if (req.header("Origin") === "http://localhost:5173") {
      corsOptions = { origin: true, methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"] };
    } else {
      corsOptions = { origin: true, methods: ["GET", "POST"] };
    }
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

module.exports = { corsOption };

