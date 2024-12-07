
import React, { useState } from "react";
const DynamicForm = () => {
  const [selectedType, setSelectedType] = useState(""); 
  const [fields, setFields] = useState([]);


  const inputOptions = [
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "radio", label: "Radio" },
    { value: "checkbox", label: "Checkbox" },
    { value: "email", label: "Email" },
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddField = () => {
    if (selectedType) {
      setFields([...fields, { type: selectedType, id: Date.now() }]);
      setSelectedType(""); // Reset the dropdown
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Form Builder</h2>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="input-type">Select Input Type: </label>
        <select
          id="input-type"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="" disabled>
            --Select--
          </option>
          {inputOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddField}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Add Input
        </button>
      </div>

      <form>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            {field.type === "radio" || field.type === "checkbox" ? (
              <>
                <label>
                  {field.type.charAt(0).toUpperCase() + field.type.slice(1)}:{" "}
                </label>
                <input type={field.type} />
              </>
            ) : (
              <>
                <label>
                  {field.type.charAt(0).toUpperCase() + field.type.slice(1)}:{" "}
                </label>
                <input type={field.type} placeholder={`Enter ${field.type}`} />
              </>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default DynamicForm;