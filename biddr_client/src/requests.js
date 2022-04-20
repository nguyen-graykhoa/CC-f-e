const baseUrl = 'http://localhost:3000/api/v1';

export const Auction = {
    index() {
        return fetch(`${baseUrl}/auctions`).then((res) => res.json());
    },
    show(id) {
        return fetch(`${baseUrl}/auctions/${id}`).then((res) => res.json());
    },
    create(params) {
        return fetch(`${baseUrl}/auctions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
            credentials: 'include',
        }).then((res) => res.json());
    },
};

export const Bid = {
    index() {
        return fetch(`${baseUrl}/auctions`).then((res) => res.json());
    },
    create(data) {
        return fetch(`${baseUrl}/auctions/${data.auction_id}/bids`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        }).then((res) => res.json());
    }
}

export const Session = {
  create(params) {
      return fetch(`${baseUrl}/session`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
          credentials: 'include',
      }).then((res) => {
          return res.json();
      });
  },
  destroy() {
      return fetch(`${baseUrl}/session`, {
          method: 'DELETE',
          credentials: 'include',
      }).then((res) => res.json());
  }
};

export const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include',
        }).then((res) => {
            return res.json();
        });
    },
    create(params) {
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: params }),
        }).then((res) => res.json());
    },
};