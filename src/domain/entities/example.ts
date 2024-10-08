// src/domain/entities/User.ts

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }
  
  export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  
    constructor(props: UserProps) {
      this.id = props.id;
      this.name = props.name;
      this.username = props.username;
      this.email = props.email;
      this.phone = props.phone;
      this.website = props.website;
    }
  }
  