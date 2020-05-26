import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { recruitingTeamsReducer, progressTeamsReducer, finishTeamsReducer } from './reducers/teamReducer'

const initialState = {};
const reducer = combineReducers({
    recruitingTeams: recruitingTeamsReducer,
    progressTeams: progressTeamsReducer,
    finishTeams: finishTeamsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;