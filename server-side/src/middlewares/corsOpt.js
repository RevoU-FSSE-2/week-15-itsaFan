const mainUrl = "http://localhost:5173";
const altUrl = "http://localhost:5174";

const corsOption = (req, callback) => {

  const originUrl = [mainUrl, altUrl];
  let corsOptions;

  if (originUrl.includes(req.header("Origin"))) {
    if (req.header("Origin") === mainUrl) {
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
