import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// Similar to uuid
import { nanoid } from '@reduxjs/toolkit'
import { postsAdded } from './postsSlice'
const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  //   In order to dispatch actions from a component,
  // we need access to the store's dispatch function.
  const dispatch = useDispatch()
  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postsAdded({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle('')
      setContent('')
    }
  }
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
