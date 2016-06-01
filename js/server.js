console.log('hello from server js');
// create XMLHttpRequest object

var xmlhttp = new XMLHttpRequest();

// define a function to be called automatically each time
// when the readyState property changes
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var books = JSON.parse(xmlhttp.responseText);
        showBooks(books);

    }
};
// open a request
xmlhttp.open('GET', 'http://localhost:8080/webstore/findAll', true);
// send a request
xmlhttp.send();

function showBooks(books) {
    var i, main, thumbnail, caption, title, authors, status;
    for (i = 0; i < books.length; i++) {
        main = document.createElement("div");
        main.setAttribute("class","col-sm-4 col-md-2");
        main.setAttribute("style", "padding-bottom: 15px");
        thumbnail = document.createElement("div");
        thumbnail.setAttribute("class", "thumbnail");
        caption = document.createElement("div");
        caption.setAttribute("class", "caption");

        title = document.createElement("p");
        title.innerHTML = books[i].title;

        authors = document.createElement("p");
        authors.innerHTML = books[i].authors;

        status = document.createElement("p");
        status.innerHTML = books[i].status;

        caption.appendChild(authors);
        caption.appendChild(title);
        caption.appendChild(status);

        thumbnail.appendChild(caption);
        main.appendChild(thumbnail);
        document.getElementById("books").appendChild(main);
    }
}

