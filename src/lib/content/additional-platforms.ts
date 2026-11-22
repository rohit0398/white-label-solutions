import { ADDITIONAL_PLATFORM_PATHS, ADDITIONAL_PLATFORM_SUMMARIES, type AdditionalPlatformId } from "@/lib/additional-platform-paths";

type PlatformImage = { src: string; alt: string };
export interface AdditionalPlatform {
  id: AdditionalPlatformId;
  heading: string;
  seoTitle: string;
  description: string;
  intro: string;
  audience: string;
  reference: string;
  operatingSystem: string;
  demoIntro: string;
  demos: { label: string; href: string }[];
  features: { title: string; text: string }[];
  modules: { id: string; title: string; text: string; points: string[]; images: PlatformImage[]; portrait?: boolean }[];
  workflow: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

const img = (name: string, alt: string): PlatformImage => ({ src: `/showcase/platforms/${name}.webp`, alt });

export const ADDITIONAL_PLATFORMS: AdditionalPlatform[] = [
  {
    id: "taxi-booking",
    heading: "Launch a taxi booking and parcel delivery platform",
    seoTitle: "Launch a Taxi Booking Platform | Customer & Driver Apps",
    description: "Launch a white-label taxi, bike taxi, and parcel delivery platform. Explore customer and driver apps, fares, scheduled rides, tracking, and earnings tools.",
    intro: "A taxi booking platform with customer and driver apps for rides, bike taxis, and local parcel deliveries. Bring booking, pickup, trip progress, and driver earnings into one service under your brand.",
    audience: "Taxi operators, bike taxi businesses, and local delivery teams",
    reference: "SPLITT E",
    operatingSystem: "Android",
    demoIntro: "The SPLITT E customer and driver apps are listed on Google Play. Use them to review the two sides of the service, then ask for a walkthrough around your operating area and booking rules.",
    demos: [
      { label: "View the customer Android app", href: "https://play.google.com/store/apps/details?id=com.splite.splite" },
      { label: "View the driver Android app", href: "https://play.google.com/store/apps/details?id=com.splite_drivers.splite_drivers" },
    ],
    features: [
      { title: "Taxi, bike, and parcel bookings", text: "Offer the service types that fit your operating area, with pickup and drop-off details." },
      { title: "Route and fare preview", text: "Show the route and proposed fare before the customer confirms a booking." },
      { title: "Scheduled trips", text: "Give customers a place to review upcoming trips and previous journeys." },
      { title: "Driver availability", text: "Let drivers go online and receive ride or delivery requests." },
      { title: "Trip tracking", text: "Follow pickup and trip progress with navigation and waiting-time information." },
      { title: "Driver earnings", text: "Review trip-by-trip earnings and the driver's revenue summary." },
    ],
    modules: [
      { id: "customer-app", title: "Customer app for rides and deliveries", text: "Keep the booking journey clear: choose a destination, review the route and fare, and follow the trip. The reference screens include service choices such as Moto, Mini, Premium, and Parcel.", points: ["Pickup and destination search", "Vehicle or delivery selection", "Fare confirmation and trip history", "Upcoming scheduled bookings"], images: [img("splitte-customer-1", "SPLITT E customer booking screen with route and fare"), img("splitte-customer-2", "SPLITT E home screen with destination search and ride choices")], portrait: true },
      { id: "driver-app", title: "Driver app for requests and trips", text: "The driver experience covers availability, incoming work, pickup, and the journey. Review the request flow with your team so the branding, service area, fare rules, and payment setup match the business you intend to run.", points: ["Go online and accept requests", "Navigation during the trip", "Pickup waiting timer", "Trip progress and earnings"], images: [img("splitte-driver-1", "SPLITT E driver home showing online availability and earnings"), img("splitte-driver-2", "SPLITT E driver trip screen with navigation")], portrait: true },
    ],
    workflow: [
      { title: "Request a trip", text: "The customer selects pickup, destination, and the relevant ride or parcel service." },
      { title: "Accept and collect", text: "The driver receives the request and follows the pickup information." },
      { title: "Follow the journey", text: "Customer and driver use the trip status and route during the booking." },
      { title: "Complete and review", text: "The completed journey appears in trip history and driver earnings." },
    ],
    faqs: [
      { q: "Does the platform cover parcels as well as taxis?", a: "The reference customer and driver flows include taxi, bike taxi, and parcel requests. We agree the service types, coverage, and operating rules for the deployment in the proposal." },
      { q: "Can I try the customer and driver apps?", a: "Yes. The links above point to the separate Google Play listings for the SPLITT E customer and driver apps. An operator walkthrough can cover the workflow you want to launch." },
      { q: "Is an iOS app or web booking portal included?", a: "The linked customer and driver apps are for Android. If you need iOS, a booking website, a dispatch panel, or another integration, we can discuss availability and quote the exact deliverables." },
      { q: "How much does the platform cost?", a: "Price is on request. Share your service types, operating area, apps, branding, and integrations so we can quote the deployment and any additional work." },
    ],
  },
  {
    id: "food-delivery",
    heading: "Launch a food delivery platform",
    seoTitle: "Launch a Food Delivery Platform | Ordering, Restaurants & Admin",
    description: "Launch a white-label food delivery platform with customer ordering, restaurant tools, delivery workflows, and an admin dashboard. Explore Foodie demos and screens.",
    intro: "A food delivery platform connecting customer ordering, restaurant operations, delivery partners, and platform administration. Launch a branded ordering service around the restaurants and delivery workflow you choose.",
    audience: "Restaurant groups and local food delivery operators",
    reference: "Foodie",
    operatingSystem: "Web",
    demoIntro: "Explore the Foodie ordering website, restaurant panel, and platform admin demo. For customer mobile apps or delivery-partner tools, request a walkthrough of the builds needed for launch.",
    demos: [
      { label: "Open the ordering website", href: "https://foodie-order-app.web.app/" },
      { label: "Open the restaurant panel", href: "https://foodie-restaurant-panel.web.app/" },
      { label: "Open the admin demo", href: "https://foodie-orders-admin.web.app/" },
    ],
    features: [
      { title: "Restaurant discovery", text: "Let customers browse restaurants, offers, and food categories." },
      { title: "Menus and checkout", text: "Present items, a cart, addresses, payment, and order confirmation." },
      { title: "Order tracking", text: "Show progress and delivery-partner location through the ordering journey." },
      { title: "Restaurant tools", text: "Give restaurant partners views for orders, menus, earnings, and reviews." },
      { title: "Platform administration", text: "Manage restaurants, customers, orders, and platform reports." },
      { title: "Delivery workflow", text: "Review delivery acceptance, navigation, and completion with your operations team." },
    ],
    modules: [
      { id: "customer-ordering", title: "Customer website and ordering experience", text: "Help customers choose a restaurant and reach checkout without losing their basket. Use the reference website to review discovery and the proposed customer journey on a phone or desktop.", points: ["Food categories and restaurant listings", "Menus, item choices, and cart", "Address, payment, and checkout", "Order progress and delivery information"], images: [img("foodie-customer-home", "Foodie customer website with restaurant discovery and offers")] },
      { id: "restaurant-and-admin", title: "Restaurant and platform management", text: "Keep restaurant work distinct from marketplace administration. The restaurant panel focuses on a partner's incoming orders and activity, while the platform dashboard gives the operator a wider view of restaurants and orders.", points: ["Restaurant dashboard and order queue", "Menu, earnings, and review views", "Platform restaurant management", "Customer, order, and reporting tools"], images: [img("foodie-restaurant-dashboard", "Foodie restaurant partner dashboard"), img("foodie-admin-dashboard", "Foodie platform administration dashboard"), img("foodie-admin-orders", "Foodie administration order management") ] },
    ],
    workflow: [
      { title: "Choose and order", text: "The customer browses a restaurant, adds items, and submits the order." },
      { title: "Prepare the order", text: "The restaurant follows its incoming orders and preparation workflow." },
      { title: "Collect and deliver", text: "A delivery partner follows the agreed collection and delivery flow." },
      { title: "Review operations", text: "The operator checks completed orders, restaurant activity, and reports." },
    ],
    faqs: [
      { q: "Which Foodie demos can I open?", a: "The customer ordering website, restaurant panel, and platform admin demo are linked above. Public demo access can change; contact us if you need a guided review." },
      { q: "Are customer and delivery mobile apps part of the quote?", a: "Customer and delivery channels are agreed in the proposal. Tell us which apps and devices you need so we can demonstrate the relevant builds and quote their release and integration work." },
      { q: "Can the platform be branded for a restaurant group?", a: "We can discuss your branding, restaurant structure, service area, payment provider, and delivery rules. Changes beyond the agreed implementation are scoped separately." },
      { q: "What is the price?", a: "Price is on request. The quote depends on customer channels, restaurant tools, delivery operations, integrations, and launch support." },
    ],
  },
  {
    id: "appointment-booking",
    heading: "Launch an appointment booking platform",
    seoTitle: "Launch an Appointment Booking Platform | Calendar & Business Desk",
    description: "Launch a white-label appointment booking platform for clinics, salons, and studios. Explore customer booking, staff calendars, payments, and business reports.",
    intro: "An appointment booking platform for service businesses, with a customer booking experience and a business desk for staff schedules, appointments, payments, and reports.",
    audience: "Clinics, salons, studios, and appointment-based businesses",
    reference: "Appointment Booking & Business Desk",
    operatingSystem: "Web",
    demoIntro: "Try the customer booking web app and the business desk. Follow the same booking from the customer side to the appointment list and staff calendar.",
    demos: [
      { label: "Open the customer booking app", href: "https://appointment-saas-2a099.web.app/" },
      { label: "Open the business desk", href: "https://appointment-saas-admin.web.app/" },
    ],
    features: [
      { title: "Business and service discovery", text: "Help customers find a business, review services, and choose a booking time." },
      { title: "Staff schedules", text: "Review calendars by staff member across day, week, and month views." },
      { title: "Appointment management", text: "Search and filter appointments by status, staff, or payment details." },
      { title: "Working hours", text: "Manage services, staff availability, and business working hours." },
      { title: "Payments and messages", text: "Bring booking payments and customer communication into the business desk." },
      { title: "Business reports", text: "Review revenue, refunds, cancellations, and appointment volume." },
    ],
    modules: [
      { id: "customer-booking", title: "Customer booking on the web", text: "Let customers discover a service business and choose an appointment. The customer interface is a web app; review it on a phone as well as a desktop before selecting a launch scope.", points: ["Business and service browsing", "Appointment time selection", "Customer booking list", "Account and booking access"], images: [img("carepoint-customer-explore", "Appointment customer web app showing businesses and available services")], portrait: true },
      { id: "business-desk", title: "Business desk for staff and appointments", text: "Give the team a shared view of the day without relying on separate calendars and payment notes. Check the appointment filters and staff schedule with the people who will handle bookings and cancellations.", points: ["Daily, weekly, and monthly calendar", "Per-staff appointment views", "Booking search and status filters", "Revenue, customer, and cancellation summaries"], images: [img("carepoint-desk-dashboard", "Appointment business dashboard with booking and revenue summaries"), img("carepoint-desk-calendar", "Business appointment calendar with staff scheduling"), img("carepoint-desk-appointments", "Business desk appointment list") ] },
    ],
    workflow: [
      { title: "Find a service", text: "The customer opens a business and reviews its available services." },
      { title: "Choose a time", text: "The booking follows the business's services and staff availability." },
      { title: "Manage the appointment", text: "The business team checks the booking, staff schedule, and payment status." },
      { title: "Review the day", text: "The operator follows appointment volume, revenue, and cancellations." },
    ],
    faqs: [
      { q: "Is this only for clinics?", a: "The catalog describes booking for clinics, salons, and studios. We can discuss the services, staff setup, working hours, and booking rules for your business." },
      { q: "How can staff manage appointments?", a: "The business desk includes appointment search, status filters, and staff calendars with day, week, and month views. Teams can review bookings alongside payment and business reports." },
      { q: "Is the customer app a native iOS or Android app?", a: "The reference customer and business desk experiences are web apps. Native mobile apps and app-store publishing should be discussed and quoted separately if required." },
      { q: "How is the price decided?", a: "Price is on request. Tell us the business types, staff structure, locations, payment setup, and any integrations you need." },
    ],
  },
  {
    id: "real-estate",
    heading: "Launch a real estate listing platform",
    seoTitle: "Launch a Real Estate Platform | Property Listings & Inquiries",
    description: "Launch a white-label real estate platform for property search, land listings, agents, and inquiries. Review Aurum Estates screens and request a walkthrough.",
    intro: "A real estate website for farmhouses, plots, and property projects. Connect property search with landholder inquiries, agent discovery, and information that helps buyers understand a listing.",
    audience: "Property agencies, land businesses, and real estate project teams",
    reference: "Aurum Estates",
    operatingSystem: "Web",
    demoIntro: "Explore the Aurum Estates property, land-listing, and inquiry screens below. Request a guided walkthrough to review the workflows that fit the business.",
    demos: [],
    features: [
      { title: "Property search", text: "Present farmhouses, plots, and projects with buy or rent search options." },
      { title: "Landholder inquiries", text: "Provide pages for listing, selling, leasing, or developing land." },
      { title: "Investor and partner programs", text: "Collect interest in the relevant program through dedicated inquiry forms." },
      { title: "Agent directory", text: "Help visitors discover listed agents by location." },
      { title: "Knowledge centre", text: "Publish guides, market information, master plans, and videos." },
      { title: "Property service pages", text: "Explain services and collect inquiries, with tools such as an area converter." },
    ],
    modules: [
      { id: "property-discovery", title: "Property discovery and project information", text: "Help a visitor understand the type of property before making an inquiry. The reference site combines farmhouse, plot, and project search with supporting information about the business and its approach.", points: ["Property type and location search", "Buy and rent entry points", "Project and land information", "Guides and supporting resources"], images: [img("aurum-home", "Aurum Estates property search and featured land website")] },
      { id: "land-and-partner-inquiries", title: "Landholder and partner inquiry journeys", text: "Give landholders, investors, and prospective partners a relevant starting point. Dedicated information pages and forms help visitors explain their interest so the business team can follow up with the right details.", points: ["Land listing and sell inquiries", "Leasing and development interest", "Investor and partner pages", "Lead capture for follow-up"], images: [img("aurum-list-land", "Aurum Estates landholder listing inquiry page"), img("aurum-investor", "Aurum Estates investor information and inquiry page"), img("aurum-sell", "Aurum Estates property selling information page") ] },
    ],
    workflow: [
      { title: "Browse properties", text: "A visitor starts with the property type and location that interest them." },
      { title: "Review the details", text: "They read the listing, program, or supporting property information." },
      { title: "Send an inquiry", text: "The appropriate form captures interest for the relevant business team." },
      { title: "Follow up", text: "The operator handles the inquiry through the agreed sales process." },
    ],
    faqs: [
      { q: "Can I open a public real estate demo?", a: "There is no public demo link in the reference catalog at present. The screenshots are available here, and you can request a walkthrough before agreeing the project." },
      { q: "Does the platform handle property payments or investments?", a: "The reference describes listings, information, and inquiry capture. Transactions, investment processing, CRM integrations, and specialist workflows must be confirmed separately." },
      { q: "Can visitors inquire about selling or developing land?", a: "Yes. The reference includes land listing, selling, leasing, and development inquiry journeys, alongside investor and partner information pages." },
      { q: "What does the platform cost?", a: "Price is on request. We quote against listing types, inquiry flows, branding, administration needs, and any additional integrations." },
    ],
  },
  {
    id: "solar-crm",
    heading: "Launch a solar sales and installation CRM",
    seoTitle: "Launch a Solar CRM | Leads, Surveys, Quotes & Installations",
    description: "Launch a solar CRM for lead follow-ups, site surveys, quotations, installations, and subsidy tracking. Explore the web demo and request pricing for your workflow.",
    intro: "A solar CRM connecting the sales pipeline with site surveys, quotations, installation projects, and follow-ups. Give the sales and operations team one place to follow a customer's journey.",
    audience: "Solar installers, sales teams, and installation service businesses",
    reference: "Solar System CRM",
    operatingSystem: "Web",
    demoIntro: "Open the solar CRM reference demo to review its sales and operations workspace. Use a walkthrough to check how your team's lead stages, survey assignments, and installation milestones would be configured.",
    demos: [{ label: "Open the solar CRM demo", href: "https://solar-crm-web.web.app/" }],
    features: [
      { title: "Lead pipeline", text: "Review leads in kanban or list views, with search and source filters." },
      { title: "Site surveys", text: "Schedule surveys and assign the technician responsible for the visit." },
      { title: "Quotations and follow-ups", text: "Keep the next sales action and customer quotation visible to the team." },
      { title: "Installation projects", text: "Track the installation through milestones and progress updates." },
      { title: "Subsidy follow-ups", text: "Review application and net-meter status records as part of the workflow." },
      { title: "Operations and reporting", text: "Explore inventory, payments, loans, after-sales records, and reports." },
    ],
    modules: [
      { id: "sales-and-surveys", title: "Sales pipeline, surveys, and quotations", text: "Follow a new inquiry through the survey and quotation stages without losing the next follow-up. Review the lead sources and survey assignments that your sales and technical teams use day to day.", points: ["Kanban and list lead views", "Search and lead source filters", "Survey scheduling and assignment", "Quotation and customer follow-up records"], images: [img("solar-crm-leads", "Solar CRM lead pipeline and follow-up records"), img("solar-crm-surveys", "Solar CRM site survey scheduling and technician assignments") ] },
      { id: "installation-operations", title: "Installations and after-sales operations", text: "Connect the agreed installation work with milestones and status updates. The catalog also shows subsidy and net-meter tracking; confirm the exact data entry and integration requirements for the market where you operate.", points: ["Installation milestones and progress", "Subsidy application status records", "Net-meter follow-ups", "Inventory, payments, and service reporting"], images: [img("solar-crm-installations", "Solar CRM installation projects and progress tracking"), img("solar-crm-subsidy-tracker", "Solar CRM subsidy follow-up and application status workspace") ] },
    ],
    workflow: [
      { title: "Capture the lead", text: "Record the inquiry, source, and next sales follow-up." },
      { title: "Survey and quote", text: "Assign the survey and move the customer toward an agreed quotation." },
      { title: "Manage installation", text: "Follow the project through installation milestones and operational updates." },
      { title: "Support and follow up", text: "Keep payment, subsidy, net-meter, and after-sales records accessible." },
    ],
    faqs: [
      { q: "Is this a general CRM or a solar-specific workspace?", a: "The reference workflow is for solar sales and operations, including leads, site surveys, quotations, installations, and follow-ups. We can review your stages and team roles in a walkthrough." },
      { q: "Does subsidy tracking mean an official portal integration?", a: "Not automatically. Tracking status records and integrating with an external portal are different requirements. Confirm any automatic submission, synchronization, or government-system access separately." },
      { q: "Can the CRM include my reporting and inventory workflow?", a: "The reference includes reporting and operations sections. Share your required fields, integrations, and reports so we can identify what fits the implementation and what needs custom work." },
      { q: "How much does the solar CRM cost?", a: "Price is on request. We quote against users, workflows, branding, integrations, deployment, and the support arrangement you need." },
    ],
  },
];

export function additionalPlatform(id: AdditionalPlatformId) {
  const detail = ADDITIONAL_PLATFORMS.find(platform => platform.id === id);
  const summary = ADDITIONAL_PLATFORM_SUMMARIES.find(platform => platform.id === id);
  if (!detail || !summary) throw new Error(`Unknown additional platform: ${id}`);
  return { ...summary, ...detail, path: ADDITIONAL_PLATFORM_PATHS[id] };
}
