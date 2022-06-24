function gotoHome(){window.location.replace('home.html');}
function gotoChars(){window.location.replace('Characters/chars.html');}
function gotoPlaces(){window.location.replace('Places/places.html');}
function gotoEvents(){window.location.replace('Events/events.html');}
function gotoCreatures(){window.location.replace('Creatures/creatures.html');}
function gotoOrgs(){window.location.replace('Organizations/orgs.html');}
function gotoMaps(){window.location.replace('maps.html');}
function gotoItems(){window.location.replace('Items/items.html');}
function gotoImgs(){window.location.replace('imgs.html');}

function delStorage(){
    let b = window.confirm("This will permanently delete all data!\nAre you sure you want to proceed?")
    if(b){
        localStorage.clear()
        gotoHome()
    }
}

if (!("chars" in localStorage)){localStorage.setItem('chars', JSON.stringify([]))}
if (!("creatures" in localStorage)){localStorage.setItem('creatures', JSON.stringify([]))}
if (!("events" in localStorage)){localStorage.setItem('events', JSON.stringify([]))}
if (!("items" in localStorage)){localStorage.setItem('items', JSON.stringify([]))}
if (!("orgs" in localStorage)){localStorage.setItem('orgs', JSON.stringify([]))}
if (!("places" in localStorage)){localStorage.setItem('places', JSON.stringify([]))}
/*
if (!("noOfPlaces" in localStorage)) {
    localStorage.setItem('noOfPlaces', 0)
}
if (!("noOfEvents" in localStorage)) {
    localStorage.setItem('noOfEvents', 0)
}
if (!("noOfCreatures" in localStorage)) {
    localStorage.setItem('noOfCreatures', 0)
}
if (!("noOfOrgs" in localStorage)) {
    localStorage.setItem('noOfOrgs', 0)
}
if (!("noOfMaps" in localStorage)) {
    localStorage.setItem('noOfMaps', 0)
}
*/




