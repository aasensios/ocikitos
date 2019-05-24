export class Dog {

	constructor(
		 public id: number,
		 public chip: string,
		 public name: string,
		 public gender: string,
		 public breed_id: number,
         public color_id: number,
         public birthDate: any,
         public deathDate: any,
         public owner_dni: string,
		 public owner_fullname: string,
		 public owner_email: string,
		 public residence: string,
		 public barcode: string,
		 public sampleOrigin: string,
	) {
	}
}