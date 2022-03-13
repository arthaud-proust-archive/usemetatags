export default [
    {
        title: 'Informations du site',
        shortTitle: 'Site',
        name: 'site',
        fields: [
            {
                name: 'title',
                label: 'Titre'
            },
            {
                name: 'url',
                label: 'Url'
            },
            {
                name: 'lang',
                label: 'Langue',
            }
        ]
    },
    {
        title: 'Informations de la page',
        shortTitle: 'Page',
        name: 'page',
        fields: [
            {
                name: 'title',
                label: 'Nom'
            },
            {
                name: 'desc',
                label: 'Description'
            },
            {
                name: 'heroUrl',
                label: 'Url image preview'
            },
        ]
    },
    {
        title: 'Paramètres supplémentaires',
        shortTitle: 'En plus',
        name: 'more',
        fields: [
            {
                name: 'robots',
                label: 'Robots',
            },
            {
                name: 'subject',
                label: 'Sujet',
            },
            {
                name: 'author',
                label: 'Auteur'
            },
            {
                name: 'owner',
                label: 'Propriétaire'
            },
            {
                name: 'themeColor',
                label: 'Couleur du thème'
            },

        ]
    }
]