import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://ups:ups2020@cluster0.xioyc.mongodb.net/companydb?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Db esta conectada'))
    .catch(error => console.log(error))