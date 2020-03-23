const {
  client
} = require("nightwatch-api");
const {
  Given,
  Then
} = require("cucumber");
const humanResourcePage = client.page["HumanResource-page"]();

let elements = {
  'Control Files': '@controlFile',
  'Work with Employees': '@workWithEmployees',
  Reports: '@reports',
  EMPLOYEE_NUMBER: '@employees',
  FULL_NAME: '@full_name',
  ADDRESS: '@address',
  DATE_OF_BIRTH: '@date_of_birth',
  ENTITY_PHONE_NUMBER: '@phone_number',
  HIRE_DATE: '@hire_date',
  DESCRIPTION: '@description',
  POSITION: '@position',
  Insurance: '@Insurance',
  Certifications: '@Certifications',
  Education : '@Education',
  Complaints : '@Complaints',
  Reprimands : '@Reprimands',
  Contacts : '@Contacts',
  expandButton: '@expandButton',
  DEDUCTION_TYPE :'@DEDUCTION_TYPE',
  ABBREVIATION: '@ABBREVIATION',
  RATE_GROUP : '@RATE_GROUP',
  START_DATE : '@START_DATE',
  END_DATE : '@END_DATE',
  DIRECT_DEPOSIT : '@DIRECT_DEPOSIT',
  EMPLOYEE_RATE: '@EMPLOYEE_RATE',
  EMPLOYER_RATE_TYPE : '@EMPLOYER_RATE_TYPE',
  nextButton : '@nextButton',
  previousButton : '@previousButton'
};

Given(/I navigated to Human Resource Page$/, async () => {
  try {
    await humanResourcePage.switchToHumanResourcePage()
  } catch (err) {
    throw err;
  }
});

Then(/I verify the Human Resource Page URL$/, async () => {
  try {
    await humanResourcePage.verifyHumanResourcePageURL();
  } catch (err) {
    throw err;
  }
});

Then(/I verify the Human Resource Page title$/, async () => {
  try {
    await humanResourcePage.verifyHumanResourcePageTitle()
  } catch (err) {
    throw err;
  }
});

Then(/I verify the my task containers visibility$/, async () => {
  try {
    await humanResourcePage.verifyMytaskVisibility()
  } catch (err) {
    throw err;
  }
});

Then(/I verify the menu task containers visibility$/, async () => {
  try {
    await humanResourcePage.verifyMenuBackVisibility()
  } catch (err) {
    throw err;
  }
});

Then(/I maximize the window$/, async () => {
  try {
    await client.pause(2000)
    await client.fullscreenWindow()
  } catch (err) {
    throw err;
  }
});

Then(/Elements "([^"]*)" should be visible in human resource page$/, async webElements => {
  const element = elements[webElements];
  try {
    await humanResourcePage.expect.element(element).to.be.visible
  } catch (err) {
    throw err;
  }
});

Then(/I selected the "([^"]*)"$/, async webElements => {
  const element = elements[webElements];
  try {
    //await humanResourcePage.waitForElementVisible(element)
    await humanResourcePage.click(element)
  } catch (err) {
    throw err;
  }
})

Then(/Following "([^"]*)" should be visible on the page$/, async (webElements, table) => {
  let rows = table.rows()
  try {
    await rows.forEach(async row => {
      const element = elements[row]
      await humanResourcePage.expect.element(element).to.be.visible
    })
  } catch (err) {
    throw err;
  }
})

Then(/Search by Employee( Number)?( FirstName)?( LastName)?( DOB)?$/, async (employeeNumber, firstName, lastName, dateOfBirth) => {
  try {
    await humanResourcePage.searchByEmployee(5)
    await humanResourcePage.clearValue('@employeeNumber')
  } catch (err) {
    throw err;
  }
})

Then(/Verify that Employee record number "([^"]*)"$/, async (employeeNumber) => {
  try {
    await humanResourcePage.verifyEmployeeRecord(employeeNumber)
  } catch (err) {
    throw err;
  }
})

Then(/Verify that Employee list are sorted$/, async () => {
  try {
    await humanResourcePage.verifyListIsSorted()
  } catch (err) {
    throw err;
  }
})

Then(/I Select and Deselect the Employee record$/, async () => {
  try {
    await humanResourcePage.click('@employees')
    await client.pause(5000)
    await humanResourcePage.click('@employees')
  } catch (err) {
    throw err;
  }
})

Then(/I selected the first employee record$/, async () => {
  try {
    await client.pause(4000)
    await humanResourcePage.click('tr.odd:nth-child(1) > td.EMPLOYEE_NUMBER')
    await client.pause(4000)
  } catch (err) {
    throw err;
  }
})