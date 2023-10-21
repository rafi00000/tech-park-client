import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Ooh! Wrong Destination!!!</h2>
            <button className="btn btn-outline" onClick={() => navigate('/')}>Go Home</button>
        </div>
        </div>
        
    );
};

export default ErrorPage;