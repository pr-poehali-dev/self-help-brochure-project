import Icon from "@/components/ui/icon";

const foldGuide = "absolute top-0 bottom-0 w-px bg-slate-300/60 border-dashed border-l border-slate-300/80 z-10";

const sections = {
  breath: {
    color: "#D8EFE8",
    accent: "#5FA68A",
    light: "#EEF8F4",
    icon: "Wind",
    label: "Дыхание",
  },
  body: {
    color: "#E8E0F0",
    accent: "#8B6AAF",
    light: "#F3EEF9",
    icon: "Activity",
    label: "Тело",
  },
  mind: {
    color: "#FDE8D8",
    accent: "#C47A4A",
    light: "#FEF4EC",
    icon: "Brain",
    label: "Разум",
  },
};

const SectionBadge = ({
  icon,
  label,
  accent,
}: {
  icon: string;
  label: string;
  accent: string;
}) => (
  <div className="flex items-center gap-2 mb-4">
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center"
      style={{ backgroundColor: accent }}
    >
      <Icon name={icon} size={15} className="text-white" fallback="Wind" />
    </div>
    <span
      className="text-xs font-semibold tracking-[0.18em] uppercase"
      style={{ color: accent, fontFamily: "'Golos Text', sans-serif" }}
    >
      {label}
    </span>
  </div>
);

const TechniqueBlock = ({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent: string;
}) => (
  <div className="mb-5">
    <div className="flex items-start gap-2 mb-2">
      <div
        className="w-1 rounded-full mt-1 shrink-0"
        style={{ backgroundColor: accent, height: "auto", minHeight: "40px" }}
      />
      <div>
        <h3
          className="font-semibold text-[13px] leading-snug mb-1"
          style={{
            color: accent,
            fontFamily: "'Golos Text', sans-serif",
          }}
        >
          {title}
        </h3>
        <div
          className="text-[11.5px] leading-relaxed text-slate-700"
          style={{ fontFamily: "'Golos Text', sans-serif" }}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Panel = ({
  children,
  bg,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  bg: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`relative flex flex-col h-full ${className}`}
    style={{ backgroundColor: bg, padding: "28px 22px", ...style }}
  >
    {children}
  </div>
);

export default function Index() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-4"
      style={{ backgroundColor: "#F5F0EB" }}
    >
      <p
        className="text-xs text-slate-400 mb-3 tracking-widest uppercase"
        style={{ fontFamily: "'Golos Text', sans-serif" }}
      >
        Буклет-трифолд · двусторонний · А4
      </p>

      {/* СТОРОНА 1 — ЛИЦО */}
      <div className="mb-2">
        <p
          className="text-[10px] text-slate-400 mb-1 tracking-widest uppercase text-center"
          style={{ fontFamily: "'Golos Text', sans-serif" }}
        >
          — Сторона 1: Лицо —
        </p>
        <div
          className="relative flex"
          style={{
            width: "816px",
            height: "578px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* Направляющие сгиба */}
          <div className={foldGuide} style={{ left: "272px" }} />
          <div className={foldGuide} style={{ left: "544px" }} />

          {/* Панель 1: Обложка (правая при сложении = лицо) */}
          <Panel
            bg={sections.breath.light}
            style={{ width: "272px", minWidth: "272px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: sections.breath.accent }}
              >
                <span className="text-3xl">🌿</span>
              </div>
              <h1
                className="text-[28px] leading-tight font-light mb-3 text-slate-800"
                style={{ fontFamily: "'Cormorant', serif", letterSpacing: "0.02em" }}
              >
                Аптечка
                <br />
                <em>самопомощи</em>
                <br />
                для учителя
              </h1>
              <div
                className="w-8 h-px my-3"
                style={{ backgroundColor: sections.breath.accent }}
              />
              <p
                className="text-[11px] text-slate-500 tracking-widest uppercase"
                style={{ fontFamily: "'Golos Text', sans-serif" }}
              >
                Практические техники
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4 border-t border-slate-200/60">
              {Object.values(sections).map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: s.accent }}
                  >
                    <Icon name={s.icon} size={13} className="text-white" fallback="Wind" />
                  </div>
                  <span
                    className="text-[9px] text-slate-400"
                    style={{ fontFamily: "'Golos Text', sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Панель 2: Когнитивные техники */}
          <Panel
            bg={sections.mind.color}
            style={{ width: "272px", minWidth: "272px" }}
          >
            <SectionBadge
              icon={sections.mind.icon}
              label={sections.mind.label}
              accent={sections.mind.accent}
            />
            <h2
              className="text-[17px] font-light mb-4 text-slate-800 leading-tight"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Когнитивные
              <br />
              техники
            </h2>

            <TechniqueBlock
              title='Концентрация на нейтральном предмете'
              accent={sections.mind.accent}
            >
              <p className="mb-2">В течение нескольких минут сконцентрировать своё внимание на каком‑нибудь нейтральном предмете. Ниже приведены четыре возможности.</p>
              <ol className="space-y-1.5 list-none pl-0">
                <li className="flex gap-2">
                  <span className="font-semibold shrink-0" style={{ color: sections.mind.accent }}>1.</span>
                  <span>Записать 10 наименований предметов, вещей, событий, которые доставляют удовольствие.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold shrink-0" style={{ color: sections.mind.accent }}>2.</span>
                  <span>Медленно сосчитать предметы, никак эмоционально не окрашенные: листья на ветке, буквы на отпечатанной странице и т. д.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold shrink-0" style={{ color: sections.mind.accent }}>3.</span>
                  <span>Потренировать свою память, вспоминая 20 осуществлённых вчера действий.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold shrink-0" style={{ color: sections.mind.accent }}>4.</span>
                  <span>В течение двух минут запомнить те качества, которые вам больше всего в себе нравятся, и привести примеры каждого из них.</span>
                </li>
              </ol>
            </TechniqueBlock>
          </Panel>

          {/* Панель 3: Телесные техники */}
          <Panel
            bg={sections.body.color}
            style={{ width: "272px", minWidth: "272px" }}
          >
            <SectionBadge
              icon={sections.body.icon}
              label={sections.body.label}
              accent={sections.body.accent}
            />
            <h2
              className="text-[17px] font-light mb-4 text-slate-800 leading-tight"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Телесные
              <br />
              техники
            </h2>

            <TechniqueBlock
              title="Напряжение — расслабление"
              accent={sections.body.accent}
            >
              Встаньте прямо и сосредоточьте внимание на правой руке, напрягая её до предела. Через несколько секунд напряжение сбросить, руку расслабить. Проделать аналогичную процедуру поочерёдно с левой рукой, правой и левой ногами, поясницей, шеей.
            </TechniqueBlock>

            <TechniqueBlock
              title="Поза релаксации"
              accent={sections.body.accent}
            >
              Необходимо сесть на стул, наклонить туловище немного вперёд, слегка согнуть спину, опустить голову на грудь, бёдра расправить под прямым углом друг к другу. Предплечья свободно лежат на бёдрах, кисти рук свободно свисают. Мышцы максимально расслаблены. Глаза закрыты.
              <br /><br />
              Мысленным взором «пробежаться» по всем мышцам тела, проверяя, достаточно ли они расслаблены. Начинать нужно с мышц лица.
            </TechniqueBlock>
          </Panel>
        </div>
      </div>

      {/* Метка — направляющие */}
      <div
        className="flex text-[9px] text-slate-300 mb-6 tracking-wider"
        style={{ width: "816px", fontFamily: "'Golos Text', sans-serif" }}
      >
        <div className="text-center" style={{ width: "272px" }}>← Панель 1 (обложка)</div>
        <div className="text-center" style={{ width: "272px" }}>Панель 2 (когнитивные)</div>
        <div className="text-center" style={{ width: "272px" }}>Панель 3 (телесные) →</div>
      </div>

      {/* Иконка переворота */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-16 bg-slate-300" />
        <div className="flex items-center gap-1.5 text-slate-400">
          <Icon name="RefreshCw" size={14} />
          <span
            className="text-[10px] tracking-widest uppercase"
            style={{ fontFamily: "'Golos Text', sans-serif" }}
          >
            Перевернуть
          </span>
        </div>
        <div className="h-px w-16 bg-slate-300" />
      </div>

      {/* СТОРОНА 2 — ОБОРОТ */}
      <div className="mb-2">
        <p
          className="text-[10px] text-slate-400 mb-1 tracking-widest uppercase text-center"
          style={{ fontFamily: "'Golos Text', sans-serif" }}
        >
          — Сторона 2: Оборот —
        </p>
        <div
          className="relative flex"
          style={{
            width: "816px",
            height: "578px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* Направляющие сгиба */}
          <div className={foldGuide} style={{ left: "272px" }} />
          <div className={foldGuide} style={{ left: "544px" }} />

          {/* Панель 4: Дыхательные техники — часть 1 */}
          <Panel
            bg={sections.breath.color}
            style={{ width: "272px", minWidth: "272px" }}
          >
            <SectionBadge
              icon={sections.breath.icon}
              label={sections.breath.label}
              accent={sections.breath.accent}
            />
            <h2
              className="text-[17px] font-light mb-4 text-slate-800 leading-tight"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Дыхательные
              <br />
              техники
            </h2>

            <TechniqueBlock
              title="Осознанное дыхание"
              accent={sections.breath.accent}
            >
              Сядьте удобно, расслабьтесь, спину держите прямо. Делайте неглубокий вдох, выдох, затем второй — глубже, выдох, и третий — полной грудью, после чего выдыхайте медленно, чтобы выдох по времени был равен трём вдохам.
            </TechniqueBlock>

            <TechniqueBlock
              title="Вдох с задержкой дыхания"
              accent={sections.breath.accent}
            >
              Поскольку в ситуации раздражения, гнева мы забываем делать нормальный вдох:
              <ul className="mt-1.5 space-y-1 list-none pl-0">
                {[
                  "глубоко вдохните",
                  "задержите дыхание так долго, как сможете",
                  "сделайте несколько глубоких вдохов",
                  "снова задержите дыхание",
                  "выдох",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: sections.breath.accent, display: "inline-block" }}
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </TechniqueBlock>
          </Panel>

          {/* Панель 5: Пустая / для заметок */}
          <Panel
            bg="#FAFAF8"
            style={{ width: "272px", minWidth: "272px" }}
          >
            <div className="flex-1 flex flex-col">
              <div
                className="text-[10px] tracking-widest uppercase text-slate-300 mb-5"
                style={{ fontFamily: "'Golos Text', sans-serif" }}
              >
                Мои заметки
              </div>
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-slate-100 mb-5"
                  style={{ height: "1px" }}
                />
              ))}
            </div>
            <div
              className="text-[9px] text-slate-300 text-center mt-auto pt-4"
              style={{ fontFamily: "'Golos Text', sans-serif" }}
            >
              Здесь можно писать свои наблюдения
            </div>
          </Panel>

          {/* Панель 6: Задняя обложка */}
          <Panel
            bg="#2D3A35"
            style={{ width: "272px", minWidth: "272px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5">
                <span className="text-2xl">🌿</span>
              </div>
              <h2
                className="text-[20px] font-light text-white/90 mb-2 leading-tight"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                Забота о себе —<br />
                <em>это профессионально</em>
              </h2>
              <div className="w-6 h-px bg-white/30 my-4" />
              <p
                className="text-[10px] text-white/40 tracking-widest uppercase leading-relaxed"
                style={{ fontFamily: "'Golos Text', sans-serif" }}
              >
                Три группы техник
              </p>
              <div className="flex gap-3 mt-4">
                {Object.values(sections).map((s) => (
                  <div
                    key={s.label}
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: s.accent + "99" }}
                  >
                    <Icon name={s.icon} size={11} className="text-white" fallback="Wind" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="text-[8px] text-white/20 text-center mt-auto"
              style={{ fontFamily: "'Golos Text', sans-serif", letterSpacing: "0.15em" }}
            >
              АПТЕЧКА САМОПОМОЩИ · УЧИТЕЛЬ
            </div>
          </Panel>
        </div>
      </div>

      {/* Метка — направляющие оборота */}
      <div
        className="flex text-[9px] text-slate-300 mb-8 tracking-wider"
        style={{ width: "816px", fontFamily: "'Golos Text', sans-serif" }}
      >
        <div className="text-center" style={{ width: "272px" }}>← Панель 4 (дыхание)</div>
        <div className="text-center" style={{ width: "272px" }}>Панель 5 (заметки)</div>
        <div className="text-center" style={{ width: "272px" }}>Панель 6 (задняя обложка) →</div>
      </div>

      {/* Инструкция по сгибу */}
      <div
        className="flex items-center gap-6 px-8 py-4 rounded-xl"
        style={{ backgroundColor: "#EDE8E3", maxWidth: "816px", width: "100%" }}
      >
        <Icon name="FoldVertical" size={18} className="text-slate-400 shrink-0" />
        <p
          className="text-[11px] text-slate-500 leading-relaxed"
          style={{ fontFamily: "'Golos Text', sans-serif" }}
        >
          <strong>Как сложить:</strong> Распечатайте обе стороны на одном листе А4 (двусторонняя печать). Сложите по направляющим: сначала загните правую панель назад (обложка), затем левую вперёд — буклет готов.
        </p>
      </div>
    </div>
  );
}