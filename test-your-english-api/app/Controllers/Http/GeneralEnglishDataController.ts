// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TestQuestion from "App/Models/TestQuestion";

export default class GeneralEnglishDataController {
    public async index () {
        const testData = await TestQuestion.query().orderBy('created_at', 'asc')
        return testData
    }
}
