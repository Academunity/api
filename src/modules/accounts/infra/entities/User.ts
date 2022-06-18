import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  role_id: string;
  favorite_subject_id: string;
  last_question_id: string;
  name: string;
  email: string;
  password: string;
  verified_at: Date;
  icon: string;
  location: string;
  phone: string;
  suspended_at: Date;
  deactivated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
