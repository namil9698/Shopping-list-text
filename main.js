const text = document.querySelector('.shopping__text');
const button = document.querySelector('button');
const List = document.querySelector('.shopping__list');


// 엔터키 이벤트
text.addEventListener('keypress', (e) => {
    if (e.key === "Enter")
        //상품추가 함수 실행
        plusList();

})

// 장바구니 버튼클릭 이벤트
button.addEventListener('click', () => {
    //상품추가 함수 실행
    plusList();
})


// 삭제 이벤트
document.addEventListener('click', (e) => {
    //삭제 버튼일 때만 이벤트실행
    if (e.target.className === "delete") {
        let deleteGoods = e.target.parentElement;
        List.removeChild(deleteGoods);
    };

})

let count = 1;

//상품 추가 함수
function plusList() {
    let value = text.value;
    if (value.trim() === "") {
        alert("값을 입력하세요.");
        return;
    }

    let newgoods = document.createElement('div');
    newgoods.setAttribute('class', `goods${count}`);
    List.appendChild(newgoods);
    //상품 텍스트값,삭제버튼 추가 함수 실행
    goodsInner(newgoods);
    count++;
    //텍스트값 초기화
    text.value = "";

};

//상품 텍스트값,삭제버튼 추가 함수
function goodsInner(newgoods) {
    let newText = document.createElement('p')
    let newbutton = document.createElement('button')
    newbutton.setAttribute('class', 'delete');
    newText.innerText = text.value;
    newbutton.innerText = "삭제";
    newgoods.appendChild(newText);
    newgoods.appendChild(newbutton);
}