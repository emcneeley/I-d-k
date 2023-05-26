import { FakeDb } from "../db/FakeDb"
import { BadRequest } from "../utils/Errors"

class BurgersService {
    createBurger(newBurgerData) {
        FakeDb.burgers.push(newBurgerData)
        return newBurgerData
    }
    editBurger(updateBurgerData) {
        const burger = this.getBurgerById(updateBurgerData.id)

        burger.name = updateBurgerData.name || burger.name
        burger.picture = updateBurgerData.picture || burger.picture

        return burger
    }
    getBurgerById(burgerId) {
        const burger = FakeDb.burgers.find(b => b.id == burgerId)

        if (!burger) {
            throw new BadRequest('Invalid Burger Id')
        }

        return burger
    }

    async getAllBurgers() {
        return FakeDb.burgers

    }

}

export const burgersService = new BurgersService 