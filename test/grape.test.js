const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../controllers/grapes');
const should = chai.should();
const Grape = require("../models/grape")

chai.use(chaiHttp)

// Sample Grape Object
const sampleGrape ={
  name: "Sample Grape",
  type: "Red",
  pairings: ["Beef", "Lamb", "Pasta"],
  image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg"
}





// Grap Controllers
describe("Testing Grape Controllers", () => {

  // Dump Function
  after(() => {
    Grape.deleteMany({ name: })
  })




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
