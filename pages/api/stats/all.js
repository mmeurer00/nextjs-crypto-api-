import nc from "next-connect";
import coinsList from "../../../data/index";

const handler = nc().get((req, res) => {
  res.json(coinsList);
});

export default handler;
