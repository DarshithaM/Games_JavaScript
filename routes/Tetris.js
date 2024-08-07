var express = require('express'); 

var router = express.Router();


router.use(express.static('tetris'))
router.use('/css',express.static(__dirname + 'tetris/css'))
router.use('/js',express.static(__dirname + 'tetris/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/tetris/index.html')
})
module.exports = router;