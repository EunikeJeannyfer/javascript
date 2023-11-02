// unit testing dgn jest 

const base = require('../app/controller/api/v2/users')
const mockRequest = (body = {}, query = {}, params = {} ) => ({ body, query, params })
const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

//get user test
describe("users.get function", () => {
    test("res.json called with users data", async () => {
        const req = mockRequest()
        const res = mockResponse()
        await base.get(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith(
            expect.objectContaining({
                status: 'success',
                code:200,
                message:"Success!",
                data: expect.any(Array)
                //return nya array bebas, ga harus ada isi 
            })
        )
    })

    test("res.json called with no result", async () => {
        const req = mockRequest({}, {
            page:3
        })
        const res = mockResponse()
        await base.get(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith(
            expect.objectContaining({
                status: 'success',
                code:200,
                message:"Data Empty"
            })
        )
    })
})

// describe("users.create function", () => {
//     test("res.json called with status 201", async () => {
//         const req = mockRequest({
//             nama: "Benedict",
//             email: "benedict@gmail.com",
//             password: "1234",
//             identity_number: 22106150,
//             identity_type: "KTP",
//             address: "Jalan Merak no 50"
//         })
//         const res = mockResponse()
//         await base.create(req, res)
//         expect(res.status).toBeCalledWith(200)
//         expect(res.json).toBeCalledWith(
//             expect.objectContaining({
//                 status: 'success',
//                 code:200,
//                 message:"Data ditambahkan!",
//                 data: expect.any(Object)
//             })
//         )
//     })
// })
