import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    {/* <h3>{post.data.title}</h3> */}
    {/* <p>{post.content}</p> */}
  </div>
))
