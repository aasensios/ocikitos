export class Incident {

    id: number;
    photo: string;
    location: string;
    sample_barcode: string;
    agent_id: number;

    constructor(
        id?: number,
        photo?: string,
        location?: string,
        sample_barcode?: string,
        agent_id?: number,
    ) { }

}