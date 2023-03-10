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
  Typography,
} from "@mui/material";

export type State = SnackbarOrigin & {
  open: boolean;
  children: ReactElement;
};

const TransitionLeft = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

export const App = () => {
  const [popupMessageState, setPopupMessageState] = useState<State>({
    open: false,
    children: <></>,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = popupMessageState;

  // const moons = ["π", "π₯°", "π€©", "π", "π€"];
  const omikujiList = ["ε€§ε", "ε", "ζ«ε", "εΆ", "ε€§εΆ"];
  let omikujiIndex = 0;
  let isWork = true;

  setInterval(() => {
    if (!isWork) {
      return;
    }
    window.location.hash = omikujiList[omikujiIndex % omikujiList.length];
    omikujiIndex++;
  }, 100);

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
        <p>γγΏγγεθ»’δΈ­γ§γ</p>

        <Button
          variant="contained"
          onClick={() => {
            isWork = false;
            const omikujiResult = decodeURI(
              String(window.location.href).split("#")[1]
            );
            const copyText =
              "γγΏγγγ?η΅ζ: " +
              omikujiResult +
              "\nhttps://rabbitprogram.com/tools/url-omikuji/";
            const children = (
              <>
                {" "}
                {omikujiResult} γ§γγοΌ
                <br />
                η΅ζγγ―γͺγγγγΌγγ«γ³γγΌγγΎγγ
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
          π
        </Button>
      </header>
    </div>
  );
};
