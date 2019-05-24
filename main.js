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

function bingo_arr1(new_arr) {
  // 빙고 숫자 랜덤으로 생성
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
      body.innerHTML += bingo_num[i];
    } else if (i % 3 === 1) {
      new_arr[1].push(bingo_num[i]);
      body.innerHTML += bingo_num[i];
    } else {
      new_arr[2].push(bingo_num[i]);
      body.innerHTML += bingo_num[i];
    }
  }
  // console.log(new_arr);
  return new_arr;
}



function bingo_arr2(new_arr) {
  // 빙고 숫자 랜덤으로 생성
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
    const body = document.querySelector(`.com_data${i}`);
    if (i % 3 === 0) {
      new_arr[0].push(bingo_num[i]);
      body.innerHTML += bingo_num[i];
    } else if (i % 3 === 1) {
      new_arr[1].push(bingo_num[i]);
      body.innerHTML += bingo_num[i];
    } else {
      new_arr[2].push(bingo_num[i]);
      body.innerHTML += bingo_num[i];
    }
  }
  // console.log(new_arr);
  return new_arr;
}
// bingo_arr1(me_arr);
// bingo_arr2(com_arr);
console.log(bingo_arr1(me_arr));
console.log(bingo_arr2(com_arr));

// 클릭 시 값 읽어오기


const $com_tbody = document.querySelector('.com_bingo_tbody');
const $me_tbody = document.querySelector('.me_bingo_tbody');
console.log($com_tbody);
console.log($me_tbody);

// 컴퓨터 클릭
$com_tbody.addEventListener('click', function (e) {
  console.log('com');
  console.log(e.target.textContent);

});

function select_winner() {
  //  우승자 구현
  var me_score = bingo(me_arr);
  var com_score = bingo(com_arr);
  if (me_score >= 3 || com_arr >= 3) {
    if (me_score > com_score) {
      console.log('you win!!!!!!!!!');
    } else if (me_score < com_score) {
      console.log('computer win!!!!!!!');
    } else {
      console.log('Draw!!!!!!!');
    }
  }
}

// 플레이어 클릭
$me_tbody.addEventListener('click', function (e) {
  console.log('me');
  console.log(e.target.textContent);
  let num = +e.target.textContent;
  // console.log(me_arr[0].indexOf(num));
  if (me_arr[0].indexOf(num) !== -1) {
    let index = me_arr[0].indexOf(num);
    me_arr[0][index] = 'circle';
  } else if (me_arr[1].indexOf(num) !== -1) {
    let index = me_arr[1].indexOf(num);
    me_arr[1][index] = 'circle';
  } else {
    let index = me_arr[2].indexOf(num);
    me_arr[2][index] = 'circle';
  }
  console.log(me_arr);

  // 컴퓨터 숫자 변경
  if (com_arr[0].indexOf(num) !== -1) {
    let index = com_arr[0].indexOf(num);
    com_arr[0][index] = 'circle';
  } else if (com_arr[1].indexOf(num) !== -1) {
    let index = com_arr[1].indexOf(num);
    com_arr[1][index] = 'circle';
  } else {
    let index = com_arr[2].indexOf(num);
    com_arr[2][index] = 'circle';
  }
  console.log(com_arr);

  select_winner();

})





// 빙고 개수 판별

let total_count = 0;
// 왼쪽 대각선
const bingo_left_diagonal = function (arr) {
  let count = arr.every(function (item, index) {
    return item[index] === 'circle';
  });
  if (count) return total_count += 1;
}

// 오른쪽 대각선
const bingo_right_diagonal = function (arr) {
  let count = arr.every(function (item, index) {
    // console.log(item[item.length - index - 1]);
    return item[item.length - index - 1] === 'circle';
  });
  if (count) return total_count += 1;
}

// 가로

const bingo_column = function (arr) {
  let count = 0;
  arr.forEach(function (item) {
    count += item.every(function (item) {
      return item === 'circle';
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
      if (arr[j][i] === 'circle') {
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
  console.log(total_count);
  return total_count;
}