describe('Handle Multiple Window', () => {
    it('Handle Tabs or Windows', async() => {

        await browser.url("https://ineuron-courses.vercel.app/")

        await browser.newWindow("https://ineuron-courses.vercel.app/login")

        await browser.pause(3000)

        await browser.switchWindow('https://ineuron-courses.vercel.app/login')

        await (await $("#email1")).setValue("mukesh@wdio.com")

        await browser.pause(3000)

        await browser.closeWindow()

        await browser.switchWindow("iNeuron Courses")

    });

    


});