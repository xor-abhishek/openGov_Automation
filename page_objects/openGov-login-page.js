const app_url = require('../config').APP_URL
const ReSkin_app_url = require('../config').ReSkin_APP_URL

module.exports = {
    url: `${app_url}`,
    elements: {
        username: {
            selector: 'input[type=text]'
        },
        password: {
            selector: 'input[type=password]'
        },
        submitBtn: {
            selector: '.center-block'
        }
    },
    commands: [{
        async switchToCMTPage() {
            let handle
            await this.api.windowHandles(async (handles) => {
                if (handles.value.error) {
                    throw Error(result.value.error);
                }
                handle = handles.value[1]
            })
            await this.switchWindow(handle)
        },
        async enterUserCredentials() {
            return await this
                .waitForElementVisible('@username')
                .setValue('@username', 'dharini')
                .setValue('@password', 'xoriant123')
                .waitForElementVisible('@submitBtn')
                .click('@submitBtn')
        },
        async reEnterUserCredentials() {
            return await this
                .waitForElementVisible('@username')
                .setValue('@username', 'xoriant')
                .setValue('@password', 'X0riant1!')
                .waitForElementVisible('@submitBtn')
                .click('@submitBtn')
        },
        async verifyMainPageTitle() {
            let handle
            await this.api.windowHandles(async (handles) => {
                if (handles.value.error) {
                    throw Error(result.value.error);
                }
                handle = handles.value[1]
            })
            await this.switchWindow(handle)
            return await this
                .waitForElementVisible('body', 2000)
                .assert.title('Master Menu')
        }
    }]
}