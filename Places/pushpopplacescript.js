function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Characters/chars.html');}
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

function savePlace(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let places = JSON.parse(localStorage.getItem('places'));

    if(name === ""){
        alert("Name cannot be blank")
        return
    }
    if(desc === ""){
        alert("Description cannot be blank")
        return
    }
    
    console.log(name);
    console.log(desc);

    localStorage.setItem(name, desc);
    let i = 0;
    for(i=0;i<places.length;i++){
        if(name == places[i]){
            return;
        }
    }
    places.push(name)
    localStorage.setItem('places', JSON.stringify(places))
    alert("Place added successfully")
}
function delPlace(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let places = JSON.parse(localStorage.getItem('places'))
    let i = places.indexOf(name)
    if(i > -1){
        places.splice(i,1)
    }
    else{
        alert("No such place exists")
        return
    }
    localStorage.setItem('places', JSON.stringify(places))
    alert("Place deleted successfully")
    
    
}