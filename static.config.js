import axios from 'axios'
const fs = require('fs');
const klaw = require('klaw')
const marked = require('marked');
const path = require('path')

// Filter function to retrieve .md files //

let filterFn = function(item) {
  return path.extname(item) === ".md";
}

// Walk (klaw) through posts directory and push file paths into items array //
const items = []
klaw('./src/posts')
  .on('readable', function () {
    let item
    while ((item = this.read())) {
      if (filterFn(item.path)) {
        items.push(item.path)        
      }
    }
  })
  .on('error', (err, item) => {
    console.log(err.message)
    console.log(item.path) // the file the error occurred on
  })
  .on('end', () => {
    // Loop through items array and read each post //
    for (let post of items ) {
      try {  
        var data = fs.readFileSync(post, 'utf8');
        console.log(data);    
      } catch(e) {
        console.log('Error:', e.stack);
      }
    }
  }) 



export default {
  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
