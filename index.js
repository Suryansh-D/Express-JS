const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {
   //using postman
   console.log(req.body);
   let singleCourse = {
       id: courses.length + 1,
       name: req.body.name
   };

    courses.push(singleCourse);
    res.send(singleCourse);
});

//put call - > update id1 to spring
app.put('/courses/:id', (req, res) => {
try {
   let singleCourse = course.find((course)=>{
    return course.id=== +req.params.id;
   })
   if(!singleCourse){
       return res.status(404).send('Course not found');
   }
    singleCourse.name = req.body.name;
    res.send(singleCourse);
} catch (error) {
    console.log(error);
}
});

//delete call - > delete id1
app.delete('/courses/:id', (req, res) => {
    let singleCourse = course.find((course)=>{
        return course.id=== +req.params.id;
       })
       if(!singleCourse){
           return res.status(404).send('Course not found');
       }
       let index = courses.indexOf(singleCourse);
       courses.splice(index, 1);
       res.send(singleCourse);
});
  
    app.listen(3000, () => console.log('Server is running on port 3000'));
