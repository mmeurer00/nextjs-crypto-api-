import nc from "next-connect";
import coinsList from "../../../../data/index";

const getCoinById = (id) => {
  return coinsList.find((coin) => coin.id.toLowerCase() === id.toLowerCase());
};

const handler = nc().get((req, res) => {
  const coinDetails = getCoinById(req.query.id);
  res.json(coinDetails);
});

export default handler;
