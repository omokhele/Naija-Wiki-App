const Detail = require('../models/detail');

const createDetail = async (req, res) => {
    try {
        const detail = await new Detail(req.body)
        await detail.save()
        return res.status(201).json({
            detail,
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getDetails = async (req, res) => {
    try{
        const details = await Detail.find()
        return res.status(200).json({details})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const detail = await Detail.findById(id)
        if (detail) {
            return res.status(200).json({detail});
        }
        return res.status(404).send('Detail with the specified ID does not exist')
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const getDetail = async (req, res) => {
    try {    
        let detail = await Detail.find(
            {
               "$or":[
                    {book:{$regex:req.params.key}}
                ]
            }
        )
        if (detail) {
            return res.status(200).json({detail});
        }
        return res.status(404).send('Detail with the specified name does not exist')
    }catch (error) {
        return res.status(500).send(error.message)
    }
   
}

const updateDetail = (req, res) => {
    try{
        const { id } = req.params;
        Detail.findByIdAndUpdate(id, req.body, { new: true }, (err, detail) => {
            if (error) {
                res.status(500).send(error);
            }
            if (!detail) {
                res.status(500).send('Detail not found');
            }
            return res.status(200).json(detail);
        })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteDetail = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Detail.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send('Detail deleted');
        }
        throw new Error('Detail not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createDetail,
    getDetails,
    getDetailById,
    getDetail,
    updateDetail,
    deleteDetail
}