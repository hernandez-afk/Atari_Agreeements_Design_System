import { CodeConnectJSON } from 'figma-code-connect'

export const codeMappings: CodeConnectJSON.Document = {
  version: 1,
  metadata: {
    figmaFileKey: '6KjkfUA8RPNgsPigjOzc6V',
    figmaUrl: 'https://figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System',
    title: 'Atari Agreements Design System',
  },
  components: [
    {
      name: 'Button',
      figmaId: 'Button',
      figmaUrl: 'https://figma.com/design/6KjkfUA8RPNgsPigjOzc6V/Atari-Agreements-Design-System',
      source: 'src/components/Button/Button.tsx',
      description: 'Customizable button component with multiple colors, saliency levels, and sizes',
      props: [
        {
          name: 'color',
          type: 'neutral | accent | ai | negative | warning | positive',
          description: 'Visual color variant',
          default: 'neutral',
        },
        {
          name: 'saliency',
          type: 'filled | outlined | transparent',
          description: 'Button prominence level',
          default: 'filled',
        },
        {
          name: 'size',
          type: 'big | small',
          description: 'Button size',
          default: 'big',
        },
        {
          name: 'icon',
          type: 'IconName',
          description: 'Optional icon to display',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether button is disabled',
          default: false,
        },
      ],
    },
    {
      name: 'Badge',
      figmaId: 'Badge',
      source: 'src/components/Badge/Badge.tsx',
      description: 'Status badge component with entry animation',
      props: [
        {
          name: 'variant',
          type: 'neutral | accent | ai | negative | warning | positive',
          description: 'Badge color variant',
          default: 'neutral',
        },
        {
          name: 'style',
          type: 'filled | subtle',
          description: 'Badge fill style',
          default: 'subtle',
        },
        {
          name: 'animate',
          type: 'boolean',
          description: 'Trigger entrance animation on mount',
          default: false,
        },
      ],
    },
    {
      name: 'SearchBar',
      figmaId: 'SearchBar',
      source: 'src/components/SearchBar/SearchBar.tsx',
      description: 'Searchable input with AI variant support',
      props: [
        {
          name: 'value',
          type: 'string',
          description: 'Input value',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          description: 'Change handler',
        },
        {
          name: 'variant',
          type: 'default | ai',
          description: 'Search bar style variant',
          default: 'default',
        },
      ],
    },
    {
      name: 'Icon',
      figmaId: 'Icon',
      source: 'src/components/Icon/Icon.tsx',
      description: 'Lucide React icon wrapper with size and status variants',
      props: [
        {
          name: 'name',
          type: 'IconName',
          description: '42 named icons available',
        },
        {
          name: 'size',
          type: 'small | medium | large',
          description: 'Icon size',
          default: 'medium',
        },
        {
          name: 'status',
          type: 'brown | black | white',
          description: 'Icon color',
          default: 'black',
        },
      ],
    },
    {
      name: 'Checkbox',
      figmaId: 'Checkbox',
      source: 'src/components/Checkbox/Checkbox.tsx',
      description: 'Accessible checkbox built on Radix UI with indeterminate support',
      props: [
        {
          name: 'checked',
          type: 'boolean | "indeterminate"',
          description: 'Checkbox state',
        },
        {
          name: 'onCheckedChange',
          type: '(checked: boolean) => void',
          description: 'Change handler',
        },
      ],
    },
    {
      name: 'Accordion',
      figmaId: 'Accordion',
      source: 'src/components/Accordion/Accordion.tsx',
      description: 'Animated accordion component built on Radix UI',
      props: [
        {
          name: 'items',
          type: 'Array<{ id: string; title: string; content: ReactNode }>',
          description: 'Accordion items',
        },
        {
          name: 'collapsible',
          type: 'boolean',
          description: 'Allow collapsing open items',
          default: true,
        },
      ],
    },
    {
      name: 'Header',
      figmaId: 'Header',
      source: 'src/components/Header/Header.tsx',
      description: 'App header with Atari branding, navigation, and search',
      props: [],
    },
    {
      name: 'EmptyState',
      figmaId: 'EmptyState',
      source: 'src/components/EmptyState/EmptyState.tsx',
      description: 'Empty state component with three variants: no-data, no-results, error',
      props: [
        {
          name: 'variant',
          type: 'no-data | no-results | error',
          description: 'Empty state variant',
          default: 'no-data',
        },
        {
          name: 'onCta',
          type: '() => void',
          description: 'CTA button click handler',
        },
      ],
    },
    {
      name: 'Skeleton',
      figmaId: 'Skeleton',
      source: 'src/components/Skeleton/Skeleton.tsx',
      description: 'Loading skeleton with shimmer animation and table variant',
      props: [
        {
          name: 'rows',
          type: 'number',
          description: 'Number of skeleton rows for table variant',
          default: 5,
        },
      ],
    },
  ],
}
