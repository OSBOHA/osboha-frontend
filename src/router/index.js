import { createRouter, createWebHistory } from "vue-router";

//check if user is logged in
const loggedIn = () =>
  localStorage.getItem("osboha__user") && localStorage.getItem("osboha__token");

//redirect to home if logged in
const authGuard = (to, from, next) => {
  if (loggedIn()) {
    next("/");
  } else {
    next();
  }
};

const childRoutes = (prop, mode) => [
  {
    path: "/home/:tour?",
    name: prop + ".list",
    meta: { auth: true, name: "osboha App" },
    component: () => import("../views/Apps/Osboha/OsbohaApp"),
  },
  {
    path: "/dashboard",
    name: prop + ".dashboard",
    meta: { auth: true, name: "osboha dashboard" },
    component: () => import("../views/Apps/Osboha/MainDashboard"),
  },
  {
    path: "accountsetting",
    name: prop + ".accountsetting",
    meta: { auth: true, name: "Account Setting" },
    component: () => import("../views/OsbohaMain/User/AccountSetting"),
  },
  {
    path: "notification",
    name: prop + ".notification",
    meta: { auth: true, name: "Notification" },
    component: () => import("../views/OsbohaMain/Notifications/Notification"),
  },
  {
    path: "book",
    name: prop + ".book",
    meta: { auth: true, name: "Book" },
    component: () => import("../views/Book/Book"),
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "infographic",
    name: prop + ".infographic",
    meta: { auth: true, name: "Infographic" },
    component: () => import("../views/Infographics/list"),
  },
  {
    path: "articles",
    name: prop + ".articles",
    meta: { auth: true, name: "articles" },
    component: () => import("../views/Articles/list"),
  },
  {
    path: "user-groups",
    name: prop + ".group",
    meta: { auth: true, name: "User Groups" },
    component: () => import("../views/OsbohaMain/Group/UserGroups"),
  },
  {
    path: "groups-list",
    name: prop + ".groupsList",
    meta: { auth: true, name: "Group" },
    component: () => import("../views/OsbohaMain/Group/GroupsList"),
  },
  {
    path: "announcement",
    name: prop + ".announcement",
    meta: { auth: true, name: "Announcemnt" },
    component: () => import("../views/OsbohaMain/Announcemnt/Announcemnt"),
  },
  {
    path: "support",
    name: prop + ".support",
    meta: { auth: true, name: "Support" },
    component: () => import("../views/OsbohaMain/Support/SupportView"),
  },
  {
    path: "friday-thesis",
    name: prop + ".friday-thesis",
    meta: { auth: true, name: "Friday Thesis" },
    component: () => import("../views/OsbohaMain/Post/FridayThesis"),
  },
  {
    path: "post/:post_id/:user_id?",
    name: prop + ".post",
    meta: { auth: true, name: "post" },
    component: () => import("../views/OsbohaMain/Post/PostView"),
  },
  {
    path: "posts/pending/:timeline_id/:post_id?",
    name: prop + ".pendingPosts",
    meta: { auth: true, name: "PendingPosts" },
    component: () => import("../views/OsbohaMain/Post/PendingPostsView"),
  },
];

const authchildRoutes = (prop, mode) => [
  {
    path: "/auth/signin",
    name: prop + ".sign-in",
    component: () => import("../views/AuthPages/Default/SignIn"),
    beforeEnter: authGuard,
  },

  {
    path: "signup",
    name: prop + ".sign-up",
    component: () => import("../views/AuthPages/Default/SignUp"),
  },
  {
    path: "new_signup",
    name: prop + ".new-signup",
    component: () => import("../views/AuthPages/Default/new_signup"),
  },
  {
    path: "osboha180-signup",
    name: prop + ".new-signup-idea",
    component: () => import("../views/AuthPages/SignUpNewIdea"),
  },
  {
    path: "forgot-password",
    name: prop + ".forgot-password",
    component: () => import("../views/AuthPages/Default/ForgotPassword.vue"),
  },
  {
    path: "reset-email",
    name: prop + ".reset-email",
    component: () => import("../views/AuthPages/Default/ResetEmail"),
  },
  {
    path: "forgot-password",
    name: prop + ".forgot-password",
    component: () => import("../views/AuthPages/Default/ForgotPassword.vue"),
  },
  {
    path: "not-ambassador-in-any-group/",
    name: prop + ".NotAmbassadorInAnyGroup",
    component: () =>
      import("../views/AuthPages/Default/NotAmbassadorInAnyGroup"),
  },
  {
    path: "excluded_ambassador/",
    name: prop + ".ExcludedAmbassador",
    component: () => import("../views/AuthPages/Default/ExcludedAmbassador"),
  },
  {
    path: "withdrawn_ambassador/",
    name: prop + ".WithdrawnAmbassador",
    component: () => import("../views/AuthPages/Default/WithdrawnAmbassador"),
  },
  {
    path: "confirm-mail",
    name: prop + ".confirmmail",
    component: () => import("../views/AuthPages/Default/ConfirmMail"),
  },
  {
    path: "reset-password/:token",
    name: prop + ".reset-password",
    component: () => import("../views/AuthPages/Default/ResetPassword"),
  },
];

const userChildRoute = (prop, mode = false) => [
  {
    path: "should-update-info",
    name: prop + ".should-update-info",
    meta: { auth: true, name: "User Should Update Info" },
    component: () => import("../views/OsbohaMain/User/ShouldUpdateInfo"),
  },
  {
    path: "search",
    name: prop + ".search",
    meta: { auth: true, name: "User search" },
    component: () => import("../views/AuthPages/Default/SearchForUser"),
  },
  {
    path: "search-by-name",
    name: prop + ".search-by-name",
    meta: { auth: true, name: "Search for user by Name" },
    component: () => import("../views/AuthPages/Default/SearchForUserByName"),
  },
  {
    path: "in-charge-of-search",
    name: prop + ".in-charge-of-search",
    meta: { auth: true, name: "Search for user by Name" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/AuthPages/Default/InChargeOfSearch"),
  },
  {
    path: "exception-search",
    name: prop + ".exception-search",
    meta: { auth: true, name: "Search for User Exception" },
    component: () =>
      import("../views/AuthPages/Default/SearchForUserException"),
  },
  {
    path: "assign-to-parent",
    name: prop + ".assignToParent",
    meta: { auth: true, name: "Assign To Parent" },
    component: () =>
      import("../views/OsbohaMain/Control/Ambassador/assignToParent"),
  },
  {
    path: "retrieve-nested-users/:parent_id",
    name: prop + ".retrieve-nested-users",
    meta: { auth: true, name: "Retrieve Nested Users" },
    component: () => import("../views/OsbohaMain/Control/UsersTree"),
  },
  {
    path: "profile/:user_id",
    name: prop + ".profile",
    meta: { auth: true, name: "User Profile" },
    component: () => import("../views/OsbohaMain/User/Profile"),
  },
  {
    path: "profile/friends/list/:user_id",
    name: prop + ".friendsList",
    meta: { auth: true, name: "User Friends List" },
    component: () => import("../views/OsbohaMain/User/Friends/List"),
  },
  {
    path: "profile/update/:user_id",
    name: prop + ".profileUpdate",
    meta: { auth: true, name: "User Profile Update" },
    component: () => import("../views/OsbohaMain/User/Sections/Update"),
  },
  {
    path: "eligible-books/:user_id",
    name: prop + ".eligible-books",
    meta: { auth: true, name: "User Eligible Books" },
    component: () => import("../views/OsbohaMain/User/Sections/EligibleBooks"),
  },
  {
    path: "profile/friends/requests/:user_id",
    name: prop + ".friendsRequests",
    meta: { auth: true, name: "User Frinds Requests" },
    component: () => import("../views/OsbohaMain/User/Friends/Requests"),
  },
  {
    path: "request-exception/:user_id",
    name: prop + ".requestexception",
    meta: { auth: true, name: "User Request Exception" },
    component: () => import("../views/OsbohaMain/User/Exceptions/NewException"),
  },
  {
    path: "list-exception/:user_id",
    name: prop + ".listException",
    meta: { auth: true, name: "List User Exception" },
    component: () =>
      import("../views/OsbohaMain/User/Exceptions/ListExceptions"),
  },

  {
    path: "accountsetting",
    name: prop + ".accountsetting",
    meta: { auth: true, name: "Account Setting" },
    component: () => import("../views/OsbohaMain/User/AccountSetting"),
  },
  {
    path: "privacysetting",
    name: prop + ".privacy-setting",
    meta: { auth: true, name: "Privacy Setting" },
    component: () => import("../views/OsbohaMain/User/PrivacySetting"),
  },
];

const ramadanChildRoute = (prop, mode = false) => [
  {
    path: "",
    name: prop + ".index",
    meta: { auth: true, name: "Index" },
    component: () => import("../views/OsbohaRamadan/index"),
  },
  {
    path: "correctors",
    name: prop + ".correctors-index",
    meta: { auth: true, name: "Correctors Index" },
    component: () => import("../views/OsbohaRamadan/Correctors/index"),
  },
  {
    path: "telegram-channels",
    name: prop + ".telegram-channels",
    meta: { auth: true, name: "Telegram channels" },
    component: () => import("../views/OsbohaRamadan/TelegramChannels"),
  },
  {
    path: "hadith",
    name: prop + ".hadith",
    meta: { auth: true, name: "hadith" },
    component: () => import("../views/OsbohaRamadan/Hadith"),
  },
  {
    path: "fill-hadith/:hadith_id",
    name: prop + ".fill-hadith",
    meta: { auth: true, name: "fill hadith" },
    component: () => import("../views/OsbohaRamadan/FillHadith"),
  },

  {
    path: "correctors-hadith-list",
    name: prop + ".correctors-hadith-list",
    meta: { auth: true, name: "Correctors Hadith List" },
    component: () => import("../views/OsbohaRamadan/Correctors/HadithList"),
  },
  {
    path: "correct-hadith/:hadith_memorization_id",
    name: prop + ".correct-hadith",
    meta: { auth: true, name: "Corrector One Hadith" },
    component: () => import("../views/OsbohaRamadan/Correctors/ListOneHadith"),
  },

  {
    path: "quran",
    name: prop + ".quran",
    meta: { auth: true, name: "quran" },
    component: () => import("../views/OsbohaRamadan/Quran"),
  },
  {
    path: "fill-quran/:day",
    name: prop + ".fill-quran",
    meta: { auth: true, name: "fill quran" },
    component: () => import("../views/OsbohaRamadan/FillQuran"),
  },
  {
    path: "questions",
    name: prop + ".questions",
    meta: { auth: true, name: "questions" },
    component: () => import("../views/OsbohaRamadan/Questions"),
  },
  {
    path: "correctors-questions-list",
    name: prop + ".correctors-questions-list",
    meta: { auth: true, name: "Correctors Questions List" },
    component: () => import("../views/OsbohaRamadan/Correctors/QuestionsList"),
  },
  {
    path: "correct-question/:question_answer_id",
    name: prop + ".correct-question",
    meta: { auth: true, name: "Corrector One Question" },
    component: () =>
      import("../views/OsbohaRamadan/Correctors/ListOneQuestion"),
  },

  {
    path: "fill-questions/:day",
    name: prop + ".fill-questions",
    meta: { auth: true, name: "fill questions" },
    component: () => import("../views/OsbohaRamadan/FillQuestions"),
  },
  {
    path: "question/:id",
    name: prop + ".listQuestion",
    meta: { auth: true, name: "list Question" },
    component: () => import("../views/OsbohaRamadan/ListQuestion"),
  },
  {
    path: "night-prayer",
    name: prop + ".night-prayer",
    meta: { auth: true, name: "Night Prayer" },
    component: () => import("../views/OsbohaRamadan/NightPrayer"),
  },
  {
    path: "fill-night-prayer/:day",
    name: prop + ".fill-night-prayer",
    meta: { auth: true, name: "Fill Night Prayer" },
    component: () => import("../views/OsbohaRamadan/FillNightPrayer"),
  },
  {
    path: "golden-day",
    name: prop + ".golden-day",
    meta: { auth: true, name: "Golden Day" },
    component: () => import("../views/OsbohaRamadan/GoldenDay"),
  },
  {
    path: "golden-day/:day",
    name: prop + ".fill-golden-day",
    meta: { auth: true, name: "Fill Golden Day" },
    component: () => import("../views/OsbohaRamadan/FillGoldenDay"),
  },
];

const statisticsChildRoute = (prop, mode = false) => [
  {
    path: "weekly/:week_id",
    name: prop + ".byWeek",
    meta: { auth: true, name: "Statistics by Week" },
    component: () => import("../views/OsbohaMain/Statistics/Statistics"),
  },
  {
    path: "top-users",
    name: prop + ".top-users",
    meta: { auth: true, name: "Statistics for Top Users" },
    component: () => import("../views/OsbohaMain/Statistics/TopUsers"),
  },
  {
    path: "leaders/:supervisor_id/:week_id?",
    name: prop + ".Leaders",
    meta: { auth: true, name: "Statistics for Supervisor Leaders" },
    component: () => import("../views/OsbohaMain/Statistics/Leaders"),
  },
  {
    path: "supervisors/:advisor_id/:week_id?",
    name: prop + ".supervisors",
    meta: { auth: true, name: "Statistics for Advisor Supervisors" },
    component: () => import("../views/OsbohaMain/Statistics/Supervisors"),
  },
  {
    path: "advisors/:consultant_id/:week_id?",
    name: prop + ".advisors",
    meta: { auth: true, name: "Statistics for Consultant Advisors" },
    component: () => import("../views/OsbohaMain/Statistics/Advisors"),
  },
  {
    path: "consultants/:admin_id/:week_id?",
    name: prop + ".consultants",
    meta: { auth: true, name: "Statistics for Consultants" },
    component: () => import("../views/OsbohaMain/Statistics/Consultants"),
  },
  {
    path: "list-supervisors",
    name: prop + ".list-supervisors",
    meta: { auth: true, name: "List Supervisors for Advisor" },
    component: () => import("../views/OsbohaMain/Statistics/ListSupervisors"),
  },
  {
    path: "duplicate-deletions/view-as/:viewer_id",
    name: prop + ".duplicate-deletions-view-as",
    meta: { auth: true, name: "List Duplicate Deletions" },
    component: () =>
      import("../views/OsbohaMain/Statistics/DuplicateDeletionsViewAs"),
  },
  {
    path: "duplicate-deletions",
    name: prop + ".duplicate-deletions",
    meta: { auth: true, name: "List Duplicate Deletions" },
    component: () =>
      import("../views/OsbohaMain/Statistics/DuplicateDeletions"),
  },
];
const rolesChildRoute = (prop, mode = false) => [
  {
    path: "/roles-control/:type",
    name: prop + ".rolesControl",
    meta: { auth: true, name: "Roles Control" },
    component: () => import("../views/RolesAdministration/RolesControl"),
  },
  {
    path: "/upgrade-user/:type",
    name: prop + ".upgradeUser",
    meta: { auth: true, name: "Users Upgrade" },
    component: () => import("../views/RolesAdministration/Upgrade"),
  },
  {
    path: "/downgrade-user/:type",
    name: prop + ".downgradeUser",
    meta: { auth: true, name: "Users Downgrade" },
    component: () => import("../views/RolesAdministration/Downgrade"),
  },
  {
    path: "/assign-role",
    name: prop + ".assignRole",
    meta: { auth: true, name: "Assign Role" },
    component: () => import("../views/RolesAdministration/AssignRole"),
  },
  {
    path: "/change-advising-team",
    name: prop + ".changeAdvisingTeam",
    meta: { auth: true, name: "Change Advising Team" },
    component: () => import("../views/RolesAdministration/ChangeAdvisingTeam"),
  },
  {
    path: "/remove-secondary-role",
    name: prop + ".removeSecondaryRole",
    meta: { auth: true, name: "Remove Secondary Role" },
    component: () => import("../views/RolesAdministration/RemoveSecondaryRole"),
  },
];
const groupChildRoute = (prop, mode = false) => [
  {
    path: "marathon-groups",
    name: prop + ".listMarathonGroups",
    meta: { auth: true, name: "List Marathon Groups" },
    component: () => import("../views/OsbohaMain/Group/Marathon/ListGroups"),
  },
  {
    path: "marathon-points/:group_id",
    name: prop + ".marathon-points",
    meta: { auth: true, name: "List Marathon Groups" },
    component: () => import("../views/OsbohaMain/Group/Marathon/GroupPoints"),
  },

  {
    path: "special-cares-groups",
    name: prop + ".listSpecialCareGroups",
    meta: { auth: true, name: "List Special Care Groups" },
    component: () => import("../views/OsbohaMain/Group/SpecialCare/ListGroups"),
  },
  {
    path: "request-ambassadors/:group_id",
    name: prop + ".requestAmbassadors",
    meta: { auth: true, name: "Request AmbFgrassadors" },
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/Request"),
  },
  {
    path: "group-detail/:group_id",
    name: prop + ".group-detail",
    meta: { auth: true, name: "Group Detail" },
    component: () => import("../views/OsbohaMain/Group/Group-detail"),
  },
  {
    path: "update/:group_id",
    name: prop + ".update",
    meta: { auth: true, name: "Group Update" },
    component: () => import("../views/OsbohaMain/Group/Update"),
  },
  {
    path: "change-leader/:group_id",
    name: prop + ".change-leader",
    meta: { auth: true, name: "Group" },
    component: () => import("../views/OsbohaMain/Group/ChangeLeader"),
  },
  {
    path: "group-members/:group_id",
    name: prop + ".group-members",
    meta: { auth: true, name: "Group Members" },
    component: () => import("../views/OsbohaMain/Group/ListMembers"),
  },
  {
    path: "add-member/:add_type/:group_id",
    name: prop + ".addMemeber",
    meta: { auth: true, name: "Group" },
    component: () => import("../views/OsbohaMain/Group/AddMember"),
  },
  {
    path: "group-books/:group_id",
    name: prop + ".group-books",
    meta: { auth: true, name: "Group Books" },
    component: () => import("../views/OsbohaMain/Group/ListBooks"),
  },
  {
    path: "group-exceptions/:group_id",
    name: prop + ".group-exceptions",
    meta: { auth: true, name: "Group Exceptions" },
    component: () => import("../views/OsbohaMain/Group/Exceptions/ListAll"),
  },
  {
    path: "/group/ambassadors-reading/:group_id/week/:week_id",
    name: prop + ".ambassadors-reading",
    meta: { auth: true, name: "Ambassadors reading" },
    component: () =>
      import("../views/OsbohaMain/Group/Ambassadors/TeamReading"),
  },
  {
    path: "/group/marathon-ambassadors-reading/:group_id/week/:week_id",
    name: prop + ".marathon-ambassadors-reading",
    meta: { auth: true, name: "Marathon Ambassadors Reading" },
    component: () => import("../views/OsbohaMarathon/MarathonReading"),
  },
  {
    path: "/group/list-ambassador-reading/:ambassador_id/week/:week_id",
    name: prop + ".listOneAmbassadorReading",
    meta: { auth: true, name: "Ambassador list reading" },
    component: () =>
      import("../views/OsbohaMain/Group/Ambassadors/ListReading"),
  },
  {
    path: "/group/list-marathon-ambassador-reading/:ambassador_id/week/:week_id",
    name: prop + ".listOneMarathonReading",
    meta: { auth: true, name: "Ambassador list marathon reading" },
    component: () => import("../views/OsbohaMarathon/ListMarathonReading"),
  },
  {
    path: "/group/list-ambassador-reading/thesis/:thesis_id",
    name: prop + ".listOneAmbassadorThesis",
    meta: { auth: true, name: "Ambassador -  one thesis" },
    component: () => import("../views/OsbohaMain/Group/Ambassadors/ListThesis"),
  },
  {
    path: "/group/list-marathon-ambassador-reading/thesis/:thesis_id",
    name: prop + ".listOneMarathoAmbassadorThesis",
    meta: { auth: true, name: "Marathon Ambassador -  one thesis" },
    component: () => import("../views/OsbohaMarathon/ListMarathonThesis"),
  },

  {
    path: "/group/all-ambassadors-achement/:group_id/week/:week_id",
    name: prop + ".listAllAmbassadorAchievements",
    meta: { auth: true, name: "All Ambassadors Achievement" },
    component: () =>
      import("../views/OsbohaMain/Group/Ambassadors/ListAllAchievement"),
  },
  {
    path: "/group/achievement-as-pages/:group_id/:week_id",
    name: prop + ".achievementAsPages",
    meta: { auth: true, name: "Achievement As Pages" },
    component: () =>
      import("../views/OsbohaMain/Group/Ambassadors/AchievementAsPages"),
  },
  {
    path: "/group/groups-audit/:supervisor_id",
    name: prop + ".groupsAudit",
    meta: { auth: true, name: "Audit Marks" },
    component: () => import("../views/OsbohaMain/Group/AuditMarks/GroupsAudit"),
  },
  {
    path: "/group/audit/mark/:mark_for_audit",
    name: prop + ".markAudit",
    meta: { auth: true, name: "Mark" },
    component: () => import("../views/OsbohaMain/Group/AuditMarks/Mark"),
  },
  {
    path: "/group/audit-marks/:group_id",
    name: prop + ".auditMarks",
    meta: { auth: true, name: "Audit Marks" },
    component: () =>
      import("../views/OsbohaMain/Group/AuditMarks/SupervisorAuditMarks"),
  },
  {
    path: "/group/advisor-audit-marks/:advisor_id",
    name: prop + ".AdvisorAudit",
    meta: { auth: true, name: "Advisor Audit Marks" },
    component: () =>
      import("../views/OsbohaMain/Group/AuditMarks/AdvisorAudit"),
  },

  {
    path: "/group/advisor-main-audit-marks/:advisor_id",
    name: prop + ".AdvisorMainAudit",
    meta: { auth: true, name: "Advisor Main Audit Marks" },
    component: () =>
      import("../views/OsbohaMain/Group/AuditMarks/AdvisorMainAudit"),
  },
  {
    path: "/group/statistics/:group_id/:week_id",
    name: prop + ".group-statistics",
    meta: { auth: true, name: "Group Statistics" },
    component: () => import("../views/OsbohaMain/Group/Statistics"),
  },
  {
    path: "add-group",
    name: prop + ".addGroup",
    meta: { auth: true, name: "Group" },
    component: () => import("../views/OsbohaMain/Group/AddGroup"),
  },
  {
    path: "new-ambassadors/:group_id",
    name: prop + ".new-ambassadors",
    meta: { auth: true, name: "New Ambassadors" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/ListNew"),
  },

  {
    path: "team-discharge/:group_id",
    name: prop + ".team-discharge",
    meta: { auth: true, name: "Team Discharge" },
    component: () => import("../views/OsbohaMain/Group/TeamDischarge"),
  },
];

const marathonChildRoute = (prop, mode = false) => [
  {
    path: "list-participants",
    name: prop + ".participants",
    meta: { auth: true, name: "List Participants" },
    component: () => import("../views/OsbohaMarathon/Participants"),
  },
  {
    path: "set-weeks",
    name: prop + ".setWeeks",
    meta: { auth: true, name: "Set Marathon Weeks" },
    component: () => import("../views/OsbohaMarathon/SetWeeks"),
  },
  {
    path: "points-detail/:user_id/:marathon_id",
    name: prop + ".points-detail",
    meta: { auth: true, name: "List Marathon Points" },
    component: () => import("../views/OsbohaMarathon/PointsDetails"),
  },
];

const withdrawnsTeamChildRoute = (prop, mode = false) => [
  {
    path: "list-ambassadors",
    name: prop + ".list-ambassadors",
    meta: { auth: true, name: "List Ambassadors" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () =>
      import("../views/OsbohaWithdrawnAmbassadors/ListAmbassadors"),
  },
  {
    path: "withdrawn-ambassador/:ambassador_id",
    name: prop + ".withdrawn-ambassador",
    meta: { auth: true, name: "Withdrawn Ambassador" },
    component: () =>
      import("../views/OsbohaWithdrawnAmbassadors/AmbassadorDetails"),
  },
];

const ambassadorsRequestChildRoute = (prop, mode = false) => [
  {
    path: "list-requests",
    name: prop + ".list-requests",
    meta: { auth: true, name: "List Requests" },
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/ListRequests"),
  },
  {
    path: "statistics",
    name: prop + ".statistics",
    meta: { auth: true, name: "Statistics" },
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/Statistics"),
  },
  {
    path: "request-details/:request_id",
    name: prop + ".request-details",
    meta: { auth: true, name: "Requests Details" },
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/RequestDetails"),
  },
  {
    path: "update-request/:request_id",
    name: prop + ".update-request",
    meta: { auth: true, name: "Update Requests" },
    component: () =>
      import("../views/OsbohaMain/Group/AmbassadorsRequest/UpdateRequest"),
  },
];

const exceptionChildRoute = (prop, mode = false) => [
  {
    path: "list-exception/:exception_id/:group_id?",
    name: prop + ".listException",
    meta: { auth: true, name: "List Exception" },
    component: () => import("../views/OsbohaMain/Group/Exceptions/ListOne"),
  },
  {
    path: "list-by-advisor/:exception_type",
    name: prop + ".listByAdvisor",
    meta: { auth: true, name: "List Exceptions For Advisor" },
    component: () => import("../views/OsbohaMain/Exceptions/ListByAdvisor"),
  },
  {
    path: "list-by-supervisor/:exception_type",
    name: prop + ".listBySupervisor",
    meta: { auth: true, name: "List Exceptions For Advisor" },
    component: () => import("../views/OsbohaMain/Exceptions/listBySupervisor"),
  },
];

const generalConversationChildRoute = (prop, mode = false) => [
  {
    path: ":questionId?",
    name: prop + ".index",
    meta: { auth: true, name: "General Conversation Index" },
    component: () => import("../views/OsbohaMain/GeneralConversation/index"),
  },
  {
    path: "statistics",
    name: prop + ".statistics",
    meta: { auth: true, name: "General Conversation Statistics" },
    component: () =>
      import("../views/OsbohaMain/GeneralConversation/Statistics"),
  },
];

const workingHoursChildRoute = (prop, mode = false) => [
  {
    path: "",
    name: prop + ".index",
    meta: { auth: true, name: "Working Hours" },
    component: () => import("../views/OsbohaMain/WorkingHours/index"),
  },
  {
    path: "statistics",
    name: prop + ".statistics",
    meta: { auth: true, name: "Working Hours Stats" },
    component: () => import("../views/OsbohaMain/WorkingHours/statistics"),
  },
];

const thesisReview = (prop, mode = false) => [
  {
    path: "thesis/:user_book_id",
    name: prop + ".thesis",
    meta: { auth: true, name: "thesis" },
    component: () => import("../views/OsbohaEligible/Control/Thesis/theses"),
  },
  {
    path: "list",
    name: prop + ".list",
    meta: { auth: true, name: "list" },
    component: () => import("../views/OsbohaEligible/Control/Thesis/list"),
  },

  {
    path: "update/:id",
    name: prop + ".update",
    meta: { auth: true, name: "update" },
    component: () => import("../views/OsbohaEligible/Theses/update"),
  },
];

const generalInformation = (prop, mode = false) => [
  {
    path: "list",
    name: prop + ".list",
    meta: { auth: true, name: "general_informations" },
    component: () => import("../views/OsbohaEligible/Control/General/list"),
  },
  {
    path: "general_informations/:user_book_id",
    name: prop + ".general_informations",
    meta: { auth: true, name: "general_informations" },
    component: () =>
      import("../views/OsbohaEligible/Control/General/general_informations"),
  },
  {
    path: "update/:id",
    name: prop + ".update",
    meta: { auth: true, name: "general_informations_update" },
    component: () => import("../views/OsbohaEligible/GeneralInormation/update"),
  },
];

const questions = (prop, mode = false) => [
  {
    path: "list",
    name: prop + ".list",
    meta: { auth: true, name: "List" },
    component: () => import("../views/OsbohaEligible/Control/Questions/list"),
  },
  {
    path: "questions/:user_book_id",
    name: prop + ".questions",
    meta: { auth: true, name: "questionsList" },
    component: () =>
      import("../views/OsbohaEligible/Control/Questions/questions"),
  },
  {
    path: "update/:id",
    name: prop + ".update",
    meta: { auth: true, name: "questionsUpdate" },
    component: () => import("../views/OsbohaEligible/Questions/update"),
  },
];

const achievement = (prop, mode = false) => [
  {
    path: "steps",
    name: prop + ".steps",
    meta: { auth: true, name: "steps" },
    component: () => import("../views/OsbohaEligible/Achievement/Steps"),
  },
  {
    path: "theses",
    name: prop + ".theses",
    meta: { auth: true, name: "theses" },
    component: () => import("../views/OsbohaEligible/Achievement/Theses"),
  },
  {
    path: "general_summary/",
    name: prop + ".general_summary",
    meta: { auth: true, name: "general_summary" },
    component: () =>
      import("../views/OsbohaEligible/Achievement/GeneralSummary"),
  },
  {
    path: "questions/",
    name: prop + ".questions",
    meta: { auth: true, name: "questions" },
    component: () => import("../views/OsbohaEligible/Achievement/Questions"),
  },
  {
    path: "check-achievement/",
    name: prop + ".checkAchievement",
    meta: { auth: true, name: "check-achievement" },
    component: () =>
      import("../views/OsbohaEligible/Achievement/CheckAchievement"),
  },
];

const superReviewer = (prop, mode = false) => [
  {
    path: "team-work",
    name: prop + ".team-work",
    meta: { auth: true, name: "team-work" },
    component: () => import("../views/OsbohaEligible/SuperReviewer/teamWork"),
  },
  {
    path: "returned",
    name: prop + ".returned",
    meta: { auth: true, name: "returned" },
    component: () => import("../views/OsbohaEligible/SuperReviewer/Returned"),
  },
  {
    path: "accepted",
    name: prop + ".accepted",
    meta: { auth: true, name: "accepted" },
    component: () => import("../views/OsbohaEligible/SuperReviewer/Accepted"),
  },
];
const SuperAuditer = (prop, mode = false) => [
  {
    path: "team-work",
    name: prop + ".team-work",
    meta: { auth: true, name: "team-work" },
    component: () => import("../views/OsbohaEligible/SuperAuditer/teamWork"),
  },
  {
    path: "ready-to-audit",
    name: prop + ".ready-to-audit",
    meta: { auth: true, name: "ready-to-audit" },
    component: () =>
      import("../views/OsbohaEligible/SuperAuditer/ReadyToAudit"),
  },
];
const eligibleTeamChildRoute = (prop, mode = false) => [
  {
    path: "team-work",
    name: prop + ".team-work",
    meta: { auth: true, name: "team-work" },
    component: () => import("../views/OsbohaEligible/Teams/ListWork"),
  },
  {
    path: "find-achievement",
    name:  prop + ".find-achievement-to-do",
    meta: { auth: true, name: "find-achievement-to-do" },
    component: () => import("../views/OsbohaEligible/Control/FindAchievement"),
  },
];

const adminControll = (prop, mode = false) => [
  {
    path: "statistics",
    name: prop + ".statistics",
    meta: { auth: true, name: "statistics" },
    component: () => import("../views/OsbohaEligible/Admin/statistics"),
  },
  {
    path: "accept-certificates",
    name: prop + ".accept-certificates",
    meta: { auth: true, name: "acceptCertificates" },
    component: () => import("../views/OsbohaEligible/Admin/acceptCertificate"),
  },
  {
    path: "accept-users",
    name: prop + ".accept-users",
    meta: { auth: true, name: "acceptNormal" },
    component: () => import("../views/OsbohaEligible/Admin/acceptNormal"),
  },
  {
    path: "find-achievement",
    name: prop + ".find-achievement",
    meta: { auth: true, name: "acceptNormal" },
    component: () =>
      import("../views/OsbohaEligible/Admin/AdminFindAchievement"),
  },
];

const timerChildRoute = (prop, mode = false) => [
  {
    path: "timer-list",
    name: prop + ".timerList",
    meta: { auth: true, name: "List timer" },
    component: () => import("../views/OsbohaMain/Timer/Timer.vue"),
  },
];

const bookChildRoute = (prop, mode = false) => [
  {
    path: "book-details/:book_id",
    name: prop + ".book-details",
    meta: { auth: true, name: "BookDetails" },
    component: () => import("../views/Book/BookDetails"),
  },
  {
    path: "latest",
    name: prop + ".latest",
    meta: { auth: true, name: "Latest Book" },
    component: () => import("../views/Book/LatestBook"),
  },
  {
    path: "eligible",
    name: prop + ".eligible",
    meta: { auth: true, name: "eligible Books" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/OsbohaEligible/Books/List"),
  },
  {
    path: "ramadan",
    name: prop + ".ramadan",
    meta: { auth: true, name: "ramadan Books" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/OsbohaRamadan/Books/List"),
  },
  {
    path: "eligible-controle",
    name: prop + ".eligible-controle",
    meta: { auth: true, name: "eligible Controle" },
    component: () => import("../views/OsbohaEligible/Control/List"),
  },
  {
    path: "update/:book_id",
    name: prop + ".update",
    meta: { auth: true, name: "Book Update" },
    component: () => import("../views/Book/Update"),
  },
  {
    path: "report/:book_id",
    name: prop + ".report",
    meta: { auth: true, name: "Book Report" },
    component: () => import("../views/Book/Report"),
  },
  {
    path: "list-violated-books",
    name: prop + ".list-violated-books",
    meta: { auth: true, name: "Book Report" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/Book/violationReports"),
  },
  {
    path: "violated-book/:report_id",
    name: prop + ".violated-book",
    meta: { auth: true, name: "Violated Book" },
    component: () => import("../views/Book/ViolatedBook"),
  },
  {
    path: "create",
    name: prop + ".create",
    meta: { auth: true, name: "Book Create" },
    component: () => import("../views/Book/Create"),
  },
  {
    path: "free-books/:user_id",
    name: prop + ".free-book",
    meta: { auth: true, name: "Free Book" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/Book/Free"),
  },
  {
    path: "reading-list/:user_id",
    name: prop + ".reading-list",
    meta: { auth: true, name: "Free Book" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/Book/ReadingList"),
  },
  {
    path: "later-books/:user_id",
    name: prop + ".later-books",
    meta: { auth: true, name: "UserBooks" },
    component: () => import("../views/Book/LaterBooks"),
  },
  {
    path: "user-theses/:book_id/:user_id",
    name: prop + ".user-theses",
    meta: { auth: true, name: "UserTheses" },
    component: () => import("../views/Book/BookDetails"),
  },
  {
    path: "user-single-thesis/:book_id/:thesis_id",
    name: prop + ".user-single-thesis",
    meta: { auth: true, name: "UserSingleThesis" },
    component: () => import("../views/Book/BookDetails"),
  },
  {
    path: ":book_id/user-rate/:rate_id",
    name: prop + ".user-rate",
    meta: { auth: true, name: "UserRate" },
    component: () => import("../views/Book/BookDetails"),
  },
  {
    path: "suggest-book/",
    name: prop + ".suggest-book",
    meta: { auth: true, name: "Suggest Book" },
    component: () => import("../views/Book/SuggestBook"),
  },
  {
    path: "list-suggested-books",
    name: prop + ".list-suggested-books",
    meta: { auth: true, name: "List Suggested Books" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/Book/ListSuggestedBooks"),
  },
  {
    path: "suggested-book/:suggestion_id",
    name: prop + ".suggested-book",
    meta: { auth: true, name: "Suggested Book" },
    component: () => import("../views/Book/SuggestedBook"),
  },
  {
    path: "quality-team-achievements",
    name: prop + ".quality-team-achievements",
    meta: { auth: true, name: "List Quality Team Achievements" },
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    component: () => import("../views/Book/TeamAchievements"),
  },
];

const controlChildRoute = (prop, mode = false) => [
  {
    path: "groups",
    name: prop + ".groups",
    meta: { auth: true, name: "Control Groups" },
    component: () => import("../views/OsbohaMain/Control/groups"),
  },
  {
    path: "transfer-ambassador",
    name: prop + ".transfer-ambassador",
    meta: { auth: true, name: "Aransfer Ambassador" },
    component: () => import("../views/OsbohaMain/Control/Ambassador/transfer"),
  },
  {
    path: "transfer-leader",
    name: prop + ".transfer-leader",
    meta: { auth: true, name: "Aransfer Leader" },
    component: () => import("../views/OsbohaMain/Control/Leaders/transfer"),
  },
  {
    path: "assign-administrator/",
    name: prop + ".assign-administrator",
    meta: { auth: true, name: "Assign Administrator" },
    component: () => import("../views/OsbohaMain/Control/assignAdministrator"),
  },
  {
    path: "supervisors-swap/",
    name: prop + ".supervisorsSwap",
    meta: { auth: true, name: "Supervisors Swap" },
    component: () =>
      import("../views/OsbohaMain/Control/Supervisors/supervisorsSwap"),
  },
  {
    path: "asign-supervisor/",
    name: prop + ".assignSupervisor",
    meta: { auth: true, name: "Assign Supervisor" },
    component: () =>
      import("../views/OsbohaMain/Control/Supervisors/assignSupervisor"),
  },
  {
    path: "leaders-swap/:group_id?",
    name: prop + ".leadersSwap",
    meta: { auth: true, name: "Leaders Swap" },
    component: () => import("../views/OsbohaMain/Control/Leaders/leadersSwap"),
  },
  {
    path: "switch-administrators/:group_id?",
    name: prop + ".switchAdministrators",
    meta: { auth: true, name: "Leaders Swap" },
    component: () => import("../views/OsbohaMain/Control/switchAdministrators"),
  },
  {
    path: "pending-theses/:supervisor_id/",
    name: prop + ".pending-theses",
    meta: { auth: true, name: "Assign Administrator" },
    component: () => import("../views/OsbohaMain/Control/Theses/pending"),
  },
];

const chatChildRoute = (prop, mode = false) => [
  {
    path: "",
    name: prop + ".index",
    meta: { auth: true, name: "ChatIndex" },
    component: () => import("../views/Chat/Index"),
  },
];

const mediaChildRoute = (prop, mode = false) => [
  {
    path: "",
    name: prop + ".index",
    component: () => import("../views/UploadImages"),
  },
];

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/Errors/404"),
  },
  {
    path: "/notauthorized",
    name: "NotAuthorized",
    component: () => import("../views/Errors/401"),
  },
  {
    path: "/server-error",
    name: "ServerError",
    component: () => import("../views/Errors/500-server"),
  },
  // {
  //   path: "/maintenance",
  //   name: "maintenance",
  //   component: () => import("../views/Errors/500-server"),
  // },

  {
    path: "/terms-and-conditions",
    name: "terms-and-conditions",
    component: () => import("../views/Apps/Osboha/TermsAndConditions"),
  },
  {
    path: "/",
    name: "osboha",
    component: () => import("../layouts/Default"),
    children: childRoutes("osboha"),
  },
  {
    path: "/without-leftside",
    name: "without-leftside",
    component: () => import("../layouts/WithoutLeftside"),
    children: childRoutes("leftside"),
  },
  {
    path: "/without-rightside",
    name: "without-rightside",
    component: () => import("../layouts/WithoutRightside"),
    children: childRoutes("rightside"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../layouts/Empty"),
    children: authchildRoutes("auth"),
  },
  {
    path: "/upload-media",
    name: "upload-media",
    component: () => import("../layouts/Empty"),
    children: mediaChildRoute("upload-media"),
  },

  {
    path: "/user",
    name: "user",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: userChildRoute("user"),
  },
  {
    path: "/group",
    name: "group",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: groupChildRoute("group"),
  },
  {
    path: "/marathon",
    name: "marathon",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: marathonChildRoute("marathon"),
  },
  {
    path: "/withdrawns-team",
    name: "withdrawns-team",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: withdrawnsTeamChildRoute("withdrawns-team"),
  },
  {
    path: "/ambassadors-request",
    name: "ambassadors-request",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: ambassadorsRequestChildRoute("ambassadors-request"),
  },

  {
    path: "/statistics",
    name: "statistics",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: statisticsChildRoute("statistics"),
  },
  {
    path: "/roles",
    name: "roles",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: rolesChildRoute("roles"),
  },
  {
    path: "/exceptions",
    name: "exceptions",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: exceptionChildRoute("exceptions"),
  },
  {
    path: "/timer",
    name: "timer",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: timerChildRoute("timer"),
  },
  {
    path: "/book",
    name: "book",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: bookChildRoute("book"),
  },
  {
    path: "/control",
    name: "control",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: controlChildRoute("control"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../layouts/ChatHeader"),
    meta: { auth: true },
    children: chatChildRoute("chat"),
  },
  {
    path: "/general-conversation",
    name: "general-conversation",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: generalConversationChildRoute("general-conversation"),
  },
  {
    path: "/working-hours",
    name: "working-hours",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: workingHoursChildRoute("working-hours"),
  },
  {
    path: "/ramadan",
    name: "ramadan",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: ramadanChildRoute("ramadan"),
  },

  /* ########## Start Eligible Routes ########## */
  {
    path: "/thesis-review",
    name: "thesis-review",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: thesisReview("thesis-review"),
  },
  {
    path: "/ready-to-audit",
    name: "ReadyToAudit",
    meta: { auth: true, name: "ReadyToAudit" },
    component: () => import("../views/OsbohaEligible/Control/readyToAudit"),
  },
  {
    path: "/general",
    name: "general",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: generalInformation("general"),
  },
  {
    path: "/questions",
    name: "questions",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: questions("questions"),
  },
  {
    path: "/eligible-team",
    name: "eligibleTeam",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: eligibleTeamChildRoute("eligibleTeam"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: adminControll("admin"),
  },
  {
    path: "/achievement/:id/",
    name: "achievement",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: achievement("achievement"),
  },
  {
    path: "/super-reviewer",
    name: "super-reviewer",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: superReviewer("super-reviewer"),
  },
  {
    path: "/super-auditer",
    name: "super-auditer",
    component: () => import("../layouts/Default"),
    meta: { auth: true },
    children: SuperAuditer("super-auditer"),
  },

  /* ########## End Eligible Routes ########## */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !loggedIn()) {
    return next("/auth/signin");
  } else {
    if (to.path === "/") {
      next("/home"); // Redirect to '/home' [new route]
    }
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   // Check if the destination route is the maintenance page
//   if (to.path !== '/maintenance') {
//     // Redirect to the maintenance page
//     next('/maintenance');
//   } else {
//     // Continue with the route
//     next();
//   }
// });

export default router;
