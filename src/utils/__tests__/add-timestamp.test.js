import moment from 'moment';
import addTimestamp from '../add-timestamp';

describe('addTimestamp', () => {
  describe('When given an array of event objects', () => {
    it('adds a timestamp to each event object', () => {
      const events = [{ hitType: 'pageview', page: '/home' }];

      const result = addTimestamp(events);

      const timestamp = result[0].timeSaved;
      /* eslint-disable no-restricted-globals */
      expect(isNaN(timestamp)).toBe(false);
      expect(moment(timestamp).fromNow()).toEqual('a few seconds ago');
    });

    it('leaves the rest of the event intact', () => {
      const events = [{ hitType: 'pageview', page: '/home' }];

      const resultingEvent = addTimestamp(events)[0];

      expect(resultingEvent.hitType).toBe('pageview');
      expect(resultingEvent.page).toBe('/home');
    });
  });
});
