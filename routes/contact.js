const express = require('express')

const ContactRouter = express.Router()
const Contact = require('../model/Contact');


//get route 

ContactRouter.get('/',async(req,res)=>{
try{
const Contacts = await Contact.find()
res.status(200).send({Contacts,msg:'list of ocntact'})
}catch{
res.status(500).send('could not get contacts')
}
})

//delet routes 

ContactRouter.delete('/:id',async (req,res)=>{
    try{
        const{id} = req.params
        const delContact = await Contact.findByIdAndDelete(id)
res.status(200).send('could delet it ')
    }catch(err){
res.status(500).send('could not delete')
    }
})


//post route 

ContactRouter.post('/add',async(req,res)=>{
    try{
 const NewContact= new Contact(req.body)
 await NewContact.save()
res.status(200).send({NewContact,msg:"you did it the user is added "})
    }catch(err){
        res.status(500).send('could not add the contact')
    }
})

//put route 


ContactRouter.put('/:id',async(req,res)=>{
    try{
        const {id}= req.params
        const updatedUser = await Contact.findByIdAndUpdate(id,{$set:req.body})
res.status(200).send('the user is updated ',updatedUser)
    }catch(err){
        res.status(500).send('u didnt do it  , no he is not  updated')
    }
})

module.exports = ContactRouter