const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

const should = chai.should();
chai.use(chaiHttp);

const agent = chai.request.agent(server);

/** Require Models */
const User = require('../models/user')
const Grape = require('../models/grape');

/** Test objects */
const testGrape1 = {
  name: "Test Pinot",
  type: "Full-Bodied Red",
  pairings: ["Chicken", "Beef"],
  image: "upload.wikimedia.org/wikipedia/commons/3/32/Red_Mountain_Cabernet_Sauvignon_grapes_from_Hedge_Vineyards.jpg",
  description: "Super Good",
}

describe('Grapes', () => {

  // Test: Create
  it("should create with valid attributes at POST /admin/grapes", done => {
  Grape.findOneAndRemove(post, function() {
    Grape.find(function(err, posts) {
      const grapeCount = grapes.count
      const grape = { name: "Pinot", type: "Fulle-Bodied Red", pairings: ["Chicken"], image:"test.com", decription:"Good wine" };

      chai
        .request("localhost:3000")
        .post("/admin/grapes")
        .send(grape)
        .then(res => {
          Grape.find(function(err, posts) {
            grapeCount.should.be.equal(grape.length - 1)
            res.should.have.status(200)
            return done()
          })
        })
        .catch(err => {
          return done(err);
        })
        })
      })

    })


//     // Test: Index
//     it("should return all grapes at GET /admin/grapes", done => {
//     Grape.findOneAndRemove(post, function() {
//       Grape.find(function(err, posts) {
//         const grapeCount = grapes.count
//         const grape = { name: "Pinot", type: "Fulle-Bodied Red", pairings: ["Chicken"], image:"test.com", decription:"Good wine" };
//
//         chai
//           .request("localhost:3000")
//           .post("/admin/grapes")
//           .send(grape)
//           .then(res => {
//             Grape.find(function(err, posts) {
//               grapeCount.should.be.equal(grape.length - 1)
//               res.should.have.status(200)
//               return done()
//             })
//           })
//           .catch(err => {
//             return done(err);
//           })
//           })
//         })
//
//       })
//
//     // it('should index all grapes on /GET', (done) => {
//     //     chai.request(server)
//     //     .get('/profiles/5c083a79abc27e1906854e5d/foods')
//     //     .end((err, res) => {
//     //         res.should.have.status(200);
//     //         res.should.be.html;
//     //         done();
//     //     });
//     // });
//
//     // TEST CREATE FOOD
//     it('should create a single grape on /grapes/<id>/new', (done) => {
//         var testGrape2 = new Grape(testProfile);
//         profile.save((err, user) => {
//             chai.request(server)
//                 .post(`/profiles/${user._id}/foods`)
//                 .send(fakeAsparagus)
//                 .end((err, res) => {
//                     console.log("success!")
//                     res.should.have.status(200);
//                     res.should.be.html;
//                     done();
//             });
//         })
//     }).timeout(4000);
//
//
//     // Test Create New
//     it("Should create new grape", (done) => {
//       Grape.find({})
//         .then(grapes => {
//           const originalGrapeLength = grapes.count
//           chai.request(server)
//         })
//     })
// })

// Test: Homepage
describe("site", () => {
  it("Should have home page", done => {
    chai
      .request("localhost:3000")
      .get("/")
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done();
      })
  })
})
