let Arr = [1, 2, 3, 4, 5, 6];
let even_sum = 0;
let odd_sum = 0;

for (let i = 0; i < Arr.length; i++) {
  if (i % 2 === 0) {
    even_sum += Arr[i];
  } else {
    odd_sum += Arr[i];
  }
}

if (even_sum > odd_sum) {
  Arr.sort((a, b) => a - b);
  console.log(Arr);
} else if (even_sum < odd_sum) {
  Arr.sort((a, b) => b - a);
  console.log(Arr);
} else {
  console.log(Arr);
}
