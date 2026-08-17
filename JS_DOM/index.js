const data = [
  { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "525/-" },
  { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "425/-" },
  { image: "https://tse3.mm.bing.net/th/id/OIP.su9hs85gET1m-y7MOmtgngHaD4?r=0&pid=Api&P=0&h=180", price: "625/-" },
];
function Book(props) {
  const child = document.createElement("div");
  child.setAttribute("class", "card");
  const image = document.createElement("img");
  image.setAttribute("src", props.image);
  image.setAttribute("width", "200px");
  image.setAttribute("height", "150px");
  image.style.margin = "auto";
  const h2 = document.createElement("h2");
  h2.innerText = "Price:- " + props.price;
  child.appendChild(image);
  child.appendChild(h2);
  return child;
}
const booklist = document.createElement("div");
booklist.setAttribute("class", "booklist");
const parent = document.getElementById("root");
for (i of data) {
  booklist.appendChild(Book(i));
}
parent.appendChild(booklist);
