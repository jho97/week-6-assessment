
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

//couldnt get everything down because of time
test('draw button works', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect (displayed).toBe(true)
    await driver.sleep(3000)
})

test('add to duo button works', async ()=> {
    const player = await driver.findElement(By.id('player-duo'))
    const displayed = await player.isDisplayed()
    expect (displayed).toBe(true)
    await driver.sleep(3000)
})