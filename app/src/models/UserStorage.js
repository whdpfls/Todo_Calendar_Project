
const fs = require("fs").promises;

class UserStorage { 

    //static이 붙어야 class 객체에서 바로 users 변수 불러올 수 있게 된다.  
    //원하는 필드값만 불러오기  
    static getUsers(...fields) { // ...변수명 -> 변수가 몇개인지 모를 때 배열로 받아올 수 있게 된다. 
        return fs
        .readFile("./src/database/users.json") //promise 반환
        .then((data) => { //성공 시
            const users = JSON.parse(data);
            const newUsers = fields.reduce((newUsers, field) => {
                if(users.hasOwnProperty(field)) {
                    newUsers[field] = users[field];
                } 
                return newUsers;
               }, {});
               return newUsers;
        }) 
        .catch(console.error); //오류 반환(실패 시)

    }
    
    //특정 회원의 정보를 가져온다
    static getUserInfo(id) { 
        return fs
        .readFile("./src/database/users.json") //promise 반환
        .then((data) => { //성공 시
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users); // users의 key값만 받아온다.
            const userInfo = userKeys.reduce((newUser, info) => { 
                newUser[info] = users[info][idx];
                return newUser;
            }, {}); 

            return userInfo;
        }) 
        .catch(console.error); //오류 반환(실패 시)
    }

    static async save(userInfo) {
        const users = await this.getUsers("id", "password", "name");
        if(users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다."
        }
        users.id.push(userInfo.id);
        users.password.push(userInfo.psword);
        users.name.push(userInfo.name);
        fs.writeFile("./src/database/users.json", JSON.stringify(users));
        return { success: true };

    }
}

module.exports = UserStorage;