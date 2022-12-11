describe('Handle Select  Dropdown', () => {
    it('Usage of select ', async() => {
        
        await browser.url("https://ineuron-courses.vercel.app/signup")

        await (await $("#state")).click()

        await (await $("#state")).selectByIndex(3)

        await browser.pause(2000)

        await (await $("#state")).selectByVisibleText("Karnataka")

        await browser.pause(2000)

        await (await $("#state")).selectByAttribute("value","Kerala")

        await browser.pause(2000)

        console.log(await (await $("#state")).getValue())


    });
});