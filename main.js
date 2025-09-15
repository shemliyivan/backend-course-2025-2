const currency = "UAH"
const exact_date = "10.09.2024"

let Url_Bank = new URL("https://bank.gov.ua/NBU_ovdp?json");

Url_Bank.searchParams.append('date', exact_date);
Url_Bank.searchParams.append('val_code', currency);

console.log(Url_Bank.toString());