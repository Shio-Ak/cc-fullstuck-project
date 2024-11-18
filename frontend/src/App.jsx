import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Table";

function App() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [eatStatus, setEatStatus] = useState("");

  const [eatStatusObj, setEatStatusObj] = useState({});
  const [flag, setFlag] = useState(0);

  async function fetchStatuses() {
    const res = await axios.get("/api/statuses");
    setEatStatusObj(res.data);
    setFlag(1);
  }

  async function patchStatuses(userName, date, eatStatus) {
    try {
      await axios.patch(
        `/api/statuses?userName=${encodeURIComponent(
          userName
        )}&date=${date}&eatStatus=${eatStatus}`
      );
      fetchStatuses();
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "") return;

    if (date === "") return;

    patchStatuses(userName, date, eatStatus);
  }

  useEffect(() => {
    try {
      fetchStatuses();
    } catch (err) {
      console.log(err);
    }
  }, []);

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
          min="2024-12-01"
          max="2024-12-10"
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
      {flag === 1 ? <Table eatStatusObj={eatStatusObj} /> : <div>No Data</div>}
    </>
  );
}

export default App;
