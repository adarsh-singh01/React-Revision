import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null); //used for copy pasting

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-_[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyToClipboard = useCallback(() => {
    //passwordRef.current.select()
    passwordRef.current?.select(); //condtional rendering
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllow, numAllow, setPassword]); //we wrote setPassport only for optimization
  return (
    <div className=" rounded-lg bg-gray-200 max-w-3xl md:my-32 my-16 mx-auto w-full flex flex-col justify-center items-center p-20 space-y-14">
      <h1 className="md:text-5xl text-3xl text-center font-bold">PASSWORD GENERATOR</h1>
      <div className="md:flex-row flex flex-col space-y-3 md:space-y-0 justify-center items-center">
        <input
          className="outline p-3 rounded-lg md:rounded-s-full w-fit"
          value={password}
          ref={passwordRef}
          readOnly
        />
        {/*default is ReadOnly if onchnage not passed */}
        <button
          className="p-3 bg-red-600 outline rounded-lg md:rounded-e-full hover:bg-red-700"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="space-x-5 flex md:flex-row flex-col justify-center items-center font-bold">
        <input
          type="range"
          min={6}
          className="mx-3"
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        Length {length}
        <input
          name="num"
          className="mx-3"
          defaultChecked={numAllow}
          type="checkbox"
          onChange={() => {
            setNumAllow((prev) => !prev);
          }}
        />{" "}
        Number
        <input
          name="char"
          className="mx-3"
          type="checkbox"
          defaultChecked={charAllow}
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
        />
        Character
      </div>
    </div>
  );
}

export default App;
