// MODEL
const Model = (() => {

    let data = [];

    return {

        calc(element) {
            let number, opirator;
            if (element === 'plus' || element === 'minus' || element === 'times' || element === 'devide' || element === 'dot') {
                switch (element) {
                    case 'plus': opirator = '+';
                        break;
                    case 'minus': opirator = '-';
                        break;
                    case 'times': opirator = '*';
                        break;
                    case 'devide': opirator = '/';
                        break;
                    case 'dot': opirator = '.';
                        break;
                    default: console.log(`looks like theres an error ${element}`);
                        break;
                }
                data.push(opirator);
                return opirator;
            }

            else if (element === 'equal') return this.eval();
            else {
                num = element;
                data.push(num);
                return num;
            }
        },

        eval() {
            let conc = data.join('');
            let result = eval(conc);
            data = [];
            data = [result];
            return result;
        },

        deleteAll() {data = []},

        testing() {
            return data;
        }
    }
})();

// VIEW
const View = (() => {

    return {
        calcUI(element, eq = 'notEqual') {
            let el = element;
            if (eq === 'notEqual') {
                const paragraph = document.querySelector('.display');
                paragraph.textContent = paragraph.textContent + el;
            }
            else if (eq = 'equal') {
                const paragraph = document.querySelector('.display');
                paragraph.textContent = '';
                paragraph.textContent = el;
            }
        },

        deleteAll() { document.querySelector('.display').textContent = '' },
    }

})();

// CONTROLLER-----------------------------------------
const Controller = ((modelCtrl, viewCtrl) => {
    // be able to know which button is clicked,
    document.querySelector('.keys').addEventListener('click', event => {
        const key = event.target.id;
        let num = key.split('-');
        let number = num[1];
        let result = modelCtrl.calc(number);
        if (number !== 'equal' && number !== 'delete') { viewCtrl.calcUI(result); }
        else if (number === 'equal') {
            viewCtrl.calcUI(result, 'equal');
        }
        else if (number === 'delete') {
            modelCtrl.deleteAll();
            viewCtrl.deleteAll();
        }
    });


})(Model, View);










