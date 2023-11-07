const request = require('supertest')
const app = require('../index')

describe("GET /v2/users", () => {
    //uji fungsionalitas (ini nembak API)
    test("Return statu: 200 and Users Data", async () => {
        const res = await request(app).get('/v2/users')
        expect(res.statusCode).toBe(200)

        // expect(res.body).toHaveProperty('status')
        // expect(res.body).toHaveProperty('code')
        // expect(res.body).toHaveProperty('message')
        // expect(res.body).toHaveProperty('data')
        // expect(res.body.data).toEqual(expect.any(Array))

        //to Equal mirip sama toBe tp kalau toBe harus fix sama (pasti) 

        expect(res.body).toEqual(
            expect.objectContaining({
                status: 'success',
                code:200,
                message:"Success!",
                data: expect.any(Array)
            })
        )
    })
})
