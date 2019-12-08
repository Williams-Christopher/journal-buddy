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
            id: 1,
            user_id: 1,
            entry_id: '1e0f1a1e-eca8-4b37-996d-4efbcbb94c32',
            feeling: 3,
            title: 'Untitled Entry Number One',
            body: 'Lorem ipsum dolor sit amet, etc.',
            privacy: 0,
            created: '2019-11-01T08:00:00.000Z',
        },
        {
            id: 2,
            user_id: 1,
            entry_id: 'e5bb0c7b-0175-4dba-891a-608f002d2e00',
            feeling: 3,
            title: '',
            body: 'Entry two - Lorem ipsum dolor sit amet, etc.',
            privacy: 0,
            created: '2019-11-02T09:00:00.000Z',
        },
    ],
};

export default TestHelpers;
