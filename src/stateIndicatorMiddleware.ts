import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux';
import { renderStateIndicator } from './renderStateIndicator.js';

export const stateIndicatorMiddleware: Middleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    const result = next(action);
    const state = store.getState();

    const size = Number(
      (new Blob([JSON.stringify(state)]).size / 1024).toFixed(1),
    );
    console.log(size);

    renderStateIndicator(size);

    return result;
  };
