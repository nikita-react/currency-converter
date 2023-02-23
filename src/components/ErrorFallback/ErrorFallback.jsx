import { Container, Button, Text } from "../../basicStyled";

const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <Container maxWidth="480">
      <Text color="grey" fontSize={"25px"}>
        <Text
          lineHeight={"30px"}
          color="#222"
          fontWeight={"700"}
          display={"inline"}
        >
          404.
        </Text>
        That's an error. Also this link may have error from cors, please run on
        local server
      </Text>
      <Button
        background={"#c9c9c9"}
        fontSize={"16px"}
        onClick={resetErrorBoundary}
        padding={"5px 10px"}
        margin={"10px 0 0 0"}
        color="#fff"
      >
        Try again
      </Button>
    </Container>
  );
};

export default ErrorFallback;
