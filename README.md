# LWC Single Selection Checkbox Group Component

This LWC Checkbox Group component allows single selection of a checkbox, instead of the multiple selection Salesforce offers. It is designed to be used in Lightning Web Components in Salesforce.
![Image Description](https://github.com/bigkemp/lwc_single_selection_combobox/blob/main/example.png)


## Usage

To use this component, add it to your Lightning Web Component by importing it and including it in your markup. The component accepts the following properties:

- **options**: An array of objects representing the checkboxes to display. Each object should have a `label` property representing the text to display for the checkbox, and a `value` property representing the value of the checkbox.
- **label**: The label to display for the component.
- **name**: The name attribute's value on the child lightning-input component.
- **value**: The default value defined by the parent and managed by the child.

Additionally, there is a custom event called `selected` that the parent component can listen for by using the `onselected` attribute. The value of the selected option will be available in the `event.detail.value` property.

Example usage:

HTML:
```html
<c-lwc_single_selection_combobox 
    name={planSelectionAttName}
    label={planSelectionTitle}
    options={plans}
    onselected={chosePlan}>
</c-lwc_single_selection_combobox>
```
Javascript:
```javascript
    plans = [{label:"Great Plan", value:"great"},{label:"Good Plan", value:"good"},{label:"Horrible Plan", value:"horrible"}]
    planSelectionAttName = "myplans"
    planSelectionTitle = "Select a Plan!"
    chosePlan(e){
        console.log('e.detail.value',e.detail.value);
    }
```

## Contributing
Contributions to this project are welcome! To contribute, fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
