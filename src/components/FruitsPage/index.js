import { useSelector } from "react-redux";
import { Container, Div } from "./styles";

export default function FruitsPage() {
    const fruits = useSelector((state)=>state.fruits)
    return (
        <Container>
            {fruits.map(fruit =>(
                <Div>
                    <p key={fruit}>{fruit}</p>
                </Div>
            ))}
        </Container>
    )
}
