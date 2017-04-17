import React from 'react';

const Select = ( props ) => <select className={ props.cssClass } name={ props.name } onChange={ props.callback !== undefined && props.callback } >
                              { props.topEntry === true && <option value={ props.topEntryVal }>{ props.topEntryName }</option> }
                              { props.data.map( ( entry ) => <option value={ props.valueKey === undefined ? entry : entry[ props.valueKey ] }>{ props.labelKey === undefined ? entry : entry[ props.labelKey ] }</option> ) }
                            </select>

export default Select;