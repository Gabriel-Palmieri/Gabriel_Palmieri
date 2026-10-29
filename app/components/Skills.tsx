import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const groups = [
  {
    label: 'Front-end',
    keys: [
      'react',
      'nextjs',
      'typescript',
      'javascript',
      'tailwind',
      'html',
      'css',
    ],
  },
  { label: 'Back-end', keys: ['nodejs', 'nestjs', 'python', 'php', 'prisma'] },
  { label: 'data', keys: ['postgresql', 'mysql', 'git'] },
  { label: 'Mobile', keys: ['reactnative', 'flutter'] },
];
export function Skills() {
  const { t, language } = useLanguage();
  return (
    <section
      id="tech"
      className="grid grid-cols-[minmax(240px,0.8fr)_minmax(0,1.65fr)] items-center gap-[clamp(48px,7vw,100px)] mt-20 border-t border-line py-[88px] [&_h2]:text-[25px] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&>div>p]:mt-4 [&>div>p]:max-w-[32ch] [&>div>p]:text-left [&>div>p]:hyphens-none [&>div>p]:break-normal [&>div>p]:leading-6 [&>div>p]:text-[13px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:mt-12 max-[760px]:py-14 max-[760px]:gap-7 max-[760px]:[&>div>p]:max-w-[40ch] max-[760px]:[&>div>p]:mt-2"
      aria-labelledby="tech-title"
    >
      <div
        data-scroll-reveal
        className="text-left transition-[opacity,transform] duration-[440ms] ease-out-expo [&.scroll-reveal-hidden]:translate-y-[var(--scroll-offset,18px)] [&.scroll-reveal-hidden]:opacity-0 motion-reduce:!transform-none motion-reduce:!opacity-100"
      >
        <h2 id="tech-title">{t('tech.title')}</h2>
        <p className="text-muted">{t('tech.subtitle')}</p>
      </div>
      <dl
        data-scroll-reveal
        className="transition-[opacity,transform] duration-[440ms] ease-out-expo [&.scroll-reveal-hidden]:translate-y-[var(--scroll-offset,18px)] [&.scroll-reveal-hidden]:opacity-0 motion-reduce:!transform-none motion-reduce:!opacity-100 [&>div]:grid [&>div]:grid-cols-[140px_1fr] [&>div]:gap-[26px] [&>div]:border-b [&>div]:border-line [&>div]:py-5 [&>div:first-child]:pt-1 [&_dt]:text-left [&_dt]:leading-5 [&_dt]:text-[12px] [&_dt]:text-muted [&_dd]:grid [&_dd]:grid-cols-3 [&_dd]:gap-x-4 [&_dd]:gap-y-4 [&_dd]:text-[13px] max-[1100px]:[&>div]:grid-cols-[112px_1fr] max-[1100px]:[&>div]:gap-4 max-[1100px]:[&_dd]:grid-cols-2 max-[760px]:[&>div]:grid-cols-1 max-[760px]:[&>div]:gap-3 max-[380px]:[&>div]:grid-cols-1 max-[380px]:[&>div]:gap-2.5"
      >
        {groups.map((group) => (
          <div key={group.label}>
            <dt>
              {group.label === 'data'
                ? language === 'pt'
                  ? 'Dados & ferramentas'
                  : 'Data & tools'
                : group.label}
            </dt>
            <dd>
              {group.keys.map((key) => (
                <span
                  key={key}
                  className="transition-[color,transform] duration-[240ms] ease-out-expo hover:-translate-y-0.5 hover:text-accent [&_img]:transition-[filter] [&_img]:duration-[240ms] [&_img]:ease-out-expo [&:hover_img]:grayscale-0 inline-flex min-h-5 items-center gap-2 whitespace-nowrap text-left [&_img]:shrink-0 [&_img]:object-contain [&_img]:grayscale"
                >
                  <Image
                    src={
                      '/icons/' +
                      (key === 'reactnative' ? 'react' : key) +
                      '.svg'
                    }
                    alt=""
                    width={20}
                    height={20}
                    className={
                      key === 'nextjs' || key === 'prisma'
                        ? 'invert'
                        : undefined
                    }
                  />
                  {t('tech.' + key)}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
