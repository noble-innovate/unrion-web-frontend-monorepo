import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';

import { cn } from '@packages/utils';

export interface IFile {
  file: File;
  base64: string;
}

export interface FileUploadInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isUploading?: (value: boolean) => void;
  onUpload?: (files: IFile[]) => void;
}

export const FileUploadInput = forwardRef<
  HTMLInputElement,
  FileUploadInputProps
>(
  (
    { className, type, isUploading = () => {}, onUpload = () => {}, ...props },
    ref
  ) => {
    const handleSelection = async (event: ChangeEvent) => {
      event.preventDefault();
      event.stopPropagation();

      isUploading(true);
      const uploadedFiles = [...(event.target as any).files];

      if (uploadedFiles) {
        const files: IFile[] = [];
        for (const file of uploadedFiles) {
          const base64File: string = await getBase64OfSelection(file);
          files.push({
            file,
            base64: base64File,
          });
        }

        onUpload(files);
      }

      isUploading(false);
    };

    //Convert file to base64
    const getBase64OfSelection = async (file: File): Promise<string> => {
      return new Promise((resolve) => {
        let baseURL: string = '';

        // Make new FileReader
        const reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Make a fileInfo Object
          baseURL = reader.result as string;
          resolve(baseURL);
        };
      });
    };

    return (
      <input
        type='file'
        className={cn(
          'flex h-9 w-full rounded-md border border-neutral-400 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        onChange={handleSelection}
        {...props}
      />
    );
  }
);

FileUploadInput.displayName = 'File upload input';
