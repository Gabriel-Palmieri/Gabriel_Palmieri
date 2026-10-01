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
      className="grid grid-cols-[1fr_1.65fr] gap-[100px] py-[88px] [&_h2]:text-[25px] [&_h2]:font-medium [&_h2]:tracking-[-0.025em] [&>div>p]:mt-4 [&>div>p]:max-w-[28ch] [&>div>p]:text-[13px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:py-14 max-[760px]:gap-7 max-[760px]:[&>div>p]:max-w-[40ch] max-[760px]:[&>div>p]:mt-2"
      aria-labelledby="tech-title"
    >
      <div data-scroll-reveal className="scroll-reveal">
        <h2 id="tech-title">{t('tech.title')}</h2>
        <p className="text-muted">{t('tech.subtitle')}</p>
      </div>
      <dl data-scroll-reveal className="scroll-reveal [&>div]:grid [&>div]:grid-cols-[140px_1fr] [&>div]:gap-[26px] [&>div]:border-b [&>div]:border-line [&>div]:py-5 [&>div:first-child]:pt-1 [&_dt]:text-[12px] [&_dt]:text-muted [&_dd]:flex [&_dd]:flex-wrap [&_dd]:gap-x-6 [&_dd]:gap-y-4 [&_dd]:text-[13px] max-[1100px]:[&>div]:grid-cols-[112px_1fr] max-[1100px]:[&>div]:gap-4 max-[760px]:[&>div]:grid-cols-[110px_1fr] max-[380px]:[&>div]:grid-cols-1 max-[380px]:[&>div]:gap-2.5">
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
                  className="skill-item inline-flex items-center gap-2 whitespace-nowrap [&_img]:shrink-0 [&_img]:object-contain [&_img]:grayscale"
                >
                  <Image
                    src={`/icons/${key === 'reactnative' ? 'react' : key}.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className={
                      key === 'nextjs' || key === 'prisma'
                        ? 'invert'
                        : undefined
                    }
                  />
                  {t(`tech.${key}`)}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
