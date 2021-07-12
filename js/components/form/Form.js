class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
    }
    init() {
        // patikrtinti, ar validus selector
        if (!this.isValidSelector() ||
            !this.findTargetELement()) {
            return false;
        }
        this.render();
        this.findTargetELement();
        // susirandame DOM elementa, kuriame reikia ipiesti forma
        console.log("tesiam darba...");
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === "") {
            console.error("ERROR: selector turi  buti string tipo ir ne tuscias");
            return false;
        }
        return true;
    }
    findTargetELement() {
        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.error("ERROR: pagal pateikkta selector elementas neegzistuoja");
            return false;
        }
        return true;
    }
    render() {
        const HTML = `<form class="form">
                    <div class="form-row">
                        <textarea placeholder="Message.."></textarea>
                    </div>
                    <div class="form-row">
                        <input type="color">
                    </div>
                    <div class="form-row">
                        <input type="date">
                    </div>
                    <div class="form-row">
                        <input type="checkbox"> <span>Task is completed?</span>
                    </div>
                    <div class="form-row">
                        <button class="save" type="submit">Save</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>`;

        // this.DOM.innerHTML = HTML;
        // this.DOM.innerHTML += HTML;
        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }
}

export { Form }
// eksportavimas failo