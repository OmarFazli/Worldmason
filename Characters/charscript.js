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

function addChar(){window.location.replace('addChar.html');}
function delChar(){window.location.replace('delChar.html');}
function viewChar(){window.location.replace('viewChar.html');}

try{
    let chars = JSON.parse(localStorage.getItem('chars'))
    if(chars.length == 0){
        document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no characters made yet</h4>'
    }
    else{
        console.log(chars)
        let i
        let string = ""
        for(i=0;i<chars.length;i++){
            string += chars[i]
            string += "     "
        }
        //better alt shuold be available
        document.getElementById('contentdiv').innerHTML = `<textarea>${string}</textarea>`
    }
}
catch{
    document.getElementById('contentdiv').innerHTML = '<h4>Oops, looks like there are no characters made yet</h4>'
}

function displayChar(){
    let name = document.getElementById('nameview').value
    if(name == ''){
        alert('Name cannot be blank')
        return
    }
    let chars = JSON.parse(localStorage.getItem('chars'))
    let i = chars.indexOf(name)
    if(i == -1){
        alert('This character does not exist')
    }
    else{
        let desc = localStorage.getItem(name)
        document.getElementById('descview').innerHTML = `<textarea cols="30" rows="10">${desc}</textarea>`
    }
}



 