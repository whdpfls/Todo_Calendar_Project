class UserStorage { 
    static #users = { //static이 붙어야 class 객체에서 바로 users 변수 불러올 수 있게 된다.  #은 private하게 외부에서 못받아옴
        id: ["hjkang0107", "hjkang2002", "croma23"],
        password: ["1234", "1234", "0107"],
        name: ["강희주, 강희준, 조예린"],
    };

    //원하는 필드값만 불러오기  
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
    
    //특정 회원의 정보를 가져온다
    static getUserInfo(id) { 
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // users의 key값만 받아온다.
        const userInfo = userKeys.reduce((newUser, info) => { 
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {

    }
}

module.exports = UserStorage;