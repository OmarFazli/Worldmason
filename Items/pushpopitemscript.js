function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Characters/chars.html');}
function gotoPlaces(){window.location.replace('../Places/places.html');}
function gotoEvents(){window.location.replace('../Events/events.html');}
function gotoCreatures(){window.location.replace('../Creatures/creatures.html');}
function gotoOrgs(){window.location.replace('../Organizations/orgs.html');}
function gotoMaps(){window.location.replace('maps.html');}
function gotoItems(){window.location.replace('items.html');}
function gotoImgs(){window.location.replace('imgs.html');}

function delStorage(){
    let b = window.confirm("This will permanently delete all data!\nAre you sure you want to proceed?")
    if(b){
        localStorage.clear()
        gotoHome()
    }
}

function saveItem(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let items = JSON.parse(localStorage.getItem('items'));

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
    for(i=0;i<items.length;i++){
        if(name == items[i]){
            return;
        }
    }
    items.push(name)
    localStorage.setItem('items', JSON.stringify(items))
    alert("Item added successfully")
}
function delItem(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let items = JSON.parse(localStorage.getItem('items'))
    let i = items.indexOf(name)
    if(i > -1){
        items.splice(i,1)
    }
    else{
        alert("No such item exists")
        return
    }
    localStorage.setItem('items', JSON.stringify(items))
    alert("Item deleted successfully")
    
    
}