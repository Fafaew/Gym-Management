<<<<<<< HEAD

const { date } = require('../../lib/utils')

const db = require('../../config/db')


module.exports = {

        all(callback){

            db.query(`
            SELECT instructors.*, count(members) AS total_students
            FROM instructors
            LEFT JOIN members ON (instructors.id = members.instructor_id)
            GROUP BY instructors.id  
            ORDER BY total_students DESC`, function(err, results){
                if(err) throw `Database Error! ${err}`

                callback(results.rows)          
    })
        },

        create(data, callback ) {
=======
const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {

        db.query(`SELECT * FROM instructors`, function(err, results){
            if(err) return res.send("Database Error!")

            callback(results.rows)
    })

    },

    create(data, callback){

>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
        const query = `
            INSERT INTO instructors (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
<<<<<<< HEAD
            )  VALUES ($1, $2, $3, $4, $5, $6)  
=======
            ) VALUES ($1, $2, $3, $4, $5, $6)
>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
            RETURNING id
        `
        const values = [
            data.name,
            data.avatar_url,
            data.gender,
            data.services,
            date(data.birth).iso,
            date(Date.now()).iso
        ]
<<<<<<< HEAD

        db.query(query, values, function(err, results){
            if(err) throw `Database Error! ${err}`


            callback(results.rows[0])
            })
        },
        find(id, callback) {
            db.query(`
            SELECT * 
            FROM instructors 
            WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                callback(results.rows[0])


            })
        },
        update(data, callback) {
            const query = `
                UPDATE instructors SET
                    avatar_url=($1),
                    name=($2),
                    birth=($3),
                    gender=($4),
                    services=($5)
                WHERE id = $6                
            `

            const values = [
                data.avatar_url,
                data.name,
                date(data.birth).iso,
                data.gender,
                data.services,
                data.id
            ]

            db.query(query, values, function(err, results) {
                if(err) throw `Database Error! ${err}`



                callback()

            })
        },

        delete(id, callback) {
            db.query(`DELETE FROM instructors WHERE id = $1`, [id], function(err, results) {
                if(err) throw `Database Error! ${err}`

                return callback()

            })
        }
        
        
=======
        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")
            
            callback(results.rows[0])
    } )

    },
    find(id, callback) {
        db.query(`
            SELECT * 
            FROM instructors 
            WHERE id = $1`, [id], function(err, results) {
                throw `Database Error!`                

                callback(results.rows[0])
            })
          
    }

>>>>>>> e76f3254c9bc81da98bf404f14db070c4875ed83
}