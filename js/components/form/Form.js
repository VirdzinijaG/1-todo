class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.messageDOM = null;
        this.colorDOM = null;
        this.dateDOM = null;
        this.completedDOM = null;
        this.saveButtonDOM = null;
    }
    init() {
        // patikrtinti, ar validus selector
        if (!this.isValidSelector() ||
            !this.findTargetELement()) {
            return false;
        }
        this.render();
        this.findTargetELement();
        this.addEvents();
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
                        <input type="color" value="#3366ff">
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

        this.messageDOM = this.saveButtonDOM = this.DOM.querySelector("textarea");
        this.colorDOM = this.saveButtonDOM = this.DOM.querySelector('input[type="color"]');
        this.dateDOM = this.saveButtonDOM = this.DOM.querySelector('input[type="date"]');
        this.completedDOM = this.saveButtonDOM = this.DOM.querySelector('input[type="checkbox"]');
        this.saveButtonDOM = this.saveButtonDOM = this.DOM.querySelector("button.save");




        // this.saveButtonDOM = document.querySelector("");
        this.saveButtonDOM = this.DOM.querySelector("button.save");
        // this.saveButtonDOM = this.DOM.querySelector(".save");
        // this.saveButtonDOM = this.DOM.querySelector('button[type="submit"]');
        
    }
    addEvents() {
        this.saveButtonDOM.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log('click click...');
            const message = this.messageDOM.value;
            const color = this.colorDOM.value;
            const date = this.dateDOM.value;
            const completed = this.completedDOM.checked;

           if (this.isValidTask(message, color, date, completed)) {
               console.log("task is valid...");
           } else {
               console.log("task is NOT valid...");
           }

            console.log(message);
            console.log(color);
            console.log(date);
            console.log(completed);
        });
    }
    isValidTask() {
        if (!this.isValidMessage(message) ||
            !this.isValidColor(color) ||
            !this.isValidDate(date) ||
            !this.isValidCompleted(completed)) {
            return false;
        }
        return true;
    }
    isValidMessage(message) {
        return true;
    }
    isValidColor(color) {
        return true;
    }
    isValidDate(date) {
        return true;
    }
    isValidCompleted(completed) {
        return true;
    }
}

export { Form }
// eksportavimas failo