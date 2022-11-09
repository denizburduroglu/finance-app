import {
  createAction,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { RocketMoneyCSVModel } from '../models/rocket-money-csv.model';

// State
export interface AppState {
  transactions: RocketMoneyCSVModel[];
  watchlist: any[];
}

// Initial State
export const initialTransactionsState: RocketMoneyCSVModel[] = [];

// Action
export const addTransactionAction = createAction(
  '[Balance Page] addTransaction',
  props<{ transaction: RocketMoneyCSVModel }>()
);

// Reducer
export const transactionsReducer = createReducer(
  initialTransactionsState,
  on(addTransactionAction, (state, { transaction }) => {
    return [...state, transaction];
  })
);

// Selector
export const selectTransactions = (state: AppState) => state.transactions;
export const transactionsSelector = createSelector(
  selectTransactions,
  (transactions: RocketMoneyCSVModel[]) => transactions
);
