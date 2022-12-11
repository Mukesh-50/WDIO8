describe('Handle Frames ', () => {
    it('Handle Frames', async() => {

        await browser.url("https://ineuron-courses.vercel.app/practise")

        await browser.pause(3000)

        const frame=await $("//iframe[contains(@src,'ineuron')]")

        await browser.switchToFrame(frame)

        await (await $("//button[text()='Log in ']")).click()

        await browser.pause(3000)

        /*
            complete all activities
        */

        await browser.switchToParentFrame()
        
        await (await $("//button[text()='Log in ']")).click()
        
        await browser.pause(3000)

    });

    


});