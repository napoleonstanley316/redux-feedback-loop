import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import axios from 'axios';

function Review() {
  const history = useHistory();
  const feedback = useSelector((state) => state.feedback);
  const dispatch = useDispatch

  const handleClick = () => {
    history.push("/finished");
     axios.post("/feedback", feedback)
      .then((response) => {
        
      })
      .catch((err) => {
          alert('IT IS BUSTED!')
      });
  };

  return (
    <>
      <h2>Your Feedback</h2>
      <h5>Feeling: {feedback.feeling}</h5>
      <h5>Content: {feedback.content}</h5>
      <h5>Support: {feedback.support}</h5>
      <h5>Comments: {feedback.comments}</h5>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}


export default Review;