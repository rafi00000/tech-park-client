import axios from "axios";
import { useEffect, useState } from "react";

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:5000/feedback")
        .then(res => {
            setFeedbacks(res.data);
        })
    }, [])

    console.log(feedbacks);

    return (
        <div className="min-h-screen ">
            <h1 className="text-center text-4xl font-bold">Feedbacks</h1>
            {/* feedback section container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5" >
                {
                    feedbacks.map((feedback) => <div className="border p-5" key={feedback._id}>
                        <p className="text-xl">Name: {feedback.name}</p>
                        <small>Email: {feedback.email}</small>
                        <p className="text-justify">{feedback.message.length < 120 || feedback.message.slice(0, 120)}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feedbacks;