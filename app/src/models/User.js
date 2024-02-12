const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const id = (await UserStorage.getUserInfo(client.id)).id; //getuserInfo는 promise기 때문에 시간을 기다려줘야 해서 비동기로 처리
        const psword = (await UserStorage.getUserInfo(client.id)).password; //getuserInfo는 promise기 때문에 시간을 기다려줘야 해서 비동기로 처리
        if(id) {
            if(id == client.id && psword == client.psword) {
                return {success: true};
            }
            return {success: false, msg : "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg : "존재하지 않는 아이디입니다."};
    }

    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);    
            return response;
        } catch(err) {
            return {success: false, msg: err};
        }
    }
}

module.exports = User;