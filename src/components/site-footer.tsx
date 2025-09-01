import { SITE_INFO } from "@/config/site";
import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-3 sm:px-4">
      <div className="screen-line-before mx-auto pt-5 sm:pt-6 md:max-w-3xl md:border-x md:border-edge">
        {/* Attribution */}
        {/* <p
          className="
            mb-2 px-4
            flex flex-wrap items-center justify-center gap-2
            text-center font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground
            break-words [overflow-wrap:anywhere] whitespace-normal
          "
        >
          <span>Crafted with</span>
          <Heart
            className="h-4 w-4 text-red-500 animate-pulse"
            aria-hidden="true"
          />
          <span>and coffee — powered by</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            TailwindCSS
          </a>
          <span>&</span>
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            shadcn/ui
          </a>
        </p> */}

        {/* Author credit */}
        <p className="mb-6 px-4 text-center font-mono text-xs sm:text-sm text-muted-foreground break-words [overflow-wrap:anywhere]">
          Developed by{" "}
          <a
            className="link"
            href="https://github.com/thev1ndu"
            target="_blank"
            rel="noopener"
          >
            Thevindu W.
          </a>
        </p>
      </div>
          <a
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>
      {/* Safe area fix */}
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}