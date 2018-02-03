const mongoose = require('mongoose');



const CreatetokenSchema = mongoose.Schema({
	token_name:{
		type: String,
		required: true
	},
	token_symbol:{
		type: String,
		required: true
	},
	decimal:{
		type: String,
		required: true
	}
});

const Createtoken = module.exports = mongoose.model('Createtoken',CreatetokenSchema);