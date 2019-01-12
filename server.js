var exp = require('express');
var app = exp();
var mongo = require('mongodb').MongoClient;
var path = require('path');
var bodyparser = require('body-parser');
var mongoose=require('mongoose');
app.use(bodyparser.json());

var dbo;
mongo.connect('mongodb://venkatesh:9553479259v@ds031627.mlab.com:31627/adminlog', (err, db) => {

    app.use(exp.static(path.join(__dirname, 'dist/First')));
    if (err) throw err;
    dbo = db.db('adminlog');
    console.log('data base connected');

});
app.post('/login/admin', (req, res) => {
    console.log(req.body);
    dbo.collection('login').find({ $and: [{ username: req.body.username, password: req.body.password }] }).toArray((err, data) => {

        if (err) throw err;
        if (data[0] != null)
            res.send(data);
    })
})
app.post('/home1/addstudent', (req, res) => {
    console.log(req.body);
    console.log('post is responding');
    dbo.collection('addstudent').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
app.post('/home1/addemployee', (req, res) => {
    console.log(req.body);
    console.log('post is responding');
    dbo.collection('addemployee').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
app.post('/home1/addcourses', (req, res) => {
    console.log(req.body);
    console.log('post is responding');
    dbo.collection('addcourses').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send({ "data": "saved successfully" })
    })
})

app.post('/home1/addadmin', (req, res) => {
    console.log(req.body);
    console.log('post is responding');
    dbo.collection('login').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send({ "data": "saved successfully" })
    })
})


app.get('/home1/studentdetails', (req, res) => {

    dbo.collection('addstudent').find().toArray((err, data) => {
        console.log('get is ready');
        if (err) throw err;
        console.log(data);
        res.send(data);

        console.log('get is responsding')
    })

})
app.get('/home1/employeedetails', (req, res) => {

    dbo.collection('addemployee').find().toArray((err, data) => {
        console.log('get is ready');
        if (err) throw err;
        res.send(data);
    })

})
app.get('/home1/coursedetails', (req, res) => {

    dbo.collection('addcourses').find().toArray((err, data) => {
        console.log('get is ready');
        if (err) throw err;
        res.send(data);
    })

})
app.put('/home1/coursedetails', (req, res) => {
   // console.log(req.body.id);
    var objid = mongoose.Types.ObjectId(req.body._id);
    dbo.collection('addcourses').update({ _id: objid },
         {course:req.body.course,branch:req.body.branch,affiliatedto:req.body.affiliatedto,
            feedetails:req.body.feedetails},(err,result)=> {
        if (err) throw err;
        dbo.collection('addcourses').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})
app.delete('/home1/coursedetails/:id', (req, res) => {
    console.log(req.params.id);
    var objid = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('addcourses').remove({ _id: objid },
         (err,result)=> {
        if (err) throw err;
        dbo.collection('addcourses').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})
app.put('/home1/studentdetails', (req, res) => {
    // console.log(req.body.id);
     var objid = mongoose.Types.ObjectId(req.body._id);
     dbo.collection('addstudent').update({ _id: objid },
          {course:req.body.course,branch:req.body.branch,affiliatedto:req.body.affiliatedto,
             feedetails:req.body.feedetails},(err,result)=> {
         if (err) throw err;
         dbo.collection('addstudent').find().toArray((err, data) => {
             if (err) throw err;
             res.send(data);
         })
     })
 })
 app.delete('/home1/studentdetails/:id', (req, res) => {
    console.log(req.params.id);
    var objid = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('addstudent').remove({ _id: objid },
         (err,result)=> {
        if (err) throw err;
        dbo.collection('addstudent').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})
app.put('/home1/employeedetails', (req, res) => {
    // console.log(req.body.id);
     var objid = mongoose.Types.ObjectId(req.body._id);
     dbo.collection('addemployee').update({ _id: objid },
          {course:req.body.course,branch:req.body.branch,affiliatedto:req.body.affiliatedto,
             feedetails:req.body.feedetails},(err,result)=> {
         if (err) throw err;
         dbo.collection('addemployee').find().toArray((err, data) => {
             if (err) throw err;
             res.send(data);
         })
     })
 })
 app.delete('/home1/employeedetails/:id', (req, res) => {
    console.log(req.params.id);
    var objid = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('addemployee').remove({ _id: objid },
         (err,result)=> {
        if (err) throw err;
        dbo.collection('addemployee').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})


app.listen(1357);

// app.listen(process.env.PORT || 8080 ,()=>{ 
//     console.log("server started");
//     })