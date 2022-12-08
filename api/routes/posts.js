const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Books");

//ADD BOOK
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE BOOK
router.put("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE BOOK
router.delete("/:id", async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      try {
        await post.delete();
        res.status(200).json("Book has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("Book in not found !");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
// router.get("/", async (req, res) => {
//   const id = req.query.id;
//   try {
//     const post = await Post.findById(id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET POST
router.get("/update", async (req, res) => {
  const id = req.query.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
    // console.log(post.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    try {
      posts = await Post.find();
      if(posts){
        res.status(200).json(posts);
      }else{
        res.status(500).json("no posts found");
      }
      
    } catch (err) {
      res.status(500).json(err);
    }


});

module.exports = router;
