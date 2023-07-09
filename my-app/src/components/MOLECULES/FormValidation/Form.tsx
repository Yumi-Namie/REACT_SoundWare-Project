import { Form, Input } from 'semantic-ui-react';
import React, { useState } from 'react';
import { ButtonJoin } from '../../ATOMS/Buttons/Buttons';
import './form.css';
import './form-laptop.css';

interface FormComponentProps {
  onSubmit: (data: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form className="ui form" onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name:</label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Email:</label>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Field>

      <Form.Field>
        <label>Password:</label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Form.Field>

      <ButtonJoin />
    </Form>
  );
};

export { FormComponent};
