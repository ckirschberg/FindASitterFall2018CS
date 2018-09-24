export class Sitter {
  username: string;
  password: string;

  name: string;
  gender: string; // Female, Male, Other...
  birthDate: Date; // We learn about js dates...
  noCriminalRecord: boolean; // true = no crimes
  noChildRecord: boolean; // true = not a child criminal
  hourlyWage: number;
  address: string;
  zipCode: string;
  city: string;
  calendar?: any; // we don't know the type yet...
  
}