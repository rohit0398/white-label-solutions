# Marketing message resources

`en.json` is the source copy for the shared marketing components. Spanish, German,
French, and Hindi use the same immutable message IDs. IDs name the original
section/meaning and include a stable suffix; keep an ID when editing its wording.
Do not key messages by array position.

Use `englishMessage(id)` for component defaults and data, `useMessages()` in Client
Components, and `createLocalizer(language, getLocaleMessages(language))` in Server
Components. Format full sentences with `.format(id, { value0, value1 })` instead of
concatenating translated fragments. Prices use `{price:package-id}` and come from
`pricing-catalog.ts`. Never put translated numeric commercial prices in these files.

Only the selected locale dictionary is passed to the browser. There is no runtime
translation request. `npm run i18n:check` also runs before production builds and
rejects missing messages, altered interpolation tokens, identity-name changes and
new unkeyed UI copy in the shared component scope. Missing message IDs throw;
they do not substitute English.

The initial expanded dictionaries are draft translations, with technical glossary,
placeholder, commercial-scope, and rendered-UI checks. They have not received native
speaker editorial approval. Review language fluency and domain terminology before
multilingual release sign-off. Screenshots/video may show the original application;
captions and controls are localized. English-only destination pages are marked at
their links. User names, email addresses, demo credentials, URLs and commercial
amounts are not translated.
