// controllers/apiController.js
exports.getData = (req, res) => {
    res.json({ message: 'Data fetched successfully!', data: [] });
  };
  
  exports.postData = (req, res) => {
    const { data } = req.body;
    res.json({ message: 'Data received!', data });
  };