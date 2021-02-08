import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/StartupRedux'
import { StaticDataTypes } from '../Redux/StaticDataRedux'
import { PaymentTypes } from '../Redux/PaymentRedux'

/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import { getRoot } from './StaticDataSagas'
import {
  getPayment,
  addPayment,
  getPaymentId,
  updatePaymentId,
  deletePaymentId,
  statusPaymentId,
} from './PaymentSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(StaticDataTypes.GET_ROOT_REQUEST, getRoot, api),
    takeLatest(PaymentTypes.GET_PAYMENT_REQUEST, getPayment, api),
    takeLatest(PaymentTypes.ADD_PAYMENT_REQUEST, addPayment, api),
    takeLatest(PaymentTypes.GET_PAYMENT_ID_REQUEST, getPaymentId, api),
    takeLatest(PaymentTypes.UPDATE_PAYMENT_ID_REQUEST, updatePaymentId, api),
    takeLatest(PaymentTypes.DELETE_PAYMENT_ID_REQUEST, deletePaymentId, api),
    takeLatest(PaymentTypes.STATUS_PAYMENT_ID_REQUEST, statusPaymentId, api),
  ])
}