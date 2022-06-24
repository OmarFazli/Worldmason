function gotoHome(){window.location.replace('../home.html');}
function gotoChars(){window.location.replace('../Characters/chars.html');}
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

function addCreature(){window.location.replace('addCreature.html');}
function delCreature(){window.location.replace('delCreature.html');}
function viewCreature(){window.location.replace('viewCreature.html');}


try{
    let creatures = JSON.parse(localStorage.getItem('creatures'))
    if(creatures.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no creatures made yet</h4>'
    }
    else{
        console.log(creatures)
        let i
        let string = ""
        for(i=0;i<creatures.length;i++){
            string += creatures[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no creatures made yet</h4>'
}

function displayCreature(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let creatures = JSON.parse(localStorage.getItem('creatures'))
    let i = creatures.indexOf(name)
    if(i == -1){
        alert('This creature does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}

