const express = require('express');
const app = express();
const router = express.Router();
const data = require('../data.json'); 
const {projects} = data;

router.get('/', (req, res) => {
  res.redirect(`/project/0`);
});

router.get('/:id', (req, res) => {
  let {id} = req.params;
  let ids = [];
  projects.forEach(project => ids.push(project.id.toString()));

 if (ids.indexOf(id) !== -1) {
    res.render('project', {
      projectName: projects[`${id}`].project_name,
      description: projects[`${id}`].description,
      imgOne: projects[`${id}`].image_url[1],
      imgTwo: projects[`${id}`].image_url[2],
      gitHub: projects[`${id}`].github_link,
      technologies: projects[`${id}`].technologies
    });
  } else {
    res.redirect(`/`);
  }
  
});


module.exports = router;