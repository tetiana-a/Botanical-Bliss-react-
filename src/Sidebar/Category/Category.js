import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Other"
          title="Other"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Random"
          title="Random"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="In box"
          title="In box"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Original"
          title="Original"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;