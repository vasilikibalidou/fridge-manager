const express = require("express");
const router = express.Router();
const Fridge = require("../models/Fridge");
const User = require("../models/User");
const nodemailer = require("nodemailer");

router.post("/fridge", (req, res) => {
  const { name, userId } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Username can't be empty" });
  }

  Fridge.create({ name: name, admins: [userId], users: [userId] })
    .then(newFridge => {
      User.findById(userId)
        .then(foundUser => {
          return User.updateOne(
            { _id: foundUser._id },
            { $push: { fridges: newFridge._id } }
          );
        })
        .catch(err => {
          res.status(400).json({ message: "Could not find user." });
        });
      res.json(newFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Error while logging in" });
    });
});

router.get("/fridge/:id", (req, res) => {
  Fridge.findById(req.params.id)
    .then(foundFridge => {
      return res.json(foundFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge with this id." });
    });
});

// returns fridge with populated users
router.get("/fridge/:id/users", (req, res) => {
  Fridge.findById(req.params.id)
    .populate("users")
    .then(foundFridge => {
      return res.json(foundFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge with this id." });
    });
});

// returns fridge with populated items
router.get("/fridge/:id/items", (req, res) => {
  Fridge.findById(req.params.id)
    .populate("items")
    .then(foundFridge => {
      return res.json(foundFridge);
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge with this id." });
    });
});

router.post("/fridge/:id/delete", (req, res) => {
  Fridge.findById(req.params.id)
    .then(foundFridge => {
      Fridge.deleteOne({ _id: foundFridge._id }).then(() => {
        foundFridge.users.forEach(user => {
          User.findById(user._id).then(foundUser => {
            User.updateOne(
              { _id: foundUser._id },
              { $pull: { fridges: foundFridge._id } }
            )
              .then(result => {
                console.log("removed from user!");
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      });
    })
    .then(() => {
      res.json("result");
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge." });
    });
});

router.post("/fridge/invite", (req, res) => {
  const { emails, fridgeId, userId } = req.body;
  if (!emails || !fridgeId || !userId) {
    res.status(400).json({ message: "Missing data for invite." });
  }
  Fridge.findById(fridgeId)
    .then(foundFridge => {
      return User.findById(userId)
        .then(foundUser => {
          let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: process.env.GMAIL,
              pass: process.env.GMAIL_PASSWORD
            }
          });
          let emailsArray = emails.split(",").map(a => a.trim());
          emailsArray.forEach(email => {
            transporter
              .sendMail({
                from: `"Fridge App" "${process.env.GMAIL}"`,
                to: email,
                subject: `Invitation to use fridge ${foundFridge.name}`,
                text: `Invitation to use fridge ${foundFridge.name}`,
                html: `<div>Hey there! 👋 <p> You have received an invitation, from the 
              user <strong>${foundUser.username}</strong> for the fridge 
              <strong>${foundFridge.name}</strong>. 
              </p>
              <p>You can accept the invitation by clicking on the following link. 
              If you don't already have an account for the Fridge App, 
              you will need to sign up. </p>
              <p>
              <a href="${process.env.BASEURL}/fridge/${foundFridge._id}"> 👉Join fridge!</a>
              </p></div>`
              })
              .then(info => {
                // info.envelope, info.messageId
                res.json(info);
              })
              .catch(error => {
                res.status(400).json({
                  message: `Something went wrong while sending invitation to: ${email}`
                });
              });
          });
        })
        .catch(err => {
          res.status(400).json({ message: "Could not find user." });
        });
    })
    .catch(err => {
      res.status(400).json({ message: "Could not find fridge." });
    });
});

router.post("/fridge/:id/join", (req, res) => {
  const fridgeId = req.params.id;
  const { userId } = req.body;
  if (!userId) {
    res
      .status(400)
      .json({ message: "Cannot join fridge. User id is missing." });
  }

  // add User to Fridge
  Fridge.updateOne({ _id: fridgeId }, { $addToSet: { users: userId } })
    .then(() => {
      // add Fridge to User
      User.updateOne({ _id: userId }, { $addToSet: { fridges: fridgeId } })
        .then(() => {
          // find and return new updated Fridge
          Fridge.findById(fridgeId)
            .then(foundFridge => {
              return res.json(foundFridge);
            })
            .catch(() => {
              res
                .status(400)
                .json({ message: "Could not find fridge after updating." });
            });
        })
        .catch(err => {
          res.status(400).json({ message: "Could not update user." });
        });
    })
    .catch(err => {
      res.status(400).json({ message: "Could not update fridge." });
    });
});

router.post("/fridge/:id/removeUser", (req, res) => {
  const { userId } = req.body;
  const fridgeId = req.params.id;

  Fridge.findOneAndUpdate(
    { _id: fridgeId },
    { $pull: { users: userId } },
    { new: true }
  )
    .populate("users")
    .exec(function(err, documents) {
      if (err) {
        console.log(err);
        res.status(400).json({ message: "Could not find or update fridge." });
        return;
      }

      User.findById(userId)
        .then(foundUser => {
          User.updateOne(
            { _id: foundUser._id },
            { $pull: { fridges: fridgeId } }
          )
            .then(result => {
              res.json(documents);
            })
            .catch(err => {
              res.status(400).json({ message: "Could not update user." });
            });
        })
        .catch(err => {
          res.status(400).json({ message: "Could not find user." });
        });
    });
});

module.exports = router;
