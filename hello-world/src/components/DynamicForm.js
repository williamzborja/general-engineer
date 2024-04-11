import React from 'react';
import { useForm } from 'react-hook-form';

const schema = {
    firstName: {
       label: 'First Name',
       type: 'text',
       validation: {
         required: 'First Name is required',
         minLength: {
           value: 3,
           message: 'First Name should have at least 3 characters',
         },
       },
    },
    lastName: {
       label: 'Last Name',
       type: 'text',
       validation: {
         required: 'Last Name is required',
       },
    },
    email: {
       label: 'Email',
       type: 'email',
       validation: {
         required: 'Email is required',
       },
    },
   };

const DynamicForm = () => {
const { register, handleSubmit, errors, setValue } = useForm();

 const onSubmit = (data) => {
    console.log(data);
 };

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
 };

 const renderFormControl = (key, field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'password':
        return (
          <div key={key}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={key}
              ref={register(field.validation)}
              onChange={handleInputChange}
            />
            {errors[key] && <span>{errors[key].message}</span>}
          </div>
        );
      // Add cases for other field types as needed
      default:
        return null;
    }
 };

 return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(schema).map(([key, field]) =>
        renderFormControl(key, field)
      )}
      <button type="submit">Submit</button>
    </form>
 );
};

export default DynamicForm;
