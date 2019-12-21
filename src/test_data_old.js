/*
    Values:
        entry_feeling:  1 - Very down
                        2 - Down
                        3 - Normal / Even (Defualt)
                        4 - Happy
                        5 - Very happy

        entry_privacy:  0 - Private (Defualt)
                        1 - Public
*/
const testData = {
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
        {
            entry_id: 3,
            user_id: 1,
            entry_feeling: 4,
            entry_title: 'Untitled Entry Number 3',
            entry_body: 'Entry three, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-02T09:00:30.000Z',
            entry_edit_date: '2019-11-02T09:30:00.000Z'
        },
        {
            entry_id: 4,
            user_id: 1,
            entry_feeling: 2,
            entry_title: 'Entry Number Four',
            entry_body: 'Entry four, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-02T09:00:30.000Z',
            entry_edit_date: '2019-11-02T09:30:00.000Z'
        },
        {
            entry_id: 5,
            user_id: 1,
            entry_feeling: 4,
            entry_title: 'Entry Number Five',
            entry_body: 'Entry five, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 1,
            entry_date: '2019-11-03T15:00:30.000Z',
            entry_edit_date: '2019-11-03T15:30:00.000Z'
        },
        {
            entry_id: 6,
            user_id: 1,
            entry_feeling: 5,
            entry_title: 'Entry Number Six',
            entry_body: 'Entry Six, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-03T17:00:00.000Z',
            entry_edit_date: '2019-11-03T17:00:00.000Z'
        },
        {
            entry_id: 7,
            user_id: 1,
            entry_feeling: 3,
            entry_title: 'Entry Number Seven',
            entry_body: 'Entry Seven, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-04T13:00:00.000Z',
            entry_edit_date: '2019-11-04T13:00:00.000Z'
        },
        {
            entry_id: 8,
            user_id: 1,
            entry_feeling: 3,
            entry_title: '',
            entry_body: 'Entry Eight, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-05T13:10:00.000Z',
            entry_edit_date: '2019-11-05T13:10:00.000Z'
        },
        {
            entry_id: 9,
            user_id: 1,
            entry_feeling: 3,
            entry_title: 'Entry Nine - Feeling Fine',
            entry_body: 'Entry Nine, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 1,
            entry_date: '2019-11-05T19:45:00.000Z',
            entry_edit_date: '2019-11-05T19:45:00.000Z'
        },
        {
            entry_id: 10,
            user_id: 1,
            entry_feeling: 1,
            entry_title: 'Entry Ten - Not so Zen',
            entry_body: 'Entry Ten, Lorem ipsum dolor sit amet, etc.',
            entry_privacy: 0,
            entry_date: '2019-11-06T10:05:00.000Z',
            entry_edit_date: '2019-11-06T10:05:00.000Z'
        },
    ],
    users: [
        {
            user_id: 1,
            user_email: 'cw@chriswillia.ms',
            user_password: 'nothingburger1',
        },
    ],

};

export default testData;
