import React, { useState } from "react";
import logo from "./logo.svg";
import syougatsu2_omijikuji2 from "./syougatsu2_omijikuji2.png";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  // const moons = ["😄", "🥰", "🤩", "😜", "🤔"];
  const omikujiList = ["大吉", "吉", "末吉", "凶", "大凶"];
  let omikujiIndex = 0;
  let isWork = true;
  setInterval(() => {
    if (!isWork) {
      return;
    }
    window.location.hash = omikujiList[omikujiIndex % omikujiList.length];
    omikujiIndex++;
  }, 80);

  //クリップボードにコピー関数
  const copyToClipboard = async (text: string) => {
    await global.navigator.clipboard.writeText(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={syougatsu2_omijikuji2} className="App-logo" alt="logo" />
        <p>おみくじ回転中です</p>

        <Button
          variant="contained"
          onClick={() => {
            isWork = false;
            const omikujiResult = decodeURI(
              String(window.location.href).split("#")[1]
            );
            copyToClipboard(
              "おみくじの結果: " +
                omikujiResult +
                "\nhttps://rabbitprogram.com/tools/url-omikuji/"
            );
            alert(
              omikujiResult +
                " でした！\n✅ 結果をクリップボードにコピーしました"
            );
          }}
          style={{ fontSize: 50, backgroundColor: "#FFCA28" }}
        >
          👍
        </Button>
      </header>
    </div>
  );
}

export default App;
