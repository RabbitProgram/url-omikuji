import React, { ReactElement, useState } from "react";
import syougatsu2_omijikuji2 from "./syougatsu2_omijikuji2.png";
import "./App.css";
import {
  Alert,
  Button,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarOrigin,
} from "@mui/material";

export type State = SnackbarOrigin & {
  open: boolean;
  children: ReactElement;
};

const TransitionLeft = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

function App() {
  const [popupMessageState, setPopupMessageState] = useState<State>({
    open: false,
    children: <></>,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = popupMessageState;

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

  const copyToClipboard = async (text: string) => {
    await global.navigator.clipboard.writeText(text);
  };

  const handlePopupMessageClose = () => {
    setPopupMessageState({ ...popupMessageState, open: false });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Snackbar
          TransitionComponent={TransitionLeft}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handlePopupMessageClose}
          key={vertical + horizontal}
          autoHideDuration={3000}
        >
          <Alert
            onClose={handlePopupMessageClose}
            severity="success"
            sx={{ width: "100%", textAlign: "left" }}
          >
            {popupMessageState.children}
          </Alert>
        </Snackbar>

        <img src={syougatsu2_omijikuji2} className="App-logo" alt="logo" />
        <p>おみくじ回転中です</p>

        <Button
          variant="contained"
          onClick={() => {
            isWork = false;
            const omikujiResult = decodeURI(
              String(window.location.href).split("#")[1]
            );
            const copyText =
              "おみくじの結果: " +
              omikujiResult +
              "\nhttps://rabbitprogram.com/tools/url-omikuji/";
            const children = (
              <>
                {" "}
                {omikujiResult} でした！
                <br />
                結果をクリップボードにコピーしました
              </>
            );
            copyToClipboard(copyText);
            setPopupMessageState({
              ...popupMessageState,
              children,
              open: true,
            });
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
