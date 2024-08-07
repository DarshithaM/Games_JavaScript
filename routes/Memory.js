var express = require('express'); 

var router = express.Router();


router.use(express.static('Memory'))
router.use('/css',express.static(__dirname + 'Memory/css'))
router.use('/js',express.static(__dirname + 'Memory/js'))

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Memory/index.html')
})
module.exports = router;