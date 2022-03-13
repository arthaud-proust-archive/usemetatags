export {
    capitalizeStr
}


function capitalizeStr(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}