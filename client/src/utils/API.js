import axios from "axios";

export default {
    
    // product routes
addProduct: (product) => {
    return axios.post("/api/products", product)
},
getProduct: (product) => {
    return axios.get("/api/products", product)
},
updateProduct: (product) => {
    return axios.put("/api/products", product)
},


// User routes
addUser: (user) => {
    return axios.post("/api/users", user)
},
}
