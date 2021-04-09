const people = [];
const form = document.querySelector('.person-section');

handleNewPerson = () => {
  form.addEventListener('submit', createNewPerson);
}

handleNewPerson();

function createNewPerson(event) {
  event.preventDefault();

  let person = getAttributesFromPerson(form);

  people.push(person);

  showPeople();
}

function showPeople() {
  document.getElementById('result').innerHTML = ``
  people.forEach(element => {
    document.getElementById('result').innerHTML += `<ul class="people">
                                                      <li>Nome: ${element.name}</li>
                                                      <li>Sobrenome: ${element.lastname}</li>
                                                      <li>Peso: ${element.weight}</li>
                                                      <li>Altura: ${element.height}</li>
                                                    </ul>
                                                    <hr>`
  });
}

function getAttributesFromPerson (form) {
  let person = {
    name:     form.querySelector('#name').value,
    lastname: form.querySelector('#lastname').value,
    weight:   form.querySelector('#weight').value,
    height:   form.querySelector('#height').value
  }

  return person;
}