const serviceCrown2Controller_16 = require ('./crown2Controller_16');

exports.getCategories = async (req, res) => {
    try{
        let results = await serviceCrown2Controller_16.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_16',{
            data: results,
            title: 'Crown2_16',
            name: 'Chen Yin',
            id: `209410116`
        });
    }catch(err){
        console.log('crow2Controller getCategories', err);
    }
}