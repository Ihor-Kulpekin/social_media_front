import jwt from 'jsonwebtoken'

export default function decodeToken(accessToken){
    return jwt.decode(accessToken)
}
