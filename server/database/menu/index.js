const mongoose = require('mongoose');
const MenuSchema =  new mongoose.Schema({
   menus:[{
       name:{type:String, required:true},
       items: [{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Foods'
       }]
   }],
    recommended: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Foods',
        unique:true
    }]
});
export const MenuModal = mongoose.model('Menu', MenuSchema);