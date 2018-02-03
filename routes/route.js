const express = require('express');
const router = express.Router();


const Createtoken = require('../models/createtokens')

//retrieving data
router.get('/createtoken',(req, res, next)=>{
	// res.send('Retrieving the contact list');
	Createtoken.find(function(err,createtokens){
		res.json(createtokens);
	})
});

//add createtoken
router.post('/createtoken',(req, res, next)=>{
	//logic for creating a token
	let newCreatetoken = new Createtoken({
		token_name: req.body.token_name,
		token_symbol: req.body.token_symbol,
		decimal: req.body.decimal
	});

	newCreatetoken.save((err,createtoken)=>{
		if(err)
		{
			res.json({msg: 'Failed to create new token'});
		}
		else{
			res.json({msg: 'New token added successfully'});
		}
	});
});

//delete createtoken
router.delete('/createtoken/:id',(req, res, next)=>{
	//logic for deleting a token
	Createtoken.remove({_id: req.params.id},function(err,result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});




module.exports = router;