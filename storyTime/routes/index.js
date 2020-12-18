const express = require('express');
const storybook = require('../models/storybook');
const router = express.Router();

// GET home page.
router.get('/', function (req, res) {
  let prelogue = storybook.storyLine.find(story => {
    return story.storyPart === 'prelogue';
  });
  res.render('index', { prelogue });
});

//GET beginning 
router.get('/beginning', function (req, res) {
  let chapterOne = storybook.storyLine.find(story => {
    return story.storyPart === 'chapterOne';
  });
  res.render('beginning', { chapterOne });
});


//GET middle 
router.get('/middle', function (req, res) {
  let chapterTwo = storybook.storyLine.find(story => {
    return story.storyPart === 'chapterTwo';
  });
  res.render('middle', { chapterTwo });
});

//GET end 
router.get('/end', function (req, res) {
  let theEnd = storybook.storyLine.find(story => {
    return story.storyPart === 'theEnd';
  });
  res.render('end', { theEnd });
})

module.exports = router;
