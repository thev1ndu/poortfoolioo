import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  FileCheckIcon,
  HandHelpingIcon,
} from "lucide-react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Prose } from "@/components/ui/typography";

import type { Volunteering } from "../../types/volunteering";

export function VolunteeringItem({
  className,
  item,
}: {
  className?: string;
  item: Volunteering;
}) {
  const canExpand = !!item.description;

  return (
    <Collapsible disabled={!canExpand} asChild>
      <div className={className}>
        <div className="flex items-center">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground"
            aria-hidden
          >
            <HandHelpingIcon className="size-5" />
          </div>

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="group/vol flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <dl>
                    <dt className="sr-only">Role</dt>
                    <dd>{item.role}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Period</dt>
                    <dd>{item.date}</dd>
                  </dl>

                  <Separator
                    className="data-[orientation=vertical]:h-4"
                    orientation="vertical"
                  />

                  <dl>
                    <dt className="sr-only">Category</dt>
                    <dd>{item.category}</dd>
                  </dl>
                </div>
              </div>

              {item.referenceLink && (
                <a
                  className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                  href={item.referenceLink}
                  target="_blank"
                  rel="noopener"
                >
                  <FileCheckIcon
                    className="pointer-events-none size-4"
                    aria-hidden
                  />
                </a>
              )}

              {canExpand && (
                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <ChevronsDownUpIcon className="hidden group-data-[state=open]/vol:block" />
                  <ChevronsUpDownIcon className="hidden group-data-[state=closed]/vol:block" />
                </div>
              )}
            </CollapsibleTrigger>
          </div>
        </div>

        {canExpand && (
          <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <Prose className="border-t border-dashed border-edge p-4">
              <Markdown>{item.description!}</Markdown>
            </Prose>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
}

/** Backwards-compat alias so existing imports don't break */
export const AwardItem = VolunteeringItem;