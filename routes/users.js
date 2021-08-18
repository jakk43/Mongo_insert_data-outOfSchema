var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Addr = require('../models/Address');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
    const {
        name,
        email,
        password,
        street,
        postalCode
    } = req.body;

    const newUser = new User({
        name,
        email,
        password,
        // address: {
        //     street ,
        //     postalCode
        // }

    });

    NewAddr.save();

    newUser.save();
    console.log(newUser);


});


router.post('/update/:id', async (req, res) => {
    const id = req.params.id;
    console.log("this is id --------------" + id)

    const newAddr = new Addr({
        street: "hiAddress1",
        postalCode: "hiAddress2",
        city: "hiAddress3",
        countryCode: "hiAddress4",
        country: "hiAddress5",
        text: "hiAddress6"
    })

    const oldUser = await User.findById({ _id: "61152fc5bd41a93cd4a1e74c" })

    const { name,
        email,
        password, } = req.body;
    try {
        await User.findOneAndUpdate({ _id: id }, {
            $set: {
                name,
                email,
                password,
                "address": {
                    "street": "street123",
                    "postalCode": "postalCode123",
                    "haha": [{
                        "az": "4sdfg1",
                        "axz": "32sdfg4345",
                        "aez": "4sdfg54",
                        "aez": "5sdfg",
                        "arz": "14sdfgsdf5",
                    }, {
                        "bb": "1sfdgsdf",
                        "beb": "sdfgsdf4",
                        "b4b": "5",
                        "3bb": "6",
                        "b3b": "17",
                        "b4b": "18",
                    }
                    ]
                },
                "ADDRESS2": newAddr,
                oldUser

            }
        }, { strict: false })
            .then((err, result) => {
                res.send("this is result " + result)
            })
    } catch (error) {
    }

})





router.get('/testShow', async function (req, res, next) {

    async function getData() {
        const getData = await User.find()

        res.send(getData[0]);
        // res.send(getData[1].email);
    }

    getData()
});



module.exports = router;