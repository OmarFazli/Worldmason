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

function addOrg(){window.location.replace('addOrg.html');}
function delOrg(){window.location.replace('delOrg.html');}
function viewOrg(){window.location.replace('viewOrg.html');}

try{
    let orgs = JSON.parse(localStorage.getItem('orgs'))
    if(orgs.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no organizations made yet</h4>'
    }
    else{
        console.log(orgs)
        let i
        let string = ""
        for(i=0;i<orgs.length;i++){
            string += orgs[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no organizations made yet</h4>'
}

function displayOrg(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let orgs = JSON.parse(localStorage.getItem('orgs'))
    let i = orgs.indexOf(name)
    if(i == -1){
        alert('This organization does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}



 