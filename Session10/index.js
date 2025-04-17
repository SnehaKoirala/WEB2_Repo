import express from "express" 
import cors from "cors";
import {POKEMON}  from "./Pokemon.js"
import { logger } from "./logger.js" // import the middleware 
import bcrypt from "bcrypt" 
import {users} from "./User.js" // import the users array
import jwt from "jsonwebtoken" // Ex- 5
import dotenv from "dotenv/config"// Ex-5




const app = express()
app.use(logger) // use the middleware -ex 3
app.use(express.json()) // for parsing application/json -ex 4
app.use(cors({ exposedHeaders: "Authorization" })); // Allow the frontend to access the "Authorization" header

// Exercise 1

app.get("/", (req, res) => {
    res.send("Hello, World!")
})

// Exercise 5

app.post("/login", async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await authenticateUser(username, password)
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.set("Authorization", `Bearer ${token}`).sendStatus(200)
    } catch (err) {
        res.status(401).send({ error: "Unauthorized" })
    }
})

async function authenticateUser(username, password) {
    const user = users.find(user => user.username === username)
    if (!user) throw new Error("Invalid credentials")

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) throw new Error("Invalid credentials")

    return { username: user.username }
}

// Exercise 4


app.post("/signup", async (req, res) => {
    const { username, password } = req.body
    try {
        await createUser(username, password)
        res.send({ message: "User created!" })
    } catch (err) {
        res.status(500).send({ error: "Error signing up" })
    }
})

async function createUser(username, password) {
    const existingUser = users.find(user => user.username === username)
    if (existingUser) throw new Error("Name taken!")

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { username, password: hashedPassword }
    users.push(newUser)
    return newUser
}


// Exercise 2 

app.get("/:id", (req, res) =>{
    const reqId = parseInt(req.params.id)
    const pokemon = POKEMON.find(p => p.id === reqId)
    if (pokemon) {
        res.json(pokemon)
    } else {
        res.status(404).send({ msg: "No pokemon with the id of" + reqId})
    }
}) 
// Exercise 3


app.get("/:id", (req, res) =>{
    const reqId = parseInt(req.params.id)
    const pokemon = POKEMON.find(p => p.id === reqId)
    if (pokemon) {
        res.json(pokemon)
    } else {
        res.status(404).send({ msg: "No pokemon with the id of" + reqId})
    }
}) 


// Exercise 6

app.get("/protected", requiresAuth, (req, res) => {
    res.send({ message: `Hello ${req.user.username}! This route is protected.` })
})

function requiresAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401).send({ error: "Unauthorized" })

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ error: "Unauthorized" })
        req.user = decoded
        next()
})
}
    
// Exercise 7


app.get("/protected", requireAuth, (req, res) => {
    res.json({ message: `Hello ${req.user.username}! This route is protected.` });
});

function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send({ error: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ error: "Unauthorized" });
        req.user = decoded; // Attach the decoded JWT payload to the request
        next(); // Allow access to the next middleware or route handler
    });
}




app.listen(5000)   





