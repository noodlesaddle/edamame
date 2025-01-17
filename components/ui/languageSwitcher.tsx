"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GlobeIcon } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const [language, setLanguage] = React.useState("en");

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
    // Here you would typically update the URL or trigger a language change in your i18n setup
    // For demonstration, we're just updating the state
    // router.push(`/${lang}${router.pathname}`)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem] text-yellow-600" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-sky-950">
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("mn")}>
          Монгол
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
