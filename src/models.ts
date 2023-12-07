export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;

    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    company: {
        [key: string]: string;
    }
}