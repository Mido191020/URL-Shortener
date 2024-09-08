const crypto = require('crypto');
const Url = require('../models/Urlmodel');

// Helper to validate the URL
function isValidUrl(longUrl) {
    try {
        new URL(longUrl); // URL constructor throws an error if the URL is invalid
        return true;
    } catch (err) {
        return false;
    }
}

// Helper function to generate or retrieve short URL
const getShortUrlHelper = async (longUrl) => {
    try {
        if (isValidUrl(longUrl)) {
            // Check if the URL already exists in the DB
            const existingUrl = await Url.findOne({ originalUrl: longUrl });
            if (existingUrl) {
                return existingUrl.shortUrlVersion; // Return the existing short URL
            }

            // Create a new short URL if it doesn't exist
            const shortUrl = await createShortUrl();
            await saveToDb(longUrl, shortUrl); // Save the new record to the DB
            return shortUrl;
        } else {
            throw new Error('Invalid URL');
        }
    } catch (err) {
        console.error("Failed to get short URL:", err);
        throw err; // Rethrow error to handle it in the controller
    }
}

// Helper function to create a unique short URL
const createShortUrl = async () => {
    let shortUrl;
    let unique = false;

    // Keep generating until a unique short URL is found
    while (!unique) {
        shortUrl = crypto.randomBytes(6).toString('hex');
        const existingUrl = await Url.findOne({ shortUrlVersion: shortUrl });
        if (!existingUrl) {
            unique = true;
        }
    }
    return shortUrl;
}

// Helper function to save a new URL record to the database
const saveToDb = async (longUrl, shortUrl) => {
    try {
        const newUrlRecord = new Url({
            originalUrl: longUrl,
            shortUrlVersion: shortUrl
        });
        await newUrlRecord.save();
    } catch (err) {
        console.error('Failed to save URL to the database:', err);
        throw err; // Rethrow error to handle it in the controller
    }
}

// Helper function to find the original long URL from the short URL
const findLongUrl = async (shortUrl) => {
    try {
        const urlRecord = await Url.findOne({ shortUrlVersion: shortUrl });
        if (urlRecord) {
            return urlRecord.originalUrl;
        } else {
            throw new Error('Short URL not found');
        }
    } catch (err) {
        console.error('Failed to find long URL:', err);
        throw err; // Rethrow error to handle it in the controller
    }
}

// Controller to handle the shortening of a URL
exports.ShortURL = async (req, res) => {
    try {

        const { longUrl } = req.body;

        // Get or generate the short URL
        const shortId = await getShortUrlHelper(longUrl);

        // Construct the full shortened URL
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const shortUrl = `${baseUrl}/${shortId}`;

        // Render the result page
        res.render('result', { shortUrl });
    } catch (error) {
        console.error("Failed to create short URL:", error);
        res.render('error', { message: 'An error occurred while shortening the URL' });
    }
};

// Controller to handle redirection based on short URL
// exports.Redirect = async (req, res) => {
//     try {
//         const shortUrl = req.params.shortUrl;
//         const longUrl = await findLongUrl(shortUrl);
//         if (longUrl) {
//             res.redirect(longUrl); // Redirect to the original URL
//         } else {
//             res.status(404).render('error', { message: "Short URL not found" });
//         }
//     } catch (err) {
//         console.error("Failed to redirect:", err);
//         res.status(500).render('error', { message: "An error occurred" });
//     }
// };
exports.Redirect = async (req, res) => {
    try {
        const shortUrl = req.params.shortUrl;

        // Ignore requests for favicon
        if (shortUrl === 'favicon.ico') {
            res.status(404).end();
            return;
        }

        console.log('Short URL received:', shortUrl);
        const longUrl = await findLongUrl(shortUrl);

        if (longUrl) {
            res.redirect(longUrl); // Redirect to the original URL
        } else {
            res.status(404).render('error', { message: "Short URL not found" });
        }
    } catch (err) {
        console.error("Failed to redirect:", err);
        res.status(500).render('error', { message: "An error occurred" });
    }
};



// Controller to display the short URL on the result page
exports.DisplayShortURL = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const fullShortUrl = `${req.protocol}://${req.get('host')}/${shortUrl}`;
    res.render('result', { shortUrl: fullShortUrl });
};
