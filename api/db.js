import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Pavan@7102000",
  database:"blogsbajarjobdb"
})