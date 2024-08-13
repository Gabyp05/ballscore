import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/callsToAPI";

const gamePkResult = () => {
    const { gamePk } = useParams();

    // const fetchGameStatus = async (gamePkList) => {
    //   try {
    //     let data = await fetchData(`mlb/games?gamePk=${gamePk}`);
    //     if (data.body.status) {
    //       data = Object.values(data.body.status);
    //       console.log(data);
    //     }
    //    console.log(data)
    //   } catch (error) {
    //     console.error('Error al obtener el estatus:', error);
    //   }
    // };

    // fetchGameStatus();

  return (
    <div>gamePkResult</div>
  )
}

export default gamePkResult