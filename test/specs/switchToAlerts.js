describe('Handle JS Alert', () => {
    it('Accept Alert', async() => {

        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")

        await (await $("//button[normalize-space()='Click for JS Alert']")).click()

        const altText=await browser.getAlertText()

        expect(altText).toContain("I am a JS Alert")

        await browser.acceptAlert()
    });

    


});