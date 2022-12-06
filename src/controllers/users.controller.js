import Users from '../models/Users';

export const getUsers = async (req, res) => {

}

export const getUserByNickName = async (req, res) => {

}

export const createUser = async (req, res) => {
    try {
        const { name, nickname, email } = req.body;
        const newUser = new Users({name, nickname, email});
        const savedUser = await newUser.save();
        return res.status(201).json({ok:true, data:savedUser})
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:false, data:error})
    }
}

export const editUser = async (req, res) => {

}

export const deleteUser = async (req, res) => {

}

async function upload(req) {
    let result
    try {
        result = await streamUploadImg(req);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}