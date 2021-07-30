import nc from "next-connect";
import coinsList from "../../../data/index";

const getCoinByQuery = (string) => {
  const result = coinsList.filter(
    (coin) =>
      coin.id.toLowerCase().toString().indexOf(string.toLowerCase()) !== -1
  );
  if (result === undefined) return [];
  return result;
};

const handler = nc().get((req, res) => {
  const result = getCoinByQuery(req.query.id);
  res.json(result);
});

export default handler;
