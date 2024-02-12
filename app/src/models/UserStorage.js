class UserStorage { 
    static #users = { //static이 붙어야 class 객체에서 바로 users 변수 불러올 수 있게 된다.  #은 private하게 외부에서 못받아옴
        id: ["hjkang0107", "hjkang2002", "croma23"],
        password: ["1234", "1234", "0107"],
        name: ["강희주, 강희준, 조예린"],
    };

    static getUsers(...fields) { // ...변수명 -> 변수가 몇개인지 모를 때 배열로 받아올 수 있게 된다. 
       const users = this.#users;
       const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
       }, {});
       return newUsers;
    }
}

module.exports = UserStorage;