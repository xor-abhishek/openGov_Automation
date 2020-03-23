
module.exports = {
  tag : ['HumanResource'],
  elements: {
    humanResourceTitle: {
      selector: '//*[text()= "Human Resources"]',
      locateStrategy: "xpath"
    },
    myTaskTab: {
      selector: '//*[@id="favorite"]',
      locateStrategy: "xpath"
    },
    menuBack: {
      selector: '//*[@id="favorite"]',
      locateStrategy: "xpath"
    },
    controlFile: {
      selector: '//span[@id="CMMEN1_1_MENU"]',
      locateStrategy: "xpath"
    },
    workWithEmployees: {
      selector: '//*[contains(text(),"Work with Employees")]',
      locateStrategy: "xpath"
    },
    reports: {
      selector: '//span[@id="CMMEN1_8_MENU"]',
      locateStrategy: "xpath"
    },
    employeeNumber: {
      selector: '//input[@id="POS_EMPLOYEE_NUMBER"]',
      locateStrategy: "xpath"
    },
    firstName: {
      selector: '//input[@id="POS_FIRST_NAME"]',
      locateStrategy: "xpath"
    },
    lastName: {
      selector: '//input[@id="POS_LAST_NAME"]',
      locateStrategy: "xpath"
    },
    Empoyee_Number: { 
    selector: '//div[contains(text(),"Employee Number")]',
    locateStrategy: "xpath"
    },
    Full_Name: { 
      selector: '//div[contains(text(),"Full Name")]',
      locateStrategy: "xpath"
    },
    dateOfBirth: {
      selector: '//input[@id="POS_DATE_OF_BIRTH"]',
      locateStrategy: "xpath"
    },
    Insurance: {
      selector: '//a[contains(text(),"Insurance")]',
      locateStrategy: "xpath"
    },
    Certifications: {
      selector: '//a[contains(text(),"Certifications")]',
      locateStrategy: "xpath"
    },
    Education: {
      selector: '//a[contains(text(),"Education")]',
      locateStrategy: "xpath"
    },
    Complaints: {
      selector: '//a[contains(text(),"Complaints")]',
      locateStrategy: "xpath"
    },
    Reprimands: {
      selector: '//a[contains(text(),"Reprimands")]',
      locateStrategy: "xpath"
    },
    Contacts: {
      selector: '//a[contains(text(),"Contacts")]',
      locateStrategy: "xpath"
    },
    expandButton:{
      selector: '//td[@class="DEDUCTION_TYPE sorting_1"]',
      locateStrategy: "xpath"
    },
    nextButton:{
      selector: '//a[contains(text(),"Next")]',
      locateStrategy: "xpath"
    },
    previousButton:{
      selector: '//a[contains(text(),"Previous")]',
      locateStrategy: "xpath"
    },
    humanResourceSectionTitle: 'span:nth-child(7) ul:nth-child(1) > div.section_title:nth-child(1)',
    expandAll: 'button.left_button',
    collapseAll: 'button.right_button',
    SaveState: 'div.switch_label',
    controlFileExpandbutton: 'li.contentContainer:nth-child(3) > img.expand_collapse_icon',
    reportExpandButton: 'li.contentContainer:nth-child(1) > img.expand_collapse_icon',
    employees: '.EMPLOYEE_NUMBER',
    full_name: '.FULL_NAME',
    address: '.ENTITY_ADDRESS_1',
    phone_number: '.ENTITY_PHONE_NUMBER',
    date_of_birth: '.DATE_OF_BIRTH',
    hire_date: '.HIRE_DATE',
    description: '.DESCRIPTION',
    position: '.POSITION',
    ABBREVIATION: '.dt-center.DEDUCTION_ABBREVIATION',
    DEDUCTION_TYPE: 'tr.odd.right-click > td.DEDUCTION_TYPE.sorting_1',
    RATE_GROUP: '.dt-center.DEDUCTION_RATE_GROUP',
    START_DATE: 'th.stw-th.dt-center.START_DATE',
    END_DATE:'th.stw-th.dt-center.END_DATE',
    DIRECT_DEPOSIT: 'th.stw-th.dt-center.DIRECT_DEPOSIT',
    EMPLOYEE_RATE: 'th.stw-th.dt-center.CURRENT_RATE',
    EMPLOYER_RATE_TYPE:'th.stw-th.dt-center.CURRENT_RATE_TYPE'
  },
  commands: [{
    async verifyHumanResourcePageURL() {
      await this.waitForElementVisible("body", 2000)
      await this.assert.urlContains("url_app_code=HR");
    },
    async verifyMytaskVisibility() {
       await this.assert.elementPresent("@myTaskTab");
    },
    async verifyMenuBackVisibility() {
       await this.assert.elementPresent("@menuBack");
    },
    async switchToHumanResourcePage() {
       await this.click("@humanResourceTitle")
       await this.pause("3000");
    },
    async verifyHumanResourcePageTitle() {
       await this.waitForElementVisible("body", 2000).assert.title(
        "Human Resources"
      );
    },
    async searchByEmployee(input) {
      let ip = input;
      await this.clearValue('@employeeNumber')
      await this.setValue('@employeeNumber', ip)
      await this.pause(16000)
    },
    async verifyEmployeeRecord(employeeNumber) {
      await this.assert.containsText('tr.odd:nth-child(1) > td.EMPLOYEE_NUMBER.sorting_1', employeeNumber)
    },

    // Needs to be refractored to add logic of Sort functionality for Employee number
    async verifyListIsSorted() {
      let textList = []
      await this.api.elements('css selector','.odd:nth-child(n)' , async (elements) => {
        await elements.value.map(async element  => {
          await this.api.elementIdText(element.ELEMENT , text => {
            textList.push(text.value)
          })
        })
      }) 
      console.log(`text ${JSON.stringify(textList)}`)  
    }
  }]
};