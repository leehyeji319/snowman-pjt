import styled from 'styled-components';

export default function AllContainer(props) {
  return (
    <>
      <Container>{props.children}</Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: auto;
  position: relative;
`;
