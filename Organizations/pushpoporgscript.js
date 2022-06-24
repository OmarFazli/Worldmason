function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Characters/chars.html');}
function gotoPlaces(){window.location.replace('../Places/places.html');}
function gotoEvents(){window.location.replace('../Events/events.html');}
function gotoCreatures(){window.location.replace('../Creatures/creatures.html');}
function gotoOrgs(){window.location.replace('orgs.html');}
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

function saveOrg(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let orgs = JSON.parse(localStorage.getItem('orgs'));

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
    for(i=0;i<orgs.length;i++){
        if(name == orgs[i]){
            return;
        }
    }
    orgs.push(name)
    localStorage.setItem('orgs', JSON.stringify(orgs))
    alert("Organization added successfully")
}
function delOrg(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let orgs = JSON.parse(localStorage.getItem('orgs'))
    let i = orgs.indexOf(name)
    if(i > -1){
        orgs.splice(i,1)
    }
    else{
        alert("No such organization exists")
        return
    }
    localStorage.setItem('orgs', JSON.stringify(orgs))
    alert("Organization deleted successfully")
    
    
}