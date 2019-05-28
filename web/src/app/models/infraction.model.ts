export class Infraction {

    id: number;
    status: string;
    document: string;
    incident_id: number;
    officer_id: number;
    created_at: any;
    updated_at: any;

    constructor(
        id?: number,
        status?: string,
        document?: string,
        incident_id?: number,
        officer_id?: number,
        created_at?: any,
        updated_at?: any,
    ) { }

}