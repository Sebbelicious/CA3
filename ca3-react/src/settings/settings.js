import React from 'react'

export default class settings extends React.Component  {

    getApiURL(amount) {
        return "http://localhost:8080/swapi/api/info/sw/" + amount;
    }
    getLoginURL() {
        return "http://localhost:8080/swapi/api/login/"
    }
    getUserURL() {
        return "http://localhost:8080/swapi/api/info/user/"
    }
    getAdminURL() {
        return "http://localhost:8080/swapi/api/info/admin/"
    }
    getAllPersonsURL(){
        return "http://localhost:8080/swapi/api/info/sw/87"
    }
}