export default async function CoinSSRMarket() {
    const API_KEY = "adf70e00ec9321088c2e194c393041c2";
    const res = await fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`, {
      next: { revalidate: 30 }  ,
    });
    const data = await res.json();
  
    return (
      <div className="container">
        <h1>Crypto currency rates</h1>
        <ul className="coin-data">
          <li>
            <span>BTC:</span> <span>{data.rates.BTC}</span>
          </li>
          <li>
            <span>BNB:</span> <span>{data.rates.BNB}</span>
          </li>
          <li>
            <span>DCT:</span> <span>{data.rates.DCT}</span>
          </li>
          <li>
            <span>XVG:</span> <span>{data.rates.XVG}</span>
          </li>
          <li>
            <span>OMNI:</span> <span>{data.rates.OMNI}</span>
          </li>
          <li>
            <span>INT:</span> <span>{data.rates.INT}</span>
          </li>
          <li>
            <span>FUTC:</span> <span>{data.rates.FUTC}</span>
          </li>
          <li>
            <span>CTO:</span> <span>{data.rates.CTO}</span>
          </li>
          <li>
            <span>CAS:</span> <span>{data.rates.CAS}</span>
          </li>
          <li>
            <span>BTS:</span> <span>{data.rates.BTS}</span>
          </li>
        </ul>
      </div>
    );
}