const postModel = require("../models/postModel");

const getAllposts = async (req, res) => {
    try {
        const posts = await postModel.getposts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getpost = async (req, res) => {
    try {
        const post = await postModel.getpostById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo." });
    }
};

const createpost = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const newpost = await postModel.createpost(name, house_id);
        res.status(201).json(newpost);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo." });
    }
};

const deletepost = async (req, res) => {
    try {
        const message = await postModel.deletepost(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar bruxo." });
    }
};

const updatepost = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updatepost = await postModel.updatepost(req.params.id, name, house_id);
        if (!updatepost) {
            return res.status(404).json({ message: "bruxo não encontrado." });
        }
        res.json(updatepost);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar bruxo." });
    }
};

module.exports = { getAllposts, getpost, createpost, deletepost, updatepost };