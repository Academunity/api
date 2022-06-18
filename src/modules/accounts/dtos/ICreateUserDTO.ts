interface ICreateUserDTO {
  id?: string;
  role_id: string;
  favorite_subject_id?: string;
  last_question_id?: string;
  name: string;
  email: string;
  password: string;
  verified_at?: Date;
  icon?: string;
  location?: string;
  phone?: string;
  suspended_at?: Date;
  deactivated_at?: Date;
}

export { ICreateUserDTO };
