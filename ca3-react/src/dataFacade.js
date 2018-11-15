const URL = "https://anderskruse.dk/ca3/api/";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing 

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

class DataFacade {

  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  // getPersons() {
  //   return fetch(URL).then(handleHttpErrors)
  // }

  // In order to use await, a method must be "marked" with async
  async getPersons(amount) {
    if (amount) {
      return await fetch(`${URL}info/sw/${amount}`).then(handleHttpErrors)
    } else {
      return await fetch(`${URL}info/sw/${5}`).then(handleHttpErrors)
    }

  }

  async addPerson(person) {
    return await fetch(URL, this.makeOptions("POST", person)).then(handleHttpErrors);
  }

  async deletePerson(id) {
    return await fetch(URL + "/" + id, this.makeOptions("DELETE")).then(handleHttpErrors);
  }

  async editPerson(person) {
    console.log(person);

    return await fetch(URL + "/" + person.id, this.makeOptions("POST", person)).then(handleHttpErrors);
  }

  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
  }

  login = async (user, pass) => {
    const options = this.makeOptions("POST", true, { username: user, password: pass });
    return await fetch(URL + "login", options, true)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token) })
  }

  fetchDataUser = async () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return await fetch(URL + "info/user", options).then(handleHttpErrors);
  }

  fetchDataAdmin = async () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return await fetch(URL + "info/admin", options).then(handleHttpErrors);
  }


  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && this.loggedIn()) {
      opts.headers["x-access-token"] = this.getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

}

export default new DataFacade();
