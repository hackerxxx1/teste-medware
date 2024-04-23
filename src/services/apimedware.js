import axios from "axios";
var apiDeputados
axios.post('http://201.8.76.126:91/api/Acesso/login',{
    "identificacao": "agendamentoweb",
    "senha": "medware@123"
}).then(

 apiDeputados = axios.create({
  baseURL: "http://201.8.76.126:91/api/Medware",
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Authorization': `bearer ${Response.token}` 
}
})
)
export default apiDeputados;