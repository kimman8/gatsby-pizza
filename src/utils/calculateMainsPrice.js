const sizes = {
  S: 0,
  L: 200,
};

export default function calculateMainsPrice(cents, size) {
  return cents + sizes[size];
}
