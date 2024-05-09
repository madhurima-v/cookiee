const userTOSessionIdMap = new Map()

async function setUserTOSessionIdMap(id, userDetails) {
    userTOSessionIdMap.set(id,userDetails)
}

async function getUserTOSessionIdMap(id) {
    var userDetails = userTOSessionIdMap.get(id)
    return(userDetails)
}

async function deleteSessionOfUser(id){
    userTOSessionIdMap.delete(id)
}

// async function cookieExists(id){
//    var status = userTOSessionIdMap.has(id)
//    return(status)
// }

export{setUserTOSessionIdMap,getUserTOSessionIdMap,deleteSessionOfUser,userTOSessionIdMap}