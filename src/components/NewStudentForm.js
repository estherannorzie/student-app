import { useState } from "react";

const NewStudentForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });

  return (
    <form>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input name="fullName" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" />
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
};

export default NewStudentForm;
