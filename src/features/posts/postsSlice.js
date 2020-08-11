import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post', content: 'Hello' },
  { id: '2', title: 'Second Post', content: 'More Text' },
  { id: '3', title: 'Third Post', content: 'Redux is challenging.' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postsAdded(state, action){
          state.push(action.payload)
      }
  },
})

export const {postsAdded} = postsSlice.actions;
export default postsSlice.reducer
