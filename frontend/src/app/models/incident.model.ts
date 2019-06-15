export class Incident {

    id: number;
    photo: string;
    location: string;
    sample_barcode: string;
    agent_id: number;
    created_at: any;
    updated_at: any;

    constructor(
        id?: number,
        photo?: string,
        location?: string,
        sample_barcode?: string,
        agent_id?: number,
        created_at?: any,
        updated_at?: any,
    ) { }

}