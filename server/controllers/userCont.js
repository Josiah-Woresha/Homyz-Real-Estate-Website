import asyncHandler from 'express-async-handler'

import { Prisma } from '../config/prismaConfig.js'

export const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let {email} = req.body;

    console.log(email)
})