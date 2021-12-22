

const Cypto = ({info}) => {
    return (
     <>
      {info.map((Show) => (
        <li>
        <h3>{Show.rank}</h3>
         <h3>{Show.name}</h3>
         <h3>{Show.symbol}</h3>
         <h3>{Show.price_btc}</h3>
         <h3>{Show.price_usd}</h3>
         </li>
    ))}
     
     
     </>
    );
}


export default Cypto
