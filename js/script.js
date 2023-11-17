

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
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

