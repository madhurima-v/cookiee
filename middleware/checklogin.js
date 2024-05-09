import { userTOSessionIdMap } from "../session.js"

async function cookieExists(req,res,next){
    var id = req.cookies.MyWebsite
    var status = userTOSessionIdMap.has(id)
    console.log(status)
    if (status){
        next()
    }
    else{
        res.redirect('/login')
    }
 }

 export { cookieExists }