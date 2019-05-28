export class Infraction {

    id: number;
    status: string;
    document: string;
    incident_id: number;
    officer_id: number;

    constructor(
        id?: number,
        status?: string,
        document?: string,
        incident_id?: number,
        officer_id?: number,
    ) { }

}