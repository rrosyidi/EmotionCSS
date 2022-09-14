/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/css";
// import { jsx } from '@emotion/react'
import { css } from "@emotion/react";

const Agnostic = () => {
    return (
        <button
            // css={css`
            //     background-color: lightblue;
            //     padding: 32px;
            //     font-size: 24px;
            //     border-radius: 4px;
            // `}

            css={{
                backgroundColor: "lightblue",
                padding: "32px",
                fontSize: "24px",
                borderRadius: "4px"
            }}
        >Touch This Button</button>
    );
};

export default Agnostic;
