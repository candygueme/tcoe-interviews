
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Shadowdom extends Page {
    /**
     * define selectors using getter methods
     */
    get generator() {
        return $('guid-generator');
    }


    get generatorTextButton() {
        return this.generator.shadow$('button#buttonGenerate');
    }

    get copyButton() {
        return this.generator.shadow$('button#buttonCopy');
    }

    get editField() {
        return this.generator.shadow$('input#editField');
    }

    /**
        * a method to get value in element
        */
    async generatorText() {
        await (await this.generatorTextButton).waitForClickable()
        await this.generatorTextButton.click()
        let valueStart = await this.editField.getValue()
        return valueStart;
    }
    /**
         * a method to get value of text field
         */
    async saveText() {
        let valueStart = await this.editField.getValue()
        return valueStart;
    }
    /**
     * a method to click on copy button
     */
    async copyText() {
        await this.copyButton.click()
    }
    /**
        * a method to paste value after click on copy button
        */
    async pasteText() {
        await this.editField.clearValue()
        await this.editField.click()
        await browser.keys(['Control', 'v'])
    }
    /**
        * overwrite specific options to adapt it to page object
        */
    open() {
        return super.open('shadowdom');
    }


}
module.exports = new Shadowdom();
