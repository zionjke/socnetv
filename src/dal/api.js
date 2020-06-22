import axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials : true,
    headers: {'API-KEY': 'db79da77-d4ed-4333-9c43-3bf4d5e71c39'}
});


export const api = {
    getUsers(currentPage,pageSize) {
       return  instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    getProfile(userID) {
        return instance.get(`/profile/${userID}`).then(response => response.data)
    },

    getPageNumber(pageNumber,pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },

    followUser(userID) {
        return instance.post(`/follow/${userID}`).then(response => response.data)
    },

    unFollowUser(userID) {
        return instance.delete(`/follow/${userID}`).then(response => response.data)
    }
};