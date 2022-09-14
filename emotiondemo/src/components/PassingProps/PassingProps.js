import styled from "@emotion/styled";

const PropsButton = styled.button(props => ({
    backgroundColor: props.color,
    padding: "32px",
    fontSize: "24px",
    borderRadius: "4px"
}))


const PassingProps = () => {
    return(
        <PropsButton color="green"> Touch This Button</PropsButton>
    )
}

export default PassingProps