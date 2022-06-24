/* object with legend info

    @entries:
    // entry key corresponds to value on the toggle element
    'value': {
        iconType: '' // symbology. 'lines' and 'circles' included in styles. Can be customized
        label: '' // legend icon label
        color: '' // hex code, rgb value, valid name, etc
    }

*/
const legendConfig = {
  pop: {
    label: "pop",
  },
  popABS: {
    label: "popABS",
  },
  popPER: {
    label: "popPER",
  },
  popSQM: {
    label: "popSQM",
  },
  emp: {
    label: "emp",
  },
  empABS: {
    label: "empABS",
  },
  empPER: {
    label: "empPER",
  },
  empSQM: {
    label: "empSQM",
  },
};

export default legendConfig;
