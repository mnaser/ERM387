module.exports = function (app, router, db, models) {

  router.route('/login')
	.post(function(req, res){ 
		
<<<<<<< HEAD
		// clean input ? *********************************
			// for example: check for no spaces (simplified version)
		try {
        models.sequelize.sync().then(() => {
          db.userLogin(req.body.user_id, req.body.user_password)) // get user/pass retreival method from db  
		    .then(
				responseObject => {
			// Convert responseObject to boolean ***************************
=======
		// clean input ?
			// for example: check for no spaces (simplified version)
		try {
        models.sequelize.sync().then(() => {
          db.userLogin(req.params.user_id, req.params.user_password)) // get user/pass retreival method from db  ***********
		    .then(
				responseObject => {
			// Convert responseObject to boolean
>>>>>>> origin/feature/login
			// If successful (User exists, and password matches)
				
					// create json web token
					var userToken = jwt.sign(user, app.get('superSecret'), {
						expiresInMinutes: 1440 // expires in 24 hours
					});

					res.json({ 
						status: true,
<<<<<<< HEAD
						body: { token: userToken, 
								message: "Successful Login!"}
=======
						body: {message: "Successful Login!"},
						token: userToken
>>>>>>> origin/feature/login
					});
					
				}
            )
          });
		} catch (e) {
<<<<<<< HEAD
=======
        console.log(e);
        res.json({status: false, body: {error: "message"}})
      }
	
	});
	///////////////////
	
  router.route('/test')
    .get(function(req, res) {
      try {
        models.sequelize.sync(/*{force:true}*/).then(() => {
          db.getRoomItems(1)
            .then(aa => res.json({ status: true, body: aa }))
        });
      } catch (e) {
>>>>>>> origin/feature/login
        console.log(e);
        res.json({status: false, body: {error: "message"}})
      }
	
	});

}
