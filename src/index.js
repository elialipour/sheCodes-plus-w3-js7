let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

console.log(paris.temperature);

// Challange 2
let sydney = {
  name: "Sydney",
  country: " Australia",
  language: "English",
  temperature: 12,
  capitalCity: true
};

console.log(sydney.temperature);

// Challange 3
function showcity(city) {
  console.log(city);
}
let australiaCiyies = ["sydney", "Melbourne", "Newcastle"];
// console.log(australiaCiyies);
australiaCiyies.forEach(showcity);

// Challange 4
let cities = [
  {
    name: "Tehran",
    country: " Iran",
    language: "Persian",
    temperature: 34,
    capitalCity: true
  },
  {
    name: "California",
    country: "United States",
    language: "English",
    temperature: 15,
    capitalCity: false
  },
  {
    name: "Lisbon",
    country: " Portuga",
    language: "Portuguese",
    temperature: 33,
    capitalCity: true
  }
];

cities.forEach(function (city) {
  console.log(city.name + " " + city.temperature + " degree");
});
