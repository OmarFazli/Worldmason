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

function addItem(){window.location.replace('addItem.html');}
function delItem(){window.location.replace('delItem.html');}
function viewItem(){window.location.replace('viewItem.html');}

try{
    let items = JSON.parse(localStorage.getItem('items'))
    if(items.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no items created yet</h4>'
    }
    else{
        console.log(items)
        let i
        let string = ""
        for(i=0;i<items.length;i++){
            string += items[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no items created yet</h4>'
}

function displayItem(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let items = JSON.parse(localStorage.getItem('items'))
    let i = items.indexOf(name)
    if(i == -1){
        alert('This item does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}



 