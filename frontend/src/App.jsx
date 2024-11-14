import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [eatStatus, setEatStatus] = useState("");

  const [userNameArray, setUserNameArray] = useState([]);
  const [dateArray, setDateArray] = useState([]);
  const [eatStatusObj, setEatStatusObj] = useState({});

  useEffect(() => {
    setUserNameArray(["a太", "b介", "c子"]);
    setDateArray(["2024-12-01", "2024-12-02", "2024-12-03"]);
    setEatStatusObj({
      a太: {
        "2024-12-01": "false",
        "2024-12-02": "true",
        "2024-12-03": "true",
      },
      b介: {
        "2024-12-01": "true",
        "2024-12-02": "true",
        "2024-12-03": "true",
      },
      c子: {
        "2024-12-01": "true",
        "2024-12-02": "true",
        "2024-12-03": "false",
      },
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "") return;

    if (date === "") return;

    console.log(userName, date, eatStatus);
    console.log(userNameArray, dateArray, eatStatusObj);
  }

  return (
    <>
      <h1>ごはん管理台帳</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="userName">名前：</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="date">日付：</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <button type="submit" onClick={() => setEatStatus("true")}>
          食べる
        </button>
        <button type="submit" onClick={() => setEatStatus("false")}>
          食べない
        </button>
      </form>
      <h2>ステータス一覧</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {dateArray.map((value) => (
              <th key={value}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userNameArray.map((value) => (
            <tr key={value}>
              <th>{value}</th>
              <td>{eatStatusObj[value]["2024-12-01"]} </td>
              <td>{eatStatusObj[value]["2024-12-02"]} </td>
              <td>{eatStatusObj[value]["2024-12-03"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
