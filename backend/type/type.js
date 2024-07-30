import zod from 'zod'

const validateUser = zod.object({
    username: zod.string().min(3), 
    email: zod.string().email(),
    password: zod.string().min(6),
})


export default validateUser;