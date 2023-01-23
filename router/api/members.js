const express = require('express');

const router = express.Router();

const db = require('../../models');

const { Member } = db;

router.get('/', async (req, res) => {
    const { team } = req.query;
    if (team) {
        const teamMembers = await Member.findAll({
            where: { team },
            order:
                [
                    ['admissionDate', 'DESC'],
                ]

        });
        res.send(teamMembers); //res.send시 toJson메소드 자동으로 실행해서 dataValues프로퍼티만 담음 즉 실제로는 좀더 많은 프로퍼티를 가지고있다 라고 알아두자
    } else {
        const teamMembers = await Member.findAll();
        res.send(teamMembers);
    }
})

module.exports = router;