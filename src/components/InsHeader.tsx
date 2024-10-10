import { DashBreadcrumb } from './Breadcrumb';
import { Logo } from './Logo';
import { LangSelector } from './lang';

export const Header = () => {
  return (
    <header className="px-4 py-2 bg-white border-b border-neutral-600/20 overflow-hidden flex items-center gap-4 flex-shrink-0 flex-grow-0 basis-auto">
      <Logo className="size-8" />
      <DashBreadcrumb />
      <LangSelector className="ml-auto text-small font-semibold" />
    </header>
  );
};