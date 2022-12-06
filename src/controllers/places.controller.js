import Places from '../models/Places';

export const getPlaces = async (req, res) => {
    try {
        const places = await Places.find().sort({ createdAt: -1 });
        res.status(200).json({ ok: true, data: places });
    } catch (error) {
        res.status(500).json({ ok: true, data: error })
    }
}

export const getPlacesById = async (req, res) => {

}

export const createPlace = async (req, res) => {
    try {
        const { name, description, location } = req.body;
        const newPlace = new Places({name, description, location});
        const savedPlace = await newPlace.save();
        return res.status(201).json({ok:true, data:savedPlace})
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:false, data:error})
    }
}

export const editPlace = async (req, res) => {

}

export const deletePlace = async (req, res) => {

}