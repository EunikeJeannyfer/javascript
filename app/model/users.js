//atur database 

const pool = require('../../config/db')

module.exports = {
    async get(search = null, page = 1, limit = 10){
        //krn kita db nya asynchronous
        //await  berfungsi untuk mengubah async menjdi sync

        const s = search ? `%${search}$%` : null
        const result = await pool.query(
            `SELECT * FROM nasabah
             WHERE 
                ($1::text is null or nama like $1) or 
                ($1::text is null or alamat like $1)
             LIMIT $2
             OFFSET $3
            `, 
            [s, limit, (page - 1) * limit]
        )
        return result.rows
    },
    async getById(id){
        //krn kita db nya asynchronous
        const result = await pool.query(
            "SELECT * FROM nasabah WHERE id_nasabah = $1", [id]
        )
        return result.rows
    },
    async create(nama, alamat, tgl_lahir, no_tlp){
        const result = await pool.query(
            `INSERT INTO nasabah 
                (nama, alamat, tgl_lahir, no_tlp)
                values($1, $2, $3, $4, $5);
            `,
            [nama, alamat, tgl_lahir, no_tlp]
        )
        return result.rows
    },
    async update(){
        try{
            const result = await pool.query(
                `UPDATE nasabah
                 SET
                    name=$1,
                    alamat=$2,
                    tgl_lahir=$3,
                    no_telp=$4,
                 WHERE id=$5
                `,
                [nama, alamat, tgl_lahir, no_tlp, id]
            )
            return result.rows
        } catch(e) {
            throw new error(e)
        }
    },
    async destroy(id){
        const result = await query(
            "DELETE FROM nasabah WHERE id = $1", [id]
        )
        return result.rows
    },

}