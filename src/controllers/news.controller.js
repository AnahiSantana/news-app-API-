const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getAll(req, res) {
    
    const q = req.query.q;
    let url;
    if(!req.query.source){
      url = `${apiUrl}everything?q=${q}&apiKey=${apiKey}`;
    }else{
      const source =req.query.source;
      url = `${apiUrl}everything?q=${q}&sources=${source}&apiKey=${apiKey}`;
    }

    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Everything Failed!')
      res.end();
    })
  }

  getTopHeadlines(req, res){
  const pais = req.params.pais || 'mx';
  const url = `${apiUrl}top-headlines?country=${pais}&apiKey=${apiKey}`;
  
  axios.get(url).then(response => {
    if(!req.params.pais){
      res.redirect('/api/topHeadlines/mx');
    }
    res.send(response.data.articles);
  }).catch(e => {
    res.send('Oops!Top Headlines Failed!')
    res.end();
  })
}

  getSources(req, res){
    const url = `${apiUrl}sources?apiKey=${apiKey}`;

    axios.get(url).then(response => {
      res.send(response.data.sources);
    }).catch(e => {
      res.send('Oops!Sources Failed!')
      res.end();
    })
  }

  
}


module.exports = new News();

