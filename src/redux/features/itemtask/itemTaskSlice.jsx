import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task : [],
}

export const itemTaskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
     taskInsrted : (state, {payload}) => {
       return{
        ...state,
        task:[...state.task,{
          id:1,
          task:payload.task,
          status:payload.status,
          date:payload.date,
        }]
       }
     }
  },
})


export const { taskInsrted } = itemTaskSlice.actions

export default itemTaskSlice.reducer