const btn = document.querySelector("button");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

btn.addEventListener("click", () => {
  let randY = Math.floor(Math.random() * height);
  let randX = Math.floor(Math.random() * width);
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
});

function agree() {
  var fullName = prompt("Vậy thì bạn đây tên là gì nhỉ?");
  var time = prompt("Tôi có thể đón bạn lúc mấy giờ? (hh:mm)");
  var answer = prompt(
    "'YES' OR 'No' - Bạn đã chắc chắn chưaa? Trả lời rồi là không có được rút lại đó nha!"
  );

  if (
    answer.search("YES") >= 0 ||
    answer.search("yes") >= 0 ||
    answer.search("Yes") >= 0
  ) {
    if (fullName == null || fullName == "") {
      alert("Bạn nhập thiếu tên rùiii :<");
    } else if (time == null || time == "") {
      alert("Bạn nhập thiếu thời gian rùiii :<");
    } else {
      alert("Mình sẽ đón bạn " + fullName + " vào lúc " + time + " nha! Tớ còn 1 món quà mún tặng cậu nè 🧑‍🎄");
      location.assign("https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/295483937_3261173880790118_2915558017844911307_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1nLOlowJOtgAX97N4sa&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT86VNBITcyUZumNdMkw3acVZw4cQfad_PKQSNnzag1H5g&oe=62DF9286");
    }
  } else {
    alert("BIẾT NGAY MÀ! KHÔNG DỄ VẬY ĐÂU 😏");
  }
}
