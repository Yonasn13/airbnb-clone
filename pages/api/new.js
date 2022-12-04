import flatsController from "../../controllers/flatsController";
export default async function hendler(req, res) {
    const{address, price, imageUrl} = req.body
    console.log('imageUrl', imageUrl)
    const flat = await flatsController.create({
        address, price, imageUrl
    })
    res.ststus(200).redirect(`/flats/${flat.id}`)
}