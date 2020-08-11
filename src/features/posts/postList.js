import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
  // React components can read data from the Redux store using
  //   the useSelector hook from the React-Redux library.
  // The "selector functions" that you write will be called with
  // the entire Redux state object as a parameter, and should return
  // the specific data that this component needs from the store.
  const posts = useSelector((state) => state.posts)
  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 40)}</p>
    </article>
  ))
  return (
    <div>
      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </div>
  )
}

export default PostList
