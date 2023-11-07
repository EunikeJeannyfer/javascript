const base = require('../app/controller/api/v2/transaction')
const mockRequest = (body = {}, query = {}, params = {} ) => ({ body, query, params })
const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)

    return res
}

//get user test
describe("transaction.getByID function", () => {
    test("res.json called with users data", async () => {
        const req = mockRequest({}, {
            params:1
        })
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
})