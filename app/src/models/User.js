const userStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const id = userStorage.getUserInfo(this.body.id).id;
        const psword = userStorage.getUserInfo(this.body.id).password;
        if(id) {
            if(id == this.body.id && psword == this.body.psword) {
                return {success: true};
            }
            return {success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg : "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;