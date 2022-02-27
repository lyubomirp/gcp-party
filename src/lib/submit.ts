import { partner_store } from '$lib/partner-store';
import { greatCircleDistance } from 'great-circle-distance';

// this action (https://svelte.dev/tutorial/actions) allows us to
// progressively enhance a <form> that already works without JS
export function submit(form: HTMLFormElement) {
	async function handle_submit(e: Event) {
		e.preventDefault();

		const response = await fetch(form.action, {
            method: form.method,
            headers: {
                contentType : "application/octet-stream",
                accept: 'application/json'
            },
            body: form['file'].files[0]
        });

        let partners;

        if(response.ok) {
            partners = await response.json()
            let parsed = {
                eligible: [],
                non_eligible: []
            };

            Object.values(partners).forEach(el => {
                if(el !== '') {
                    const elm = JSON.parse(el)
                    
                    if(calculateDistance(elm.latitude, elm.longitude) <= 100) {
                        parsed.eligible.push(elm);
                        return;
                    }

                    parsed.non_eligible.push(elm)
                }
            })

            partners && partner_store.set(parsed)
        }
	}

	form.addEventListener('submit', handle_submit);

	return {
		destroy() {
			form.removeEventListener('submit', handle_submit);
		}
	};
}

function calculateDistance(lat, lon) {
    return greatCircleDistance({
        lat1: "42.6665921",
        lng1: "23.3517230",
        lat2: lat,
        lng2: lon 
    })
}