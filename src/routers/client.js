const express = require("express");
const router = new express.Router;
const client = require("../models/clients")

router.get("/thapa",(req,res) => {
    res.send("hello how are you?");
})

router.post("/clients",(req,res) => {
    console.log(req.body);
    const user = new client(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

router.get("/clients",async (req,res) => {
    try{
        const clientsData = await client.find();
        res.send(clientsData);
    } catch(e){
        res.send(e);
    }
})

router.get("/clients/:id",async (req,res) => {
    try {
        const _id = req.params.id;
        // console.log(req.params);
        // res.send(req.params);
        const clientData = await client.findById({_id});
        console.log(clientData);
        if(!clientData) {
           return res.status(404).send();
        }else {
            res.send(clientData);
        }
    } catch(e){
        res.status(500).send(e);
    }
})

router.patch("/clients/:id",async (req,res) => {
    try{
        const _id = req.params.id;
        const updateClients = await client.findByIdAndUpdate(_id, req.body, {
            new:true
        });
    } catch(e){
        res.status(400).send(e);
    }
})

router.delete("/clients/:id",async (req,res) => {
    try{
        const _id = req.params.id;
        const deleteClients = await client.findByIdAndDelete(req.params.id);
        if(!req.params.id) {
            return res.status(404).send();
         }else {
             res.send(deleteClients);
         }
     } catch(e){
         res.status(500).send(e);
     }
})

module.exports = router;