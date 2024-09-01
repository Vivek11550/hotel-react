const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "project"
});


db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM hotelup";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "An error occurred while fetching data." });
        }
        return res.json(data);
    });
});

app.post('/create', cors(), (req, res) => {
    const { Room, Name, Email, Status, price } = req.body;
    const sql = "INSERT INTO hotelup (`Room`,`Name`,`Email`,`Status`,`price`) VALUES (?, ?, ?, ?, ?)";
    const values = [Room, Name, Email, Status, price];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "An error occurred while inserting data." });
        }
        
        console.log("Data inserted successfully.");
        return res.json({ message: "Data inserted successfully." });
    });
});

app.put('/update/:Room', (req, res) => {
    const { Room, Name, Email, Status, price } = req.body;
    const updateSql = "UPDATE hotelup SET Name = ?, Email = ?, Status = ?, price = ? WHERE Room = ?";
    const values = [Name, Email, Status, price, req.params.Room];

    db.query(updateSql, values, (err, updateResult) => {
        if (err) {
            console.error("Error executing update SQL query:", err);
            return res.status(500).json({ error: "An error occurred while updating data." });
        }
        
        console.log("Data updated successfully.");
        return res.json({ message: "Data updated successfully." });
    });
});

app.delete('/delete/:Room', (req, res) => {
    const deleteSql = "DELETE FROM hotelup WHERE Room = ?";
    const Room = req.params.Room;

    db.query(deleteSql, [Room], (err, result) => {
        if (err) {
            console.error("Error executing delete SQL query:", err);
            return res.status(500).json({ error: "An error occurred while deleting data." });
        }
        
        console.log("Data deleted successfully.");
        return res.json({ message: "Data deleted successfully." });
    });
});


// Sign-up route
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "An error occurred while signing up." });
        }
        
        console.log("User signed up successfully.");
        return res.json({ message: "User signed up successfully." });
    });
});


// Sign-in route
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "An error occurred while signing in." });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: "Invalid email or password." });
        }
        
        console.log("User signed in successfully.");
        return res.json({ message: "User signed in successfully." });
    });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
