import axios from 'axios';

export default {
    //API call to get random users
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=10&nat=us")
    }
}