import js from '@eslint/js';
import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // 该配置项 告诉 ESLint，我们拓展了哪些指定的配置集
  // eslint:recommended : 该配置集是 ESLint 内置的“推荐”，它打开一组小的、合理的规则，用于检查众所周知的最佳实践。
  // @typescript-eslint/recommended : 该配置集是 typescript-eslint 的“推荐”，它与 eslint:recommended 相似，但它启用了特定于 TS 的规则。
  // @typescript-eslint/eslint-recommended : 该配置集禁用 eslint:recommended 配置集中已经由 TS 处理的规则，防止 ESLint 和 TS 之间的冲突。
  // extends: [
  //   'eslint:recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  // ],
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/', 'pnpm-lock.yaml', '**/*.config.js'], // 根据你的 .eslintignore 文件内容添加

    languageOptions: {
      parser: tsEslintParser, // 默认情况下，ESLint 使用其内置的 Espree 解析器，该解析器与标准 JS 运行时 和 版本兼容，而我们需要将 TS 代码解析为 ESLint 兼容的AST，所以此处我们使用 @typescript-eslint/parser。
    },

    // 该配置项指示要加载的插件，这里
    // @typescript-eslint 插件使得我们能够在我们的存储库中，使用 typescript-eslint 包定义的规则集。
    plugins: { '@typescript-eslint': tsEslintPlugin },
  },
];
