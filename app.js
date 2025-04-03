const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://user1:Atc4o28PEGyVAsWG@learnnode.qgzgr27.mongodb.net/LearnNode?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
// app.listen(3000);

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// })

//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));

// //mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more abouut my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req,res) => {
//     Blog.findById('67ee6a0b781f397a5e6a138c')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

//routes
app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname });
//     const blogs = [
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//     res.render('index', { title: 'Home', blogs});
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', {root: __dirname });
    res.render('about', { title: 'About'});
});

//blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
})

// //redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
})

//404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname });
    res.status(404).render('404', { title: '404'});
})