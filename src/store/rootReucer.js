import { combineReducers } from 'redux'
import { products } from '@/store/reducers/products'

const reducers = combineReducers({
  products,
})
export default reducers
