'use strict';

const {HttpCode} = require(`../../constants`);

module.exports = (req, res, next) => {
  const offerKeys = [`category`, `description`, `picture`, `title`, `type`, `sum`];
  const newOffer = req.body;
  const keys = Object.keys(newOffer);
  const keysExists = offerKeys.every((key) => keys.includes(key));

  if (!keysExists) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request`);
  }

  return next();
};