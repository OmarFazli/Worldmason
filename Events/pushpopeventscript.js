function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Characters/chars.html');}
function gotoPlaces(){window.location.replace('../Places/places.html');}
function gotoEvents(){window.location.replace('events.html');}
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

function saveEvent(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let events = JSON.parse(localStorage.getItem('events'));

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
    for(i=0;i<events.length;i++){
        if(name == events[i]){
            return;
        }
    }
    events.push(name)
    localStorage.setItem('events', JSON.stringify(events))
    alert("Event added successfully")
}
function delEvent(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let events = JSON.parse(localStorage.getItem('events'))
    let i = events.indexOf(name)
    if(i > -1){
        events.splice(i,1)
    }
    else{
        alert("No such event exists")
        return
    }
    localStorage.setItem('events', JSON.stringify(events))
    alert("Event deleted successfully")
    
    
}