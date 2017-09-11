const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
  console.log('** Hit API /tictactoe');
  return res.status(200).json({ result: 'none' });
});

module.exports = router;
