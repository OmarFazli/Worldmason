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

function addEvent(){window.location.replace('addEvent.html');}
function delEvent(){window.location.replace('delEvent.html');}
function viewEvent(){window.location.replace('viewEvent.html');}

try{
    let events = JSON.parse(localStorage.getItem('events'))
    if(events.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no events written yet</h4>'
    }
    else{
        console.log(events)
        let i
        let string = ""
        for(i=0;i<events.length;i++){
            string += events[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no events written yet</h4>'
}

function displayEvent(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let events = JSON.parse(localStorage.getItem('events'))
    let i = events.indexOf(name)
    if(i == -1){
        alert('This event does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}
