const Router = require('express').Router;
const tictactoe = require('./tictactoe');

const router = Router();

router.use('/tictactoe', tictactoe);

module.exports = router;
