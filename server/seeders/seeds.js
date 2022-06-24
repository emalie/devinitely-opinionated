// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const opinionSeeds = require('./opinionSeed.json');
const db = require('../config/connection');
const { Opinion, User } = require('../models');

db.once('open', async () => {
  try {
    await Opinion.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < opinionSeeds.length; i++) {
      const { _id, opinionAuthor } = await Opinion.create(opinionSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: opinionAuthor },
        {
          $addToSet: {
            opinions: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});