const mongoose = require("mongoose");
const Customer = require("./models/user");

// mongoose.connect(`mongodb+srv://sumitsingh:${process.env.DB_PASS}@banking.rd9xt.mongodb.net/banking?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

const v = async () => {
    await Customer.deleteMany({});
    await Customer.insertMany([{
        username: "Sumit Singh", email: "xyzRajput@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1475869568365-7b6051b1e030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80", contact: 8219705160, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ."
    }, {
        username: "shubham rana", email: "shubhamrana888@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 7712348545, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    }, {
        username: "harshad mehta", email: "bigbull@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib&auto=format&auto=format&fit=crop&w=750&q=80", contact: 6987452169, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "Gitesh", email: "gitesh78@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1604995236333-84f3249e572c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 257932145, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam."
    },
    {
        username: "preetam pyaare", email: "preetam_pyaare@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 5698745214, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "ankush thakur", email: "ankush_thakur@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 9632587412, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam ipsum."
    },
    {
        username: "badshahh", email: "badboy@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1546998590-6a6195049fa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80", contact: 1234578965, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ullam."
    },
    {
        username: "ishu singh", email: "xzRajput@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1592728036073-d0ae31a18fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", contact: 8245505160, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ."
    },
    {
        username: "ishant Thakur", email: "xRajput@gmail.com", Balance: 500, avatar: "https://images.unsplash.com/photo-1509949611184-ef65ab58546e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80", contact: 8245507860, about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam molestias, ab temporibus natus maiores soluta quis inventore debitis modi nesciunt? Nam ."
    }
]);
};

v();
