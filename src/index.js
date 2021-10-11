import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"



personFacade.getAllPerson()
    .then(persons => {
        
        const tableRows = persons.map (person => `
            <tr>
                <td>${person.id}</td>
                <td>${person.email}</td>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.hobbies}</td>
            </tr>
        `)
        const tableRowsAsStr = tableRows.join("");
        document.getElementById("tbody").innerHTML = tableRowsAsStr
    })
    .catch(err => {
        if(err.status) {
            err.fullError.then(e => {
                console.log(e.message)
                document.getElementById("error").innerHTML = e.message;
            })
        }
        else {console.log("Network error"); }
    });

    function createPerson(){

    const addEmail = document.getElementById("email").value;
    const addFirstName = document.getElementById("firstName").value;
    const addLastName = document.getElementById("lastName").value;
    
    var person = new Object();
    person.email = addEmail;
    person.firstName = addFirstName;
    person.lastName = addLastName;
        console.log(person);
    
    personFacade.addPerson(person)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
    }
    else { console.log("Network error"); }
    });
  }

  myForm.onsubmit = (event) => {
    event.preventDefault();
    createPerson();
  };


    