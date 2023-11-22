import Header from "../components/Header/Header";
import "../components/Header/Header.css";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultHeader: Story = {
  name: "DefaultHeader",
  storyName: "Header",
  tags: ["autodocs"],
};

export const ThemeHeader: Story = {
  name: "ThemeHeader",
  storyName: "Header",
  tags: ["autodocs"],
  args: {
    showThemeSwitch: true,
  },
};
