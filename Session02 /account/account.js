const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 0,
    category: "식비",
    description: "스타벅스",
    price: -10000,
  },
  {
    id: 1,
    category: "서적",
    description: "자구교재",
    price: -500000,
  },
  {
    id: 2,
    category: "식비",
    description: "스타벅스",
    price: -5000,
  },
  {
    id: 3,
    category: "용돈",
    description: "고모부",
    price: +250000,
  },
];

//summary-article 
//2.2 총수입 총지출 반영
function summary_element() {
  let plus = 0;
  let minus = 0;
  historyList.forEach((el) => {
    el.price > 0 ? (plus += el.price) : (minus -= el.price);
  });

  const summary_element_H3 = document.createElement("h3");
  summary_element_H3.textContent = "나의 자산";

  const summary_element_current = document.createElement("p");
  summary_element_current.textContent = (plus - minus).toLocaleString();

  const summary_element_detail = document.createElement("div");
  summary_element_detail.className = "detail";

  //detail-수입
  const plusBtn = document.createElement("i");
  plusBtn.textContent = "+";
  const plusSpan = document.createElement("span");
  plusSpan.textContent = plus.toLocaleString();
  plusSpan.className = "plus";

  //detail-지출
  const minusBtn = document.createElement("i");
  minusBtn.textContent = "-";
  const minusSpan = document.createElement("span");
  minusSpan.textContent = minus.toLocaleString();
  minusSpan.className = "minus";

  summary_element_detail.appendChild(plusBtn);
  summary_element_detail.appendChild(plusSpan);
  summary_element_detail.appendChild(minusBtn);
  summary_element_detail.appendChild(minusSpan);

  const summary_article_add_element = document.querySelectorAll(".summary-article")[0];
  summary_article_add_element.innerHTML = ""; // 한번 초기화 후 다시 생성
  summary_article_add_element.appendChild(summary_element_H3);
  summary_article_add_element.append(summary_element_current);
  summary_article_add_element.append(summary_element_detail);
}

const historyList = HISTORY_LIST;
// 2.1(b) 상수 데이터 렌더링
function list_element(id, category, description, price) {

  const categorySpan = document.createElement("span");
  categorySpan.textContent = category;
  categorySpan.className = "category";

  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = description;
  descriptionSpan.className = "description";

  const priceSpan = document.createElement("span");
  priceSpan.textContent = (price > 0 ? "+" : "") + price.toLocaleString();
  priceSpan.className = price < 0 ? "outcome" : "income";

  const deleteListBtn = document.createElement("i");
  deleteListBtn.textContent = "delete";
  deleteListBtn.className = `delete_list_Button ${id}`;

  //2.4 delete 이벤트 : id로 delete 식별
  deleteListBtn.addEventListener("click", function () {
    handleDelete(id);
  });

  //2.1-(a,b)
  const li = document.createElement("li");
  li.className = price < 0 ? "income-list" : "outcome-list";
  li.appendChild(categorySpan);
  li.appendChild(descriptionSpan);
  li.appendChild(priceSpan);
  li.appendChild(deleteListBtn);

  const ul = document.querySelector("ul");
  ul.appendChild(li);
}

//2.3 수입 지출 필터링
let plusChecked = true;
let minusChecked = true;

function handleFilter() {
  const incomeList = document.querySelectorAll(".outcome-list");
  const outcomeList = document.querySelectorAll(".income-list");
  incomeList.forEach((list) => {
    list.style.display = plusChecked ? "flex" : "none";
  });
  outcomeList.forEach((list) => {
    list.style.display = minusChecked ? "flex" : "none";
  });
}
const incomeFilter = document.querySelector('label[for="income-ID"]');
incomeFilter.addEventListener("click", function () {
  minusChecked = !minusChecked;
  handleFilter();
});
const outcomeFilter = document.querySelector('label[for="outcome-ID"]');
outcomeFilter.addEventListener("click", function () {
  plusChecked = !plusChecked;
  handleFilter();
});

//2.4 식별된 id로 delete
function handleDelete(id) {
  const listDeleteModal = document.querySelectorAll(".list-delete-modal")[0];
  //심화 2.1(a,b) 삭제 모달 추가
  listDeleteModal.style.display = "flex"; // 모달 띄우기
  const deleteYesBtn = document.querySelectorAll(".delete_yes")[0];
  const deleteNoBtn = document.querySelectorAll(".delete_no")[0];
  //yes no 클릭시
  deleteYesBtn.onclick = function () {
    historyList.forEach((el, idx) => {
      el.id === id && historyList.splice(idx, 1);
    });
    listDeleteModal.style.display = "none";
    render();
  };
  deleteNoBtn.onclick = function () {
    listDeleteModal.style.display = "none";
  }; //팝업 형식
}

//2.5 리스트 추가
function handleAddFilter(idx) {
  const filter_button = document.querySelectorAll(".add_filter_btn>button");
  const selectTag = document.querySelector("#category");
  selectTag.innerHTML = "";

  if (idx === 0) {
    // 수입
    filter_button[0].className = "selected-button";
    filter_button[1].className = "unselected-button";

    const tags = ["용돈", "포인트"];
    tags.forEach((el) => {
      const optionTag = document.createElement("option");
      optionTag.value = el;
      optionTag.textContent = el;
      selectTag.appendChild(optionTag);
    });
  } else {
    filter_button[1].className = "selected-button";
    filter_button[0].className = "unselected-button";

    const tags = ["식비", "서적"];
    tags.forEach((el) => {
      const optionTag = document.createElement("option");
      optionTag.value = el;
      optionTag.textContent = el;
      selectTag.appendChild(optionTag);
    });
  }
}

//2.5-(2,3) footer -> 카테고리 선택 및 금액과 내역 입력
function handleAddSheet() {
  let selected_idx = 0; //0:수입 1:지출
  const addList = document.querySelectorAll(".add_list")[0];
  addList.innerHTML = `
  <section class="add_list_content">
        <h2>내역 추가</h2>
        <div class="add_filter_btn">
          <button type="button" class="selected-button">수입</button>
          <button type="button" class="unselected-button">지출</button>
        </div>

        <form>
          <label for="category">종류</label>
          <select id="category">
            <option value="용돈">용돈</option>
            <option value="포인트">포인트</option>
          </select>
          <label for="add_price">금액</label>
          <input type="number" id="add_price" />
          <label for="add_data">내용</label>
          <input type="text" id="add_data" />
        </form>

        <button type="button" class="add_save_btn">저장하기</button>
        <button type="button" class="add_close_btn">닫기</button>
      </section>
  `;
  addList.style.display = "flex";
  
  const filter_button = document.querySelectorAll(".add_filter_btn>button");
  filter_button.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
      selected_idx = idx;
      handleAddFilter(selected_idx);
    });
  });
  //2.5-(4,5) footer 모달 저장하기 닫기 
  const addSaveBtn = document.querySelectorAll(".add_save_btn")[0];
  const addCloseBtn = document.querySelectorAll(".add_close_btn")[0];
  addSaveBtn.addEventListener("click", function () {
    const select = document.querySelector("#category");
    const option = select.options[select.selectedIndex].value;
    let price = document.querySelector("#add_price").value;
    const data = document.querySelector("#add_data").value;
    price = selected_idx === 1 ? -price : +price; //지출일 경우, 가격 음수처리

    historyList.push({
      id: historyList.length,
      category: option,
      description: data,
      price: price,
    });

    render();
    alert("저장성공>,<");
  });
  addCloseBtn.addEventListener("click", function () {
    addList.style.display = "none";//팝업 형식
  });

}
const footerBtn = document.querySelector("footer>button");
footerBtn.addEventListener("click", handleAddSheet);

// 실제 렌더링
function render() {
  summary_element();
  document.querySelector("ul").innerHTML = ""; // 리스트 초기화

  historyList.forEach((el) => {
    list_element(el.id, el.category, el.description, el.price);
  });
}

// 실제 렌더링
render();