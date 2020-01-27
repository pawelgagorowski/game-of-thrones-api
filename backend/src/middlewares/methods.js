
const titleCaseMethod = (data) => {
  return data.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



const capitalizeMethod = (req, res, next) => {
  for (const el in req.body) {
      const upper = titleCaseMethod(req.body[el])
      req.body[el] = upper;
  }
  for (const el in req.params) {
    const upper = titleCaseMethod(req.params[el])
      req.params[el] = upper;
  }
  next()
};

module.exports = capitalizeMethod
