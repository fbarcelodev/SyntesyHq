import React from 'react';
import StackedForm from './StackedForm';

const ProjectCreate = () => (
    <div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <StackedForm 
                    onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} 
                />
            </div>
            <div className="col-md-3"></div>
        </div>

    </div>
);

export default ProjectCreate;