import React from "react";
import { useCount } from "./countContext";
import { useStudent } from "./studentContext";

const Child2 = () => {
  const { count, setCount } = useCount();
  const { student, setstudent } = useStudent();
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 6);
          }}
        >
          child2 button
        </button>
      </div>
      <div>
        {student.map((data, i, arr) => {
          return (
            <div key={i}>
              <div>
                <h1> {data.name}</h1>
                <h1> {data.phoneNo}</h1>
                <h1> {data.gmail}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Child2;
