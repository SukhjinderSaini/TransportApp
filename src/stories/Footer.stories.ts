import Footer from "../components/Footer/Footer";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;
export const DefaultFooter: Story = {
  storyName: "Footer",
  tags: ["autodocs"],
  args: {},
};
