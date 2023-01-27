require('dotenv').config({
    path: './.env.local'
  });
  const cli = require('next/dist/cli/next-start');
  cli.nextStart(['-p', process.env.PORT || 3000]);