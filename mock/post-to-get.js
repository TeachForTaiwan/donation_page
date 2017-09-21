// 模擬 POST 回傳結果
module.exports = (req, res, next) => {
  req.method = 'GET';
  next();
};
