import { setOrderFilters } from "./orderFilters.js"
import { orders } from "./data.js"

// DOM elements
const $activeOrdersSummary = document.querySelector('[data-active-orders-summary]')
const $ordersFilterSelect = document.querySelector('[data-filter-orders]')

const inactiveOrdersDefinition = ['canceled', 'completed']

// Orders summary

const activeOrdersSummary = orders.reduce((summary, order) => {
    let activeOrdersCount, activeOrdersTotalAmount = 0

    if (!inactiveOrdersDefinition.includes(order.status)) {
        summary.count++
        summary.totalAmount += order.price
    }
    return summary
}, { count: 0, totalAmount: 0 })

const activeOrdersSummaryText = `${activeOrdersSummary.count} ($ ${activeOrdersSummary.totalAmount})` 

export function listOrders() {
    summarizeOrders()
    setOrderFilters($ordersFilterSelect)
}

function summarizeOrders() {
    $activeOrdersSummary.textContent = activeOrdersSummaryText
}


