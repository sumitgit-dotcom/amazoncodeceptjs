exports.Login = class Login{

constructor(page)
{
    this.page = page
    this.signinbtn = page.getByRole('link', { name: 'Hello, sign in Account & Lists' })
    this.emailfield = page.getByLabel('Email or mobile phone number')
    this.continuebtn = page.getByLabel('Continue')
    this.passwd = page.getByLabel('Password')
    this.signinbtn = page.getByLabel('Sign in')
}
async gotologin()
{

    await this.page.goto('https://www.amazon.in/');
}
async login()
{

    await this.signinbtn.click()
    await this.emailfield.fill('username')
    await this.continuebtn.click()
    await this.passwd.fill('password')
    await this.signinbtn.click()

}

}