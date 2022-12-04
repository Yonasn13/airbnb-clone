import flatsController from "../../controllers/flatsController"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const booking = await flatsController.create(req.body)
    res.status(200).redirect(`/profile/1/flats`)
  }

  return res.status(400).json({ msg: "incorrect method"})
}