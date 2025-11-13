import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useRef } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { InputNumber } from 'primereact/inputnumber';

const InputField = ({ name, label, clsName, onChange, value, helperText, errMsg, disabled, max }) => {
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={name} className="font-bold">{label}<span className="text-red-500">*</span></label>
                <InputText max={max} disabled={disabled} autoComplete='off' value={value ?? ''} required type="text" id={name} className="p-inputtext-sm w-full" name={name} onChange={onChange} aria-describedby={name + "-help"} />
                {(errMsg || helperText) && <small className={errMsg ? 'text-red-500' : 'text-gray-500 text-xs italic'} id={`${name}-help`}>{errMsg ?? helperText}</small>}
            </div>
        </div>
    )
}

const InputNumberField = ({ name, label, clsName, onChange, value, helperText, errMsg, disabled }) => {
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={name} className="font-bold">{label}<span className="text-red-500">*</span></label>
                <InputNumber disabled={disabled} autoComplete='off' value={value ?? ''} required id={name}
                    className="p-inputtext-sm w-full" name={name} onChange={(e) => onChange({ target: { name: name, value: e.value } })} locale="en-IN" minFractionDigits={2} aria-describedby={name + "-help"} />
                {(errMsg || helperText) && <small className={errMsg ? 'text-red-500' : 'text-gray-500 text-xs italic'} id={`${name}-help`}>{errMsg ?? helperText}</small>}
            </div>
        </div>
    )
}

const MultiSelectDropDown = ({ name, lable, clsName, options, onChange, value, errMsg }) => {
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={name} className="font-bold">{lable}<span className="text-red-500">*</span></label>
                <MultiSelect value={value} disabled={options?.length === 0} required className="p-inputtext-sm w-full" name={name} onChange={onChange} options={options} optionLabel="label" maxSelectedLabels={3} />
                {errMsg && <small className='text-red-500' id={`${name}-help`}>{errMsg}</small>}
            </div>
        </div>
    )
}

const DropDownField = ({ name, lable, clsName, options, onChange, value, errMsg }) => {
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={name} className="font-bold">{lable}<span className="text-red-500">*</span></label>
                <Dropdown value={value} disabled={options?.length === 0} className="p-inputtext-sm w-full" name={name} onChange={onChange} options={options} optionLabel="label" editable />
                {errMsg && <small className='text-red-500' id={`${name}-help`}>{errMsg}</small>}
            </div>
        </div>
    )
}

const RadioGroup = ({ name, label, clsName, onChange, value, options, errMsg }) => {
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-5 w-full`}>
                <label htmlFor={name} className="font-bold">{label}<span className="text-red-500">*</span></label>
                <div className="flex flex-row flex-wrap gap-2 items-center">
                    {options?.map((option) => (
                        <div className='flex flex-row gap-2 items-center' key={option?.value}>
                            <RadioButton inputId={option?.value} name={name} value={option?.value} onChange={onChange} checked={value === option?.value} />
                            <label htmlFor={name}>{option?.label}</label>
                        </div>
                    ))}
                </div>
                {errMsg && <small className='text-red-500' id={`${name}-help`}>{errMsg}</small>}
            </div>
        </div>
    )
}

const CalendarField = ({ name, label, minDate, clsName, onChange, value, errMsg, timeOnly }) => {
    const calendarRef = useRef(null);
    return (
        <div className={`w-full ${clsName}`}>
            <div className={`flex flex-col gap-2 w-full`}>
                <label htmlFor={name} className="font-bold">{label}<span className="text-red-500">*</span></label>
                <Calendar ref={calendarRef} minDate={minDate} autoComplete='off' value={value ?? ''} required type="text" id={name} className="p-inputtext-sm w-full" name={name} onChange={onChange} aria-describedby={name + "-help"} hourFormat="12" timeOnly={timeOnly} />
                {errMsg && <small className='text-red-500' id={`${name}-help`}>{errMsg}</small>}
            </div>
        </div>
    )
}

const MultiCalendarField = ({ name, label, clsName, onChange, value, errMsg, minDate }) => {
    return (
        <div className={`"w-full ${clsName}`}>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor={name} className="font-bold">{label}<span className="text-red-500">*</span></label>
                <Calendar minDate={minDate} value={value ?? []} autoComplete='off' required id={name} className="p-inputtext-sm w-full" name={name} onChange={onChange} selectionMode="multiple" aria-describedby={`${name}-help`} />
                {errMsg && <small className='text-red-500' id={`${name}-help`}>{errMsg}</small>}
            </div>
        </div>
    )
}

export { InputNumberField, InputField, DropDownField, RadioGroup, CalendarField, MultiSelectDropDown, MultiCalendarField }