import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Table({ eatStatusObj }) {
  const [userNameArray] = useState(["a太", "b介", "c子"]);
  const [dateArray] = useState([
    "2024-12-01",
    "2024-12-02",
    "2024-12-03",
    "2024-12-04",
    "2024-12-05",
    "2024-12-06",
    "2024-12-07",
    "2024-12-08",
    "2024-12-09",
    "2024-12-10",
  ]);

  return (
    <table border="1">
      <thead>
        <tr>
          <th></th>
          {dateArray.map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {userNameArray.map((nameValue) => (
          <tr key={nameValue}>
            <th>{nameValue}</th>
            {dateArray.map((dateValue) => (
              <td key={dateValue}>{eatStatusObj[nameValue][dateValue]} </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
