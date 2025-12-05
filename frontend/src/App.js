(function () {
  const root = document.getElementById("root");

  // backend URL from environment
  const backend = window.__BACKEND_URL || "http://localhost:5000";

  root.innerHTML = `
    <h2>Simple Bank App</h2>
    <div>
      <h3>Register</h3>
      <input id="u" placeholder="username"/>
      <input id="p" placeholder="password"/>
      <button id="reg">Register</button>
    </div>
    <div>
      <h3>Transfer</h3>
      <input id="from" placeholder="from user"/>
      <input id="to" placeholder="to user"/>
      <input id="amt" placeholder="amount"/>
      <button id="trans">Transfer</button>
    </div>
    <pre id="out"></pre>
  `;

  async function api(path, opts) {
    const res = await fetch(backend + path, opts);
    return res.json();
  }

  document.getElementById("reg").onclick = async () => {
    const u = document.getElementById("u").value;
    const p = document.getElementById("p").value;
    const res = await api("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u, password: p }),
    });
    document.getElementById("out").innerText = JSON.stringify(res, null, 2);
  };

  document.getElementById("trans").onclick = async () => {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const amt = document.getElementById("amt").value;
    const res = await api("/transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, amount: amt }),
    });
    document.getElementById("out").innerText = JSON.stringify(res, null, 2);
  };
})();
