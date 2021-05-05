// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require("./data.json");
export default (req, res) => {
  try {
    const { slug } = req.query;
    const evt = events.filter((event) => event.slug === slug);
    if (req.method === "GET") {
      res.status(200).json(evt);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({
        message: `Method ${req.method} not allowed`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};
