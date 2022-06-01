import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';


function App() {

  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  let fData = data.filter((d,i) => d.status === true && d.expiry >= 2022);

  let ans = data.reduce((acc, d, i) => acc + d.price, 0)

  console.log(fData);

  console.log(ans);

  return (
    <table border="1" align="center" cellPadding="10" cellspacing="0">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Expiry</td>
        <td>Status</td>
        <td>Total</td>
      </tr>
      {
        fData.map((d,i) => {
          let {id, name, quantity, price, expiry, status} = d
          return(

            <tr key={i}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{expiry}</td>
              <td>{status.toString()}</td>
              {i === 0 ? <td align='center' rowSpan={2}>{ans}</td> : null}
            </tr>
          )
        }) 
      }
    </table>
  );
}

export default App;
