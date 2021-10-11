

const URL = "https://oleisanerd.dk/tomcat/CA1/api/people/";

function handleHttpErrors(res) {
  if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function makeOptions(method, body) {
  var otps = {
    method: method,
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    }
  }
  if(body){
    otps.body = JSON.stringify(body);
  }
  return otps;
}

function getAllPerson(){
  return fetch(URL+"show")
  .then(handleHttpErrors);
};

function addPerson(person) {
  const options = makeOptions("POST",person)
  return fetch(URL+"addperson",options)
  .then(handleHttpErrors);
};

const personFacade = {
  getAllPerson,
  addPerson
}

export default personFacade;