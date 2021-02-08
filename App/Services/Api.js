import apisauce from 'apisauce'

const headers = {
  'Content-Type': 'application/json'
}

const create = (baseURL = 'https://api.jokolodang.com/api/v1/payments') => {
  const api = apisauce.create({
    baseURL,
    headers,
    timeout: 15000
  })

  const getPayment = () => api.get(``)
  const addPayment = (data) => api.post(``, data)
  const getPaymentId = (id) => api.get(`/${id}`)
  const updatePaymentId = (data) => api.put(`/${data.id}`, data.data)
  const deletePaymentId = (id) => api.delete(`${id}`)
  const statusPaymentId = (data) => api.patch(`/${data.id}/${data.status}`) // data.status: 'activate' or 'deactivaate'

  return {
    getPayment,
    addPayment,
    getPaymentId,
    updatePaymentId,
    deletePaymentId,
    statusPaymentId,

    api
  }
}

export default {
  create
}
