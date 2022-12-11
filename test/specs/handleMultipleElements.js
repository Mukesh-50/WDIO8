describe('Handle Multiple Elements', () => {
    it('Usage of $$ ', async() => {
        
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        await browser.pause(3000)

        const allElements=await $$("//div[contains(@class,'login-footer-sm')]//a")

        console.log("Total elements "+allElements.length);

        for(let i=0;i<allElements.length;i++)
        {

            const hrefValue=await allElements[i].getAttribute("href")

            console.log("Href value is "+hrefValue);

            if(hrefValue.includes("youtube"))
            {
                await allElements[i].click()
                await browser.pause(3000)
                break
            }
        }

    });
});