describe("MyFirstWDIORecording", () => {
    it("tests MyFirstWDIORecording", async () => {
      await browser.setWindowSize(1831, 462)
      await browser.pause(5000)
      await browser.url("https://ineuron-courses.vercel.app/")
      expect(browser).toHaveUrl("https://ineuron-courses.vercel.app/")
      await browser.$("//*[@id=\"root\"]/div/nav/div/div[2]/button").click()
      await browser.$("#email1").setValue("ineuron@ineuron.ai")
      await browser.$("#password1").setValue("ineuron")
      await browser.$("//*[@id=\"root\"]/div/div/div/form/div/button").click()
      await browser.$("//*[@id=\"root\"]/div/nav/div/div[2]/button").click()
    });
  });
  