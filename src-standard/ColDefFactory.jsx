import SkillsCellRenderer from './SkillsCellRenderer.jsx';
import NameCellEditor from './NameCellEditor.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';

export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true},
            {
                headerName: 'Employee',
                children: [
                    {headerName: "Name", field: "name", enableRowGroup: true, enablePivot: true,
                        width: 150, pinned: true, editable: true,
                        // use a React cellEditor
                        cellEditorFramework: NameCellEditor
                    },
                    {headerName: "Country", field: "country", width: 150, enableRowGroup: true, enablePivot: true,
                        // an example of using a non-React cell renderer
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: {cellRenderer: countryCellRenderer, cellHeight: 20}}
                    ,
                    {headerName: "DOB", field: "dob", width: 150, enableRowGroup: true, enablePivot: true, filter:'date'}
                ]
            },
            {
                headerName: 'IT Skills',
                children: [
                    {headerName: "Skills", width: 125, suppressSorting: true, field: 'skills', enableRowGroup: true, enablePivot: true,
                        // supply a React component
                        cellRendererFramework: SkillsCellRenderer,
                        // supply a React component
                        filterFramework: SkillsFilter
                    },
                    {headerName: "Proficiency", field: "proficiency", width: 120, enableValue: true,
                        // supply a React component
                        cellRendererFramework: ProficiencyCellRenderer,
                        // supply a React component
                        filterFramework: ProficiencyFilter
                    }
                ]
            },
            {
                headerName: 'Contact',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
                    {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
                    {headerName: "Address", field: "address", width: 500, filter: 'text'}
                ]
            }
        ];
        return columnDefs;
    }
}

// this is a simple cell renderer, putting together static html, no
// need to use React for it.
function countryCellRenderer(params) {
    if (params.value) {
        var flag = "<img border='0' width='15' height='10' " +
            "style='margin-bottom: 2px' src='http://flags.fmcdn.net/data/flags/mini/"
            + RefData.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    } else {
        return null;
    }
}
