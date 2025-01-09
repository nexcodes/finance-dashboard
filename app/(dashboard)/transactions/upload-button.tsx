/* eslint-disable @typescript-eslint/no-explicit-any */

import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button, ButtonProps } from "@/components/ui/button";

type Props = ButtonProps & {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload, ...props }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button {...props} size="sm" {...getRootProps()}>
          <Upload className="size-4" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};
