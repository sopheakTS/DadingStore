export default async function handler(req, res) {
    const sheetUrl = process.env.SHEET_CSV_URL;

    try {
        const response = await fetch(sheetUrl);
        const data = await response.text();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
