const category_16 = require('../models/Category_16');

exports.getCategories = async (req, res) => {
    try{
        return await category_16.fetchALL();

    }catch(err){
        console.log('',err);
        
    }
}