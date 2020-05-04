const { User } = require('./models');

const resolvers = {
    Query: {
        getUsers: async () => await User.find({}).exec(),
        getUserbyName: async (_, args) => await User.findOne(args).exec(),
        getUserbyId: async (_, args) => await User.findById(args.id)
    },
    Mutation: {
        addUser: async (_, args) => {
            try {
                let response = await User.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        updateMedicalQualifications: async (_, args) => {
            try {
                let response =  await User.findById(args.id);
                response.isMedicalProfessional = args.isMedicalProfessional;
                // Need to figure out how to partially update the DB
                return response;
            } catch(e) {
                return e.message;
            }
        },
        updateUserBio: async (_, args) => {
            try {
                let response =  await User.findById(args.id);
                response.bio = args.bio;
                return response;
            } catch(e) {
                return e.message;
            }
        }
    }
};

exports.resolvers = resolvers;

