const { User } = require('./models/user');
const { Medication, Comment } = require('./models/medications');

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}).exec(),
        getUserbyEmail: async (_, args) => await User.findOne(args).exec(),
        getUserbyId: async (_, args) => await User.findById(args.id),
        getMedications: async () => await Medication.find({}).exec(),
        searchMedications:  async (_, args) => args.string ? await Medication.find({"$text":{"$search": args.string}}) : await Medication.find({})
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let created_user = await User.create(args);
                created_user.password = created_user.generateHash(args.input_pass);
                created_user.save();
                return created_user;
            } catch(e) {
                return e.message;
            }
        },
        loginUser: async (_, args) => {
            let correct_pass = false
            await User.findOne({email: args.email}, function(err, user) { 
                if (err) throw err;
                else {
                    if (user.validPassword(args.password)) {
                        correct_pass = true;
                    }   
                }
            });
            return correct_pass;
        },
        updateUserMedicalQualifications: async (_, args) => {
            var filter = { _id: args.id };
            var update = { $set: {isMedicalProfessional: args.isMedicalProfessional} };
            result = User.findOneAndUpdate(filter, update, function(err, res) {
                if (err) throw err;
              });
            return result
        },
        updateUserBio: async (_, args) => {
            var filter = { _id: args.id };
            var update = { $set: {bio: args.bio} };
            result = User.findOneAndUpdate(filter, update, function(err, res) {
                    if (err) throw err;
                  });
            return result
        },
        addMedication: async (_, args) => {
            try {
                let response = await Medication.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        addCommentToMedication: async (_, args) => {
            try {
                let user = await User.findById(args.author_id);
                let medication = await Medication.findById(args.id);
                if (user && medication) {
                    let created_comment = await Comment.create({text: args.text, author_id: args.author_id});
                    var filter = { _id: args.id };
                    var update = { $addToSet: {comments: created_comment} };
                    result = Medication.findOneAndUpdate(filter, update, function(err, res) {
                        if (err) throw err;
                    });
                    return result
                }

            } catch(e) {
                return e.message;
            }
        }
    }
};

exports.resolvers = resolvers;

