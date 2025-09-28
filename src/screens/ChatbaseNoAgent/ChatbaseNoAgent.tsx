import { Plus as PlusIcon } from "lucide-react";
import { Bot, Clock, Settings } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

const navigationLinks = [
  { label: "Changelog", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Help", href: "#" },
];

const sidebarItems = [
  { icon: Bot, label: "Agents", active: true },
  { icon: Clock, label: "Usage", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const ChatbaseNoAgent = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-start relative bg-wwwchatbasecowhite">
      <header className="flex items-center justify-between pt-4 pb-[17px] px-5 relative self-stretch w-full flex-[0_0_auto] bg-wwwchatbasecoalabaster border-b [border-bottom-style:solid] border-zinc-200">
        <nav className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Component"
            src="/component-1-5.svg"
          />

          <div className="flex w-6 h-6 items-start justify-center relative">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-www-chatbase-co-inter-medium font-[number:var(--www-chatbase-co-inter-medium-font-weight)] text-wwwchatbasecostorm-gray-30 text-[length:var(--www-chatbase-co-inter-medium-font-size)] text-center tracking-[var(--www-chatbase-co-inter-medium-letter-spacing)] leading-[var(--www-chatbase-co-inter-medium-line-height)] whitespace-nowrap [font-style:var(--www-chatbase-co-inter-medium-font-style)]">
              /
            </div>
          </div>

          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <div className="inline-flex max-w-[200px] gap-1 relative flex-[0_0_auto] items-center rounded-lg">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-wwwchatbasecowoodsmoke text-sm tracking-[0] leading-[14px]">
                  <span className="font-[number:var(--www-chatbase-co-semantic-link-font-weight)] leading-[var(--www-chatbase-co-semantic-link-line-height)] font-www-chatbase-co-semantic-link [font-style:var(--www-chatbase-co-semantic-link-font-style)] tracking-[var(--www-chatbase-co-semantic-link-letter-spacing)] text-[length:var(--www-chatbase-co-semantic-link-font-size)]">
                    aniamiw3
                  </span>
                </div>
              </div>

              <Badge
                variant="outline"
                className="inline-flex items-center justify-center px-[7px] py-0.5 relative flex-[0_0_auto] rounded-[14px] overflow-hidden border border-solid border-zinc-200"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-wwwchatbasecostorm-gray text-xs text-center tracking-[0] leading-4">
                  Free
                </span>
              </Badge>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="inline-flex h-5 items-center justify-center p-0.5 relative flex-[0_0_auto] rounded-lg"
            >
              <img
                className="relative w-4 h-4"
                alt="Component"
                src="/component-1-2.svg"
              />
            </Button>
          </div>
        </nav>

        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <nav className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            {navigationLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="inline-flex h-5 items-center justify-center pt-0 pb-px px-0 relative flex-[0_0_auto] rounded-lg h-auto"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.50px] font-www-chatbase-co-semantic-link font-[number:var(--www-chatbase-co-semantic-link-font-weight)] text-wwwchatbasecoscarpa-flow text-[length:var(--www-chatbase-co-semantic-link-font-size)] text-center tracking-[var(--www-chatbase-co-semantic-link-letter-spacing)] leading-[var(--www-chatbase-co-semantic-link-line-height)] whitespace-nowrap [font-style:var(--www-chatbase-co-semantic-link-font-style)]">
                  {link.label}
                </span>
              </Button>
            ))}
          </nav>

          <Separator
            orientation="vertical"
            className="relative w-px h-3 bg-wwwchatbasecoscarpa-flow rounded-[33554400px]"
          />

          <Button
            variant="ghost"
            size="sm"
            className="p-0 rounded-full hover:bg-zinc-100"
            onClick={() => {
              // Handle profile click - you can add dropdown menu or navigation here
              console.log('Profile clicked');
            }}
          >
            <Avatar className="flex w-6 h-6 items-center justify-center relative rounded-[33554400px] overflow-hidden">
            <AvatarImage
              src="/acg8ock79h3dpgmx-34w8qrzr5l-evigmyqnbzcu-ktuih8mp5e6gw-s96-c.png"
              className="relative flex-1 max-w-6 grow self-stretch bg-cover bg-[50%_50%]"
            />
            <AvatarFallback className="relative flex-1 max-w-6 grow self-stretch bg-cover bg-[50%_50%]" />
            </Avatar>
          </Button>
        </div>
      </header>

      <div className="flex items-start relative flex-1 self-stretch w-full grow">
        <aside className="inline-flex flex-col items-start justify-center relative self-stretch flex-[0_0_auto]">
          <div className="inline-flex items-start relative flex-1 grow">
            <div className="group relative self-stretch w-14 hover:w-64 bg-wwwchatbasecowhite transition-all duration-300 ease-in-out">
              <div className="flex flex-col w-full h-full items-start justify-center relative bg-gray-100">
                <div className="absolute w-full h-full top-0 left-0 bg-gray-100" />

                <div className="absolute top-0 right-0 w-px h-[843px] bg-zinc-200" />

                <nav className="relative flex-1 self-stretch w-full grow">
                  <div className="flex flex-col w-full h-full items-start justify-center relative">
                    <div className="flex flex-col items-start pt-2 pb-16 px-2 relative flex-1 self-stretch w-full grow overflow-hidden">
                      <div className="relative self-stretch w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex w-full px-2.5 py-1.5 mb-2 items-center rounded-lg bg-wwwchatbasecowhite border border-solid border-zinc-200 shadow-[inset_0px_-1.5px_0px_1px_#0000000a] h-auto"
                        >
                          <img
                            className="relative w-5 h-5"
                            alt="Component"
                            src="/component-1-1.svg"
                          />
                        </Button>

                        {sidebarItems.map((item, index) => (
                          <Button
                            key={index}
                            variant={item.active ? "default" : "ghost"}
                            size="sm"
                            className={`flex w-full px-2.5 py-1.5 mb-1 items-center justify-start rounded-lg h-auto ${
                              item.active 
                                ? "bg-wwwchatbasecowoodsmoke text-wwwchatbasecowhite" 
                                : "hover:bg-zinc-100"
                            }`}
                          >
                            <item.icon className="relative w-5 h-5 flex-shrink-0" />
                            <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-www-chatbase-co-semantic-button font-[number:var(--www-chatbase-co-semantic-button-font-weight)] text-[length:var(--www-chatbase-co-semantic-button-font-size)] tracking-[var(--www-chatbase-co-semantic-button-letter-spacing)] leading-[var(--www-chatbase-co-semantic-button-line-height)] [font-style:var(--www-chatbase-co-semantic-button-font-style)]">
                              {item.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="flex w-6 items-center justify-center relative self-stretch">
              <div className="flex w-6 h-8 items-center justify-center relative">
                <div className="relative w-[3px] h-6 bg-wwwchatbasecoiron rounded-[33554400px]" />

                <img
                  className="absolute top-[-462px] left-[1471px] w-3 h-3"
                  alt="Component"
                />
              </div>
            </div>
          </div>
        </aside>

        <main className="flex flex-col items-start justify-center relative flex-1 self-stretch grow -ml-6">
          <div className="flex flex-col max-w-screen-2xl h-[843px] items-start relative w-full overflow-scroll">
            <div className="flex flex-wrap items-center gap-[0px_0px] pt-8 pl-8 pr-8 pb-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-start w-full mt-[-1.00px] font-www-chatbase-co-semantic-heading-1 font-[number:var(--www-chatbase-co-semantic-heading-1-font-weight)] text-wwwchatbasecowoodsmoke text-[length:var(--www-chatbase-co-semantic-heading-1-font-size)] tracking-[var(--www-chatbase-co-semantic-heading-1-letter-spacing)] leading-[var(--www-chatbase-co-semantic-heading-1-line-height)] [font-style:var(--www-chatbase-co-semantic-heading-1-font-style)]">
                Agents
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 px-8 pb-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative max-w-[562px] w-[562px] h-80 bg-[url(/no-agents.png)] bg-cover bg-[50%_50%]" />

              <div className="inline-flex flex-col max-w-[420px] items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] font-www-chatbase-co-semantic-heading-2 font-[number:var(--www-chatbase-co-semantic-heading-2-font-weight)] text-wwwchatbasecowoodsmoke text-[length:var(--www-chatbase-co-semantic-heading-2-font-size)] tracking-[var(--www-chatbase-co-semantic-heading-2-letter-spacing)] leading-[var(--www-chatbase-co-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--www-chatbase-co-semantic-heading-2-font-style)]">
                    No agents yet..
                  </h2>
                </div>

                <div className="inline-flex flex-col items-center px-[6.8px] py-0 relative flex-[0_0_auto] ml-[-1.80px] mr-[-1.80px]">
                  <p className="relative flex items-center justify-center w-fit mt-[-1.00px] font-www-chatbase-co-inter-regular font-[number:var(--www-chatbase-co-inter-regular-font-weight)] text-wwwchatbasecoscarpa-flow text-[length:var(--www-chatbase-co-inter-regular-font-size)] text-center tracking-[var(--www-chatbase-co-inter-regular-letter-spacing)] leading-[var(--www-chatbase-co-inter-regular-line-height)] [font-style:var(--www-chatbase-co-inter-regular-font-style)]">
                    Create your first AI Agent to start automating support,
                    <br />
                    generating leads, and answering customer questions.
                  </p>
                </div>
              </div>

              <div className="inline-flex flex-col items-start pt-5 pb-0 px-0 relative flex-[0_0_auto]">
                <Button className="inline-flex h-10 justify-center gap-2 px-4 py-2 relative bg-wwwchatbasecowoodsmoke shadow-[inset_0px_-1.5px_0px_#0000000a] items-center rounded-lg h-auto">
                  <PlusIcon className="relative w-5 h-5" />

                  <span className="relative flex items-center justify-center w-fit font-www-chatbase-co-semantic-link font-[number:var(--www-chatbase-co-semantic-link-font-weight)] text-wwwchatbasecoalabaster text-[length:var(--www-chatbase-co-semantic-link-font-size)] text-center tracking-[var(--www-chatbase-co-semantic-link-letter-spacing)] leading-[var(--www-chatbase-co-semantic-link-line-height)] whitespace-nowrap [font-style:var(--www-chatbase-co-semantic-link-font-style)]">
                    New AI agent
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
