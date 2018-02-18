import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment';
//

export default withRouteData(({ post }) => {
  // var image = require(`${post.data.thumbnail}`)
  // ../images/uploads/image.jpg
  return (
    <div>
      {console.log(`${post.data.thumbnail}`)}
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.data.title}</h3>
      <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
      <img src={require(`${post.data.thumbnail}`)} alt="" />
      <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
    </div>
  )
})