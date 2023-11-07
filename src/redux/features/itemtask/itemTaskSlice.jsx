import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task : [],
}

export const itemTaskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
     taskInsrted : (state, {payload}) => {
        state.task.push(payload);
     }
  },
})


export const {  } = itemTaskSlice.actions

export default itemTaskSlice.reducer