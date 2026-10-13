import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [detail, setDetail] = useState("");
  const [walks, setWalks] = useState([
  {
    date: "2025-09-29",
    distance: "3km",
    steps: "4000歩"
  },
  {
    date: "2025-09-30",
    distance: "5km",
    steps: "6000歩"
  }
]);
  const [distance, setDistance] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
  fetch("http://localhost:8080/walks")
    .then((response) => response.json())
    .then((data) => {
      setWalks(data);
      setLoading(false);
    })
    .catch(() => {
      setMessage("通信に失敗しました");
      setLoading(false);
    });
}, []);

  const handleLogin = () => {
  if (loginId === "admin" && password === "1234") {
    setMessage("ログイン成功");
    setIsLogin(true);
  } else {
    setMessage("ログイン失敗");
  }
};

  const handleLogout = () => {
  setIsLogin(false);
  setMessage("ログアウトしました");
};

  const handleClick = () => {
  if (distance === "") {
    setMessage("距離を入力してください");
  } else {
    setMessage("登録しました！");
  }
};

  const showDetail = (walk) => {
    setDetail(
    `散歩日:${walk.date} 距離:${walk.distance} 歩数:${walk.steps}`
  );
};
  if (!isLogin) {
  return (
    <div>
      <h1>散歩アプリ</h1>

      <p>ログインID</p>

      <input
        type="text"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />

      <p>パスワード</p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        ログイン
      </button>

      <h3>{message}</h3>
    </div>
  );
}

  return (
    <div>
    {isLogin ? (
  <h2>ログイン中です</h2>
) : (
  <h2>未ログインです</h2>
)}

      <h1>散歩アプリ</h1>

      <button onClick={handleLogout}>
  ログアウト
      </button>

      <br />
      <br />
      
      <p>ログインID</p>

      <input
  type="text"
  value={loginId}
  onChange={(e) => setLoginId(e.target.value)}
/>

      <p>パスワード</p>

      <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      <br />
      <br />

      <button onClick={handleLogin}>
  ログイン
      </button>

      <p>散歩日</p>
      <input type="date" />

      <p>距離(km)</p>
      <input
  type="text"
  value={distance}
  onChange={(e) => setDistance(e.target.value)}
/>

      <p>歩数</p>
      <input type="text" />

      <br />
      <br />

      <button onClick={handleClick}>登録</button>

      <h3>{message}</h3>

      <hr />

      <h2>散歩履歴一覧</h2>

      {loading && <h3>通信中...</h3>}
      {walks.map((walk, index) => (
        <div key={index}>
          <p>散歩日：{walk.date}</p>
          <p>距離：{walk.distance}</p>
          <p>歩数：{walk.steps}</p>

          <button onClick={() => showDetail(walk)}>
  詳細表示
</button>
          <hr />
        </div>
      ))}
      <h2>詳細情報</h2>
      <p>{detail}</p>
    </div>
  );
}

export default App;