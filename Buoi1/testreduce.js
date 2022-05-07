let stringStatus = 'COMing,FINDING2,canceled'

const statusFilter = {
    active: {
        name: 'active',
        statuses: {
            reservationCreated: 'RESERVATION_CREATED',
            reservationApproved: 'RESERVATION_APPROVED',
            finding: 'FINDING',
            coming: 'COMING',
            pickupArrived: 'PICKUP_ARRIVED',
            onJourney: 'ON_JOURNEY',
            canceled: 'CANCELED',
            timeout: 'TIMEOUT',
        },
    },
    finished: {},
}

console.log(Object.values(statusFilter.active.statuses).includes('COMING'))

let arrStatus = stringStatus.split(',')
console.log(arrStatus)

let arrTemp = arrStatus.reduce((arr, item) => {
    let parsedStatus = item.trim().toUpperCase()
    if (Object.values(statusFilter.active.statuses).includes(parsedStatus))
        return [...arr, parsedStatus]
    return arr
}, [])

console.log(arrTemp.reduce((objectStatus, item)=> {
    return {...objectStatus, [item]: true}
}, {}))