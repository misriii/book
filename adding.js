function add() {
  bid = b1.value
  bname = b2.value
  aname = b3.value
  dcbn = d1.value


  if (bname in localStorage) {
    alert("Book already added")
  }
  else {
    book = { bid, aname, dcbn }

    localStorage.setItem(bname, JSON.stringify(book))
    window.location = "search.html"
  }
}

function search() {

  bookName = a1.value
  console.log(bookName);

  if (bookName in localStorage) {
    userBook = JSON.parse(localStorage.getItem(bookName))

    console.log(userBook);    


      result.innerHTML = 
      
      `
        <h3 class="text-success">Book id      : ${userBook.bid}</h3>
        <h3 class="text-success">Author Name  : ${userBook.aname}</h3>
        <h3 class="text-success">Description  : ${userBook.dcbn}</h3> `
    }


    
    else {
     alert("book not found")
  }

}



function searching() {
  window.location = "search.html"
}
