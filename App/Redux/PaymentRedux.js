import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPaymentRequest: ['data'],
  getPaymentSuccess: ['data'],
  getPaymentFailure: ['error'],

  addPaymentRequest: ['data'],
  addPaymentSuccess: ['data'],
  addPaymentFailure: ['error'],

  getPaymentIdRequest: ['data'],
  getPaymentIdSuccess: ['data'],
  getPaymentIdFailure: ['error'],

  updatePaymentIdRequest: ['data'],
  updatePaymentIdSuccess: ['data'],
  updatePaymentIdFailure: ['error'],

  deletePaymentIdRequest: ['data'],
  deletePaymentIdSuccess: ['data'],
  deletePaymentIdFailure: ['error'],

  statusPaymentIdRequest: ['data'],
  statusPaymentIdSuccess: ['data'],
  statusPaymentIdFailure: ['error'],
})

export const PaymentTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  list: { data: null, fetching: false, error: null },
  detail: { data: null, fetching: false, error: null },
})

export const getPaymentRequest = (state) =>
  state.merge({ ...state, list: { ...state.list, fetching: true, error: null } })
export const getPaymentSuccess = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, data, fetching: false, error: null } })
export const getPaymentFailure = (state, { error }) =>
  state.merge({ ...state, list: { ...state.list, fetching: false, error } })

export const addPaymentRequest = (state) =>
  state.merge({ ...state, list: { ...state.list, fetching: true, error: null } })
export const addPaymentSuccess = (state, { data }) =>
  state.merge({
    ...state,
    list: {
      ...state.list,
      data: [
        ...state.list.data,
        ...data
      ],
      fetching: false,
      error: null
    }
  })
export const addPaymentFailure = (state, { error }) =>
  state.merge({ ...state, list: { ...state.list, fetching: false, error } })

export const getPaymentIdRequest = (state) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: true, error: null } })
export const getPaymentIdSuccess = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, data, fetching: false, error: null } })
export const getPaymentIdFailure = (state, { error }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: false, error } })

export const updatePaymentIdRequest = (state) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: true, error: null } })
export const updatePaymentIdSuccess = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, data, fetching: false, error: null } })
export const updatePaymentIdFailure = (state, { error }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: false, error } })

export const deletePaymentIdRequest = (state) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: true, error: null } })
export const deletePaymentIdSuccess = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, data: null, fetching: false, error: null } })
export const deletePaymentIdFailure = (state, { error }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: false, error } })

export const statusPaymentIdRequest = (state) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: true, error: null } })
export const statusPaymentIdSuccess = (state, { data }) =>
  state.merge({ ...state, detail: { ...state.detail, data: null, fetching: false, error: null } })
export const statusPaymentIdFailure = (state, { error }) =>
  state.merge({ ...state, detail: { ...state.detail, fetching: false, error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PAYMENT_REQUEST]: getPaymentRequest,
  [Types.GET_PAYMENT_SUCCESS]: getPaymentSuccess,
  [Types.GET_PAYMENT_FAILURE]: getPaymentFailure,

  [Types.ADD_PAYMENT_REQUEST]: addPaymentRequest,
  [Types.ADD_PAYMENT_SUCCESS]: addPaymentSuccess,
  [Types.ADD_PAYMENT_FAILURE]: addPaymentFailure,

  [Types.GET_PAYMENT_ID_REQUEST]: getPaymentIdRequest,
  [Types.GET_PAYMENT_ID_SUCCESS]: getPaymentIdSuccess,
  [Types.GET_PAYMENT_ID_FAILURE]: getPaymentIdFailure,

  [Types.UPDATE_PAYMENT_ID_REQUEST]: updatePaymentIdRequest,
  [Types.UPDATE_PAYMENT_ID_SUCCESS]: updatePaymentIdSuccess,
  [Types.UPDATE_PAYMENT_ID_FAILURE]: updatePaymentIdFailure,

  [Types.DELETE_PAYMENT_ID_REQUEST]: deletePaymentIdRequest,
  [Types.DELETE_PAYMENT_ID_SUCCESS]: deletePaymentIdSuccess,
  [Types.DELETE_PAYMENT_ID_FAILURE]: deletePaymentIdFailure,

  [Types.STATUS_PAYMENT_ID_REQUEST]: statusPaymentIdRequest,
  [Types.STATUS_PAYMENT_ID_SUCCESS]: statusPaymentIdSuccess,
  [Types.STATUS_PAYMENT_ID_FAILURE]: statusPaymentIdFailure,
})
