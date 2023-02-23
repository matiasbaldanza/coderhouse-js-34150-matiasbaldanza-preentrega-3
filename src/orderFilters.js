import { orders } from "./data.js"
import { toSentenceCase } from "./utils.js"

export const activeFilter = ''

const orderStatusList = orders.reduce((accum, order) => {
    if (!accum.includes(order.status)) {
        accum.push(order.status)
    }
    return accum
}, [])

export function setOrderFilters($ordersFilterSelect) {
    orderStatusList.map(status => {
        const option = document.createElement('option')
        option.value = status
        option.text= toSentenceCase(status)

        $ordersFilterSelect.append(option)
    })
}