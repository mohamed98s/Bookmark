var siteName = document.getElementById('site-name');
var siteURL = document.getElementById('site-link');
var addBtn = document.getElementById('adder');
var tBody = document.getElementById('t-body');


// var mySites = [];

if (localStorage.getItem('myData') !== null) {
    var mySites = JSON.parse(localStorage.getItem('myData'));
    display()
}
else {
    var mySites = [];
}

var stringData


function createSite() {

    console.log('called')
    
    var webSite = {
        sName: siteName.value,
        sLink: siteURL.value
    }

    mySites.push(webSite);

    stringData = JSON.stringify(mySites)
    localStorage.setItem('myData', stringData)

    // clearForm();
    retriveSite()


}

var trs = ''

function retriveSite() {

    var lastIndex = mySites.length - 1
    //for(var i = 0 ; i < allSites.length ; i++)
    //  {
    trs = `<tr>
    <td>${lastIndex + 1}</td>
    <td>${mySites[lastIndex].sName}</td>
    
    <td><button id="switch" class="update">
        <a href="${mySites[lastIndex].sLink}"><i class="fa-solid fa-pen-to-square"></i></a>
    </button></td>
    <td><button onclick="deleteSite(${lastIndex});" class="trash">
        <i class="fa-solid fa-trash"></i>
    </button></td>
    </tr>
        `
    //  }
    console.log('asdasd')
    tBody.innerHTML += trs;

}


function display() {
    var trs = '';
    for (var i = 0; i < mySites.length; i++) {
        trs += `<tr>
        <td>${i+1}</td>
        <td>${mySites[i].sName}</td>

        <td><button id="switch" class="update">
        <a href="${mySites[i].sLink}"><i class="fa-solid fa-pen-to-square"></i></a>
        </button></td>
        
        <td><button onclick="deleteSite(${i});" class="trash">
            <i class="fa-solid fa-trash"></i>
        </button></td>


        </tr>
        `
    }
    tBody.innerHTML = trs;
}

function deleteSite(index){
    mySites.splice(index,1);

    display();

    localStorage.setItem('myData', JSON.stringify(mySites))
}


siteName.addEventListener('blur', function(){
    siteNameValidation();
})
siteURL.addEventListener('blur', function(){
    siteUrlValidation();
})
addBtn.addEventListener('click', function(){
    if(siteUrlValidation() && siteNameValidation())
    {
        console.log('kajsfa;ksmkf')
        createSite();
    }
});

// console.log(addBtn);

function siteNameValidation(){
    if(siteName.value.length >= 1)
    {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        return true;
    }
    else
    {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        return false;
    }
}

function siteUrlValidation(){
    const urlRegexg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    var urlValue = siteURL.value;

    if(urlRegexg.test(urlValue))
    {
        siteURL.classList.add('is-valid');
        siteURL.classList.remove('is-invalid');
        return true;
    }
    else{
        siteURL.classList.add('is-invalid');
        siteURL.classList.remove('is-valid');
        false
    }
}


