module.exports = function doIf(predicate, func) {
  return (req, res, next) => {
    if(predicate(req))
      func(req, res, next);
    else
      next();
  };
};
