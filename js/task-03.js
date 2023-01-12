const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const arrLi = [];
for (const oneImg of images) {
  arrLi.push(
    // `<li style='width: 400px hight:300px'><img src="${oneImg.url}" alt="${oneImg.alt}" style='width:100% hight:100%' ></li>`
    `<li><img src="${oneImg.url}" alt="${oneImg.alt}" width='800'></li>`
  );

  // gallery.insertAdjacentHTML('afterend', `<li><img src=${painting.url} alt=${painting.alt}></li>`);
  // gallery.append();
}
gallery.style["list-style"] = "none";
gallery.style["padding"] = "0";
gallery.style.display = "flex";
gallery.style["flex-wrap"] = "wrap";
gallery.style["justify-content"] = "center";
gallery.style.gap = "10px";

gallery.insertAdjacentHTML("afterbegin", arrLi.join(""));
