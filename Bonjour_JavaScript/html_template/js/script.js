function askName() {
    var nom = window.prompt("Comment t'appelles-tu ?", "Prénom")
    var bienvenue = "👋 Bonjour " + nom
    document.body.innerHTML += '<h2>' + bienvenue + '</h2>'
}

function askBirthYear() {
    var birthYear = window.prompt("En quelle année es-tu né.e ?", "1999")
    //birthYear = parseInt(birthYear)
    var age = new Date().getFullYear() - birthYear

    var birthMonth = window.prompt("En quelle mois es-tu né.e ?", "3")
    //birthMonth = parseInt(birthMonth)
    if (birthMonth > new Date().getMonth()) {
        age = age - 1
    }
    
    document.body.innerHTML += '<h3>Vous avez ' + age + ' ans</h3>'
}

askName()
askBirthYear()