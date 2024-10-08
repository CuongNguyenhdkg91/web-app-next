import {createSlice, configureStore} from '@reduxjs/toolkit'

const SlicePrimary = createSlice({
    name: 'menuShow',
    initialState: false,
    reducers: {
        ShowHide: state => {state = !state},
        onShow: state => {state = true},
        onClose: state => {state = false}
    }
})

const store = configureStore({
    reducer: SlicePrimary.reducer
})

export {store, SlicePrimary}

