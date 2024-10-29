import axios from "axios";

export class ChallengerService {
    constructor (options) {
       this.options = options
    }
    async post() {
        const response = await axios.post(`${this.options.URL}challenger`)
        return response
    }
    async get() {
        const response = await axios.get(`${this.options.URL}challenger`)
        return response
    }
    async patch() {
        const response = await axios.patch(`${this.options.URL}challenger`)
        return response
    }
    async put() {
        const response = await axios.put(`${this.options.URL}challenger`)
        return response
    }
    async delete() {
        const response = await axios.delete(`${this.options.URL}challenger`)
        return response
    }
}
