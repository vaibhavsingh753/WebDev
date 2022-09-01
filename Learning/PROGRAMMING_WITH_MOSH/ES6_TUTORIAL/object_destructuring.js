//without destructuring we endup with some repetative code
const address ={
    street: 'Bellandur',
    city: 'Bangalore',
    country: 'India'
}

// const my_street = address.street;
// const my_city = address.city;
// const my_country = address.country;

//destructuring syntax
const{street:my_street, city:my_city, country:my_country} = address
console.log(my_street);
