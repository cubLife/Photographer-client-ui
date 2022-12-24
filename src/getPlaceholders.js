import { Placeholder } from "react-bootstrap";

export function getPlaceholders(number, height) {
  const array = [];
  for (let i = 1; i <= number; i++) {
    array.push(
      <Placeholder as="p" animation="glow" key={i}>
        <Placeholder
          size="lg"
          style={{
            margin: "auto",
            height: `${height}px`,
            minWidth: "100%",
          }}
        />
      </Placeholder>
    );
  }
  return array;
}
