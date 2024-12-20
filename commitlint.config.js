module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init',
        'build',
        'ci',
        'chore',
        'docs',
        'feat',
        'bugfix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'merge',
      ],
    ],
  },
};
