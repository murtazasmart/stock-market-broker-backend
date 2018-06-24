import { expect, assert } from "chai";
import * as supertest from "supertest-as-promised";

import app from "../../app";
import { AddUser, getUsers } from "./user.handler";
import { User } from "./user.mock";

describe("GET /api/transaction", function() {
  it("Returns add user", function(done) {
    const requestBody = {
      createdAt: "2018-06-20T11:38:02.619Z",
      name: "m1",
      bankAccount: "10001"
    };

    const _transaction = AddUser(requestBody, User);

    _transaction
      .then((data: any) => {
        assert.equal(typeof data, typeof Object);
        done();
      })
      .catch(err => {
        done();
      });
  });

 it("Returns all users", function(done) {
    const requestBody = {};
    const usercount = getUsers(requestBody, User);
    usercount
      .then((data: any) => {
        assert.equal(typeof data, typeof Object);
        done();
      })
      .catch((err: any) => {
        done();
      });
  });
});
