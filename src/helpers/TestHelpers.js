const TestHelpers = {
    dummyMatch: {
        params: {
            entry_id: "1",
        },
    },

    dummyHistory: {
        createHref: jest.fn(),
        listen: jest.fn(),
        location: {
            pathname: '/',
        },
    },

    entries: [
        {
            entry_id: 1,
            user_id: 1,
            entry_feeling: 3,
            entry_title: 'Untitled Entry Number One',
            entry_body: 'Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-01T08:00:00.000Z',
            entry_edit_date: '2019-11-01T08:00:00.000Z'
        },
        {
            entry_id: 2,
            user_id: 1,
            entry_feeling: 3,
            entry_title: '',
            entry_body: 'Entry two - Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-02T09:00:00.000Z',
            entry_edit_date: '2019-11-02T09:00:00.000Z'
        },
    ],
};

export default TestHelpers;
