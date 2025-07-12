import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const FloatingResumeButton = () => {
  const handleDownloadResume = () => {
    // This would typically download a PDF resume
    window.open("#", "_blank");
  };

  return (
    <Button
      onClick={handleDownloadResume}
      className="floating-resume"
      aria-label="Download Resume"
    >
      <Download className="h-5 w-5 mr-2" />
      Resume
    </Button>
  );
};