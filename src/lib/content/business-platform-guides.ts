import { ADDITIONAL_PLATFORM_GUIDE_SLUGS, type AdditionalPlatformId } from "@/lib/additional-platform-paths";

export interface BusinessPlatformGuide {
  platformId: AdditionalPlatformId;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  datePublished: string;
  tags: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    source?: { href: string; label: string };
  }[];
  checklist: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const BUSINESS_PLATFORM_GUIDES: BusinessPlatformGuide[] = [
  {
    platformId: "taxi-booking",
    slug: ADDITIONAL_PLATFORM_GUIDE_SLUGS["taxi-booking"],
    title: "How to Launch a White-Label Taxi Booking App",
    seoTitle: "White-Label Taxi Booking App: Customer & Driver Launch Guide",
    description: "Plan a white-label taxi booking app around customers, drivers, fares, dispatch, and trip support. Explore SPLITT E examples and a practical launch checklist.",
    intro: "A taxi booking launch brings two journeys together: a customer needs a reliable pickup, and a driver needs a clear request, route, and earnings record. Start with one operating area and test a complete trip before adding more service types or cities.",
    datePublished: "2026-11-23",
    tags: ["Taxi Booking", "Driver Apps", "White Label"],
    sections: [
      {
        id: "choose-the-service", title: "Choose the service and operating area first",
        paragraphs: [
          "Write down the first service the business will run: local taxis, bike taxis, parcel deliveries, or a defined combination. Each needs its own booking rules. A passenger pickup and a parcel collection may share a map, but they need different instructions, support questions, and completion checks. Agree the initial area and service hours with the operations team.",
          "Prepare a short operating brief before comparing apps. Include vehicle categories, the customer contact process, driver onboarding, and who handles a booking when no driver accepts. Start with rules staff can explain clearly. A long feature list is less useful than knowing how the first customer request reaches an available driver.",
        ],
        bullets: ["Which service types are available on the first day?", "Where can customers book pickups and destinations?", "Who handles cancellations, late pickups, and unavailable drivers?", "Which customer and driver builds need to be released?"],
      },
      {
        id: "customer-and-driver", title: "Review the customer and driver apps together",
        paragraphs: [
          "The SPLITT E reference includes separate customer and driver Android listings. Customer screens cover destination search, a route and fare preview, service choices, and booking history. Driver screens show availability, requests, navigation, waiting information, and earnings. Review these as two sides of the same trip rather than as unrelated app demos.",
          "Ask the team to follow a booking identifier from the customer confirmation through driver acceptance and completion. Check that both people see a consistent status when either app is reopened. If the launch also needs an iOS build, dispatch console, or web booking, list that explicitly in the proposal; the linked Android listings do not establish those deliverables.",
        ],
      },
      {
        id: "maps-and-matching", title: "Separate the map, the arrival estimate, and driver matching",
        paragraphs: [
          "A map that displays two markers does not explain how a driver is selected. Define what happens when several drivers are available, a request is ignored, or a driver becomes unavailable during assignment. Ask for a demonstration using the matching rules intended for the launch and a clear explanation of the fallback staff will use.",
          "Google's Routes documentation describes route matrices as a way to compare travel distance and duration across origins and destinations. That can inform a routing design, but the booking system still needs its own assignment and acceptance rules. Confirm the mapping provider, regional coverage, usage charges, and integration separately from the app's appearance.",
        ],
        source: { href: "https://developers.google.com/maps/documentation/routes/compute_route_matrix", label: "Google Maps: route distances and durations across multiple locations" },
      },
      {
        id: "fares-and-earnings", title: "Make fares and driver earnings understandable",
        paragraphs: [
          "Agree what the displayed fare means before testing checkout. Decide how service type, distance, waiting, cancellation, and any operational adjustments are handled. A fare preview and a completed-trip amount should have an explanation the support team can follow, especially if the route changes during the journey.",
          "Review the driver record alongside the customer record. For a completed trip, staff should be able to explain the recorded amount and any adjustments without relying on screenshots sent in a chat. Confirm which payment methods and settlement workflows are included in the quote. Avoid treating an earnings dashboard as proof that every desired payout or reconciliation integration already exists.",
        ],
      },
      {
        id: "trip-acceptance-tests", title: "Test the trips that will generate support calls",
        paragraphs: [
          "Use a controlled test area and assigned testers to rehearse the whole journey: customer request, driver acceptance, arrival, trip progress, completion, and history. Then repeat with a cancelled request, a destination correction, a dropped connection, and an app restart. Record what the customer, driver, and support person should see at each step.",
          "A scheduled trip needs a separate rehearsal. Check who receives the booking, when the driver is expected to act, and what happens if availability changes before the pickup. For parcels, test collection and delivery instructions as their own workflow. These are acceptance checks to agree with the supplier, not a claim that every exception is included without configuration.",
        ],
      },
      {
        id: "scope-and-quote", title: "Request a quote around the first operating version",
        paragraphs: [
          "A useful taxi app quote separates the existing product, branding, mapping and messaging services, payment setup, release work, and any custom dispatch requirements. Include who owns the service accounts, who supports live trips, and how the team receives access and documentation after handover.",
          "Our taxi platform is priced on request. Bring the service area, customer and driver requirements, operating rules, and integration list to a walkthrough. Agree deliverables and dates against that scope, then launch a version the operations team has rehearsed. The product page below links to the customer and driver Android examples.",
        ],
      },
    ],
    checklist: [
      { title: "Define the first area", text: "Agree services, hours, vehicle choices, pickup rules, and the support owner." },
      { title: "Review both apps", text: "Follow a booking through customer confirmation, driver acceptance, and completion." },
      { title: "Rehearse exceptions", text: "Check cancellations, unavailable drivers, scheduled trips, and connection recovery." },
      { title: "Confirm the proposal", text: "List builds, integrations, service accounts, release work, support, and pricing." },
    ],
    faqs: [
      { q: "Can a white-label taxi app also support bike taxis and parcels?", a: "The SPLITT E reference shows those service choices. Agree which services and operating rules belong in the launch scope and test each relevant workflow." },
      { q: "Is a driver app enough to manage dispatch?", a: "No. Review how requests are assigned and accepted, how exceptions reach staff, and which operator tools are included. Navigation and dispatch are separate requirements." },
      { q: "How much does the taxi platform cost?", a: "Price is on request. The quote depends on the customer and driver builds, branding, service rules, integrations, and launch support." },
    ],
  },
  {
    platformId: "food-delivery",
    slug: ADDITIONAL_PLATFORM_GUIDE_SLUGS["food-delivery"],
    title: "White-Label Food Delivery Platform: From Order to Delivery",
    seoTitle: "White-Label Food Delivery Platform: Ordering & Launch Guide",
    description: "Plan customer ordering, restaurant acceptance, delivery handoffs, payments, and refunds. Explore Foodie demos and the checks to run before a branded launch.",
    intro: "A food delivery platform must connect the customer, restaurant, delivery team, and operator around the same order. The launch plan should explain who acts next when a restaurant is busy, an item sells out, or a delivery cannot be completed.",
    datePublished: "2026-11-23",
    tags: ["Food Delivery", "Restaurant Operations", "White Label"],
    sections: [
      {
        id: "operating-model", title: "Decide who sells the food and who delivers it",
        paragraphs: [
          "Start with the operating model: a restaurant group taking its own orders, a marketplace with independent restaurants, or a local operator coordinating several partners. Agree who maintains menus, accepts orders, manages delivery, and handles customer questions. These choices shape the customer website and the staff tools more than the logo or color scheme.",
          "Keep the initial delivery area and restaurant list manageable. Collect menus, opening hours, preparation expectations, service zones, contact details, and the process for pausing orders. Confirm how restaurant teams will work during a busy shift. If they need to use several separate systems, rehearse that handoff before making the ordering website public.",
        ],
      },
      {
        id: "menus-and-checkout", title: "Make the menu and checkout agree",
        paragraphs: [
          "Review an actual restaurant menu on a phone. Check item choices, quantities, availability, delivery address, and the total before payment. Decide how the cart behaves if a customer changes restaurant, chooses an unsupported address, or returns after the menu has changed. These are product decisions to demonstrate and confirm in the implementation scope.",
          "The Foodie reference provides a customer ordering website, a restaurant panel, and platform administration. Use the customer demo to inspect discovery and ordering, then check how the same information appears to the restaurant. Public links are available for these web experiences; customer and delivery mobile builds should be confirmed separately when selecting the launch package.",
        ],
      },
      {
        id: "restaurant-acceptance", title: "Give the restaurant a clear acceptance step",
        paragraphs: [
          "An order being submitted is different from a restaurant agreeing to prepare it. Define the statuses the team needs: waiting for acceptance, accepted, preparing, ready, collected, delivered, or cancelled. The exact labels can differ, but the customer and each staff role should understand what the current state means and who is responsible for changing it.",
          "Rehearse an unavailable item and a restaurant that does not respond. Decide whether staff contact the customer, offer a change, cancel the order, or take another action. Record when payment is collected and how a cancellation reaches the accounts team. A short exception process is more useful at launch than a dashboard filled with unexplained status counts.",
        ],
      },
      {
        id: "payment-and-refunds", title: "Confirm payments without relying on the success page",
        paragraphs: [
          "Payment and order preparation need a consistent handoff. A customer can pay and then close the browser before reaching a confirmation page. Staff should still be able to locate the payment and understand whether the order should move forward. Agree the refund owner and the record used to connect a provider transaction with an order.",
          "Stripe's fulfillment guidance recommends server-side payment events and handling repeated calls without fulfilling the same payment twice. Use that as an acceptance question for the selected provider, not as an assumption that Stripe is automatically included. Test a repeated notification, an interrupted checkout, and a cancelled order with the integration proposed for the launch.",
        ],
        source: { href: "https://docs.stripe.com/checkout/fulfillment?ui=full-page", label: "Stripe: payment confirmation and fulfillment without duplicate processing" },
      },
      {
        id: "delivery-handoff", title: "Test the handoff from restaurant to delivery partner",
        paragraphs: [
          "A driver needs the correct restaurant pickup, collection instructions, destination, and order reference. The restaurant needs to know that the right order was collected. Agree how the operator handles a late pickup, an unreachable customer, or a delivery outside the normal flow. Keep the team's ability to explain an order separate from a moving map marker.",
          "Run a rehearsal with the people who will accept, prepare, collect, and support orders. Compare timestamps and statuses after a delayed collection or an app reconnect. If the business uses an outside courier service, confirm that integration and its failure process explicitly. A delivery interface shown in the catalog does not decide which external courier the business will use.",
        ],
      },
      {
        id: "first-launch", title: "Launch with a practical restaurant and operator checklist",
        paragraphs: [
          "Before release, prepare the menu owners, restaurant contacts, support coverage, payment checks, and delivery boundaries. Place a controlled order from discovery through completion and a second order through cancellation or refund. Have the restaurant and operator find both records independently so they can use the system without a developer guiding each click.",
          "Food delivery platform pricing is on request. A proposal should identify the customer channels, restaurant tools, operator administration, delivery setup, branding, integrations, and support. Use the live Foodie examples to discuss what fits the existing product and what requires additional work. Agree the delivery plan after those requirements are clear.",
        ],
      },
    ],
    checklist: [
      { title: "Prepare restaurant data", text: "Confirm menus, options, hours, service areas, and the person maintaining each menu." },
      { title: "Follow one order", text: "Review customer checkout, restaurant acceptance, preparation, and collection." },
      { title: "Check money and exceptions", text: "Test payment recovery, unavailable items, cancellations, refunds, and failed delivery." },
      { title: "Agree the release scope", text: "Confirm web or mobile builds, payment and courier integrations, staff training, and support." },
    ],
    faqs: [
      { q: "Can the platform serve a restaurant group as well as a marketplace?", a: "Discuss the restaurant structure, ordering channels, service areas, and operating rules in a walkthrough. The proposal should identify the setup and changes for that model." },
      { q: "Which Foodie examples can I try?", a: "The customer ordering website, restaurant panel, and platform admin demo are linked near the top of this guide. Ask for the relevant mobile or delivery builds if those are required." },
      { q: "Are payment and delivery integrations included automatically?", a: "Confirm the providers and workflows in the quote. Screens and public demos establish the product reference, while specific provider integrations and release work need an agreed scope." },
    ],
  },
  {
    platformId: "appointment-booking",
    slug: ADDITIONAL_PLATFORM_GUIDE_SLUGS["appointment-booking"],
    title: "Appointment Booking Software: Services, Staff Calendars, and Availability",
    seoTitle: "Appointment Booking Software: Staff Calendar & Launch Guide",
    description: "Plan appointment booking software around service duration, staff availability, time zones, cancellations, and payments. Explore customer and business desk demos.",
    intro: "Online booking works when the slot a customer chooses matches the time the business can actually provide. Start with services, staff, working hours, and the rules for changing a booking, then test the customer experience alongside the staff calendar.",
    datePublished: "2026-11-23",
    tags: ["Appointments", "Staff Calendars", "Booking Software"],
    sections: [
      {
        id: "service-rules", title: "Define services before opening the calendar",
        paragraphs: [
          "List the services customers can book, their durations, where they take place, and which staff can provide them. A salon treatment, a studio session, and a consultation may all use time slots but have different preparation and cleanup needs. Decide whether staff can deliver overlapping services or whether a room or shared resource also limits availability.",
          "Write down working hours, days off, booking notice, and any time needed between appointments. Treat these as requirements for the walkthrough instead of assuming a generic calendar covers them. Start with the services and rules needed for the first location; add other locations only when their hours, staff assignments, and reporting needs are understood.",
        ],
      },
      {
        id: "customer-to-desk", title: "Follow a booking from the customer to the business desk",
        paragraphs: [
          "The appointment platform reference has a customer web experience and a business desk. Customers browse businesses and services and choose a booking time. The business desk provides appointment lists, staff calendar views, status filters, and reporting. Follow the same booking through both experiences to see whether staff have the information needed to deliver the service.",
          "Review this on the devices the team will use. A customer might book on a phone while a receptionist manages the day on a desktop. The public examples are web apps. If native iOS or Android apps, specialist equipment, or another system must be part of the launch, identify that as a separate deliverable in the proposal.",
        ],
      },
      {
        id: "availability-and-time-zones", title: "Make availability and time zones explicit",
        paragraphs: [
          "Choose the time zone used by each location and decide how it is presented to a customer booking from somewhere else. Check that the confirmation, staff view, and any reminder refer to the same appointment. Test a time change and a staff absence rather than checking only an ordinary day with an empty calendar.",
          "Google Calendar's Freebusy API is an example of an external service that returns busy intervals for calendars and allows a response time zone. Reading those intervals is only one part of a booking design. The application must still apply service rules and confirm a slot safely when two people request the same time. External calendar synchronization should be demonstrated and scoped if required.",
        ],
        source: { href: "https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query", label: "Google Calendar: busy intervals and time-zone handling" },
      },
      {
        id: "changes-and-no-shows", title: "Give rescheduling and cancellation a clear path",
        paragraphs: [
          "Decide who can change a booking and how much notice is needed. A customer cancellation should free the right slot, update staff views, and follow the agreed payment process. A staff absence may require contacting several customers, so rehearse how the team finds the affected bookings and records each outcome.",
          "Ask how the business will distinguish a cancellation, a rescheduled appointment, and a no-show in reports. Confirm any reminder channels and their costs separately. A message view in a dashboard does not automatically establish an SMS or WhatsApp integration, delivery monitoring, or a particular notification schedule.",
        ],
      },
      {
        id: "payments-and-access", title: "Keep booking status, payment, and staff access aligned",
        paragraphs: [
          "Agree whether payment is taken during booking, as a deposit, or after the service. Staff should be able to explain whether a booking is confirmed and whether money is still due. Rehearse a refund or an interrupted payment using the provider included in the scope, and decide who has permission to make adjustments.",
          "Give each team role the access needed for its work. A person managing the day may need appointment details while a manager needs broader reports. If the business operates in a specialist sector, list additional records and integrations explicitly. This reference concerns appointment booking and business operations; specialist workflows should be reviewed on their own requirements.",
        ],
      },
      {
        id: "booking-launch-tests", title: "Run a booking rehearsal with real staff schedules",
        paragraphs: [
          "Set up representative services and a working week, then book from a phone. Include a service near closing time, two requests for the same slot, a staff member becoming unavailable, and a customer moving an appointment. Check the resulting calendar, payment information, and appointment list after each case.",
          "Appointment software pricing is on request. Bring the locations, staff roles, service rules, payment needs, and calendar integrations to a walkthrough. The proposal should explain which workflows fit the existing platform, which require configuration or custom work, and what staff will receive at handover.",
        ],
      },
    ],
    checklist: [
      { title: "Map the services", text: "List duration, eligible staff, working hours, locations, and resource requirements." },
      { title: "Check availability", text: "Test time zones, unavailable staff, closing times, and competing booking requests." },
      { title: "Rehearse changes", text: "Follow a cancellation, reschedule, payment adjustment, and staff absence." },
      { title: "Prepare staff access", text: "Confirm roles, calendar integrations, communications, training, and the quote." },
    ],
    faqs: [
      { q: "Can the booking platform work for salons, clinics, and studios?", a: "The reference supports service-business appointment booking. The fit depends on services, staff, locations, scheduling rules, and any specialist requirements agreed in the proposal." },
      { q: "Does a calendar view guarantee that double booking is prevented?", a: "A calendar view alone does not demonstrate concurrency handling. Ask the supplier to test two booking attempts for the same constrained slot and show the resulting customer and staff records." },
      { q: "Do I need native mobile apps for the first release?", a: "The public customer and business desk examples run on the web. Review those on a phone first, then decide whether native apps justify a separate scope and release process." },
    ],
  },
  {
    platformId: "real-estate",
    slug: ADDITIONAL_PLATFORM_GUIDE_SLUGS["real-estate"],
    title: "How to Plan a Real Estate Listing Website That Brings Useful Inquiries",
    seoTitle: "Real Estate Listing Website: Property Pages & Lead Generation",
    description: "Plan property search, useful listing pages, photos, inquiry forms, and lead follow-up. Explore real estate platform screens and a practical website checklist.",
    intro: "A useful real estate website helps a visitor understand a property and take a relevant next step. Start with accurate listing information, clear search choices, and an inquiry that reaches the person responsible for that property or service.",
    datePublished: "2026-11-23",
    tags: ["Real Estate", "Property Listings", "Lead Generation"],
    sections: [
      {
        id: "property-audiences", title: "Choose the property types and visitor journeys",
        paragraphs: [
          "Decide whether the site focuses on plots, farmhouses, rental properties, projects, or a defined mix. A visitor searching for a home and a landholder proposing a development have different questions. Give them clear entry points rather than making every form ask for the same generic message.",
          "The Aurum Estates reference includes property discovery, land listing and selling inquiries, agent discovery, and information for prospective partners. Use those journeys to discuss the business model. Agree which listing types, inquiry destinations, and administration tools belong in the first version instead of treating every visible program as a transaction-processing product.",
        ],
      },
      {
        id: "listing-information", title: "Give each listing enough information to support a decision",
        paragraphs: [
          "Prepare a consistent record for each listing: property type, location, size and units, availability, useful photos, the business contact, and the details visitors need before requesting a visit. If the public price is withheld, explain how to request it. Keep claims tied to information the business can maintain and substantiate.",
          "Give staff an owner and an update process for each property. An inquiry about an unavailable listing wastes time for both parties. Decide how a property is marked unavailable or archived and which alternative, if any, is useful to the visitor. A deliberate lifecycle is better than leaving every listing permanently described as new.",
        ],
      },
      {
        id: "photos-and-discovery", title: "Use helpful photos and discoverable property pages",
        paragraphs: [
          "Use photos that explain the property and its surroundings. Choose images the business has permission to publish and keep their descriptions factual. Put important property information in the page itself, with normal links from relevant categories and locations, so the visitor is not forced to infer everything from a gallery.",
          "Google's image guidance recommends descriptive filenames, useful alternative text, and images near relevant content. Apply those ideas to listing photos without repeating location keywords in every description. Compress images and reserve their display space. These steps improve the page experience and discoverability, but do not promise an image preview or a particular search position.",
        ],
        source: { href: "https://developers.google.com/search/docs/appearance/google-images", label: "Google Search Central: descriptive images, page context, and discovery" },
      },
      {
        id: "inquiries-and-routing", title: "Make each inquiry useful to the sales team",
        paragraphs: [
          "Capture the property or program reference with the inquiry so staff know what the visitor was viewing. Ask only for information needed for the next conversation, such as a contact method, the type of interest, and a preferred time to talk. If a form is for land listing rather than buying, ask the questions that support that specific follow-up.",
          "Choose where the inquiry is stored, who is notified, and how someone takes ownership. Test that a submitted form reaches the agreed destination with its source page intact. If WhatsApp is a contact option, include useful context in the message and give staff a way to track the conversation outcome alongside form inquiries.",
        ],
      },
      {
        id: "content-and-lead-quality", title: "Publish guides that answer the next real question",
        paragraphs: [
          "Supporting content should help the audience understand a location, property type, viewing process, or the information the business will request. Start with questions staff repeatedly answer and use appropriate local expertise for specialist topics. Avoid publishing many near-identical location pages whose only difference is a place name.",
          "Measure inquiries in context. A form submission is not automatically a suitable buyer or a completed deal. Record whether staff could contact the person, identify a relevant property or service, arrange a next step, and explain why an inquiry was unsuitable. That feedback helps improve listing information and forms without promising a fixed number of leads.",
        ],
      },
      {
        id: "property-launch-checks", title: "Review the screens and scope the first release",
        paragraphs: [
          "The real estate reference currently has screenshots rather than a public demo link. Use them to discuss property discovery and landholder or partner inquiries, then request a guided walkthrough. Ask to see the proposed administration and inquiry handling before agreeing the deliverables.",
          "Pricing is on request. Bring sample property records, photos, search requirements, inquiry owners, and any CRM integration needs. Agree the content responsibilities, release checks, support, and delivery plan in the quote. Test the first listing and its inquiry on a phone before adding the full catalog.",
        ],
      },
    ],
    checklist: [
      { title: "Prepare property records", text: "Confirm categories, factual details, availability, images, and the listing owner." },
      { title: "Review search and pages", text: "Check a visitor can find a listing, understand it, and reach a relevant contact." },
      { title: "Follow an inquiry", text: "Verify its property context, storage, notification, owner, and response process." },
      { title: "Agree the handover", text: "Confirm administration, content updates, integrations, support, and the quote." },
    ],
    faqs: [
      { q: "Should property pages use an inquiry form or WhatsApp?", a: "Both can serve different visitors. Preserve the property context and define how staff record ownership and follow-up for either channel." },
      { q: "Can I try an Aurum Estates public demo?", a: "The catalog currently provides screenshots without a public demo URL. Request a guided walkthrough to review the proposed property and inquiry workflows." },
      { q: "Does publishing more property content guarantee more leads?", a: "No. Use accurate listings and content that answers relevant questions, then measure contactable inquiries and their next steps. Search visibility and buyer demand vary." },
    ],
  },
  {
    platformId: "solar-crm",
    slug: ADDITIONAL_PLATFORM_GUIDE_SLUGS["solar-crm"],
    title: "Solar CRM Workflow: From the First Lead to Installation and After-Sales",
    seoTitle: "Solar CRM Workflow: Leads, Surveys, Quotes & Installations",
    description: "Plan a solar CRM workflow for leads, site surveys, quotations, installations, subsidy follow-ups, and after-sales. Explore the product demo and handoff checklist.",
    intro: "A solar business needs to know more than whether a lead is open or won. Sales, survey, installation, and service teams need a shared record of what has been promised, what has been checked, and who should act next.",
    datePublished: "2026-11-23",
    tags: ["Solar CRM", "Site Surveys", "Installation Workflow"],
    sections: [
      {
        id: "lead-stages", title: "Make lead stages represent real work",
        paragraphs: [
          "Start with how an inquiry reaches the business and the action needed to move it forward. Record the source, contact details, service area, responsible person, and next follow-up. Stages should help staff distinguish a new inquiry from a contacted prospect, a survey-ready project, or a quotation waiting for a decision.",
          "The solar CRM reference includes kanban and list views with search and source filters. Use the demo to review whether those views match the team's daily questions. Agree who owns unassigned leads and how an overdue follow-up is handled. Adding more columns does not improve the pipeline if no one knows the action required to leave a stage.",
        ],
      },
      {
        id: "site-survey", title: "Turn the survey into a useful handoff",
        paragraphs: [
          "A survey record should help the next person understand the site, the visit, and any information still needed. Agree the technician assignment, appointment details, required notes or attachments, and who reviews the result. Keep survey completion separate from approval of a final system design or a promise about project performance.",
          "PVWatts describes its results as preliminary electricity-generation estimates based on model inputs. Treat an estimate as supporting information with recorded assumptions, not a substitute for a site review or a guaranteed production figure. If a calculation tool or external design system needs to connect to the CRM, scope that integration explicitly.",
        ],
        source: { href: "https://pvwatts.nlr.gov/docs/help_about.php", label: "PVWatts: preliminary production estimates and model inputs" },
      },
      {
        id: "quotation-handoff", title: "Connect quotations to the survey and customer decision",
        paragraphs: [
          "Record which survey information a quotation uses, what was offered, and what the customer accepted. Give staff a way to distinguish a draft, a revised proposal, an accepted quotation, and an older version. A clear version and decision record prevents the installation team from acting on a superseded conversation.",
          "The reference includes quotations and follow-ups. Review those workflows in a walkthrough with a representative customer journey. Agree required fields, document templates, approval steps, and any accounting connection before implementation. The CRM quote should identify changes needed to fit the business rather than assuming every document and approval rule is standard.",
        ],
      },
      {
        id: "installation-milestones", title: "Give installation milestones an owner and evidence",
        paragraphs: [
          "Define the stages the operations team actually uses: preparation, material readiness, scheduled work, installation progress, inspection or handover as applicable, and outstanding actions. Each milestone should answer who is responsible, what is due, and what information lets the next team continue. Adapt the stages to the business instead of copying a generic project board.",
          "The solar CRM screens show installation projects and progress tracking. Rehearse a delayed material, a rescheduled visit, and a project handed from sales to operations. Confirm how the team records an exception and returns it to the right owner. Any automated stock reservation, supplier, or scheduling integration should be demonstrated as part of the agreed scope.",
        ],
      },
      {
        id: "subsidy-and-service", title: "Keep status tracking separate from external submissions",
        paragraphs: [
          "Subsidy and net-meter follow-ups often involve information outside the sales team. Define the records staff need: the relevant reference, current status, required documents, owner, and next check. Status tracking in a CRM and submitting to an external portal are different workflows, so confirm any automatic synchronization or submission as a specific integration.",
          "After handover, keep the operational context useful to the service team. Agree how staff find installation information, payments, open issues, and later visits. Decide which reports the sales and operations managers need and what records support them. A dashboard total is useful only when the team can explain which projects it includes.",
        ],
      },
      {
        id: "solar-crm-rollout", title: "Start with one complete project journey",
        paragraphs: [
          "Run a sample inquiry through contact, survey, quotation, installation milestones, and an after-sales follow-up. Have different team members perform their own steps so the handoffs are tested. Bring any spreadsheet fields and existing records the team needs to preserve, and agree how they will be imported or kept accessible.",
          "Solar CRM pricing is on request. Share the users and roles, lead stages, survey fields, quotation process, installation workflow, reports, and integrations needed. Use the live demo to identify a practical first version, then agree data preparation, deployment, staff training, support, and delivery dates in the proposal.",
        ],
      },
    ],
    checklist: [
      { title: "Map the pipeline", text: "Assign lead stages, owners, sources, next actions, and follow-up responsibilities." },
      { title: "Rehearse the survey", text: "Confirm assignments, site records, required information, and review ownership." },
      { title: "Follow the project", text: "Link quotation decisions to installation milestones, exceptions, and handover." },
      { title: "Plan service and integrations", text: "Agree status tracking, external connections, data migration, reports, and support." },
    ],
    faqs: [
      { q: "What makes a solar CRM different from a general sales pipeline?", a: "The workflow extends beyond selling to surveys, quotations, installation projects, and after-sales. Review how information passes between those teams, not only how leads move across columns." },
      { q: "Does the reference automatically submit subsidy applications?", a: "The published reference shows subsidy and net-meter status tracking. Any external portal submission or automatic synchronization needs separate confirmation and scope." },
      { q: "Can existing spreadsheet records be moved into the CRM?", a: "Bring sample files and the fields that matter to the team. Data mapping, imports, history, and validation should be reviewed and quoted as part of the deployment requirements." },
    ],
  },
];

export function businessPlatformGuide(platformId: AdditionalPlatformId): BusinessPlatformGuide {
  const guide = BUSINESS_PLATFORM_GUIDES.find(item => item.platformId === platformId);
  if (!guide) throw new Error(`Missing business platform guide: ${platformId}`);
  return guide;
}
