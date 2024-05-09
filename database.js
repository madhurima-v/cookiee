import pg from 'pg'

function setDB() {
    const client = new pg.Client({
      user: 'postgres',
      host: 'localhost',
      database: 'session',
      password: '123456',
      port: 5432
    });
    
    client.connect(function (err) {
      if (err) throw err;
      console.log("connected")
    });

    return(client)
  }


  async function checkEmail(email,client) {
    var query2 = "select * from users_info where email = $1"
    var data = await client.query(query2, [email])
      return(data)
  }

  async function insertdata(name,email,password,client) {
    var query1 = "insert into users_info (name,email,password) values ($1,$2,$3)"
    var data = await client.query(query1, [name, email, password])
}



  export {setDB,checkEmail,insertdata}