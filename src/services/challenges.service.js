import axios from "axios";


export class ChallengesService {
    constructor (options){
        this.options = options;
    }
    async get(headers){
        const response = await axios.get(`${this.options.URL}challenges`, {headers: headers});
        return response;
    }
    async patch() {
        const response = await axios.patch(`${this.options.URL}challenges`)
        return response
    }
    async put() {
        const response = await axios.put(`${this.options.URL}challenges`)
        return response
    }
    async delete() {
        const response = await axios.delete(`${this.options.URL}challenges`)
        return response
    }
    async post() {
        const response = await axios.post(`${this.options.URL}challenges`)
        return response
    }
}