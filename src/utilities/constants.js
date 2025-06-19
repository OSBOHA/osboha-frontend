//constants for the application

export const ARABIC_ROLES = {
  ambassador: "سفير",
  leader: "قائد",
  supervisor: "مراقب",
  advisor: "موجه",
  consultant: "مستشار",
  admin: "ادارة",
  book_quality_team: "عضو في فريق جودة الكتب",
  book_quality_team_coordinator: "مسؤول فريق جودة الكتب",
  book_quality_supervisor: "مشرف جودة الكتب",
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
  ramadan_coordinator: "مسؤول فعاليات رمضان",
  ramadan_hadith_corrector: "مُصحح  مسابقة حديث",
  ramadan_fiqh_corrector: "مًصحح مسابقة فقه",
  ramadan_tafseer_corrector: "مُصحح مسابقة تفسير",
  ramadan_vedio_corrector: "مُصحح مسابقة التثقيف بالفيديو",
  special_care_coordinator: "مسؤول عام لأفرقة الرعاية الخاصة",
  special_care_supervisor: "مراقب رعاية خاصة",
  special_care_leader: "قائد رعاية خاصة",
  coordinator_of_withdrawns_team: "مسؤول فريق المنسحبين",
  member_of_withdrawns_team: "عضو في فريق المنسحبين",
  osboha_support_coordinator: "مسؤول دعم أصبوحة",
  osboha_support_member: "دعم أصبوحة",
};

export const LANUAGES = {
  arabic: "اللغة العربية",
  english: "اللغة الانجليزية",
};
export const GENDER = {
  female: "أنثى",
  male: "ذكر",
  any: "لا فرق",
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
  advanced_followup: "فريق متابعة متقدم",
  sophisticated_followup: "فريق متابعة متطور",
  special_care: "فريق رعاية خاصة",
};

export const ROLESTYPES = {
  marathon: "مارثون أصبوحة",
  ramadan: "رمضان أصبوحة",
  specialCare: "الرعاية الخاصة",
  eligible: "توثيق الكتب",
  WithdrawnsTeam: "التواصل مع المنسحبين",
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
  SA: { "name": "المملكة العربية السعودية", "code": "966", "flag": "SA" },
  ET: { name: "إثيوبيا", code: "251", flag: "ET" },
  AZ: { name: "أذربيجان", code: "994", flag: "AZ" },
  AM: { name: "أرمينيا", code: "374", flag: "AM" },
  AW: { name: "أروبا", code: "297", flag: "AW" },
  ER: { name: "إريتريا", code: "291", flag: "ER" },
  ES: { name: "إسبانيا", code: "34", flag: "ES" },
  AU: { name: "أستراليا", code: "61", flag: "AU" },
  EE: { name: "إستونيا", code: "372", flag: "EE" },
  AF: { name: "أفغانستان", code: "93", flag: "AF" },
  IO: { name: "إقليم المحيط الهندي البريطاني", code: "246", flag: "IO" },
  EC: { name: "الإكوادور", code: "593", flag: "EC" },
  AR: { name: "الأرجنتين", code: "54", flag: "AR" },
  JO: { name: "الأردن", code: "962", flag: "JO" },
  AE: { name: "الإمارات العربية المتحدة", code: "971", flag: "AE" },
  AL: { name: "ألبانيا", code: "355", flag: "AL" },
  BR: { name: "البرازيل", code: "55", flag: "BR" },
  PT: { name: "البرتغال", code: "351", flag: "PT" },
  BA: { name: "البوسنة والهرسك", code: "387", flag: "BA" },
  GA: { name: "الجابون", code: "241", flag: "GA" },
  DZ: { name: "الجزائر", code: "213", flag: "DZ" },
  DK: { name: "الدانمارك", code: "45", flag: "DK" },
  CV: { name: "الرأس الأخضر", code: "238", flag: "CV" },
  PS: { name: "فلسطين", code: "970", flag: "PS" },
  SV: { name: "السلفادور", code: "503", flag: "SV" },
  SN: { name: "السنغال", code: "221", flag: "SN" },
  SD: { name: "السودان", code: "249", flag: "SD" },
  SE: { name: "السويد", code: "46", flag: "SE" },
  SO: { name: "الصومال", code: "252", flag: "SO" },
   CN: { name: "الصين", code: "86", flag: "CN" },
  IQ: { name: "العراق", code: "964", flag: "IQ" },
  PH: { name: "الفلبين", code: "63", flag: "PH" },
  CM: { name: "الكاميرون", code: "237", flag: "CM" },
  CG: { name: "الكونغو", code: "242", flag: "CG" },
  CD: { name: "الكونغو (جمهورية الكونغو الديمقراطية)", code: "243", flag: "CD" },
  KW: { name: "الكويت", code: "965", flag: "KW" },
  DE: { name: "ألمانيا", code: "49", flag: "DE" },
  HU: { name: "المجر", code: "36", flag: "HU" },
  MA: { name: "المغرب", code: "212", flag: "MA" },
  MX: { name: "المكسيك", code: "52", flag: "MX" },
  GB: { name: "المملكة المتحدة", code: "44", flag: "GB" },
  TF: { name: "المناطق الفرنسية الجنوبية ومناطق انتراكتيكا", code: "", flag: "TF" },
  NO: { name: "النرويج", code: "47", flag: "NO" },
  AT: { name: "النمسا", code: "43", flag: "AT" },
  NE: { name: "النيجر", code: "227", flag: "NE" },
  IN: { name: "الهند", code: "91", flag: "IN" },
  YE: { name: "اليمن", code: "967", flag: "YE" },
  US: { name: "الولايات المتحدة", code: "1", flag: "US" },
  JP: { name: "اليابان", code: "81", flag: "JP" },
  GR: { name: "اليونان", code: "30", flag: "GR" },
  AQ: { name: "أنتاركتيكا", code: "", flag: "AQ" },
  AG: { name: "أنتيغوا وبربودا", code: "1-268", flag: "AG" },
  AD: { name: "أندورا", code: "376", flag: "AD" },
  ID: { name: "إندونيسيا", code: "62", flag: "ID" },
  AO: { name: "أنغولا", code: "244", flag: "AO" },
  AI: { name: "أنغويلا", code: "1-264", flag: "AI" },
  UY: { name: "أوروجواي", code: "598", flag: "UY" },
  UZ: { name: "أوزبكستان", code: "998", flag: "UZ" },
  UG: { name: "أوغندا", code: "256", flag: "UG" },
  UA: { name: "أوكرانيا", code: "380", flag: "UA" },
  IR: { name: "إيران", code: "98", flag: "IR" },
  IE: { name: "أيرلندا", code: "353", flag: "IE" },
  IS: { name: "أيسلندا", code: "354", flag: "IS" },
  IT: { name: "إيطاليا", code: "39", flag: "IT" },
  PG: { name: "بابوا-غينيا الجديدة", code: "675", flag: "PG" },
  PY: { name: "باراجواي", code: "595", flag: "PY" },
  BB: { name: "باربادوس", code: "1-246", flag: "BB" },
  PK: { name: "باكستان", code: "92", flag: "PK" },
  PW: { name: "بالاو", code: "680", flag: "PW" },
  BM: { name: "برمودا", code: "1-441", flag: "BM" },
  BN: { name: "بروناي", code: "673", flag: "BN" },
  BE: { name: "بلجيكا", code: "32", flag: "BE" },
  BG: { name: "بلغاريا", code: "359", flag: "BG" },
  BD: { name: "بنجلاديش", code: "880", flag: "BD" },
  PA: { name: "بنما", code: "507", flag: "PA" },
  BJ: { name: "بنين", code: "229", flag: "BJ" },
  BT: { name: "بوتان", code: "975", flag: "BT" },
  BW: { name: "بوتسوانا", code: "267", flag: "BW" },
  PR: { name: "بورتو ريكو", code: "1-787", flag: "PR" },
  BF: { name: "بوركينا فاسو", code: "226", flag: "BF" },
  BI: { name: "بوروندي", code: "257", flag: "BI" },
  PL: { name: "بولندا", code: "48", flag: "PL" },
  BO: { name: "بوليفيا", code: "591", flag: "BO" },
  PF: { name: "بولينزيا الفرنسية", code: "689", flag: "PF" },
  PE: { name: "بيرو", code: "51", flag: "PE" },
  BY: { name: "بيلاروس", code: "375", flag: "BY" },
  BZ: { name: "بيليز", code: "501", flag: "BZ" },
  TH: { name: "تايلاند", code: "66", flag: "TH" },
  TW: { name: "تايوان", code: "886", flag: "TW" },
  TM: { name: "تركمانستان", code: "993", flag: "TM" },
  TR: { name: "تركيا", code: "90", flag: "TR" },
  TT: { name: "ترينيداد وتوباجو", code: "1-868", flag: "TT" },
  TD: { name: "تشاد", code: "235", flag: "TD" },
  CL: { name: "تشيلي", code: "56", flag: "CL" },
  TZ: { name: "تنزانيا", code: "255", flag: "TZ" },
  TG: { name: "توجو", code: "228", flag: "TG" },
  TV: { name: "توفالو", code: "688", flag: "TV" },
  TK: { name: "توكيلاو", code: "690", flag: "TK" },
  TO: { name: "تونجا", code: "676", flag: "TO" },
  TN: { name: "تونس", code: "216", flag: "TN" },
  TL: { name: "تيمور الشرقية", code: "670", flag: "TL" },
  JM: { name: "جامايكا", code: "1-876", flag: "JM" },
  GM: { name: "جامبيا", code: "220", flag: "GM" },
  GI: { name: "جبل طارق", code: "350", flag: "GI" },
  GL: { name: "جرينلاند", code: "299", flag: "GL" },
  AN: { name: "جزر الأنتيل الهولندية", code: "599", flag: "AN" },
   PN: { name: "جزر البتكارين", code: "64", flag: "PN" },
  BS: { name: "جزر البهاما", code: "1-242", flag: "BS" },
  VG: { name: "جزر العذراء البريطانية", code: "1-284", flag: "VG" },
  VI: { name: "جزر العذراء، الولايات المتحدة", code: "1-340", flag: "VI" },
  KM: { name: "جزر القمر", code: "269", flag: "KM" },
  CC: { name: "جزر الكوكوس (كيلين)", code: "61", flag: "CC" },
  MV: { name: "جزر المالديف", code: "960", flag: "MV" },
  TC: { name: "جزر تركس وكايكوس", code: "1-649", flag: "TC" },
  AS: { name: "جزر ساموا الأمريكية", code: "1-684", flag: "AS" },
  SB: { name: "جزر سولومون", code: "677", flag: "SB" },
  FO: { name: "جزر فايرو", code: "298", flag: "FO" },
  UM: { name: "جزر فرعية تابعة للولايات المتحدة", code: "", flag: "UM" },
  FK: { name: "جزر فوكلاند (أيزلاس مالفيناس)", code: "500", flag: "FK" },
  FJ: { name: "جزر فيجي", code: "679", flag: "FJ" },
  KY: { name: "جزر كايمان", code: "1-345", flag: "KY" },
  CK: { name: "جزر كوك", code: "682", flag: "CK" },
  MH: { name: "جزر مارشال", code: "692", flag: "MH" },
  MP: { name: "جزر ماريانا الشمالية", code: "1-670", flag: "MP" },
  CX: { name: "جزيرة الكريسماس", code: "61", flag: "CX" },
  BV: { name: "جزيرة بوفيه", code: "", flag: "BV" },
  IM: { name: "جزيرة مان", code: "44", flag: "IM" },
  NF: { name: "جزيرة نورفوك", code: "672", flag: "NF" },
  HM: { name: "جزيرة هيرد وجزر ماكدونالد", code: "", flag: "HM" },
  CF: { name: "جمهورية أفريقيا الوسطى", code: "236", flag: "CF" },
  CZ: { name: "جمهورية التشيك", code: "420", flag: "CZ" },
  DO: { name: "جمهورية الدومينيكان", code: "1-809", flag: "DO" },
  ZA: { name: "جنوب أفريقيا", code: "27", flag: "ZA" },
  GT: { name: "جواتيمالا", code: "502", flag: "GT" },
  GP: { name: "جواديلوب", code: "590", flag: "GP" },
  GU: { name: "جوام", code: "1-671", flag: "GU" },
  GE: { name: "جورجيا", code: "995", flag: "GE" },
  GS: { name: "جورجيا الجنوبية وجزر ساندويتش الجنوبية", code: "", flag: "GS" },
  GY: { name: "جيانا", code: "592", flag: "GY" },
  GF: { name: "جيانا الفرنسية", code: "594", flag: "GF" },
  DJ: { name: "جيبوتي", code: "253", flag: "DJ" },
  JE: { name: "جيرسي", code: "44", flag: "JE" },
  GG: { name: "جيرنزي", code: "44", flag: "GG" },
  VA: { name: "دولة الفاتيكان", code: "379", flag: "VA" },
  DM: { name: "دومينيكا", code: "1-767", flag: "DM" },
  RW: { name: "رواندا", code: "250", flag: "RW" },
  RU: { name: "روسيا", code: "7", flag: "RU" },
  RO: { name: "رومانيا", code: "40", flag: "RO" },
  RE: { name: "ريونيون", code: "262", flag: "RE" },
  ZM: { name: "زامبيا", code: "260", flag: "ZM" },
  ZW: { name: "زيمبابوي", code: "263", flag: "ZW" },
  WS: { name: "ساموا", code: "685", flag: "WS" },
  SM: { name: "سان مارينو", code: "378", flag: "SM" },
  PM: { name: "سانت بيير وميكولون", code: "508", flag: "PM" },
  VC: { name: "سانت فينسنت وجرينادينز", code: "1-784", flag: "VC" },
  KN: { name: "سانت كيتس ونيفيس", code: "1-869", flag: "KN" },
  LC: { name: "سانت لوشيا", code: "1-758", flag: "LC" },
  SH: { name: "سانت هيلينا", code: "290", flag: "SH" },
  ST: { name: "ساوتوماي وبرينسيبا", code: "239", flag: "ST" },
  SJ: { name: "سفالبارد وجان ماين", code: "47", flag: "SJ" },
  SK: { name: "سلوفاكيا", code: "421", flag: "SK" },
  SI: { name: "سلوفينيا", code: "386", flag: "SI" },
  SG: { name: "سنغافورة", code: "65", flag: "SG" },
  SZ: { name: "سوازيلاند", code: "268", flag: "SZ" },
  SY: { name: "سوريا", code: "963", flag: "SY" },
  SR: { name: "سورينام", code: "597", flag: "SR" },
  CH: { name: "سويسرا", code: "41", flag: "CH" },
  SL: { name: "سيراليون", code: "232", flag: "SL" },
  LK: { name: "سيريلانكا", code: "94", flag: "LK" },
  SC: { name: "سيشل", code: "248", flag: "SC" },
  RS: { name: "صربيا", code: "381", flag: "RS" },
  TJ: { name: "طاجيكستان", code: "992", flag: "TJ" },
  OM: { name: "عمان", code: "968", flag: "OM" },
  GH: { name: "غانا", code: "233", flag: "GH" },
  GD: { name: "غرينادا", code: "1-473", flag: "GD" },
  GN: { name: "غينيا", code: "224", flag: "GN" },
  GQ: { name: "غينيا الاستوائية", code: "240", flag: "GQ" },
  GW: { name: "غينيا بيساو", code: "245", flag: "GW" },
  VU: { name: "فانواتو", code: "678", flag: "VU" },
  FR: { name: "فرنسا", code: "33", flag: "FR" },
  VE: { name: "فنزويلا", code: "58", flag: "VE" },
  FI: { name: "فنلندا", code: "358", flag: "FI" },
  VN: { name: "فيتنام", code: "84", flag: "VN" },
  CY: { name: "قبرص", code: "357", flag: "CY" },
  QA: { name: "قطر", code: "974", flag: "QA" },
  KG: { name: "قيرقيزستان", code: "996", flag: "KG" },
  KZ: { name: "كازاخستان", code: "7", flag: "KZ" },
  NC: { name: "كاليدونيا الجديدة", code: "687", flag: "NC" },
  KH: { name: "كامبوديا", code: "855", flag: "KH" },
  HR: { name: "كرواتيا", code: "385", flag: "HR" },
  CA: { name: "كندا", code: "1", flag: "CA" },
  CU: { name: "كوبا", code: "53", flag: "CU" },
  CI: { name: "كوت ديفوار (ساحل العاج)", code: "225", flag: "CI" },
  KR: { name: "كوريا", code: "82", flag: "KR" },
  KP: { name: "كوريا الشمالية", code: "850", flag: "KP" },
  CR: { name: "كوستاريكا", code: "506", flag: "CR" },
  CO: { name: "كولومبيا", code: "57", flag: "CO" },
  KI: { name: "كيريباتي", code: "686", flag: "KI" },
  KE: { name: "كينيا", code: "254", flag: "KE" },
  LV: { name: "لاتفيا", code: "371", flag: "LV" },
  LA: { name: "لاوس", code: "856", flag: "LA" },
  LB: { name: "لبنان", code: "961", flag: "LB" },
  LI: { name: "لختنشتاين", code: "423", flag: "LI" },
  LU: { name: "لوكسمبورج", code: "352", flag: "LU" },
  LY: { name: "ليبيا", code: "218", flag: "LY" },
  LR: { name: "ليبيريا", code: "231", flag: "LR" },
    LT: { name: "ليتوانيا", code: "370", flag: "LT" },
  LS: { name: "ليسوتو", code: "266", flag: "LS" },
  MQ: { name: "مارتينيك", code: "596", flag: "MQ" },
  MO: { name: "ماكاو", code: "853", flag: "MO" },
  FM: { name: "ماكرونيزيا", code: "691", flag: "FM" },
  MW: { name: "مالاوي", code: "265", flag: "MW" },
  MT: { name: "مالطا", code: "356", flag: "MT" },
  ML: { name: "مالي", code: "223", flag: "ML" },
  MY: { name: "ماليزيا", code: "60", flag: "MY" },
  YT: { name: "مايوت", code: "262", flag: "YT" },
  MG: { name: "مدغشقر", code: "261", flag: "MG" },
  EG: { name: "مصر", code: "20", flag: "EG" },
  MK: { name: "مقدونيا، جمهورية يوغوسلافيا السابقة", code: "389", flag: "MK" },
  BH: { name: "مملكة البحرين", code: "973", flag: "BH" },
  MN: { name: "منغوليا", code: "976", flag: "MN" },
  MR: { name: "موريتانيا", code: "222", flag: "MR" },
  MU: { name: "موريشيوس", code: "230", flag: "MU" },
  MZ: { name: "موزمبيق", code: "258", flag: "MZ" },
  MD: { name: "مولدوفا", code: "373", flag: "MD" },
  MC: { name: "موناكو", code: "377", flag: "MC" },
  MS: { name: "مونتسيرات", code: "1-664", flag: "MS" },
  ME: { name: "مونتينيغرو", code: "382", flag: "ME" },
  MM: { name: "ميانمار", code: "95", flag: "MM" },
  NA: { name: "ناميبيا", code: "264", flag: "NA" },
  NR: { name: "ناورو", code: "674", flag: "NR" },
  NP: { name: "نيبال", code: "977", flag: "NP" },
  NG: { name: "نيجيريا", code: "234", flag: "NG" },
  NI: { name: "نيكاراجوا", code: "505", flag: "NI" },
  NU: { name: "نيوا", code: "683", flag: "NU" },
  NZ: { name: "نيوزيلندا", code: "64", flag: "NZ" },
  HT: { name: "هايتي", code: "509", flag: "HT" },
  HN: { name: "هندوراس", code: "504", flag: "HN" },
  NL: { name: "هولندا", code: "31", flag: "NL" },
  HK: { name: "هونغ كونغ SAR", code: "852", flag: "HK" },
  WF: { name: "واليس وفوتونا", code: "681", flag: "WF" }
};

export const MARATHON_WEEKS = {
  point_week_1: "الأسبوع الأول",
  point_week_2: "الأسبوع الثاني",
  point_week_3: "الأسبوع الثالث",
  point_week_4: "الأسبوع الرابع",
};

export const TERMINATION_REASONS = {
  withdrawn: "غير فعال - منسحب",
  excluded: "مستبعد",
  team_discharge: "غير فعال - تفريغ الفريق",
  reassignment: "غير فعال - اعادة تعيين اداري",
  leader_upgrade: "غير فعال - ترقية قائد",
  supervisor_upgrade: "غير فعال - ترقية مراقب",
  transfer_ambassador: "غير فعال - نقل سفير",
  transfer_leader: "غير فعال - نقل قائد",
  supervisor_change: "غير فعال - تبديل مراقب",
  supervisor_withdrawn: "غير فعال - انسحاب مراقب",
  advisor_change: '"غير فعال - تبديل موجه"',
  upgradet_to_advanced_followup: "غير فعال - تم الترقية إلى أفرقة متقدمة",
  switch_administrators: "غير فعال - تبديل مسؤول",
  duplicate_entry:"غير فعال - مكرر",
  end_of_support: "غير فعال - انتهاء فترة الدعم",
  upgradet_to_sophisticated_followup:"غير فعال - ترقية لسفير في فريق متابعة متطور"
};

export const STATUS = {
  pending: "قيد المراجعة",
  accepted: "مقبول",
  rejected: "مرفوض",
  cancelled: "ملغي",
  finished: "منتهي",
  resolved: "تم الحل",
};
export const STATUS_CLASS = {
  pending: "bg-warning",
  accepted: "bg-primary",
  rejected: "bg-danger",
  cancelled: "bg-success",
  finished: "bg-danger",
  resolved: "bg-success",
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
  retard: "تم الاعادة للموثق",
};

/*########## RMADAN ##########*/

export const ACTIVITIES_STATUS = {
  pending: "مرحلة التصحيح",
  accepted: "مقبول",
  redo: "بحاجة لاعادة",
  rejected: "مرفوض",
};

export const ACTIVITIES_STATUS_CLASS = {
  pending: "bg-warning",
  accepted: "bg-success",
  redo: "bg-warning",
  rejected: "bg-danger",
};

export const BACK_READER_MESSAGES = {
  1: `ندرك جميعاً أن الظروف قد تكون صعبة في بعض الأحيان مما تضطرنا للانسحاب، ولكن تذكر أن هذه الفترات هي التي تبني فينا الإصرار والعزيمة 💪.

كلنا نؤمن بأهمية دورك في هذا المشروع ونود أن تعود وتنضم إلينا مرة أخرى حتى نكن سنداً لبعضنا البعض، ونتحدى الظروف ونثبت أن الإيمان بالهدف والعمل من أجله هو ما يميزنا.

عودتك تعني لنا الكثير، فهي ليست مجرد عودة فرد، بل هي إضافة قوية لمشروعنا. فأنت القدوة للكثيرين، ووجودك يعزز من عزيمتنا جميعاً.`,
};
