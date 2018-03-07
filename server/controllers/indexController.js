'use strict'

  var getAllData = (req,res)=>{
  let result = {
                error: false,
                data: [
                  {
                    name: "Bill Gates",
                    age: 61,
                    company: "Microsoft"
                  },
                  {
                    name: "Steve Jobs",
                    age: 56,
                    company: "Apple"
                  },
                  {
                    name: "Gabe Newell",
                    age: 53,
                    company: "Valve"
                  }
                ]
              }
    // console.log(result);
    res.send(result);
  }

module.exports = {
  getAllData
}
