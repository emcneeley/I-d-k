import { burgersService } from "../services/BurgersService"
import BaseController from "../utils/BaseController"
import { logger } from "../utils/Logger"

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')


        this.router
            .get('', this.getAllBurgers)
            .get('/:burgerId', this.getBurger)
            .put('/:burgerId', this.editBurger)
            .post('', this.createBurger)

    }



    async getAllBurgers(req, res, next) {
        try {
            // logger.log('what is req?', req)
            // logger.log('what is res', res)
            const burgers = await burgersService.getAllBurgers()
            res.send(burgers)

        } catch (error) {
            next(error)
        }
    }

    async getBurger(req, res, next) {
        try {
            // logger.log('what is the request id', req.params.burgerId)
            const burger = await burgersService.getBurgerById(req.params.burgerId)



        } catch (error) {
            next(error)
        }
    }

    async editBurger(req, res, next) {
        try {
            let burgerData = req.body
            burgerData.id = req.params.burgerId
            const burger = await burgersService.editBurger(burgerData)
            res.send(burger)

        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            const burger = await burgersService.createBurger(req.body)
            res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}