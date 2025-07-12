import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const FloatingResumeButton = () => {
  const handleDownloadResume = () => {
    window.open("https://raw.githubusercontent.com/RajanGusain/portfolio/main/Rajan_Gusain_DE1.pdf", "_blank");
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