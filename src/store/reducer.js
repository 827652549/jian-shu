import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import homeReducer from '../pages/home/store';
import loginReducer from '../pages/login/store';


export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    login:loginReducer
});