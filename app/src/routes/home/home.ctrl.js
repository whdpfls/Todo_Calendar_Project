const output = {
    home : (req, res) => {
        res.render("./home/index");
    },
    
    login : (req,res) => {
        res.render("./home/login")
    },
};

const usrs = {
    id: ["hjkang0107", "hjkang2002", "croma23"],
    password: ["1234", "1234", "0107"],
};

const process = {
    login: (req, res) =>{
        const id = req.body.id,
            password = req.body.psword;
        
        if(usrs.id.includes(id)) {
            const idx = usrs.id.indexOf(id);
            if(usrs.password[idx] == password) {
                return res.json({
                    success: true,
                }); 
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = {
   output, 
   process,
};