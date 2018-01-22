const Router = require('express').Router;

const router = Router();

// GET /tictactoe?board=x,o,,x,x,o,,,o?turn=x
router.get('/', (req, res) => {
  console.log('** Hit API /tictactoe');
  const board = req.query.board.split(',');
  const turn = req.query.turn;

  const selectedTile = board.lastIndexOf('');

  return res.status(200).json( {
    tile: selectedTile
  } );
});

module.exports = router;
