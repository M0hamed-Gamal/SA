require('dotenv').config();

module.exports = {
  'aws': {
      'key': `${process.env.AWS_ACCESS_KEY}`,
      'secret': `${process.env.AWS_ACCESS_SECRET}`,
      'ses': {
          'from': {
              'default': '"SpaceAnchor.com" <m0e.mohamed1000@gmail.com>', 
          },
          'region': `${process.env.AWS_ACCESS_REGION}` 
      }
  }
};