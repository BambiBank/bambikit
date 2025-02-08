import type { Meta, StoryObj } from '@storybook/react';
import { ConnectButton } from './ConnectButton';

const meta: Meta<typeof ConnectButton> = {
  title: 'Components/ConnectButton',
  component: ConnectButton,
};

export default meta;
type Story = StoryObj<typeof ConnectButton>;

export const Default: Story = {
  args: {
    // Add any default props here
  },
};
