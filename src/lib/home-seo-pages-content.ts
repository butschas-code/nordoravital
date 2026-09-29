import { IMAGE_PATHS } from "@/lib/public-images";

export type HomeSeoPageSlug = "recovery" | "sleep" | "stress-reset";

export interface HomeSeoPageContent {
  slug: HomeSeoPageSlug;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroNote: string;
  heroImage: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string[];
  problemImage: string;
  solutionEyebrow: string;
  solutionTitle: string;
  solutionBody: string[];
  solutionSpecs: { title: string; body: string }[];
  ritualTitle: string;
  ritualEyebrow: string;
  ritualSteps: { step: string; title: string; duration: string; body: string }[];
  outcomesTitle: string;
  outcomesEyebrow: string;
  bodyBenefits: string[];
  mindBenefits: string[];
  trustEyebrow: string;
  trustTitle: string;
  trustBody: string;
  faqs: { question: string; answer: string }[];
  ctaHeadline: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const HOME_SEO_PAGES: Record<
  HomeSeoPageSlug,
  Record<"en" | "de" | "lv" | "ru", HomeSeoPageContent>
> = {
  recovery: {
    en: {
      slug: "recovery",
      metaTitle: "Post-Workout & Athletic Recovery at Home | sanza PEMF System",
      metaDescription:
        "Accelerate muscle recovery, ease post-effort tightness, and downregulate physical fatigue at home with the multi-technology sanza PEMF, biofrequency and light system.",
      eyebrow: "Athletic & Movement Recovery",
      headline: "Give your body more than passive rest. Accelerate recovery at home.",
      subheadline:
        "Strenuous training, distance running, cycling, and physically demanding days leave muscles guarded and the nervous system running hot. sanza combines full-body PEMF, biofrequency microcurrent, and focused light to help your body transition into genuine cellular recovery.",
      heroNote: "A 16-minute repeatable recovery ritual for athletes and active movers.",
      heroImage: IMAGE_PATHS.home.ritualPostActivityRecovery,
      problemEyebrow: "The post-activity bottleneck",
      problemTitle: "You train hard, but recovery often lags behind.",
      problemBody: [
        "Whether you are preparing for a marathon, training in the gym, cycling, or working long physical days on your feet, your performance is limited by how quickly your tissues recover between efforts.",
        "Passive sitting on the couch leaves metabolic waste lingering in tired muscle groups. Shoulders, hamstrings, and the lower back remain braced, maintaining low-grade sympathetic tone that delays genuine tissue repair.",
        "Ice baths and foam rollers provide temporary relief, but they demand high friction and discomfort. Your body needs a systemic, repeatable down-regulation signal that supports natural microcirculation and cellular recharge without adding another grueling chore to your day.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksTechnologies ?? "/images/homeuse-how-three-technologies.jpg",
      solutionEyebrow: "The multi-technology layer",
      solutionTitle: "Three restorative inputs. One effortless 16-minute mat ritual.",
      solutionBody: [
        "sanza does not rely on a single isolated modality. In one guided session, it coordinates pulsed electromagnetic fields (PEMF), biofrequency microcurrent, and cold-laser light applicators to address recovery systemically.",
        "Lying on the full-body mat initiates a wide chronobiological electromagnetic induction that gently encourages cellular ion exchange and microcirculation. Hand electrodes or targeted laser pens can simultaneously focus on heavily loaded knees, tendons, or calves.",
        "The experience is quiet, tactile, and comfortable: no pills, no cold plunges, no muscle bruising. You lie down, let the automated chronobiological frequencies run, and give your body the exact rest signal it has been asking for.",
      ],
      solutionSpecs: [
        {
          title: "Full-Body PEMF Mat",
          body: "Gentle rhythmic electromagnetic pulses calibrate natural cellular potential across all major muscle groups.",
        },
        {
          title: "Biofrequency Microcurrent",
          body: "Handheld electrodes deliver harmonious microcurrent signals that ground the autonomic nervous system.",
        },
        {
          title: "Targeted Light & Laser",
          body: "Focused red and infrared photon stimulation applied directly to tight quads, Achilles tendons, or lower back.",
        },
      ],
      ritualTitle: "Where sanza fits into your training week",
      ritualEyebrow: "Your recovery flow",
      ritualSteps: [
        {
          step: "01",
          title: "Post-Workout Arrival",
          duration: "2 min",
          body: "Unpack your gear, drink water, and settle comfortably onto the sanza mat in your living room or bedroom.",
        },
        {
          step: "02",
          title: "Automated Recovery Session",
          duration: "16 min",
          body: "Select Program 06 (Regeneration) on the controller. Feel the gentle warmth and muscular unclenching as the signal sweeps through your body.",
        },
        {
          step: "03",
          title: "Fresh Physical Transition",
          duration: "2 min",
          body: "Stand up with lighter legs, relaxed hips, and a grounded nervous system ready for evening nutrition and deep restorative sleep.",
        },
      ],
      outcomesTitle: "What changes when you recover intentionally",
      outcomesEyebrow: "Measurable impact",
      bodyBenefits: [
        "Eases post-effort stiffness and prevents heavy, leaden legs",
        "Encourages local capillary circulation and cellular ion balance",
        "Allows you to hit your next training session with consistent power",
      ],
      mindBenefits: [
        "Rapidly lowers elevated cortisol and post-workout mental hyper-vigilance",
        "A peaceful private ritual that demarcates physical effort from home relaxation",
        "Greater consistency and joy in maintaining long-term fitness goals",
      ],
      trustEyebrow: "Austrian Engineering Credibility",
      trustTitle: "Developed by sanza International GmbH — 20+ years of expertise",
      trustBody:
        "sanza is not an anonymous wellness gadget. Hand-assembled with German-made hardware, backed by university research partnerships in Graz, Mainz, and Budapest, and trusted by over 60,000 long-term European users, it represents serious wellness technology refined for home life.",
      faqs: [
        {
          question: "Can I use sanza immediately after high-intensity training?",
          answer:
            "Yes. Many runners, cyclists, and athletes use sanza within 30 minutes after training or competition to accelerate the shift from sympathetic exertion to parasympathetic recovery.",
        },
        {
          question: "Does the mat make noise or cause discomfort?",
          answer:
            "No. The sanza mat operates completely silently without vibrating or shaking. Most users feel a gentle, pleasant sensation of warmth and muscular ease.",
        },
        {
          question: "How does it compare to massage guns or compression boots?",
          answer:
            "Unlike mechanical pressure tools that only squeeze superficial muscle tissue, sanza operates at the bio-electromagnetic level across your entire body simultaneously, addressing the autonomic nervous system as well as muscular tone.",
        },
        {
          question: "Can family members use the system as well?",
          answer:
            "Absolutely. The controller features 15 pre-set programs, making it effortless for anyone in your household to switch between athletic recovery, evening sleep preparation, or stress reset.",
        },
      ],
      ctaHeadline: "Feel the difference in your legs and back tomorrow.",
      ctaBody:
        "Speak with our wellness team for a personal consultation, or arrange a guided introduction to explore the optimal recovery setup for your home.",
      ctaPrimary: "Book a personal introduction",
      ctaSecondary: "Ask a question",
    },
    de: {
      slug: "recovery",
      metaTitle: "Sport- & Muskelregeneration für zu Hause | sanza PEMF System",
      metaDescription:
        "Beschleunigen Sie Ihre Muskelregeneration, lösen Sie körperliche Verspannungen und schalten Sie nach dem Sport ab – mit dem sanza PEMF-, Biofrequenz- und Lichtsystem für zu Hause.",
      eyebrow: "Sport- & Bewegungsregeneration",
      headline: "Geben Sie Ihrem Körper mehr als passives Liegen. Echte Erholung für zu Hause.",
      subheadline:
        "Intensives Training, Laufen, Radfahren und fordernde Tage hinterlassen muskuläre Schutzspannung und ein überreiztes Nervensystem. sanza vereint Ganzkörper-PEMF, Biofrequenz-Mikrostrom und fokussiertes Licht, um Ihren Körper in die echte zelluläre Regeneration zu führen.",
      heroNote: "Ein 16-minütiges, wiederholbares Erholungsritual für Sportler und aktive Menschen.",
      heroImage: IMAGE_PATHS.home.ritualPostActivityRecovery,
      problemEyebrow: "Der Engpass nach der Belastung",
      problemTitle: "Sie trainieren hart – doch die Erholung hinkt oft hinterher.",
      problemBody: [
        "Ganz gleich, ob Sie für einen Marathon trainieren, im Fitnessstudio Kraft aufbauen oder lange Arbeitstage auf den Beinen verbringen: Ihre Leistungsfähigkeit wird davon bestimmt, wie vollständig sich Ihr Gewebe zwischen zwei Einheiten erholt.",
        "Passives Sitzen auf dem Sofa lässt Stoffwechselrückstände in überlasteten Muskelgruppen verharren. Oberschenkel, Waden und der untere Rücken bleiben in einer unbewussten Schutzspannung, die das Nervensystem im Stressmodus hält.",
        "Eisbäder und Faszienrollen bringen zwar kurzfristige Reize, sind aber mühsam und schmerzhaft. Ihr Körper braucht ein systemisches, müheloses Entspannungssignal, das die Mikrozirkulation und die zelluläre Erholung sanft unterstützt.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksTechnologies ?? "/images/homeuse-how-three-technologies.jpg",
      solutionEyebrow: "Die Multi-Technologie-Ebene",
      solutionTitle: "Drei regenerative Impulse. Ein einfaches 16-Minuten-Mattenritual.",
      solutionBody: [
        "sanza verlässt sich nicht auf eine isolierte Einzelmethode. In einer abgestimmten Einheit koordiniert das System pulsierende elektromagnetische Felder (PEMF), Biofrequenz-Mikrostrom und Kaltlicht/Laser-Applikatoren.",
        "Das Liegen auf der Ganzkörpermatte erzeugt eine weiträumige chronobiologische Induktion, die den natürlichen Ionenaustausch und die Durchblutung anregt. Handelektroden oder der gezielte Laserstift können gleichzeitig beanspruchte Knie, Sehnen oder Waden versorgen.",
        "Das Erlebnis ist ruhig, haptisch und überaus angenehm: keine Kälteschocks, kein Drücken. Sie legen sich hin, starten das Programm und geben Ihrem Körper die Tiefenentspannung, die er nach der Anstrengung verlangt.",
      ],
      solutionSpecs: [
        {
          title: "Ganzkörper-PEMF-Matte",
          body: "Sanfte elektromagnetische Impulse unterstützen das natürliche Membranpotenzial aller großen Muskelgruppen.",
        },
        {
          title: "Biofrequenz-Mikrostrom",
          body: "Handelektroden leiten fein abgestimmte Schwingungen ein, die das vegetative Nervensystem beruhigen.",
        },
        {
          title: "Gezieltes Licht & Laser",
          body: "Fokussierte Photonenanwendung direkt auf strapazierte Knie, Achillessehnen oder Lendenmuskeln.",
        },
      ],
      ritualTitle: "Wo sanza in Ihre Trainingswoche passt",
      ritualEyebrow: "Ihr Erholungsablauf",
      ritualSteps: [
        {
          step: "01",
          title: "Ankunft nach dem Sport",
          duration: "2 Min.",
          body: "Sporttasche abstellen, ein Glas Wasser trinken und bequem auf der sanza-Matte im Wohn- oder Schlafzimmer Platz nehmen.",
        },
        {
          step: "02",
          title: "Geführte Regenerationssitzung",
          duration: "16 Min.",
          body: "Programm 06 (Regeneration) starten. Eine wohlige Entspannung breitet sich aus, während die Muskeln sanft loslassen.",
        },
        {
          step: "03",
          title: "Frischer Übergang in den Abend",
          duration: "2 Min.",
          body: "Aufstehen mit spürbar leichteren Beinen, gelöstem Rücken und einem Nervensystem, das bereit für tiefen Schlaf ist.",
        },
      ],
      outcomesTitle: "Was sich ändert, wenn Sie gezielt regenerieren",
      outcomesEyebrow: "Spürbare Resultate",
      bodyBenefits: [
        "Mindert Steifheit nach dem Training und beugt bleiernen Beinen vor",
        "Fördert die lokale Mikrozirkulation und das zelluläre Gleichgewicht",
        "Ermöglicht es Ihnen, die nächste Einheit mit gewohnter Frische anzugehen",
      ],
      mindBenefits: [
        "Senkt erhöhte Stresshormone nach harten Trainingseinheiten rasch ab",
        "Ein friedvolles privates Ritual, das den Übergang vom Sport in den Feierabend markiert",
        "Mehr Kontinuität und Freude an langfristiger sportlicher Aktivität",
      ],
      trustEyebrow: "Österreichische Ingenieursqualität",
      trustTitle: "Entwickelt von der sanza International GmbH — über 20 Jahre Erfahrung",
      trustBody:
        "sanza ist kein anonymer Wellness-Gag. Gefertigt mit deutscher Hardware-Präzision, gestützt durch wissenschaftliche Forschungskooperationen in Graz, Mainz und Budapest und geschätzt von über 60.000 Langzeitanwendern, steht sanza für verlässliche Technologie für Ihr Zuhause.",
      faqs: [
        {
          question: "Kann ich sanza direkt nach dem Training nutzen?",
          answer:
            "Ja. Viele Sportler nutzen sanza innerhalb von 30 Minuten nach dem Workout, um den Wechsel von der Belastung in die Erholung gezielt einzuleiten.",
        },
        {
          question: "Macht die Matte Geräusche oder vibriert sie unangenehm?",
          answer:
            "Nein. Die sanza-Matte arbeitet geräuschlos ohne laute Motoren oder mechanische Erschütterungen. Anwender empfinden ein wohliges Gefühl der Ruhe und Entlastung.",
        },
        {
          question: "Wie unterscheidet sich sanza von Massagepistolen?",
          answer:
            "Massagepistolen wirken rein mechanisch und punktuell auf das oberflächliche Gewebe. sanza wirkt bio-elektromagnetisch auf den gesamten Organismus und das vegetative Nervensystem.",
        },
        {
          question: "Können auch andere Familienmitglieder das Gerät nutzen?",
          answer:
            "Selbstverständlich. Über den einfachen Controller mit 15 nummerierten Programmen kann jedes Familienmitglied mühelos zwischen Sportregeneration, Schlafvorbereitung oder Stressabbau wählen.",
        },
      ],
      ctaHeadline: "Spüren Sie den Unterschied in Ihren Beinen schon morgen.",
      ctaBody:
        "Sprechen Sie mit unserem Team für eine persönliche Beratung oder buchen Sie eine geführte Einführung, um das passende Setup kennenzulernen.",
      ctaPrimary: "Persönliche Einführung buchen",
      ctaSecondary: "Eine Frage stellen",
    },
    lv: {
      slug: "recovery",
      metaTitle: "Atgūšanās pēc treniņa un sporta mājās | sanza PEMF sistēma",
      metaDescription:
        "Paātriniet muskuļu atjaunošanos, maziniet stīvumu un atgūstiet spēkus mājās ar daudzfunkcionālo sanza PEMF, biofrekvenču un gaismas labsajūtas sistēmu.",
      eyebrow: "Sporta un kustību atjaunošanās",
      headline: "Sniedziet ķermenim vairāk nekā pasīvu atpūtu. Paātriniet atgūšanos mājās.",
      subheadline:
        "Intensīvi treniņi, skriešana, riteņbraukšana un fiziski smags darbs rada muskuļu spriedzi un uztur nervu sistēmu trauksmē. sanza apvieno visa ķermeņa PEMF, biofrekvenču mikrostrāvas un gaismu, palīdzot ķermenim patiesi atjaunoties.",
      heroNote: "16 minūšu rituāls sportistiem un aktīva dzīvesveida piekritējiem.",
      heroImage: IMAGE_PATHS.home.ritualPostActivityRecovery,
      problemEyebrow: "Pēctreniņa noguruma slazds",
      problemTitle: "Jūs trenējaties mērķtiecīgi, bet atgūšanās bieži iepaliek.",
      problemBody: [
        "Neatkarīgi no tā, vai gatavojaties maratonam, trenējaties zālē vai pavadāt garas darba stundas uz kājām, jūsu rezultātus nosaka tas, cik ātri audi atjaunojas starp slodzēm.",
        "Pasīva sēdēšana dīvānā nepalīdz nogurušajiem muskuļiem atbrīvoties no saspringuma. Kājas un muguras lejasdaļa paliek saspringta, paildzinot atjaunošanās laiku.",
        "Ledus vannas un masāžas ruļļi prasa piepūli un diskomfortu. Jūsu ķermenim ir nepieciešams maigs, sistēmisks signāls, kas atbalsta mikrocirkulāciju un šūnu līdzsvaru bez papildu grūtībām.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksTechnologies ?? "/images/homeuse-how-three-technologies.jpg",
      solutionEyebrow: "Daudztehnoloģiju pieeja",
      solutionTitle: "Trīs atjaunojošas iedarbības. Viens 16 minūšu paklāja rituāls.",
      solutionBody: [
        "sanza nepaļaujas tikai uz vienu metodi. Vienā vadītā seansā tā apvieno pulsējošos elektromagnētiskos laukus (PEMF), biofrekvenču mikrostrāvas un vēsā lāzera gaismas aplikatorus.",
        "Guļot uz visa ķermeņa paklāja, hronobioloģiskās frekvences maigi veicina šūnu vielmaiņu un asinsriti. Rokas elektrodi vai lāzera aplikators vienlaikus var atbalstīt noslogotos ceļus, cīpslas vai muskuļus.",
        "Pieredze ir klusa, patīkama un nomierinoša: bez zālēm un bez sāpēm. Jūs apguļaties, palaižat programmu un sniedzat ķermenim pelnītu mieru.",
      ],
      solutionSpecs: [
        {
          title: "Visa ķermeņa PEMF paklājs",
          body: "Maigi elektromagnētiskie impulsi atbalsta lielo muskuļu grupu dabisko līdzsvaru.",
        },
        {
          title: "Biofrekvenču rokas elektrodi",
          body: "Plaukstās turami elektrodi, kas palīdz nomierināt veģetatīvo nervu sistēmu.",
        },
        {
          title: "Mērķtiecīga gaisma un lāzers",
          body: "Fokusēti fotoni noslogotām cīpslām, ceļu locītavām vai muguras muskuļiem.",
        },
      ],
      ritualTitle: "Kā sanza iekļaujas jūsu nedēļas ritmā",
      ritualEyebrow: "Atgūšanās gaita",
      ritualSteps: [
        {
          step: "01",
          title: "Ierašanās pēc slodzes",
          duration: "2 min",
          body: "Nolieciet sporta somu, padzerieties ūdeni un ērti apgulieties uz sanza paklāja.",
        },
        {
          step: "02",
          title: "Atjaunojošais seanss",
          duration: "16 min",
          body: "Palaidiet programmu 06 (Reģenerācija). Izbaudiet patīkamu siltumu un muskuļu atslābumu.",
        },
        {
          step: "03",
          title: "Svaigs noslēgums",
          duration: "2 min",
          body: "Piecelieties ar vieglām kājām, atbrīvotu muguru un mieru pirms vakara atpūtas.",
        },
      ],
      outcomesTitle: "Kas mainās, regulāri atjaunojoties",
      outcomesEyebrow: "Pārliecinoši rezultāti",
      bodyBenefits: [
        "Mazina muskuļu stīvumu un smaguma sajūtu kājās pēc slodzes",
        "Veicina lokālo mikrocirkulāciju un audu atjaunošanos",
        "Ļauj uzsākt nākamo treniņu ar pilnvērtīgu spēku un enerģiju",
      ],
      mindBenefits: [
        "Pazemina stresa hormonu līmeni pēc intensīvas fiziskas piepūles",
        "Rāms mājas rituāls, kas nodala treniņu no ģimenes vakara",
        "Vairāk prieka un motivācijas ilgtermiņa sportiskajiem mērķiem",
      ],
      trustEyebrow: "Austrijas inženiertehniskā kvalitāte",
      trustTitle: "Ražotājs sanza International GmbH — vairāk nekā 20 gadu pieredze",
      trustBody:
        "sanza nav anonīms labsajūtas rīks. Tā ir vācu aparatūras precizitāte, Grācas, Maincas un Budapeštas universitāšu pētījumu bāze un vairāk nekā 60 000 lietotāju uzticība visā Eiropā.",
      faqs: [
        {
          question: "Vai varu lietot sanza uzreiz pēc treniņa?",
          answer:
            "Jā. Daudzi sportisti izmanto sanza pirmo 30 minūšu laikā pēc treniņa, lai paātrinātu ķermeņa pārslēgšanos uz atveseļošanās fāzi.",
        },
        {
          question: "Vai paklājs rada troksni vai vibrāciju?",
          answer:
            "Nē. sanza darbojas pilnīgi klusi bez mehāniskas rīvēšanās vai vibrācijas. Sajūtas ir patīkamas un nomierinošas.",
        },
        {
          question: "Kā tas atšķiras no masāžas pistolēm?",
          answer:
            "Masāžas pistoles iedarbojas tikai mehāniski uz virspusējiem audiem. sanza iedarbojas bio-elektromagnētiski uz visu organismu un nervu sistēmu vienlaikus.",
        },
        {
          question: "Vai to var izmantot visa ģimene?",
          answer:
            "Jā, vadības pultij ir 15 numurētas programmas, kas ļauj katram mājiniekam izvēlēties piemērotāko seansu.",
        },
      ],
      ctaHeadline: "Sajūtiet vieglumu savās kājās jau rīt.",
      ctaBody:
        "Sazinieties ar mūsu komandu personīgai konsultācijai vai piesakieties uz ievada zvanu, lai iepazītu piemērotāko risinājumu.",
      ctaPrimary: "Pieteikt personīgu ievadu",
      ctaSecondary: "Uzdot jautājumu",
    },
    ru: {
      slug: "recovery",
      metaTitle: "Восстановление мышц после тренировок дома | sanza PEMF",
      metaDescription:
        "Ускорьте восстановление мышц, снимите скованность и перегрузку после спорта дома с мультисистемным комплексом sanza (PEMF, биочастоты, свет).",
      eyebrow: "Восстановление после спорта и нагрузок",
      headline: "Дайте телу больше, чем просто лежание на диване. Глубокое восстановление дома.",
      subheadline:
        "Интенсивные тренировки, бег, велосипед и долгие дни на ногах вызывают спазм мышц и держат нервную систему в напряжении. sanza объединяет импульсные электромагнитные поля, биочастоты и свет для полноценной клеточной регенерации.",
      heroNote: "16-минутный восстановительный ритуал для спортсменов и активных людей.",
      heroImage: IMAGE_PATHS.home.ritualPostActivityRecovery,
      problemEyebrow: "Проблема замедленного восстановления",
      problemTitle: "Вы выкладываетесь на тренировках, но тело не успевает восстановиться.",
      problemBody: [
        "Готовитесь ли вы к марафону, тренируетесь в зале или проводите день на ногах — ваши результаты ограничены тем, как быстро восстанавливаются ткани между нагрузками.",
        "Пассивный отдых на диване оставляет продукты обмена в перегруженных мышцах. Спина и ноги остаются зажатыми, сохраняя защитный гипертонус.",
        "Ледяные ванны и жесткие массажные валики требуют преодоления боли. Вашему организму нужен системный, комфортный сигнал, ускоряющий микроциркуляцию и клеточный энергообмен.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksTechnologies ?? "/images/homeuse-how-three-technologies.jpg",
      solutionEyebrow: "Мультимодальная система",
      solutionTitle: "Три восстановительных импульса. Один 16-минутный ритуал на мате.",
      solutionBody: [
        "sanza не ограничивается одной изолированной технологией. В одном сеансе скоординированы импульсные электромагнитные поля (PEMF), микротоки биочастот и холодный лазерный свет.",
        "Коврик на все тело создает мягкую индукцию, активирующую микроциркуляцию и ионный обмен клеток. Ручные электроды и лазерный аппликатор одновременно заботятся о коленях, связках или пояснице.",
        "Процедура абсолютно бесшумна, тактильна и приятна. Вы просто ложитесь на мат, выбираете номер программы и дарите телу глубокий отдых.",
      ],
      solutionSpecs: [
        {
          title: "Коврик PEMF на все тело",
          body: "Мягкие электромагнитные импульсы поддерживают естественный мембранный потенциал всех крупных мышц.",
        },
        {
          title: "Биочастотные электроды",
          body: "Электроды в ладонях подают микротоковые частоты, успокаивающие вегетативную нервную систему.",
        },
        {
          title: "Точечный лазер и свет",
          body: "Направленное фотонное воздействие на связки, коленные суставы или забитые мышцы ног.",
        },
      ],
      ritualTitle: "Как sanza вписывается в тренировочный график",
      ritualEyebrow: "Ваш график восстановления",
      ritualSteps: [
        {
          step: "01",
          title: "Прибытие после тренировки",
          duration: "2 мин",
          body: "Выпейте стакан воды, снимите обувь и комфортно расположитесь на мате sanza.",
        },
        {
          step: "02",
          title: "Сеанс регенерации",
          duration: "16 мин",
          body: "Включите программу 06 (Регенерация). Приятное тепло и отпускание спазмов разольются по всему телу.",
        },
        {
          step: "03",
          title: "Легкость и свежесть",
          duration: "2 мин",
          body: "Встаньте с легкими ногами, расслабленной поясницей и готовностью к вечернему отдыху.",
        },
      ],
      outcomesTitle: "Что меняется при осознанном восстановлении",
      outcomesEyebrow: "Ощутимые эффекты",
      bodyBenefits: [
        "Снимает крепатуру и чувство свинцовой тяжести в ногах",
        "Стимулирует локальный капиллярный кровоток и тканевый обмен",
        "Позволяет подойти к следующей тренировке на пике энергии",
      ],
      mindBenefits: [
        "Быстро снижает уровень кортизола после тяжелых физических нагрузок",
        "Приятный ритуал, разделяющий спортивное напряжение и уют дома",
        "Больше удовольствия и стабильности в спортивном режиме",
      ],
      trustEyebrow: "Австрийское инженерное качество",
      trustTitle: "Разработано sanza International GmbH — более 20 лет опыта",
      trustBody:
        "sanza — это не безымянный гаджет. Немецкая аппаратная надежность, исследования университетов Граца, Майнца и Будапешта, более 60 000 постоянных пользователей в Европе.",
      faqs: [
        {
          question: "Можно ли использовать sanza сразу после тренировки?",
          answer:
            "Да, большинство спортсменов используют сеанс в течение первых 30 минут после нагрузки для быстрого переключения в режим восстановления.",
        },
        {
          question: "Шумит ли мат или вибрирует ли он?",
          answer:
            "Нет, система работает абсолютно бесшумно, без моторов и вибрации, создавая глубокое чувство расслабления.",
        },
        {
          question: "Чем это отличается от массажного пистолета?",
          answer:
            "Перкуссионный массаж работает поверхностно и механически. sanza действует на био-электромагнитном уровне на весь организм и нервную систему одновременно.",
        },
        {
          question: "Могут ли пользоваться другие члены семьи?",
          answer:
            "Да, благодаря 15 встроенным программам каждый дома легко выберет нужный режим: от спорта до подготовки ко сну.",
        },
      ],
      ctaHeadline: "Почувствуйте легкость в ногах и спине уже завтра.",
      ctaBody:
        "Свяжитесь с нами для индивидуальной консультации или запишитесь на вводную встречу, чтобы подобрать конфигурацию для вашего дома.",
      ctaPrimary: "Забронировать консультацию",
      ctaSecondary: "Задать вопрос",
    },
  },

  sleep: {
    en: {
      slug: "sleep",
      metaTitle: "Deep Rest & Sleep Preparation at Home | sanza PEMF System",
      metaDescription:
        "Create a tranquil evening wind-down ritual at home. sanza uses chronobiological delta frequencies and soothing PEMF to prepare your body for deep, uninterrupted sleep.",
      eyebrow: "Evening Rest & Sleep Preparation",
      headline: "Quiet the racing mind. Prepare your body for deep, restorative sleep.",
      subheadline:
        "Late-night screen light, deadline stress, and cognitive fatigue leave the nervous system locked in daytime alertness. sanza delivers gentle chronobiological delta frequencies through a comfortable full-body mat, helping your body unhurriedly transition into natural, restorative sleep.",
      heroNote: "A 24-minute evening ritual before bedtime.",
      heroImage: IMAGE_PATHS.home.ritualRestSleepPreparation,
      problemEyebrow: "The modern evening dilemma",
      problemTitle: "You lie in bed exhausted, but your nervous system is still wired.",
      problemBody: [
        "In our screen-dominated world, daytime vigilance does not end when you shut your laptop. Blue light and endless notifications keep cortisol elevated, delaying natural melatonin production and disrupting your circadian rhythm.",
        "You climb into bed feeling physically drained, yet your mind continues cycling through conversations, tasks, and future obligations. Even when you eventually fall asleep, it is often shallow, fragmented, and unrefreshing.",
        "Sleeping pills and synthetic sleep aids leave you groggy the following morning without restoring true slow-wave restorative sleep architecture. Your body does not need sedation — it needs a clear, biological signal that the day is over.",
      ],
      problemImage: IMAGE_PATHS.home.welcomeSide ?? "/images/sanza comfort routines 01.png",
      solutionEyebrow: "The chronobiological approach",
      solutionTitle: "Gentle delta-wave entrainment to ease you into the night.",
      solutionBody: [
        "sanza applies chronobiology — the science of natural biological rhythms. In the evening hours, the system generates ultra-low frequency electromagnetic waves (0.5 Hz – 4 Hz) matching the body's natural delta sleep state.",
        "Lying on the comfortable full-body mat for 20 to 24 minutes before getting into bed creates an ambient settling effect. Hand electrodes gently held in your fingers ground autonomic restlessness, slowing the breath and releasing tension in the chest and jaw.",
        "It is completely non-pharmacological and non-invasive. You do not wake up with a pharmaceutical hangover; you simply wake up feeling like your night of sleep actually recharged you.",
      ],
      solutionSpecs: [
        {
          title: "Circadian Delta Wave Entrainment",
          body: "Ultra-low chronobiological frequencies (0.5–4 Hz) guide the central nervous system out of sympathetic hyper-vigilance.",
        },
        {
          title: "Autonomic Calming via Hand Electrodes",
          body: "Gentle microcurrent signals dissipate peripheral nervous tension and slow the respiratory rhythm.",
        },
        {
          title: "Non-Pharmacological & Zero Grogginess",
          body: "Supports your body's natural sleep architecture without synthetic sedatives or morning sluggishness.",
        },
      ],
      ritualTitle: "The evening transition ritual",
      ritualEyebrow: "Bedtime protocol",
      ritualSteps: [
        {
          step: "01",
          title: "Dim the Lights",
          duration: "30 min before bed",
          body: "Turn off screens, lower the lighting in your bedroom, and lay the sanza mat across your bed or rug.",
        },
        {
          step: "02",
          title: "Evening Delta Session",
          duration: "24 min",
          body: "Select Program 03 (Evening Wind-Down). Hold the electrodes softly, close your eyes, and let rhythmic frequencies quiet your thoughts.",
        },
        {
          step: "03",
          title: "Drift Into Sleep",
          duration: "Bedtime",
          body: "Slip under your duvet while your body is still steeped in profound parasympathetic stillness. Sleep comes naturally.",
        },
      ],
      outcomesTitle: "What changes when your night begins properly",
      outcomesEyebrow: "Life-changing mornings",
      bodyBenefits: [
        "Quicker onset of natural sleep without tossing and turning for hours",
        "Less restless tossing; more sustained deep slow-wave sleep phases",
        "Muscular tension in the jaw, neck, and shoulders softens completely",
      ],
      mindBenefits: [
        "Quiets the repetitive late-night mental loop of tomorrow's to-do lists",
        "Awakening with clear morning mental acuity instead of sluggish brain fog",
        "A peaceful, sacred evening boundary that protects your home peace",
      ],
      trustEyebrow: "Documented Excellence",
      trustTitle: "Research-backed frequencies crafted in Austria",
      trustBody:
        "The frequency programs within sanza were developed by Austrian chronobiology pioneers and are referenced in university research published across Europe. Over 60,000 households rely on sanza as their foundational nightly wellness ritual.",
      faqs: [
        {
          question: "Can I fall asleep on the mat?",
          answer:
            "Yes, absolutely. The system automatically turns off at the end of the program, so you can safely fall asleep directly on the comfortable mat.",
        },
        {
          question: "Is this safe to use every evening?",
          answer:
            "Yes. The gentle, natural frequency spectrum of sanza is designed precisely for daily home use and evening wind-down rituals.",
        },
        {
          question: "Does it emit harmful EMF radiation?",
          answer:
            "No. Unlike high-frequency wireless emissions (like 5G or Wi-Fi), sanza generates extremely low-frequency bio-compatible fields that align with the Earth's natural geomagnetic frequencies.",
        },
        {
          question: "How quickly do people notice a change in their sleep quality?",
          answer:
            "Many users report an immediate sense of deeper physical relaxation on their first evening. Cumulative sleep benefits typically solidify within 7 to 14 consecutive days of use.",
        },
      ],
      ctaHeadline: "Reclaim deep, peaceful nights at home.",
      ctaBody:
        "Discover how sanza can transform your evening wind-down. Book a personal call with our wellness advisors or send us your questions.",
      ctaPrimary: "Book a personal introduction",
      ctaSecondary: "Ask a question",
    },
    de: {
      slug: "sleep",
      metaTitle: "Tiefenruhe & Schlafvorbereitung für zu Hause | sanza PEMF",
      metaDescription:
        "Schaffen Sie ein friedvolles Abendritual für zu Hause. sanza nutzt chronobiologische Delta-Frequenzen und PEMF, um Körper und Geist auf erholsamen Schlaf vorzubereiten.",
      eyebrow: "Abendruhe & Schlafvorbereitung",
      headline: "Gedankensturm beruhigen. Den Körper auf tiefen, erholsamen Schlaf einstimmen.",
      subheadline:
        "Abendliches Bildschirmlicht, Termindruck und geistige Überreizung halten das Nervensystem im Alarmmodus. sanza nutzt sanfte chronobiologische Delta-Frequenzen auf einer bequemen Ganzkörpermatte, um den Körper sanft in den natürlichen Erholungsschlaf zu führen.",
      heroNote: "Ein 24-minütiges Abendritual vor dem Schlafengehen.",
      heroImage: IMAGE_PATHS.home.ritualRestSleepPreparation,
      problemEyebrow: "Das abendliche Dilemma",
      problemTitle: "Sie liegen erschöpft im Bett – doch das Nervensystem kommt nicht zur Ruhe.",
      problemBody: [
        "In unserem digitalen Alltag endet die Wachsamkeit des Tages selten mit dem Zuklappen des Laptops. Blaulicht und Nachrichtenflut halten das Stresshormon Cortisol hoch und stören die natürliche Melatoninausschüttung.",
        "Sie gehen körperlich müde ins Bett, doch der Kopf rattert weiter: unerledigte Aufgaben, Gespräche des Tages, Sorgen um morgen. Selbst wenn Sie einschlafen, bleibt der Schlaf oft unruhig und zerfahren.",
        "Schlafmittel hinterlassen am nächsten Morgen oft einen schweren Kopf, ohne die echte Tiefschlafarchitektur zu fördern. Ihr Körper braucht keine Betäubung, sondern ein klares, biologisches Feierabendsignal.",
      ],
      problemImage: IMAGE_PATHS.home.welcomeSide ?? "/images/sanza comfort routines 01.png",
      solutionEyebrow: "Der chronobiologische Ansatz",
      solutionTitle: "Sanfte Delta-Wellen-Frequenzen für einen harmonischen Übergang in die Nacht.",
      solutionBody: [
        "sanza basiert auf Chronobiologie – der Wissenschaft natürlicher Biorhythmen. In den Abendstunden erzeugt das System ultra-niedrige Schwingungen (0,5 Hz – 4 Hz), die dem natürlichen Delta-Wellen-Zustand des Tiefschlafs entsprechen.",
        "20 bis 24 Minuten auf der bequemen Matte vor dem Einschlafen erzeugen eine spürbare Erdung. Die Handelektroden in den Händen helfen, vegetative Unruhe sanft abzuleiten und die Atmung zu vertiefen.",
        "Völlig frei von Medikamenten und Nebenwirkungen. Sie wachen morgens nicht wie gerädert auf, sondern spüren die Frische einer Nacht, die Ihren Körper wirklich regeneriert hat.",
      ],
      solutionSpecs: [
        {
          title: "Zirkadiane Delta-Frequenz-Führung",
          body: "Niedrigfrequente Schwingungen (0,5–4 Hz) leiten das Nervensystem sanft aus der Tagesanspannung.",
        },
        {
          title: "Vegetative Entlastung über Handelektroden",
          body: "Mikroströme beruhigen nervöse Unruhe und vertiefen den Atemrhythmus.",
        },
        {
          title: "Frei von Medikamenten & Morgen-Hangover",
          body: "Unterstützt Ihre natürliche Schlafarchitektur ohne Abhängigkeiten oder Trägheit.",
        },
      ],
      ritualTitle: "Das abendliche Übergangsritual",
      ritualEyebrow: "Schlafprotokoll",
      ritualSteps: [
        {
          step: "01",
          title: "Licht dämpfen",
          duration: "30 Min. vor dem Schlafen",
          body: "Bildschirme ausschalten, warmes Licht im Raum anstellen und die sanza-Matte vorbereiten.",
        },
        {
          step: "02",
          title: "Abendliche Delta-Sitzung",
          duration: "24 Min.",
          body: "Programm 03 (Abendruhe) starten. Die Handelektroden halten, Augen schließen und den Gedankenstrom abklingen lassen.",
        },
        {
          step: "03",
          title: "Gleiten in den Schlaf",
          duration: "Schlafenszeit",
          body: "Ins Bett gleiten, während der Körper in tiefer parasympathischer Entspannung ruht. Der Schlaf kommt von selbst.",
        },
      ],
      outcomesTitle: "Was sich ändert, wenn die Nacht gelingt",
      outcomesEyebrow: "Mehr Lebenskraft am Morgen",
      bodyBenefits: [
        "Schnelleres natürliches Einschlafen ohne stundenlanges Herumwälzen",
        "Ruhigere Nächte und längere Phasen tiefen, ungestörten Schlafs",
        "Spürbare Entspannung von Kiefer, Nacken und Schultermuskulatur",
      ],
      mindBenefits: [
        "Stoppt das abendliche Gedankenkarussell unerledigter To-Do-Listen",
        "Erwachen mit geistiger Klarheit statt trüber Morgenschwere",
        "Eine verlässliche Oase der Ruhe, die den häuslichen Frieden schützt",
      ],
      trustEyebrow: "Wissenschaftlich fundiert",
      trustTitle: "Österreichische Chronobiologie mit über 20 Jahren Erfahrung",
      trustBody:
        "Die Frequenzprogramme von sanza wurden in Zusammenarbeit mit europäischen Forschern entwickelt. Über 60.000 Haushalte vertrauen sanza als festem Bestandteil ihres abendlichen Wohlfühlrituals.",
      faqs: [
        {
          question: "Darf ich auf der Matte einschlafen?",
          answer:
            "Ja, absolut. Das System schaltet sich nach Ablauf des Programms automatisch ab. Viele Anwender schlafen bereits während der Sitzung friedlich ein.",
        },
        {
          question: "Ist die tägliche abendliche Anwendung sicher?",
          answer:
            "Ja, die sanften chronobiologischen Frequenzen von sanza sind speziell für die tägliche, unbedenkliche Nutzung im häuslichen Umfeld konzipiert.",
        },
        {
          question: "Gibt das Gerät schädlichen Elektrosmog ab?",
          answer:
            "Nein. Im Gegensatz zu hochfrequenter Funkstrahlung (WLAN, 5G) erzeugt sanza bio-kompatible Niederfrequenzfelder, die dem natürlichen Magnetfeld der Erde nachempfunden sind.",
        },
        {
          question: "Wie schnell spürt man Verbesserungen?",
          answer:
            "Eine wohltuende Entlastung ist oft schon am ersten Abend spürbar. Nachhaltige Effekte auf die Schlafqualität stabilisieren sich meist nach 1 bis 2 Wochen regelmäßiger Nutzung.",
        },
      ],
      ctaHeadline: "Gönnen Sie sich wieder tiefe, friedvolle Nächte.",
      ctaBody:
        "Erfahren Sie, wie sanza Ihre Abende verwandeln kann. Sprechen Sie mit unseren Beratern oder stellen Sie uns Ihre Fragen.",
      ctaPrimary: "Persönliche Einführung buchen",
      ctaSecondary: "Eine Frage stellen",
    },
    lv: {
      slug: "sleep",
      metaTitle: "Dziļa atpūta un sagatavošanās miegam mājās | sanza PEMF sistēma",
      metaDescription:
        "Izveidojiet mierpilnu vakara rituālu mājās. sanza izmanto hronobioloģiskās delta frekvences un PEMF, lai sagatavotu ķermeni dziļam, atjaunojošam miegam.",
      eyebrow: "Vakara atpūta un miega sagatavošana",
      headline: "Nomieriniet nemierīgās domas. Sagatavojiet ķermeni dziļam miegam.",
      subheadline:
        "Ekrānu gaisma, dienas steiga un mentāls nogurums tur nervu sistēmu trauksmē. sanza maigi vada ķermeni uz dabisku, dziļu atpūtu ar hronobioloģiskām frekvencēm uz ērta visa ķermeņa paklāja.",
      heroNote: "24 minūšu vakara rituāls pirms naktsmiera.",
      heroImage: IMAGE_PATHS.home.ritualRestSleepPreparation,
      problemEyebrow: "Mūsdienu vakara izaicinājums",
      problemTitle: "Jūs guļat gultā pārguris, bet prāts nespēj apstāties.",
      problemBody: [
        "Viedierīču ekrānu zilā gaisma un nepārtrauktā informācijas plūsma uztur augstu stresa līmeni, aizkavējot dabiskā miega hormona melatonīna izstrādi.",
        "Ķermenis jūtas noguris, taču prāts turpina risināt dienas sarunas un rītdienas uzdevumus. Miega fāzes kļūst seklas un saraustītas.",
        "Miega zāles sniedz tikai īslaicīgu efektu un rada smagumu no rīta. Ķermenim nav vajadzīga iemidzināšana, bet gan skaidrs dabisks signāls, ka diena ir beigusies.",
      ],
      problemImage: IMAGE_PATHS.home.welcomeSide ?? "/images/sanza comfort routines 01.png",
      solutionEyebrow: "Hronobioloģiskā pieeja",
      solutionTitle: "Maigas delta frekvences mierpilnai pārejai naktī.",
      solutionBody: [
        "sanza pamatā ir hronobioloģija — zinātne par dabiskajiem ritmiem. Vakarā sistēma rada zemas frekvences viļņus (0,5 Hz – 4 Hz), kas atbilst dziļa miega delta ritmiem.",
        "20 līdz 24 minūtes uz paklāja rada dziļu relaksāciju. Rokas elektrodi palīdz noņemt veģetatīvo spriedzi, palēninot elpošanu un atslābinot plecus.",
        "Pilnīgi bez medikamentiem. Jūs mostaties ar skaidru galvu un atjaunotu enerģiju, nevis smaguma sajūtu.",
      ],
      solutionSpecs: [
        {
          title: "Delta frekvenču vadība",
          body: "Zemas frekvences (0,5–4 Hz) palīdz nervu sistēmai iziet no dienas trauksmes režīma.",
        },
        {
          title: "Veģetatīvā atslodze ar rokas elektrodiem",
          body: "Mikrostrāvas palīdz nomierināt ķermeni un padziļināt elpu.",
        },
        {
          title: "Bez medikamentiem un bez rīta smaguma",
          body: "Atbalsta dabisko miega struktūru bez atkarības riska.",
        },
      ],
      ritualTitle: "Vakara pārejas rituāls",
      ritualEyebrow: "Miega protokols",
      ritualSteps: [
        {
          step: "01",
          title: "Gaismas pieklusināšana",
          duration: "30 min pirms miega",
          body: "Izslēdziet ekrānus, radiet maigu apgaismojumu un sagatavojiet sanza paklāju.",
        },
        {
          step: "02",
          title: "Vakara delta seanss",
          duration: "24 min",
          body: "Palaidiet programmu 03 (Vakara miers). Aizveriet acis un ļaujiet ritmiskajām frekvencēm nomierināt domas.",
        },
        {
          step: "03",
          title: "Iegrimšana miegā",
          duration: "Naktsmiers",
          body: "Pārejiet gultā dziļā miera stāvoklī. Miegs atnāk dabiski un viegli.",
        },
      ],
      outcomesTitle: "Kas mainās, kad vakars ir sakārtots",
      outcomesEyebrow: "Rīti ar jaunu spēku",
      bodyBenefits: [
        "Ātrāka aizmigšana bez stundām ilgas grozīšanās gultā",
        "Rāmāks naktsmiers un ilgākas dziļā miega fāzes",
        "Kakla, žokļa un muguras muskuļu pilnīga atslābināšanās",
      ],
      mindBenefits: [
        "Aptur vakara domu virpuli par nepadarītajiem darbiem",
        "Rīta mošanās ar skaidru prātu un enerģiju",
        "Uzticams miera rituāls, kas sargā mājas labsajūtu",
      ],
      trustEyebrow: "Zinātniski pamatota kvalitāte",
      trustTitle: "Austrijas hronobioloģija ar vairāk nekā 20 gadu pieredzi",
      trustBody:
        "sanza frekvenču programmas ir izstrādātas sadarbībā ar Eiropas pētniekiem. Vairāk nekā 60 000 mājsaimniecību uzticas sanza savam vakara mieram.",
      faqs: [
        {
          question: "Vai es drīkstu aizmigt uz paklāja?",
          answer:
            "Jā, sistēma pēc programmas beigām izslēdzas automātiski, un daudzi aizmieg jau seansa laikā.",
        },
        {
          question: "Vai ikvakara lietošana ir droša?",
          answer:
            "Jā, maigās frekvences ir īpaši pielāgotas ikdienas lietošanai mājas apstākļos.",
        },
        {
          question: "Vai ierīce rada kaitīgu starojumu?",
          answer:
            "Nē, tā izmanto zemas frekvences dabiskiem Zemes elektromagnētiskajiem laukiem radniecīgus signālus.",
        },
        {
          question: "Cik ātri jūtams rezultāts?",
          answer:
            "Relaksācija jūtama jau pirmajā vakarā, bet noturīgs miega uzlabojums nostiprinās 1–2 nedēļu laikā.",
        },
      ],
      ctaHeadline: "Atgūstiet dziļu un mierīgu miegu savās mājās.",
      ctaBody:
        "Uzziniet, kā sanza var pārveidot jūsu vakarus. Piesakieties konsultācijai vai uzdodiet savu jautājumu.",
      ctaPrimary: "Pieteikt personīgu ievadu",
      ctaSecondary: "Uzdot jautājumu",
    },
    ru: {
      slug: "sleep",
      metaTitle: "Глубокий отдых и подготовка ко сну дома | sanza PEMF",
      metaDescription:
        "Создайте тихий вечерний ритуал дома. sanza использует хронобиологические дельта-частоты и PEMF для подготовки тела к глубокому и непрерывному сну.",
      eyebrow: "Вечерний отдых и сон",
      headline: "Остановить поток мыслей. Подготовить тело к глубокому ночному сну.",
      subheadline:
        "Свет экранов, дедлайны и умственная перегрузка удерживают нервную систему в дневном режиме тревоги. sanza подает мягкие дельта-частоты через удобный коврик на все тело, помогая организму плавно войти в восстанавливающий сон.",
      heroNote: "24-минутный вечерний ритуал перед сном.",
      heroImage: IMAGE_PATHS.home.ritualRestSleepPreparation,
      problemEyebrow: "Вечерний тупик",
      problemTitle: "Вы ложитесь в постель без сил, но нервная система не может отключиться.",
      problemBody: [
        "В ритме современной жизни рабочий день не заканчивается с закрытием ноутбука. Синий свет мониторов блокирует выработку мелатонина и держит уровень кортизола повышенным.",
        "Вы ложитесь в кровать физически истощенным, но голова переполнена планами, тревогами и задачами. Сон становится прерывистым, поверхностным и не приносит отдыха.",
        "Снотворные препараты дают тяжесть по утрам и разрушают естественную архитектуру медленноволнового сна. Телу нужно не медикаментозное отключение, а естественный биологический сигнал покоя.",
      ],
      problemImage: IMAGE_PATHS.home.welcomeSide ?? "/images/sanza comfort routines 01.png",
      solutionEyebrow: "Хронобиологический подход",
      solutionTitle: "Мягкие дельта-ритмы для гармоничного погружения в сон.",
      solutionBody: [
        "В основе sanza лежит хронобиология — наука о биологических ритмах. В вечерние часы система генерирует сверхнизкие частоты (0,5 Гц – 4 Гц), соответствующие фазе глубокого дельта-сна.",
        "20–24 минуты на коврике перед сном создают эффект полного заземления. Ручные электроды в ладонях снимают вегетативное напряжение, углубляя дыхание и расслабляя спазмированные мышцы лица и шеи.",
        "Без таблеток и побочных эффектов. Вы просыпаетесь не с затуманенной головой, а с ощущением настоящей свежести и сил.",
      ],
      solutionSpecs: [
        {
          title: "Циркадные дельта-частоты",
          body: "Низкочастотные импульсы (0,5–4 Гц) выводят нервную систему из состояния дневного стресса.",
        },
        {
          title: "Вегетативная разгрузка через электроды",
          body: "Микротоковые сигналы снимают тревожность и гармонизируют дыхательный ритм.",
        },
        {
          title: "Без медикаментов и утренней вялости",
          body: "Поддерживает естественную структуру фаз сна без риска привыкания.",
        },
      ],
      ritualTitle: "Вечерний ритуал перехода",
      ritualEyebrow: "Протокол сна",
      ritualSteps: [
        {
          step: "01",
          title: "Приглушить свет",
          duration: "За 30 мин до сна",
          body: "Выключить экраны, включить теплый неяркий свет и расстелить мат sanza.",
        },
        {
          step: "02",
          title: "Вечерний дельта-сеанс",
          duration: "24 мин",
          body: "Запустить программу 03 (Вечерний покой). Закрыть глаза и довериться ритмам системы.",
        },
        {
          step: "03",
          title: "Плавный переход в сон",
          duration: "Сон",
          body: "Перелечь в постель в состоянии глубокого покоя. Сон наступает легко и непрерывно.",
        },
      ],
      outcomesTitle: "Что дает правильное завершение дня",
      outcomesEyebrow: "Бодрое утро каждый день",
      bodyBenefits: [
        "Быстрое засыпание без мучительного ворочания в кровати",
        "Непрерывный глубокий сон на протяжении всей ночи",
        "Полное расслабление мышц челюсти, шеи и плечевого пояса",
      ],
      mindBenefits: [
        "Останавливает вечерний бег мыслей о работе и планах",
        "Пробуждение с ясным умом без утренней апатии и тумана",
        "Надежный семейный ритуал, возвращающий душевный покой",
      ],
      trustEyebrow: "Научная база из Австрии",
      trustTitle: "Европейская хронобиология с опытом более 20 лет",
      trustBody:
        "Программы sanza разработаны совместно с австрийскими исследователями. Более 60 000 семей в Европе доверяют системе sanza свой вечерний отдых.",
      faqs: [
        {
          question: "Можно ли заснуть прямо на мате?",
          answer:
            "Да, мат выключается автоматически после завершения программы, поэтому засыпать на нем абсолютно безопасно.",
        },
        {
          question: "Безопасно ли использовать систему каждый вечер?",
          answer:
            "Да, физиологичные сверхнизкие частоты рассчитаны именно на регулярное ежедневное применение дома.",
        },
        {
          question: "Создает ли система вредное излучение?",
          answer:
            "Нет, sanza излучает крайне низкие частоты, гармоничные с естественным электромагнитным полем Земли.",
        },
        {
          question: "Когда ждать первых результатов?",
          answer:
            "Мышечное расслабление наступает в первый же вечер, а устойчивое улучшение качества сна закрепляется за 1–2 недели.",
        },
      ],
      ctaHeadline: "Верните себе глубокий, спокойный сон.",
      ctaBody:
        "Узнайте больше о вечерних программах sanza. Запишитесь на консультацию или задайте вопрос нашим специалистам.",
      ctaPrimary: "Забронировать консультацию",
      ctaSecondary: "Задать вопрос",
    },
  },

  "stress-reset": {
    en: {
      slug: "stress-reset",
      metaTitle: "Daily Stress & Screen Reset at Home | sanza PEMF System",
      metaDescription:
        "Decompress from long desk hours, cognitive burnout, and sympathetic nervous tension at home with the 12-minute sanza daily reset system.",
      eyebrow: "Nervous System Decompression",
      headline: "Decompress from the screen. A 12-minute nervous system reset at home.",
      subheadline:
        "Back-to-back video calls, continuous multitasking, and desk-bound posture lock the body in shallow breathing and high sympathetic tone. sanza provides a structured 12-minute tactile pause that clears mental fatigue and restores postural ease.",
      heroNote: "A compact 12-minute decompression pause between workday and home life.",
      heroImage: IMAGE_PATHS.home.ritualDailyReset,
      problemEyebrow: "The cognitive overload trap",
      problemTitle: "You step away from the desk, but your body is still carrying the office.",
      problemBody: [
        "Modern knowledge work places unprecedented strain on the autonomic nervous system. Sitting fixed in front of bright monitors for 8 to 10 hours causes forward head posture, shallow thoracic breathing, and persistent muscular bracing.",
        "When the workday ends, that tension does not vanish. You walk into your living room irritable, mentally drained, and unable to genuinely connect with family or enjoy your evening.",
        "Scrolling through social media or watching television provides passive distraction, but it keeps sensory inputs firing. Your nervous system needs a deliberate, tactile reset — a quiet space where sensory input is lowered and cellular regulation is restored.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksIntro ?? "/images/homeuse-how-block-what-sanza-is.jpg",
      solutionEyebrow: "The reset mechanism",
      solutionTitle: "Harmonizing Alpha frequencies and full-spine decompression.",
      solutionBody: [
        "sanza creates an unmistakable boundary between work and rest. The 12-minute Daily Reset program utilizes alpha brainwave entrainment (7.83 Hz – 14 Hz) and Schumann resonance harmonics to encourage cognitive calm.",
        "Lying on the mat allows the spinal column to unload completely from sitting compression. Meanwhile, biofrequency hand electrodes deliver gentle microcurrent signals that ground sensory overload and restore mental clarity.",
        "Within 12 minutes, the nervous system down-regulates from sympathetic 'fight or flight' into parasympathetic equilibrium. You step off the mat feeling physically lighter and mentally present.",
      ],
      solutionSpecs: [
        {
          title: "Alpha Band & Schumann Resonance",
          body: "Frequency sweep (7.83–14 Hz) that recalibrates mental focus and cognitive clarity.",
        },
        {
          title: "Full Spinal Unloading",
          body: "Relieves compressive lumbar and cervical tension accumulated from hours in office chairs.",
        },
        {
          title: "Microcurrent Sensory Reset",
          body: "Handheld biofrequency electrodes ground sensory overload and dissipate screen fatigue.",
        },
      ],
      ritualTitle: "The workday close-out ritual",
      ritualEyebrow: "Transition protocol",
      ritualSteps: [
        {
          step: "01",
          title: "Step Away From Screens",
          duration: "1 min",
          body: "Shut down your computer, place your phone on silent, and loosen any restrictive clothing.",
        },
        {
          step: "02",
          title: "Tactile Decompression",
          duration: "12 min",
          body: "Lie down on the sanza mat, grasp the hand electrodes, and initiate Program 01 (Reset). Breathe deeply.",
        },
        {
          step: "03",
          title: "Return to Your Evening",
          duration: "1 min",
          body: "Step off the mat grounded, clear-headed, and ready to enjoy your private evening without work baggage.",
        },
      ],
      outcomesTitle: "What changes when you reset daily",
      outcomesEyebrow: "Daily equilibrium",
      bodyBenefits: [
        "Unclenches chronic jaw clenching, neck tightness, and rounded shoulders",
        "Deepens diaphragmatic breath volume and lowers resting heart rate",
        "Reverses the postural fatigue of extended seated screen time",
      ],
      mindBenefits: [
        "Establishes a firm psychological boundary between work and home life",
        "Reduces irritable reactivity and cognitive brain fog after demanding days",
        "Enhances presence and emotional connection with loved ones in the evening",
      ],
      trustEyebrow: "Quality & Heritage",
      trustTitle: "Built in Salzburg, trusted across Europe",
      trustBody:
        "For more than two decades, sanza International GmbH has engineered wellness systems that balance high clinical rigor with home simplicity. Designed and manufactured under strict Austrian quality control.",
      faqs: [
        {
          question: "Can I do this during a lunch break while working from home?",
          answer:
            "Yes! The 12-minute reset is ideal for midday breaks. It clears mental fog and restores focus without causing drowsiness.",
        },
        {
          question: "How does this help desk-bound posture?",
          answer:
            "Lying supine on the mat unloads spinal discs, while the electromagnetic field encourages blood flow and relaxation in tight paraspinal and pectoral muscles.",
        },
        {
          question: "What does the microcurrent through the hand electrodes feel like?",
          answer:
            "It is extremely gentle. Most people feel either a subtle pleasant tingling or simply a soothing sensation of warmth and release in their hands and arms.",
        },
        {
          question: "Can I use the laser applicator for neck tension?",
          answer:
            "Yes. The targeted light applicator can be applied directly to the nape of the neck or trapezius muscles during the session for focal relief.",
        },
      ],
      ctaHeadline: "Leave the workday behind in 12 minutes.",
      ctaBody:
        "Experience the difference a daily reset makes in your energy and presence. Book an introduction or contact our team.",
      ctaPrimary: "Book a personal introduction",
      ctaSecondary: "Ask a question",
    },
    de: {
      slug: "stress-reset",
      metaTitle: "Täglicher Stress- & Bildschirm-Reset für zu Hause | sanza PEMF",
      metaDescription:
        "Bauen Sie Schreibtischverspannungen, mentale Überreizung und Stress ab – mit dem 12-minütigen sanza-Reset-System für Ihr Zuhause.",
      eyebrow: "Vegetative Dekompression",
      headline: "Raus aus dem Bildschirmstress. Ein 12-minütiger Reset für Ihr Nervensystem.",
      subheadline:
        "Videokonferenzen am laufenden Band, Multitasking und starres Sitzen halten den Körper in flacher Atmung und Daueranspannung. sanza bietet eine 12-minütige, haptische Pause, die geistige Müdigkeit auflöst und körperliche Leichtigkeit zurückbringt.",
      heroNote: "Eine kompakte 12-Minuten-Pause zwischen Arbeitstag und Feierabend.",
      heroImage: IMAGE_PATHS.home.ritualDailyReset,
      problemEyebrow: "Die Überlastungsfalle",
      problemTitle: "Sie verlassen den Schreibtisch – doch Ihr Körper trägt die Hektik weiter.",
      problemBody: [
        "Moderne Bildschirmarbeit fordert das autonome Nervensystem enorm. Stundenlanges starres Blicken auf Monitore führt zu vorgebeugter Haltung, flacher Atmung und permanenter Anspannung im Nacken.",
        "Wenn der Arbeitstag vorbei ist, verpufft dieser Stress nicht von allein. Man betritt das Wohnzimmer gereizt, innerlich unruhig und unfähig, den Feierabend mit der Familie wirklich zu genießen.",
        "Social-Media-Konsum oder Fernsehen lenken zwar ab, halten das Gehirn aber weiter unter Reizen. Ihr Nervensystem braucht eine bewusste Entlastung – einen Ort, an dem äußere Reize sinken und zelluläre Ruhe einzieht.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksIntro ?? "/images/homeuse-how-block-what-sanza-is.jpg",
      solutionEyebrow: "Der Reset-Mechanismus",
      solutionTitle: "Alpha-Wellen-Frequenzen und Entlastung der Wirbelsäule.",
      solutionBody: [
        "sanza zieht eine klare Grenze zwischen Arbeitsdruck und Erholung. Das 12-minütige Reset-Programm nutzt harmonische Alpha-Frequenzen (7,83 Hz – 14 Hz) und Schumann-Resonanzen zur Förderung geistiger Ruhe.",
        "Das Liegen auf der Matte entlastet die Bandscheiben sofort vom Druck des langen Sitzens. Gleichzeitig leiten die Biofrequenz-Handelektroden sensorische Überreizung sanft ab.",
        "Binnen 12 Minuten schaltet das Nervensystem vom Flucht- und Kampfmodus in gelassene Ausgeglichenheit um. Sie stehen auf und sind wieder ganz bei sich.",
      ],
      solutionSpecs: [
        {
          title: "Alpha-Band & Schumann-Resonanz",
          body: "Frequenzmuster (7,83–14 Hz), die geistige Klarheit und Konzentration wiederherstellen.",
        },
        {
          title: "Entlastung der Wirbelsäule",
          body: "Befreit Lenden- und Nackenbereich vom stundenlangen Kompressionsdruck des Bürostuhls.",
        },
        {
          title: "Mikrostrom-Sensorik-Reset",
          body: "Handelektroden harmonisieren Reizüberflutung und bauen Bildschirmmüdigkeit ab.",
        },
      ],
      ritualTitle: "Das Feierabend-Ritual",
      ritualEyebrow: "Übergangsprotokoll",
      ritualSteps: [
        {
          step: "01",
          title: "Bildschirme aus",
          duration: "1 Min.",
          body: "Laptop zuklappen, Smartphone stummschalten und bequeme Kleidung anziehen.",
        },
        {
          step: "02",
          title: "Haptische Dekompression",
          duration: "12 Min.",
          body: "Auf die sanza-Matte legen, Handelektroden greifen und Programm 01 (Reset) starten. Tief durchatmen.",
        },
        {
          step: "03",
          title: "Frei in den Feierabend",
          duration: "1 Min.",
          body: "Geerdet und mit freiem Kopf aufstehen – bereit für einen entspannten Abend ohne Arbeitsballast.",
        },
      ],
      outcomesTitle: "Was sich ändert, wenn Sie täglich resetten",
      outcomesEyebrow: "Tägliches Gleichgewicht",
      bodyBenefits: [
        "Löst chronisches Zähnebeißen, Nackenstarre und verspannte Schultern",
        "Vertieft das Atemvolumen und senkt den erhöhten Ruhepuls",
        "Gleicht die typische gebeugte Haltung langer Bürozeiten aus",
      ],
      mindBenefits: [
        "Schafft eine verlässliche mentale Grenze zwischen Job und Privatleben",
        "Reduziert Gereiztheit und geistigen Nebel nach anstrengenden Tagen",
        "Ermöglicht echte Präsenz und emotionale Nähe im Kreis der Familie",
      ],
      trustEyebrow: "Qualität & Tradition",
      trustTitle: "In Salzburg entwickelt, in ganz Europa geschätzt",
      trustBody:
        "Seit über zwei Jahrzehnten entwickelt die sanza International GmbH Wellness-Systeme, die klinischen Anspruch mit einfacher Heimanwendung vereinen. Gefertigt unter strengen österreichischen Qualitätsstandards.",
      faqs: [
        {
          question: "Kann ich das in der Mittagspause im Homeoffice nutzen?",
          answer:
            "Ja! Der 12-minütige Reset eignet sich perfekt für eine Zwischenpause, um geistig frisch und konzentriert zu bleiben, ohne müde zu machen.",
        },
        {
          question: "Wie hilft das bei Schreibtischhaltung?",
          answer:
            "Die Rückenlage auf der Matte entlastet die Wirbelsäule, während die elektromagnetischen Signale die Durchblutung verkrampfter Rückenmuskeln anregen.",
        },
        {
          question: "Wie fühlt sich der Mikrostrom an den Handelektroden an?",
          answer:
            "Sehr sanft und angenehm. Man spürt meist ein feines Kribbeln oder ein wohltuendes Gefühl der Erleichterung in Händen und Unterarmen.",
        },
        {
          question: "Kann ich den Laser für Nackenverspannungen nutzen?",
          answer:
            "Ja, der Licht-Applikator kann während der Sitzung direkt auf verspannte Nacken- oder Trapezmuskeln aufgelegt werden.",
        },
      ],
      ctaHeadline: "Lassen Sie den Arbeitstag in 12 Minuten hinter sich.",
      ctaBody:
        "Erleben Sie den Unterschied, den ein täglicher Reset für Ihre Energie macht. Buchen Sie eine Einführung oder kontaktieren Sie uns.",
      ctaPrimary: "Persönliche Einführung buchen",
      ctaSecondary: "Eine Frage stellen",
    },
    lv: {
      slug: "stress-reset",
      metaTitle: "Ikdienas stresa un datora atslodze mājās | sanza PEMF",
      metaDescription:
        "Atbrīvojieties no biroja spriedzes, mentālā noguruma un kakla savilkumiem ar 12 minūšu sanza ikdienas atslodzes sistēmu mājās.",
      eyebrow: "Veģetatīvā atslodze",
      headline: "Atslēdzieties no ekrāniem. 12 minūšu nervu sistēmas atiestatīšana mājās.",
      subheadline:
        "Nepārtraukti zvani, ekrāna gaisma un sēdošs darbs uztur ķermeni pastāvīgā spriedzē. sanza nodrošina strukturētu 12 minūšu pauzi, kas kliedē mentālo nogurumu un atgriež ķermeņa vieglumu.",
      heroNote: "12 minūšu atslodzes pauze starp darba dienu un mierīgu vakaru.",
      heroImage: IMAGE_PATHS.home.ritualDailyReset,
      problemEyebrow: "Pārslodzes lamatas",
      problemTitle: "Jūs pieceļaties no galda, bet darba spriedze paliek ķermenī.",
      problemBody: [
        "Mūsdienu darbs pie datora rada lielu slodzi veģetatīvajai nervu sistēmai. Ilgstoša sēdēšana pie ekrāna rada savilktus plecus, seklu elpu un pastāvīgu muskuļu sasprindzinājumu.",
        "Darba dienai beidzoties, šis stress nepāriet pats no sevis. Cilvēks pārnāk mājās aizkaitināts un nespēj patiesi atpūsties kopā ar ģimeni.",
        "Viedtālruņa šķirstīšana vai televizors tikai turpina kairināt maņas. Nervu sistēmai ir vajadzīga apzināta atslodze — klusa vieta, kur kairinājumi norimst.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksIntro ?? "/images/homeuse-how-block-what-sanza-is.jpg",
      solutionEyebrow: "Atiestatīšanas mehānisms",
      solutionTitle: "Alfa viļņu frekvences un mugurkaula atslogošana.",
      solutionBody: [
        "sanza novelk skaidru robežu starp darba stresu un atpūtu. 12 minūšu programma izmanto harmoniskus alfa viļņus (7,83 Hz – 14 Hz) un Šūmaņa rezonansi prāta nomierināšanai.",
        "Apguļoties uz paklāja, mugurkauls acumirklī atbrīvojas no sēdēšanas spiediena. Vienlaikus rokas elektrodi palīdz kliedēt maņu pārslodzi.",
        "12 minūšu laikā nervu sistēma pārslēdzas miera režīmā. Jūs pieceļaties ar viegluma un skaidrības sajūtu.",
      ],
      solutionSpecs: [
        {
          title: "Alfa ritmi un Šūmaņa rezonanse",
          body: "Frekvences (7,83–14 Hz), kas atjauno prāta skaidrību un iekšējo līdzsvaru.",
        },
        {
          title: "Pilnīga mugurkaula atslogošana",
          body: "Atbrīvo jostas un kakla daļu no biroja krēsla radītā spiediena.",
        },
        {
          title: "Mikrostrāvas maņu atslodze",
          body: "Rokas elektrodi mazina datora radīto sensoru nogurumu.",
        },
      ],
      ritualTitle: "Darba dienas noslēguma rituāls",
      ritualEyebrow: "Pārejas protokols",
      ritualSteps: [
        {
          step: "01",
          title: "Ekrānu izslēgšana",
          duration: "1 min",
          body: "Aizveriet datoru, iestatiet tālruni klusuma režīmā un uzvelciet ērtu apģērbu.",
        },
        {
          step: "02",
          title: "Seansa atslodze",
          duration: "12 min",
          body: "Apgulieties uz sanza paklāja, paņemiet rokas elektrodus un ieslēdziet programmu 01 (Reset). Elpojiet dziļi.",
        },
        {
          step: "03",
          title: "Mierīgs vakars",
          duration: "1 min",
          body: "Piecelieties ar skaidru galvu — gatavs baudīt vakaru bez darba rūpēm.",
        },
      ],
      outcomesTitle: "Kas mainās, ik dienu atjaunojot līdzsvaru",
      outcomesEyebrow: "Ikdienas harmonija",
      bodyBenefits: [
        "Atslābina savilkto žokli, kakla muskuļus un plecus",
        "Padziļina elpošanu un nomierina paātrināto pulsu",
        "Kompensē ilgstošas sēdēšanas radīto stājas nogurumu",
      ],
      mindBenefits: [
        "Izveido skaidru robežu starp darba pienākumiem un privāto dzīvi",
        "Mazina aizkaitināmību un nogurumu pēc garām darba stundām",
        "Sniedz patiesu klātbūtnes sajūtu ģimenes lokā",
      ],
      trustEyebrow: "Kvalitāte un tradīcijas",
      trustTitle: "Radīts Zalcburgā, novērtēts visā Eiropā",
      trustBody:
        "Jau vairāk nekā divdesmit gadus sanza International GmbH izstrādā sistēmas, kas apvieno augstus standartus ar ērtu lietošanu mājās.",
      faqs: [
        {
          question: "Vai to var izmantot pusdienu pārtraukumā attālinātā darbā?",
          answer:
            "Jā! 12 minūšu seanss ir ideāls dienas vidū, lai atjaunotu fokusu un enerģiju bez miegainības.",
        },
        {
          question: "Kā tas palīdz sēdoša darba stājai?",
          answer:
            "Guļus poza uz paklāja atslogo mugurkaulu, kamēr frekvences uzlabo asinsriti savilktajos muguras muskuļos.",
        },
        {
          question: "Kādas ir sajūtas ar rokas elektrodiem?",
          answer:
            "Ļoti maigas un patīkamas. Jūtams neliels siltums vai viegla atvieglojuma sajūta plaukstās un rokās.",
        },
        {
          question: "Vai var izmantot lāzeru kakla savilkumiem?",
          answer:
            "Jā, gaismas aplikatoru var novietot tieši uz savilktās kakla vai plecu zonas seansa laikā.",
        },
      ],
      ctaHeadline: "Atstājiet darba dienas steigu aiz muguras 12 minūtēs.",
      ctaBody:
        "Sajūtiet, kā ikdienas resets uzlabo jūsu vakara mieru un enerģiju. Piesakieties ievada zvanam vai sazinieties ar mums.",
      ctaPrimary: "Pieteikt personīgu ievadu",
      ctaSecondary: "Uzdot jautājumu",
    },
    ru: {
      slug: "stress-reset",
      metaTitle: "Снятие стресса и экранной перегрузки дома | sanza PEMF",
      metaDescription:
        "Снимите офисный зажим, ментальную усталость от монитора и вегетативный стресс дома за 12 минут с системой перезагрузки sanza.",
      eyebrow: "Вегетативная декомпрессия",
      headline: "Выйти из экранного стресса. 12-минутная перезагрузка нервной системы дома.",
      subheadline:
        "Череда звонков, многозадачность и сидячая поза держат организм в режиме тревоги и поверхностного дыхания. sanza предлагает структурированную 12-минутную паузу, снимающую ментальную усталость и возвращающую телу покой.",
      heroNote: "12-минутная декомпрессия между рабочим днем и домашним уютом.",
      heroImage: IMAGE_PATHS.home.ritualDailyReset,
      problemEyebrow: "Ловушка перегрузки",
      problemTitle: "Вы отходите от компьютера, но тело продолжает нести рабочий стресс.",
      problemBody: [
        "Интеллектуальный труд создает колоссальную нагрузку на вегетативную нервную систему. 8–10 часов неподвижного сидения перед монитором ведут к спазму шеи и поверхностному дыханию.",
        "После работы это напряжение не растворяется само по себе. Человек возвращается к семье взвинченным, истощенным и неспособным спокойно отдохнуть.",
        "Лента соцсетей или просмотр сериала лишь продолжают бомбардировать мозг стимулами. Нервной системе требуется осознанная, тихая пауза без внешних раздражителей.",
      ],
      problemImage: IMAGE_PATHS.home.howItWorksIntro ?? "/images/homeuse-how-block-what-sanza-is.jpg",
      solutionEyebrow: "Механизм перезагрузки",
      solutionTitle: "Альфа-ритмы и декомпрессия позвоночника.",
      solutionBody: [
        "sanza создает четкую черту между работой и отдыхом. 12-минутная программа использует альфа-волны (7,83 Гц – 14 Гц) и резонанс Шумана для снятия ментального шума.",
        "Нахождение на мате снимает компрессию с межпозвонковых дисков после сидения в кресле. Ручные электроды бережно заземляют сенсорное перевозбуждение.",
        "За 12 минут нервная система переходит из состояния тревоги в состояние спокойной ясности. Вы встаете с мата полным сил для теплого семейного вечера.",
      ],
      solutionSpecs: [
        {
          title: "Альфа-ритмы и резонанс Шумана",
          body: "Частоты (7,83–14 Гц), восстанавливающие ясность ума и эмоциональное равновесие.",
        },
        {
          title: "Разгрузка позвоночника",
          body: "Освобождает поясницу и шейный отдел от компрессии после долгого сидения в кресле.",
        },
        {
          title: "Микротоковый сенсорный сброс",
          body: "Электроды в ладонях снимают усталость от экранов и восстанавливают баланс.",
        },
      ],
      ritualTitle: "Ритуал завершения рабочего дня",
      ritualEyebrow: "Протокол перехода",
      ritualSteps: [
        {
          step: "01",
          title: "Выключить монитор",
          duration: "1 мин",
          body: "Закрыть рабочий ноутбук, перевести телефон в тихий режим и переодеться в домашнее.",
        },
        {
          step: "02",
          title: "Сеанс перезагрузки",
          duration: "12 мин",
          body: "Лечь на мат sanza, взять ручные электроды и включить программу 01 (Reset). Сделать глубокий вдох.",
        },
        {
          step: "03",
          title: "Возвращение домой",
          duration: "1 мин",
          body: "Встать со свежей головой и легкостью в теле, готовым наслаждаться вечером без мыслей о работе.",
        },
      ],
      outcomesTitle: "Что дает ежедневная перезагрузка",
      outcomesEyebrow: "Ежедневный баланс",
      bodyBenefits: [
        "Снимает привычный спазм челюсти, зажим трапеций и шеи",
        "Углубляет дыхание и нормализует учащенный пульс",
        "Компенсирует вред многочасового сидения за рабочим столом",
      ],
      mindBenefits: [
        "Создает устойчивую границу между дедлайнами и личной жизнью",
        "Убирает раздражительность и ментальный туман после трудного дня",
        "Возвращает искреннее внимание и теплоту в общение с близкими",
      ],
      trustEyebrow: "Традиции и качество",
      trustTitle: "Сделано в Зальцбурге, признано в Европе",
      trustBody:
        "Более двух десятилетий компания sanza International GmbH создает системы, сочетающие строгие стандарты с домашним удобством.",
      faqs: [
        {
          question: "Можно ли использовать это в обеденный перерыв на удаленке?",
          answer:
            "Да! 12 минут идеально подходят для перерыва среди дня, чтобы вернуть ясность мысли без чувства сонливости.",
        },
        {
          question: "Как это помогает осанке после сидения?",
          answer:
            "Положение лежа на мате распрямляет позвоночник, а частоты усиливают кровообращение в уставших мышцах спины.",
        },
        {
          question: "Что ощущается от ручных электродов?",
          answer:
            "Очень мягкие ощущения: приятное легкое покалывание или разливающееся тепло в ладонях и руках.",
        },
        {
          question: "Можно ли применить лазер к шее?",
          answer:
            "Да, световой аппликатор можно расположить на воротниковую зону прямо во время сеанса на мате.",
        },
      ],
      ctaHeadline: "Оставьте рабочий день позади за 12 минут.",
      ctaBody:
        "Ощутите разницу в самочувствии уже сегодня. Запишитесь на консультацию или задайте вопрос нашим специалистам.",
      ctaPrimary: "Забронировать консультацию",
      ctaSecondary: "Задать вопрос",
    },
  },
};

export function getHomeSeoPageContent(slug: HomeSeoPageSlug, locale: string): HomeSeoPageContent {
  const activeLocale: "en" | "de" | "lv" | "ru" =
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en";
  return HOME_SEO_PAGES[slug][activeLocale];
}
