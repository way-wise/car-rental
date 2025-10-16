"use client";

import { Button } from "@/components/ui/button";
import { uploadImageViaFileInput } from "@/lib/cloudinaryClient";
import { ImageIcon, Loader2, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled = false,
  placeholder = "Upload an image",
  className = "",
}: ImageUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    if (disabled || isUploading) return;

    try {
      setIsUploading(true);
      const imageUrl = await uploadImageViaFileInput();
      onChange(imageUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to upload image";
      toast.error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    if (disabled) return;
    onChange("");
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {value ? (
        <div className="group relative">
          <img
            src={value}
            alt="Uploaded image"
            className="h-48 w-full rounded-lg border object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleRemove}
            disabled={disabled}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`rounded-lg border-2 border-dashed border-gray-300 p-6 text-center transition-colors hover:border-gray-400 ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          onClick={handleUpload}
        >
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">{placeholder}</p>
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        onClick={handleUpload}
        disabled={disabled || isUploading}
        className="w-full"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : value ? (
          "Change Image"
        ) : (
          "Upload Image"
        )}
      </Button>
    </div>
  );
};
