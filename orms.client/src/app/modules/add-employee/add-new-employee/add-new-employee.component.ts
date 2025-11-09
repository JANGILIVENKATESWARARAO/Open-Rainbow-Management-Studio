import { Component } from '@angular/core';
import { DocumentsUploadComponent } from '../documents-upload/documents-upload.component';
import { EducationDetailsComponent } from '../education-details/education-details.component';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { InsuranceDetailsComponent } from '../insurance-details/insurance-details.component';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { ButtonNavigationComponent } from "../../common-modules/button-navigation/button-navigation.component";
import { BasicCardComponent } from '../../basic-card/basic-card.component';

@Component({
    selector: 'app-add-new-employee',
    templateUrl: './add-new-employee.component.html',
    styleUrl: './add-new-employee.component.css',
    imports: [BasicInfoComponent, ContactInfoComponent, DocumentsUploadComponent, EducationDetailsComponent, InsuranceDetailsComponent, JobDetailsComponent, ButtonNavigationComponent, BasicCardComponent]
})
export class AddNewEmployeeComponent {

}
