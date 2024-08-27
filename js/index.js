

/****** index.html ******/ 

function showImage(element) {

    let imageUrl = "img/inicio/" + element.id + "-web.jpg";
    document.getElementById("big-image").setAttribute("src", imageUrl);
}


/****** obras.html ******/ 

function showGrid(element) {

    let linkID = element.id.substring(5);
    let obrasArr = ["obras-metal", "obras-madera", "obras-papel", "obras-digital", "obras-otros"];

    obrasArr.forEach(el => {
        if (el != linkID) {
            document.getElementById(el).classList.remove("d-block");    
            document.getElementById(el).classList.add("d-none");
        } 
    });
    
    document.getElementById(linkID).classList.remove("d-none");
    document.getElementById(linkID).classList.add("d-block");
}

