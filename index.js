const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
const middle = Math.floor(array.length / 2);

for (let i = 0; i < middle; i++) {
  console.log(`${array[i]} -> ${array[array.length - 1 - i]} -> ${array[i]}`);
}
