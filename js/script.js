

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEL = document.querySelector("main");
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = "<h1>SEI Rocks!</h1>";
mainEL.classList.add("flex-ctr");

const topMenuEL = document.getElementById("top-menu");
topMenuEL.style.height ="100%";
topMenuEL.style.backgroundColor = "VAR(--top-menu-bg)";
topMenuEL.classList.add("flex-around");

menuLinks.forEach(function(link){
  const aTag = document.createElement("a");
  aTag.textContent = link.text;
  aTag.href = link.href
  topMenuEL.appendChild(aTag);
});

//===================================Part 2 DOM MENU LAB=========================================================================
// task 4
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%"
 
// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.backgroundColor = "VAR(--sub-menu-bg)"
// Task 4.3
// Add the class of flex-around to the subMenuElelement.
subMenuEl.classList.add("flex-around");

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position("absolute");

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Task 5.0
// Update the menuLinks array in script.js to this:

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = topMenuEL.querySelectorAll("a");
// Declare a global showing SubMenu variable and initialize it to false;
var showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEL.addEventListener("click", function (evt) {
  evt.preventDefault();
})
//======

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.log the content of the <a>to verify the handler is working.
if (evt.target.localName !== "a") {

return;
}
// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
console.log(evt.target.textContent);
// Clicking anywhere other than on a link should do nothing.

// Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:
// Remove the active class from the clicked <a> element.
// Set the showingSubMenuto false.
// Set the CSS top property of subMenuEl to 0.

// return to exit the handler.
if (evt.target.classList.contains('active')) {
evt.target.classList.remove("active"); }
showingSubMenu = false
subMenuEl.style.top ="0"
console.log('removing active')

return;

// Task 5.4
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

topMenuLinks.forEach(link => link.classList.remove("active"));

//Task 5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked.
evt.target.classList.add("active");

// Task 5.6
// Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

const activeLink = menuLinks.find(
  (link) => link.text === evt.target.textContent
);

showingSubMenu = activeLink.hasOwnProperty('subLinks');

// if (activeLink.hasOwnProperty("subLinks")) {
  //   showingSubMenu = true
  // } else {
  //   showingSubMenu = false
  // }

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

if (showingSubMenu) {
  buildSubMenu(activeLink.subLinks);
  subMenuEl.style.top = "100%";
} else {
  subMenuEl.style.top = 0;
}

if (evt.target.textContent == "about") {
  mainEL.innerHTML = `<h1>${evt.target.textContent.toUpperCase()}</h1>`;
}

;

// Progress Check
// Clicking any of the links should make that link "active" and clear the others:


// Next, the event listener should remove a class name of active from each <a> element in topMenuLinks- whether the activeclass exists or not.


// .classList.contains("active")) {}
// // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
// topMenuLinks.forEach((link) => {
//   link.classList.remove("active");
//   })
  
//   topMenuLinks.forEach(
//     function(link) {
//       link.classList.remove("active")
//         })