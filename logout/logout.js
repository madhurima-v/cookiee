import { getUserTOSessionIdMap, deleteSessionOfUser } from "../session.js"
import { logActivity } from "../log.js"


async function logoutGet (req, res) {
    var userId = await getUserTOSessionIdMap(req.cookies.MyWebsite)
    logActivity("get", "logout", userId?.rows[0].id)
      res.render('logout.ejs')
  }
  
async function logoutPost (req,res){
     await deleteSessionOfUser(req.cookies.MyWebsite)
     res.redirect('/login')
  }


export { logoutGet, logoutPost}