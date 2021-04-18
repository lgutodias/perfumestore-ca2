var Perfume = require('./models/perfume')

exports.createPerfume = function(req, res) { 
    var newperfume = new Perfume(req.body);
    newperfume.save(function (err, perfume) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(perfume); 
});
};

exports.getPerfumes = function(req, res) {
  Perfume.find({}, function (err, perfumes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(perfumes)
  });
};



// exports.getWorld = function(req, res){
//     res.json({result: 'Hello World from Controller'});
// };

// exports.getWorldParams = function(req, res) {
//     res.json({message: 'Hello BScBest!', data: [
//         req.params.foo,
//         req.params.bar
//     ]});
// };

// exports.postWorld = function(req, res) {
//     res.json({result: 'Post was sent', data: req.body});
// };