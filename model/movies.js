var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var reviewSchema=new Schema({

reviewer_name:{type:String,required:true},

rating:{type:Number,min:1,max:5,required:true},

dateof_review:{type:Date,required:true},

comments:{type:String}

});



var movieSchema = new Schema({

title:{type:String,required:true,unique:true},

year:{type:String,required:true},

runtime:{type:String,required:true},

genre:{type:Array,required:true},

actors:{type:Array,required:true},

directors:{type:Array,required:true},

writers:{type:Array,required:false},

music:{type:Array,required:false},

singers:{type:Array,required:false},

description:{type:String,required:true},

language:{type:Array,required:false},

awards:{type:Array,required:false},

poster:{type:String,required:true},

trailer:{type:String,required:true},

production:{type:String,required:true},

reviews:[reviewSchema]

});



module.exports=mongoose.model('Movie',movieSchema)