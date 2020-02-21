function priceincrease(prixU,compteur)
{
    let sommeTot = document.getElementById("val-total style-p");
    let intial  = document.getElementById(compteur) ;                           // passage par parametre (compteur)
    let price = +document.getElementById("val-total style-p").textContent ;
    price = price+prixU ;
    sommeTot.innerHTML= price ;
    let compteurInitial = +document.getElementById (compteur).textContent ;
    compteurInitial = compteurInitial+1 ;
    intial.innerHTML= compteurInitial ;
}
function priceDecrease (prixU,compteur)
{
    let sommeTot = document.getElementById("val-total style-p");
    let intial  = document.getElementById(compteur) ;                  
    let price = +document.getElementById("val-total style-p").textContent ;
    let compteurInitial = +document.getElementById (compteur).textContent ;

    if ( compteurInitial >0 ){
        price = price-prixU ;
        sommeTot.innerHTML= price ;
        compteurInitial=compteurInitial-1
        intial.innerHTML= compteurInitial ;
    }
}
   function delet(){
    let suprimer = document.getElementById("suprimer");
    suprimer.parentElement.parentElement.remove()
}

 




