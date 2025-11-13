import { Fragment, useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const CommonDataTable = ({ dataList, headerLabel, columns, onEdit, deleteCallBack }) => {

    const [deleteObj, setDeleteObj] = useState(null);

    const filterFieldList = columns?.filter((item) => item?.isFilter)?.map((item) => ({ [item?.field]: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] } }))

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        ...filterFieldList?.reduce((acc, curr) => ({ ...acc, ...curr }), {})
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const accept = async () => {
        if (deleteCallBack) {
            deleteCallBack(deleteObj);
        }
    };

    const reject = () => { };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ margin: '0px', fontSize: '20px' }}>{headerLabel}</h4>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" style={{ padding: '8px 0px 8px 40px' }} />
                </IconField>
            </div >
        );
    };

    const header = renderHeader();

    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-info" onClick={() => onEdit(rowData)} />
                <Button icon="pi pi-trash" onClick={() => { confirm1(); setDeleteObj(rowData); }} className="p-button-rounded p-button-text p-button-danger" />
            </div>
        );
    };


    return (
        <Fragment>
            <DataTable value={dataList} paginator alwaysShowPaginator={dataList?.length > 0} header={header} rows={10} scrollable scrollHeight="50vh"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50, 100]} dataKey="id" filters={filters} filterDisplay="menu" emptyMessage="No data found."
                globalFilterFields={columns?.filter((item) => item?.isFilter)?.map((item) => item?.field)}
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                {columns?.map((item, index) => {
                    return (
                        <Column key={index} field={item?.field} header={item?.header} filterPlaceholder={item?.filterPlaceholder} style={{ minWidth: '14rem' }} />
                    )
                })}
                <Column header="Action" body={actionBodyTemplate} style={{ minWidth: '10rem' }} />
            </DataTable>
            <ConfirmDialog
                group="headless"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="flex flex-col items-center p-5 bg-white rounded-md">
                        <div className="rounded-full bg-[#06b6d4] text-white inline-flex justify-center items-center h-20 w-20 -mt-16">
                            <i className="pi pi-question" style={{ fontSize: '2rem' }}></i>
                        </div>
                        <span className="font-bold text-xl block my-4" ref={headerRef}>
                            {message?.header}
                        </span>
                        <p className="mb-0" ref={contentRef}>
                            {message?.message}
                        </p>
                        <div className="flex items-center gap-2 mt-4" ref={footerRef}>
                            <Button label="Delete" onClick={(event) => {
                                hide(event); accept();
                            }} className="w-32 p-button-danger p-confirm-dialog-accept rounded-md"></Button>
                            <Button label="Cancel" outlined
                                onClick={(event) => {
                                    hide(event); reject();
                                }} className="w-32 rounded-md" style={{ borderColor: '#06b6d4', color: '#06b6d4' }}></Button>
                        </div>
                    </div>
                )}
            />
        </Fragment>
    );
}

export default CommonDataTable;