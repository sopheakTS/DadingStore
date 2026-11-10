export default async function handler(req, res) {
    const sheetUrl = process.env.SHEET_CSV_URL;
    
    if (!sheetUrl) {
        return res.status(500).json({ error: 'SHEET_CSV_URL is not defined in environment variables' });
    }

    try {
        const response = await fetch(sheetUrl);
        const data = await response.text();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Google Sheets' });
    }
}
