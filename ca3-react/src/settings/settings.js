import React from 'react'

export default class settings extends React.Component  {

    getApiURL(amount) {
        return "http://localhost:8080/api/info/sw/" + amount;
    }
    getLoginURL() {
        return "http://localhost:8080/api/login/"
    }
    getUserURL() {
        return "http://localhost:8080/api/info/user/"
    }
    getAdminURL() {
        return "http://localhost:8080/api/info/admin/"
    }
}