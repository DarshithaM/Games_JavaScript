var express = require('express'); 

var router = express.Router();

router.use(express.static('Connect Four Game using JavaScript'))
router.use('/css',express.static(__dirname + 'Connect Four Game using JavaScript/css'))
router.use('/js',express.static(__dirname + 'Connect Four Game using JavaScript/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Connect Four Game using JavaScript/index.html')
})

router.use(express.static('Memory Game-2'))
router.use('/css',express.static(__dirname + 'Memory Game-2/css'))
router.use('/js',express.static(__dirname + 'Memory Game-2/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Memory Game-2/index.html')
})
module.exports = router;