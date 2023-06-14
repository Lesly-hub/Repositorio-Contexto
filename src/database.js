const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://jossale04:jossale04@optimista.96uxl.mongodb.net/abarrotesdb?retryWrites=true&w=majority")
.then(db=>console.log("Mongodb connected..."))
.catch(err=>console.error(err));