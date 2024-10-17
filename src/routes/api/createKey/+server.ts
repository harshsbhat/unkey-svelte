import type { RequestHandler } from '@sveltejs/kit';
import { unkey } from '../unkey';
import { UNKEY_API_ID } from '$env/static/private';

export const GET: RequestHandler = async () => {
    const apiId = UNKEY_API_ID;
    const prefix = "svelte"; 

    try {
        const created = await unkey.keys.create({
            apiId: apiId, 
            prefix: prefix 
        });

        return new Response(JSON.stringify(created.result?.key), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error creating key:', error);
        return new Response(JSON.stringify({ error: 'Failed to create key' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
