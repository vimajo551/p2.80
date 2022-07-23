var ndtarray = [];
var maarray = [];
function submit(){
    for ( var x = 1; x <=1; x++){
        var cta = document.getElementById("name1").value;
        ndtarray.push(cta)
    }
    var tamanho = ndtarray.length
    for ( var x = 0; x <tamanho; x++){
        maarray.push("<h4>nome:" + ndtarray[x]+"<h4>")
    }
    document.getElementById("displayNameWithCommas").innerHTML = maarray
        //document.getElementById("nameOfTheStudent").value = ""//
        //removendo a vigula da lista
    var removavirgula = maarray.join ("");
    document.getElementById("displayNameWithoutCommas").innerHTML = removavirgula;
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting(){
    ndtarray.sort();
    var noa = [];  
    var tamanho = ndtarray.length
    for ( var x = 0; x <tamanho; x++){
        noa.push("<h4>nome:" + ndtarray[x]+"<h4>")
    }
    var removavirgula = noa.join ("");
    document.getElementById("displayNameWithoutCommas").innerHTML = removavirgula;
}

function searching(){
    var s = document.getElementById("displayNameWithCommas").value;
    var found = 0;
    var j;
    for (j=0; j<noa.length; j++) 
    {
        if(s==noa[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="nome encontado "+found+"vez(es)";
    console.log("nome encontado "+found+"vez(es)");
}