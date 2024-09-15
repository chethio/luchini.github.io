const gallery = document.getElementById("gallery");
const URL = "img/gallery/";
const footer = document.querySelector("footer");
const Images = { wp: 50, nwp: 0, cp: 0, sp: 0 };
var curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };
const allElement = document.getElementById("all");
const wpElement = document.getElementById("wp");
const nwpElement = document.getElementById("nwp");
const spElement = document.getElementById("sp");
const cpElement = document.getElementById("cp");
const loadImages = (numImages = 5, province) => {
  let i = 1;
  if (curImages[province] <= Images[province]) {
    while (i <= numImages) {
      let div1 = document.createElement("div");
      div1.classList = "col-lg-4 col-md-6 col-sm-6 " + province;

      let div2 = document.createElement("div");
      div2.classList = "portfolio__item ";

      let img = document.createElement("img");
      img.src = URL + province + "/" + curImages[province] + ".jpg";

      div2.appendChild(img);
      div1.appendChild(div2);
      gallery.appendChild(div1);
      i++;
      curImages[province]++;
    }
  }
};
loadImages(5, "wp");

allElement.addEventListener("click", () => {
  curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };

  gallery.innerHTML = "";
  loadImages(5, "wp");
});
wpElement.addEventListener("click", () => {
  curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };

  gallery.innerHTML = "";
  loadImages(5, "wp");
});
nwpElement.addEventListener("click", () => {
  curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };

  gallery.innerHTML = `
  <div class="col-lg-12">
    <h1 class="text-center" style="color:#ffffff;">Coming soon !</h1>
</div>`;
});
cpElement.addEventListener("click", () => {
  curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };

  gallery.innerHTML = `
  <div class="col-lg-12">
    <h1 class="text-center" style="color:#ffffff">Coming soon !</h1>
</div>`;
});
spElement.addEventListener("click", () => {
  curImages = { wp: 1, nwp: 1, cp: 1, sp: 1 };

  gallery.innerHTML = `
  <div class="col-lg-12">
    <h1 class="text-center" style="color:#ffffff">Coming soon !</h1>
</div>`;
});
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - footer.scrollHeight
  ) {
    if (
      allElement.classList.contains("active") ||
      wpElement.classList.contains("active")
    )
      loadImages(5, "wp");
  }
});
/*<div class="col-lg-4 col-md-6 col-sm-6 mix branding">
<div class="portfolio__item">
<img src="img/gallery/wp/1.jpg" alt="" srcset="">
</div>
</div>*/
