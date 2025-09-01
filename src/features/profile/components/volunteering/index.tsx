import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { VOLUNTEERING } from "../../data/volunteering";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./volunteer-item"; // alias of VolunteeringItem

// Parse a date string that may be either "YYYY-MM" or "YYYY-MM to YYYY-MM".
// We sort by the END of the range so more recent involvement appears first.
function getSortKey(dateStr: string) {
  const parts = dateStr.split("to").map((s) => s.trim());
  const end = parts.length === 2 ? parts[1] : parts[0];
  // Fallback: if parsing fails, return an invalid date that sorts last
  const d = dayjs(end, ["YYYY-MM", "YYYY"], true);
  return d.isValid() ? d : dayjs(0); // 1970-01-01 as lowest
}

const SORTED_VOLUNTEERING = [...VOLUNTEERING].sort((a, b) =>
  getSortKey(b.date).diff(getSortKey(a.date))
);

export function Volunteering() {
  return (
    <Panel id="volunteering">
      <PanelHeader>
        <PanelTitle>
          Volunteering
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({VOLUNTEERING.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_VOLUNTEERING}
        max={8}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <AwardItem item={item} />}
      />
    </Panel>
  );
}