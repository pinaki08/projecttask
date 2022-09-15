import "./App.css";
import NewProject from "./Component/Gridproject";
function projecttable(params) {
  return (
    <div>
      <NewProject />
    </div>
  );
}

export default projecttable;

export function newoperation(props) {
  // const { serialNumber, date, creditNumber, debitNumber } = props;
  const  creditNumber = 7889
   const debitNumber = 4189
   const total  = creditNumber + debitNumber

  // console.log(total);
  return (
    <div>
      {" "}
      {props.serialNumber}
      {props.date}
      {props.creditNumber}
      {props.debitNumber}
      {props.total}{" "}
    </div>
  );
}
