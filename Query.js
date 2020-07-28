use class
//query document use OR condition
db.students.find()
db.students.find(
{"first_name" : "Yoga", "Age": "21"}
)
db.students.find(
{
    $or : [{"first_name" : "Yoga"},{"Age": "23"}]
}
)
db.students.find(
{
    "first_name" : "Yoga", $or : [{"Age": "23"}]
}
)
// update document
db.students.update(
{"_id" : ObjectId("5f1d98a2cb0e34cb9122271a")},{$set : {"last_name" : "Riawan" }}

)
db.students.find()
db.students.update(
{"Age" : "23"},
{$set : {"last_name" : "widodo" }},
{multi : true}
)
db.students.find()

//delete document
db.students.remove(
{"_id" : ObjectId("5f1d98a2cb0e34cb9122271a")
    
}
)
//projection
db.students.find({}, {"first_name" : 1, "_id" : 0})

//insert student again
db.students.insert(
[    
    {
      "first_name": "Putri",
      "last_name": "Maitano",
      "location": "solo",
      "StudentNo": "71190152",
      "Age": "18"
    },
    {
      "first_name": "Edis",
      "last_name": "Chan",
      "location": "Luwuk",
      "StudentNo": "71160185",
      "Age": "19"
    },
    {
      "first_name": "Try",
      "last_name": "Petonengan",
      "location": "Manado",
      "StudentNo": "71190134",
      "Age": "23"
    }
 ]
)
db.students.find()
//menggunakan Sort, Skip dan limit
db.students.find({} ,{"StudentNo" : 1, "first_name" : 1, "_id" : 0}).limit(4)
db.students.find({} ,{"StudentNo" : 1, "first_name" : 1, "_id" : 0}).skip(2)

db.students.find({} ,{"StudentNo" : 1, "first_name" : 1, "_id" : 0}).skip(2).limit(3
)

db.students.find({} ,{"StudentNo" : 1, "first_name" : 1, "_id" : 0}).sort({"first_name": -1})
