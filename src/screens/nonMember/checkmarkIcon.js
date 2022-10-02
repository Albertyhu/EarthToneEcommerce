import { FiCheckCircle } from "react-icons/fi";

export const ValidIcon = () => {
    return (
        <FiCheckCircle style={{
            padding: "5px",
            color: "#25963E", 
            width: "20px",
            height: "20px",
        }} /> 
    )
}

export const InvalidIcon = () => {
    return (
        <FiCheckCircle style={{
            padding: "5px",
            color: "#bfbfbf",
            width: "20px",
            height: "20px",
        }} /> 
        )
}