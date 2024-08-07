var express = require('express'); 

var router = express.Router();


router.use(express.static('whac-a-mole-master'))
router.use('/css',express.static(__dirname + 'whac-a-mole-master/css'))
router.use('/js',express.static(__dirname + 'whac-a-mole-master/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/whac-a-mole-master/index.html')
})
module.exports = router;