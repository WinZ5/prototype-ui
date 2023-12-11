"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export function UserNav(props: { ClassName?: string, link: string }) {
  const currentPath = usePathname();
  const dashboardLink = "/departments/"+props.link
  const objectiveLink = "/objectives/"+props.link

  return (
    <div className={props.ClassName}>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link 
          href={dashboardLink}
          className={classnames({
            "text-sm font-medium transition-colors hover:text-primary": true,
            "text-muted-foreground": dashboardLink !== currentPath,
          })}
        >
          Dashboard
        </Link>
        <Link 
          href={objectiveLink}
          className={classnames({
            "text-sm font-medium transition-colors hover:text-primary": true,
            "text-muted-foreground": objectiveLink !== currentPath,
          })}
        >
          Objectives 
        </Link>
      </nav>
    </div>
  );
}