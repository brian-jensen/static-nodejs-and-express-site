const express = require('express');
const router = express.Router();
const data = require('../data.json'); 
const {projects} = data;

// If /project with no id param is entered into the browser, redirect browser to /project/0
router.get('/', (req, res) => {
  res.redirect(`/project/0`);
});

router.get('/:id', (req, res) => {
  let {id} = req.params;
  let ids = [];
  projects.forEach(project => ids.push(project.id.toString()));
  // If a valid id param is appended to the project url; render the page for the project
  if (ids.indexOf(id) !== -1) {
    res.render('project', {
      projectName: projects[`${id}`].project_name,
      description: projects[`${id}`].description,
      imgOne: projects[`${id}`].image_url[1],
      imgTwo: projects[`${id}`].image_url[2],
      live: projects[`${id}`].live_link,
      gitHub: projects[`${id}`].github_link,
      technologies: projects[`${id}`].technologies
    });
  // If an invalid id param is appended to the project url; redirect browser to home route
  } else {
    res.redirect(`/`);
  }
  
});

module.exports = router;