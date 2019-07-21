export interface Color {
  id: number
  name: string
}

export interface Breed {
  id: number
  name: string
}

export interface Dog {
  id: number
  chip: string
  name: string
  gender: string
  breed_id: number
  color_id: number
  birthdate: Date
  deathdate: Date
  owner_dni: string
  owner_fullname: string
  residence: string
  created_at: any
  updated_at: any
  // vet_user_id: numb
}
