import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { EmployeePreviewDetailsComponent } from '../../../../app/modules/add-employee/employee-preview/employee-preview-details/employee-preview-details.component';

const meta: Meta<EmployeePreviewDetailsComponent> = {
  title: 'Modules/AddEmployee/EmployeePreview/EmployeePreviewDetails',
  component: EmployeePreviewDetailsComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    employeeDetails: {
      basicInformation: {
        dateOfJoining: 'test',
        employeeName: 'test',
        employeeId: 'test',
        dateOfBirth: 'test',
        gender: 'test',
        bloodGroup: 'test',
        maritalStatus: 'test'
      },
      contactInformation: {
        personalEmail: 'test',
        linkedInUrl: 'test',
        contactNumber: 'test',
        permanentAddress: 'test',
        presentAddress: 'test',
        employeeContactName1: 'test',
        employeeContactName2: 'test',
        employeeContactNumber1: 'test',
        employeeContactNumber2: 'test',
        emergencyContactRelation1: 'test',
        employeeContactRelation2: 'test'
      },
      jobDetails: {
        officeEmail: 'test',
        department: 'test',
        currentDesignation: 'test',
        employmentType: 'test',
        payLevel: 'test',
        reportingManager: 'test',
        workLocation: 'test',
        shiftTimings: 'test',
        leaveAllocation: {
          casual: 10,
          festival: 30,
          earned: 70,
          optional: 50
        }
      },
      educationDetails: {
        highestQualification: 'test',
        specialization: 'test',
        yearOfPassing: 'test',
        universityName: 'test',
        certification: 'test'
      },
      workExperience: {
        previousOrganization: 'test',
        yearOfExperience: '10',
        previousDesignation: 'test',
        skills: 'test'
      },
      otherDetails: {
        ormsUsername: 'test',
        ormsPassword: 'test'
      },
      payrollInformation: {
        currentCTC: 'test',
        bankDetails: {
          bankName: 'test',
          branchName: 'test',
          accountNummber: 'test',
          ifscCode: 'test',
          pfAccountNumber: 'test'
        }
      },
      documentsUploaded: {
        employeePhoto: 'test',
        employeePANNumber: 'test',
        employeePANDoc: 'test',
        employeeAadharNumber: 'test',
        employeeAadhar: 'test',
        employeePassportNumber: 'test',
        employeePassportDoc: 'test',
        lastSixMonthsBankStatement: 'test',
        lastThreeMonthsPayslip: 'test',
        experienceLetter: 'test',
        relievingLetter: 'test',
        offerLetter: 'test'
      },
      insuranceDetails: {
        fatherDetails: {
          fatherName: 'test',
          fatherAadhar: 'test',
          fatherPan: 'test',
          fatherDOB: 'test',
          fatherOccupation: 'test'
        },
        motherDetails: {
          motherName: 'test',
          motherAadhar: 'test',
          motherPan: 'test',
          motherDOB: 'test',
          motherOccupation: 'test'
        },
        spouseDetails: {
          spouseName: 'test',
          spouseAadhar: 'test',
          spousePan: 'test',
          spouseDob: 'test',
          spouseOccupation: 'test'
        }
      }
    }
  },
};

export default meta;
type Story = StoryObj<EmployeePreviewDetailsComponent>;

export const EmployeePreviewDetails: Story = {};
