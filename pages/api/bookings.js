import bookingsController from "../../controllers/bookingsController"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const booking = await bookingsController.create(req.body)
    res.status(200).redirect(`../profile/1/bookings`)
  }

  return res.status(400).json({ msg: "incorrect method"})
}