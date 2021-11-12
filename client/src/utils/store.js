import {reduxStore} from 'redux';
import {DevTools} from 'redux-devtools-extension';
import reducer from './reducers';

const store = reduxStore(reducer, DevTools)
;
export default store;