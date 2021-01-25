import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
  const history = useHistory();
  const feedback = useSelector((state) => state.feedback);

  const handleClick = () => {
    axios
      .post("/feedback", feedback)
      .then((response) => {
        history.push("/finished");
      })
      .catch((err) => {
          alert('IT IS BUSTED!')
      });
  };

  return (
    <>
      <h2>Your Feedback</h2>
      <h5>Feeling: {feedback.feeling}</h5>
      <h5>Feeling: {feedback.content}</h5>
      <h5>Feeling: {feedback.support}</h5>
      <h5>Feeling: {feedback.comments}</h5>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}


export default Review;