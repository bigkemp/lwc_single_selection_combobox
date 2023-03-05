import { LightningElement,api } from 'lwc';

export default class lwc_single_selection_combobox extends LightningElement {
    @api options =[];
    @api label="Checkbox Group";
    @api name="Checkbox Group";
    @api value;
    runOnce = false;
    renderedCallback(){
        if(this.runOnce){
            return;
        }
        this.runOnce = true;
        if(this.value != undefined){
            this.findSelection()
        }
    }

    resetSelections(){
        this.template.querySelectorAll("lightning-input").forEach(checbox => {
            checbox.checked = false;
        });
    }

    findSelection(){
        this.template.querySelectorAll("lightning-input").forEach(checbox => {
            if(checbox.value == this.value){
                checbox.checked = true;
            }
        });
    }

    handleSelection(event){
        this.resetSelections();
        event.target.checked = true;
        let val = event.target.value;
        const selectedEvent = new CustomEvent('selected', { detail: {value:val}});
        this.dispatchEvent(selectedEvent);
    }

    

}