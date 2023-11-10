# 리액트에 대하여 'ㅅ'

### 🐥 컴포넌트 분리하기 

  - <h4>components 폴더</h4>
    <h5>재사용 가능한 작은 단위의 **컴포넌트** 저장하는 폴더</h5>
    <h5>버튼, 인풋박스, 모달 등의 컴포넌트</h5>
  - <h4>pages 폴더</h4>
    <h5>페이지 단위의 컴포넌트를 저장하는 폴더</h5>
    <h5>로그인 페이지, 회원가입 페잊, 대시보드 페이지</h5> 
    ![relation](https://github.com/DO-SOPT-WEB/MinyoungKim/assets/120544840/671fbf5a-c358-427e-82ff-82b25f082203)

  
### 🍏 Props Drilling이란?

  - <h4>리액트는 단방향 데이터 흐름</h4>
    <h5>상위 컴포넌트의 state가 변화되면 하위 컴포넌트 props로 상태를 넘긴다</h5>
    <h5>전달할 props가 많다면 코드를 읽을 때 해당 props들을 추적하기 힘들다</h5>
    <h5>상태가 여러곳에 걸쳐있어 의존된 컴포넌트들이 많다면? Props Drilling 발생!</h5>
  - <h4>children 사용해보기</h4>
    <h5>{children}으로 전달해서 하나의 컴포넌트에서 관리할 수 있다</h5>
    

### 🍎 좋은 상태 관리
  - <h4>전역 상태관리 라이브러리 사용</h4>
    <h5>redux, MobX, recoil 등을 사용하여 해당 값이 필요한 컴포넌트에서 직접 불러서 사용</h5>
  - <h4>응집성 향상</h4>
    <h5>state는 연관 컴포넌트들과 가까이 배치</h5>
    

### ⛱️ 렌더링 최적화
  - <h4>불필요한 코드 제거</h4>
    <h5>사용하지 않는 import나 로직 삭제</h5>
  - <h4>default import 사용하기</h4>
  - <h4>useCallback</h4>
    <h5>React 컴포넌트가 한 화면에 렌더링 되는게 많을수록 최종 렌더링 시간이 길다</h5>
    <h5>컴포넌트가 렌더링 될 때 마다 function은 재할당이 되기 때문에 useEffect(..., [callback]) 에서 사용한 callback은 항상 변경되고, useEffect는 callback이 변경되었기 때문에 다시 실행된다. 이런 경우를 막기위해 useCallback을 사용</h5>
