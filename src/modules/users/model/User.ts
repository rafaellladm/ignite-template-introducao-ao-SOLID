import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;

  name: string;

  admin: boolean;

  email: string;

  create_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.admin = false;
    this.updated_at = undefined;
  }
}

export { User };
