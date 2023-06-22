

const index = (req, res) => {

    res.status(200).json({
        message: "it worked"
    })
}

const create = (req, res) => {

    
    res.status(200).json({
        message: req.body
    })
}


const show = (req, res) => {
    res.status(200).json({
        message: "it worked"
    })
}


const update = (req, res) => {
    res.status(200).json({
        message: "it worked"
    })
}


const destroy = (req, res) => {
    res.status(200).json({
        message: "it worked"
    })
}

module.exports = {
    index,
    create
}

