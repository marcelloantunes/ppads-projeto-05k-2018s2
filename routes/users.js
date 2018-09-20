var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
<<<<<<< HEAD
	res.render('register');
=======
	res.render('login');
>>>>>>> front
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
<<<<<<< HEAD

	// Validation
	req.checkBody('name', 'Nome não preenchido').notEmpty();
	req.checkBody('email', 'E-mail não preenchido').notEmpty();
	req.checkBody('email', 'E-mail inválido').isEmail();
	req.checkBody('username', 'Usuário não preenchido').notEmpty();
	req.checkBody('password', 'Senha não preenchida').notEmpty();
	req.checkBody('password2', 'Senhas não correspondem').equals(req.body.password);
=======
	var petName = req.body.petName;
	var petGroup = req.body.petGroup;

	// Validation
	req.checkBody('name', 'Campo Nome é obrigatório').notEmpty();
	req.checkBody('email', 'Campo E-mail é obrigatório').notEmpty();
	req.checkBody('email', 'E-mail inválido').isEmail();
	req.checkBody('username', 'Campo Usuário é obrigatório').notEmpty();
	req.checkBody('password', 'Campo Senha é obrigatório').notEmpty();
	req.checkBody('password2', 'Senhas diferentes.').equals(req.body.password);
>>>>>>> front

	var errors = req.validationErrors();

	if (errors) {
<<<<<<< HEAD
		res.render('register', {
			errors: errors
		});
=======
		/* req.flash('error_msg', 'BLA com sucesso');
		res.redirect('login'); */
		res.render('login', {
			errors: errors
		});
		console.log(errors)
>>>>>>> front
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
				if (user || mail) {
<<<<<<< HEAD
					res.render('register', {
=======
					res.render('login', {
>>>>>>> front
						user: user,
						mail: mail
					});
				}
				else {
					var newUser = new User({
						name: name,
						email: email,
						username: username,
<<<<<<< HEAD
						password: password
=======
						password: password,
						petName: petName,
						petGroup: petGroup
>>>>>>> front
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
<<<<<<< HEAD
         	req.flash('success_msg', 'Usuário registrado com sucesso, agora você pode logar');
=======
         	req.flash('success_msg', 'Cadastro feito com sucesso');
>>>>>>> front
					res.redirect('/users/login');
				}
			});
		});
	}
});

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
<<<<<<< HEAD
				return done(null, false, { message: 'Usuário desconhecido' });
			}

=======
				return done(null, false, { message: 'Usuário inválido' });
			}
>>>>>>> front
			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Senha inválida' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

<<<<<<< HEAD
	req.flash('success_msg', 'Usuário deslogado');
=======
	req.flash('success_msg', 'Usuário desconectado');
>>>>>>> front

	res.redirect('/users/login');
});

module.exports = router;