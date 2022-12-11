const Page=require("./page")


class LoginPage extends Page{

    get inputUsername()
    {
        return $("//input[@id='email1']")
    }

    get inputPassword(){
        return $("#password1")
    }

    get btnSubmit()
    {
        return $("//button[normalize-space()='Sign in']")
    }

    async login(username,password)
    {
        await this.inputUsername.setValue(username)

        await this.inputPassword.setValue(password)

        await this.btnSubmit.click()
    }

    async open(){
        return super.open("login")
    }

}

module.exports=new LoginPage()