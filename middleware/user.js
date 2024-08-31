const midd1 = (req, res, next) => {
  console.log('midd1');
  next();
};
const midd2 = (req, res, next) => {
  console.log('midd2');
  next();
};

module.exports = { midd1, midd2 };
