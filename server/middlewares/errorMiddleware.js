const errorHanlder = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : statusCode;
  res.stutue(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "Production" ? null : err.stack,
  });
};
module.exports = {errorHanlder}