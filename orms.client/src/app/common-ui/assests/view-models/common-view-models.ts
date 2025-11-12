export interface Announcement {
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  postedDate: string;
  postedBy: string;
  expireDate: string;
}

export interface DropdownValues {
  value: string;
  isDefault: boolean;
  textColor: string;
  backgroundColor: string;
  isDisabled: boolean;
}

export interface TeamMembers {
  name: string;
  designation: string;
  imageUrl: string;
}

export interface HolidayList {
  holidayMonth: string,
  holidayDate: number,
  holidayName: string,
  holidayType: string;
  holidayClassification: string,
  holidayCalendar: string,
}

export interface BasicInformation {
  dateOfJoining?: string,
  employeeName?: string,
  employeeId?: string,
  dateOfBirth?: string,
  gender?: string,
  bloodGroup?: string,
  maritalStatus?: string
}

export interface ContactInformation {
  personalEmail?: string,
  linkedInUrl?: string,
  contactNumber?: string,
  permanentAddress?: string,
  presentAddress?: string,
  employeeContactName1?: string,
  employeeContactName2?: string,
  employeeContactNumber1?: string,
  employeeContactNumber2?: string,
  emergencyContactRelation1?: string,
  employeeContactRelation2?: string
}

export interface LeaveAllocation {
  casual: number,
  festival: number,
  earned: number,
  optional: number
}

export interface JobDetails {
  officeEmail: string,
  department: string,
  currentDesignation: string,
  employmentType: string,
  payLevel: string,
  reportingManager: string,
  workLocation: string,
  shiftTimings: string,
  leaveAllocation: LeaveAllocation,
}

export interface EducationDetails {
  highestQualification: string,
  specialization: string,
  yearOfPassing: string,
  universityName: string,
  certification: string
}

export interface WorkExperience {
  previousOrganization: string,
  yearOfExperience: string,
  previousDesignation: string,
  skills: string
}

export interface OtherDetails {
  ormsUsername: string,
  ormsPassword: string
}

export interface Bankdetails {
  bankName: string,
  branchName: string,
  accountNummber: string,
  ifscCode: string,
  pfAccountNumber: string
}

export interface PayrollInformation {
  currentCTC: string,
  bankDetails: Bankdetails,
}

export interface DocumentsUploaded {
  employeePhoto: string,
  employeePANNumber: string,
  employeePANDoc: string,
  employeeAadharNumber: string,
  employeeAadhar: string,
  employeePassportNumber: string,
  employeePassportDoc: string,
  lastSixMonthsBankStatement: string,
  lastThreeMonthsPayslip: string,
  experienceLetter: string,
  relievingLetter: string,
  offerLetter: string
}

export interface FatherDtails {
  fatherName: string,
  fatherAadhar: string,
  fatherPan: string,
  fatherDOB: string,
  fatherOccupation: string,
}

export interface MotherDetails {
  motherName: string,
  motherAadhar: string,
  motherPan: string,
  motherDOB: string,
  motherOccupation: string,
}

export interface SpouseDetails {
  spouseName: string,
  spouseAadhar: string,
  spousePan: string,
  spouseDob: string,
  spouseOccupation: string,
}

export interface InsuranceDetails {
  fatherDetails: FatherDtails,
  motherDetails: MotherDetails,
  spouseDetails: SpouseDetails,
}

export interface EmployeeDetails {
  basicInformation: BasicInformation,
  contactInformation: ContactInformation,
  jobDetails: JobDetails,
  educationDetails: EducationDetails,
  workExperience: WorkExperience,
  otherDetails: OtherDetails,
  payrollInformation: PayrollInformation,
  documentsUploaded: DocumentsUploaded,
  insuranceDetails: InsuranceDetails
}




export class ApplyLeave {
  startDate!: string;
  endDate!: string;
  leaveType!: string;
  reason!: string;
}
