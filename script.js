let placar;

let placar_oficial = 0
placar = document.getElementById("placar")


function count(){
    
    


    placar_oficial += 1

    placar.innerHTML =  placar_oficial

    console.log(placar)

}
function count1(){
    
    placar_oficial -= 1

    placar.innerHTML =  placar_oficial

    console.log(placar)

}