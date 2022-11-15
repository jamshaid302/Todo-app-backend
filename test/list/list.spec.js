const mongoose = require("mongoose");
const request = require('supertest');
const app = require('../../server/app');

describe('project list test', () => {
    // beforeEach( async () => {
    //         const db = await mongoose.createConnection(
    //             `mongodb+srv://jamshaid:jamshaid@cluster0.aycmrpn.mongodb.net/test_userListing`
    //             // process.env.TEST_DB_URI
    //         );
    //         if(db){
    //             console.log('Test DB Connection established');
    //         } else{
    //             console.log('Test DB Connection error');
    //         }
    // })

    it('should add a list', async () => {
        const lists = await request(app)
            .post('/lists/addlist').send({
                name: 'list 1'
            })
            .expect(201);
        return lists;
    });

    it('should get all list', async () => {
        const lists = await request(app)
            .get('/lists')
            .expect(200);
        // console.log(lists.res.text)
        return lists;
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });
});