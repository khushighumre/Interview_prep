
// const Session = require("../models/Session");
// const Question = require("../models/Question");

// // @desc Create a new session
// // @route POST /api/sessions/create
// // @access Private (Requires JWT)
// const createSession = async (req, res) => {
//     try {
//         const { role, experience, topicsToFocus, description, questions } = req.body;
//         const userId = req.user.id;

//         const session = await Session.create({
//             user: userId,
//             role,   
//             experience,
//             topicsToFocus,
//             description,
//         });

//         const questionDocs = await Promise.all(
//             questions.map(async (q) => {
//                 const question = await Question.create({
//                     session: session._id,
//                     question: q.question,
//                     answer: q.answer,
//                 }); 
//                 return question;
//             })
//         );

//         session.questions = questionDocs; 
//         await session.save();

//         res.status(201).json({ success: true, session });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// // @desc Get all sessions for the logged-in user
// // @route GET /api/sessions/my-sessions
// // @access Private (Requires JWT)
// exports.getMySessions = async (req, res) => {
//     try {
//         const sessions = await Session.find({ user: req.user.id })
//         .sort({ createdAt: -1 })
//         .populate("questions");
//         res.status(200).json({ success: false, smessage:"Server error" });
        
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// exports.getSessionById = async (req, res) => {
//     try {
//         const session = await Session.findById(req.params.id).populate({path: "questions", options: { sort: { createdAt: -1 } },} )
//         .exec();

//         if (!session) {
//             return res.status(404).json({ success: false, message: "Session not found" });
//         }

//         res.status(200).json({ success: true, session });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// exports.deleteSession = async (req, res) => {
//     try {
//         const session = await Session.findById(req.params.id);
//         if (!session) {
//             return res.status(404).json({  message: "Session not found" });
//         }
//         if (session.user.toString() !== req.user.id) {
//             return res.status(401).json({ message: "Not authorized to dlt the session" });
//         }
//         await Question.deleteMany({ session: session._id });
//         await session.deleteOne ();
//         res.status(200).json({ success: true, message: "Session deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

// module.exports = {
//   createSession,
//   getMySessions,
//   getSessionById,
//   deleteSession,
// };


const Session = require("../models/Session");
const Question = require("../models/Question");

// @desc Create a new session
// @route POST /api/sessions/create
// @access Private (Requires JWT)
const createSession = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, description, questions } = req.body;
        const userId = req.user.id;

        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                console.log('Creating question with data:', q);
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer,
                });
                console.log('Created question:', question);
                return question;
            })
        );

        session.questions = questionDocs;
        await session.save();

        res.status(201).json({ success: true, session });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// @desc Get all sessions for the logged-in user
// @route GET /api/sessions/my-sessions
// @access Private (Requires JWT)
const getMySessions = async (req, res) => {
    try {
        const sessions = await Session.find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .populate("questions");

        res.status(200).json({ success: true, sessions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// @desc Get session by ID
// @route GET /api/sessions/:id
// @access Private (Requires JWT)
const getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id)
            .populate({
                path: "questions",
                options: { sort: { isPinned: -1,createdAt: 1 } },
            })
            .exec();

        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }

        res.status(200).json({ success: true, session });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// @desc Delete session by ID
// @route DELETE /api/sessions/:id
// @access Private (Requires JWT)
const deleteSession = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);

        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        // Check if the logged-in user is the owner of the session
        if (session.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized to delete the session" });
        }

        // First, delete all questions linked to this session
        await Question.deleteMany({ session: session._id });

        // Then, delete the session itself
        await session.deleteOne();

        res.status(200).json({ success: true, message: "Session deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = {
    createSession,
    getMySessions,
    getSessionById,
    deleteSession,
};

