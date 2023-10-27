const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    async get(req, res){
        const { search, page, limit } = req.query;
        console.log(req.query);
        let result = await prisma.transaction.findMany({
            orderBy:{
                id: 'asc'
            }
        })
        
        if(!result.length) {
            return res.status(200).json({ 
                status: 'success', 
                code: 200, 
                message: 'Data Empty'
            })
        }

        return res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: result
        })
    },
    async getById(req, res){
        if(!req.params.id) res.status(400).json({ 
            status: 'fail', 
            code: 400, 
            message: 'Bad Request! id is required',
        })

        const user = await prisma.transaction.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
    
        res.status(200).json({ 
            status: 'success', 
            code: 200, 
            message: 'Success!',
            data: user
        })
    },
    async deposit(req, res){
        console.log(req.body)
        const account = await prisma.bankAccount.findUnique({
            where:{
                account_number: req.body.source_account_number
            }
        })

        if (account){
            console.log("masuk")
            prisma.bankAccount.update({
                data: {
                    balance:{
                        increment: +req.body.amount
                    }
                },
                where:{
                    account_number: req.body.source_account_number
                },
            });
            console.log("hello")
            const user = await prisma.transaction.create({ 
                data: {
                    source_account_number: req.body.source_account_number,
                    amount: req.body.amount,
                    typeTransaction: req.body.typeTransaction,
                    sourceNumber: null, 
                    destinationNumber: null
                }
            });
            
            console.log(user)

            res.status(201).json({ 
                status: 'success', 
                code: 200, 
                message: 'Data ditambahkan!',
                data: user
            })
        }
    },
}