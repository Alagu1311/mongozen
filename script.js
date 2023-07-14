db.product.insertMany([
    {
        "Prodname": "Iphone",
        "Prodpric": "1000",
        "Producrat": "5",
        "Productrem":"2",

    },
    {
         "Prodname": "Samsung",
        "Prodpric": "800",
        "Producrat": "4.5",
        "Productrem":"3",

         

    },
    {
           "Prodname": "Realme",
        "Prodpric": "600",
        "Producrat": "4.3",
        "Productrem":"4",


    },
    {
            "Prodname": "Vivo",
        "Prodpric": "500",
        "Producrat": "4.2",
        "Productrem":"4",


    },
    {
          "Prodname": "Oppo",
        "Prodpric": "400",
        "Producrat": "4.3",
        "Productrem":"3",


    },
    {
        "prodname": "Icecream",
        "prodpric": "70",
        "producrat": "4.1",
        "productrem":"10",
    },
    {
        "prodname": "Milkshake",
        "prodpric": "60",
        "producrat": "4.2",
        "productrem":"8",

    },
    {
        "prodname": "Chocolate",
        "prodpric": "50",
        "producrat": "4.1",
        "productrem":"12",
    },
     {
        "prodname": "Chocolate",
        "prodpric": "50",
        "producrat": "4.1",
        "productrem":"12",
    }
])
db.product.find()
db.product.find({ prodpric: { $Lte400, $gt800 } })
db.product.find({ prodpric: { $not: { $lt400, $gt800 } } })
db.product.find({prodpric:{$gt500}})
db.product.find(prodname, propric)
db.product.findOne({ _id: ObjectId("64854c2e34d8ded8befd5f0e") })
db.product.deleteMany({prodpric:"50"})