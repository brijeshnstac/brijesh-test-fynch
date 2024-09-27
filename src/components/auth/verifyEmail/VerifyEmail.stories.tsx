import type { Meta, StoryObj } from '@storybook/react';
import { defaultStyle } from '@/config/colorConfig';
import VerifyEmail from './VerifyEmail';
import Background from '../../background/Background';
import Card from '../../card/Card';

const meta: Meta<typeof VerifyEmail> = {
  component: VerifyEmail,
  title: 'auth',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const VerifyEmailPage: Story = {
  args: {},
  decorators: [
    Story => (
      <>
        <Background />
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            float: 'inline-end',
            marginTop: '-15px',
            height: '100vh',
            background: defaultStyle.cardBackground,
            width: defaultStyle.cardResponsiveWidth,
            overflow: 'auto',
            borderRadius: '22px',
            border: '0.2px solid #f5f4f430',
            position: 'relative',
            backdropFilter: 'blur(6px)',
          }}
          childern={<Story />}
        />
      </>
    ),
  ],
};
