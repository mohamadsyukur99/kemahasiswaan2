// import API from "../../service/Api";

const apiURL = "https://gate-sisma.sekolahsabilillah.sch.id/api/";
const limit = 10;
let todos = [];
let token = '';



const getTodos = (url) => {
    // token = document.cookie('sipToken')
    // console.log(token);
    return fetch(`${apiURL}/${url}?offset=0&limit=20`, {
        headers:{
            'Secret-Key':'UzBsdXMxc3RlbS1TSVNNQQ=='
        },
        credentials: "include"
    }) 
        .then(body = body.json())
    
}

const Api = {
    getTodos
}

export default Api