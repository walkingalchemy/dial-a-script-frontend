
const baseHeaders = {
  'Content-Type': 'application/json',
  'accept': 'application/json',
}

const authedHeaders = {
  'Content-Type': 'application/json',
  'accept': 'application/json',
  'Authorization': localStorage.getItem('jwt')
}

const URL_ROOT = 'http://localhost:3000'
const API_ROOT = `${URL_ROOT}/api/v1`


const login = (loginParams) => {
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify({ user: loginParams })
  })
  .then(resp => resp.json())
}

const signup = (signupParams) => {
  return fetch(`${API_ROOT}/signup`, {
  method: 'POST',
  headers: baseHeaders,
  body: JSON.stringify({ user: signupParams })
})
.then(response => {
  return response.json()
})
}
//
// const getLoggedInUser = () => {
//   return fetch(`${URL_ROOT}/current_user`, {
//     headers: headers()
//   }).then(res => res.json())
// }

const getScripts = () => {
  return fetch(`${API_ROOT}/scripts`, {
    headers: authedHeaders
  }).then(res => res.json())
}

// const getModels = (project_id) => {
//   return fetch(`${API_ROOT}/projects/${project_id}`, {
//     headers: headers()
//   }).then(res => res.json())
// }
//
// const getModelParts = (model_id) => {
//   return fetch(`${API_ROOT}/models/${model_id}`, {
//     headers: headers()
//   }).then(res => res.json())
// }

const createScript = (inputs) => {
  return fetch(`${API_ROOT}/scripts`, {
    method: 'POST',
    headers: authedHeaders,
    body: JSON.stringify({script: inputs})
  }).then(res => res.json())
}

// const saveModel = (m) => {
//   return fetch(`${API_ROOT}/models`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({model: m})
//   }).then(res => res.json())
// }
//
// const editModel = (m) => {
//   console.log(m.data)
//   return fetch(`${API_ROOT}/models/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({model: {name: m.name, project_id: m.project_id, data: m.data, model_type: m.model_type}})
// }).then(res => res.json())
// }
//
// const saveBasicInfo = (m) => {
//   return fetch(`${API_ROOT}/basic_info_data`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({basic_info_datum: {model_id: m.model_id, company: m.company, ticker: m.ticker, codename: m.codename, acquiror: m.acquiror}})
//   }).then(res => res.json())
// }
//
// const editBasicInfo = (m) => {
//   return fetch(`${API_ROOT}/basic_info_data/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({basic_info_datum: {model_id: m.model_id, company: m.company, ticker: m.ticker, codename: m.codename, acquiror: m.acquiror}})
// }).then(res => res.json())
// }
//
// const saveEquityInfo = (m) => {
//   return fetch(`${API_ROOT}/equity_info_data`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({equity_info_datum: {model_id: m.model_id, company: m.company, currentSharePrice: m.currentSharePrice, shares: m.shares, dividend: m.dividend}})
//   }).then(res => res.json())
// }
//
// const editEquityInfo = (m) => {
//   return fetch(`${API_ROOT}/equity_info_data/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({equity_info_datum: {model_id: m.model_id, company: m.company, currentSharePrice: m.currentSharePrice, shares: m.shares, dividend: m.dividend}})
// }).then(res => res.json())
// }
//
// const saveOfferInfo = (m) => {
//   return fetch(`${API_ROOT}/offer_info_data`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({offer_info_datum: {model_id: m.model_id, offer_type: m.offer_type, offer_metric: m.offer_metric, percentage_stock: m.percentage_stock}})
//   }).then(res => res.json())
// }
//
// const editOfferInfo = (m) => {
//   return fetch(`${API_ROOT}/offer_info_data/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({offer_info_datum: {model_id: m.model_id, offer_type: m.offer_type, offer_metric: m.offer_metric, percentage_stock: m.percentage_stock}})
// }).then(res => res.json())
// }
//
// const saveCapitalizationInfo = (m) => {
//   return fetch(`${API_ROOT}/capitalization_info_data`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({capitalization_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, item_type: m.item_type, repay: m.repay, rate: m.rate, amount: m.amount}})
//   }).then(res => res.json())
// }
//
// const editCapitalizationInfo = (m) => {
//   return fetch(`${API_ROOT}/capitalization_info_data/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({capitalization_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, item_type: m.item_type, repay: m.repay, rate: m.rate, amount: m.amount}})
// }).then(res => res.json())
// }
//
//
// const saveCashFlowInfo = (m) => {
//   return fetch(`${API_ROOT}/cash_flow_info_data`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({cash_flow_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, amount_year1: m.amount_year1}})
//   }).then(res => res.json())
// }
//
// const editCashFlowInfo = (m) => {
//   return fetch(`${API_ROOT}/cash_flow_info_data/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({cash_flow_info_datum: {model_id: m.model_id, company: m.company, item_name: m.item_name, amount_year1: m.amount_year1}})
// }).then(res => res.json())
// }
//
// const saveTransactionCostInfo = (m) => {
//   return fetch(`${API_ROOT}/transaction_costs`, {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify({transaction_cost: {model_id: m.model_id, name: m.name, input_type: m.input_type, data_input: m.data_input}})
//   }).then(res => res.json())
// }
//
//
// const editTransactionCostInfo = (m) => {
//   return fetch(`${API_ROOT}/transaction_costs/${m.id}`, {
//   method: 'PATCH',
//   headers: headers(),
//   body: JSON.stringify({transaction_cost: {model_id: m.model_id, name: m.name, input_type: m.input_type, data_input: m.data_input}})
// }).then(res => res.json())
// }


export default {
  eventHandlers: {
     getScripts,
     createScript,
  },
  auth: {
    login,
    signup
  }
}
