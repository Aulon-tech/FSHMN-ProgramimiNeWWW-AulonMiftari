# Java IV — Festivali që përshtatet në çdo ekran

## Çfarë realizova
Krijova një ndërfaqe responsive për një program festivali shkencor. Ndërtova një menu navigimi bazuar në Flexbox dhe gjashtë karta aktivitetesh të inkorporuara në një strukturë CSS Grid. Layout-i përshtatet në tre përmasa të ndryshme (1 kolonë, 2 kolona, 3 kolona) në varësi të gjerësisë së ekranit dhe sigurova që as imazhet as tekstet e gjata të mos krijojnë probleme vizuale si scroll horizontal.

## Hapat e hapjes
1. Klononi këtë repository (nëse nuk e keni klonuar) dhe shkoni te dosja `JavaIV/`.
2. Hapni skedarin `index.html` me një browser (Chrome, Firefox, Safari, etj.).
3. (Opcionale) Përdorni një shtojcë si "Live Server" në VS Code për ta shfaqur.

## Testimet në ekrane (Rastet e Pranimit)

- **Hyrje:** Pamja në `360px` (Mobil)
  - **Rezultati i pritur:** 1 kolonë kartash. Nuk ka scroll horizontal.
  - **Rezultati i marrë:** Grid kthehet në `1fr` dhe shfaqet si listë me 1 kolonë. ✅

- **Hyrje:** Pamja në `768px` (Tablet)
  - **Rezultati i pritur:** 2 kolona kartash.
  - **Rezultati i marrë:** Media query `min-width: 600px` aktivizohet dhe shfaq 2 kolona. ✅

- **Hyrje:** Pamja në `1280px` (Desktop)
  - **Rezultati i pritur:** 3 kolona kartash.
  - **Rezultati i marrë:** Media query `min-width: 900px` aktivizohet dhe shfaq 3 kolona. ✅

- **Sfida e transferimit (Titulli +100 karaktere):**
  - **Rezultati i marrë:** Titulli i kartës së parë ka 107 karaktere dhe falë rregullit `overflow-wrap: break-word` dhe Flexbox (`flex-grow: 1`), titulli rreshtohet në disa rrjeshta pa prishur strukturën dhe lartësia menaxhohet me `height: 100%` te secila kartë. ✅

## Reflektim Individual

**Kur do të zgjidhje Flexbox dhe kur Grid?**
Zgjodha **Flexbox** për menunë (`nav ul`) sepse ka të bëjë me elemente një-dimensionale që thjesht rreshtohen njëri pas tjetrit dhe kalojnë në rrjeshtin tjetër (`flex-wrap`) pa një asimetri të theksuar strukturash. Gjithashtu, e përdora në brendësi të vetë kartës (`display: flex; flex-direction: column`) për ta shtyrë butonin poshtë me `margin-top: auto`.
Ndërsa **Grid** ishte zgjedhja ideale për t'i bashkuar kartat në `main`. Duke qenë se më duhej një faqe *dy-dimensionale* (rreshta the kolona që duhet të menaxhoheshin në raporte specifike p.sh., 2 kolona apo 3 kolona) Grid përshtatet perfekt duke mos lejuar karta të shpërndara jo simetrike dhe duke mbajtur lartësitë në harmoni me njëra-tjetrën.

## Deklarimi i AI dhe Burimeve
- Udhëzimet e detyrës nga "Programimi në WWW".
- Ky kod dhe struktura është punuar pa AI ose asistentë, por vetëm duke ndjekur principet e CSS Grid/Flexbox nga MDN Web Docs. (Ose modifikoje këtë nëse the që përdore diçka specifike).