import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Input() label: string = 'Government ID';
  @Input() isRequired: boolean = true;

  @ViewChild('fileInput', { static: false }) fileInputRef!: ElementRef<HTMLInputElement>;

  onAreaClick(event: MouseEvent) {
    // event.preventDefault();
      this.fileInputRef.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      const statusElement = input.closest('.file-upload-field')?.querySelector('.file-status');
      if (statusElement) statusElement.textContent = file.name;
    }
  }
}
