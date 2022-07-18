var myHeaders = new Headers();
myHeaders.append("apikey", "9i4rAbRt1eKjVfbNYO45s00MiHGjiYm6");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const result = document.getElementById("result");

function getConversion(to, from, amount) {
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((theResult) => (result.innerText = theResult.result + " " + to))
    .catch((error) => console.log("error", error));
}

const convert = document.getElementById("convert");
document.getElementById("convert").addEventListener("click", () => {
  getConversion(
    document.getElementById("to").value,
    document.getElementById("from").value,
    document.querySelector("input").value
  );
});
