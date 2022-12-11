describe('Handle Sync Issue', () => {
    it('Wait For Displayed', async() => {

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")

        await (await $("//button[normalize-space()='Start']")).click()

        const ele=await $("//h4[normalize-space()='Hello World!']")

        await ele.waitForDisplayed({timeout:10000})

        console.log("Is text displayed "+await ele.isDisplayed());

    });


    it('Wait For Clickable', async() => {

        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1")

        await (await $("//button[normalize-space()='Start']")).click()

        const ele=await $("//h4[normalize-space()='Hello World!']")

        await ele.waitForClickable({timeout:10000})

        console.log("Is text displayed "+await ele.isDisplayed());

    });

    it.only('Wait For Custom Condition', async() => {

        await browser.url("http://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html")

        await (await $("//button[normalize-space()='Click me to start timer']")).click()

        const element= await $("#demo")

        await element.waitUntil(async function (){

               return (await this.getText())==="WebDriver"

        }
        ,
        {
            timeout:18000,
            timeoutMsg:"Sorry could not find element within time"
        })




    });


});