'use client';

import { motion } from 'framer-motion';

const editorLines = [
  { number: '01', parts: [{ text: 'export', tone: 'blue' }, { text: ' async function', tone: 'muted' }, { text: ' run()', tone: 'gold' }] },
  { number: '02', parts: [{ text: '  const', tone: 'blue' }, { text: ' api', tone: 'muted' }, { text: ' = await connect()', tone: 'soft' }] },
  { number: '03', parts: [{ text: '  const', tone: 'blue' }, { text: ' data', tone: 'muted' }, { text: ' = await api.projects()', tone: 'soft' }] },
  { number: '04', parts: [{ text: '  return', tone: 'blue' }, { text: ' <Stack data={data} />', tone: 'gold' }] },
  { number: '05', parts: [{ text: '}', tone: 'muted' }] }
];

const glowVariants = {
  animate: {
    opacity: [0.35, 0.75, 0.35],
    scale: [1, 1.06, 1]
  }
};

function toneClass(tone: string) {
  const tones: Record<string, string> = {
    blue: 'text-[#8fb4be]',
    gold: 'text-[#b08a57]',
    muted: 'text-[#d8d0c3]',
    soft: 'text-[#aaa59b]'
  };

  return tones[tone] ?? tones.muted;
}

export function HeroIllustration() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#030405]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(143,180,190,0.08),transparent_28%),linear-gradient(145deg,#050607_0%,#030405_55%,#020303_100%)]" />

      <motion.div
        className="absolute left-12 top-16 h-36 w-36 rounded-full bg-[#8fb4be]/8 blur-3xl"
        variants={glowVariants}
        animate="animate"
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-12 right-14 h-40 w-40 rounded-full bg-[#b08a57]/8 blur-3xl"
        variants={glowVariants}
        animate="animate"
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      <div className="absolute inset-5 rounded-[1.75rem] border border-white/10 bg-[#050607]/88 shadow-[0_30px_110px_rgba(0,0,0,0.55)]" />

      <motion.div
        className="absolute left-[7%] top-[9%] h-[67%] w-[62%] overflow-hidden rounded-2xl border border-white/10 bg-[#030405] shadow-[0_24px_80px_rgba(0,0,0,0.48)]"
        initial={{ opacity: 0, y: 20, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="flex h-11 items-center justify-between border-b border-white/10 bg-[#070809] px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b08a57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8fb4be]/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="text-xs text-[#8e8981]">app/page.tsx</div>
        </div>

        <div className="grid h-[calc(100%-44px)] grid-cols-[104px_1fr]">
          <div className="border-r border-white/10 bg-[#020303] p-3 text-[11px]">
            {['app', 'components', 'api', 'schema'].map((item, index) => (
              <motion.div
                key={item}
                className={`mb-2 rounded-md px-2 py-2 ${
                  index === 1 ? 'bg-[#8fb4be]/8 text-[#d9eef2]' : 'text-[#6f7678]'
                }`}
                animate={index === 1 ? { opacity: [0.75, 1, 0.75] } : undefined}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="relative p-5 font-mono text-xs leading-7">
            <div className="absolute right-4 top-4 rounded-full border border-[#8fb4be]/20 bg-[#8fb4be]/8 px-3 py-1 text-[11px] text-[#d9eef2]">
              Full-stack
            </div>

            {editorLines.map((line, index) => (
              <motion.div
                key={line.number}
                className="flex gap-4 whitespace-nowrap"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.14, duration: 0.35 }}
              >
                <span className="w-5 text-right text-[#4d5558]">{line.number}</span>
                <span>
                  {line.parts.map((part, partIndex) => (
                    <span key={`${line.number}-${partIndex}`} className={toneClass(part.tone)}>
                      {part.text}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}

            <motion.div
              className="mt-4 h-px bg-gradient-to-r from-transparent via-[#8fb4be]/35 to-transparent"
              animate={{ x: ['-30%', '30%', '-30%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.span
              className="ml-9 mt-4 inline-block h-5 w-2 bg-[#8fb4be]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[9%] right-[7%] w-[46%] rounded-2xl border border-white/10 bg-[#070809] p-4 font-mono text-xs shadow-[0_20px_70px_rgba(0,0,0,0.55)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
      >
        <div className="mb-3 flex items-center justify-between text-[#8e8981]">
          <span>terminal</span>
          <span>localhost:3000</span>
        </div>
        <div className="space-y-2 text-[#c9c4bb]">
          <p><span className="text-[#8fb4be]">$</span> npm run build</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <span className="text-[#b08a57]">✓</span> routes compiled
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
          >
            <span className="text-[#b08a57]">✓</span> api connected
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute right-[8%] top-[18%] hidden w-[23%] space-y-3 lg:block">
        {['React UI', 'Node API', 'PostgreSQL'].map((label, index) => (
          <motion.div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#070809]/95 p-3 text-xs text-[#d8d0c3] shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + index * 0.14, duration: 0.35 }}
          >
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[#8fb4be]"
              animate={{ scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2 }}
            />
            {label}
          </motion.div>
        ))}
      </div>

      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 760 640" fill="none">
        <motion.path
          d="M430 170 C520 170 555 215 610 215"
          stroke="rgba(143,180,190,0.22)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{ pathLength: [0.15, 1, 0.15] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M410 302 C520 302 555 310 610 310"
          stroke="rgba(176,138,87,0.2)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{ pathLength: [0.15, 1, 0.15] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
      </svg>
    </div>
  );
}
