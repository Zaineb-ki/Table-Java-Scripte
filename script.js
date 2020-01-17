// function Result(){
//     var inputFormulaire = inputUtilisateurFormulaire();
//     nouvelleInsertion(inputFormulaire);
//     reintilisation();
// }
// function inputUtilisateurFormulaire(){
//     var inputFormulaire = {};
//     inputFormulaire["Nom"] = document.getElementById("Nom").value;
//     inputFormulaire["Prénom"] = document.getElementById("Prénom").value;
//     inputFormulaire["date"] = document.getElementById("date").value;
//     inputFormulaire["lieu"] = document.getElementById("lieu").value;
//     inputFormulaire["téléphone"] = document.getElementById("téléphone").value;
//     inputFormulaire["Adresse"] = document.getElementById("Adresse").value;
//     return inputFormulaire;

// }
// function nouvelleInsertion(données){
//     var table = document.getElementById("personellist").getElementsByTagName('tbody')[0];
//     var newColonne =  table.insertRow(table.lenght);

//     colonne1 = newColonne.insertCell(0);
//     colonne1.innerHTML = données.Nom;

//     colonne2 = newColonne.insertCell(1);
//     colonne2.innerHTML = données.Prénom;

//     colonne3 = newColonne.insertCell(2);
//     colonne3.innerHTML = données.date;

//     colonne4 = newColonne.insertCell(3);
//     colonne4.innerHTML = données.lieu;

//     colonne5 = newColonne.insertCell(4);
//     colonne5.innerHTML = données.téléphone;

//     colonne6 = newColonne.insertCell(5);
//     colonne6.innerHTML = données.Adresse;

// }
// function reintilisation(){
//     document.getElementById("Nom").value = "";
//     document.getElementById("Prénom").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("lieu").value = "";
//     document.getElementById("téléphone").value = "";
//     document.getElementById("Adresse").value = "";
// }



class Personnel{
    constructor(Nom,Prenom,date,lieu,telephone,Adresse){
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.date = date;
        this.lieu = lieu;
        this.telephone = telephone;
        this.Adresse = Adresse;
    }
}
function inputUtilisateurFormulaire(){
    var personne = new Personnel(
        document.getElementById("Nom").value,
        document.getElementById("Prenom").value,
        document.getElementById("date").value,
        document.getElementById("lieu").value,
        document.getElementById("telephone").value,
        document.getElementById("Adresse").value

    );
    document.getElementById("personellist").innerHTML += "<tr><td>" + personne.Nom +"</td><td>" + personne.Prenom + "</td><td>" + personne.date + "</td><td>" + personne.lieu + "</td><td>" + personne.telephone + "</td><td>" + personne.Adresse +"</td></tr>";
}