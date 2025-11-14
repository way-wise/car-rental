"use client";

import { cn } from "@/lib/utils";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "Enter blog content in markdown format...",
  disabled = false,
  className,
}: MarkdownEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex min-h-[400px] w-full rounded-md border border-input bg-background p-3",
          className,
        )}
      >
        <div className="text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-md border border-input",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      data-color-mode="light"
    >
      <MDEditor
        value={value || ""}
        onChange={(val) => {
          if (!disabled) {
            onChange(val || "");
          }
        }}
        preview="live"
        hideToolbar={false}
        visibleDragbar={true}
        textareaProps={{
          placeholder,
          disabled,
          style: {
            fontSize: 14,
            fontFamily: "inherit",
          },
        }}
        height={500}
        data-color-mode="light"
      />
    </div>
  );
}
