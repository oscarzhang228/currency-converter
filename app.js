var myHeaders = new Headers();
myHeaders.append("apikey", "9i4rAbRt1eKjVfbNYO45s00MiHGjiYm6");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// function getConversion(to, from, amount) {
//   fetch(
//     `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((theResult) => console.log(theResult.result))
//     .catch((error) => console.log("error", error));
// }
