// Custom middleware to check authorization on a user login
module.exports = () => {
  const checkAuth = (req, res, next) => {
    console.log("Checking authencation");
    if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
      req.user = null
    } else {
      const token = req.cookies.nToken
      const decodedToken = jwt.decode(token, { complete: true}) || {};
      req.user = decodedToken.payload;
    }
    next();
  }
}
