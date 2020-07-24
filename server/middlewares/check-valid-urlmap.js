exports.validateUrlMap = async (req, res, next) => {
  try {
    let errorList = [];
    const long_url = req.body.longUrl;
    const alias = req.body.alias;
    if (!long_url) errorList.push("You must enter a URL");
    if (!alias) errorList.push("You must enter an alias");
    if (errorList.length)
      return res
        .status(400)
        .json({ status: "Validation Error", errors: errorList });
    else return next();
  } catch (ex) {
    return res.status(500).json({ status: "Error" });
  }
};
