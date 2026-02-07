"use client";

import { ActivityCalendar, Activity, ThemeInput } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { Link } from "@/lib/navigation";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";

const fetchGithubContributions = async (): Promise<Activity[]> => {
  const response = await fetch(
    "https://github-contributions-api.jogruber.de/v4/7johnsz?y=last"
  );
  const json = await response.json();
  return json.contributions;
};

export const GithubCalendar = () => {
  const { theme } = useTheme();
  const t = useTranslations("HomePage.github");

  const { data, isLoading } = useQuery({
    queryKey: ["github-contributions"],
    queryFn: fetchGithubContributions,
    staleTime: 1000 * 60 * 60, 
  });

  const calendarTheme: ThemeInput = {
    light: ["#27272a", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#27272a", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  if (isLoading || !data) {
    return (
      <div className="flex flex-col gap-4 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-4 bg-zinc-800 rounded" />
            <div className="h-4 w-32 bg-zinc-800 rounded" />
          </div>
          <div className="h-3 w-16 bg-zinc-800 rounded" />
        </div>
        <div className="w-full h-32 bg-zinc-800/20 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="size-4 text-muted-light" />
          <span className="text-sm font-medium">{t("title")}</span>
        </div>
        <Link 
          href="https://github.com/7johnsz" 
          target="_blank"
          className="text-xxs text-muted-light font-jetbrains-mono hover:text-white transition-colors"
        >
          @7johnsz
        </Link>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="min-w-max">
          <ActivityCalendar
            data={data}
            theme={calendarTheme}
            colorScheme={theme === "dark" ? "dark" : "light"}
            blockSize={10}
            blockMargin={3}
            fontSize={11}
            labels={{
              legend: {
                less: t("less"),
                more: t("more"),
              },
              months: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
              ],
              weekdays: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

