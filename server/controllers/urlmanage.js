const Urlmap = require("../models").Urlmap;

module.exports = {
  create: async (req, res) => {
    const { longUrl, alias } = req.body;
    const errorList = [];

    const existingUrlForLong = await Urlmap.findOne({
      where: { long_url: longUrl },
    });

    const existingUrlForAlias = await Urlmap.findOne({
      where: { alias: alias },
    });

    if (existingUrlForLong) {
      errorList.push(`Your URL is already exist in the database`);
    }

    if (existingUrlForAlias) {
      errorList.push(`Your Alias is already exist in the database`);
    }

    if (errorList.length)
      return res.status(400).json({
        status: "Duplication Error",
        errors: errorList,
      });

    return Urlmap.create({
      long_url: req.body.longUrl,
      alias: req.body.alias,
    })
      .then((urlMap) => res.status(200).send(urlMap))
      .catch((error) => res.status(400).send(error));
  },
};
