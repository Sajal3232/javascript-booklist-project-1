const btn=document.querySelector("#btn");
const author=document.querySelector("#author");
const year=document.querySelector("#year");
const title=document.querySelector("#title");
const booklist=document.querySelector("#book-list");


btn.addEventListener("click", function(e){
    e.preventDefault();

    if(title.value=="" &&author.value=="" && year.value=="" ){
        alert("please input this field");
    }else{
        const newRow=document.createElement("tr");

        // create head
        const newTitle=document.createElement("th");
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);

        const newAuthor=document.createElement("th");
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);


        const newYear=document.createElement("th");
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);
        // sow result
        booklist.appendChild(newRow);

       
    }
  });