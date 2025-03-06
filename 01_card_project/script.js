function crateCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewsStr;
    if(views<1000){
        viewsStr = `${views}`;
    }
    else if(views<1000000){
        viewsStr = `${views/10000} K`
    }
    else if(views<100000000){
        viewsStr = `${views/1000000} M`
    }

    let html = `<div class="card">
            <div class="img">
                <img src="${thumbnail}"   alt="">
                <span class="capsul">${duration}</span>
            </div>
            <div class="content">
                <div class="title">${title}</div>
                <p>${cName} &#x2022; ${viewsStr} views &#x2022; ${monthsOld} months ago </p>
            </div>
        </div>`;

        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html;
}

crateCard(`2,000 People Fight For $5,000,000`,`MrBeast`,80000000,2,`22:22`,`https://i.ytimg.com/vi/XRACQhszum4/maxresdefault.jpg`)