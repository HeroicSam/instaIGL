// Each object is its own strategy, indicating the strategy's map, what side it's for, 
// and how much money you need to execute the strat.

const t_dust_highbuy_strat1= {
    name: 'Long Take',
    map: 'dust2',
    side: 't',
    type: 'highbuy',
    items: {
        guns: {

            m4: 3,
            awp: 2
        },
        nades: {

            smokes: 5,
            flashes: 10,
            mollies: 3,
            frags: 2
        },
        equipment: {

            fullarmor: 5,
        },
    },
    instructions: {
        lineups: {

            smoke_essentials: ['longCross', 'ct_spawn'],
            flash_essentials: ['longDoors', 'longLong', 'a_site'],
            molly_essentials: ['car'],

            smoke_optional: ['longCorner', 'catWalk'],
            flash_optional: ['longCross'],
            molly_optional: ['bigBox', 'smallBox', 'elevator']
        },

        earlyRound: 'Rush long, throwing flashes over long doors for entry frag.',
        midRound: 'Assume control of long, clear car, execute long cross smokes and take site.',
        lateRound: 'Retake long, hold site.'
    },
};

const t_dust_ecobuy_strat1= {
    name: 'Rush B',
    map: 'dust2',
    side: 't',
    type: 'ecobuy',
    items: {
        guns: {

            mac10: 5,
        },
        nades: {

            smokes: 2,
            flashes: 3,
            mollies: 1,
        },

        equipment: {
        },
    },
    instructions: {
        lineups: {

            smoke_essentials: ['tuns_molly'],
            flash_essentials: ['b_tuns'],
            molly_essentials: ['window'],

            smoke_optional: ['b_doors', 'lurk_smoke'],
        },

        earlyRound: 'Rush B site with Mac-10s. Make sure to smoke the molly if CTs throw one into B tuns.',
        midRound: 'Upgrade guns where possible.',
        lateRound: 'Hold site.'
    },
};

module.exports = {t_dust_ecobuy_strat1, t_dust_ecobuy_strat1};