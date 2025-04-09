import './style.css'


const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const button = document.getElementById("convert");

fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
  .then(res => res.json())
  .then(data => {
    const currencyCodes = Object.keys(data).sort();

    currencyCodes.forEach(code => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option2.value = code;
      option1.textContent = option2.textContent = code.toUpperCase();

      from.appendChild(option1);
      to.appendChild(option2);
    });

    from.value = "btc";
    to.value = "rub";
  });

button.addEventListener("click", () => {
  const fromCurrency = from.value.toLowerCase();
  const toCurrency = to.value.toLowerCase();
  const amt = parseFloat(amount.value);

  if (isNaN(amt) || amt <= 0) {
    result.textContent = "Введите корректную сумму.";
    return;
  }

  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    .then(res => res.json())
    .then(data => {
      const rate = data[fromCurrency][toCurrency];
      const converted = amt * rate;
      result.textContent = `${amt} ${fromCurrency.toUpperCase()} = ${converted.toFixed(2)} ${toCurrency.toUpperCase()}`;
    })
    .catch(err => {
      console.error(err);
      result.textContent = "Ошибка при загрузке курса.";
    });
});
