const LoginPage=require("../pageobjects/loginpage")

describe('Login Test Using POM',  () => {
    it('login with valid credentials', async () => 
    {
        await LoginPage.open()

        await browser.pause(5000)

        await LoginPage.login("ineuron@ineuron.ai","ineuron")

    });
});