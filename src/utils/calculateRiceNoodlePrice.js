const sizes = {
  S: 0,
  L: 100,
};

export default function calculateRiceNoodlePrice(cents, size) {
  return cents + sizes[size];
}
