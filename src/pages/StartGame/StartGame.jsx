import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/textInputForm/TextInputFormContainer";

function StartGame(){

    const navigate = useNavigate();

    // this function will help to navigate the page
    function handleSubmit(){
        navigate('/play')
    }
    return (
        <div>
            <h1>Start Game</h1>
             <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>
    )
}
export default StartGame;