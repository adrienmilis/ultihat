# -*- coding: utf-8 -*-
{
    "name": "ultihat",
    "summary": "Ultihat SaaS",
    "author": "miad",
    "category": "Uncategorized",
    "version": "19.0.1.0.0",
    "depends": ["contacts"],
    "data": [
        # models
        "models/res_partner.xml",
        "models/x_team_maker.xml",
        "models/x_team.xml",
        # views
        "views/x_team_maker_views.xml",
        "views/res_partner_views.xml",
        # security
        "security/ir.model.access.csv",
        "security/ir_rule.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "ultihat/static/src/js/team_maker_form_controller.js",
        ]
    },
}
