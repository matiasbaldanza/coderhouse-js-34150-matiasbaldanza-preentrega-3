import { orders } from "./data.js"

// DOM elements
const $ordersFilterSelect = document.querySelector('data-filter-orders')
const $activeOrdersSummary = document.querySelector('[data-active-orders-summary]')
const inactiveOrdersDefinition = ['canceled', 'completed']

// Globals
const orderCategories = orders.reduce((accum, order) => {
    if (!accum.includes(order.status)) {
        accum.push(order.status)
    }
    return accum
}, [])

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
}

function summarizeOrders() {
    console.log(activeOrdersSummary)
    $activeOrdersSummary.textContent = activeOrdersSummaryText
}
