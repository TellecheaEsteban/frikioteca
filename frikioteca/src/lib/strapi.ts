const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export function query(url: string) {
  return fetch(`http://localhost:1337/api${url}`, {
    headers: {
      Authorization: `Bearer e7c54207d5d43bdb60fef0ee5d2ebf856378e82b4b3b29db174d93a38604f3698380c32348e142958a590dff5dad80707e411ea46f643a234d368774e5b950b2bad4ddac1515e60683acc2998864b980829f5cb9c18586a1beb78d8c15779c1c276af361288136d98025ee488d411733ed34de60930f6ca70f6f27588cee2604`,
    },
  }).then((res) => res.json());
}
