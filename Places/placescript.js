function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Character/chars.html');}
function gotoPlaces(){window.location.replace('places.html');}
function gotoEvents(){window.location.replace('../Events/events.html');}
function gotoCreatures(){window.location.replace('../Creatures/creatures.html');}
function gotoOrgs(){window.location.replace('../Organizations/orgs.html');}
function gotoMaps(){window.location.replace('maps.html');}
function gotoItems(){window.location.replace('../Items/items.html');}
function gotoImgs(){window.location.replace('imgs.html');}

function delStorage(){
    let b = window.confirm("This will permanently delete all data!\nAre you sure you want to proceed?")
    if(b){
        localStorage.clear()
        gotoHome()
    }
}


function addPlace(){window.location.replace('addPlace.html');}
function delPlace(){window.location.replace('delPlace.html');}
function viewPlace(){window.location.replace('viewPlace.html');}

try{
    let places = JSON.parse(localStorage.getItem('places'))
    if(places.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no places made yet</h4>'
    }
    else{
        console.log(places)
        let i
        let string = ""
        for(i=0;i<places.length;i++){
            string += places[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no places made yet</h4>'
}

function displayPlace(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let places = JSON.parse(localStorage.getItem('places'))
    let i = places.indexOf(name)
    if(i == -1){
        alert('This place does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}



 