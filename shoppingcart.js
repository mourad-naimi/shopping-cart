
//Prix du pain
function pricepain(){
    var pain = document.querySelector(".choose-bread")
    var prbread=0
    if(pain.value === "mlewi-simple"){
        prbread = 350
    }
    else if(pain.value === "mlewi-double"){
        prbread = 700
    }
    else if(pain.value === "chapati"){
        prbread = 400
    }
    else if(pain.value === "malfouf"){
        prbread = 450
    }
    return prbread
}
    document.querySelector('.choose-bread').addEventListener("click",pricepain)

//Prix harissa
function priceharissa(){
    var test = document.getElementById('q-harissa')
    if (test.checked == true){
    document.querySelector('.tharissa').innerHTML=50
    } else {
    document.querySelector('.tharissa').innerHTML=0
    }
    var a=Number(document.querySelector('.tharissa').innerHTML)
    return a
    }
    document.getElementById('q-harissa').addEventListener("change", priceharissa)

//Prix oueuf
function priceoeuf(){
    var proeuf=0;
    var nboeuf = document.getElementById('q-oeuf').value;
    proeuf=(nboeuf)*300;
    document.querySelector('.toeuf').innerHTML=proeuf
    return  proeuf
    }
    document.getElementById('q-oeuf').addEventListener("click",priceoeuf)

//Prix cheese
function pricecheese(){
    var prcheese=0;
    var nbcheese = document.getElementById('q-cheese').value;
    prcheese=(nbcheese)*200;
    document.querySelector('.tcheese').innerHTML=prcheese
    return prcheese
    }
    document.getElementById('q-cheese').addEventListener("click",pricecheese)

//Prix onion
function priceonion(){
    var test = document.getElementById('q-onion')
    if (test.checked == true){
    document.querySelector('.tonion').innerHTML=100
    } else {
    document.querySelector('.tonion').innerHTML=0
    }
    var b=Number(document.querySelector('.tonion').innerHTML)
    return b
    }
    document.getElementById('q-onion').addEventListener("change", priceonion)

//Prix tomate
function pricetomate(){
    var test = document.getElementById('q-tomate')
    if (test.checked == true){
    document.querySelector('.ttomate').innerHTML=100
    } else {
    document.querySelector('.ttomate').innerHTML=0
    }
    var c=Number(document.querySelector('.ttomate').innerHTML)
    return c
    }
    document.getElementById('q-tomate').addEventListener("change", pricetomate)

    //Prix laitue
function pricelaitue(){
    var test = document.getElementById('q-laitue')
    if (test.checked == true){
    document.querySelector('.tlaitue').innerHTML=150
    } else {
    document.querySelector('.tlaitue').innerHTML=0
    }
    var c=Number(document.querySelector('.tlaitue').innerHTML)
    return c
    }
document.getElementById('q-laitue').addEventListener("change", pricelaitue)

//Prix tuna
function pricetuna(){
    var test = document.getElementById('q-tuna')
    if (test.checked == true){
    document.querySelector('.ttuna').innerHTML=600
    } else {
    document.querySelector('.ttuna').innerHTML=0
    }
    var d=Number(document.querySelector('.ttuna').innerHTML)
    return d
    }
    document.getElementById('q-tuna').addEventListener("change", pricetuna)
    
//Prix salami
function pricesalami(){
    var test = document.getElementById('q-salami')
    if (test.checked == true){
    document.querySelector('.tsalami').innerHTML=400
    } else {
    document.querySelector('.tsalami').innerHTML=0
    }
    var e=Number(document.querySelector('.tsalami').innerHTML)
    return e
    }
    document.getElementById('q-salami').addEventListener("change", pricesalami)
    
//Prix total
function totalprice(){
    var ttlprice=0
    ttlprice=pricepain()+priceharissa()+priceoeuf()+pricecheese()+priceonion()+pricetomate()+pricetuna()+pricesalami()
    document.querySelector('.totalpr').innerHTML=ttlprice
}
    document.addEventListener("click",totalprice)