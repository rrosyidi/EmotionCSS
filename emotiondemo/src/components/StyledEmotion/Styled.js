import styled from "@emotion/styled";

const StyleButton = styled.button`
    background-color: lightblue;
    padding: 32px;
    font-size: 24px;
    border-radius: 4px;
`

const StyledButtonComponent = () => {
    return (
        <StyleButton>Touch This Button</StyleButton>
    )
}


export default StyledButtonComponent