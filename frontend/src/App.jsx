import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [eatStatus, setEatStatus] = useState("");

  const [userNameArray, setUserNameArray] = useState(["a太", "b介", "c子"]);
  const [dateArray, setDateArray] = useState([
    "2024-12-01",
    "2024-12-02",
    "2024-12-03",
  ]);
  const [eatStatusObj, setEatStatusObj] = useState({});
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get("/api/statuses");
        setEatStatusObj(res.data);
        setFlag(1);
      };
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "") return;

    if (date === "") return;

    console.log(userName, date, eatStatus);
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
      {flag === 1 ? (
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
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}

export default App;
