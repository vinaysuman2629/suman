import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
        }

        const token = authHeader.split(" ")[1]; // ✅ Extract token correctly

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id; // ✅ Attach user ID to request
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        res.status(401).json({ success: false, message: "Invalid Token, Please Login Again" });
    }
};

export default authUser