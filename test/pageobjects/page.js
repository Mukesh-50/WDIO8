module.exports=class Page{

    async open(path)
    {
        return browser.url("https://ineuron-courses.vercel.app/"+path)
    }

}