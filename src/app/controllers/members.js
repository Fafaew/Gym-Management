const { age, date } = require('../../lib/utils')

<<<<<<< HEAD
const Member = require('../models/Member')

module.exports = {
    index(req,res){

        Member.all(function(members) {
            return res.render("members/index", {members})
        })
        

    },

    create(req,res){

        Member.instructorsSelectOptions(function(options){
            return res.render('members/create', { instructorOptions:options})
            
        })

    },

    post(req,res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {    
                return res.send('Please, fill all fields!')
        }
    }

    Member.create(req.body, function(member) {
        return res.redirect(`/members/${member.id}`)

    })

    
            
    },

    show(req,res){
        Member.find(req.params.id, function(member){
            if (!member) return res.send("Member not found!")

            member.birth = date(member.birth).birthDay

            
            return res.render("members/show", {member})
        })
    },

    edit(req,res){
        Member.find(req.params.id, function(member){
            if (!member) return res.send("Member not found!")

            member.birth = date(member.birth).iso

            Member.instructorsSelectOptions(function(options){
                return res.render('members/edit', { member, instructorOptions:options})
                
            })
            
         })
    },

    put(req,res){
=======

module.exports = {
    index(req, res){
        return res.render("members/index")
    },

    create(req, res){
        return res.render('members/create')
    },

    post(req, res){
        const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "") {    
            return res.send('Please, fill all fields!')
        }
    }


    return
    },

    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {    
                return res.send('Please, fill all fields!')
<<<<<<< HEAD
        }
    }
        Member.update(req.body, function(){
            return res.redirect(`/members/${req.body.id}`)
        })
        
    },
    delete(req,res){
        Member.delete(req.body.id, function(){
            return res.redirect(`/members`)
        })
=======
            }
        }
        return
        
    },
    delete(req, res){
        return
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
    },
}


<<<<<<< HEAD
=======

>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
