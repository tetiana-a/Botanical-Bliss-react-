import Button from "../components/Button";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Form 1" title="Form 1" />
          <Button onClickHandler={handleClick} value="Form 2" title="Form 2" />
          <Button onClickHandler={handleClick} value="Form 3" title="Form 3" />
          <Button onClickHandler={handleClick} value="Form 4" title="Form 4" />
        </div>
      </div>
    </>
  );
};

export default Recommended;