import axios from 'axios';

function getAllListes() {
    return axios.get("http://localhost:8800/")
        .then(response => response.data);
}
function deleteListe(id){
    return axios.delete("http://localhost:8800/"+id)
}


export default {
    getAllListes,
    deleteListe
}