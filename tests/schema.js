'use strict';

export default {
    config: {
        id: 'index.json',
        type: 'object',

        properties: {
            name: {
                type: 'string',
                required: true
            },

            author: {
                type: 'string',
                required: true
            },

            types: {
                type: 'array',
                required: true,

                items: {
                    type: 'string'
                }
            },

            files: {
                type: 'array',
                required: true,

                items: {
                    properties: {
                        name: {
                            type: 'string'
                        },

                        info: {
                            type: 'string'
                        }
                    }
                }
            },

            dependencies: {
                type: 'array',

                items: {
                    type: 'string'
                }
            },

            repository: {
                type: 'object',
                required: true,

                items: {
                    properties: {
                        name: {
                            type: 'string'
                        },

                        info: {
                            url: 'string'
                        }
                    }
                }
            },

            licenses: {
                type: 'array',
                required: true,

                items: {
                    properties: {
                        type: {
                            type: 'string'
                        },

                        url: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },

    source: {
        id: 'index.js',
        type: 'array',

        items: {
            properties: {
                type: {
                    type: 'string',
                    required: true
                },

                name: {
                    type: 'string',
                    required: true
                }
            }
        }
    }
};
