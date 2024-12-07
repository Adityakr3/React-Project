import { createContext, useContext, useState } from "react";

const countContext = createContext();
export const StudentContextWrapper = (props) => {
  const [student, setstudent] = useState([
    {
      name: "aditya",
      phoneNo: 98765432,
      gmail: "asiasdj@gmail.com",
    },
    {
      name: "adi",
      phoneNo: 98765434567,
      gmail: "adityac22f@gmail.com",
    },
  ]);
  return (
    <>
      <countContext.Provider value={{ student, setstudent }}>
        {props.children}
      </countContext.Provider>
    </>
  );
};

export const useStudent = () => {
  return useContext(countContext);
};
