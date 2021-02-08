import { call, put, all } from 'redux-saga/effects'
import PaymentActions from '../Redux/PaymentRedux'

export function * getPayment (api) {
  const response = yield call(api.getPayment)

  if (response.ok) {
    yield put(PaymentActions.getPaymentSuccess(response.data.data))
  } else {
    yield put(PaymentActions.getPaymentFailure(response))
  }
}

export function * addPayment (api, action) {
  const { data } = action
  const response = yield call(api.addPayment, data)

  if (response.ok) {
    yield all([
      yield put(PaymentActions.addPaymentSuccess(response.data.data)),
      yield put(PaymentActions.getPaymentRequest())
    ])
  } else {
    console.log(response)
    yield put(PaymentActions.addPaymentFailure(response))
  }
}

export function * getPaymentId (api, action) {
  const { data } = action
  const response = yield call(api.getPaymentId, data)

  if (response.ok) {
    yield put(PaymentActions.getPaymentIdSuccess(response.data.data))
  } else {
    yield put(PaymentActions.getPaymentIdFailure(response))
  }
}

export function * updatePaymentId (api, action) {
  const { data } = action
  const response = yield call(api.updatePaymentId, data)

  if (response.ok) {
    yield all([
      yield put(PaymentActions.updatePaymentIdSuccess(response.data.data)),
      yield put(PaymentActions.getPaymentRequest())
    ])
  } else {
    yield put(PaymentActions.updatePaymentIdFailure(response))
  }
}

export function * deletePaymentId (api, action) {
  const { data } = action
  const response = yield call(api.deletePaymentId, data)

  if (response.ok) {
    yield all([
      yield put(PaymentActions.deletePaymentIdSuccess(response.data.data)),
      yield put(PaymentActions.getPaymentRequest())
    ])
  } else {
    yield put(PaymentActions.deletePaymentIdFailure(response))
  }
}

export function * statusPaymentId (api, action) {
  const { data } = action
  const response = yield call(api.statusPaymentId, data)

  if (response.ok) {
    yield all([
      yield put(PaymentActions.statusPaymentIdSuccess(response.data.data)),
      yield put(PaymentActions.getPaymentRequest())
    ])
  } else {
    yield put(PaymentActions.statusPaymentIdFailure(response))
  }
}