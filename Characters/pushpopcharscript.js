function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('chars.html');}
function gotoPlaces(){window.location.replace('../Places/places.html');}
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

function saveChar(){
    let name = document.getElementById('nameadd').value
    let desc = document.getElementById('desc').value
    let chars = JSON.parse(localStorage.getItem('chars'));

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
    for(i=0;i<chars.length;i++){
        if(name == chars[i]){
            return;
        }
    }
    chars.push(name)
    localStorage.setItem('chars', JSON.stringify(chars))
    alert("Character added successfully")
}
function delChar(){
    let name = document.getElementById('namedel').value;
    if(name === ''){
        alert('Name cannot be blank')
        return
    }

    localStorage.removeItem(name)
    let chars = JSON.parse(localStorage.getItem('chars'))
    let i = chars.indexOf(name)
    if(i > -1){
        chars.splice(i,1)
    }
    else{
        alert("No such character exists")
        return
    }
    localStorage.setItem('chars', JSON.stringify(chars))
    alert("Character deleted successfully")
    
    
}