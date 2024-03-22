export default function randomSort(array) {
  return array.sort(() => Math.random() - 0.5);
}