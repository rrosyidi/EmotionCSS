import { css } from "@emotion/css";
// import { css } from "@emotion/react";

const ButtonCss = () => {
  return (
    <button
      className={css`
        padding: 32px;
        background-color: grey;
        font-size: 24px;
        border-radius: 4px;
      `}
    ></button>
  );
};

export default ButtonCss;
