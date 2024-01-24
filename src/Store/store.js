import {configureStore} from '@reduxjs/toolkit'

import itemslice from './itemslice';


const store=configureStore({
    reducer:{
        itemSlice:itemslice
    }
})

export default store;