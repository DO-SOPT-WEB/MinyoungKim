import ChoosePage from "./components/ChoosePage"
import {useState} from "react";
import ChooseFavorPage from "./components/ChooseFavor";
import ChooseRandomPage from "./components/ChooseRandom"
import FavorDetailsPage from "./components/FavorDetails";
import DishDetailsPage from "./components/DishDetails";
import SoupDetailsPage from "./components/SoupDetails";
import ShowFavorPage from "./components/ShowFavor";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import ShowRandomPage from "./components/ShowRandom";

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

  const [favor, setFavor]=useState(10);
  const KrFavor=()=>{
    setFavor(0);
  }
  const JpnFavor=()=>{
    setFavor(1);
  }
  const UsFavor=()=>{
    setFavor(2);
  }

  const [dish, setDish]=useState(10);
  const RiceDish=()=>{
    setDish(0);
  }
  const NoodleDish=()=>{
    setDish(1);
  }
  const MeatFishDish=()=>{
    setDish(2);
  }

  const [soup, setSoup]=useState(10);
  const YesSoup=()=>{
    setSoup(0);
  }
  const NoSoup=()=>{
    setSoup(1);
  }
  
  return (
    <>
      <GlobalStyle/>
      <h1>오늘의 점심 메뉴를 추천합니다 '-'</h1>
      {favorKey===0 && randomKey===0 &&<ChoosePage ChooseFavor={ChooseFavor} ChooseRandom={ChooseRandom}/>}

      {favorKey===1 &&<ChooseFavorPage FavorDetails={FavorDetails}/>}
      {favorKey===2 &&<FavorDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey} KrFavor={KrFavor} JpnFavor={JpnFavor} UsFavor={UsFavor}/>}
      {favorKey===3 &&<DishDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey} RiceDish={RiceDish} NoodleDish={NoodleDish} MeatFishDish={MeatFishDish}/>}
      {favorKey===4 &&<SoupDetailsPage BackButtonKey={BackButtonKey} ForthButtonKey={ForthButtonKey} YesSoup={YesSoup} NoSoup={NoSoup}/>}
      {favorKey===5 &&<ShowFavorPage ResetFavorButton={ResetFavorButton} selectedFavor={favor} selectedDish={dish} selectedSoup={soup}/>}

      {randomKey===1 &&<ChooseRandomPage RandomDetails={RandomDetails}/>}
      {randomKey===2 &&<ShowRandomPage ResetRandomButton={ResetRandomButton}/>}

      <div>

      </div>
      
    </>
  )
}

export default App