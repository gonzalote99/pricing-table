const priceChange = document.getElementById('priceChange');
const priceCard1 = document.getElementById('priceCard1');
const price = document.getElementsByClassName('price');
const storageReq = document.getElementsByClassName('storageReq');
const userReq = document.getElementsByClassName('userReq');
const dataReq = document.getElementsByClassName('dataReq');

const spanEle = document.getElementsByTagName('span');

console.log(spanEle.length);

const initialObject = [

  {
    priceActual: "20$",
    storageActual: " 3 gb storage",
    userActual: " 2 user allow",
    dataActual: "send up 1 gb"
  },
  {
    priceActual: "43$",
    storageActual: " 5 gb storage",
    userActual: " 4 user allow",
    dataActual: "send up 3 gb"
  },
  {
    priceActual: "74$",
    storageActual: "6 gb storage",
    userActual: "5 user allow",
    dataActual: "send up 4 gb"
  }
];

const ActualObject = [
  {
    priceActual: " 40$",
    storageActual: "6 gb storage",
    userActual: "4 user allow",
    dataActual: "send up 2 gb"
  },
  {
    priceActual: "86$",
    storageActual: "10 gb storage",
    userActual: "8 user allow",
    dataActual: "send up 6 gb"
  },
  {
    priceActual: "148$",
    storageActual: "12 gb storage",
    userActual: "10 user allow",
    dataActual: "send up 8 gb"
  }
];


priceChange.addEventListener('change', () => {
  if(priceChange.checked) {
    for(let i = 0; i < price.length; i++) {
      price[i].innerText = ActualObject[i].priceActual;
      storageReq[i].innerText = ActualObject[i].storageReq;
      userReq[i].innerText = ActualObject[i].userReq;
      dataReq[i].innerText = ActualObject[i].dataReq;
    }
    for(let i = 0; i < spanEle.length; i++) {
      spanEle[i].classList.toggle('showPlan');
    }
  } else {
    for(let i = 0; i < price.length; i++) {
      price[i].innerText = initialObject[i].priceActual;
      storageReq[i].innerText = initialObject[i].storageReq;
      userReq[i].innerText = initialObject[i].userReq;
      dataReq[i].innerText = initialObject[i].dataReq;
    }
    for(let i = 0; i < spanEle.length; i++) {
      spanEle[i].classList.toggle('showPlan');
    }
  }
})