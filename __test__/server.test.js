'use srrict';

const server = require("../src/server")
const supertest = require('supertest')
const request = supertest(server.app);
const { db } = require('../src/models/index');
beforeAll(async () => {
    await db.sync();
});

describe("Web Servers",()=>{
it("404 on a bad route",async ()=>{
   let req= await request.get("/perso")
   expect(req.status).toBe(404)
})
it("404 on a bad route",async ()=>{
    let req= await request.put("/person")
    expect(req.status).toBe(404)
 })
 

it(" record using POST",async ()=>{
    let req= await request.post("/person")
    expect(req.status).toBe(201)
 })

it("Read a list of records using GET",async ()=>{
    let req= await request.get("/person")
    expect(req.status).toBe(200)
 });



it("Read a record using GET",async ()=>{
    let req= await request.get("/person/1")
    expect(req.status).toBe(200)
})



test("Read a list of records using put",async()=>{
    let req = await request.put("/person/5").send({
        person:"Mohamamd"})
    expect(req.status).toBe(404)
    });
    


it("Destroy a record using DELETE",async ()=>{
    let req= await request.delete("/person/1")
    expect(req.status).toBe(204)
 });

 //............................................................................................


 it(" record using POST",async ()=>{
    let req= await request.post("/food")
    expect(req.status).toBe(201)
 })

it("Read a list of records using GET",async ()=>{
    let req= await request.get("/food")
    expect(req.status).toBe(200)
 });



it("Read a record using GET",async ()=>{
    let req= await request.get("/food/1")
    expect(req.status).toBe(200)
})



test("Read a list of records using put",async()=>{
    let req = await request.put("/food/5").send({
        food:"pizza"})
    expect(req.status).toBe(404)
    });
    


it("Destroy a record using DELETE",async ()=>{
    let req= await request.delete("/food/1")
    expect(req.status).toBe(204)
 });

});