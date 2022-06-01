import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';


function App() {

  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

  let fData = data.filter((d,i) => d.status === true);

  let ans = data.reduce((acc, d, i) => acc + d.bonus + d.salary, 0)

  console.log(fData);

  console.log(ans);

  return (
    <table border="1" align="center" cellPadding="10" cellspacing="0">
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Salary</td>
        <td>Bonus</td>
        <td>Status</td>
        <td>Total=Bonus+Salary</td>
      </tr>
      {
        fData.map((d,i) => {
          let {name, age, salary, bonus, status} = d
          return(

            <tr key={i}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary}</td>
              <td>{bonus}</td>
              <td>{status.toString()}</td>
              <td>{d.salary+d.bonus}</td>
            </tr>
          )
        }) 
      }
      {
        fData.map((d,i) => {
          let {name, age, salary, bonus, status} = d
          return(

            <tr key={i}>
              {i === 0 ? <td align='center' colSpan={6}>Total = {ans}</td> : null}
            </tr>
          )
        }) 
      }
    </table>
  );
}

export default App;
