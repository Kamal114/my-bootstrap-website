const heading = "Services Just A Click Away!";
let i = 0;

const typing = () => {
  if (i < heading.length) {
    document.querySelector(".services-heading").innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
};

typing();
