import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})
const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware([...middleware])) // using thunk we can just use the Redux Dev Tools extension
)

export default store
