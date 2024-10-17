import type { RequestHandler } from '@sveltejs/kit';
import { verifyKey } from '@unkey/api';
import { UNKEY_API_ID } from '$env/static/private';

export const GET: RequestHandler = async ({ request }) => {
    const apiId = UNKEY_API_ID;
    const apiKey = request.headers.get('Authorization')?.split(' ')[1];

    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'API key is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    try {
        const { result, error } = await verifyKey({
            key: apiKey,
            apiId: apiId,
        });

        if (error) {
            console.error('Error verifying key:', error.message);
            return new Response(JSON.stringify({ error: 'Verification failed', docs: error.docs }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        if (!result.valid) {
            return new Response(JSON.stringify({ error: 'Invalid API key' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        console.log('Key is valid:', result);

        return new Response(JSON.stringify({ message: 'Key is valid', data: result }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error('Unexpected error:', err);
        return new Response(JSON.stringify({ error: 'Unexpected error occurred' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
