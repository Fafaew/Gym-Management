const { age, date } = require('../../lib/utils')
<<<<<<< HEAD

const Instructor = require('../models/Instructor')

module.exports = {
    index(req,res){

        Instructor.all(function(instructors) {
            return res.render("instructors/index", {instructors})
        })
        

    },

    create(req,res){
        return res.render('instructors/create')
    },

    post(req,res){
=======
const Instructor = require('../models/Instructor')

module.exports = {
    index(req, res){

        Instructor.all(function(instructors){
            return res.render("instructors/index", { instructors })
        })

    },

    create(req, res){
        return res.render('instructors/create')
    },

    post(req, res){
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {    
                return res.send('Please, fill all fields!')
<<<<<<< HEAD
        }
    }

    Instructor.create(req.body, function(instructor) {
        return res.redirect(`/instructors/${instructor.id}`)

    })

    
            
    },

    show(req,res){
        Instructor.find(req.params.id, function(instructor){
            if (!instructor) return res.send("Instructor not found!")
=======
            }
        }
        Instructor.create(req.body, function(instructor){
            return res.redirect(`/instructors/${instructor.id}`)
        })
        

       
    },

    show(req, res){
        Instructor.find(req.params.id, function(instructor) {
            if(!instructor) return res.send("Instructor not found!")
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(",")

            instructor.created_at = date(instructor.created_at).format

            return res.render("instructors/show", {instructor})
        })
    },
<<<<<<< HEAD

    edit(req,res){
        Instructor.find(req.params.id, function(instructor){
            if (!instructor) return res.send("Instructor not found!")

            instructor.birth = date(instructor.birth).iso
            
            return res.render("instructors/edit", {instructor})
        })
    },

    put(req,res){
=======
    edit(req, res){
        Instructor.find(req.params.id, function(instructor) {
            if(!instructor) return res.send("Instructor not found!")

            instructor.birth = date(instructor.birth).iso

            return res.render("instructors/edit", {instructor})
        })
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
        Instructor.update(req.body, function(){
            return res.redirect(`/instructors/${req.body.id}`)
        })
        
    },
    delete(req,res){
        Instructor.delete(req.body.id, function(){
            return res.redirect(`/instructors`)
        })
    },

=======
            }
        }
        return
        
    },
    delete(req, res){
        return
    },
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
}



<<<<<<< HEAD

=======
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
