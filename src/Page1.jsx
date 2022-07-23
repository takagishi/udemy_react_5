import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const navitgation = useNavigate();

  const onClickDetailA = () => navitgation("/page1/detailA");
  return (
    <div>
      <h1>Page1</h1>
      <Link to="/page1/detailA" state={{ state: arr }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
