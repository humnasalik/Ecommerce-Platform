import { createStore } from 'redux';
import rootReducers from './reducer/indx'; 

const store = createStore(rootReducers);

export default store;
