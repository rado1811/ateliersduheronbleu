export const selectAteliers = (ateliers) => ({
  type: 'ATELIERS_SELECTED',
  ateliers,
});


export default (async function addParticipants(values) {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
/*   return {
    type: 'PARTICIPANT_POST',
    payload: event,
  }; */
// alert(JSON.stringify(values));

/*   fetch('/client/participants', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(this.state),
  }).then((res) => res.json()); */
/*     .then(
      (res) =>
        this.setState({
        }),
      (err) =>
        this.setState({
        })
    ) */
