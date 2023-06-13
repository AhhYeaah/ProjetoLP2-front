interface Coordinates {
    latitude: number;
    longitude: number;
}

interface Timezone {
    offset: string;
    description: string;
}

interface Location {
    region: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

interface Pictures {
    large: string;
    medium: string;
    thumbnail: string;
}

export enum ClientTypeEnum {
    LABORIOUS = "LABORIOUS", NORMAL = "NORMAL", SPECIAL = "SPECIAL"
}

export enum Region {
    NORTE = "NORTE",
    NORDESTE = "NORDESTE",
    CENTRO_OESTE = "CENTRO_OESTE",
    SUDESTE = "SUDESTE",
    SUL = "SUL"
}


export interface Client {
    type: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    gender: string;
    location: Location;
    email: string;
    birthday: string;
    registered: string;
    telephoneNumbers: string[];
    mobileNumbers: string[];
    pictures: Pictures;
    nationality: string;
}