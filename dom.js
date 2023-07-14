// to view the properties of the document 
//console.dir(document);


// to view the properties one by one----------------->
//console.log(document.title)
//console.log(document.URL)
//console.log(document.domain)


// change the name of title-------------------->
//document.title = 123;
//console.log(document.title)


//to access the html ----------------->
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//GET ELEMENT BY ID------------->
//console.log(document.getElementById("header-title"))
//var v = document.getElementById("header-title") 
//console.log(v) //both are same one is assigning variable

//v.textContent = "Arman"; //It represents the raw text content without considering CSS styling
//v.innerText = "Saikia"; // It takes into account CSS styling and does not include hidden or non-visible elements
//v.innerHTML = '<h3>HELOO ARMAN</h3>'


// GET ELEMENT BY Class name------------------>
// var items = document.getElementsByClassName("list-group-item")
// console.log(items)
// console.log(items[3])
// items[2].textContent = 'Arman'
// items[2].style.fontWeight = 'Bold'
// items[2].style.backgroundColor = 'green'

// for(var i=0;i < items.length; i++){
//     items[i].style.backgroundColor = "Red"
//  }



//GET ELEMENT BY Tag name------------------> same as class name just change the variable name
// var li = document.getElementsByTagName("li")
// console.log(li)
// console.log(li[3])
// li[2].textContent = 'Arman'
// li[2].style.fontWeight = 'Bold'
// li[2].style.backgroundColor = 'blue'


// for(var i=0;i < li.length; i++){
//     li[3].style.backgroundColor = "Red"
// }



//Query Selector---------------->

// var header = document.querySelector("#main-header")
// header.style.borderBottom = "solid 4px blue";

// var input = document.querySelector("input")
// input.value = "HELLO ARMAN";

// var submit = document.querySelector('input[type = "submit"]')
// submit.value = "SEND"

// var item = document.querySelector(".list-group-item")
// item.style.color = "RED"

// var lastitem = document.querySelector(".list-group-item:last-child")
// lastitem.style.color = "blue"

// var nthchild = document.querySelector(".list-group-item:nth-child(2)")
// nthchild.style.backgroundColor = "green"


//Query SelectorAll---------------->


// var titles = document.querySelectorAll(".title")
// console.log(titles)

// titles[0].textContent = "TITLE CHANGED"
// console.log(titles)

// var odd = document.querySelectorAll("li:nth-child(odd)")
// var even = document.querySelectorAll("li:nth-child(even)")

// for(i=0;i<= odd.length; i++){

//     odd[i].style.backgroundColor = "green"
//     even[i].style.backgroundColor = "yellow"
// }


// CREATING NODES AND MODIFYING DOM------------------>

//var itemList = document.querySelector("#items")

//parentnode-------------->
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor = "pink"

//to look the parent of parent
//console.log(itemList.parentNode.parentNode.parentNode)
