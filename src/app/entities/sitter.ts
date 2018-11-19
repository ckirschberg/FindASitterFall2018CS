export class Sitter {
  _id?: string;
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
  
  rating?: Rating[];
}

//My suggestion, change if you want to...
export class Rating {
  rating: number; //1 - 5
  description?: String; // This babysitter was not very good because...
  babyId: String; // The baby who rated the sitter
}