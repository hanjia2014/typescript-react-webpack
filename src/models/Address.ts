export class Country {
    code: string;
}

export class City {
    name: string;
}

export class Address {
    street: string;
    postalCode: string;
    city: City;
    country: Country;
}