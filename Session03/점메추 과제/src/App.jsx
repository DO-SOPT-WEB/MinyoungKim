import ChoosePage from "./components/ChoosePage"
import {useState} from "react";
import ChooseFavorPage from "./components/ChooseFavor";
import ChooseRandomPage from "./components/ChooseRandom"
import FavorDetailsPage from "./components/FavorDetails";
import DishDetailsPage from "./components/DishDetails";
import SoupDetailsPage from "./components/SoupDetails";
import RamenFavorPage from "./components/RamenFavor";
import ShowRandomPage from "./components/ShowRandom";
import styled from "styled-components";
import SobaFavorPage from "./components/SobaFavor";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const[favorKey,setFavorKey] = useState(0);

  const ChooseFavor=()=>{
    setFavorKey(1);
  }
  const FavorDetails=()=>{
    setFavorKey(2);
  }
  const BackButtonKey=()=>{
    setFavorKey(favorKey-1);
  }
  const ForthButtonKey=()=>{
    setFavorKey(favorKey+1);
  }
  const ResetFavorButton=()=>{
    setFavorKey(1);
  }

  const[randomKey,setRandomKey] = useState(0);

  const ChooseRandom=()=>{
    setRandomKey(1);
  }
  const RandomDetails=()=>{
    setRandomKey(2);
  }

  const ResetRandomButton=()=>{
    setRandomKey(1);
  }

  const[yesNoSoup, setYesNoSoup]=useState(0);

  const selectYesSoup=()=>{
    setYesNoSoup(1);
  }
  const selectNoSoup=()=>{
    setYesNoSoup(2);
  }
  return (
    <>
      <GlobalStyle/>
      <h1>오늘의 점심 메뉴를 추천합니다 '-'</h1>
      {favorKey===0 && randomKey===0 &&<ChoosePage ChooseFavor={ChooseFavor} ChooseRandom={ChooseRandom}/>}

      {favorKey===1 &&<ChooseFavorPage FavorDetails={FavorDetails}/>}
      {favorKey===2 &&<FavorDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey}/>}
      {favorKey===3 &&<DishDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey}/>}
      {favorKey===4 &&<SoupDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey} selectYesSoup={selectYesSoup} selectNoSoup={selectNoSoup}/>}
      {favorKey===5 && yesNoSoup===1 &&<RamenFavorPage ResetFavorButton={ResetFavorButton}/>}
      {favorKey===5 && yesNoSoup===2 &&<SobaFavorPage ResetFavorButton={ResetFavorButton}/>}

      {randomKey===1 &&<ChooseRandomPage RandomDetails={RandomDetails}/>}
      {randomKey===2 &&<ShowRandomPage ResetRandomButton={ResetRandomButton}/>}

      <div>

      </div>
      
    </>
  )
}

export default App