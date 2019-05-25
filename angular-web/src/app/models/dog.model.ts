// export interface Dog {
//     id: number;
//     chip: string;
//     name: string;
//     gender: string;
//     breed_id: number;
//     color_id: number;
//     birthdate: Date;
//     deathdate: Date;
//     owner_dni: string;
//     owner_fullname: string;
//     residence: string;
//     created_at: any;
//     updated_at: any;
// }

export class Dog {

    id: number;
    chip: string;
    name: string;
    gender: string;
    breed_id: number;
    color_id: number;
    birthdate: Date;
    deathdate: Date;
    owner_dni: string;
    owner_fullname: string;
    residence: string;
    created_at: any;
    updated_at: any;

    constructor(
        id?: number,
        chip?: string,
        name?: string,
        gender?: string,
        breed_id?: number,
        color_id?: number,
        birthdate?: Date,
        deathdate?: Date,
        owner_dni?: string,
        owner_fullname?: string,
        residence?: string,
        created_at?: any,
        updated_at?: any,
    ) { }

}
