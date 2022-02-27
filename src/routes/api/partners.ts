import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const post = async ({ request }) => {
	const file = await request.body;
    const route = path.join('temp', crypto.randomBytes(16).toString('hex') + '.txt');

    fs.writeFileSync(route, file.read().toString())

    const stream = fs.createReadStream(route)

    const buffers = await new Promise((resolve, reject) => {
        let result = []

        stream.on('data', (chunk) => {
            result = chunk.toString().split('\n')
        })

        stream.on('error', (err) => {
            reject(result)
        })
        
        stream.on('end', () => {
            resolve(result)
        })
    });

    // file is piped into an array, no point in keeping it
    fs.unlinkSync(route)

	return {
        ok: true,
        body: buffers
    };
};