Template.signIn.events({

  // Sign in, sign up or merge Facebook login service
  'click button#login-facebook': function (e) {
    Meteor.signInWithFacebook ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log('mergedUserId', mergedUserId);

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
          if (error) {
            console.log('error', error);
          }
          if (result) {
            console.log('result', result);
          }
        });
      }
    });
    e.preventDefault();
  },

  // Sign in, sign up or merge Google login service
  'click button#login-google': function (e) {
    Meteor.signInWithGoogle ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log('mergedUserId', mergedUserId);

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
          if (error) {
            console.log('error', error);
          }
          if (result) {
            console.log('result', result);
          }
        });
      }
    });
    e.preventDefault();
  },

  // Sign in, sign up or merge Twitter login service
  'click button#login-twitter': function (e) {
    Meteor.signInWithTwitter ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log('mergedUserId', mergedUserId);

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
          if (error) {
            console.log('error', error);
          }
          if (result) {
            console.log('result', result);
          }
        });
      }
    });
    e.preventDefault();
  },
  'click button#login-github': function (e) {
    Meteor.signInWithGithub ({}, function (error, mergedUserId) {
      if (error) {
        console.log('error', error);
      }

      // mergedUserId is set if a merge occured
      if (mergedUserId) {
        console.log('mergedUserId', mergedUserId);

        // The source account (mergedUserId) has now been deleted, so now is
        // your chance to deal with you application specific DB items to avoid
        // ending up with orphans. You'd typically want to change owner on the
        // items beloning to the deleted user, or simply delete them.
        Meteor.call ('mergeItems', mergedUserId, function (error, result) {
          if (error) {
            console.log('error', error);
          }
          if (result) {
            console.log('result', result);
          }
        });
      }
    });
    e.preventDefault();
  },
  'submit #signup-password' : function(e, t){
    e.preventDefault();
    options = {};
    // retrieve the input field values
    var email = t.find('#email').value
      , password = t.find('#password').value;

    console.log("email: ", email);

    options.email = email;
    options.password = password;

    // Trim and validate your fields here....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.createPasswordUser( options, function(err, result){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed.
        console.log(err);
      } else {
        // The user has been logged in.
        console.log(result);
      }
    });
    return false;
  },
  'submit #login-password': function(e, t) {
    var email = t.find('#email-login').value
      , password = t.find('#password-login').value;

      console.log("email: ", email);
      console.log("password: ", password);

    Meteor.loginWithPassword(email, password, function(error) {
      if(error)
        console.log(error);
    })
    return false;
  },
  'click button#logout': function (e) {
    Meteor.logout(function (error) {
      if (error) {
        // console.log('error', error);
      }
    });
    e.preventDefault();
  },
});

