const express = require('express');
const router = express.Router();
const math = require('mathjs');

router.get('/newtonapi', (req, res) => {
    res.send('testget');
});

router.post('/newtonapi', (req, res) => {
    console.log('this is')
    var x = parseFloat(req.body.x);
          
          var check = parseFloat(0.000000);
          var eq = req.body.equation;
          const code = math.compile(eq);
          var diff = eq;
          var result1 = [];
          var i = 1; 
          diffX = math.derivative(diff,'x');
          console.log(diffX)
          do{

            let fx = {
                x: x
            };
            var xreal = diffX.evaluate(fx);
            console.log(xreal)
            var xnew = x-(code.evaluate(fx)/xreal);
                       

            check = math.abs((xnew - x)/xnew)*100;
            x = xnew;

            result1.push({
                'Iteration' : i,
                'xnew' : xnew,
                'Error': check,
            });
            i++;
        }while(error > 0.000001 && i<50);

        res.json({
            result:result1
        })
    
    });
    
    
    
    module.exports = router;