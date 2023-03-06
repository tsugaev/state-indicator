import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import { setAppState } from './stateSlice';


const stateIndicatorMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    const result = next(action);
    const state = store.getState();
   
    store.dispatch(setAppState(state));
  
    return result;
};

export default stateIndicatorMiddleware;
