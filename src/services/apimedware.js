import axios from "axios";
var apimedware
var token1

 async function teste() {
    token1 = await axios.post('http://clinicaesberard.ddns.net:91/api/Acesso/login',{
        "identificacao": "agendamentoweb",
        "senha": "medware@123",
    });
    token1 = await token1.data.token 
    return (
        axios.create({
            baseURL: "http://clinicaesberard.ddns.net:91/api/Medware",
           headers: {
               'Content-type': 'application/json',
               'Authorization': `bearer ${ await token1}`
           }
        })
    );  
}

teste().then((result) => {
    apimedware= result
})
console.log(apimedware);
export default apimedware;