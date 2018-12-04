const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../controllers/grapes');
const should = chai.should();
const Grape = require("../models/grape")

chai.use(chaiHttp)

describe("Grapes", () => {

  // Test Index
  it("should index ALL grapes on / GET", (done) => {
    const res = chai.request(app).get("/")
    res.should.have.status(200)
    res.should.be.html
    // chai.request(app)
    //   .get(`/`)
    //   .end((err, res) => {
    //     res.should.have.status(200)
    //     res.should.be.html
    //     done()
    //   })
  })



})
