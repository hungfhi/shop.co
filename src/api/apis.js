import axios from "axios"
const apis = {
        onLoginUser(params){
            return axios.post(`https://dummyjson.com/auth/login`,params)
        },
        getProduct(){
            return axios.get(`https://dummyjson.com/products`)
        }
}
export default apis;