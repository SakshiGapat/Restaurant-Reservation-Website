import jwt from 'jsonwebtoken'

const adminLogin = async (req, res) => {
    // res.json({success:true, message: 'Login admin successfull'})
    try {
        const {email, password} = req.body   
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, message: 'Login successfull', token})
        } else {
            res.json({success:false, message: 'Invalid email or password'})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {adminLogin}