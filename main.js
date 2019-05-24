// 빙고판 랜덤 숫자로 만들기


let me_arr = [
  [],
  [],
  []
];

let com_arr = [
  [],
  [],
  []
];

function bingo_arr(new_arr) {
  const bingo_num = [];
  while (bingo_num.length < 9) {
    const num = parseInt((Math.random() * 9) + 1);

    if (bingo_num.indexOf(num) === -1) {
      bingo_num.push(num);
    }
    // if (n.length === 9) break;
  }
  console.log(bingo_num);


  // 빙고판 숫자 html에 집어넣기
  for (let i = 0; i < bingo_num.length; i++) {
    const body = document.querySelector(`.me_data${i}`);
    if (i % 3 === 0) {
      new_arr[0].push(bingo_num[i]);
      body.innerHTML = bingo_num[i];
    } else if (i % 3 === 1) {
      new_arr[1].push(bingo_num[i]);
      body.innerHTML = bingo_num[i];
    } else {
      new_arr[2].push(bingo_num[i]);
      body.innerHTML = bingo_num[i];
    }
  }
  // console.log(new_arr);
  return new_arr;
}
bingo_arr(me_arr);
bingo_arr(com_arr);
console.log(bingo_arr(me_arr));
console.log(bingo_arr(com_arr));




// 빙고 개수 판별

let total_count = 0;
// 왼쪽 대각선
const bingo_left_diagonal = function (arr) {
  let count = arr.every(function (item, index) {
    return item[index] === 1;
  });
  if (count) return total_count += 1;
}

// 오른쪽 대각선
const bingo_right_diagonal = function (arr) {
  let count = arr.every(function (item, index) {
    // console.log(item[item.length - index - 1]);
    return item[item.length - index - 1] === 1;
  });
  if (count) return total_count += 1;
}

// 가로

const bingo_column = function (arr) {
  let count = 0;
  arr.forEach(function (item) {
    count += item.every(function (item) {
      return item === 1;
    });
  });
  return total_count += count;
}


// const arr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//  세로
const bingo_row = function (arr) {
  let bingo = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === 1) {
        count += 1;
      }
    }
    if (count === 3) {
      bingo += 1;
    }
  }
  return total_count += bingo;
}

function bingo(arr) {
  total_count = 0;
  bingo_row(arr);
  bingo_column(arr);
  bingo_left_diagonal(arr);
  bingo_right_diagonal(arr);
  return total_count;
}