import {reduxStore} from 'redux';
import reducer from './reducers';

const store = reduxStore(reducer)
;
export default store;