export const Transaction = {
    create: function(obj: any) {
        return obj;
    },

    find: function() {
        return [{
            "_id": "5b2a30b63033734e48a2420e",
            "createdAt": "2018-06-20T10:47:18.299Z",
            "name": "abc",
            "stock": "1001",
            "quantity": 100,
            "type": "buy",
            "price": 100,
            "turn": 4,
            "__v": 0
        }];
    },

    findAll: function(){
        return[{
        "_id": "5b2a3c9aa1cf190030e597f2",
        "createdAt": "2018-06-20T11:38:02.619Z",
        "name": "m1",
        "stock": "Cargills",
        "quantity": 1,
        "type": "buy",
        "price": 135,
        "turn": 19,
        "__v": 0
    }];
},
    findPorfolioValu: function(){
        return[{
        
        "name": "ai1",
    "value": 0
        
    }];
    }
};