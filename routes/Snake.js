var express = require('express'); 

var router = express.Router();


router.use(express.static('Nokia3310-Snake-master'))
router.use('/css',express.static(__dirname + 'Nokia3310-Snake-master/css'))
router.use('/js',express.static(__dirname + 'Nokia3310-Snake-master/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Nokia3310-Snake-master/index.html')
})
module.exports = router;