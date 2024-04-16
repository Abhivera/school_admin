// Material Dashboard 2 PRO React layouts
import Analytics from "layouts/dashboards/analytics";
import Sales from "layouts/dashboards/sales";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import AllProjects from "layouts/pages/profile/all-projects";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Timeline from "layouts/pages/projects/timeline";
import PricingPage from "layouts/pages/pricing-page";
import Widgets from "layouts/pages/widgets";
import RTL from "layouts/pages/rtl";
import Charts from "layouts/pages/charts";
import Notifications from "layouts/pages/notifications";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import SignInCover from "layouts/authentication/sign-in";
import SignUpCover from "layouts/authentication/sign-up";
import ResetCover from "layouts/authentication/reset-password";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SchoolIcon from "@mui/icons-material/School";
import MDAvatar from "components/MDAvatar";
import Icon from "@mui/material/Icon";
import profilePicture from "assets/images/team-3.jpg";
import School from "layouts/pages/school/create";
import Roles from "layouts/pages/rbac/roles";
import SchoolInfo from "layouts/pages/school";
import User from "layouts/pages/user";
import Student from "layouts/pages/student";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import mainroutes from "mainroutes";
import Academic from "layouts/pages/academic_year";
import Section from "layouts/pages/section";
import Class from "layouts/pages/class";
import Wings from "layouts/pages/wings";
import Cookies from "js-cookie";
import axios from "axios";
import BadgeIcon from "@mui/icons-material/Badge";
import MYProfile from "layouts/pages/myprofile";
import StudentDetails from "layouts/pages/student";
import NewStudent from "layouts/pages/student/create";
// Material Dashboard 2 PRO React layouts

import EditNoteIcon from "@mui/icons-material/EditNote";

import EmployeeProfile from "layouts/pages/profession";

import EmployeeType from "layouts/pages/employement_type";
import EmployeeLeave from "layouts/pages/leaves_types";
import EmployeeInfo from "layouts/pages/employee_details";
import Subject from "layouts/pages/subject";

import Department from "layouts/pages/department";
import SubSubject from "layouts/pages/sub-subject";
import PortraitIcon from "@mui/icons-material/Portrait";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EmpGrade from "layouts/pages/emp_grade";
import AcademicGrade from "layouts/pages/academic_grade";
import NonAcademicGrade from "layouts/pages/non_academic_grade";
import ExamType from "layouts/pages/exam_type";
import Scholastic from "layouts/pages/scholastic_particular";
import ScholasticComponent from "layouts/pages/scholastic_component";
import OtherParticular from "layouts/pages/other_particular";
import OtherComponent from "layouts/pages/other_component";
import ExamSchedule from "layouts/pages/exam_schedule";

let route2 = mainroutes;
console.log(route2, "my mainroutes");
interface RouteItem {
  type: "collapse" | "title"; // Define the type of the route item
  name: string; // Name of the route
  key: string; // Unique key for the route
  icon: JSX.Element; // Icon element for the route
  route?: string; // Optional route path
  component?: JSX.Element; // Optional component for the route
  collapse?: RouteItem[]; // Optional array of nested routes if the type is "collapse"
}
let submm: string[] = [];

const token = Cookies.get("token");

try {
  if (token) {
    const response = await axios.get("http://10.0.20.128:8000/mg_rbac_current_user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      submm = response.data;
      console.log(" my api routes", submm);
    }
  }
} catch (error) {
  console.error(error);
}
const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Analytics",
        key: "analytics",
        route: "/dashboards/analytics",
        component: <Analytics />,
      },
    ],
  },

  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: (
      <Icon fontSize="medium">
        <VpnKeyIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        route: "/authentication/sign-in/cover",
        component: <SignInCover />,
      },

      {
        name: "Reset Password",
        key: "reset-password",
        route: "/authentication/reset-password/cover",
        component: <ResetCover />,
      },
      {
        name: "My Profile",
        key: "myprofile",
        route: "/pages/authentication/myprofile",
        component: <MYProfile />,
      },
    ],
  },
  {
    type: "collapse",
    name: "RBAC",
    key: "rbac",
    icon: (
      <Icon fontSize="medium">
        <ManageAccountsIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Roles",
        key: "roles",
        route: "pages/rbac/roles",
        component: <Roles />,
      },
      {
        name: "User",
        key: "user",
        route: "pages/rbac/user",
        component: <User />,
      },
    ],
  },
  {
    type: "collapse",
    name: "School",
    key: "school",
    icon: (
      <Icon fontSize="medium">
        <SchoolIcon />
      </Icon>
    ),
    collapse: [
      // {
      //   name: "New School",
      //   key: "new-school",
      //   route: "pages/school/new-school",
      //   component: <School />,
      // },
      {
        name: "School Information",
        key: "schoolinfo",
        route: "pages/school/schoolinfo",
        component: <SchoolInfo />,
      },

      {
        name: "Academic Year",
        key: "academic",
        route: "pages/school/academic",
        component: <Academic />,
      },
      {
        name: "Wings",
        key: "wings",
        route: "pages/school/wings",
        component: <Wings />,
      },
      {
        name: "Class",
        key: "class",
        route: "pages/school/class",
        component: <Class />,
      },
      {
        name: "Section",
        key: "section",
        route: "pages/school/section",
        component: <Section />,
      },
    ],
  },

  {
    type: "collapse",
    name: "Student",
    key: "student",
    icon: (
      <Icon fontSize="medium">
        <BadgeIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Student Info",
        key: "studentdetails",
        route: "/pages/school/studentdetails",
        component: <StudentDetails />,
      },
      {
        name: "Academic Grade",
        key: "academicgrade",
        route: "/pages/school/academicgrade",
        component: <AcademicGrade />,
      },
      {
        name: "Non-Academic Grade",
        key: "nonacademicgrade",
        route: "/pages/school/nonacademicgrade",
        component: <NonAcademicGrade />,
      },
    ],
  },

  {
    type: "collapse",
    name: "Subject",
    key: "subject",
    icon: (
      <Icon fontSize="medium">
        <LocalLibraryIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Subject Info",
        key: "subjectinfo",
        route: "pages/subject/subjectinfo",
        component: <Subject />,
      },
      {
        name: "Sub-Subject",
        key: "subsubject",
        route: "pages/subject/subsubject",
        component: <SubSubject />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Exam",
    key: "exam",
    icon: (
      <Icon fontSize="medium">
        <EditNoteIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Exam Type",
        key: "examtype",
        route: "pages/exam/examtype",
        component: <ExamType />,
      },
      {
        name: "Scholastic Particular",
        key: "scholastic_particular",
        route: "/pages/exam/scholastic_particular",
        component: <Scholastic />,
      },
      {
        name: "Scholastic Component",
        key: "scholastic_component",
        route: "/pages/exam/scholastic_component",
        component: <ScholasticComponent />,
      },
      {
        name: "Other Particular",
        key: "other_particular",
        route: "/pages/exam/other_particular",
        component: <OtherParticular />,
      },
      {
        name: "Other Component",
        key: "other_component",
        route: "/pages/exam/other_component",
        component: <OtherComponent />,
      },
      {
        name: "Exam Schedule",
        key: "exam_schedule",
        route: "/pages/exam/exam_schedule",
        component: <ExamSchedule />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Employee",
    key: "employee",
    icon: (
      <Icon fontSize="medium">
        <PortraitIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Employee Info",
        key: "employee_info",
        route: "pages/employee/employee_info",
        component: <EmployeeInfo />,
      },
      // {
      //   name: "Class Teacher",
      //   key: "class_teacher",
      //   route: "pages/employee/class_teacher",
      //   component: <ClassTeacher />,
      // },
      {
        name: "Employee Grade",
        key: "employee_grade",
        route: "pages/employee/employee_grade",
        component: <EmpGrade />,
      },

      {
        name: "Profession",
        key: "employee_profile",
        route: "pages/employee/employee_profile",
        component: <EmployeeProfile />,
      },
      {
        name: "Employment Type",
        key: "employee_type",
        route: "pages/employee/employee_type",
        component: <EmployeeType />,
      },
      {
        name: "Leave Types",
        key: "employee_leave",
        route: "pages/employee/employee_leave",
        component: <EmployeeLeave />,
      },
      {
        name: "Department",
        key: "department",
        route: "pages/employee/department",
        component: <Department />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Fee",
    key: "fee",
    icon: (
      <Icon fontSize="medium">
        <CurrencyRupeeIcon />
      </Icon>
    ),
    collapse: [
      {
        name: "Fee Category",
        key: "feecategory",
        route: "pages/fee/feecategory",
        component: <EmployeeInfo />,
      },
    ],
  },
];
for (const i of route2 as RouteItem[]) {
  const module: any = {};
  module.name = i.name;
  module.key = i.key;
  module.type = i.type;
  module.icon = i.icon;
  const submodule: any[] = [];

  if (i.collapse) {
    for (const j of i.collapse) {
      if (submm.includes(j.key)) {
        submodule.push(j);
      } else {
        if (submm.includes(j.key)) {
          submodule.push(j);
        }
      }
    }
  }

  module.collapse = submodule;
  if (module.collapse.length > 0) {
    routes.push(module);
  }
  console.log(" my complete routes", routes);
}
export default routes;

export { route2 };
