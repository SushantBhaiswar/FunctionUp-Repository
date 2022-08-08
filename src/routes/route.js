const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
// Question 1 =====
router.get('/movies', function (req, res) {
    let students = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(students)
})
// ****************************************************


// / Question 2 =====
router.get('/movies/:indexNumber', function (req, res) {
    let students = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let requestParams = req.params.indexNumber
    let a = students[requestParams]
    // res.send(a)
    // / Question 3 =====
    if (requestParams < 0 || requestParams > students.length) {
        res.send("Enter valid input")
    }
    else {
        res.send(a)
    }
})
// ************************************************************

// Question 4 =====
router.get('/films', function (req, res) {
    let array = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]

    res.send(array)
})

// *********************************************
// Question 5 ===
router.get('/films/:filmid', function (req, res) {
    let array = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]
    let findfilm
    let obj = {}
    let c = req.params.filmid
    for (let i = 0; i <= array.length; i++) {
        if (c == array[i].id) {
            obj.name = array[i].name
            return res.send(obj)
        }
    }
    res.send("No movie exists with this id")

})
module.exports = router;