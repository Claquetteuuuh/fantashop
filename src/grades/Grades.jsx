import React, { useState ,useEffect} from "react";
import GradeCard from '../components/GradeCard/GradeCard';
import './grades.scss';

const Grades = ({accessToken}) => {
    const [user, setUser] = useState(undefined);
    if (!accessToken) {
        window.location = "/mustconnect";
      }
      useEffect(() => {
        fetch("https://api.fantashop.fr/users/getuser/" + accessToken).then((res) => res.json()).then(data => {
            setUser(data)
          })
      },[])
    return (
        <main className='grades__container'>
            <img src="./images/grades_banner.png" alt="banner" style={{ marginBottom: "20px", width: "100%" }} />
            <div className="grades__content">
                <div className="grades__content-grid">
                    <GradeCard user={user}/>
                </div>
            </div>
        </main>
    );
};

export default Grades;