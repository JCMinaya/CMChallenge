export interface Category {
    id: number;
    name: string;
    points: number;
}

export interface PaymentMethod {
    id: number;
    name: string;
}

export interface Schedule {
    id: number;
    day: number;
    open: string;
    close: string;
}

export interface Language {
    id: number;
    language: string;
}

export interface RootObject {
    name: string;
    description: string;
    country: string;
    city: string;
    zip_code: number;
    address: string;
    phone: string;
    tags: string[];
    website: string;
    categories: Category[];
    payment_methods: PaymentMethod[];
    schedule: Schedule[];
    languages: Language[];
    logo: string;
}
