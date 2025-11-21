// api/gram-altin.js
export default async function handler(req, res) {
  // CORS serbest
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    // Genelpara'dan altın JSON'unu çek
    const upstream = await fetch("https://api.genelpara.com/embed/altin.json");
    if (!upstream.ok) {
      return res.status(500).json({ error: "upstream_error" });
    }

    const data = await upstream.json();

    // GA.satis: "2550,50" gibi geldiği için sayıya çeviriyoruz
    const satis = parseFloat(String(data.GA.satis).replace(",", "."));

    return res.status(200).json({ satis });
  } catch (e) {
    console.error("Gram altın proxy hatası:", e);
    return res.status(500).json({ error: "failed" });
  }
}
