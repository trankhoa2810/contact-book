exports.create = async (req, res) => {
    res.send({message: "creat handler" });
};

exports.findAll = async (req, res) => {
    res.send({message: "findAll handler" });
};

exports.findOne = async (req, res) => {
    res.send({message: "findOne handler" })
};

exports.update = async (res, req) => {
    res.send({message: "update handler" });
};

exports.delete = async (res, req) => {
    res.send({message: "delete handler" });
};

exports.deleteAll = async (res, req) => {
    res.send({message: "deleteAll handler" });
};

exports.findAllFavorite = async (res, req) => {
    res.send({message: "findAllFavorite handler" });
};