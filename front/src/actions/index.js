const REQUEST_POSTS = 'REQUEST_POSTS';

export const selectAteliers = (ateliers) => ({
  type: 'ATELIERS_SELECTED',
  ateliers,
});

export default (async function addParticipants(values) {
  window.alert(`${JSON.stringify(values, null, 2)} et ${values.email}`);
  fetch('/client/participants', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((res) => {
      return {
        type: REQUEST_POSTS,
        values,
      };
    });
});

