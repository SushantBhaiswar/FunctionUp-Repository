const express = require('express');

const router = express.Router();
const underscore = require('underscore')
const lodash = require('lodash')
router.get('/test-me', function (req, res) {
    
    
    res.send('My second ever api!')
    // First question =======
    const year =['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec']
    let result = lodash.chunk(year,3)
    console.log(result)
    // *****************************************
    // second que=====
    const arr =[1,3,5,7,9,11,13,15,17,19]
    let result2 =lodash.tail(arr)
    console.log(result2)
    // ********************************************
    // third que=====
    const a=[1,2,3,4]
    const b=[7,20,3,4]
    const c=[70,2,3,4]
    const d=[0,20,3,40]
    const e=[9,50,30,40]
    let result3 =lodash.union(a,b,c,d,e)
    console.log(result3)
    // ***********************************************
    // ques 4 =====
    let pairs =  [['horror','The Shining'],['drama','Titanic'],['thriller', 'Shutter Island'],['fantasy','Pans Labyrinth']]
    let newobj =lodash.fromPairs(pairs)
    console.log(newobj)
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason