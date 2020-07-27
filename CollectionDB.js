//create database
use class

//create collections
db.createCollection("students")
show collections

//insert document
db.students.insert(
[    
    {
      "first_name": "Anggie",
      "last_name": "irent",
      "location": "jogja",
      "StudentNo": "71170152",
      "Age": "21"
    },
    {
      "first_name": "Yoga",
      "last_name": "Erwin",
      "location": "jogja",
      "StudentNo": "71170165",
      "Age": "21"
    },
    {
      "first_name": "Aldi",
      "last_name": "riawan",
      "location": "jogja",
      "StudentNo": "71170162",
      "Age": "23"
    }
 ]
)
use class
db.Teacher.insert(
[  
 {
        "firstname" : "Bambang",
        "lastname" : "Bimantoro",
        "position" : "dosen tetap",
        "age" : "51"
    },
        {
        "firstname" : "widodo",
        "lastname" : "joko",
        "position" : "dosen kontrak",
        "age" : "28"
    },
        {
        "firstname" : "widianti",
        "lastname" : "domi",
        "position" : "dosen tetap",
        "age" : "32"
    },
        {
        "firstname" : "Bianca",
        "lastname" : "Shella",
        "position" : "dosen magang",
        "age" : "25"
    }
   ]
)
//Query Document/ find document yang diinginkan
db.students.find().pretty()
db.students.findOne()
db.students.find(
{
    "StudentNo" : "71170165"
}
)
db.students.find(
{
    "Age" : {$gte : "21"}
}
)
