import { Table, Container } from "react-bootstrap";
// import { Operation } from "../operationsbox/operation";

const firstLook = [
  {
    serialNumber: "1",
    date: "6-9-2022",
    description: "new project start",
    creditNumber: 7889,
    debitNumber: 6189,
  },
  {
    serialNumber: "2",
    date: "9-9-2022",
    description: "new project start very soon",
    creditNumber: 5889,
    debitNumber: 4189,
  },

  {
    serialNumber: "3",
    date: "2-9-2022",
    description: "new project start qabout to start",
    creditNumber: 1889,
    debitNumber: 3189,
  },
];
function NewProject() {
  const clickHandler = () => {
    alert("types");
  };

  // const totalNew = Operation(creditNumber, debitNumber);
  return (
    <div className="newproject">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>serialNumber</th>
              <th>date</th>
              <th>description</th>
              <th>creditNumber</th>
              <th>debitNumber</th>
            </tr>
          </thead>

          <tbody>
            {firstLook.map((project) => {
              const {
                serialNumber,
                date,
                description,
                creditNumber,
                debitNumber,
              } = project;
              return (
                <tr>
                  <td>{serialNumber}</td>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>{creditNumber}</td>
                  <td>{debitNumber}</td>
                </tr>
              );
            })}
            <button type="button" onClick={clickHandler}>
              {" "}
              newrow{" "}
            </button>
          </tbody>
        </Table>
      </Container>
      {
        //<Operation />
      }
    </div>
  );
}

export default NewProject;

export function Newoperation(props) {
  const { serialNumber, date, creditNumber, debitNumber } = props;
  // const  creditNumber = 7889
  //  const debitNumber = 4189

  return (
    <div>
      {" "}
      {serialNumber}
      {date}
      {creditNumber}
      {debitNumber}{" "}
    </div>
  );
}
