interface Person {
    name :string
    id :number
}

function person(person:Person){
    return `${person.name},id:${person.id}`;
}

person({name:'yyx',id:11});