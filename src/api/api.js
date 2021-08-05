import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "db7118d4-2a5e-4c1d-acb2-b7d4ddb30f1a"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    follow(id) {
        return(
            instance.post(`follow/${id}`)
                .then(response => response.data.resultCode)
        )
    },

    unfollow(id) {
        return(
            instance.delete(`follow/${id}`)
                .then(response => response.data.resultCode)
        )
    },

    getProfile(id) {
        return(
            instance.get(`profile/${id}`)
                .then(response => response.data)
        )
    }

}

export const authAPI = {
    getAuth() {
        return(
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    }
}