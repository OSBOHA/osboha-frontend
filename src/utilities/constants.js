//constants for the application

export const ARABIC_ROLES = {
  ambassador: "سفير",
  leader: "قائد",
  supervisor: "مراقب",
  advisor: "موجه",
  consultant: "مستشار",
  admin: "ادارة",
  book_quality_team: "جودة الكتب",
  support_leader: "قائد دعم",
  eligible_admin: "مسؤول توثيق الكتب",
  reviewer: "مراجع توثيق",
  auditor: "مُقيم توثيق",
  super_auditer: "مسؤول تقييم التوثيقات",
  super_reviewer: "مسؤول مراجعة التوثيقات",
  user_accept: "مسؤول الوثائق",
  marathon_coordinator: "مسؤول عام في مارثون أصبوحة",
  marathon_verification_supervisor: "مسؤول تدقيق مارثون أصبوحة",
  marathon_supervisor: "مسؤول في مارثون أصبوحة",
  marathon_ambassador: "سفير مشارك في مارثون أصبوحة",
};

export const LANUAGES = {
  arabic: "اللغة العربية",
  english: "اللغة الانجليزية",
};

export const BOOK_TYPES = {
  normal: "منهج",
  ramadan: "رمضان",
  young: "يافعين",
  kids: "أطفال",
  tafseer: "تفسير",
  free: "كتاب حر",
};
export const EXCEPTION_TYPES = {
  exceptional_freez: "تجميد استثنائي",
  freez: "تجميد",
  exams_monthly: "نظام امتحانات - شهري",
  exams_seasonal: "نظام امتحانات - فصلي",
  withdrawn: "انسحاب مؤقت",
};

export const GROUP_TYPE = {
  followup: "فريق متابعة",
  supervising: "فريق رقابة",
  advising: "فريق توجيه",
  consultation: "فريق الاستشارة",
  Administration: "الإدارة العليا",
  marathon: "مارثون",
};

export const DAYS = {
  Sunday: "الأحد",
  Monday: "الاثنين",
  Tuesday: "الثلاثاء",
  Wednesday: "الاربعاء",
  Thursday: "الخميس",
  Friday: "الجمعة",
  Saturday: "السبت",
};

export const MONTHS = {
  January: "يناير",
  February: "فبراير",
  March: "مارس",
  April: "ابريل",
  May: "مايو",
  June: "يونيو",
  July: "يوليو",
  August: "أغسطس",
  September: "سبتمبر",
  October: "أكتوبر",
  November: "نوفمبر",
  December: "ديسمبر",
};

export const MONTHS_NUMBERS = {
  "01": "يناير",
  "02": "فبراير",
  "03": "مارس",
  "04": "ابريل",
  "05": "مايو",
  "06": "يونيو",
  "07": "يوليو",
  "08": "أغسطس",
  "09": "سبتمبر",
  10: "أكتوبر",
  11: "نوفمبر",
  12: "ديسمبر",
};

export const SUPPORT_LEADER_ROLE_ID = 8;

export const COUNTRIES = {
  SA: "المملكة العربية السعودية",
  ET: "إثيوبيا",
  AZ: "أذربيجان",
  AM: "أرمينيا",
  AW: "أروبا",
  ER: "إريتريا",
  ES: "أسبانيا",
  AU: "أستراليا",
  EE: "إستونيا",
  AF: "أفغانستان",
  IO: "إقليم المحيط الهندي البريطاني",
  EC: "إكوادور",
  AR: "الأرجنتين",
  JO: "الأردن",
  AE: "الإمارات العربية المتحدة",
  AL: "ألبانيا",
  BR: "البرازيل",
  PT: "البرتغال",
  BA: "البوسنة والهرسك",
  GA: "الجابون",
  DZ: "الجزائر",
  DK: "الدانمارك",
  CV: "الرأس الأخضر",
  PS: "فلسطين",
  SV: "السلفادور",
  SN: "السنغال",
  SD: "السودان",
  SE: "السويد",
  SO: "الصومال",
  CN: "الصين",
  IQ: "العراق",
  PH: "الفلبين",
  CM: "الكاميرون",
  CG: "الكونغو",
  CD: "الكونغو (جمهورية الكونغو الديمقراطية)",
  KW: "الكويت",
  DE: "ألمانيا",
  HU: "المجر",
  MA: "المغرب",
  MX: "المكسيك",
  UK: "المملكة المتحدة",
  TF: "المناطق الفرنسية الجنوبية ومناطق انتراكتيكا",
  NO: "النرويج",
  AT: "النمسا",
  NE: "النيجر",
  IN: "الهند",
  ye: "اليمن",
  US: "الولايات المتحدة",
  JP: "اليابان",
  GR: "اليونان",
  AQ: "أنتاركتيكا",
  AG: "أنتيغوا وبربودا",
  AD: "أندورا",
  ID: "إندونيسيا",
  AO: "أنغولا",
  AI: "أنغويلا",
  UY: "أوروجواي",
  UZ: "أوزبكستان",
  UG: "أوغندا",
  UA: "أوكرانيا",
  IR: "إيران",
  IE: "أيرلندا",
  IS: "أيسلندا",
  IT: "إيطاليا",
  PG: "بابوا-غينيا الجديدة",
  PY: "باراجواي",
  BB: "باربادوس",
  PK: "باكستان",
  PW: "بالاو",
  BM: "برمودا",
  BN: "بروناي",
  BE: "بلجيكا",
  BG: "بلغاريا",
  BD: "بنجلاديش",
  PA: "بنما",
  BJ: "بنين",
  BT: "بوتان",
  BW: "بوتسوانا",
  PR: "بورتو ريكو",
  BF: "بوركينا فاسو",
  BI: "بوروندي",
  PL: "بولندا",
  BO: "بوليفيا",
  PF: "بولينزيا الفرنسية",
  PE: "بيرو",
  BY: "بيلاروس",
  BZ: "بيليز",
  TH: "تايلاند",
  TW: "تايوان",
  TM: "تركمانستان",
  TR: "تركيا",
  TT: "ترينيداد وتوباجو",
  TD: "تشاد",
  CL: "تشيلي",
  TZ: "تنزانيا",
  TG: "توجو",
  TV: "توفالو",
  TK: "توكيلاو",
  TO: "تونجا",
  TN: "تونس",
  TP: "تيمور الشرقية (تيمور الشرقية)",
  JM: "جامايكا",
  GM: "جامبيا",
  GI: "جبل طارق",
  GL: "جرينلاند",
  AN: "جزر الأنتيل الهولندية",
  PN: "جزر البتكارين",
  BS: "جزر البهاما",
  VG: "جزر العذراء البريطانية",
  VI: "جزر العذراء، الولايات المتحدة",
  KM: "جزر القمر",
  CC: "جزر الكوكوس (كيلين)",
  MV: "جزر المالديف",
  TC: "جزر تركس وكايكوس",
  AS: "جزر ساموا الأمريكية",
  SB: "جزر سولومون",
  FO: "جزر فايرو",
  UM: "جزر فرعية تابعة للولايات المتحدة",
  FK: "جزر فوكلاند (أيزلاس مالفيناس)",
  FJ: "جزر فيجي",
  KY: "جزر كايمان",
  CK: "جزر كوك",
  MH: "جزر مارشال",
  MP: "جزر ماريانا الشمالية",
  CX: "جزيرة الكريسماس",
  BV: "جزيرة بوفيه",
  IM: "جزيرة مان",
  NF: "جزيرة نورفوك",
  HM: "جزيرة هيرد وجزر ماكدونالد",
  CF: "جمهورية أفريقيا الوسطى",
  CZ: "جمهورية التشيك",
  DO: "جمهورية الدومينيكان",
  ZA: "جنوب أفريقيا",
  GT: "جواتيمالا",
  GP: "جواديلوب",
  GU: "جوام",
  GE: "جورجيا",
  GS: "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
  GY: "جيانا",
  GF: "جيانا الفرنسية",
  DJ: "جيبوتي",
  JE: "جيرسي",
  GG: "جيرنزي",
  VA: "دولة الفاتيكان",
  DM: "دومينيكا",
  RW: "رواندا",
  RU: "روسيا",
  RO: "رومانيا",
  RE: "ريونيون",
  ZM: "زامبيا",
  ZW: "زيمبابوي",
  WS: "ساموا",
  SM: "سان مارينو",
  PM: "سانت بيير وميكولون",
  VC: "سانت فينسنت وجرينادينز",
  KN: "سانت كيتس ونيفيس",
  LC: "سانت لوشيا",
  SH: "سانت هيلينا",
  ST: "ساوتوماي وبرينسيبا",
  SJ: "سفالبارد وجان ماين",
  SK: "سلوفاكيا",
  SI: "سلوفينيا",
  SG: "سنغافورة",
  SZ: "سوازيلاند",
  SY: "سوريا",
  SR: "سورينام",
  CH: "سويسرا",
  SL: "سيراليون",
  LK: "سيريلانكا",
  SC: "سيشل",
  RS: "صربيا",
  TJ: "طاجيكستان",
  OM: "عمان",
  GH: "غانا",
  GD: "غرينادا",
  GN: "غينيا",
  GQ: "غينيا الاستوائية",
  GW: "غينيا بيساو",
  VU: "فانواتو",
  FR: "فرنسا",
  VE: "فنزويلا",
  FI: "فنلندا",
  VN: "فيتنام",
  CY: "قبرص",
  QA: "قطر",
  KG: "قيرقيزستان",
  KZ: "كازاخستان",
  NC: "كاليدونيا الجديدة",
  KH: "كامبوديا",
  HR: "كرواتيا",
  CA: "كندا",
  CU: "كوبا",
  CI: "كوت ديفوار (ساحل العاج)",
  KR: "كوريا",
  KP: "كوريا الشمالية",
  CR: "كوستاريكا",
  CO: "كولومبيا",
  KI: "كيريباتي",
  KE: "كينيا",
  LV: "لاتفيا",
  LA: "لاوس",
  LB: "لبنان",
  LI: "لختنشتاين",
  LU: "لوكسمبورج",
  LY: "ليبيا",
  LR: "ليبيريا",
  LT: "ليتوانيا",
  LS: "ليسوتو",
  MQ: "مارتينيك",
  MO: "ماكاو",
  FM: "ماكرونيزيا",
  MW: "مالاوي",
  MT: "مالطا",
  ML: "مالي",
  MY: "ماليزيا",
  YT: "مايوت",
  MG: "مدغشقر",
  EG: "مصر",
  MK: "مقدونيا، جمهورية يوغوسلافيا السابقة",
  BH: "مملكة البحرين",
  MN: "منغوليا",
  MR: "موريتانيا",
  MU: "موريشيوس",
  MZ: "موزمبيق",
  MD: "مولدوفا",
  MC: "موناكو",
  MS: "مونتسيرات",
  ME: "مونتينيغرو",
  MM: "ميانمار",
  NA: "ناميبيا",
  NR: "ناورو",
  NP: "نيبال",
  NG: "نيجيريا",
  NI: "نيكاراجوا",
  NU: "نيوا",
  NZ: "نيوزيلندا",
  HT: "هايتي",
  HN: "هندوراس",
  NL: "هولندا",
  HK: "هونغ كونغ SAR",
  WF: "واليس وفوتونا",
};

export const TERMINATION_REASONS = {
  withdrawn: "غير فعال - منسحب",
  excluded: "مستبعد",
  "emptying the group": "غير فعال - تفريغ الفريق",
  reassignment: "غير فعال - اعادة تعيين اداري",
  leader_upgrade: "غير فعال - ترقية قائد",
  supervisor_upgrade: "غير فعال - ترقية مراقب",
  transfer_ambassador: "غير فعال - نقل سفير",
  transfer_leader: "غير فعال - نقل قائد",
  supervisor_change: "غير فعال - تبديل مراقب",
  supervisor_withdrawn: "غير فعال - انسحاب مراقب",
};

export const EXCEPTION_STATUS = {
  pending: "قيد المراجعة",
  accepted: "مقبول",
  rejected: "مرفوض",
  cancelled: "ملغي",
  finished: "منتهي",
};
export const EXCEPTION_STATUS_CLASS = {
  pending: "bg-warning",
  accepted: "bg-primary",
  rejected: "bg-danger",
  cancelled: "bg-success",
  finished: "bg-danger",
};

export const POST_TYPES = {
  normal: "عام",
  book: "كتاب",
  article: "مقال",
  infographic: "انفوجرافيك",
  support: "اعرف مشروعك",
  announcement: "اعلان",
  discussion: "النقاش المنهجي",
  "friday-thesis": "اطروحة الجمعة",
};

export const ELIGIBLE_STATUS = {
  ready: "جاهز للتسليم",
  audit: "بانتظار التقييم",
  audited: "تم التقييم",
  rejected: "مرفوض",
  review: "بانتظار المراجعة",
  accept: "مقبول",
  retard:'تم الاعادة للموثق'
};
