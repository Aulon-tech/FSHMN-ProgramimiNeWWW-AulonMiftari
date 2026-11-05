// Logjika e kalkulatorit, pa varësi nga DOM.

const numerIFundem = (x) => typeof x === "number" && Number.isFinite(x);

export function llogarit(cmimi, persona, buxheti) {
  // Validimi: vetëm numra të fundëm (jo "5", null, NaN, Infinity).
  if (!numerIFundem(cmimi) || cmimi < 0) {
    return { ok: false, error: "Çmimi duhet të jetë numër i fundëm >= 0." };
  }
  if (!numerIFundem(buxheti) || buxheti < 0) {
    return { ok: false, error: "Buxheti duhet të jetë numër i fundëm >= 0." };
  }
  if (!Number.isInteger(persona) || persona < 1 || persona > 5) {
    return { ok: false, error: "Personat duhet të jenë numër i plotë nga 1 deri në 5." };
  }

  // Punojmë në centë (numra të plotë) për të shmangur gabimet e floating point.
  const cmimiCente = Math.round(cmimi * 100);
  const buxhetiCente = Math.round(buxheti * 100);
  const totalCente = cmimiCente * persona;
  const mbetjaCente = buxhetiCente - totalCente;

  return {
    ok: true,
    total: totalCente / 100,
    mbetja: mbetjaCente / 100,
    brenda: totalCente <= buxhetiCente, // true edhe kur total === buxheti
  };
}

// Testet: normal, kufi, tejkalim, hyrje negative dhe NaN.
// Thirren nga faqja; rezultati shfaqet në konsolën e shfletuesit.
export function ekzekutoTestet() {
  const rastet = [
    ["normal", llogarit(3, 2, 20), { ok: true, total: 6, mbetja: 14, brenda: true }],
    ["kufi total = buxhet", llogarit(4, 5, 20), { ok: true, total: 20, mbetja: 0, brenda: true }],
    ["kufi 0.1 x 3 = 0.3", llogarit(0.1, 3, 0.3), { ok: true, total: 0.3, mbetja: 0, brenda: true }],
    ["tejkalim", llogarit(4.5, 5, 20), { ok: true, total: 22.5, mbetja: -2.5, brenda: false }],
    ["çmim negativ", llogarit(-1, 2, 20).ok, false],
    ["buxhet negativ", llogarit(1, 2, -20).ok, false],
    ["persona negative", llogarit(1, -2, 20).ok, false],
    ["çmim NaN", llogarit(NaN, 2, 20).ok, false],
    ["persona NaN", llogarit(1, NaN, 20).ok, false],
    ["buxhet NaN", llogarit(1, 2, NaN).ok, false],
    ["persona = 0", llogarit(1, 0, 20).ok, false],
    ["persona = 6", llogarit(1, 6, 20).ok, false],
    ["persona = 2.5", llogarit(1, 2.5, 20).ok, false],
    ["string '4'", llogarit("4", 2, 20).ok, false],
    ["null", llogarit(4, 2, null).ok, false],
    ["çmim 0 është valid", llogarit(0, 3, 0), { ok: true, total: 0, mbetja: 0, brenda: true }],
  ];
  let kaluan = 0;
  for (const [emri, real, pritur] of rastet) {
    const mire = JSON.stringify(real) === JSON.stringify(pritur);
    if (mire) kaluan++;
    console.log(`${mire ? "✔" : "✘"} ${emri}`);
  }
  console.log(`${kaluan}/${rastet.length} teste kaluan`);
  return kaluan === rastet.length;
}