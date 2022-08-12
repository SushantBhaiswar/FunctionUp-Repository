
const express = require('express');
const router = express.Router()



// *******************************************************************
router.post("/Players", function (req, res) {
    let players =
        [
            {
                "name": "manish",
                "dob": "1/1/1995",
                "gender": "male",
                "city": "jalandhar",
                "sports": ["swimming"]
            },
            {
                "name": "gopal",
                "dob": "1/09/1995",
                "gender": "male",
                "city": "delhi",
                "sports": ["soccer"]
            },
            {
                "name": "lokesh",
                "dob": "1/1/1990",
                "gender": "male",
                "city": "mumbai",
                "sports": ["soccer"]
            },
        ]
    let ele = req.body
    for (let i = 0; i < players.length; i++) {
        if (ele.name == players[i].name) {
            return res.send("Player already exist")
        }
    }
    players.push(ele)
    res.send({ status: true, data: players })
})
// *******************************************************************



router.post("/name-query-1", function (req, res) {
    let arr = [23, 45, 67, 58458, 22145, 11544]
    let inp = req.query.input;
    let f = []
    for (let i = 0; i < arr.length; i++) {
        if (inp < arr[i]) {
            f.push(arr[i])
        }
    } res.send({ data: f, status: true })
})
// *******************************************************************

let person = [
    {
        name: "pk",
        age: 10,
        votingStartus: false
    },
    {
        name: "sk",
        age: 20,
        votingStartus: false
    },
    {
        name: "AA",
        age: 70,
        votingStartus: false
    },
    {
        name: "SC",
        age: 5,
        votingStartus: false
    },
    {
        name: "HO",
        age: 40,
        votingStartus: false
    },
]

router.post("/getvotingstatus", function (req, res) {
    let VotingAge = req.query.age
    let ElegiblePerson = []
    for (let i = 0; i < person.length; i++) {
        if (person[i].age > VotingAge) {
            person[i].votingStartus = true;
            ElegiblePerson.push(person[i])
        }
    }

    res.send({ Persons: ElegiblePerson, status: true })
})


module.exports = router;
