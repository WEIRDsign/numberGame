while (true) {
  let isStart = confirm("O'yinni boshlaymizmi");
  if (!isStart) {
    break;
  }

  let random = Math.floor(Math.random() * 100);
  let minNum = 0,
    maxNum = 100;
  let step = 0; 
  while (true) {
    step++

    let selectedNumber = prompt(
      `Men ${minNum} va ${maxNum} oralig'idagi sonni o'yladim , u nechchi`
    );
    

    if (selectedNumber == null) {
      alert("Xayr");
      break;
    }

    selectedNumber = +selectedNumber;

    if (selectedNumber === random) {
      alert(`Siz  ${step} urinishda YUTDINGIZ!!!`);
      break;
    }
    if (selectedNumber > random) {
      maxNum = Math.min(selectedNumber);
    } else {
      minNum = Math.max(selectedNumber);
    }

    // console.log("Min number " + minNum, "Max number " + maxNum);
  }
}
