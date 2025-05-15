import cors from "cors"

const ACCEPTED_ORIGINS = [
    "http://localhost:1234"
]

export const corsMiddleWare = ({acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin)){
            return callback(null, true)
        }
        if(!origin){
            return callback(null, true)
        }
        return callback(new error("Not allowed by cors"))
    }
})
