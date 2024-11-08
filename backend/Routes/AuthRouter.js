const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { ensureAuthenticated } = require('../Middlewares/Auth'); 

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

router.get('/test', ensureAuthenticated, (req, res) => {
    res.json({
        message: 'You are authenticated!',
        user: req.user, 
        success: true
    });
});

module.exports = router;