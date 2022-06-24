function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('Characters/chars.html');}
function gotoPlaces(){window.location.replace('../Places/places.html');}
function gotoEvents(){window.location.replace('../Events/events.html');}
function gotoCreatures(){window.location.replace('creatures.html');}
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

function saveCreature(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let creatures = JSON.parse(localStorage.getItem('creatures'));

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
    for(i=0;i<creatures.length;i++){
        if(name == creatures[i]){
            return;
        }
    }
    creatures.push(name)
    localStorage.setItem('creatures', JSON.stringify(creatures))
    alert("Creature added successfully")
}
function delCreature(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let creatures = JSON.parse(localStorage.getItem('creatures'))
    let i = creatures.indexOf(name)
    if(i > -1){
        creatures.splice(i,1)
    }
    else{
        alert("No such creature exists")
        return
    }
    localStorage.setItem('creatures', JSON.stringify(creatures))
    alert("Creature deleted successfully")
    
    
}