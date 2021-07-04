const { events } = require("./data.json");

// export default (req, res) => {
//   res.status(200).json(events);
// };

export const getAllEvents = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default getAllEvents;
