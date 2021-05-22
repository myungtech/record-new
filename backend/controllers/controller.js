const RecordModel = require("../models/recordModel");
const mongoose = require('mongoose');

const getPosts = async (req, res) => {
    console.log('****getPosts controller**** ');
    try {

        // DB에서 가져와
        const postMessage = await RecordModel.find();
        // console.log(`getPosts 가져와라 ${postMessage}`);

        res.status(200).json(postMessage);

    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

const createPosts = async (req, res) => {
    console.log('****createPosts controller**** ');
    const post = req.body;
    const newPost = new RecordModel(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updatePost = async (req, res) => {
    console.log('****updatePost controller**** ');
    const { id } = req.params; // 주소에 포함된 id 변수  가져오기
    const { title, message, creator, selectedFile, tags } = req.body;
    // console.log({ title, message, creator, selectedFile, tags });

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`그런 아이디 형식이 없다!>> ${id}`);

    }
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await RecordModel.findByIdAndUpdate(id, updatedPost, { new: true });

    console.log(`updatedPost 구역 ${updatedPost} >> ${id}`);

    res.json(updatedPost);
}

const deletePost = async (req, res) => {
    console.log('****deletePost controller**** ');

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`그런 아이디 형식이 없다!>> ${id}`);
    }
    await RecordModel.findByIdAndRemove(id);

    res.json({ message: '데이터를 삭제했습니다.' });
}

const starPost = async (req, res) => {
    console.log('****starPost controller**** ');
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    // const post = await RecordModel.findById(id);

    const updatedPost = await RecordModel.findByIdAndUpdate(id, req.body, { new: true });

    res.json(updatedPost);
}


module.exports = {
    getPosts,
    createPosts,
    updatePost,
    deletePost,
    starPost
};